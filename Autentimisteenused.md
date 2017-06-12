---
title: Autentimisteenused
sidebar: false
alttitle: Siseriiklikud ja eIDAS autentimisteenused
permalink: Autentimisteenused
---

## Ülevaade

Käesolev dokument annab ülevaate RIAs arendatavatest autentimisteenustest. Hõlmatud on nii siseriiklikud kui ka piiriülesed (eIDAS) teenused. Iga teenus on kirjeldatud profiiliga, mis sisaldab:
a) teenuse identifikaatorit (koodnimetust); b) lühinimetust; c) täispikka nimetust; d) alternatiivnimetusi; e) sihtrühma lühikirjeldust; f) MUST/NICE TO HAVE liigitust; g) teenuse kasutusvoo ülevaatlikku kirjeldust; h) standardeid ja tehnoloogiaid (märksõna tasandil); i) kõrgvaatelist arhitektuurijoonist; j) teenuse olulisi omadusi (märksõna tasandil).

| Id | lühinimetus | nimetus | alternatiiv-nimetused | sihtrühm | MUST/NICE |
|:---:|:---------:|:-----------:|:-------:|:--------:|
|  1   | "eIDAS väljaminev" (_eIDAS outbound_) | <span style='Q'>eIDAS autentimispäringute vahendusteenus välisriikidesse</span> | RIA eIDAS Node | Eesti asutus, kes tahab e-teenust pakkuda välisriigi eID kasutajale | eIDAS MUST |
|  2   | "eIDAS sissetulev" (_eIDAS inbound_)  | <span style='Q'>välisriikidest saabuvate eIDAS autentimispäringute täitmise teenus</span> | RIA eIDAS Node | välisriigi asutus, kes soovib Eesti eID kasutajale osutada e-teenust, välisriigi eIDAS konnektorteenuse kaudu | eIDAS MUST |
|  3   | eIDAS konnektorteenus | <span style='Q'>eIDAS konnektorteenus Eesti asutusele</span> | RIA eIDAS Node | välis-eID kasutajaid teenindav Eesti asutus, kes eelistab Eesti eIDAS konnektorteenusega liidestuda otse (nt RIK) | eIDAS mugavus |
|  4   | <span style='Q'>SSO teenus</span> | <span style='Q'>Ühekordse sisselogimise teenus</span> |  | Eesti e-teenuse osutaja, kes soovib, et teabeväravast eesti.ee suunatakse kasutaja e-teenusesse autenditult; Eesti asutused, kes soovivad födereerunult pakkuda Eesti eID kasutajale SSO kasutajakogemust | MUST (Eesti) |
|  5   | <span style='Q'>Siseriiklik autentimisteenus</span> | Eesti e-teenust Eesti eID-ga kasutava inimese autentimise teenus | isikutuvastusportaal, elektrooniline isikutuvastusportaal, eesti.ee autentimisteenus, RIA autentimisteenus | e-teenust pakkuv Eesti asutus, kes Eesti eID kasutaja autentimist eelistab teenusena sisse osta |  mugavus (Eesti) |

## eIDAS autentimispäringute vahendusteenus välisriikidesse

## Välisriikidest saabuvate eIDAS autentimispäringute täitmise teenus

## eIDAS konnektorteenus Eesti asutusele

## Ühekordse sisselogimise teenus

## 5 Siseriiklik autentimisteenus

***Teenuse kasutusvoog:*** 1. Eesti eID kasutaja soovib sisse logida Eesti asutuse e-teenusesse; 2. Kasutaja suunatakse "isikutuvastusportaali", kus ta autenditakse; 3. Autenditud kasutaja suunatakse tagasi e-teenusesse.

***Standardid ja tehnoloogiad:*** ´OpenID Connect´ protokoll.

***Arhitektuurijoonis:***

![](img/SRAuthN.PNG)