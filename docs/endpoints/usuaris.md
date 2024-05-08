# GET Users

## Obtenir tots els usuaris

Aquest endpoint retorna una llista de tots els usuaris registrats en aquesta plataforma.

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/usuaris

**Paràmetres de consulta**

> No hi han.

**Exemple de resposta**

??? 200 success

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

??? 400 failure

    ```json

    AUTHENTICATION ERROR

    ```
