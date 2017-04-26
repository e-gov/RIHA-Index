---
title: Andmehoidja
permalink: Andmehoidja
---

# Andmehoidja
{:.no_toc}

* TOC
{:toc}

Vt ka: [Kesksüsteem](Kesk).

Andmehoidja (RIHA-Storage) on serveriteenus (e RIHA _backend_ komponent), mis korraldab andmete püsihoidmist. Andmehoidla teenindab oma API kaudu RIHA teisi serveriteenuseid, olles vahendajaks PostgreSQL andmebaasi ja HTTPS päringute vahel.

```
                             Serveriteenused

+------------+ +------------+ +------------+ +------------+ +------------+
|            | |            | |            | |            | |            |
| KIRJELDAJA | |   KOGUJA   | |   HINDAJA  | |  SIRVIJA   | | TEAVITAJA  |
|            | |            | |            | |            | |            |
+-----+------+ +----+-------+ +------+-----+ +-------+----+ +------+-----+
      ^             ^                ^               ^             ^
      |             |    HTTPS       |               |             |
      |             |                v               |             |
      |             |         +------+-----+         |             |
      |             +-------> +            | <-------+             |
      +---------------------> + ANDMEHOIDJA| <---------------------+
                              |            |
                              +---+-----+--+
                                  |     ^
                                  |     |
                                  v     |

                         Andmehoidla (PostgreSQL)


```
Andmehoidja kood asub [RIHA-Storage](https://github.com/e-gov/RIHA-Storage).



