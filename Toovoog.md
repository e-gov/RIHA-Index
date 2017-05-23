---
title: RIHA üldine töövoog
permalink: Toovoog
---

# RIHA üldine töövoog

## Rollid

1. Infosüsteemi haldaja e OMANIK
2. RIA TEENUSEHALDUR
3. HINDAJA
4. RIHA KASUTAJA

## Toimingud

1. Infosüsteemi kirjeldamine
  - OMANIK, kasutades [Kirjeldajat](Kirjeldaja), soovi korral teksti- või programmeerija redaktorit, koostab infosüsteemi kirjelduse.
    - Kirjeldus peab vastama [RIHA kirjeldusstandardile](Kirjeldusstandard).
  - OMANIK paneb kirjelduse avalikult internetti välja.
    - [Kirjeldaja](Kirjeldaja) kasutamisel on kirjeldus automaatselt välja pandud.
2. Kirjelduse URL-i teatamine
  - OMANIK teatab RIA TEENUSEHALDUR-ile koostatud kirjelduse URL-i.
  - RIA TEENUSEHALDUR registreerib kirjelduse URL-i [Avaldaja](Avaldaja) konfiguratsioonis.
3. Kirjelduste kokkukogumine
  - [Avaldaja](Avaldaja) käib perioodiliselt URL-id läbi ja kogub kirjeldused kokku.
  - [Avaldaja](Avaldaja) teeb kirjeldused masinliidese (API) kaudu kõigile kättesaadavaks.
4. Hindamine
  - HINDAJA, kasutades [Hindajat](Hindaja), vaatab läbi kokkukogutud kirjeldused ja teeb hindamisotsused.
  - Hindamisotsused saavad avalikult kättesaadavaks [Hindaja](Hindaja) masinliidese (API) kaudu.
5. RIHA andmete kasutamine
  - RIHA KASUTAJA saab [Sirvija](Sirvija) abil tutvuda kirjeldustega ja kooskõlastusotsustega.

<pre>
                                              RIHA KASUTAJA
                                                       ,+.
                                   +-------------+     `|'
HINDAJA                            |   Sirvija   |     /|\
                                   |             +---+  +
  ,+.                              +--+--+-------+     / \
  `|'                                 ^  ^
  /|\     +-------------+  API        |  |
   + +--> |   Hindaja   |◯ +----------+  |
  / \     |             |                +
          +------+------+     +---------+◯  API
                 ^            |   +-------------+
                 +------------+   |   Avaldaja  |
                                  |             |
                ,+.           Konf+------+------+
      RIA       `|'            ^         ^
      TEENUSE+  /|\            |         |
      HALDUR     +  +----------+         |
                / \                      +
                 ^        ,+.            ◯  API
                 |        `|'     +-------------+
                 +------+ /|\     | Kirjeldaja  |
                           + +--> |             |
                          / \     +-------------+
                        OMANIK

</pre>  

