---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>plat/modificar <div class="badge" title="Requereix autenticació">🔑</div></div>

## Modificar informació per a un plat especific

Aquest endpoint modifica informació d'un plat específic registrat en la plataforma.

[Testejar utilitzant SWAGGER](/playground){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plat/modificar&{id}&{nom}&{descripcio}&{tipus}&{sumplement}&{temps_prep}&{dies_set}&{gluten}&{lactosa}

**Paràmetres de consulta**

```c#
id: int *,
nom: string,
descripcio: string,
tipus: ["Entrant", "Principal", "Postre"],
suplement: int,
temps_prep: string,
dies_set: {
  "Dilluns": bool,
  "Dimarts": bool,
  "Dimecres": bool,
  "Dijous": bool,
  "Divendres": bool,
},
gluten: bool,
lactosa: bool
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
          "glucosa": "true",
          "gluten": "false",
      },
    }

    ```

??? 403 failure

    ```json

    AUTHENTICATION ERROR

    ```

??? 401 failure

    ```json

    AUTHENTICATION ERROR OR NON EXISTING ENTRY

    ```

??? 417 failure

    ```json

    EXPECTATION FAILED (IT CANNOT DELETE THIS ENTRY)


    ```
