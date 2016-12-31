---
layout: IT
publish: true
title: Tehnoloogiaplaan (Technology Plan)
permalink: Tehnoloogiaplaan
sidebar: true
---

---

{% include ET.html %}

RIHA

# Tehnoloogiaplaan

* TOC
{:toc}

Käesolev dokument:

- annab lähtekohad ja põhimõtted tehnoloogiate valikuks
- fikseerib juba tehtud valikuid
- annab viiteid tehnoloogiate dokumentatsioonile.

Tehnoloogiaplaani täiendatakse arenduse käigus.

## Lähtekohad

Tehnoloogiate valikult tuleb arvestada eriti järgmist.

Üldiselt on eesmärk kasutada tänapäevaseid, efektiivseid arendusvahendeid ja tehnoloogiaid, üritades üle saada avalikult sektorile iseloomulikust inertsist.

Tehnoloogiad ja töövahendid peavad olema vabalt, litsentsitasudeta kasutatavad.

RIHA ärinõudeks on lihtsus. Eesmärgiks ei ole teha suurt, keerulist süsteemi. Seetõttu tuleb tehnoloogiliste valikute tegemisel küsida, kas ärilise eesmärgi võiks saavutada lihtsama tehnoloogiaga. Teiste sõnadega, kas võimsam, aga samas keerukam tehnoloogia toob konkreetsel juhul väärtust.

RIHA rajatakse komponentidena. RIHA komponenti iseloomustab:
- selge funktsioon, soovitavalt ühe (või mitme üksteisega seotud) funktsiooni täitmine.
- eraldipaigaldatavus, sh erinevatesse keskkondadesse
- andmete pakkumine masinliidese abil
  - moodulid liidestatakse üksteisega ja avatakse liidestusteks välistele süsteemidele REST API-de abil.
  - moodulid tuleb projekteerida nii väikesteks, et vajadusel saab mooduli välja vahetada, teostades selle teises programmeerimiskeeles vm teisel tehnoloogia alusel.
  - moodulite kogum peab olema laiendatav. RIHA strateegias on sõnastike mooduli, projektide mooduli, finantssjuhtimise mooduli

Komponentide kokkusobivus ja tervikuna toimimine tagatakse muuhulgas:
  - kasutajaliideste ühtlustatud kujunduspõhimõtetega
  - liideste (API-de) täieliku ja täpse dokumenteerimisega
  
Komponentide paigaldatavus erinevates keskkondades   
- RIHA on hajussüsteem. RIHA-s säilub küll kesksüsteem (mida haldab RIA), selle kõrval komponentrakendused paigaldatakse erinevate asutuste kontrolli all olevatesse keskkondadesse.
Osa komponente paigaldatakse RIA taristusse  - tähendab, et komponendid peavad vastama erinevate haldajate taristute poolt seatavatele nõuetele.
  - Need nõuded ei ole ette teada. 
  - Seetõttu on eelistatud laialt levinud tehnoloogiad ja standardsed lahendused

## Tehnoloogilised nõuded ja valikud

## Andmesalvestus
- RIHA andmed paigutatakse hajusalt. Andmete iseloomu arvestades ei ole fookuses relatsiooniline andmetehnoloogia, vaid suuremat paindlikkust võimaldav JSON. RIHA andmeid hoitakse põhiosas JSON-vormingus.
 - Küll võib relatsioonilist andmebaasi kasutada JSON-tekstide hoidmiseks. 
- RIHAs ei moodustata tsentraalset superandmebaasi. 
- Küll on kontseptsioonis hajusalt tekkivate ja uuenevate andmete kokkukogumine (ingl _harvesting_) kesksesse andmehoidlasse (seda võib nimetada andmelaoks). 

### Masinliidesed
- teostatakse REST liidestena
- v.a liidesed, kus turvakaalutlustel või REST API-de puudumisel tuleb kasutada X-teed
- kirjeldatakse Open API Initiative (Swagger) kirjeldusvormingus

### Autentimine
- teostatakse RIHA-välise teenuse või lahendusena
- kavas on kasutada 2017. a kevadel valmiva eesti.ee eIDAS-autentimisteenust
  - kui võimalikud on teised variandid

## Pääsuhaldus
 - LDAP, RBAC (rollipõhine pääsuhaldus)

## Kasutajaliides (UI)
 - senitehtus on kasutatud:
   - React https://facebook.github.io/react/
   - Javascript + Bootstrap 4 (agiilselt arendatud komponentides)
 - millist veebiraamistikku kasutada, ei ole põhiküsimus. Veebiraamistikud arenevad kiiresti. Tähtis on teha komponentide kasutajaliidesed lihtsad ja äriloogika selge, nii, et vajadusel (tehnoloogia vananemine) saaks komponendi ümber kirjutada.
 - Sass

## Äriloogika
  - järgides tänapäevaseid trende, üheleherakendus (ingl _single page application_)
  
## Serveripoolsed komponendid
  - senitehtus on kasutusel Java
  - välistatud ei ole ka Go (https://golang.org/) või isegi Node.js (https://nodejs.org/en/)

## Dokumentatsioon
  - Markdown (avaldamisvorming)
  - Jekyll (avaldamistehnoloogia kõrgemate kasutatavusnõuetega dokumentatsioonile)
  - dokumentatsiooni valmistamisel võib kasutada ka muid vahendeid (lepingupartneri soovil ka Microsoft Word), kuid tulemus teisendatakse alati avaldamisvormingusse

## Andmebaas
  - PostgreSQL
    - sh JSON-i töötlemise võimalused
  
## Tarkvararepositoorium
  - GitHub, BitBucket
    - töövoog on commit-ne GitHub-i, sealt automatiseeritud peegeldamine RIA taristu BitBucket-sse

## Modelleerimine
  - Enterprise Architect http://www.sparxsystems.com/products/ea/ 
  - lihtsamates joonites ka asciiFlow http://asciiflow.com/ 

## - Logimine
  - SLFJ4, syslog protokoll (RFC 5424, RFC 3164). 

## Mallid ja konfiguratsioonifailid
  - JSON, YAML
 
##  Üldiselt kasutavav
  - UTF-8
  - Ubuntu - paigalduskeskkonna op-süsteem
  
  





[Liquid](http://shopify.github.io/liquid/) templiidikeel, kasutusel Jekyllis

[Jekyll](https://jekyllrb.com/docs/home/) on veebisaitide avaldamise süsteem, kasutusel GitHubis

[Sublime Text 3](http://docs.sublimetext.info/en/latest/index.html) - programmeerija tekstiredaktor

[GitSavvy](https://github.com/divmain/GitSavvy) - tekstiredaktori Sublime Text 3 ja Giti lõimetis