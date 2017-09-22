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

***Lõimimine*** tähendab eraldi hoitavate objektide sidumist tervikuks. Lõimimine võib olla tugevam või nõrgem (suurema või väiksema lõtkuga).

Siinkohal me ei peatu ***süsteemide kokkuliitmise*** teemal (kolmest süsteemist teha kaks või üks) - see oleks lõimimise äärmuslik vorm. Kogemused seniste eesti.ee ja RIHA haldamisel pigem toetavad seisukohta, et vaadeldavate kataloogsüsteemide liitmine ei ole mõistlik.

Lõimimine tähendab nii andmete kui ka tööprotsesside seostamist.

***Andmete seostamise*** vajadus tuleneb sellest, et kolmes süsteemis hoitav andmed on olemuslikult seotud, esitades igaüks sama, keerulise nähtuse erinevat külge, erinevale sihtrühmale.

***Kattuvus andmekoosseisudes.*** Andmete seostamise vajadus võib tuleneda ka süsteemide kattuvast andmekoosseisust.

***Avalike teenuste andmed RIHAs.*** _Vanas RIHAs üritati infosüsteemide seoseid avalike teenustega kirjeldada - infosüsteemi kirjelduses pidi esitama nii osutatavad masinkasutajatele suunatud andmeteenused kui ka inimkasutajatele suunatud "funktsionaalsused". Selge metoodika puudumise tõttu kirjelduste kvaliteet oli kehv. Uues RIHAs on avalike teenuste kirjeldamisest loobutud, vähemalt esialgu. Kirjeldatakse ainult masinatele suunatud teenused ja kirjeldamine on automatiseeritud - WSDL-failid korjatakse X-tee turvaserveritest automaatselt. Seost avaliku teenusega võib leida väljast "Infosüsteemi eesmärk", kuid see pole struktureeritud._

***Kohustuslik või vabatahtlik seostamine.*** Keegi ei keela RIHAs kirjeldamast infosüsteemide seoseid avalike teenustega. Tehniliselt pakub RIHA selleks viidete lisamise võimalust. _Uue RIHA kontseptsioonis ei toetata failide üleslaadimist. Selle asemel tuleb kasutada linkimist mujal väljapandud teabele._ Seostamise kavandamisel on oluline otsustada, kas seoste märkimine on kohustuslik või sõltub kirjeldaja oma äranägemisest.

***Seoste masintöödeldavus.*** Oluline otsustuskoht on, kas seosed esitatakse vabatekstis või struktuursete andmeväljadena.

***Ühisosa riigiteenused.ee ja eesti.ee andmetes.*** Ühisosa ja kattumist on eelkõige teenuseid kirjeldavates tekstides ja teenuse osutuskohtadesse viivates linkides. eesti.ee-s on teenusekirjeldustes lähtutud teenusekasutajale kõige paremini mõistetavast tavakeelest. riigiteenused.ee kirjeldustes on ametlik keel. Täielik ühtlustamine siin ilmselt ei ole mõistlik. Siiski on oluline, et teenuse kirjeldus eesti.ee-s ja riigiteenused.ee-s, olles küll suunatud erinevatele sihtrühmadele, ei oleks üksteisega terminoloogilises ega sisulises vastuolus. Seetõttu avaliku teenuse kirjeldamine riigiteenused.ee-s ja eesti.ee-s peavad olema koordineeritud tegevused. Vaja on koordineerida avaliku teenuse riigiteenused.ee-s ja eesti.ee-s kirjeldamise tööprotsessid. Küsimusele, kas neid tööprotsesse saaks IT-lahenduse abil paremini koordineerida ja efektiivsemaks teha, vastamiseks tuleks teenuste kirjeldamise protsesse kummaski süsteemis lähemalt uurida.

***Tööprotsesside seostamise*** vajadus tuleneb sellest, et avalike teenuste osutamine teostatakse infosüsteemide abil. Seejuures ei ole üksühest vastavust avaliku teenuse ja infosüsteemi vahel. Avaliku teenuse osutamisel kombineeritakse andmeid paljudest andmekogudest, kasutatakse erinevaid taristuid ja backend-teenuseid.

Kõigis kolmes süsteemis on viimasel paaril toimunud suured muutused. Arendusprotsessid jätkuvad. Lõimimisel tuleb arvesse võtta nii süsteemides seni toimunut kui ka arengusuundi. 

Andmete seostamiseks on kolm peamist tehnilist võimalust: 1) linkimine; 2) automatiseeritud andmekorje; 3) korduv sisestamine käsitsi.

***Sünkroonimine*** e andmete kooskõla hoidmine on seostamisel üks peamisi väljakutseid. Kui linke ei suudeta ajakohasena hoida, s.t lingid lähevad "katki", siis võib olla parem linkimisest üldse loobuda. 

Igas süsteemis toimub aktiivne kirjeldamistegevus. Kirjeldusi muudetakse, sh muudetakse objektide nimetusi. Andmete sidumise eelduseks on seostatavate objektide selge, stabiilne identifitseerimisskeem. 

***Single source of truth põhimõte***. Seostamisel tuleb arvestada, et kui sama teave on kahes kohas - siia käib ka mõlemasuunaline linkimine - siis peab olema meetod kooskõlakonfliktide lahendamiseks. Peab olema selge, kumb andmeesitus loetakse originaaliks (autentseks, "tõeks"). 

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

Statistika tootmine