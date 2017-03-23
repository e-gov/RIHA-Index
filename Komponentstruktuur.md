---
title: Komponentstruktuur
permalink: Komponentstruktuur
---

Uus RIHA rajatakse hajuspõhimõttele, mille kohaselt soositakse infosüsteemide kirjelduste publitseerimist asutuse enda taristus. Asutus võib vastava RIA arendatud komponendi (Kirjeldaja) paigaldada oma taristusse, võib aga ka arendada liidese, mis publitseerib asutuse enda metaandmete varamust kirjeldusi (vastavalt RIHA API spetsifikatsioonile).

Asutustele, kes Kirjeldajat oma taristusse paigaldada ei soovi, pakutakse RIA taristusse paigaldatud Kirjeldajat.

RIHA koosneb eraldi paigaldatavatest ja kasutatavatest rakendustest (komponentidest).

Iga rakendus täidab üht-kaht funktsiooni.

Komponendid tarbivad teiste komponentide teavet masinliideste (API-de) kaudu ja pakuvad ise teavet samuti masinliideste kaudu.

Inimene suhtleb rakendustega kasutajaliideste kaudu.

Rakendused paigaldatakse ühes või mitmes eksemplaris.

__RIHA kesksüsteemi__ moodustavad RIA taristusse paigaldatud komponendid.

<pre>
                                                     ,-.
                                 +-------------+     `|'
                                 |Sirvija      |     /|\
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
                                +------+------+
                                       ^
                                       |
                                       |
                                       +
                        ,-.            ◯  API
                        `|'     +-------------+
                        /|\     |Kirjeldaja   |
                         | +--> |             |
                        / \     +-------------+
  
</pre>  



