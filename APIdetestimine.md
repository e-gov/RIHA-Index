---
title: API-de testimine
permalink: APIdetestimine
---
# API-de testimine

## 1. Eeldused API testide käivitamiseks ja loomiseks
RIHA API testide loomisel kasutame Postman rakendust ja käsurealt testide jooksutamiseks Newman rakendust: 
- Postmani installeerimine: https://www.getpostman.com/
- Newmani installeerimine: https://github.com/postmanlabs/newman

Näidete loomisel kasutan kahe rakenduse API teenust:
- RIHA REST API (Girf) - http://riha-proxy.ci.kit/rest/api/db/main_resource
- RIHA Producer - https://riha-produc3r.herokuapp.com/

Girfi lahendus kodeerib andmeid reeglina JSON formaadis, erandina GET päringute puhul aga CGI nimi=urlencoded_väärtus paaridena. RIHA Producer (ja ühtlasi teised CB lahendused) kasutavad x-www-form-urlencoded väärtuspaare.


## 2. API testide loomine
### 2.1 Postmani kasutamine: päringute saatmine
**GET päring saatmine:**
1. Täpsustada, millisele URL-le soovitakse GET päring teha. Lisada URL Postmani.
2. (Valikuline) Lisada GET päringu parameetreid 'Params' nupu alt.
3. Saada päring 'Send' nupuga välja.

![GET päring][image1]

*GET päring RIHA REST API rakendusele*

**POST päringu saatmine:**
1. Täpsustada, millisele URL-le soovitakse POST päring teha. Lisada URL Postmani.
2. Lisada päringu sisu (body).
3. Saada päring 'Send' nupuga välja.

![POST päring][image2]

*POST päring RIHA Kirjeldajale*

### 2.2 Postmani kasutamine: testide loomine
Testide loogika realiseeritakse "Tests" sektsioonis - iga päring valideerib ja/või töötleb saadud HTTP vastust Postmanis kirjeldatud testide abil. Postmani testid kirjutatakse Javascriptis.
Kõige lihtsamat tüüpi testid valideerivad HTTP vastuskoodi - ehk kas päring õnnestus või mitte:
```javascript
tests["Väli on lisatud"] = responseCode.code === 200;
```
Postmani testid võimaldavad kontrollida päringu ajalist kestvust, content-type olemasolu jt sarnaseid parameetreid:
```javascript
tests["Response time is less than 200ms"] = responseTime < 200;
tests["Content-Type is present"] = responseHeaders.hasOwnProperty("Content-Type");
var expected = "email1@email.na"
tests["Body contains string: " + expected] = responseBody.has(expected);
```
### 2.3 Testide eksportimine
Postmani teste saab eksportida JSON failina 'Settings' menüüs 'Data' alampunkti all:
![Postman eksport][image3]

*Postmani testide eksportimine JSON vormingus*

Postmani testikomplekte saab mugavalt jagada ka 'Share' funktsiooniga:
![Postman share][image4]

*Postmani testide jagamine lingiga*


## 3. API testide rakendamine RIA keskkonnas
### 3.1 Newmani kasutamine
Ubuntu operatsioonisüsteemil peab testide käivitamiseks kasutama käsurea rakendust Newman. Testikomplekti käivitamine Newman'iga käib run käsuga:
```sh
$ newman run examples/sample-collection.json;
```
Lisaks JSON vormingule võtab Newman sisendiks ka URL-is defineeritud testikomplekti:
```sh
$ newman run https://www.getpostman.com/collections/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65-JsLv;
```
Newmani väljundit - s.t raporti vormingut - saab käsurealt parameetriga --reporter seada JSON-i, HTML-i või JUnit/XML
vormingusse.

### 3.2 URL-de parametriseerimine (keskkondade eristamiseks)
Testide käivitamisel on oluline eristada, milliste keskkondade API-sid testid kontrollivad. Postmanis on keskkondade haldamiseks funktsionaalsus "Manage Environments", mis annab võimaluse igale keskkonnale määrata suvalise hulga muutujaid, mida saab rakendada testides kui ka mistahes HTTP päringu osas (nt URL).

![Postmanis muutujate defineerimine][image5]


*URL-i defineerimine muutujas*

### 3.3 Testide integreerimine Jenkinsiga
API testide käivitamiseks läbi Jenkinsi on kolm võimalust:
- Installeerida Newman ja NodeJS samasse masinasse kus paikneb Jenkins (ei ole soovitatav).
- Luua slave masin, kuhu paigaldatakse Newman/NodeJS ja kus jooksutatakse teste. Teste juhitakse Jenkinsis.
- Luua vSphere pluginaga ajutine virtuaalmasin, kuhu paigaldatakse eeldused ja jooksutatakse testid läbi, misjärel masin hävitatakse ja tulemused raporteeritakse Jenkinsisse.

Mistahes varianti rakendades, tuleb Jenkinsis testide käivitamiseks luua uus ehitamise samm ('Build step'), mille tüübiks valida 'Execute shell'. Avanenud aknasse lisada käsk newman run .. (kus testid paiknevad).
On soovitav testid liita lähtekoodiga ja kasutada Jenkinsi 'Source Code Management' funktsionaalsust, sidumaks lähtekood Jenkinsi töölauaga.

[image1]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_1.png "GET päring RIHA Kirjeldajale"
[image2]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_2.png "POST päring RIHA Kirjeldajale"
[image3]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_3.png "Postmani testide eksportimine JSON vormingus"
[image4]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_4.png "Postmani testide jagamine"
[image5]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_5.png "Postmanis muutujate defineerimine"
