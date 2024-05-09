---
comments: true
---

# <div class="inline-flex"><div class="badge get">GET</div>llistarcomandes<div class="badge" title="Requereix JWT">JWT</div></div>

## Llistar comanda

**Tipus**: Privada
<br>
**Id Operació**: LlistarComandes()

Aquest endpoint retorna una llista de comandes registrades per un usuari específic.
És necessari un JWT ( Json Web Token ) vàlid per identificar l'usuari.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/llistarcomandes

**Paràmetres de consulta**

> No hi han.

**Exemple de resposta**

??? 200 success

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

??? 403 failure

    ```json

    AUTHENTICATION ERROR

    ```

??? 401 failure

    ```json

    AUTHENTICATION ERROR OR INVALID KEY

    ```
