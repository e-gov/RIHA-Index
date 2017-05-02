---
title: Teatmiku täiendamine
permalink: Taiendamine
---

# Teatmiku täiendamine
{:.no_toc}

* TOC
{:toc}

<p class='staatus'>Ettepanekuid arhitektuuriteatmiku täiendamiseks saab igaüks teha lisaks Pull Request-idele ka <a href='https://github.com/e-gov/RIHA-Index/issues'>Issue</a>-de abil.</p>>

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

Sisukorra lisamiseks vt käesoleva artikli lähteteksti.

## Joonised

Jooniste tegemiseks on sobiv kasutada [ASCIIFlow](http://asciiflow.com/) veebiredaktorit. Tekst- e ASCII joonised tuleb õigeks kuvamiseks asetada kolmekordsete _backtick_ sümbolite vahele (vt nt leht [Kesksüsteem](Kesk)). Joonise uuendamise töövoog: 1) ava tekstiredaktoris joonist sisaldava lehe lähtetekst; 2) kopeeri tekstjoonis ASCIIFlow-sse; 3) muutmise järel vajuta nuppu `Upload` ja kopeeri avaneva akna sisu lehe lähteteksti.

## Esiletõsted

Märkuste kujundamiseks võib kasutada CSS stiiliklassi  `rem`. Näiteks:

```
<p class='rem'>See on märkus.</p>
```

<p class='rem'>See on märkus.</p>

Pooleliolevate teemade näitamiseks võib kasutada CSS stiiliklassi `staatus`. Näiteks:

```
<p class='staatus'>See leht vajab täiendamist.</p>
```

<p class='staatus'>See leht vajab täiendamist.</p>

## Kasulikku

`***`***Rasvane kaldkiri***`***`
