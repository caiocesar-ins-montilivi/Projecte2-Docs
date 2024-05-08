# GET Plats

## Obtenir tots els plats

Aquest endpoint retorna una llista de tots els plats registrats en aquesta plataforma.

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plats

**Paràmetres de consulta**

> No hi han.

**Exemple de resposta**

??? 200 success

    ```json
    [
      {
        "plats" :
        {
            "id": 1,
            "nom": primer,
            "imatge": primer.jpg,
            "tipus": entrant,
            "glucosa": false,
            "gluten": true
        },
        {
            "id": 2,
            "nom": segon,
            "imatge": segon.png,
            "tipus": pica,
            "glucosa": true,
            "gluten": false
        },
        {
            "id": 3,
            "nom": tercer,
            "imatge": tercer.jpg,
            "tipus": postre,
            "glucosa": false,
            "gluten": false
        },
      }
    ]

    ```

??? 400 failure

    ```json

    AUTHENTICATION ERROR


    ```
