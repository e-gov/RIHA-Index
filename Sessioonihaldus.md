---
title: Sessioonihaldus
permalink: Sessioonihaldus
---

# Sessioonihaldus

![](img/JOONIS-1204-03.PNG)

Vt ka: [Autentimine](Autentimine), [Autoriseerimine](Autoriseerimine).

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
         "eesnimi":"Priit",
         "perekonnanimi":"Parmakson"
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
