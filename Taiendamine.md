---
title: Teatmiku täiendamine
permalink: Taiendamine
---

# Teatmiku täiendamine
{:.no_toc}

* TOC
{:toc}


Arhitektuuriteatmiku tekstid asuvad GitHub repos [https://github.com/e-gov/RIHA-Index](https://github.com/e-gov/RIHA-Index).

Arhitektuuriteatmik publitseeritakse teisendaja [Jekyll](https://jekyllrb.com/) abil aadressil [https://e-gov.github.io/RIHA-Index/](https://e-gov.github.io/RIHA-Index/) ning seal edasi ametliku koopiana RIA veebilehel.

## Uue artikli loomine

Teave on jagatud artikliteks.

Artiklid kirjutatakse Markdown-is (Jekyll [Kramdown](https://kramdown.gettalong.org/syntax.html) stiil).

Uue artikli loomiseks:
  - tuleb juurkataloogis luua sobiva nimega Markdown-fail (laiend `.md`)
  - faili päises (ingl _front matter_) peavad olema:
    -     
    ```
    ---
    title: artikli pealkiri
    permalink: artikli URL-nimeosa
    ---
    ```
    - `title` annab artikli pealkirja (seda kasutatakse külgmenüüs)
    - `permalink` määrab artikli URL-i
  - YAML-failis `_data/Riba.yml` tuleb määrata artikli koht külgmenüüs.

## Joonised

Jooniste tegemiseks on hea kasutada [ASCIIFlow](http://asciiflow.com/) veebiredaktorit.


## Esiletõsted

__ Märkuste kujundamiseks__ võib kasutada CSS stiiliklassi  `rem`. Näiteks:

```
<p class='rem'>See on märkus.</p>
```

<p class='rem'>See on märkus.</p>

__Pooleliolevate teemade__ näitamiseks võib kasutada CSS stiiliklassi `staatus`. Näiteks:

```
<p class='staatus'>See leht vajab täiendamist.</p>
```

<p class='staatus'>See leht vajab täiendamist.</p>

