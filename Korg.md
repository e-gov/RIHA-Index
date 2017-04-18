---
title: Kõrgkäideldavus
permalink: Korg
---

# Kõrgkäideldavus
{:.no_toc}

<p class='staatus'>Kavand. Läbi arutada infraosakonnaga. Võimalikud on muutused</p>

* TOC
{:toc}

## Mõisted

failover
: _tõrkesiire_; _avarii-ümberlülitus_ - käideldavust suurendav automatiseeritud või käsiprotsess elastsete IT-teenuste ümberlülituseks, kasutades varuseadmeid, -asukohti ja/või -võrgumarsruute; siirdumine varuressursile 

fallback 
: 1) _taandeolek_ normaalset ajutiselt asendav (väiksemate võimalustega) varukonfiguratsioon või -tööviis;  2) _varuvariant_

switchover
: sama, mis _failover_, kuid käsitsi

## Tõrkekindluse saavutamise meetodid ja vahendid

Tõrkekindluse saavutamise peamised meetodid on:

-  komponentstruktuur
- iga komponendi kohustus arvestada teise komponendi tõrketüüpidega ja neid võimaluste piires mõistlikult käsitleda (kinni püüda, avastada, mitte edasi anda kolmandatesse moodulitesse, saata monitooringumärguanne (Alert) jne)
- iga komponendi kohustus produtseerida oma tegevuse kohta logiteavet
- iga komponendi kohustus produtseerida enda kohta Health Check teavet
    süsteemi kohustus teha enesediagnostikat
- failover.

Vt [Murphy R (2016) Site Reliability Engineering](https://landing.google.com/sre/book.html)

## 'No State To Share'

Serveriteenused tuleb projekteerida nii, et serveriteenuse paigaldamisel mitmes instantsis ei teki vajadust olekut (_state_) instantside vahel jagada.

```
                    ,-.
                    `|'
                    /|\    Kasutaja
                     |
                    / \

Veebisirvija  +------------------+
              | Kasutajarakendus |
              |                  |
              +--------+---------+
                       |
               päring  |  HTTPS
                       v
                Koormusjaotur F5
                     +    +
                     |    |
             --------+    +-----+
             V                  V
       +-----------+      +-----------+
       |Serveri+   |      |Serveri-   |
       |teenus     |      |teenus     |
       |Instants 1 |      |Instants 2 |
       +-----+-----+      +-----+-----+
             |                  |
             +-------+    +-----+
                     |    |
                     V    V
              +---------------+
              |               |
              |  Andmehoidla  |
              |               |
              +---------------+

```