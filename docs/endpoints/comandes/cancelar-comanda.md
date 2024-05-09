---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>comanda/cancelar<div class="badge" title="Requereix JWT">JWT</div></div>

## Cancel·lar comanda

**Tipus**: Privada
<br>
**Id Operació**: CancelarComanda()

Aquest endpoint cancel·la una comanda per a un usuari específic especificant el seu {id}.
És necessari un JWT ( Json Web Token ) vàlid per identificar l'usuari.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/comanda/cancelar&{id}

**Paràmetres de consulta**

```c#
id: string *,
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

    AUTHENTICATION ERROR OR NON EXISTING ENTRY

    ```

??? 417 failure

    ```json

    EXPECTATION FAILED (IT CANNOT DELETE THIS ENTRY)


    ```
