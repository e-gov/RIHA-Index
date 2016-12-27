---
layout: IT
publish: true
title: Sirvija (Browser)
permalink: Sirvija
nr: 5
---

---

{% include ET.html %}

# Sirvija

Sirvija on rakendus, millega inimkasutaja saab tutvuda kirjeldustega ja kooskõlastusotsustega. Esitatakse järgmid väljad:

- `omanik` - infosüsteemi omaniku registrikood
- `infosüsteemi nimi`
- `viimati muudetud` - infosüsteemi kirjelduse viimase muutmise kuupäev
- `staatus' - infosüsteemi staatus
- `kooskõlastatud` - viimase kooskõlastusotsuse tegemise kuupäev
- `kooskõlastamise staatus` - viimase kooskõlastusotsuse sisu.

Andmeid saab väljade järgi sortida.

Sirvija saab oma andmed [Avaldajalt](Avaldaja) ja [Kooskõlastajalt](Kooskõlastaja).

Pääs rakendusse:

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a>

---

{% include EN.html %}

# Browser

Software application that allows a human user to browse descriptions and approval decisions. 

- `omanik` - registry code of the owner of the information system
- `infosüsteemi nimi` - name of the information system
- `viimati muudetud` - date of last change of information system description
- `staatus' - status of information system
- `kooskõlastatud` - data of the last approval decision
- `kooskõlastamise staatus` - the last approval decision (e.g. `KOOSKÕLASTATUS` (Approved), `MITTE KOOSKÕLASTATUD` (Not Approved)).

Browser takes descriptions from the Publisher. 

To use Browser, click on the icon above
