---
layout: IT
publish: true
title: Tehnoloogiaportfell (Technology Portfolio)
permalink: Tehnoloogiaplaan
sidebar: true
---

---

{% include ET.html %}

RIHA

# Tehnoloogiaportfell
{:.no_toc}

* TOC
{:toc}

## 1 Ülevaade

Käesolev dokument:

- annab lähtekohad ja põhimõtted tehnoloogiate valikuks
- fikseerib juba tehtud valikud
- toimib kasutatavate tehnoloogiate kaardistusena
- annab viiteid tehnoloogiate dokumentatsioonile.

Tehnoloogiaportfelli täiendatakse arenduse käigus.

## 2 Tehnoloogiate valiku lähtekohad ja põhimõtted

Tehnoloogiate valimisel tuleb arvestada eriti järgmist.

2.1 Üldiselt on eesmärk kasutada tänapäevaseid, efektiivseid arendusvahendeid ja tehnoloogiaid, üritades üle saada avalikult sektorile iseloomulikust inertsist.

2.2 Tehnoloogiad ja töövahendid peavad olema vabalt, litsentsitasudeta kasutatavad.

2.3 RIHA ärinõudeks on lihtsus. Eesmärgiks ei ole teha suurt, keerulist süsteemi. Seetõttu tuleb tehnoloogiliste valikute tegemisel küsida, kas ärilise eesmärgi võiks saavutada lihtsama tehnoloogiaga. Teiste sõnadega, kas võimsam, aga samas keerukam tehnoloogia toob konkreetsel juhul väärtust.

2.4 RIHA rajatakse komponentidena. RIHA komponenti iseloomustab:
- selge funktsioon, soovitavalt ühe (või mitme üksteisega seotud) funktsiooni täitmine.
- eraldipaigaldatavus, sh erinevatesse keskkondadesse
- andmete pakkumine masinliidese abil
  - moodulid liidestatakse üksteisega ja avatakse liidestusteks välistele süsteemidele REST API-de abil.
  - moodulid tuleb projekteerida nii väikesteks, et vajadusel saab mooduli välja vahetada, teostades selle teises programmeerimiskeeles vm teisel tehnoloogia alusel.
  - moodulite kogum peab olema laiendatav. RIHA strateegias on sõnastike mooduli, projektide mooduli, finantssjuhtimise mooduli

2.5 Komponentide kokkusobivus ja tervikuna toimimine tagatakse muuhulgas:
  - kasutajaliideste ühtlustatud kujunduspõhimõtetega
  - liideste (API-de) täieliku ja täpse dokumenteerimisega
  
2.6 Komponentide paigaldatavus erinevates keskkondades   
- RIHA on hajussüsteem. RIHA-s säilub küll kesksüsteem (mida haldab RIA), selle kõrval komponentrakendused paigaldatakse erinevate asutuste kontrolli all olevatesse keskkondadesse.
Osa komponente paigaldatakse RIA taristusse  - tähendab, et komponendid peavad vastama erinevate haldajate taristute poolt seatavatele nõuetele.
  - Need nõuded ei ole ette teada. 
  - Seetõttu on eelistatud laialt levinud tehnoloogiad ja standardsed lahendused

## 3 Tehnoloogilised nõuded ja valikud

### Andmesalvestus
- RIHA andmed paigutatakse hajusalt. Andmete iseloomu arvestades ei ole fookuses relatsiooniline andmetehnoloogia, vaid suuremat paindlikkust võimaldav [JSON](http://www.json.org/). RIHA andmeid hoitakse põhiosas JSON-vormingus.
 - Küll võib relatsioonilist andmebaasi kasutada JSON-tekstide hoidmiseks. 
- RIHAs ei moodustata tsentraalset superandmebaasi. 
- Küll on kontseptsioonis hajusalt tekkivate ja uuenevate andmete kokkukogumine (ingl _harvesting_) kesksesse andmehoidlasse (seda võib nimetada andmelaoks). 

### Masinliidesed (API-d)
- [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer). Masinliidesed teostatakse reeglina REST liidestena
- [X-tee](https://www.ria.ee/ee/x-tee.html) on kasutusel liidestes, kus turvakaalutlused, REST API-de puudumine või muud põhjused ei võimalda REST liideseid kasutada
- [Open API Initiative (Swagger)](https://www.openapis.org/) abil spetsifitseeritakse kõik API-d.

### Autentimine

#### Inimkasutajate autentimine
- teostatakse RIHA-välise teenuse või lahendusena
- kavas on kasutada 2017. a kevadel valmiva eesti.ee eIDAS-autentimisteenust
  - kui võimalikud on teised variandid

#### Masinkasutajate autentimine
- [HTTP Basic Authentication](https://tools.ietf.org/html/rfc2617)

### Pääsuhaldus
 - [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol), [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) (rollipõhine pääsuhaldus)

### Kasutajaliides (UI)
- senitehtus on kasutatud:
  - [React](https://facebook.github.io/react)
  - Javascript + [Bootstrap 4](https://v4-alpha.getbootstrap.com/) (agiilselt arendatud komponentides)
- millist veebiraamistikku kasutada, ei ole põhiküsimus. Veebiraamistikud arenevad kiiresti. Tähtis on teha komponentide kasutajaliidesed lihtsad ja äriloogika selge, nii, et vajadusel (tehnoloogia vananemine) saaks komponendi ümber kirjutada.
- [Sass](http://sass-lang.com/)

### Äriloogika
- järgides tänapäevaseid trende, üheleherakendus (ingl _single page application_)
  
### Serveripoolsed komponendid
- [Java](https://www.java.com/en/), on eelistatud ja seni kasutatud
- [Go](https://golang.org/) ei ole välistatud
- [Node.js](https://nodejs.org/en/) jms ei ole välistatud.

### Dokumentatsioon
#### Põhilised
- [Markdown](https://guides.github.com/features/mastering-markdown/) (GitHubi dialekt) (avaldamisvorming)
- dokumentatsiooni valmistamisel võib kasutada ka muid vahendeid (lepingupartneri soovil ka Microsoft Word), kuid tulemus teisendatakse alati avaldamisvormingusse

### Abistavad
- [Jekyll](https://jekyllrb.com/docs/home/) (avaldamistehnoloogia kõrgemate kasutatavusnõuetega dokumentatsioonile), kasutatav  GitHubis või eraldi
- [Liquid](http://shopify.github.io/liquid/) templiidikeel, kasutusel Jekyllis
- [Kramdown](https://kramdown.gettalong.org/quickref.html) - Markdown -> HTML teisendaja, kasutusel GitHub Jekyllis

## Andmebaas
- [PostgreSQL](https://www.postgresql.org/)
  - sh JSON-i töötlemise võimalused
  
## Tarkvararepositoorium
- [GitHub](https://github.com/)
- [BitBucket](https://bitbucket.org/)
- töövoog on commit-ne GitHub-i, sealt automatiseeritud peegeldamine RIA taristu BitBucket-sse

## Modelleerimine
- [Enterprise Architect](http://www.sparxsystems.com/products/ea/) 
- [asciiFlow](http://asciiflow.com/), abistavas rollis, lihtsamates joonistes  

## Logimine
- [SLFJ4](http://www.slf4j.org/), Simple Logging Facade for Java
- syslog protokoll (RFC 5424, RFC 3164). 

## Mallid ja konfiguratsioonifailid
- JSON
- [YAML](http://yaml.org/)
 
##  Üldiselt kasutavav
- [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
- [Ubuntu](https://www.ubuntu.com/) - paigalduskeskkonna op-süsteem
  
  






[Sublime Text 3](http://docs.sublimetext.info/en/latest/index.html) - programmeerija tekstiredaktor

[GitSavvy](https://github.com/divmain/GitSavvy) - tekstiredaktori Sublime Text 3 ja Giti lõimetis

