---
layout: IT
publish: true
title: RIHA
nr: 1
---

RIHA (Riigi infosüsteemi haldussüsteem) on süsteem, millega saab:

- kirjeldada infosüsteeme
- kooskõlastada infosüsteeme
- tutvuda kirjeldustega ja kooskõlastusotsustega.

## [Sirvija/Browser](Sirvija)

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a>

## [Kooskõlastaja/Approver](Kooskolastaja)

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> 
<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a>

## [Avaldaja/Publisher](Avaldaja)

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a>

## [Kirjeldaja/Producer](Kirjeldaja)

Paigaldus 1

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> 
<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> 

Paigaldus 2

<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> 
<a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json' style='text-decoration: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> 

---

## Arhitektuur

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
