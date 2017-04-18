---
title: Sessioonihaldus
permalink: Sessioonihaldus
---

# Sessioonihaldus
{:.no_toc}

* TOC
{:toc}

Vt ka: [Kesksüsteem](Kesk), [Autentimine](Autentimine), [Autoriseerimine](Autoriseerimine).

## Mõisted

__Kasutaja__, RIHA inimkasutaja. 

__Kasutajarakendus__, veebisirvijasse laetud RIHA klientrakendus.

__SAP__, riigi personali- ja palgaarvestuse andmekogu, pakub X-tee vahendusel isiku asutuses töötamise fakti tuvastamise teenust. 

__Serveriteenus__, RIHA funktsionaalsust pakkuva komponendi serveripoolne osa.

__Sessioonitõend__ - (_session token_),  ![](img/JWT.PNG) JSON Web Token vormingus andmeüksus, mis tõendab kasutaja isikut ja õigusi. Sessioonitõend moodustatakse RIHA serveriteenuses Autoriseerija ning edastatakse Kasutaja veebisirvijasse, kus see salvestatakse küpsisena. Sessioonitõend on nn esitajatõend (_bearer token_), see pannakse kaasa iga HTTP pöördumisega Kasutajarakendusest Serveriteenuse poole.

## Üldskeem

```
                 +----------------------+     +-------------------+
                 | Kaardilugeja         |     | Opsüsteem         |
                 | +------------------+ |     | +---------------+ |
                 | |ID|kaart          | |     | |VEEBISIRVIJA   | |
                 | | +--------------+ | |     | | +-----------+ | |
                 | | |Isikutuvastuse| | |     | | | KASUTAJA- | | |
  eIDAS          | | |sert          | | |     | | | RAKENDUS  | | |
  autentimis-    | | +--------------+ | |     | | +-----------+ | |
  teenus         | +------------------+ |     | +---------------+ |
        ^        +----------------------+     +-------------------+
        |                                             |    ^
        |                                             |    |
        |                                         (1) |    |  (8)
        |                                             |    |
        |                                             |    |
+-------+-------------------------------------------------------+
|VEEBISERVER                                          |    |    |
|       |                                             |    |    |
|  +----+------+  (3)    +------------+    (2)    +---v----+--+ |
|  | AUTENTIJA | <-------+  AUTORI-   | <---------+SERVERI-   | |
|  |           |         |  SEERIJA   |           |TEENUS     | |
|  |           +-------> |            +---------> |           | |
|  +-----------+  (4)    +------------+    (7)    +-----------+ |
+---------------------------------------------------------------+
                           |     |
                           |     |
                    (5)    |     | (6)   Autoriseerimis-
          SAP  <-----------+     +-----> andmete hoidla
                                         (AD)

```
(1) HTTPS päringus pannakse kaasa sessioonitõend (päises `Authorization`)

(2) (uuesti/ümber-) autentimise-autoriseerimise päring

(3) vajadusel (uuesti-)autentimine

(4) isikukood, nimi

(5) pöördumine SAP-i isiku ja asutuse seose kindlakstegemiseks või kontrollimiseks

(6) pöördumine Autoriseerimisandmete hoidlasse isiku rollide v õiguste kindlakstegemiseks

(7) sessioonitõend (HTTPS päringu vastuses)

(8) sessioonitõend (HTTPS päringu vastuses)

__Eeldused__:
- arvutiga on ühendatud ID-kaardilugeja
- ID-kaart on lugejas
- kaardil on isikutuvastuse sert
-  kasutaja arvutis on ID-kaardi tarkvara
- on seadistatud ID-kaardiga isikutuvastuseks

`KASUTAJA:
- avab rakenduse https://riha.eesti.ee
„Logi sisse“
„Logi välja“
„Vali roll“
muu tegevus

VEEBISERVER:
- pärib TLS kätluse käigus kasutaja arvutist serdi
salvestab serdi keskkonnamuutujasse

SERVERITEENUS:
- kontrollib sessioonitõendit
- vajadusel suunab (uuesti/ümber) autentima/autoriseerima

AUTORISEERIJA:
- vajadusel suunab (uuesti-) autentima
- autoriseerib isiku
- lokaalse Autoriseerimisandmete hoidla ja/või SAP-i abil
koostab sessioonitõendi (JWT)
- edastab koostatud sessioonitõendi Serveriteenusele

AUTENTIJA:
- loeb veebiserveri keskkonnamuutujasse salvestatud sertifikaadist isikukoodi

## JSON Web Token (JWT) 

- Hea sissejuhatus on: [JSON Web Tokens are made for Microservices]( http://alexander.holbreich.org/jwt/)
- Testitokenite koostamiseks ja parsimiseks on lihtsaid veebipõhiseid tööriistu, nt: [http://calebb.net/](http://calebb.net/) 
JWT ametlik – ja väga hea veebileht: [https://jwt.io/](https://jwt.io/)
- Java teek JWT tõendite loomiseks: [https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)

## Sessioonitõend

Alljärgnevalt on esitatud kolm näidet (mis ühtlasi on kasutatavad  testandmetena). Selgitused:

- `iss` - __Issuer__ - tõendi väljaandja
- `iat` - __Issued At__ - tõendi väljaandmise aeg
- 'exp' - __Expiration Time__ - tõendi aegumise aeg
- `sub` - __Subject__ - füüsiline isik, kelle isikutuvastamise ja rolli(de) kindlakstegemise kohta tõend on välja antud
- `asutus` - registrikoodi omav juriidiline isik (riigi või KOV asutus, aga ka ettevõte või MTÜ), kelle nimel füüsiline isik tegutseb
- `rollid` - autoriseerimisel kindlakstehtud üks või mitu rolli; kui isikul ei ole ühtegi rolli, siis on loetelu tühi või element üldse puudub.

Näide 1

```json
{
   "iss":"RIHA autoriseerija",
   "iat":1492075975,
   "exp":1492680951,
   "sub":{
      "isikukood":"60107110134",
      "nimi":{
         "eesnimi":"Priit",
         "perekonnanimi":"Parmakson"
      }
   },
   "asutus":{
      "registrikood":"70006317",
      "nimetus":"Riigi Infosüsteemi Amet"
   }
}
```

Näide 2

```json
{
   "iss":"RIHA autoriseerija",
   "iat":1492076058,
   "exp":1492680951,
   "sub":{
      "isikukood":"66107140324",
      "nimi":{
         "eesnimi":"Eero",
         "perekonnanimi":"Vegmann"
      }
   },
   "asutus":{
      "registrikood":"70006317",
      "nimetus":"Riigi Infosüsteemi Amet"
   },
   "rollid":[
      "roll":"HINDAJA"
   ]
}
```

Näide 3

```json
{
   "iss":"RIHA autoriseerija",
   "iat":1491903351,
   "exp":1491989751,
   "sub":{
      "isikukood":"60107110134",
      "nimi":{
         "eesnimi":"Eero",
         "perekonnanimi":"Vegmann"
      }
   },
   "asutus":{
      "registrikood":"70006317",
      "nimetus":"Riigi Infosüsteemi Amet"
   },
   "rollid":[
      "roll":"HINDAJA"
   ]
}
```
