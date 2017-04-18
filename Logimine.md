---
title: Logimine
permalink: Logimine
---

# Logimine
{:.no_toc}

<p class='staatus'>Kavand. Läbi arutada infraosakonnaga. Võimalikud on muutused</p>

* TOC
{:toc}

## Logimise põhimõtted RIAs

Logimise eesmärgiks on sisendandmete tootmine mitmele teisele olulisele IT halduse ja arenduse protsessile [Hallas 2015]:

- infoturve
- monitooring
- probleemide lahendamine
- statistika jne.

Logimine on tihedalt seotud ka tegevusstatistika tootmisega, andmeanalüütikaga, visualiseerimisega - kuid siiski eristatav neist.

Kes logisid kasutavad?

- infra inimesed monitoorimisel ja probleemide lahendamisel
- teenusehaldurid teenuse monitoorimisel ja kasutajate probleemide lahendamisel
- lisaks võib logisid kasutada statistika tootmiseks ärikasutajatele jm.

Vt:

- Tanel Rõigas (2012) [Logimissüsteemid](https://www.ria.ee/public/Programm/Tarkeriik_2012/02_logimissusteemid.pdf). Tark e-riik.
- Hallas, Tiit (2015) Logimise arendusnõuete analüüs ja spetsifitseerimine Eesti riigiasutuste näitel. TTÜ magistritöö. [http://digi.lib.ttu.ee/i/?1926](http://digi.lib.ttu.ee/i/?1926).
- [Guide to Logging](https://news.ycombinator.com/item?id=10290751) arutelu Hacker News-is (2015).

## Nõuded

Logida tuleb kõik olulised sündmused rakenduse töös.

RIA logimisstandard on syslog protokoll (RFC 5424, RFC 3164).

Java rakenduste korral logitakse SLF4J raamistiku abil (vt http://www.slf4j.org).

Süsteemi iga eraldi paigaldatav osa peab (näiteks aadressil heartbeat.json) väljastama masinloetaval kujul oma nime ja versiooninumbri, oluliste väliste süsteemide oleku, viimase käivitamise aja, pakendamise aja ning serveriaja.

Logid kirjutatakse inglise keeles (välja arvatud kasutajale näidatud teated).

Üldjuhul kogutakse logid kesksesse logimisserverisse. Rakendus peab olema häälestatav nii, et logi saab suunata logimisserverisse.

Järgida logitasemeid:

| SLF4J tähistus | syslog (RFC 5427) tähistus |
|----------|-----------|
| fatal | crit(2), alert(1), emerg(0) |
| trace | debug(7) |
| debug | debug(7) |
| error | err(3) |
|  info |  info(6) |
| warn  | notice(5), warning(4) |
fatal 

Panna rakendused mõistlikult logima. Logitavaid aspekte:

- jõudlus
- sessioonid
- rakenduse veahaldus

Keskses logiserveris säilitatakse logisid üldjuhul aasta.

Käesolev puudutab rakenduse logimist:

- veebiserver (Tomcat) logib eraldi
- andmebaas logib eraldi. Andmebaasi tegevuse logimisel on oluline mõistlik tase.

Kesksesse logiserverisse saadetava logi kõrval ei ole keelatud kohapeal faili logimine

Keskse logiserveri andmeid kasutab Kibana (Grafana).

Kui logitakse andmebaasi, siis peab olema ka logide arhiveerimise skript.

## Logid ja tervikluse tagamine

Logide tervikluse tagamise meetmetena võib kasutada krüptoaheldamist, koos või ilma ajatemplita. Logiaheldamine iseenesest pole piisav andmebaasi tervikluse tagamiseks. Viimase saavutamiseks on vaja andmebaasi kirjete aheldamist.