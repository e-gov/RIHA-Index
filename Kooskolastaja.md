---
title: Kooskolastaja
permalink: Kooskolastaja
---

# Kooskõlastaja

Rakendus, millega volitatud inimkasutaja (kooskõlastaja) saab läbi vaadata kirjeldusi ja teha kooskõlastusotsusi. Kooskõlastusotsused avaldatakse masinliidese (API) abil.  

## Kooskõlastaja inimliides

Rakendus:

- kuvab tabelina kõik infosüsteemid
  - `Omanik`, `Infosüsteemi nimi`, `Viimati muudetud`, `Staatus`, `Kooskõlastatud`, `Kooskõlastamise staatus`
- infosüsteemide andmed võetakse Avaldaja masinliidesest
- võimaldab iga infosüsteemi kohta teha kooskõlastusotsuse
  - nupud `Kooskõlasta`, `Ei kooskõlasta`
- otsida (filtreerida) infosüsteeme; otsistringiks on nimeosa.  

## Kooskõlastaja API

[Kooskõlastaja API spetsifikatsioon](https://github.com/e-gov/RIHA-API/blob/master/approval.yaml) on koostatud vastavalt [Open API Initiative](https://www.openapis.org/) (endine Swagger) nõuetele.

- Üldteave
  - `swagger: '2.0'` - määratakse kasutatav Open API (Swagger) kirjelduskeele versioon
  - `info: [..]` - liidese nimetus, versioon ja kokkuvõtlik kirjeldus
  - `consumes`, `produces` - määratakse, et päring liidesele saadetakse ja vastus saadakse JSON-vormingus.
- Pöördumisteed
  - Liidese poole pöördumise teed (URL-i osad) on määratud jaotises `paths`. Pöördumisteid on kaks:
    - `/approvals.json` - nii pöördudes tagastab liides nimekirjana kõigi infosüsteemide kooskõlastusseisundid 
    - `/{shortname}` - infosüsteemi lühinimega pöördudes tagastab liides infosüsteemi kooskõlastusseisundi.
- Vormingud
  - jaotises `definitions` määratletakse kooskõlastusseisundi vorming
    - `status` - kooskõlastusseisundi tekstiline kirjeldus
      - võimalikud väärtused: `KOOSKÕLASTATUD`, `MITTE KOOSKÕLASTATUD` (NB! Ei ole veel standarditud)
    - `timestamp` - seisundi saamise aeg.  

