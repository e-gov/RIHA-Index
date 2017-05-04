---
title: Eesmärkmudel
permalink: Eesmarkmudel
---

# Eesmärkmudel

## Metoodika ja tähistused

__Eesmärkide hierarhia__ on vahend keerukast kooslusest lihtsama vaate saavutamiseks. Lihtsama vaate eesmärk on tegevuste fokusseerimine kõige olulisema saavutamisele. Hierarhiline esitus ei tähenda, et reaalsus ise oleks hierarhiline.  __Eesmärk__ (_Goal_) ("-")  on seisund, mida on vaja saavutada. __Kvaliteedieesmärk__ (_Quality Goal_) (<span class='Q'>Q</span>) on ligikaudu võrdne mittefunktsionaalse nõudega. __Struktuuritoetuse lubadus__. Eriline koht käesolevas mudelis on struktuuritoetuse lepingus fikseeritud lubadustel (<span class='sf'>SFn</span>). Eesmärkmudelit detailiseeritakse kuni kasutuslugudeni. Kasutatud Tenso & Taveter [1] mudelit modifitseeritud kujul.

[1] Tenso, Tanel & Taveter, Kuldar. Requirements Engineering With Agent-Oriented Models.

## Eesmärkmudel

- SF projekti õnnestumine
 * <span class='Q'>Q</span> Audiitorile on OK
  - Beta-1 avalikustatud
    * <span class='Q'>Q</span> 30.06
    * <span class='Q'>Q</span> RIA taristus 
    * <span class='Q'>Q</span> Heroku taristus
    - Kirjeldamine <span class='sf'>SF1.3</span>, <span class='sf'>SF1.4</span>
      - Autentimine <span class='sf'>SF1.1</span>
      - Autoriseerimine <span class='sf'>SF1.2</span>
      - Andmed üle kantud <span class='sf'>SF3.1</span>
        - Andmekvaliteet kontrollitud <span class='sf'>SF3.3</span> 
    - Hindamine <span class='sf'>SF2</span>
      - Autentimine <span class='sf'>SF1.1</span>
      - Autoriseerimine <span class='sf'>SF1.2</span>
      - töövoog optimeeritud <span class='sf'>SF2.1</span>
        - kooskõlastajad töövooga rahul <span class='sf'>SF2.1</span>
    - Koguja <span class='sf'>SF3.2</span>
    - Sirvimine <span class='sf'>SF4</span>
  - Beta-2 avalikustatud
    * <span class='Q'>Q</span> 30.09
    * <span class='Q'>Q</span> RIA taristus
    - Kirjeldaja täiendavad omadused
    - Hindaja täiendavad omadused
    - Automaatkontrollid <span class='sf'>SF3.4</span>
    - Avaandmetena ilusasti kättesaadav <span class='sf'>SF5</span>
  - Toodangus
    * <span class='Q'>Q</span> 1.11
    * <span class='Q'>Q</span> RIA taristus
    - pentestimine <span class='sf'>SF6</span>
    - juhendid <span class='sf'>SF7</span>

## SF-i lubadused

<span class='sf'>SF1</span> Riigi infosüsteemi kirjeldamise moodul

<span class='sf'>SF1.1</span> sisselogimine

<span class='sf'>SF1.2</span>, AAR õiguste jagamine ja kontroll

<span class='sf'>SF1.3</span> RIHAsse asutuse lisamine/muutmine

<span class='sf'>SF1.4</span> RIHAs infosüsteemi/andmekogu kirjeldamine/muutmine

<span class='sf'>SF2</span> Kooskõlastamise moodul (sh järelevalve tugi)

<span class='sf'>SF2.1</span> optimeeritud töövoog kooskõlastajatele ja järelevalvajatele

<span class='sf'>SF3</span> Andmebaasi andmete täiendamine ja muudatuste tuge

<span class='sf'>SF3.1</span> Olemasoleva platvormi reorganiseerimine: RIHAs hoitavate andmete analüüsi ja andmeväljade restruktureerimine

<span class='sf'>SF3.2</span> Andmete teisendustööriista ja koguja/pärimisvõimaluse loomine

<span class='sf'>SF3.3</span> Olemasolevate RIHA andmete andmekvaliteedi kontrollimine, migratsioon ja andmebaaside sünkroniseerimine

<span class='sf'>SF3.4</span> andmete uuendamist/täiendamist soodustavate automaatkontrollide lisamine ning vajadusel ka automaatteavituste realiseerimine

<span class='sf'>SF4</span> RIHAsse kantud andmete avaandmetena kättesaadavaks tegemine - avaandmete liidese loomine (nt avaandmete filtreerimist, konverteerimist, teenusena pakkumist)

<span class='sf'>SF5</span> Tööriist avaandmete kuvamiseks e. tervikpilt/koondvaade RIHAs olemasolevatest andmetest, sh andmete otsing ja aruandlus

<span class='sf'>SF6</span> RIHA pentestimine ja turvaanalüüs

<span class='sf'>SF7</span> Juhendmaterjalide uuendamine ja koolitusmaterjalid