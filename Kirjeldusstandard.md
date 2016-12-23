---
layout: IT
publish: true
title: Kirjeldusstandard (Description Standard)
permalink: Kirjeldusstandard
---

{% include ET.html %}

[Formaalne kirjeldus](https://github.com/e-gov/RIHA-API/blob/master/RIHA-API.yaml) on koostatud vastavalt [Open API Initiative](https://www.openapis.org/) (endine Swagger) nõuetele.

<div class='block__note'>
  <p class='block__note--heading'>Swagger Editor</p>
  <p>
    Kirjeldusstandardit on hea uurida <a href='http://editor.swagger.io/#/'>Swagger Editor</a>-iga. <a href='https://raw.githubusercontent.com/e-gov/RIHA-API/master/RIHA-API.yaml'>YAML-fail</a> tuleb redaktorisse laadida.
  </p>
</div>

## Üldteave

`swagger: '2.0'` - kasutatav Open API (Swagger) kirjelduskeele versioon

`info: [..]` - liidese nimetus, versioon ja kokkuvõtlik kirjeldus

`consumes`, `produces` - päring liidesele saadetakse ja vastus saadakse JSON-vormingus

## Pöördumisteed

Liidese poole pöördumise teed (URL-i osad) on määratud jaotises `paths`. Pöördumisteid on kaks:

- `/systems.json` - nii pöördudes tagastab liides infosüsteemide nimekirja
- `/{shortname}` - lühinimega pöördudes tagastab liides konkreetse infosüsteemi detailse kirjelduse

## Vormingud

Jaotises `definitions` määratletakse liides poolt väljastatavad vormingud. Neid on kaks: süsteemi lühiandmestik ja detailandmestik

## Süsteemi lühiandmestik

- `system` - Süsteemi lühiandmestik. 
  - `uri` - (KOHUSTUSLIK) Süsteemi unikaalselt identifitseeriv URI. HTTP GET sellel aadressil peab tagastama detailed_system tüüpi objekti
  - `name` - Süsteemi täispikk, ametlik, nimi
  - `shortname` - (KOHUSTUSLIK) Süsteemi lühinimi
  - `owner` - (KOHUSTUSLIK) Süsteemi vastutav töötleja
    - `code` - Süsteemi vastutava töötleja registrikood
    - `name` - Süsteemi vastutava töötleja nimi
  - `documentation` - URL, mis viitab süsteemi dokumentatsiooni avalikule asukohale
  - `meta` - 
    - `system_status` - Süsteemi olek
      - `status` - Staatuse tekstiline kirjeldus
      - `timestamp` - Staatuse saamise aeg
    - approval_status - 
      - `description` - Süsteemi kooskõlastuse olek
        - `status` - Staatuse tekstiline kirjeldus
        - `timestamp` - Staatuse saamise aeg
    - description_timestamp - Süsteemi kohta väljastatava info viimase muutmise aeg
             
## Süsteemi detailandmestik

- `detailed system` - Süsteemi detailandmestik. 
  - `shortname` - (KOHUSTUSLIK) Süsteemi lühinimi
  - `description_timestamp` - (KOHUSTUSLIK) Kirje viimase muutmise aeg
  - `payload` - Spetsifitseerimata struktuuriga masinloetav informatsioon süsteemi kohta


{% include EN.html %}

[Formal description](https://github.com/e-gov/RIHA-API/blob/master/RIHA-API.yaml) follows [Open API Initiative](https://www.openapis.org/) (former Swagger) requirements.