---
layout: test
publish: true
title: RIHA
nr: 1
---

# RIHA

RIHA (Riigi infosüsteemi haldussüsteem) on süsteem, millega saab:

- kirjeldada infosüsteeme
- kooskõlastada infosüsteeme
- tutvuda kirjeldustega ja kooskõlastusotsustega.

## Arhitektuur

Uuendatud RIHA on üles ehitatud hajusarhitektuuri põhimõtetele.

- süsteem koosneb eraldi paigaldatavatest ja kasutatavatest rakendustest (komponentidest)
- iga rakendus täidab üht-kaht funktsiooni
- komponendid tarbivad teiste komponentide teavet masinliideste (API-de) kaudu ja pakuvad ise teavet samuti masinliideste kaudu
- inimene suhtleb rakendustega kasutajaliideste kaudu
- rakendused paigaldatakse ühes või mitmes eksemplaris.

## Pääs rakendustesse


[Sirvija/Browser](Sirvija)

<i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>account_balance</i> inimesele: [http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/)

[Kooskõlastaja/Approver](Kooskolastaja)

- <i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i> masinale:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals)
- <i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>account_balance</i> inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/)

[Avaldaja/Publisher](Avaldaja)

- <i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i> masinale: [http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json)

[Kirjeldaja/Producer](Kirjeldaja)

Paigaldus 1

- <i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>account_balance</i> inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083)
- <i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i> masinale: 
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json)

Paigaldus 2

- <i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>account_balance</i> inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084)
- <i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i> masinale: 
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json)
