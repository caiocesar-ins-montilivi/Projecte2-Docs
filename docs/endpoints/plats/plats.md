---
comments: true
---

# <div class="inline-flex"><div class="badge get">GET</div>plats</div>

## Obtenir tots els plats

**Tipus**: Privada
<br>
**Id Operació**: LlistarPlats()

Aquest endpoint retorna una llista de tots els plats registrats en aquesta plataforma.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plats

**Paràmetres de consulta**

> No hi han.

**Exemple de resposta**

??? 200 success

    ```json

    {
        "plats" :
        {
            "id": 1,
            "nom": primer,
            "imatge": primer.jpg,
            "tipus": entrant,
            "lactosa": false,
            "gluten": true
        },
        {
            "id": 2,
            "nom": segon,
            "imatge": segon.png,
            "tipus": pica,
            "lactosa": true,
            "gluten": false
        },
        {
            "id": 3,
            "nom": tercer,
            "imatge": tercer.jpg,
            "tipus": postre,
            "lactosa": false,
            "gluten": false
        }
    }

    ```

??? 403 failure

    ```json

    AUTHENTICATION ERROR

    ```
