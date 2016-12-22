---
layout: IT
publish: true
title: RIHA
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

Kooskõlastaja/Approver

- masinale:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals)
- inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/)

Avaldaja/Publisher

- masinale: [http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json)

Sirvija/Browser

inimesele: [http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/)

Kirjeldaja/Producer

Paigaldus 1

- inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083)
- masinale: 
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json)

Paigaldus 2

- inimesele:
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084)
- masinale: 
[http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json](http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json)