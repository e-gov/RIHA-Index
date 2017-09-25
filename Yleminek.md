---
title: Üleminek
permalink: Yleminek
---

# Üleminek

<p class='staatus'>Üleminekul uuele RIHA-le on nii korralduslikud (organisatsioonilised), õiguslikud kui ka tehnilised aspektid. Praegu käsitleme siin eelkõige andmete ülekandmist vanast RIHAst uude.</p>

## Tehniline andmeülekanne

```
(variant 2)

   Importija +------------------>  O API
       ^                           |
       |                   +-------+------+
       +                   |              |
 Andmed JSON-kujul         | RIHA+Storage |
       ^                   | (Java)       |
       |                   |              |
       +                   +-------+------+
   Eksportija                      |
       ^                           |
       |                           |
+------+-------+           +-------v------+
|  Vana RIHA   |           |              |
|  PostgreSQL  |           | RIHA-Storage |
|  andmebaas   +---------> | PostgreSQL   |
|              |           | andmebaas    |
+--------------+   skript  +--------------+

                (variant 1)

```

## Üldnõuded andmete ülekandele

- __organisatsioonilises vaates:__
  - Infovarade omanikke tuleb andmete ülekandmisest teavitada. Kui ülekandmine nõuab omaniku tegevust, siis tuleb koostada ja kommunikeerida selged juhised.
- __tehnilises vaates:__
  - Ülekande protsess peab olema tõrke korral korratav.
  - Võimalust mööda peab ülekannet automatiseerima.
- Ülekanne peab olema võimalust mööda lihtne. Ideaalis omanik saab teate, et uues süsteemis on kõik valmis, andmed üle kantud.
- Eriti kooskõlastamiste andmed ei tohi üleminekul kaotsi minna (AKI nõue).
- Ülekande käigus ei tohi tekkida lubamatut juurdepääsu RIHAs hoitavale piiratud juurdepääsuga teabele.

## Võtmeküsimused

Ülekannet võib nii ärilises kui ka tehnilises plaanis lahendada mitut moodi. Kaardistame siinkohal võtmeküsimused ja perspektiivsed alternatiivid. Valiku tegemine jääb hilisemaks. Võtmeküsimused on:
- __mida üle kanda?__ (kõik, mitte midagi või osaliselt)
- __kas ülekanne siduda andmete korrastamisega?__
  - käsitsi korrastamisega?
  - automatiseeritud korrastamisega?
- __kas ülekanne siduda andmete teisendamisega uude formaati?__  
- __kuidas üle kanda?__ (vahefailiga, vana ja uue süsteemi liidestamisega vms)
- __millal üle kanda? (ühekorraga või järk-järgult)
- __kõik asutused korraga või eraldi?
- __millal vana süsteem sulgeda?__

## Ülekandeprotsess

0. __Ülekande eeldused.__
  - uus kirjeldusvorming on stabiliseerunud.
1. __Eksport__
  - Eksport vanast süsteemist, automaatse teisendamisega uude vormingusse. Omanikke tuleb selgelt teavitada, mis teisendusi tehakse. 
  - Eksporditud andmed salvestatakse RIHA uues [andmehoidjas](Andmehoidja). Kasutajate õigused RIHA [pääsuhaldussüsteemis](Paasuhaldus)
2. __Vana RIHA "külmutamine"__
  - Kõiki avalikke andmeid saab kasutajaliidese kaudu lugeda, kui ei saa muuta. Sisselogimine vanasse RIHAsse pole võimalik.

## Seonduv

- kasutuslugu "Andmeülekanne" [https://jira.ria.ee/browse/RIHAKB-73](https://jira.ria.ee/browse/RIHAKB-73)





