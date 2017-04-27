---
title: Versioneerimine
permalink: Versioneerimine
---

# Versioneerimine

Versioneeritakse:

- RIHA kirjeldusstandardit
- RIHA teisi komponente (tarkvara).

__Versioon__. Kasutatakse [semantilist versioneerimist](http://semver.org/). Esimene stabiilne, avalikult publitseeritav versioon tähistatakse `1.0`. Enne seda kasutatakse versiooninumbreid kujul `0.x`, kus `x` on kasvav number. Versioon luuakse Git käsu `git tag` või vastava GitHub-i toimingu abil.

__Redaktsioon__. Uus redaktsioon (ingl _revision_) tekib iga commit-iga tarkvararepos. (Uus versioon tekib ainult versioonitaagi seadmisega). 
Redaktsiooninumbriks on Git commit-i lühi-id (näiteks `0.1.-4911df0`).

__Versiooni ja redaktsiooni näitamine paigaldatud tarkvaras__. 
Tarkvara ehitamisel tuleb tagada, et kasutajaliideses kuvatakse versiooni- ja redaktsiooninumber. Redaktsiooninumber näidatakse versiooninumbri järel, eraldatult miinusega (`-`). Näiteks `0.1-4911df0`. Võimalusel lisada commit-i timestamp.

(Kuidas? Vt git-i käsk `git describe --tags --always`, samuti [Using Git to generate an automatic version number](https://cd34.com/blog/programming/using-git-to-generate-an-automatic-version-number/)).





