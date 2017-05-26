---
title: eIDAS konnektorteenus. Liidestumisjuhend
permalink: eIDAS-Konnektorteenus
sidebar: false
alttitle: eIDAS konnektorteenus
---

# Liidestumisjuhend
{:.no_toc}

* TOC
{:toc}

## 1 Ülevaade

_eIDAS konnektorteenus_, edaspidi ka _teenus_, on RIA poolt käitatav taristuteenus, mis võimaldab Eesti asutuse autentimisrakendusel autentida EL teise liikmesriigi eID kasutajat.

Tehniliselt teostab teenust RIA taristusse paigaldatud _eIDAS Connector servertarkvara_, mis liidestatakse ühelt poolt asutuse autentimisrakendusega ja teiselt poolt EL teiste riikide eIDAS taristutega.

Käesolev juhend on suunatud teenust kasutavale asutajale ja esitab teenuse kasutuselevõtmiseks vajaliku teabe ja tööd.

## 2 Mõisted

_eIDAS konnektorteenus_ - RIA poolt käitatav taristuteenus, mis võimaldab Eesti asutuse autentimisteenusel teostada EL teise liikmesriigi eID kasutaja autentimist. 

_autentimisrakendus_ - asutuse poolt käitatav tarkvarakomponent, mis korraldab asutuse e-teenuse kasutaja (kes võib olla nii Eesti kui ka EL teise liikmesriigi eID kasutaja) autentimist (isikusamasuse tuvastamist), suheldes selleks eIDAS konnektorteenusega.

_asutus_ - eIDAS konnektorteenust kasutava autentimisrakenduse omanikasutus.

## 3 Tehniline ülevaade

## 3.1 Teenuse kasutusvoog

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

eIDAS konnektorteenus on ühendajaks asutuse autentimisrakenduse ja EL eIDAS-taristu vahel.

Autentimisrakenduse ja eIDAS konnektorteenuse vaheline suhtlus on osa eIDAS autentimisvoost (vt lisa 1), hõlmates sellest kahte sõnumiedastust:

- autentimispäringut esitava SAML tõendi (_token_) saatmine autentimisrakendusest eIDAS konnektorteenusele (vt joonisel lisas 1 sõnumiedastus nr 4);
- autentimisvastust esitava SAML tõendi saatmine eIDAS konnektorteenuselt autentimisrakendusele (vt joonisel lisas 1 sõnumiedastus nr 9).

Sõnumiedastus teostatakse veebisirvija ümbersuunamise (_Re-direct_) abil.

## 3.2 Tehniline spetsifikatsioon

Sõnumivahetus autentimisrakenduse ja eIDAS konnektorteenuse vahel teostatakse vastavalt eIDAS tehnilisele spetsifikatsioonile v 1.1 [eID eIDAS profile]. Vt jaotis "Normatiivdokumendid".

Vahetatavad sõnumid ja nende töötlusreeglid peavad vastama eIDAS nõuetele, vastavalt spetsifikatsioonides "eIDAS SAML Message Format" (v 1.1) [eIDAS Message Format] ja "eIDAS SAML Attribute Profile" (v 1.1) [eIDAS Attribute Profile] määratletule.  

## 3.3 Normatiivdokumendid

Käesoleva jaotise dokumentidega tutvumine ja nende järgimine autentimisrakenduse liidese mõlemas otsas on kohustuslik.

Märkus. Euroopa Komisjoni CEF veebisüsteem on muutmisel (mai 2017). Seetõttu võivad mõned viited tulevikus vajada ajakohastamist.

[eID eIDAS profile] European Commission. ***eID eIDAS profile***. [https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile). Technical specifications.

[eIDAS SAML Attribute Profile] ***eIDAS SAML Attribute Profile***. [https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile?preview=/23003348/35218928/eIDAS%20SAML%20Attribute%20Profile%20v1.1_2.pdf](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eID+eIDAS+profile?preview=/23003348/35218928/eIDAS%20SAML%20Attribute%20Profile%20v1.1_2.pdf).

[eIDAS SAML Message Format] ***eIDAS SAML Message Format***. [https://joinup.ec.europa.eu/sites/default/files/eidas_message_format_v1.0.pdf](https://joinup.ec.europa.eu/sites/default/files/eidas_message_format_v1.0.pdf).

## 4 Liidestamistööd

Liidestamiseks tuleb teostada järgmised tööd:

|            |  Asutus     | RIA               |
|---------|:------------:|:---------------:|
|  1  Autentimisrakenduse tarkvara loomine või täiendamine |  +  |   |
|  2  Autentimisrakenduse paigaldamine ja häälestamine ühendumiseks RIA-s asuva eIDAS Connector serveriga | + |   |
| 3 Liidese testimine | + | + |
| 4 Liidese käikulaskmine | + | + |

## 4.1 Autentimisrakenduse tarkvara loomine või täiendamine

Teenusest arusaamist võib hõlbustada demorakendusega tutvumine. Demorakenduses saab läbi mängida kasutaja autentimisvoo. Demorakenduse lähtekoodi koos dokumentatsiooniga saab alla laadida CEF veebilehelt (demo SP) [eIDAS Node tarkvara].

Tutvuda saab ka RIAs ülespandud demorakendusega, selle URL on:

`https://eidastest.eesti.ee/SP/populateIndexPage`

## 4.2 Autentimisrakenduse häälestamine

Testimiseks kasutada eIDASe konnektorteenuse testkeskonda. Testimise autentimispäringuid vastuvõtva teenusepunkti URL on: 

`https://eidastest.eesti.ee/EidasNode/ServiceProvider`

Autentimisrakendus ja teenus suhtlevad sertifikaatide abil. Sertifikaatide vahetamiseks pöörduda RIA poole.

## 4.3 Liidese testimine

Üksikasjade kohta pöörduda RIA poole.

## 4.4 Liidese käikulaskmine

Teenuse avamiseks toodangukeskkonnas peab teenus olema testitud. Toodangukeskkonnas suhtlevad autentimisrakendus ja teenus sertifikaatide abil. Sertifikaatide vahetamiseks pöörduda RIA poole.

## 5 Teatmelised dokumendid

Käesoleva jaotise dokumendid ja tarkvara võivad olla kasulikud teenusest ja selle kontekstist paremaks arusaamiseks ning autentimisrakenduse arenduses. Kuid tutvumine ja kasutamine ei ole tingimata vajalik.

[eIDAS Node arhitektuur] Riigi Infosüsteemi Amet (2016) ***eIDAS Node arhitektuur***. Tutvumiseks pöörduda RIA poole.

[eIDAS Node tarkvara] European Commission. ***eIDAS-Node***. [https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eIDAS-Node](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eIDAS-Node).

<div style="margin-bottom: 4rem;">&nbsp;</div>

## LISA 1 eIDAS autentimisvoog

Allolev joonis esitab eIDAS autentimisvoo. Lähemalt vt [eIDAS Node arhitektuur].

![](img/Autentimisvoog.PNG)







