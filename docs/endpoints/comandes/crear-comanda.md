---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>comanda/crear<div class="badge" title="Requereix JWT">JWT</div></div>

## Crear comanda

**Tipus**: Privada
<br>
**Id Operació**: CrearComanda()

Aquest endpoint crea una comanda per a un usuari específic segons els paràmetres entrats.
És necessari un JWT ( Json Web Token ) vàlid per identificar l'usuari.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/comanda/crear&{dataHoraInici}&{dataHoraEntrega}&{preu}&{idEntrant}&{idPrincipal}&{idPostres}

**Paràmetres de consulta**

```c#
dataHoraInici: string *,
dataHoraEntrega: string *,
preu: int *,
idEntrant: int *,
idPrincipal: int *,
idPostres: int *,
```

Paràmetres marcats amb <span style="color: red">\*</span> són obligatoris

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
