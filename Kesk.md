---
title: Kesksüsteem
permalink: Kesk
---


![](img/JOONIS-1204-02.PNG)

Joonis kujutab RIHA kesksüsteemi ülesehitus.

__Inimkasutaja__ suhtleb RIHAga veebisirvija vahendusel.

__Kasutajarakendus__. Veebisirvijas töötav RIHA kliendipoolne rakendus:
- pakub ühtset kasutajakogemust, võimalust liikuda sujuvalt erinevate vaadete ja rollide vahel
- võimalust avada kliendirakendust või selle osi mitmes sirvimiskontekstis (sakis)
- teostatakse üheleherakenduse (ingl _SPA, single page application_) põhimõttel (ei pea olema absoluutne SPA).

_Serveriteenused__ on RIA taristusse paigaldatud rakenduste - serverikomponentide - poolt pakutavad HTTPS REST API teenused. Serveriteenuseid tarbivad:
- veebisirvijas töötavad RIHA kasutajarakendused
- muud võimalikud RIHA API-t kasutavad rakendused.

Üksteise serveriteenuseid kasutavad ka serverikomponendid omavahel.

__Isoleerimine__. Serverikomponendid võivad olla paigaldatud ühte keskkonda (Apache veebiserverisse), kuid on loogiliselt iseseisvad ja suhtlevad üksteisega ainult HTTPS REST API-de kaudu.

Serverikomponentide hulka kuuluvad (nimekiri võib täieneda):
- __Autentija__ korraldab ja teostab autentimist, kasutades kas oma autentimisprotseduuri (ID-kaardiga autentimine Apache veebiserveri abil) või välist eIDAS-autentimisteenust; vt [Autentimine](Autentimine)
- __Autoriseerija__ autoriseerib autenditud kasutaja; vt [Autoriseerimine](Autoriseerimine)
- Kirjeldaja
- Hindaja
- Koguja
- Sirvija
- Teavitaja.

__Andmehoidla__ eesmärk on RIHA kui süsteemi oleku (ingl _state_) hoidmine. Andmehoidla moodustavad kirjeldused, hinnangud, teavitused jm andmed. Andmeid hoitakse JSON, YAML vm masintöödeldavas vormingus, vajadusel relatsioonilise andmebaasi vormingus. Andmed võivad asuda ühises keskkonnas (failisüsteem, PostgreSQL andmebaas), kuid on loogiliselt eraldihoitud.

_Autoriseerimisandmete hoidla__ ülesanne on hoida teavet isikutele omistatud rollide kohta. Autoriseerimisandmete hoidla teostatakse Active Directory (AD) tarkvaraga.



