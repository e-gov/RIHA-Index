---
title: URL-id
permalink: URLid
---

# URL-id
{:.no_toc}

<p class='staatus'>Kavand. Läbi arutada infraosakonnaga. Võimalikud on muutused</p>

* TOC
{:toc}

Vt ka [Kesksüsteem](Kesk), [API-de disaini juhis](https://agiil.github.io/IT/API)

## Mõisted

_Kasutaja_, RIHA inimkasutaja. 

_Kasutajarakendus_, veebisirvijasse laetud RIHA klientrakendus.

_RIHA komponent_ – hajusalt (asutuse mõju alla olevasse taristusse) või keskselt (RIA taristusse) paigaldatav, käitatav, mingit teenust või teenuseid osutav eraldiseisev tarkvararakendus.

_RIHA teenus_ – RIHA komponendi poolt pakutav kasutajaliides (UI) inimkasutajale või masinliides (API) masinkasutajale; komponent üldjuhul osutab üht teenust, kuid võib osutada ka mitut, sh nii UI kui ka API kaudu.

_RIHA API_ – 1) kitsamas mõttes – RIHA kesksüsteemi kokkukogutud kirjeldusi kättesaadavaks tegev masinliides (Avaldaja e Publisher-i API); laiemas mõttes – hajusarhitektuurilise RIHA kõigi masinliideste kogum: Kirjeldaja API, Hindaja API, Sirvija API, Visualiseerija API, Koguja API, Teavitaja API, muude lisanduvate komponentide API-d.

_RIHA kasutajaliides_ – RIHA komponentide kasutajaliideste kogum (disain, HTML/CSS ja UIG).

_RIHA kesksüsteem_ – RIA taristus paiknevad komponendid, mis võimaldavad pakkuda terviklikku kataloogiteenust.

_Serveriteenus_, RIHA funktsionaalsust pakkuva komponendi serveripoolne osa.

## Kasutajaliides (RIHA kesksüsteem)

Kasutajaliidese URL-ides järgitakse põhimõtteid:

- URL-id on inimkasutatavad: lühikesed, inimesele tähenduslikud, meeldejäävad
- URL-id võimaldavad otseteid (sisenemispunkte) nii kõigi suuremate toimingute (sirvimine, kirjeldamine, hindamine) kui ka toimingute objektide lõikes (asutused, infosüsteemid, hiljem ka muud)
- võimalik on kasutada paralleel-URL-e eesti ja inglise keeles.

### Esmane sisenemispunkt

Esmane sisenemispunkt RIHA kesksüsteemi on `https://riha.ee`. Sellel aadressil asub avaleht, kust on võimalik liikuda mitmes suunas: asutuste otsimine, infosüsteemide otsimine, kirjeldamine, hindamine.

### Kirjeldamine

- kirjeldamise üldvaade
  - `https://riha.ee/Kirjelda`
  - `https://riha.ee/Describe`

- konkreetse infosüsteemi kirjeldamine -
  - `https://riha.ee/Kirjelda/RIHA`
  - `https://riha.ee/Describe/RIHA`

###   Hindamine

- hindamise üldvaade
  - `https://riha.ee/Hinda`
  - `https://riha.ee/Approve`

- konkreetse infosüsteemi hindamine
  - `https://riha.ee/Hinda/RIHA`
  - `https://riha.ee/Approve/RIHA`

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

## API (RIHA kesksüsteem)

RIHA API pakub RIHAsse kogutud andmeid RESTful põhimõtete järgi, reeglina JSON-vormingus. API-t teostavad kesksüsteemi serveriteenused. Peamised sisenemispunktid:

`https://riha.ee/API/v1/Systems` - tagastab kõigi infosüsteemide nimekirja

`https://riha.ee/API/v1/Systems/RIHA` - tagastab konkreetse infosüsteemi kirjelduse

`https://riha.ee/API/v1/Orgs` - tagastab kõigi organisatsioonide nimekirja (kes omavad infosüsteeme)

`https://riha.ee/API/v1/Orgs/RIA` - tagastab konkreetse organisatsiooni üldandmed ja infosüsteemide nimekirja

`https://riha.ee/API/v1/Approvals` - tagastab hinnangud.

## Hajusalt paigutatud komponentide URL-id

Hajusalt paigaldatud komponentide (Kirjeldaja) ja ise teostatud Kirjeldaja API teenusenime valib vastava komponendi haldaja. Soovituslik nimetüvi on `riha.<asutus>.ee`.

# Vana RIHA URL-de ümbersuunamine

`https://riha.eesti.ee/riha/main/asu/riigi_infosusteemi_amet` → `https://riha.ee/RIA`

`https://riha.eesti.ee/riha/main/inf/riigi_infosusteemi_haldussusteem` → `https://riha.ee/RIHA`

