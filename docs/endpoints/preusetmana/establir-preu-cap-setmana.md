---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>preu/establircapsetmana <div class="badge" title="Requereix JWT">JWT</div></div>

## Modificar preus del menú del cap de setmana.

**Tipus**: Privada
<br>
**Id Operació**: EstablirPreuCapSetmana()

Aquest endpoint modifica els preus del menú diari del cap de setmana.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/preu/establircapsetmana&{preu}

**Paràmetres de consulta**

```c#
preu: int *;
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

    EXPECTATION FAILED (IT CANNOT EDIT THIS ENTRY)


    ```
