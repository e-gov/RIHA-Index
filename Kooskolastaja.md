---
layout: IT
publish: true
title: Kooskolastaja (Approver)
permalink: Kooskolastaja
---

{% include ET.html %}

# Kooskõlastaja

Rakendus, millega volitatud inimkasutaja (kooskõlastaja) saab läbi vaadata kirjeldusi ja teha kooskõlastusotsusi. Kooskõlastusotsused avaldatakse masinliidese (API) abil.  

Pääs rakendusse:

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a><a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> 

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

{% include EN.html %}

# Approver

Software application that allows a human user (person from dedicated agencies) to review descriptions and make approval decisions. Approval decisions are published through the Approver's API.  

To use the Approver, click on the icons above.

## Approver API

[Specification of Approver API](https://github.com/e-gov/RIHA-API/blob/master/approval.yaml) conforms to [Open API Initiative](https://www.openapis.org/) (former Swagger) standard.

- General
  - `swagger: '2.0'` - version of Open API (Swagger)
  - `info: [..]` - name, version and brief description of the API
  - `consumes`, `produces` - specifies that requests and responses are in JSON format.
- Access paths
  - Two access paths:
    - `/approvals.json` - returns a list of approval statuses of all information systems 
    - `/{shortname}` - request by information system shortname returns approval status of that system.
- Definitions
  - Section `definitions` specifies the format of approval status
    - `status` - textual description of approval status
      - values: `KOOSKÕLASTATUD`, `MITTE KOOSKÕLASTATUD` (NB! not standardised yet)
    - `timestamp` - time of the last approval decision.  
