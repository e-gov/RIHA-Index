---
layout: IT
publish: true
title: Arhitektuur (Architecture)
permalink: Arhitektuur
---

{% include ET.html %}

Uuendatud RIHA on üles ehitatud hajusarhitektuuri põhimõtetele.

<div class='teine'>
<ul>	
<li>süsteem koosneb eraldi paigaldatavatest ja kasutatavatest rakendustest (komponentidest)</li>
<li>iga rakendus täidab üht-kaht funktsiooni</li>
<li>komponendid tarbivad teiste komponentide teavet masinliideste (API-de) kaudu ja pakuvad ise teavet samuti masinliideste kaudu</li>
<li>inimene suhtleb rakendustega kasutajaliideste kaudu</li>
<li>rakendused paigaldatakse ühes või mitmes eksemplaris.</li>
</ul>
</div>

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

{% include EN.html %}

New RIHA has been re-built in accordance with principles of distributed architecture.

<div class='teine'>
<ul>	
<li>The system consists of applications (components) that are deployed and used separately</li>
<li>Each component performs a single function.</li>
<li>Components consume data from other components via machine interfaces (APIs) and themselves offer data via machine interfaces.</li>
<li>Human user communicates with applications via user interfaces.</li>
<li>Applications are deployed in one or more instances.</li>
</ul>
</div>