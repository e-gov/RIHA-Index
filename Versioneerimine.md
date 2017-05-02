---
title: Versioneerimine
permalink: Versioneerimine
---

# Versioneerimine

Versioneeritakse:

- RIHA kirjeldusstandardit
- RIHA teisi komponente (tarkvara).

***Semantiline versioneerimine***. Kasutame [semantilist versioneerimist](http://semver.org/). Esimene stabiilne, avalikult publitseeritav versioon tähistatakse `1.0`. Enne seda kasutatakse versiooninumbreid kujul `0.x`, kus `x` on kasvav number. Versioon luuakse Git käsu `git tag` või vastava GitHub-i toimingu abil.

***Suur- ja väikeversioon. Paik***. Positsioonide tähistused: vasakult esimene on suurversiooni number (_major_). Punkti järel järgneb sellele väikeversiooni (_minor_) number. Lõpus on paiga (_patch_) number. Suur- ja väikeversiooni vahe on selles, et väikeversioon võib toote omadusi ainult laiendada. Ei tohi kitsendada. Kõik olemasolevad liidesed ja featuurid peavad töötama, neile võib ainult uusi omadusi lisada. Teisisõnu, väikeversioon peab tagama tagasiühilduvuse (_backward compatibility_). Suurversioon seevastu reeglina muudab liidest või omadusi nii palju, et ühilduvus eelmisega pole tagatud. Paik on kasutusel pisiparanduste jaoks.

***Väljaanne***, ***reliis*** (_release_) on tarkvara, dokumendi vm artefakti fikseeritud seis, millele on omistatud versiooninumber. 

***Redaktsioon***. Iga Git commit-ga ei teki veel uut versiooni. Uus versioon tekib ainult versioonitaagi seadmisega. Tihti on aga vaja eristada, millise commit-i seisuga koodi või dokumendiga on tegu. Selleks võib kasutada redaktsiooni mõistet. Uus redaktsioon (revision) tekib iga commit-iga tarkvararepos. Redaktsioone tuleks tähistada. Otstarbekas on kasutada redaktsiooninumbrina on Git commit-i lühi-id (näiteks `0.1.-4911df0`).

__Versiooni ja redaktsiooni näitamine paigaldatud tarkvaras__. 
Tarkvara ehitamisel tuleb tagada, et kasutajaliideses kuvatakse versiooni- ja redaktsiooninumber. Redaktsiooninumber näidatakse versiooninumbri järel, eraldatult miinusega (`-`). Näiteks `0.1-4911df0`. Võimalusel lisada commit-i timestamp.

(Kuidas? Vt git-i käsk `git describe --tags --always`, samuti [Using Git to generate an automatic version number](https://cd34.com/blog/programming/using-git-to-generate-an-automatic-version-number/)).

**Versioonihalduse protsess**. _Issue_ -> _JIRA task_ -> _Commit_ -> _Reliis_

Reliisi juures peab olema reliisiteade (_release notes_), mis ütleb mida eelmise versiooniga võrreldes muudeti. Dokumendi puhul võib reliisiteade seisneda kirjes „Muudatuste ajalugu“ tabelis.

Reliisi juures peab mõtlema, keda peab teavitama. Kui muudeti tarkvara, siis kas muutus ka liidest spetsifitseeriv dokument ja vastupidi.

Tarkvara juures peab olema selgelt näidatud millist kirjeldusstandardi versiooni toetatakse.

Commit-i teates peaks olema selgelt öeldud mida tehti ja millist probleemi lahendati. Viide Issue-le ja/või JIRA task-le, kui selline oli loodud. 

Puuduste ja ettepanekute registreerimiseks kasutada julgelt GitHub-i Issue-sid.




