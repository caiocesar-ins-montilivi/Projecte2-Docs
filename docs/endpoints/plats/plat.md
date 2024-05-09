---
comments: true
---

# <div class="inline-flex"><div class="badge get"> GET </div>plat/contingut</div>

## Obtenir informació per a un plat especific.

**Tipus**: Privada
<br>
**Id Operació**: ContingutPlat()

Aquest endpoint retorna informació d'un plat específic registrat en la plataforma.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plat/contingut?{id}

**Paràmetres de consulta**

```c#
id: int *;
```

Paràmetres marcats amb <span style="color: red">\*</span> són obligatoris

**Exemple de resposta**

??? 200 success

    ```json

    {
      "plats": {
          "id": 3,
          "nom": "tercer",
          "imatge": "tercer.jpg",
          "descripcio": "Plat Tercer. Lorem Ipsum Dolor Sit Amet",
          "tipus": "entrant",
          "suplement": 5,
          "temps_preparacio": "15:00:00",
          "dies_setmana": {
              "dilluns": false,
              "dimarts": true,
              "dimecres": false,
              "dijous": false,
              "divendres": true
          },
          "lactosa": "true",
          "gluten": "false",
      },
    }

    ```

??? 403 failure

    ```json

    AUTHENTICATION ERROR


    ```
