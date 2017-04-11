---
title: RIHA
---

# Ülevaade

Käesolev veebisait dokumenteerib RIHA arhitektuuri.

__Arhitektuuriteatmiku eesmärk__ on:
- arhitektuuriliste aspektide läbitöötamise tulemite kirjalik fikseerimine
- arendajate suunamine
- arendustiimi liikmetele vajaliku sisendi õigeaegne tootmine.

__Agiilarenduse põhimõte.__ RIHA arendatakse agiilselt, lähtudes põhimõtetest:
- inimesed ja nendevaheline suhtlus on määravamad kui protsessid ja arendusvahendid
- töötav tarkvara on olulisem kui kõikehõlmav dokumentatsioon
- koostöö kliendiga on loob rohkem väärtust kui läbirääkimised lepingute üle
- reageerimine muutunud oludele on adekvaatsem kui algsest plaanist kinnihoidmine ([Agiilse tarkvaraarenduse manifest](http://agilemanifesto.org/iso/et/manifesto.html)).

Seetõttu:
- eelistatud on vahetu suhtlus. Kirjalikult fikseeritakse ainult kõige olulisem
- arhitektuuridokumenti täiendatakse ja ajakohastatakse arenduse käigus pidevalt.

__Koht RIHA arendus- ja haldusartefaktide süsteemis.__

<pre>
      +---------------------------------+
      |  Töötav kood + dokumentatsioon  |
      +---------------------------------+
      |  RIHA keskkonnad ja dok-n*      |
      +---------------------------------+
      |        Vaheanalüüsid*           |
      +---------------------------------+
      |     Arhitektuuridokument        |
      +---------------------------------+
      |     Kasutuslood (JIRA)*         |
      +---------------------------------+
      |     Soovide hindamise tabel*    |
      +---------------------------------+
      |       RIHA strateegia*          |
      +---------------------------------  
</pre>  

* - ei ole avalik

__Modulaarne ülesehitus.__ Arhitektuuridokument on modulaarse ülesehitusega, koosnedes osadokumentidest (lehtedest). Iga osadokument käsitleb üht tehnilist küsimust või arhitektuurset aspekti. 

__Protsess.__ Arhitektuurilise küsimuse tõusetumisel töötatakse see läbi. Peamised töövormid on arutelu, tehniline uurimine, kasutades erinevaid allikaid. Tulemus fikseeritakse kirjalikult niivõrd, kuivõrd see on arendusega edasiliikumiseks vajalik. 

<p class='rem'> Arhitektuuriteatmik hõlmab eelkõige tehnilisi küsimusi (küsimus "kuidas tehniliselt lahendada?").<br>
<br>
Siiski võetakse kasutajate sõnastatud vajadusi ja nõudeid mitte jäigalt etteantutena, vaid neid ka konstruktiivselt kritiseerides ja teostusvõimalustega moduleerides.</p> 





