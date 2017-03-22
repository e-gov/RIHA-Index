---
title: RIHA
layout: IT
---

---

{% include ET.html %}

RIHA-s (Riigi infosüsteemi haldussüsteemis) saab:

- kirjeldada infosüsteeme
- kooskõlastada infosüsteeme
- tutvuda kirjeldustega ja kooskõlastusotsustega.

Pääs rakendustesse (Access to Apps & APis):

| komponent | inimkasutaja rakendus (human UI) | masinliides (API) |
| :--- | :---: | :---: |
| [Sirvija/Browser](Sirvija) | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8082/' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> | |
| [Kooskõlastaja/Approver](Kooskolastaja) | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> | masinliides (API): <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8080/approvals' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> |
| [Avaldaja/Publisher](Avaldaja) |  | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8081/systems.json' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> |
| [Kirjeldaja/Producer](Kirjeldaja)  |  |  |
| paigaldus 1 | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8083/systems.json' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> |
| paigaldus 2 | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #616161; font-size: 48px;'>account_circle</i></a> | <a href='http://ec2-35-160-53-79.us-west-2.compute.amazonaws.com:8084/systems.json' style='border-bottom: none !important;'><i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i></a> |

---

{% include EN.html %}

In RIHA (Administration System for the State Information System RIHA) one can:

- describe information systems
- approve information systems
- view information system descriptions and approval decisions

<div class='block__warning'>
  <p class='block__warning--heading'>A Product under Agile Development</p>
  <p>
    This is not a production-ready product yet. Please submit comments and error reports at <a href='https://e-gov.github.io/RIHA-Launcher/Osale'>Osale</a>.
  </p>
</div>



