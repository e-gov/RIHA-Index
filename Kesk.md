---
title: Kesksüsteem
permalink: Kesk
---

# Kesksüsteem

```
                                              ,+.   Kasutaja,
+-----------+ +----------+                    `|'   rollides KIRJELDAJA,
|eIDAS      | |SAP       |                    /|\   HINDAJA, SIRVIJA
|autentimis++ |atribuudi++   Veebisir^ija      +
|teenus     | |teenus    |                    / \
+-----+-----+ +----+-----+       +------------------------+    +-------------+
      ^            ^             | Ühtset kasutajakogemust|    |RIHA API+t   |
      |            |             | pakku^ üheleherakendus |    |kasuta^      |
      |            |             |                        |    |muu rakendus |
      |            |             +------------------------+    +------+------+
      |            |                                                  |
  +----------------+tulemüür/ruuter/koormusjaotur F5 +-----------------------+
      |            |                                                  |
      |            |         +----------+      Ser^eriteenused        v
      |            |         |          |           (Ja^a)
 +----+------------+---------------------------------------------------------+
 | AUTENTIJA      AUTORI+    |KIRJELDAJA|  HINDAJA KOGUJA SIRVIJA TEAVITAJA  |
 |                SEERIJA    |          |                      VISUALISEERIJA|
 |                           |          |            ANDMEHOIDJA             |
 +--------------------------------------------------------+------------------+
                             |          |                 |
                             |          |                 v
                             |          | Andmehoidla (PostgreSQL)
     +----------------+   +-------------+------------------------------------+
     | Autoriseerimis++   |  | Andmed ühes keskkonnas, kuid majutatavate     |
     | andmete hoidla |   |  | asutuste ja ser^eriteenuste kaupa             |
     |                |   |  | isoleeritult                                  |
     +----------------+   +-------------+------------------------------------+
                             |          |
                             +----------+
                            Majutatav asutus
```

Joonis kujutab RIHA kesksüsteemi ülesehitust.

__Inimkasutaja__ suhtleb RIHAga veebisirvija vahendusel. Inimkasutaja:
- võib tegutseda mitmes rollis: `Kirjeldaja`, `Hindaja`, `Sirvija`
- `Sirvija` võib olla autentimata või autenditud, teised rollid peavad olema autenditud.

__Kasutajarakendus__. Veebisirvijas töötav RIHA kliendipoolne rakendus:
- pakub ühtset kasutajakogemust, võimalust liikuda sujuvalt erinevate vaadete ja rollide vahel
- võimalust avada kliendirakendust või selle osi mitmes sirvimiskontekstis (sakis).

Kasutajarakendus teostatakse üheleherakenduse (ingl _SPA, single page application_) põhimõttel (ei pea olema absoluutne SPA).

__Serveriteenused__ on RIA taristusse paigaldatud rakenduste - serverikomponentide - poolt pakutavad HTTPS REST API teenused. Serveriteenuseid tarbivad:
- veebisirvijas töötavad RIHA kasutajarakendused
- teised RIHA serveriteenused
- muud võimalikud RIHA API-t kasutavad rakendused.

__Isoleerimine__. Serverikomponendid võivad olla paigaldatud ühte keskkonda (Apache veebiserverisse), kuid on loogiliselt iseseisvad ja suhtlevad üksteisega ainult serveriteenuste kaudu.

Serverikomponentide hulka kuuluvad (nimekiri võib täieneda):
- __[Autentija](Autentimine)__ - korraldab ja teostab autentimist
- __[Autoriseerija](Autoriseerimine)__ - autoriseerib autenditud kasutaja, kasutades kas kohapealset Autoriseerimisandmete hoidlat ja/või [SAP atribuuditeenust](LiidesSAPga)
- __[Kirjeldaja](Kirjeldaja)__
- __[Hindaja](Hindaja)__
- __[Koguja](Koguja)__
- __[Sirvija](Sirvija)__
- __[Visualiseerija](Visualiseerija)__
- __[Teavitaja](Teavitused)__

__Andmehoidla__ eesmärk on RIHA kui süsteemi oleku (ingl _state_) hoidmine. Andmehoidla moodustavad kirjeldused, hinnangud, teavitused jm andmed. Andmeid hoitakse JSON, YAML vm masintöödeldavas vormingus, vajadusel relatsioonilise andmebaasina. Andmed võivad asuda ühises keskkonnas (failisüsteem, PostgreSQL andmebaas), kuid on loogiliselt eraldihoitud selles mõttes, et igal serverikomponendil on oma andmed, millele teine serverikomponent pääseb ligi ainult pöördumisega vastava serveriteenuse poole.

__Autoriseerimisandmete hoidla__ ülesanne on hoida teavet isikutele omistatud rollide kohta. Autoriseerimisandmete hoidla teostatakse Active Directory (AD) tarkvaraga.



