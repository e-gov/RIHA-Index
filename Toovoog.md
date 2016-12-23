---
layout: IT
publish: true
title: Töövoog (Workflow)
permalink: Toovoog
---

{% include ET.html %}

# Üldine töövoog

## Rollid

1. Infosüsteemi haldaja e OMANIK
2. RIA TEENUSEHALDUR
3. KOOSKÕLASTAJA
4. RIHA KASUTAJA

## Toimingud

1. Infosüsteemi kirjeldamine
  - OMANIK, kasutades [Kirjeldajat](Kirjeldaja), soovi korral teksti- või programmeerija redaktorit, koostab infosüsteemi kirjelduse.
    - Kirjeldus peab vastama [RIHA kirjeldusstandardile](Kirjeldusstandard).
  - OMANIK paneb kirjelduse avalikult internetti välja.
    - [Kirjeldaja](Kirjeldaja) kasutamisel on kirjeldus automaatselt välja pandud.
2. Kirjeldusest teatamine
  - OMANIK teatab RIA TEENUSEHALDUR-ile koostatud kirjelduse URL-i.
  - RIA TEENUSEHALDUR registreerib kirjelduse URL-i [Avaldaja](Avaldaja) konfiguratsioonis.
3. Kirjelduste kokkukogumine
  - [Avaldaja](Avaldaja) käib perioodiliselt URL-id läbi ja kogub kirjeldused kokku.
  - [Avaldaja](Avaldaja) teeb kirjeldused masinliidese (API) kaudu kõigile kättesaadavaks.
4. Kooskõlastamine
  - KOOSKÕLASTAJA, kasutades [Kooskõlastajat](Kooskõlastaja), vaatab läbi kokkukogutud kirjeldused ja teeb kooskõlastusotsused.
  - Kooskõlastusotsused saavad avalikult kättesaadavaks [Kooskõlastaja](Kooskõlastaja) masinliidese (API) kaudu.
5. RIHA andmete kasutamine
  - RIHA KASUTAJA saab [Sirvija](Sirvija) abil tutvuda kirjeldustega ja kooskõlastusotsustega.

<div id='Arhitektuurijoonis'>
<pre>
                                            RIHA KASUTAJA
                                                     ,-.
                                 +-------------+     `|'
KOOSKÕLASTAJA                    |Sirvija      |     /|\
                                 |             +---+  |
,-.                              +--+--+-------+     / \
`|'                                 ^  ^
/|\     +-------------+  API        |  |
 | +--> |Kooskõlastaja|◯ +----------+  |
/ \     |             |                +
        +------+------+     +---------+◯  API
               ^            |   +-------------+
               +------------+   |Avaldaja     |
                                |             |
              ,-.           Konf+------+------+
    RIA       `|'            ^         ^
    TEENUSE-  /|\            |         |
    HALDUR     |  +----------+         |
              / \                      +
               ^        ,-.            ◯  API
               |        `|'     +-------------+
               +------+ /|\     |Kirjeldaja   |
                         | +--> |             |
                        / \     +-------------+
                      OMANIK
</pre>  

</div>

{% include EN.html %}

# General Workflow
