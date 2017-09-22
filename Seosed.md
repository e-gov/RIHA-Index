---
permalink: Seosed
sidebar: false
---

# Riigiteenused.ee, RIHA ja eesti.ee sidumise analüüs

Käesolev dokument esitab kolme kataloogsüsteemi profiilid ja uurib süsteemide lõimimise vajadust ning võimalusi.

|                     | riigiteenused.ee | eesti.ee | RIHA |
|---------------------|------------------|----------|------|
| URL                 | [www.riigiteenused.ee](https://www.riigiteenused.ee) | [www.eesti.ee](https://www.eesti.ee) | [riha.ee](https://riha.ee)     |
| haldaja             | MKM ITAO         | RIA           | RIA                 |
| kataloogitav objekt | avalik teenus    | avalik teenus | infosüsteem         |
| sihtrühm            | teenuse omanik   | kodanik       | infosüsteemi omanik, süsteemiintegraator, arendaja, IT-koordineerija, avalike teenuste arendaja jt | 
| hoitavad andmed | teenuste omanikele suunatud töövahend avalike teenuste kirjeldamiseks (sh koos olulisemate statistiliste näitajatega) ning haldamiseks teenuste kataloogis. |   | 
| toetatavad tööprotsessid | avalike teenuste kirjeldamine, sh statistika | teave avalike teenuste kohta, teenuste juurde juhatamine, osa teenuste ise osutamine | infosüsteemide kirjeldamine, teave infosüsteemide kohta, infosüsteemide hindamine (endine kooskõlastamine) |
| õigusregulatsioon | VV määrus [Teenuste korraldamise ja teabehalduse alused](https://www.riigiteataja.ee/akt/131052017007) | VV määrus [Eesti teabevärava eesti.ee .. kord](https://www.riigiteataja.ee/akt/104102013008) | VV määrus (kavand) |
| õigusnimetus | valitsusasutuste teenuste keskne kataloog |  Eesti teabevärav eesti.ee | riigi infosüsteemi haldussüsteem | 

***Lõimimine*** tähendab eraldi hoitavate objektide sidumist tervikuks. Lõimimine võib olla tugevam või nõrgem (suurema või väiksema lõtkuga). Siinkohal me ei peatu vaadeldavate süsteemide kokkuliitmise teemal (kolmest süsteemist teha kaks või üks) - see oleks lõimimise äärmuslik vorm.

Lõimimine tähendab nii andmete kui ka tööprotsesside seostamist.

***Andmete seostamise*** vajadus tuleneb sellest, et kolmes süsteemis hoitav andmed on olemuslikult seotud, esitades igaüks sama, keerulise nähtuse erinevat külge, erinevale sihtrühmale.

Andmete seostamise vajadus võib tuleneda ka süsteemide ***kattuvast andmekoosseisust***.

_

***Tööprotsesside seostamise*** vajadus tuleneb sellest, et avalike teenuste osutamine teostatakse infosüsteemide abil. Seejuures ei ole üksühest vastavust avaliku teenuse ja infosüsteemi vahel. Avaliku teenuse osutamisel kombineeritakse andmeid paljudest andmekogudest, kasutatakse erinevaid taristuid ja backend-teenuseid.

Kõigis kolmes süsteemis on viimasel paaril toimunud suured muutused. Arendusprotsessid jätkuvad. Lõimimisel tuleb arvesse võtta nii süsteemides seni toimunut kui ka arengusuundi. 

Andmete seostamiseks on kolm peamist tehnilist võimalust: 1) linkimine; 2) automatiseeritud andmekorje; 3) korduv sisestamine käsitsi.

***Sünkroonimine*** e andmete kooskõla hoidmine on seostamisel üks peamisi väljakutseid. Kui linke ei suudeta ajakohasena hoida, s.t lingid lähevad "katki", siis võib olla parem linkimisest üldse loobuda. 

Igas süsteemis toimub aktiivne kirjeldamistegevus. Kirjeldusi muudetakse, sh muudetakse objektide nimetusi. Andmete sidumise eelduseks on seostatavate objektide selge, stabiilne identifitseerimisskeem. 

***Varasem töö.*** Kolme süsteemi ühendamist uuriti MKM ITAO ja RIA koostöös 2016. a mais-juunis, vt [https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed](https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed). Töö tulemusena valmis "Avalike teenuste andmete kogumise ja avaldamise arhitektuur",  [https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed](https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed). 

avalik teenus <-> infosüsteem
         m : n

ühes v teises suunas v kahepidine linkimine
paneb viite(d) eesti.ee-sse ja RIHA-sse

lühinimi - unikaalne, moodustatakse URL

omanik peab mitmes süsteemis kirjeldama? vana oli - uues kattuvat ei ole

käsitsi kahepidist linkimist vältida!
POST RIHA-sse link tuleb ka RIHAsse nähtavale

Otsingute seostamine?