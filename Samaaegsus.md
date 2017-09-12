---
title: Samaaegsuse analüüs
permalink: Samaaegsus
sidebar: false
---

# Samaaegsuse analüüs

Vaatleme olukordi, RIHA kasutajad võivad tegutseda üheaegselt, tekkivaid kollisioone (põrkeid) ja nende lahendamise mehhanisme.

***Kirjelduse samaaegne redigeerimine***.

Stsenaarium 1. Kasutajad A ja B avavad redigeerimiseks sama infosüsteemi vm objekti kirjelduse. A vajutab `Salvesta`. Seejärel vajutab `B` `Salvesta`. _Hilisem salvestus kirjutab varasema üle. Kuid A töö ei lähe kaduma - see on leitav kirjelduse versiooniajaloost._

Stsenaarium 2. `A` ja `B` vajutavad `Salvesta` praktiliselt üheaegselt. Veebisirvija teeb `POST` päringu kirjelduse salvestamiseks ja seejärel `GET` päringu salvestatud kirjelduse kuvamiseks (kas see on tingimata vajalik?). Võib juhtuda, et ühe kasutaja `POST`-i ja `GET`-i vahel jõuab teine kasutaja `POST`-i teha. _Sellisel juhul tekib kasutajale mulje, et tema töö salvestati muudetud kujul._

***Kahe samanimelise uue objekti loomine***. Kasutajad `A` ja `B` hakkavad samaaegselt kirjeldama uut infosüsteemi. Soovivad valida sama lühinime. _Salvestamisel kontrollitakse ja öeldakse, et nimi on juba olemas._ 

***Arutelu samaaegne sulgemine kahe kasutaja poolt***. Kasutajad `A` ja `B` loevad üheaegselt sama arutelu ja otsustavad selle sulgeda. `A` suleb arutelu. `B`-ni see otsus ei jõua. `B` otsustab arutelu sulgeda. _Veebisirvijast saadetakse vastav `POST`-päring. Server kontrollib, kas arutelu on juba suletud. Teatab, et arutelu on juba suletud._