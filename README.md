# RIHA Käivitaja (Launcher)

Käivitaja on veebileht, mis:

- tutvustab RIHA
- seletab, kuidas RIHA kasutada
- annab lingid hajus-RIHA erinevatele rakendustele.

## Täiendajale

- Käivitajas esitatav teave on jagatud artikliteks (ingl _pages_).
- Artiklid kirjutatakse Markdown-is (Jekyll [Kramdown](https://kramdown.gettalong.org/syntax.html) stiil).
- Uue artikli loomiseks:
  - tuleb juurkataloogis luua sobiva nimega Markdown-fail (laiend `.md`)
  - faili päises (ingl _front matter_) peavad olema:
    -     
    ```
    ---
    layout: IT
    publish: true
    title: Osale (Contribute)
    permalink: Osale
    ---
    ```
    - `layout: IT` tähendab, et kasutatakse malli `IT`
    - `publish` näitab, et tegu on avaldamisvalmis tekstiga või mustandiga
    - `title` annab artikli pealkirja (seda kasutatakse külgmenüüs)
    - `permalink` määrab artikli URL-i
  - YAML-failis `_data/Riba.yml` tuleb määrata artikli koht külgmenüüs.
- Jooniste tegemiseks on hea kasutada [ASCIIFlow](http://asciiflow.com/) veebiredaktorit.
- Väiksema kirja tegemiseks on stiil `teine`. Seda tuleb kasutada HTML-i põimimisega Markdowni:
```
<p class='teine'>See on väiksem tekst.</p>
```
- kolm liiki infokaste teabe esiletoomiseks (`note`, `tip` ja `warning`):
```
<div class='block__note'>
  <p class='block__note--heading'>Infokasti pealkiri</p>
  <p>
    Infokasti tekst
  </p>
</div>
```


## Edasiarendajale

- Käivitaja on [Jekyll](https://jekyllrb.com/) rakendus.
