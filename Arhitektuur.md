---
title: Arhitektuur (Architecture)
permalink: Arhitektuur
---

Uuendatud RIHA on üles ehitatud hajusarhitektuuri põhimõtetele.

<ul>	
<li>süsteem koosneb eraldi paigaldatavatest ja kasutatavatest rakendustest (komponentidest)</li>
<li>iga rakendus täidab üht-kaht funktsiooni</li>
<li>komponendid tarbivad teiste komponentide teavet masinliideste (API-de) kaudu ja pakuvad ise teavet samuti masinliideste kaudu</li>
<li>inimene suhtleb rakendustega kasutajaliideste kaudu</li>
<li>rakendused paigaldatakse ühes või mitmes eksemplaris.</li>
</ul>

<div id='Arhitektuurijoonis'>
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

</div>



