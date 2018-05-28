---
permalink: Arhitektuurikirjeldus
---

# RIHA arhitektuurikirjeldus
{: .no_toc}

- TOC
{:toc}

## Ülevaade 

Käesolev dokument kirjeldab RIHA ja selle vahetu ümbruse:
- osapooled ja komponendid
- teenused ja liidesed
- olulisemad sõltuvused.

RIHA, ametliku nimega riigi infosüsteemi haldussüsteem, [https://www.riha.ee](https://www.riha.ee)

## Teenused

RIHA pakub riigi infosüsteemi kataloogiteenust:
- kataloog hõlmab infosüsteeme ja X-tee alamsüsteeme
- süsteemikirjelduste sirvimine
- süsteemi kirjeldamine
- süsteemikirjelduste pakkumine masinliidese (API) kaudu
- hindajate tagasiside
- lisaks pakutakse "RIHA varamu" nime all asutustevahelise dokumendivahetuslahenduse metaandmekirjeldusi

Vt lähemalt: [Infosüsteemide kirjeldamine RIHA-s](https://abi.riha.ee/RIHAs-kirjeldamine) (abikeskuse tekst); [Kuidas muuta X-tee alamsüsteemi andmeid RIHAs?](https://abi.riha.ee/X-tee-alamsysteem)

## Masinliides

- RIHA arendatakse põhimõttel, et kõik kogutavad andmed peavad olema kättesaadavad masinliidese (API) kaudu.
- Enamgi veel, kasutaja poolt sirvikus sisestatud andmed kantakse andmehoidlasse samuti API kaudu.
- Masinliides on JSON RESTful vormingus.
- Masinliides kirjeldatakse OpenAPi (Swagger) vormingus. 

Vt: [RIHA masinliides](https://abi.riha.ee/APIabi) (abikeskuse tekst)

## Komponendid ja osapooled

### Organisatsioonid

organisatsioon | roll
---------------|-------
Riigi Infosüsteemi Amet (RIA) | haldab ja arendab RIHA
infosüsteemi omanik  | asutus, X-tee alamsüsteemi korral ka ettevõte jm organisatsioon, RIHA kirjeldatud süsteemi omanik
hindaja | asutus, kes hindab infosüsteemi vastavust nõuetele  

### Inimesed

inimene       | roll
--------------|----------
kasutaja      | RIHA kasutaja, ei pea olema autenditud  
kirjeldaja   | asutuse vm organisatsiooni töötaja, kes kirjeldab RIHAs infosüsteemi
hindaja | hindava asutuse töötaja, kes hindab RIHAs kirjeldatud infosüsteemi vastavust nõuetele 

### Tuumkomponendid

komponent | avalik                                       | repo | funktsioon
----------|----------------------------------------------|------|-------
Abikeskus | [https://abi.riha.ee](https://abi.riha.ee) | [https://e-gov.github.io/RIHA-Help](https://e-gov.github.io/RIHA-Help) | annab kasutajale abiteavet RIHA kasutamise kohta
RIHA-Browser |  | [https://github.com/e-gov/RIHA-Browser](https://github.com/e-gov/RIHA-Browser) | RIHA _front-end_, sirvikus käitatav üheleherakendus
RIHA-Storage | [https://www.riha.ee/api/v1](https://www.riha.ee/api/v1) | [https://github.com/e-gov/RIHA-Storage](https://github.com/e-gov/RIHA-Storage) | RIHA andmehoidla
RIHA-Assets | [https://varamu.riha.ee/](https://varamu.riha.ee/) | [https://github.com/e-gov/RIHA-Assets](https://github.com/e-gov/RIHA-Assets) | veebirakendus, mille kaudu tehakse avalikult kättesaadavaks asutustevahelises dokumendivahetuses kasutatavad varad ja ajutiselt (kuni klassifikaatorite mooduli valmimiseni) ka osad klassifikaatorid
Pääsuõiguste hoidla | - | - | sisekomponent kirjeldajate ja hindajate pääsuõiguste hoidmiseks, suhtlus pääsuõiguste hoidlaga toimub LDAP protokolliga 

## Arendust toetavad komponendid

komponent | avalik                                       | repo | funktsioon
----------|----------------------------------------------|------|-------
RIHA-Frontend | [https://e-gov.github.io/RIHA-Frontend](https://e-gov.github.io/RIHA-Frontend) | [https://github.com/e-gov/RIHA-Frontend](https://github.com/e-gov/RIHA-Frontend) | Kasutajaliidese disaini abivahend
RIHA-Experiments | | [https://github.com/e-gov/RIHA-Experiments](https://github.com/e-gov/RIHA-Experiments) | abirepo tehnoloogiate katsetamiseks

## "Ökosüsteemi" muud komponendid

komponent | avalik                                       | repo | funktsioon
----------|----------------------------------------------|------|-------
RIHA-Watch | [https://riha-watch.herokuapp.com/](https://riha-watch.herokuapp.com/) | [https://github.com/e-gov/RIHA-Watch](https://github.com/e-gov/RIHA-Watch) | kuvab viimase 10 päeva jooksul lisatud ja uuendatud infosüsteemid

## Sõltuvused

sõltuvus | versioon | komponent | märkused
---------|----------|-----------|----------
Ubuntu   | 16 LTS   | RIHA-Browser | 
JAVA 1.8 | OpenJDK  |           |
Apache Maven | 3    |           |
Node.js  | 4        |           |
npm      |          |           |
Angular  | 4        |           |
yarn     |          |           |
bower    |          |           |
Tomcat   |          |           |
OpenLDAP |          |           |




