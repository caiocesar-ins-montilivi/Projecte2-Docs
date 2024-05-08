---
comments: true
---

# Introducció

Benvinguts a la documentació de l'API Rest de la nostra plataforma culinaria. Aqui trobaràs tota la informació detallada
de com interactuar i fer servir la nostra API per realitzar diverses operacions. Som-hi!

&nbsp;

![Docs logo](assets/docs-logo.jpg# rounded shadow){ loading=lazy }

## Objectiu

La nostra API proporciona accés a recursos d'usuari, plats i comandes. Es pot utilitzar per realitzar consultes, crear nous
registres, actualitzar informació ja existent o el·liminar dades.

## Autenticació

![JWT Logo](assets/jwt-logo.png# rounded shadow)

Com ja és habitual en moltes altres API, Culinary Jet utilitza un sistema d'autenticació anomenat JWT (Json Web Token) per
autenticar i verificar a l'usuari i permetre o denegar certes operacions més sensibles.

l'Autenticació a l'API es realitza mitjançant tokens d'accés. Hauràs d'incloure el teu token d'accés dins la capçalera `Authorization` en totes les sol·licituts que així ho requereixin.

## Format de respostes

El format de totes les respostes dels endpoint de l'API estan formatades en JSON i segueixen una estructura estàndard. Cada endpoint té el seu propi apartat detallat que descriu tots els paràmetres necessaris per realitzar la sol·licitut correctament i un exemple del seu resultat esperat com en el següent exemple:

### Exemple de resposta

Endpoint: `GET /users`

Aquest endpoint retorna una llista de tots els usuaris registrats en aquesta plataforma.

**Paràmetres de consulta**

> No hi han.

**Exemple de resposta**

```json
[
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juan@example.com"
  },
  {
    "id": 2,
    "nombre": "María",
    "apellido": "González",
    "correo": "maria@example.com"
  }
]
```
