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
2. Kirjelduse URL-i teatamine
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

## Roles

1. OWNER of information system
2. RIA SERVICE MANAGER
3. APPROVER
4. RIHA USER

## Operations

1. Describing information system
  - OWNER, using [Producer](Kirjeldaja) - or, if she or he wishes, a text editor or programmer's editor, composes a description of information system.
    - Description has to conform to [RIHA Description Standard](Kirjeldusstandard).
  - OWNER makes the description publicly available on the internet.
    - When [Producer](Kirjeldaja) is used, Producer publicises the description.
2. Reporting description URL
  - OWNER reports to RIA SERVICE MANAGER the URL of the description.
  - RIA SERVICE MANAGER enters the URL into [Publisher](Avaldaja)'s configuration.
3. Harvesting of descriptions
  - [Publisher](Avaldaja) periodically visits reported URLs and gathers the descriptions into central datastorage.
  - [Publisher](Avaldaja) makes harvested descriptions available through API.
4. Approving
  - APPROVER, using [Approver](Kooskõlastaja), reviews the harvested descriptions and makes approval decisions.
  - Approval decisions are made available through [Approver](Kooskõlastaja)'s API.
5. Using RIHA data 
  - RIHA USER, using [Browser](Sirvija), views descriptions and approval decisions.

<pre>
                                                  RIHA USER

                                                      ,-.
                                  +-------------+     `|'
APPROVER                          |Sirvija      |     /|\
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
     SERVICE   /|\            |         |
     MANAGER    |  +----------+         |
               / \                      +
                ^        ,-.            ◯  API
                |        `|'     +-------------+
                +------+ /|\     |Kirjeldaja   |
                          | +--> |             |
                         / \     +-------------+

                        OWNER
  
</pre>