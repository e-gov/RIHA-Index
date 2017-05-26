---
title: eIDAS konnektorteenus. Liidestumisjuhend
permalink: eIDAS-Konnektorteenus
sidebar: false
alttitle: eIDAS konnektorteenus
---

<div class='rem'>Arvestada. et kuna Euroopa Komisjoni CEF veebisüsteem on muutmisel, võivad viited vajada ajakohastamist.</div>

# Liidestumisjuhend
{:.no_toc}

* TOC
{:toc}

## Ülevaade

***eIDAS konnektorteenus***, edaspidi ka _teenus_, on RIA poolt käitatav taristuteenus, mis võimaldab Eesti asutuse autentimisteenusel teostada EL teise liikmesriigi eID kasutaja autentimist. Tehniliselt teostab teenust RIA taristusse paigaldatud eIDAS Connector servertarkvara, mis liidestatakse ühelt poolt asutuse autentimisrakendusega ja teiselt poolt EL teiste riikide eIDAS taristutega.

Käesolev juhend esitab teenuse kasutuselevõtmiseks vajalikud tööd ja teabe.

## Mõisted

***eIDAS konnektorteenus*** - RIA poolt käitatav taristuteenus, mis võimaldab Eesti asutuse autentimisteenusel teostada EL teise liikmesriigi eID kasutaja autentimist. 

***autentimislahendus*** - asutuse poolt käitatav tarkvarakomponent, mis korraldab asutuse e-teenuse kasutaja (kes võib olla nii Eesti kui ka EL teise liikmesriigi eID kasutaja) isikusamasuse tuvastamist, suheldes selleks eIDAS konnektorteenusega.

***asutus*** - eIDAS konnektorteenust kasutav asutus.

## Teenuse kasutusvoog

```
                           autentimispäring
                               (SAML)
  ,+.
  `|'        +---------------        +---------------+
  /|\        |    Asutuse    +---->  |     eIDAS     |       EL
   +         |  autentimis-  |       |   konnektor-  |      eIDAS-
  / \        |    lahendus   |  <----+     teenus    |     taristu
             +---------------+       +---------------+
KASUTAJA
                          autentimisvastus
                               (SAML)
```

eIDAS konnektorteenus on ühendajaks asutuse autentimislahenduse ja EL eIDAS-taristu vahel.

## Tööd

Liidestumiseks tuleb teostada järgmised tööd:

|            |  Asutus     | RIA               |
|---------|:------------:|:---------------:|
|  1  Autentimislahenduse tarkvara loomine või täiendamine |  +  |   |
|  2  Autentimislahenduse paigaldamine | + |   |
|  3  Autentimislahenduse häälestamine ühendumiseks RIA-s asuva eIDAS Connector serveriga | + | + |
| 4 Liidese testimine | + | + |
| 5 Liidese käikulaskmine | + | + |

## Tehniline ülevaade

Autentimislahenduse ja eIDAS konnektorteenuse vaheline suhtlus on osa eIDAS autentimisvoost (vt lisa 1), hõlmates sellest kahte sõnumisaatmist:

- autentimispäringut esitava SAML tõendi (_token_) saatmine autentimislahendusest eIDAS konnektorteenusele (joonisel lisas 1 nr 4);
- autentimisvastust esitava SAML tõendi saatmine eIDAS konnektorteenuselt autentimislahendusele (joonisel lisas 1 nr 9).

Sõnumisaatmise teostatakse veebisirvija ümbersuunamise (_redirect_) abil.

Sõnumivahetus autentimislahenduse ja eIDAS konnektorteenuse vahel toimub eIDAS tehnilise spetsifikatsiooni v 1.1 [eID eIDAS profile] alusel.

## Sõnumivormingud

Vahetatavad sõnumid peavad vastama eIDAS sõnumivormingutele, vastavalt spetsifikatsioonides "eIDAS SAML Message Format" (v 1.1) [eIDAS Message Format] ja "eIDAS SAML Attribute Profile" (v 1.1) [eIDAS Attribute Profile] määratletule.  

## Demorakendus

Teenusest arusaamist võib hõlbustada demorakendusega tutvumine. Demorakenduses [https://eidastest.eesti.ee/SP/populateIndexPage](https://eidastest.eesti.ee/SP/populateIndexPage) saab läbi mängida kasutaja autentimisvoo. Lähema teabe saamiseks demorakenduse kasutamise ja lähtekoodi kohta pöörduda RIA poole.  

## Taustateave

[eID eIDAS profile] European Commission. eID eIDAS profile. [https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile]](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile). Technicals specifications.

[eIDAS SAML Attribute Profile] [eIDAS SAML Attribute Profile](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile?preview=/23003348/35218928/eIDAS%20SAML%20Attribute%20Profile%20v1.1_2.pdf).

[eIDAS SAML Message Format] [eIDAS SAML Message Format](https://joinup.ec.europa.eu/sites/default/files/eidas_message_format_v1.0.pdf).

[] Riigi Infosüsteemi Amet (2016) eIDAS Node arhitektuur.

## Lisa 1 eIDAS autentimisvoog

![](img/Autentimisvoog.PNG)







