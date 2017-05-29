---
title: Arendusvoog
permalink: Arendusvoog
---

# Arendusvoog

```
                    ,+.
                    `+'                                                      ,+.
                 Arendaja                                                    `|'
                     +                                                       /|\
                    / \     Arendaja lokaalne /                               +                   
    GitHub                  Heroku                                           / \
   +-----------+          +-----------+                                   Kasutaja
   |           |          | Arendus-  |                                       |
   |   Repod   +--------> | keskkond  |                                       |
   |           |          |           |                                       |
   +-----+-----+          +-----------+                                       |
         |                                                                    |
         |                                                                    |
+-----------------------------------------------------------------------------------+
         v                                                                    v
    Bitbucket
   +-----------+          +-----------+          +-----------+         +-----------+ 
   |           |          | CI        |          | Test-     |         | Toodang   |
   |   Repod   +--------> | keskkond  +--------> | keskkond  |-------->|           |
   |           |          |           |          |           |         |           |
   +-----------+          +-----------+    ,+.   +-----------+   ,+.   +-----------+
                                           `|'                   `|'
                                           /|\                   /|\
                             Jenkins        +  Admin              +   Admin
                                           / \                   / \

```

## Arenduse korralduse põhijooned

__Soovide kaardistamine__. Ärijuht koos tootejuhiga koguvad ja kaardistavad kasutajate __soove__. Tegevus on proaktiivne ja ka kasutajate soove suunav ning kujundav.

__Eesmärkide seadmine__. Soovid prioritiseeritakse. Äri- ja tootejuhi kõrval osaleb ka arhitekt. Tulemuseks on ***soovide prioritiseeritud tabel***. Ärijuht koostab ***strateegia***, milles püstitab strateegilised eesmärgid.

__Agiilne planeerimine.__. Tööd planeeritakse - ***eepikutena***, ***kasutuslugudena***, ***task***-dena - ja prioritiseeritakse. Tegevuse tulemusena formeerub ***arendusjärjekord***.

__Arhitektuuri kujundamine__. Arhitekt tegeleb paralleelselt toote läbivate aspektide ja tehnoloogiliste küsimuste läbitöötamisega, arendajate toetamise ja neile sisendi ettevalmistamisega. Tulemused fikseeritakse ***arhitektuuriteatmikus***. Siia kuulub ka ***vaheanalüüside*** koostamine.

__Programmeerimine__. Arendajad teostavad kasutuslood ***koodis***. Koodi hoitakse avalikus repos (GitHub) ja RIA repos (BitBucket).

__Paigaldamine__. Funktsionaalse testimise eesmärgil paigaldatakse kood Heroku keskkonda või arendaja lokaalsesse keskkonda. Viimast saab lubada üksnes juhul, kui arendaja lokaalne keskkond on RIA-le pidevalt kättesaadav ning alati uuendatud. 
Süsteemitestimise eesmärgil paigaldatakse rakendus Jenkinsi vahendusel RIA CI keskkonda. Paigaldus toimub regulaarsete intervallide vahel ja/või peale iga master haru lähtekoodi muudatust. Süsteemitestimise käigus veendutakse RIA taristu nõuetele vastavuses, s.t süsteemitestimine eeldab ehitamise konfigureerimist (Jenkinsis) nõnda, et kõik vajalikud sõltuvused tuleksid RIA taristu repodest. See tähendab näiteks lokaalse apt ja maven repositooriumi täiendamist vajaminevate sõltuvustega.
RIA testkeskkonda paigaldatakse rakendus (mitte hiljem kui) vastuvõtutestimiseks. Testkeskkonnas vastuvõtutestimine on nõutud juhul, kui funktsionaalse testimise läbiviimiseks on tarvilik võimalikult toodangulähedane konfiguratsioon, testandmete hulk ja omadused, jõudlus ja ligipääs väliste infosüsteemide testliidestele. RIA testkeskkonda paigaldus viiakse läbi manuaalselt Jenkinsi seadistuse ja arendajate juhendi põhjal. Testkeskkonna paigalduse käigus viib infra läbi manuaalse paigaldatuvuse testi ning veendub, et rakendus oleks paigaldatav ka CI keskkonna vahenduseta.
Toodangukeskkonda paigaldus toimub läbi muudatuste halduse peale iga suurema reliisi süsteemi- ja vastuvõtutestimist. Toodangukeskkonna paigaldus toimub manuaalselt testkeskkonna paigalduse põhjal.

__Testimine__. Testitakse kahes järgus: "funktsionaalse" testimise eesmärgiks on kontrollida, et tarkvara töötab funktsionaalses mõttes. Funktsionaalset testimist teosta "Süsteemitestimise" eesmärk on kontrollida, et tarkvara ja selle paigaldus täidab kõiki toodangukeskkonnas käitamise eelduseks olevaid nõudeid.

__Kasutamine__. 

Kõiki tegevusi läbivad töövormid: ***püstijalakoosolek***, ***nädalakoosolek***, ***arutelukoosolek***, ***arendusülesande läbirääkimine***, ***ülevaatus***.


## Töövormid

<pre>
+---------------------------------+
|           Kasutamine            |
+---------------------------------+
|          Paigaldamine           |
+---------------------------------+
|            Testimine            |
+---------------------------------+
|         Programmeerimine        |
+---------------------------------+
| Arendusülesande läbirääkimine   |
+---------------------------------+
|  Arhitektuuriteema läbitöötamine|
+---------------------------------+
|       Püstijalakoosolek         |
+---------------------------------+
|         Nädalakoosolek          |
+---------------------------------+
|         Soovist nõudeks         |
+---------------------------------+
|    Strateegia kujundamine       |
+---------------------------------+
</pre>  

## Arenduse peamised artefaktid

<pre>
+---------------------------------+
|      Paigaldatud, töötav kood   |
+---------------------------------+
|               Kood              |
+---------------------------------+
|  RIHA keskkonnad (ülevaade)*    |
+---------------------------------+
|        Vaheanalüüsid*           |
+---------------------------------+
|     Arhitektuuriteatmik         |
+---------------------------------+
|    Agiilarenduse kokkulepped*   |
+---------------------------------+
|     Arendusjärjekord (JIRA)*    |
+---------------------------------+
|     Soovide hindamise tabel*    |
+---------------------------------+
|      RIHA tegevusplaan*         |
+---------------------------------+
|       RIHA strateegia*          |
+---------------------------------+
</pre>  

`*` - ei ole avalik

