---
title: RIHA masinliidese kasutamine
permalink: APIabi
sidebar: false
---

## Kuidas kasutada RIHA masinliidest?

Kõiki RIHAsse kogutud andmeid saab kasutada RIHA masinliidese e API kaudu.

RIHA masinliidese andmed on avalikud. Igaüks võib neid alla laadida, töödelda, kombineerida muude andmetega, luua lisaväärtust andvaid rakendusi jms. 

Juurdepääs on piiratud ainult mitteavalikele isikuandmetele. Samuti on juurdepääs piiratud andmete RIHAsse kandmise masintoimingutele.

RIHA API aadress on `https://www.riha.ee/api/v1`.

Märkus. Töötab ka `https://riha.ee/api/v1`.

## Kas proovime kohe?

Võite API-t kohe proovida. Sisestage veebisirvija aadressireal `https://www.riha.ee/api/v1/systems/kir.agri`.

Väljastatakse Kutselise kalapüügi registri masinloetav kirjeldus:

```
{
  "id": 440380,
  "details": {
    "owner": {
      "code": "70000734",
      "name": "Maaeluministeerium"
    },
    "main_resource_id": 440380,
    "purpose": "Kutselise kalapüügi register on andmekogu, mille ülesanne on võimaldada kutselise kalapüügiga tegelevate isikute, nende tegevuse ja kalalaevade üle arvestuse pidamist ning järelevalve teostamist.\n\nKutselise kalapüügi register hõlmab endas kalalaevaregistrit ja kutselise kalapüügiga seonduvaid andmeid.",
    "documents": [
      {
        "name": "Kirjeldus vanas RIHAs",
        "url": "https://vana.riha.ee/riha/main/inf/kalanduse_infosusteem/1"
      },
      {
        "name": "RIHA - KIS_ERS_arhitektuur.pdf",
        "url": "file://ae5ad796-ec74-9d13-7d52-07981d930622"
      }
    ],
    "topics": [
      "Kalandus- ja merendusküsimused"
    ],
    "data_files": [
      {
        "name": "kis-agri_18sept.xmi",
        "url": "file://5ae2cab2-92ed-7442-77f7-3f87186e9df5"
      },
      {
        "name": "kis-agri_18sept.xmi",
        "url": "file://249e3863-85fc-ffe0-087c-c519376f2954"
      }
    ],
    "uuid": "45afc7bb-4e77-2dea-8be1-a6c9c345360e",
    "meta": {
      "x_road_status": {
        "status": "JOINED",
        "timestamp": "2017-06-01T00:00:00Z"
      },
      "update_timestamp": "2017-11-13T20:07:49.993+02:00",
      "system_status": {
        "status": "IN_USE",
        "timestamp": "2017-06-07T00:00:00Z"
      },
      "creation_timestamp": "2008-12-23T09:39:18Z",
      "development_status": "IN_DEVELOPMENT"
    },
    "name": "Kutselise kalapüügi register",
    "short_name": "kir.agri",
    "legislations": [
      {
        "name": "Kalapüügiga seonduvate andmete esitamise kord",
        "url": "https://www.riigiteataja.ee/akt/128122016008"
      },
      {
        "name": "Komisjoni määrus (EÜ) nr 404/2011",
        "url": "http://eur-lex.europa.eu/legal-content/ET/TXT/?uri=celex:32011R0404R(02)"
      },
      {
        "name": "Nõukogu määrus (EÜ) nr 1224/2009",
        "url": "http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:343:0001:01:ET:HTML"
      },
      {
        "name": "KALAPÜÜGISEADUS",
        "url": "https://www.riigiteataja.ee/akt/130122015016?leiaKehtiv"
      },
      {
        "name": "Kutselise kalapüügi lubade taotlemisel esitatavate dokumentide loetelu, kalapüügilubade andmise, kehtetuks tunnistamise ning kehtivuse peatamise kord ja kalapüügilubade vormid",
        "url": "http://www.riigiteataja.ee/ert/act.jsp?id=955336"
      },
      {
        "name": " KALALAEVADE RIIKLIKU REGISTRI ASUTAMINE JA REGISTRI PIDAMISE PÕHIMÄÄRUS",
        "url": "http://riigiteataja.ee/ert/act.jsp?id=996457"
      },
      {
        "name": "Kalalaevade alajaotustesse rühmitamise kriteeriumid, segmenti kantavatele kalalaevadele esitatavad nõuded ja kalalaevade segmenti juurdelisamise võimalus",
        "url": "http://www.riigiteataja.ee/ert/act.jsp?id=717189"
      },
      {
        "name": "Kutselise kalapüügiga seonduvate andmete arvestuse andmekogu põhimäärus",
        "url": "http://webdk.agri.ee/?page=pub_pub_dynobj_file&pid=4532422&file_id=4588014&u=20100918193745"
      }
    ],
    "homepage": "https://kir.agri.ee",
    "stored_data": []
  }
}
```

Nõuanne: Kui paigaldate veebisirvijasse JSON-i vaatamise laienduse, näete andmeid trepitult.

## Milliseid andmeid pakutakse?

RIHA väljastab masinloetavaid andmeid JSON vormingus.

Kõigi infosüsteemide nimekirja saamiseks kasutage päringut

`https://www.riha.ee/api/v1/systems`

Infosüsteemide nimekirjas esitatakse iga infosüsteemi kohta lühiandmestik, nt:

```
{
  "id": null,
  "details": {
    "owner": {
      "code": "10117826",
      "name": "Bisnode Estonia AS"
    },
    "purpose": "Bisnode Estonia pakub oma klientidele äriinfoteenuseid, et aidata ettevõtetel teha paremaid äriotsuseid, suurendada müüki ja vähendada äririske",
    "documents": [
      {
        "name": "Kirjeldus vanas RIHAs",
        "url": "https://vana.riha.ee/riha/main/inf/intranet/1"
      }
    ],
    "topics": [
      "X-tee alamsüsteem"
    ],
    "meta": {
      "x_road_status": {
        "status": null,
        "timestamp": null
      },
      "update_timestamp": "2017-06-08T16:50:50Z",
      "system_status": {
        "status": "IN_USE",
        "timestamp": null
      },
      "creation_timestamp": "2017-06-02T12:03:30Z",
      "development_status": null
    },
    "name": "Intranet",
    "short_name": "10117826-intranet",
    "data_files": null,
    "uuid": "33c6a7ba-57cf-f4ab-51ae-72c838ce4f24",
    "legislations": null,
    "homepage": null,
    "stored_data": null
  }
}
```

Kuna infosüsteeme on palju, väljastatakse andmed leheküljeti. Väljastuse esimese elemendina antakse infosüsteemide arv `"totalElements":1674`, sellele järgneb element `"content"` infosüsteemide kirjeldustega. Väljastuse lõpus on lehekülje number, lehekülgede arv ja lehekülje suurus: `"page":0,"totalPages":84,"size":20`. Lehekülje suurust saab seada. Päring

`https://www.riha.ee/api/v1/systems?size=5&page=3`
 
seab lehekülje suuruseks `5` ja väljastab lehekülje `3`.

Infosüsteemide detailse kirjelduse saab eraldi päringuga: 

`https://www.riha.ee/api/v1/systems/{infosüsteemi lühinimi}`

Näiteks

`https://www.riha.ee/api/v1/systems/70002443-ekis` (Luua Metsanduskool).

Andmeid saab ka arutelude (Issues) ja kommentaaride (Comments) kohta. Lähemalt vaata API formaalsest kirjeldusest.

## Masinliidese formaalne kirjeldus

RIHA masinliides on kirjeldatud OpenAPI (varem tuntud Swagger nime all)vormingus. Kirjeldus asub:

[RIHA-Browser API](https://raw.githubusercontent.com/e-gov/RIHA-Browser/master/backend/src/main/resources/static/swagger.yaml).

Kirjelduse paremaks sirvimiseks võite kasutada ka ReDoc tööriista:

[https://kertuhiire.github.io/RIHA-Help/](https://kertuhiire.github.io/RIHA-Help/).

Vt ka [RIHA andmete JSON-skeemi](https://github.com/e-gov/RIHA-Browser/blob/master/backend/src/main/resources/infosystem_schema.json).

## Andmekasutajad

RIHA masinloetavate andmete ümber peaks kujunema erinevate andmekasutajate ökosüsteem. Teadaolevate RIHA andmeid masinliidese kaudu tarbivate süsteemide hulgas on:

"RIHA aktiivsusmonitor", `https://apidemojatest.herokuapp.com/watch`, lähtekood ja dokumentatsioon: [https://github.com/e-gov/RIHA-API-Demo](https://github.com/e-gov/RIHA-API-Demo).







