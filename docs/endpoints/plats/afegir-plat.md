---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>plat/afegir <div class="badge" title="Requereix JWT">JWT</div></div>

## Crea un nou plat utilitzant els paràmetres especificats.

**Tipus**: Privada
<br>
**Id Operació**: AfegirPlat()

Aquest endpoint retorna informació d'un plat específic registrat en la plataforma.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plat/afegir&{nom}&{descripcio}&{tipus}&{suplement}&{temps_prep}&{dies_set}&{gluten}&{lactosa}

**Paràmetres de consulta**

```c#
nom: string *,
descripcio: string,
tipus: ['Entrant', 'Principal', 'Postre'] *,
suplement: int,
temps_prep: string,
dies_set: ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres'],
gluten: bool,
lactosa: bool,
```

Paràmetres marcats amb <span style="color: red">\*</span> són obligatoris

**Exemple de resposta**

??? 200 success

    ```json

    {

    }

    ```

??? 403 failure

    ```json

    AUTHENTICATION ERROR

    ```

??? 401 failure

    ```json

    AUTHENTICATION ERROR OR ALREADY EXISTING ENTRY

    ```

??? 417 failure

    ```json

    EXPECTATION FAILED (IT CANNOT ADD THIS ENTRY)


    ```
