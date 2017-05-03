---
title: API-de testimine
permalink: APIdetestimine
---

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

*POST päring RIHA Kirjeldajale*

![POST päring][image2]

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

[image1]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_1.png "GET päring RIHA Kirjeldajale"
[image2]: https://github.com/e-gov/RIHA-Index/blob/master/img/API-testimine/API-testimine_2.png "POST päring RIHA Kirjeldajale"
