---
title: Pääsuhaldus
permalink: Paasuhaldus
---

# Pääsuhaldus

***Eesmärk.*** <span class='u'>Minimaalne:</u> RIHA kesksüsteemi kasutajatele pääsuõiguste andmiseks hädavajaliku teabe hoidmine koos selle haldamisega ja pakkumisega masinliidese kaudu RIHA kesksüsteemi rakendusele 

<span class='u'>Maksimaalne:</u> Masinloetav, hallatud, turvaline ja ajakohane organisatsioonide, isikute, rollide ja pääsuõiguste kataloog riigi infosüsteemi mitmesuguste haldus- , koordineerimis-, käitus- ja teabetoimingute ning vastavate e-teenuste tagamiseks. („Kui sind ei ole RIS õiguste kataloogis, siis sa pole riigi IT-s tegija“).

***Kasutajad:***

- RIHA teenusehaldur, läbi LDAP klientrakenduse (teatud toiminguid võib teha ka RIA kasutajatoe spetsialist –  protseduuriline otsus)
- RIHA kesksüsteem, läbi masinliidese, LDAP protokolliga.

***Tehnoloogiline teostus:***

- OpenLDAP server, paigaldatud RIA taristus
- LDAP klient, paigaldatud
- RIHA kesksüsteem (autentimis- ja autoriseerimiskomponent)

***Kataloogikirjed:***

- _directory entries_ on kaht tüüpi objektidele: isikutele (users) ja organisatsioonidele (organisations)
- organisatsooni atribuudid:
  - `registrikood`, `nimetus`, `õiguslik vorm` (vastavalt õiguslike vormide klassifikaatorile)
- isiku atribuudid:
  - `isikukood`, `nimi`, `e-posti aadress`
- isiku `rollid` (ja vastavad õigused), kirjeldatakse gruppidena:
  - `kirjeldaja` (_producer_)
  - `hindaja` (_approver_)

NB! Roll on alati seotud konkreetse organisatsiooniga.

***Kasutuslood:***
1 Organisatsiooni kataloogikirje haldus<br>
1a  Organisatsiooni lisamine<br>
1b  Organisatsiooni eemaldamine<br>
1c  Organisatsiooni nime muutmine<br>
RIHA teenusehaldur, organisatsioonist e-postiga saadetud taotluse alusel, kasutades LDAP klientrakendust, lisab, eemaldab või muudab organisatsiooni kataloogikirje.

2  Isiku kataloogikirje haldus<br>
2 a Isiku lisamine<br>
2 b Isiku eemaldamine<br>
2 c Isikuandmete muutmine<br>
RIHA teenusehaldur, organisatsioonist e-postiga saadetud taotluse alusel, aga ka muul RIHA eesmärkidega kokkukuuluval põhjusel (olulise isiku võib lisada organisatsiooni taotluseta), kasutades LDAP klientrakendust, lisab, eemaldab või muudab isiku kataloogikirje.

3  Rollihaldus<br>
NB! Roll on alati seotud konkreetse organisatsiooniga.<br>
3.1  Kirjeldaja<br>
3.1a  Kirjeldaja rolli andmine<br> 
3.1b  Kirjeldaja rolli äravõtmine<br>
3.2  Hindaja<br>
3.2a  Kirjeldaja rolli andmine<br> 
3.2b  Kirjeldaja rolli äravõtmine<br>
RIHA teenusehaldur, kasutades LDAP klientrakendust, valides isiku isikute loetelust või sisestades isiku nime või isikukoodi ja seejärel rolli, teostab haldustoimingu.

4 Isiku rollide kindlakstegemine<br>
4.1 RIHA teenusehaldur, kasutades LDAP klientrakendust, valides isiku isikute loetelust või sisestades isiku nime või isikukoodi, saab loetelu isiku rollidest.<br>
NB! Roll on alati seotud konkreetse organisatsiooniga.<br>
4.2  RIHA kesksüsteem (autentimismoodul), pöördudes LDAP protokolli kohase liidese kaudu, esitab isikukoodi ja saab vastu isiku kõigi rollide nimekirja. Iga rolli juures näitatakse organisatsiooni registrikood, millega roll on seotud.

5 Organisatsiooniga seotud isikute kindlakstegemine<br>
RIHA teenusehaldur, valides või sisestades organisatsiooni nime või registrikoodi, saab nimekirja organisatsiooniga seotud isikutest, sh iga isiku rollidest.

6 Organisatsioonide kindlakstegemine<br>
RIHA teenusehaldur, kasutades LDAP klientrakendust, saab nimekirja kõigist organisatsioonidest, mille kohta kataloogis andmeid hoitakse

7 Isikule tema rollide teadaandmine<br>
Isik, logides sisse RIHA kesksüsteemi, saab teavet kas ja millised on tema rollid ja rollidest tulenevad pääsuõigused.

Perspektiivsed kasutuslood (ei ole skoobis, kuid laiendamisega arvestada):<br>
8 Uute rollide lisamine (nt arhitekt, äriomanik, arendaja jne)<br>
9 Organisatsioonide omavahelised valitsemissuhted (haldusalad)<br>
10 Organisatsiooni elukäigu keerukamate muutuste tugi<br>
- organisatsioonide ühendamine<br>
- organisatsioonide jagamine<br>
- organisatsiooni likvideerimine (inimeste üleminekuga)<br>
11 Organisatsioonide keerukam liigitusskeem<br>
- erinevad liigitusalused<br>

