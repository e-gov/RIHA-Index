---
title: Turvalisus
permalink: Turvalisus
---

# Turvalisus
{:.no_toc}

<p class='staatus'></p>

* TOC
{:toc}

## Ülevaade 

Käesolev leht esitab RIHA turvalisuse vaate. Leht ei esitata teavet, sh konkreetseid turvameetmeid, võimalikke nõrkusi jms, mille avalikustamine võiks kahjustada RIHA turvet.

Turvalisuse eesmärk on tagada, et RIHA andmed oleksid õiged, kättesaadavad ja kvaliteetsed. 

Teemal on puutumus [Andmekvaliteediga](Andmekvaliteet).

Juhindutakse [ISKE](https://www.ria.ee/ee/iske.html)-st, täiendades seda riskianalüüsiga jm asjakohaste turvataset tõstvate praktikatega.

Turvakäsitlus täieneb arenduse käigus.

Vt ka: [IT töökindlus ja turve](https://agiil.github.io/IT/Tookindlus).

## Lähtekohad

Turvalisuse tagamisel tuleb arvestada, et RIHA on tarkvararakendus, aga ühtlasi ka protsess ja organisatsioon:
- __RIHA rakendus__ on hajus, koosnedes keskselt, RIHA taristusse paigaldatud komponentidest, asutuste taristutesse paigaldatud komponentidest ja asutuste endi poolt arendatud, RIHA API standardile vastavatest liidestest.
- __RIHA protsess__ hõlmab RIHA käitamist, kasutamist, arendamist, nõuete haldust.
- __RIHA organisatsioon__ hõlmab RIA-t ja kõiki RIHAs andmeid loovaid asutusi.

## RIHA turvaklass

RIHA turvaklass on __K2T2S2__ ja turvatase on M.

Käideldavus (K). Käideldavuse nõue K2 on suuresti tingitud isikuandmete kaitse seadusest §25 ning RIA-sisesest teenustasemeleppest (edaspidi SLA).

Terviklus (T). Tervikluse nõue T2 on tingitud infosüsteemide andmevahetuskihi määrusest.

Konfidentsiaalsus (S). Olemasoleva RIHA S1 tase on põhjendatud sellega, et RIHA sisaldab infot asutusesiseseks kasutamiseks, juurdepääs teabele on lubatav juurdepääsu taotleva isiku õigustatud huvi korral.

Uue RIHA S2 tase on põhjendatud sellega, et RIHA sisaldab avalikku infot, infot asutusesiseseks kasutamiseks ning  teavet, mille kasutamine on lubatud ainult teatud kindlatele kasutaja gruppidele ning juurdepääs teabele on lubatav juurdepääsu taotleva isiku õigustatud huvi korral. Ligipääse haldab RIHA teenusehaldur või infosüsteemide omanikud, asutused ise. AK tasemega on näiteks isikuandmed ja tehnilist kirjeldust sisaldav dokumentatsioon.  

Uue RIHA pääsuõiguste süsteemis võimaldatakse ligipääsu õiguste andmist kasutajagruppide kaupa läbi erinevate tasandite (asutus, kasutajagrupp,  roll jne) . 

Riigisaladus puudub.  Juurdepääsupiiranguta andmed/ dokumendid on avalikult kättesaadavad RIHA veebiliidese kaudu.

Uue RIHA loomisel määratakse maksimaalne konfidentsiaalsuse  tase, kuna hilisem süsteemi muutmine võib osutuda oluliselt kallimaks.

RIHA moodulite arendamise järgselt viiakse perioodiliselt läbi turvaanalüüs, mille raames kontrollitakse seatud tasemed üle. 

## Riskianalüüs

Lähtudes [IT-riskianalüüsi koostamise juhendi ETOdele](https://www.ria.ee/ee/kii-alusdokumendid.html) terminoloogiast, teeme lihtsustatud riskianalüüsi.

__Oht__ - sündmus või asjaolu, mis võib põhjustada katkestust või kahjustada infovara muul viisil

__Risk__ – määramatust arvestav hinnang ohule. Infoturvariski väljendatakse sageli infoturvasündmuse tagajärgede ja selle sündmuse võimalikkuse kombinatsioonina

Ohud ja riskid

| Tegevus  | Oht - Tagajärg - Tõenäosus - Turvameetmed |
|-----------|------------------------------------|
| 1 Infosüsteemide kirjeldamine RIHAs | 1.1 Omanik ei kirjelda hoolikalt → Kirjeldus mittetäielik, mitteajakohane, v-o isegi eksitav (30%) → 1, 2 |
|          | 1.2 Kirjeldama pääseb vastava õiguseta isik → Ebaõiged või fake-andmed →   |
|          | 1.3 Lokaalses RIHAs pääseb kirjeldama vastava õiguseta isik → Ebaõiged või fake-andmed, mis jõuavad ka kesksüsteemi (?%) → 5 |
| 2 Kirjelduste kogumine kesksüsteemi | 2.1 Koguja võtab valed andmed → lokaalselt kirjeldatud andmed jäävad kogumata või kogutakse fake-andmeid (?%) →  3, 4 |

Meetmed

| Nr     |   Turvameede                                     |
|:------:|--------------------------------------|
| 1 | Tarkvaralised automaatkontrollid RIHA kontrollimoodulis |
| 2 | "Teata puudulikest andmetest" (vt [Teavitused](Teavitused)) |
| 3 | Lokaalse RIHA aadressi edastamine turvalise kanali kaudu |
| 4 | Lokaalse RIHA aadressi õigsuse perioodiline kontroll |
| 5 | Turvajuhendi koostamine lokaalse RIHA paigaldajale |



