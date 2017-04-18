---
title: URL-id
permalink: URLid
---

# URL-id

<p class='staatus'>Läbi arutada infraosakonnaga, paigaldamise vaatest. Võimalikud on olulised muutused</p>

<p class='rem'>Seonduv: RIHA komponentide APIde spetsifikatsioonid ja kasutajaliideste dokumentatsioon</p>

__RIHA komponent__ – hajusalt (asutuse mõju alla olevasse taristusse) või keskselt (RIA taristusse) paigaldatav, käitatav, mingit teenust või teenuseid osutav eraldiseisev tarkvararakendus.

__RIHA teenus__ – RIHA komponendi poolt pakutav kasutajaliides (UI) inimkasutajale või masinliides (API) masinkasutajale; komponent üldjuhul osutab üht teenust, kuid võib osutada ka mitut, sh nii UI kui ka API kaudu.

__RIHA API__ – 1) kitsamas mõttes – RIHA kesksüsteemi kokkukogutud kirjeldusi kättesaadavaks tegev masinliides (Avaldaja e Publisher-i API); laiemas mõttes – hajusarhitektuurilise RIHA kõigi masinliideste kogum:

- Kirjeldaja API
- Hindaja API
- Sirvija API
- Visualiseerija API
- Koguja API
- Teavitaja API
- muude lisanduvate komponentide API-d.

__RIHA kasutajaliides__ – RIHA komponentide kasutajaliideste kogum (disain, HTML/CSS ja UIG).

__RIHA kesksüsteem__ – RIA taristus paiknevad komponendid, mis võimaldavad pakkuda terviklikku kataloogiteenust.

URL-de süsteemi kujundamisel lähtutakse API-de disaini juhise https://agiil.github.io/IT/API põhimõtetest ja terminoloogiast.

RIHA kesksüsteemi API-de teenusenimed kasutavad unifitseeritud nimetüve `riha.ee`.

Hajusalt paigaldatud komponentide (Kirjeldaja) ja ise teostatud Kirjeldaja API teenusenime valib vastava komponendi haldaja. Soovituslik nimemuster on `api.riha.<asutus>.ee`.

Kesksüsteemi komponentide teenusenimed:

`https://riha.ee` - peamine sisenemispunkt RIHA kesksüsteemi

`https://riha.ee/asutus/RIA` - sisenemispunkt asutuse vaatesse

## Vaated

|                |   Sirvi     |   Kirjelda  |  Hinda         |
|------------|------------|-------------|----------------|
|  Tervik   |      (1)      |     (2)        |     (3)           |
|  Asutus   |      (4)      |                 |    (6)            |
|  Infosüsteem   |     (7)     |     (8)     |      (9)       |

(1) - esmane sisenemispunkt RIHA kesksüsteemi - `https://riha.ee`, 

(2) - peamine sisenemispunkt kirjeldamisse - `https://riha.ee/Kirjelda`, `https://riha.ee/Produce`

(3) - peamine sisenemispunkt hindamisse - `https://riha.ee/Hinda`, `https://riha.ee/Assess`


### Sirvimine

- sirvimise üldvaade - esmane sisenemispunkt RIHA kesksüsteemi - `https://riha.ee`; nn avaleht, võimaldab liikuda mitmes suunas: asutuste otsimine, infosüsteemide otsimine, kirjeldamine, hindamine.

### Kirjeldamine

- kirjeldamise üldvaade - `https://riha.ee/Kirjelda`

- konkreetse infosüsteemi kirjeldamine - `https://riha.ee/Kirjelda/RIHA`

###   Hindamine

- hindamise üldvaade - `https://riha.ee/Hinda`

- konkreetse infosüsteemi hindamine - `https://riha.ee/Hinda/RIHA`

### Infosüsteemide lõikes

- infosüsteemide sirvimise vaade
  - `https://riha.ee/Infosüsteemid`
  - `https://riha.ee/Systems`
- konkreetse infosüsteemi vaade
  - `https://riha.ee/RIHA`

### Asutuste lõikes

- asutuste sirvimise vaade
  - `https://riha.ee/Asutused`
  - `https://riha.ee/Orgs`
- konkreetse asutuse vaade
  - `https://riha.ee/RIA`
  - `https://riha.ee/70006317`

## API

- Sirvija
  - UI – `riha.ee`
- Kirjeldaja
  - kasutajaliides – `kirjelda.riha.ee`
  - API – puudub, kirjeldused kogutakse kohe Avaldajasse
- Avaldaja (Publisher)
  - API – `api.riha.ee`
- Hindaja (Approver)
  - UI – `hinda.riha.ee`
  - API – `api.hinda.ee`
- Teavitaja
  - Saatmis-API – `api.saada.riha.ee`
  - Saatmise UI – `saada.riha.ee`
  - Tellimis-API – `api.elli.riha.ee`
  - Tellimise UI – `telli.riha.ee`


