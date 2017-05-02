---
title: Arendusvoog
permalink: Arendusvoog
---

# Arendusvoog

```
                    ,+.
                    `+'                               ,+.
                 Arendaja                             `|'
                     +                                /|\
                    / \                                +
    GitHub                  Heroku                    / \
   +-----------+          +-----------+             Kasutaja
   |           |          | Arendus-  |                |
   |   Repod   +--------> | keskkond  |                |
   |           |          |           |                |
   +-----+-----+          +-----------+                |
         |                                             |
         |                                             |
+------------------------------------------------------------+
         v                                             v
    Bitbucket
   +-----------+          +-----------+          +-----------+
   |           |          | Test-     |          |           |
   |   Repod   +--------> | keskkond  +--------> |  Toodang  |
   |           |          |           |          |           |
   +-----------+   ,+.    +-----------+    ,+.   +-----------+
                   `|'                     `|'
                   /|\                     /|\
            Admin   +        Jenkins        +  Admin
                   / \                     / \

```

## Arenduse korralduse põhijooned

__Soovide kaardistamine__. Ärijuht koos Tootejuhiga koguvad ja kaardistavad Kasutajate __soove__. Tegevus on proaktiivne ja ka kasutajate soove suunav ning kujundav.

__Eesmärkide seadmine__. Soovid prioritiseeritakse. Äri- ja tootejuhi kõrval osaleb selles tegevuses ka Arhitekt. Tulemuseks on ***soovide prioritiseeritud tabel***. Ärijuht koostab ***strateegia***, milles püstitab strateegilised eesmärgid.

__Agiilne planeerimine.__. Tööd planeeritakse - ***eepikutena***, ***kasutuslugudena***, ***task***-dena - ja proritiseeritakse. Tegevuse tulemusena formeerub __***arendusjärjekord***__.

__Arhitektuuri kujundamine__. Arhitekt tegeleb paralleelselt toote läbivate aspektide ja tehnoloogiliste küsimuste läbitöötamisega, arendajate toetamise ja neile sisendi ettevalmistamisega. Tulemused fikseeritakse ***arhitektuuriteatmikus***. Siia kuulub ka ***vaheanalüüside*** koostamine.

__Programmeerimine__. Arendajad teostavad kasutuslood ***koodis***. Koodi hoitakse avalikus repos (GitHub) ja RIA repos (BitBucket).

__Paigaldamine__. Funktsionaalse testimise eesmärgil paigaldatakse kood Heroku keskkonnas. Täistestimise eesmärgil paigaldatakse kood RIA testkeskkonnas.

__Testimine__. Testitakse kahes järgus: "funktsionaalse" testimise eesmärgiks on kontrollida, et tarkvara töötab funktsionaalses mõttes. "Täistestimise" eesmärk on kontrollida, et tarkvara ja selle paigaldus täidab kõiki toodangukeskkonnas käitamise eelduseks olevaid nõudeid.

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

