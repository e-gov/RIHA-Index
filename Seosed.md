---
permalink: Seosed
sidebar: false
header: false
---

#  Riigiteenused.ee, eesti.ee ja RIHA lõimimine
{:.no_toc}

22.09.2017

Käesolev dokument käsitleb kolme kataloogsüsteemi - riigiteenused.ee, eesti.ee ja RIHA - lõimimise vajadust ning võimalusi.

Sisukord

* TOC
{:toc}

## 1 Profiilid

|                     | riigiteenused.ee | eesti.ee | RIHA |
|---------------------|------------------|----------|------|
| URL                 | [www.riigiteenused.ee](https://www.riigiteenused.ee) | [www.eesti.ee](https://www.eesti.ee) | [riha.ee](https://riha.ee)     |
| haldaja             | MKM ITAO         | RIA           | RIA                 |
| kataloogi põhiobjekt | avalik teenus (omaniku vaates)    | avalik teenus (kodaniku vaates) | infosüsteem         |
| sihtrühm            | teenuse omanik   | kodanik       | infosüsteemi omanik, süsteemiintegraator, arendaja, IT-koordineerija, avalike teenuste arendaja jt | 
| hoitavad andmed | avalike teenus kirjeldused, sh koos olulisemad statistilised näitajad | temaatilised artiklid, teenuste tutvustused ja juhatused  | infosüsteemide kirjeldused (metaandmed), sh hinnangud (end. kooskõlastused) | 
| toetatavad tööprotsessid | avalike teenuste kirjeldamine, sh statistika | teave avalike teenuste kohta, teenuste juurde juhatamine, ka teenuste ise osutamine | infosüsteemide kirjeldamine, infosüsteemide otsing, metaandmete kasutamine, infosüsteemide hindamine (end. kooskõlastamine) |
| õigusregulatsioon | VV määrus [Teenuste korraldamise ja teabehalduse alused](https://www.riigiteataja.ee/akt/131052017007) | VV määrus [Eesti teabevärava eesti.ee .. kord](https://www.riigiteataja.ee/akt/104102013008) | VV määrus "Riigi infosüsteemi haldussüsteem" (kavand) |
| õigusnimetus | valitsusasutuste teenuste keskne kataloog |  Eesti teabevärav eesti.ee | riigi infosüsteemi haldussüsteem | 
| pakub andmeid masinloetavalt | jah, API | ei - andmed põhimõtteliselt masinloetavad, kuid mitteavalikus repos | jah, API |
| arendusteave | [MKM-ITAO/riigiteenused](https://github.com/MKM-ITAO/riigiteenused), [MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed](MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed) | RIA sisevõrgus | [RIHA arhitektuuriteatmik](https://e-gov.github.io/RIHA-Index) |

## 2 Lõimimise lähtekohad

### 2.1 Lõimimine
Lõimimine tähendab eraldi hoitavate objektide sidumist tervikuks. Lõimimine võib olla tugevam või nõrgem (suurema või väiksema lõtkuga). Liidestamine tähendab masinliidese loomist kahe süsteemi vahele. See nõuab tarkvaraarendust mõlemas süsteemis, liidespinna (API, protokolli, andmevormingute kokkuleppimist). Lihtsamal juhul üks süsteem kasutab teise süsteemi avalikult väljapandud teavet. Lõimida võib ka käsitsi, protseduurilisel tasandil. Sellisel juhul inimene seostab andmed käsitsi.

### 2.2 Kokkuliitmine
Siinkohal me ei peatu süsteemide kokkuliitmise teemal (kolmest süsteemist teha kaks või üks) - see oleks lõimimise äärmuslik vorm. Kogemused seniste eesti.ee ja RIHA haldamisel pigem toetavad seisukohta, et  kataloogsüsteemide üheks süsteemiks liitmine ei ole mõistlik.

### 2.3 Täiendav süsteem
Vaatlusest jätame välja ka täiendava süsteemi loomise, olgu siis katus- või metasüsteemina kataloogide kohale või puhvrina nende vahele. See ei tähenda, et neid metasüsteemi ideed ei võiks arendada mõnes teises kontekstis. riigiteenused.ee ja uus RIHA mõlemad pakuvad andmeid avalikult API-de kaudu. Keegi ei takista tegemast süsteemi, mis võtab ja kombineerib kahe süsteemi andmeid.

## 2.4 Andmete ja tööprotsesside lõimimine
Võib eristada andmete ja tööprotsesside seostamist. Andmete seostamise vajadus tuleneb sellest, et kolmes süsteemis hoitav andmed on olemuslikult seotud, esitades sama, keerulise nähtuse erinevaid külgi, erinevatele sihtrühmadele. Tööprotsesside seostamise vajadus tuleneb sellest, et avalikke teenuseid osutatakse infosüsteemide abil ja kodanikule näidatavad teenused vajavad kavandamist, haldamist jm ettevalmistavaid ning toetavaid tegevusi.

### 2.5 Kattuvus andmekoosseisudes
Andmete seostamise vajadus võib tuleneda ka ülekattest süsteemide andmekoosseisudes. Sel juhul on vaja võimalusel kõrvaldada andmete dubleerimine või vähemalt tagada nende sünkroonsus. Vaatleme järgnevalt kattuvusi kataloogide andmekoosseisudes.

#### 2.5.1 Avalike teenuste andmed RIHAs
Vanas RIHAs üritati kirjeldada infosüsteemide seoseid avalike teenustega. Infosüsteemi kirjelduses pidi esitama nii osutatavad masinkasutajatele suunatud andmeteenused kui ka inimkasutajatele suunatud "funktsionaalsused". Selge metoodika puudumise, aga ka kirjeldajate huvi nõrkuse tõttu oli kirjelduste kvaliteet kehv. Uues RIHAs on avalike teenuste kirjeldamisest loobutud, vähemalt esialgu. Kirjeldatakse ainult masinatele suunatud teenused. Kirjeldamine on automatiseeritud - WSDL-failid korjatakse X-tee turvaserveritest automaatselt. Teatud seost avaliku teenusega võib leida väljast "Infosüsteemi eesmärk", kuid see pole struktureeritud.

#### 2.5.2 Ühisosa riigiteenused.ee ja eesti.ee andmetes
Kattumist on eelkõige teenuseid kirjeldavates tekstides ja teenuse osutuskohtadesse viivates linkides. eesti.ee teenusekirjeldustes on lähtutud teenusekasutajale paremini mõistetavast tavakeelest. riigiteenused.ee kirjeldused on ametlikus keeles. Täielik ühtlustamine ilmselt ei ole mõistlik, sest sihtrühmad on erinevad. Siiski on oluline, et teenuse kirjeldused eesti.ee-s ja riigiteenused.ee-s, olles küll suunatud erinevatele sihtrühmadele, ei oleks üksteisega terminoloogilises ega sisulises vastuolus. Teenuse osutuskohtadesse viivad lingid jm teenuse kontaktteave peab olema õige ja täielik mõlemas süsteemis.

### 2.6 Kohustuslik või vabatahtlik seostamine
Seostamise kavandamisel on oluline otsustada, kas seoste märkimine on kohustuslik või sõltub kirjeldaja oma äranägemisest. Keegi ei keela RIHAs kirjeldamast infosüsteemide seoseid avalike teenustega. Tehniliselt pakub RIHA selleks viidete lisamise võimalust. Uue RIHA kontseptsioonis ei toetata failide üleslaadimist. Selle asemel tuleb kasutada linkimist mujal väljapandud teabele.

### 2.7 Seoste masintöödeldavus
Oluline otsustuskoht on, kas seosed esitatakse vabatekstis või struktuursete andmeväljadena.

### 2.8 Kirjeldamise koordineerimine
Avaliku teenuse kirjeldamine riigiteenused.ee-s ja eesti.ee-s peaksid olema koordineeritud tööprotsessid. Küsimusele, kas neid tööprotsesse saaks IT-lahenduse abil paremini koordineerida ja efektiivsemaks teha, vastamiseks tuleks kõigepealt teenuste kirjeldamise protsesse kummaski süsteemis lähemalt uurida.

### 2.9 Seoste keerukus
Avaliku teenuse ja infosüsteemi vahel ei ole üksühest vastavust. Avaliku teenuse osutamisel tavaliselt kombineeritakse andmeid paljudest andmekogudest, kasutatakse erinevaid taristuid ja backend-teenuseid. Seetõttu ei saa lootma jääda, et seostamise tehniline võimalus toimiks ilma seoste kirjeldamise metoodikata.

### 2.10 Arenduste koordineerimine
Tööprotsesside seostamine tähendab ka arendusprotsesside seostamist. Kõigis kolmes süsteemis on viimasel paaril toimunud suured muutused. Arendusprotsessid jätkuvad. Lõimimisel tuleb arvesse võtta nii süsteemides seni toimunut kui ka arengusuundi. Samas ei tohiks seostamine süsteemide arengutsükleid liiga jäigalt üksteisest sõltuma panna.  

### 2.11 Andmete seostamise viisid
Andmete seostamiseks on kolm peamist tehnilist võimalust: 1) linkimine; 2) automatiseeritud andmekorje; 3) korduv sisestamine käsitsi.

### 2.12 Sünkroonimine
Sünkroonimine e andmete kooskõla hoidmine on seostamisel üks peamisi väljakutseid. Kui linke ei suudeta ajakohasena hoida, s.t lingid lähevad "katki", siis võib olla parem linkimisest üldse loobuda. Samuti, kui andmete uuendamise mehhanism ei toimi, siis on teisest süsteemist kopeeritud andmetest pigem kahju kui kasu.

### 2.13 URL-id
Igas süsteemis toimub aktiivne kirjeldamistegevus. Kirjeldusi muudetakse, sh muudetakse objektide nimetusi. Andmete sidumise eelduseks on seostatavate objektide selge, stabiilne identifitseerimisskeem. Identifikaator peaks andma ka otsetee objektini. Uues RIHAs on igal infosüsteemil püsiidentifikaator (lühinimi) ja kindla mustri järgi lühinimest moodustatav URL. Püsiidentifikaatorid on ka riigiteenused.ee-s ja eesti.ee-s, kuid need ei ole URL-i kujul.

### 2.14 Autentse allika põhimõte
Seostamisel tuleb arvestada, et kui sama teave on kahes kohas - siia käib ka mõlemasuunaline linkimine - siis peab olema meetod kooskõlakonfliktide lahendamiseks. Peab olema selge, kumb andmeesitus loetakse originaaliks (autentseks, "tõeks"). Samas on _single source of truth_ põhimõtte täielik rakendamine riigi infosüsteemi metaandmetes küsitav, sest riigi infosüsteem ongi hajussüsteem, kõike ei õnnestu sünkroniseerida ja originaalmetaandmed ei teki mitte RIHAs ega riigiteenused.ee-s, vaid reaalses teenuste ja süsteemide arenduses, s.t asutustes. 

### 2.15 Andmete masintöödeldavalt kättesaadavus
Lõimimise automatiseerimise eelduseks - või vähemalt tugevalt soodustavaks teguriks - kui mitte minna kuvakraapimise teed - on andmete masinloetavus. riigiteenused.ee ja uue RIHA arendamisel on kataloogiandmete masintöödeldavalt kättesaadavusele pandud palju rõhku. riigiteenused.ee ja uue RIHA andmed on RESTful API-de kaudu kättesaadavad. eesti.ee praegu ei paku oma API-t, kuid artiklite teavet on võimalik masinlugeda git-protokolliga RIA asutusesisesest repost. Kokkuvõttes, süsteemide andmete masintöödeldavuse olukord on suhteliselt hea. 

### 2.16 Terminoloogiline kooskõla
Pikki aastaid on infosüsteemide, aga ka teenuste kirjeldamist takistanud terminoloogiline ebaselgus ja vaidlused mõistete ulatuse ning sisu üle ("andmekogu", "teenus", "infosüsteem"). Juristide ja IT-meeste terminoloogiasõjad näivad nüüd olevat vaibumas (vt nt Silberg L (2017) _[Andmekogu või andmete kogumine?](https://dspace.ut.ee/bitstream/handle/10062/57144/silberg_ma_2017.pdf?sequence=1&isAllowed=y)_). MKM ITAO juhtimisel töötanud töörühm on täpsustanud teenuste osutamise mõistestikku. Selle töö tulemused on jõudnud ka teenuste korraldamise määrusesse. Kokkuvõttes ei tohiks olla põhimõttelisi terminoloogilisi takistusi kolme kataloogi lõimimiseks.

### 2.17 Modelleerimine
Avalik teenus ja infosüsteem on seotud kardinaalsussuhtes m : n. EL ISA projektis on loodud avalike teenuste geneeriline mudel CPSV (Common Public Service Vocabulary). Eesti oli aktiivselt selle mudeli loomise juures. Praegused üldised mudelid on piisavad, et kavandada konkreetseid ühendusi. Keskenduda tuleks kõige lihtsamate ja samas suurt väärtust loovate ühenduste ehitamisele (nendest allpool). 

### 2.18 Tasuvus
Liidestusettepanekute hindamisel tuleks hinnata nii liidestamisest saavat kasu kui ka võimalikke negatiivseid efekte. Kasude võib seisneda andmete paremas leitavuses, õigemates ja ajakohasemates andmetes, paremas andmekvaliteedis tervikuna, korduva sisestamise vältimises jms. Samas, kui liidest ei õnnestu automatiseerida, siis võib liidestamine kaasa tuua hoopis käsitsi andmesisestuse mahu suurenemise. Kui süsteemid seotakse nn "tädimeetodil", siis tuleks kaaluda, kas saadav efekt kaalub üles kulu, mis tekib inimeste äratõmbamisega tegelikult töölt samade andmete erinevatesse süsteemidesse käsitsi sisestamisele (ja kas nad üldse hakkavad seda tegema).

## 3 Võimalused

Vaatleme järgnevalt, milliseid konkreetseid seoseid võiks kolme kataloogi vahele luua. Iga võimalust analüüsime lühidalt nii ärilisest, s.t kasulikkuse kui ka tehnilise teostatavuse vaatepunktist. Oluline moment on ka metoodika olemasolu - s.t kas kirjeldaja saab aru seose tähendusest ja suudab seosed adekvaatselt kirjeldada.

### 3.1 Avalikus teenuses viitamine infosüsteemile
Avaliku teenuse kirjes riigiteenused.ee-s lisada viide (viited) RIHA-s kirjeldatud infosüsteemidele.

Mida see annab? Parem pilt teenuse fassaadi taga olevast. Täiendav teave avalike teenuste kavandajatele ja haldajatele.

Tehniline teostus. Lingitakse URL-i abil. RIHAs on igal infosüsteemil püsiv URL. Kõige lihtsamal kujul näeb seostamise protsess välja nii, et kirjeldaja otsib infosüsteemi RIHAs üles ja kopeerib infosüsteemi URL-i avaliku teenuse kirjeldusse riigiteenused.ee-s. Väikese arendusega saab riigiteenused.ee-sse lisada abistava dialoogi, mis võimaldab infosüsteemi leida riigiteenused.ee-st väljumata, infosüsteemi lühi- või täisnime järgi jne.

Metoodika. Infosüsteemile viitamisel võib tekkida mitu probleemi: 1) kirjeldaja ei tea, milliste infosüsteemidega avalik teenus on seotud. Taristute ühitamine, IT konsolideerimine eraldi IT-asutustesse jm tegurid võivad viia selleni, et teenuse äriomanik ei teagi, milliste infosüsteemide baasil tema teenust käitatakse. 2) teenus on seotud mitme infosüsteemiga. Kirjeldaja ei tea, kas ta peab kirjeldama ka nõrgad ja kaudsed seosed.

### 3.2 Infosüsteemis viitamine avalikule teenusele
See on eelmisele vastupidine viide.

Mida see annab? Parem pilt, kuidas infosüsteemist kodanikule kasu on.

Tehniline teostus. Käsitsi viitamist on siin otstarbekas vältida. RIHA-le saab teha lihtsa REST-liidese, mille kaudu riigiteenused.ee saadab avaliku teenuse seostamisel infosüsteemiga seoseteabe HTTP POST-päringuga ka RIHAsse. Eeldab autentimise võimekust REST-liideses. Kui seda ei ole, siis saatmine üle X-tee.  

Metoodika. Seos peegeldatakse riigiteenused.ee-st ja seose määrab avaliku teenuse omanik. Infosüsteemi omanik ei tarvitse aru saada, miks avalik teenus on tema infosüsteemiga seostatud. Võib-olla see pole suur probleem, sest vajadusel saab avaliku teenuse kirjeldajaga ühendust võtta (aga kas seda viitsitakse teha?)

### 3.3 Otsingute seostamine
Nii riigiteenused.ee-s kui ka RIHA-s on otsingu funktsionaalsus. Otsingute seostamine või ühitamine tähendaks seda, et otsida on võimalik ka seoste järgi. 

### 3.4 Kuluarvestuse seostamine
Halduskulu mõõdik on riigiteenused.ee-s avaliku teenuse kirjelduse üks tähtsamaid osi. RIHA arendamisel on aastaid veeretatud mõtet, et infosüsteemide kulu (elutsükli maksumust) tuleks mõõta ja need mõõtmistulemused (finantsandmed) võiksid olla RIHAs või vähemalt RIHA kaudu leitavad. Need plaanid ei ole konkretiseerunud. Metoodiliselt on ebaselge, kuidas infosüsteemi kulu mõõta.

Kuluarvestuse seostamise eelduseks on avalike teenuste ja infosüsteemide kvantitatiivne seostamine, s.t kulude proportsionaalne jaotamine. Kaheldav, kas teenuste ja infosüsteemide omanikel on oskust ja aega sellist kompleksset kuluarvestust teha ja kas neil on võimalik lihtsalt kätte saada vastavaid finantsandmeid. Samuti peaks kõike seda tegema ühtse arvestusmetoodika järgi. Kuluarvestuse sissetoomine RIHAsse ja seostamine riigiteenused.ee-ga ning vastavate IT-tööde kavandamine eeldab kuluarvestuse metoodika väljatöötamist.

### 3.5 Statistika tootmise seostamine
Riigiteenused.ee-s kogutakse teenuste kasutusstatistikat ja mõõdetakse teenusega rahulolu. RIHA liidestatakse loodava X-tee monitooringusüsteemiga, kus kogutakse X-tee andmeteenuste kasutusstatistikat. Korrelatsioonid avalike teenuste kasutuse, rahuolu, halduskulu ja X-tee andmeteenuste kasutuse vahel pakuvad kindlasti huvi. Eelduseks on avalike teenuste ja infosüsteemide kirjelduste seostamine. Infosüsteemid omakorda on seotud X-tee teenustega.

## 4 Varasem töö
Kolme süsteemi ühendamist uuriti MKM ITAO ja RIA koostöös 2016. a mais-juunis, vt [https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed](https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed). Töö tulemusena valmis "Avalike teenuste andmete kogumise ja avaldamise arhitektuur",  [https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed](https://github.com/MKM-ITAO/Teenuste-kataloogi-RIHA-ja-Eesti.ee-seosed). 