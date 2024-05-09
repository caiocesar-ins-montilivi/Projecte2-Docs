---
comments: true
---

# <div class="inline-flex"><div class="badge get">GET</div> plat/eliminar <div class="badge" title="Requereix JWT">JWT</div></div>

## Esborra un plat especificant el seu id.

**Tipus**: Privada
<br>
**Id Operació**: EliminarPlat()

Aquest endpoint esborra un plat especificant el seu {id}.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/plat/eliminar&id

**Paràmetres de consulta**

```c#
id: int *;
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
