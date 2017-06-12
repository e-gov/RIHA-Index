---
title: Autentimisteenused
sidebar: false
permalink: Autentimisteenused
---

# Siseriiklikud ja eIDAS autentimisteenused

## Ülevaade

| Nr | MUST/NICE | lühinimetus | nimetus | sihtrühm |
|-----|-----------|-------------|---------|----------|
|  1   | eIDAS MUST | "eIDAS väljaminev" (eIDAS outbound) | eIDAS autentimispäringute vahendusteenus välisriikidesse | Eesti asutus, kes tahab e-teenust pakkuda välisriigi eID kasutajale |
|  2   | eIDAS MUST | "eIDAS sissetulev" (eIDAS inbound)  | välisriikidest saabuvate eIDAS autentimispäringute täitmine | välisriigi asutus, kes soovib Eesti eID kasutajale osutada e-teenust, välisriigi eIDAS konnektorteenuse kaudu |
|  3   | eIDAS mugavus-teenus | eIDAS konnektorteenus Eesti asutusele |  | välis-eID kasutajaid teenindav Eesti asutus, kes eelistab Eesti eIDAS konnektorteenusega liidestuda otse (nt RIK) |
|  4   | Eesti mugavus-teenus | Siseriiklik autentimisteenus | Eesti e-teenust Eesti eID-ga kasutava inimese autentimine | e-teenust pakkuv Eesti asutus, kes Eesti eID kasutaja autentimist eelistab teenusena sisse osta |
|  5   | Eesti MUST | SSO teenus |  | Eesti e-teenuse osutaja, kes soovib, et teabeväravast eesti.ee suunatakse kasutaja e-teenusesse autenditult; Eesti asutused, kes soovivad födereerunult pakkuda Eesti eID kasutajale SSO kasutajakogemust |

## Siseriiklik autentimisteenus

***Alternatiivnimi (-nimed): *** isikutuvastusportaal, elektrooniline isikutuvastusportaal, eesti.ee autentimisteenus, RIA autentimisteenus

***Teenuse kasutusvoog:***
1. Eesti eID kasutaja soovib sisse logida Eesti asutuse e-teenusesse.
2. Kasutaja suunatakse "isikutuvastusportaali", kus ta autenditakse
3. Autenditud kasutaja suunatakse tagasi e-teenusesse.

***Standardid ja tehnoloogiad:*** ´OpenID Connect´ protokoll

***Arhitektuuriskeem:***

![](img/SRAuthN.PNG)