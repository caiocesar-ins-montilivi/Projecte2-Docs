---
comments: true
---

# Introducció

Benvinguts a la documentació de l'API Rest de la nostra plataforma culinaria. Aqui trobaràs tota la informació detallada
de com interactuar i fer servir la nostra API per realitzar diverses operacions. Som-hi!

&nbsp;

![Docs logo](assets/docs-logo.jpg# rounded shadow limit-width){ loading=lazy }

## Objectiu

La nostra API proporciona accés a recursos d'usuari, plats i comandes. Es pot utilitzar per realitzar consultes, crear nous
registres, actualitzar informació ja existent o el·liminar dades.

## Mètodes HTTP

Utilitzem mètodes coneguts com poden ser:

<div class="grid cards" markdown>

- [GET](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/GET)
- [POST](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/POST)
- [PUT](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/PUT)
- [DELETE](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/DELETE)

</div>

Per identificar quins endpoints utilitzen cada mètode ho podràs saber amb el seu icone respectiu:

<div class="inline-flex"> 
  <div class="badge get">GET</div>
  <div class="badge post">POST</div>
  <div class="badge put">PUT</div>
  <div class="badge delete">DELETE</div>
</div>

## Autenticació

![JWT Logo](assets/jwt-logo.png# rounded shadow)

Com ja és habitual en moltes altres API, Culinary Jet utilitza un sistema d'autenticació anomenat JWT (Json Web Token) per
autenticar i verificar a l'usuari i permetre o denegar certes operacions més sensibles.

l'Autenticació a l'API es realitza mitjançant tokens d'accés. Hauràs d'incloure el teu token d'accés dins la capçalera `Authorization` en totes les sol·licituts que així ho requereixin i estiguin marcades amb els icones:

<div class="badge">🔑: Es requereix autenticació mitjançant una API-KEY.</div>
<div class="badge">JWT: Es requereix autenticació mitjançant Json Web Token.</div>

## Format de respostes

El format de totes les respostes dels endpoint de l'API estan formatades en JSON i segueixen una estructura estàndard. Cada endpoint té el seu propi apartat detallat que descriu tots els paràmetres necessaris per realitzar la sol·licitut correctament i un exemple del seu resultat esperat com en el següent exemple:

### Exemple de resposta

Endpoint: `POST comanda/crear`

Aquest endpoint retorna una llista de tots els usuaris registrats en aquesta plataforma.

**Paràmetres de consulta**

```c#
dataHoraInici: string *,
dataHoraEntrega: string *,
preu: int *,
idEntrant: int *,
idPrincipal: int *,
idPostres: int *,
```

**Exemple de resposta**

```json
{
  "comandes": {
    "id": 2,
    "data_hora_inici": "2024-04-01 15:30:00",
    "data_hora_entrega": "2024-04-01 16:00:00",
    "preu": 20,
    "entrant": {
      "id": 13,
      "nom": "platEntrant",
      "suplement": 0,
      "gluten": true,
      "lactosa": true,
      "imatge": "https://example.com/entrant.jpg"
    },
    "principal": {
      "id": 21,
      "nom": "platPrincipal",
      "suplement": 0,
      "gluten": false,
      "lactosa": true,
      "imatge": "https://example.com/principal.jpg"
    },
    "postres": {
      "id": 34,
      "nom": "platPostres",
      "suplement": 0,
      "gluten": false,
      "lactosa": true,
      "imatge": "https://example.com/postres.jpg"
    }
  }
}
```
