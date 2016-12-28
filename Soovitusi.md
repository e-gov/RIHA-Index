---
title: Soovitusi
layout: IT
permalink: Soovitusi
published: true
---

# Soovitusi

## Kirjelduste publitseerimine GitHubi abil

Infosüsteemi RIHA nõuete kohane kirjeldus (edaspidi "RIHA kirjeldus") on infosüsteemi dokumentatsiooni osa. Loogiline on hoida ja avaldada kirjeldus koos muu dokumentatsiooniga.

Kui infosüsteemi dokumentatsiooni avaldamiskohaks on valitud [GitHub](https://github.com/), siis on loogiline, et ka RIHA kirjeldus asub samas.

Näitame [Andmejälgija](https://github.com/e-gov/AJ) näitel, kuidas RIHA kirjeldust esitada GitHubis.

### Andmejälgija kirjeldus

- (https://rawgit.com/e-gov/AJ/master/systems.json)[https://rawgit.com/e-gov/AJ/master/systems.json] - annab süsteemide nimekirja; nimekirjas on üks infosüsteem - AJ
- (https://rawgit.com/e-gov/AJ/master/AJ.json)[https://rawgit.com/e-gov/AJ/master/AJ.json] - annab AJ detailkirjelduse.

### Kirjelduse koostamine ja avaldamine:

1. Koostada tuleb kaks faili - `systems.json` ja `{}shortname.json`, kus `{shortname}` on infosüsteemi vabalt valitud lühinimi
2. Vt nt:
  - (https://github.com/e-gov/AJ/blob/master/systems.json)[https://github.com/e-gov/AJ/blob/master/systems.json]
  - (https://github.com/e-gov/AJ/blob/master/AJ.json)[https://github.com/e-gov/AJ/blob/master/AJ.json]
3. Vastavalt RIHA kirjelduskeele (API) nõuetele tuleb ülalnimetatud failide sisu pakkuda üle interneti `application/json` vormingus. GitHub seda ise ei tee. Kuid hädast aitab välja tasuta vahendusteenus (https://rawgit.com/)[https://rawgit.com/]
  - (https://rawgit.com/e-gov/AJ/master/systems.json)[https://rawgit.com/e-gov/AJ/master/systems.json]
  - (https://rawgit.com/e-gov/AJ/master/AJ.json)[https://rawgit.com/e-gov/AJ/master/AJ.json]

Ülalkirjeldatud meetodit eeldab kirjelduse koostamist käsitsi, tekstiredaktori abil. JSON-i redigeerimine pole raske, kuid nõuab siiski tähelepanu (komade, sulgude ja jutumärkide paarsuse jälgimine, paojadade kasutamine jutumärkide ja reavahetuste sisestamisel). JSON-ga varasemat kokkupuudet mitteomaval kasutajal on tõenäoliselt mõistlikum kasutada [Kirjeldajat](/Kirjeldaja).
