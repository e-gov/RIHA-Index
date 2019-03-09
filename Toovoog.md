---
title: RIHA üldine töövoog
permalink: Toovoog
sidebar: false
---

# Töövoog
{:.no_toc}

* TOC
{:toc}

## Ärivaates

### 1  Kirjeldamine

___Omanik___ uuendab perioodiliselt infosüsteemi ___kirjeldust___.

Eesmärk on esitada adekvaatne, ajakohane pilt infosüsteemi tegelikust seisust. Eeldatakse, et infosüsteem on pidevas muutumises. Kasutamisega paralleelselt arendatakse edasi.

### 2  Hindamine 

___Hindajad___ vastavalt oma riskianalüüsile ___hindavad___ kirjeldusi. Hindamine päädib ___hindamisotsusega___.

### 3 Teema tõstatamine

Hindamisotsuses, aga ka omaniku enda poolt võidakse tõstatada ___teemasid___.

Teema (ingl k <i>issue</i>) fikseerib lahendamata küsimuse või täitmata nõude.

### 4 Arutelu

Omaniku kohustus on teemad lahendada. Teema lahendamine toob kaasa ___arutelu___ kooskõlastaja ja omaniku vahel.

### 5 Kohustuse võtmine 

Arutelu käigus võib omanik võtta või hindaja omanikule panna ___kohustusi___. Kohustus on lubadus või nõue asi kokkulepitud tähtajaks ära teha.

### 6  Teema lahendamine

Kõikide teemas tõstatatud kohustuste täitmisel või probleemi äralangemisel teema suletakse.

### 7  Nõude haldus

Kirjeldamine ja hindamine lähtuvad ___nõuetest___. Nõudel on ___omanik___. Nõude omanik tagab nõude kasulikkuse ja täitmise ___metoodika___. 

### 8  Protsessi IT-teostus

Protsess IT-teostuse (standardid, tarkvara, IT-teenused) korraldab RIA. 

----

## Rakenduse kasutamise vaates

### Rollid

1. Infosüsteemi haldaja e `OMANIK`
2. `HINDAJA`
3. `RIHA KASUTAJA`


### Toimingud

1. Infosüsteemi kirjeldamine
  - `OMANIK`, kasutades RIHA veebiliidest, koostab infosüsteemi kirjelduse.
    - Kirjeldus peab vastama [RIHA kirjeldusstandardile](Kirjeldusstandard).
2. Hindamine
  - `HINDAJA`, kasutades RIHA veebiliidest, vaatab läbi infosüsteemi kirjeldused ja teeb hindamisotsused.
  - Hindamisotsuste pealkirjad saavad avalikult kättesaadavaks (nii kasutajaliideses kui ka RIHA API-s). Vaata täpsemalt [RIHA aruteludest](Issue)
5. RIHA andmete kasutamine
  - `RIHA KASUTAJA` saab RIHA kesksüsteemi veebirakenduse abil tutvuda kirjeldustega ja hinnangutega.

---


### Arenduse korralduse põhijooned

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

### Töövormid

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

### Arenduse peamised artefaktid

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


### Testimine

Testimise korraldusest lähemalt vt [Testimine](https://confluence.ria.ee/display/RIHA/Testimine) (RIA sisekeskkonnas).

***API-de testimine***. RIHA serveripoolne komponent (serveriteenus) omab reeglina ühte või mitut API-t. API-de kaudu pakutakse teenuseid teistele komponentidele, sh veebisirvijas töötavatele kasutajaliides-komponentidele, aga ka RIHA välistele rakendustele (vastavate õiguste olemasolul). Kõik API-d tuleb korralikult testida. API-de testid automatiseeritakse.

Lähemalt vt [API-de testimine](APIdetestimine).

***Kasutajaliidese testimine***. Kasutajaliidesed testitakse käsitsi.
