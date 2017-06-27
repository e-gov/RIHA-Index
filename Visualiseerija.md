---
title: Visualiseerija
layout: IT
permalink: Visualiseerija
published: true
---

# Visualiseerija

Visualiseerija võtab andmeid RIHA [Avaldaja](Avaldaja) API-st ja esitab inimkasutajale mitmesuguseid kokkuvõtted visuaalsel kujul.

**Konfigureerimine**. Eesmärgiks on tagada piisav paindlikkus - visuaalseid esitusi peab olema võimalik täiendada ja muuta. Kas selleks on otstarbekas kasutada konfiguratsioonifaili vm seadistust, otsustatakse arenduse käigus.

**Serveripoolne komponent**. Kogu töö peaks olema võimalik teostada veebisirvijas töötava Javascript-rakendusega, mis suhtleb Avaldada API-ga. Serveripoolset komponenti (Java-s) kaaluda siis, kui selleks ilmneb vajadus.

**Autentimine ja pääsuõigused**. Esialgu lähtume autentimata kasutajast. Autenditud kasutaja andmete kasutamine visuaalide personaliseerimiseks arutada läbi pärast esimest 1-2 sprinti.

**Ühtse kasutuskogemuse tagamine**. Visualiseerija kasutab RIHA ühtset kujundust. Peab olema võimalik siseneda komponenti avalehelt ja minna sinna ka tagasi. `Logi sisse´ nupu teostamine hiljem.  

Tehnoloogia: [Chart.js](http://www.chartjs.org/).

- [https://github.com/e-gov/RIHA-Visualizer](https://github.com/e-gov/RIHA-Visualizer) (lähtekood)

Vt ka: [Andmeanalüütika töörühm](https://itpraktikud.eesti.ee/dokuwiki/doku.php?id=itari:toogrupid:erasektor:andmeanalyytika) (2015-2016)