---
title: Teenuste URL-id
permalink: URLid
---

# Teenuste URL-id

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


