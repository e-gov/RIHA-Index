---
title: Autentimine
permalink: Autentimine
---

# Autentimine

Vt ka [Kesksüsteem](Kesk) ja [Sessioonihaldus](Sessioonihaldus).

Autentimine lahendatakse serverikomponendis Autentija. Autentija autendib kasutaja kas ise või kasutab eesti.ee autentimisteenust.

##  eesti.ee autentimisteenus

eesti.ee autentimisteenus autendib avalikesse e-teenustesse sisenejaid nii Eestis tunnustatud elektroonilise identiteedi (eID) vahendite (ID-kaart, mobiil-ID) ka teistes Euroopa Liidu liikmesriikides tunnustatud eID vahendite alusel. eesti.ee autentimisteenusega suheldakse protokolliga OpenID Connect 1.0. 

Vt: eesti.ee autentimisteenuse liides struktuur (dokument aprill 2017).

Ülevaade eesti.ee autentimisteenuse liidesest:

_Redirect tegemine autentimisteenusesse:_

Location: autentimisteenuse login lehe aadress

Parameetrid:

```
response_type=code
&scope=openid profile
&client_id=<autentimist küsiva infosüsteemi ID>
&state=<autentimist küsiva infosüsteemi kasutajasessiooni ID>
&redirect_uri=<aadress, kuhu kasutaja pärast autentimist tagasi suunata>
```

_Redirect vastus autentimist küsinud infosüsteemi:_

Location: <väärtus redirect_uri'st>

Parameetrid:

```
code=<autentimise identifikaator>
&state=<seostav ID, eelmisest päringust>
```

_ID tokeni hankimine (autentimist küsiva IS ja autentimisteenuse vahel):_

POST autentimisteenuse token endpoint'i

Parameetrid:

```
grant_type=authorization_code
&code=<autentimise identifikaator eelmisest sammust>
&redirect_uri=<sama aadress nagu 1. päringus>
```

_ID tokeni vastus (JSON)_

```
id_token: JWT (Json Web Token)
access_token: <OAuth2 access token>
token_type: "Bearer" <OAuth2 token type>
expires_in: <kehtivus, sekundites>
id_token JWT-s sisalduv info (payload osa):
iss: <token'i väljaandja, autentimisteenus>
sub: <autenditud kasutaja ID, kas isikukood või eIDAS ID>
aud: <autentimist küsinud süsteemi client_id>
exp: <token'i aegumisaeg>
iat: <token'i väljaandmisaeg>
auth_time: <kasutaja autentimise aeg>
acr: <autentimistase, vastavalt eIDAS tasemetele>
amr: <autentimisvahend>
```

_Kasutajainfo (UserInfo) päring_

GET päring autentimisteenuse UserInfo endpoint'i

Parameetrid:

```
Authorization: "Bearer <acces_token väärtus>"
```

_Kasutajainfo (UserInfo) päringu vastus (JSON)_

tagastab OpenID Connect spetsifikatsioonile vastavalt eIDAS kohustuslikud väljad:

```
sub: <kasutaja ID>
name: <nimi>
given_name: <eesnimi>
family_name: <perekonnanimi>
birthdate: <sünniaeg>
```


