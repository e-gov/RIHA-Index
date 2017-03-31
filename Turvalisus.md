---
title: Turvalisus
permalink: Turvalisus
---

# Turvalisus

## Ülevaade 

Käesolev leht esitab RIHA turvalisuse vaate. Ei esitata teavet, sh konkreetseid turvameetmeid, võimalikke nõrkusi jms, mille avalikustamine võiks kahjustada RIHA turvet.

Turvalisuse eesmärk on tagada, et RIHA andmed oleksid õiged, kättesaadavad ja kvaliteetsed. 

Teemal on puutumus [Andmekvaliteediga](Andmekvaliteet).

Juhindutakse [ISKE](https://www.ria.ee/ee/iske.html)-st, .

## Lähtekohad

Turvalisuse tagamisel tuleb arvestada, et RIHA on tarkvararakendus, aga ühtlasi ka protsess ja organisatsioon:
- __RIHA rakendus__ on hajus, koosnedes keskselt, RIHA taristusse paigaldatud komponentidest, asutuste taristutesse paigaldatud komponentidest ja asutuste endi poolt arendatud, RIHA API standardile vastavatest liidestest.
- __RIHA protsess__ hõlmab RIHA käitamist, kasutamist, arendamist, nõuete haldust.
- __RIHA organisatsioon__ hõlmab RIA-t ja kõiki RIHAs andmeid loovaid asutusi.

## Riskianalüüs

Lähtudes [IT-riskianalüüsi koostamise juhendi ETOdele](https://www.ria.ee/ee/kii-alusdokumendid.html) terminoloogiast, teeme lihtsustatud riskianalüüsi.

__Oht__ - sündmus või asjaolu, mis võib põhjustada katkestust või kahjustada infovara muul viisil

__Risk__ – määramatust arvestav hinnang ohule. Infoturvariski väljendatakse sageli infoturvasündmuse tagajärgede ja selle sündmuse võimalikkuse kombinatsioonina

| Tegevus  | Oht - Tagajärg - Tõenäosus | Meetmed |
|-----------|------------------------------------|
| Infosüsteemide kirjeldamine RIHAs | Omanik ei kirjelda hoolikalt → Kirjeldus mittetäielik, mitteajakohane, v-o isegi eksitav (30%) | 1, 2 |
|          | Kirjeldama pääseb vastava õiguseta isik → Ebaõiged või fake-andmed |  |

Meetmed

| Nr           |   Meede       |
|------------|----------------|
|     1         | Tarkvaralised automaatkontrollid RIHA kontrollimoodulis |
|     2         | "Teata puudulikest andmetest" (vt [Teavitused](Teavitused)) |

