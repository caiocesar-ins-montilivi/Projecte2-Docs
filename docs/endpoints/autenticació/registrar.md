---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div>registrar<div class="badge" title="Requereix autenticació">🔑</div></div>

## Registrar usuari

**Tipus**: Privada
<br>
**Id Operació**: Registrar()

Aquest endpoint registra un nou usuari a la plataforma en base als paràmetres especificats.
És necessari una Api Key per utilitzar-lo.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/registrar/{nom}&{correu}&{contrasenya}

**Paràmetres de consulta**

```c#
nom: string *,
correu: string *,
contrasenya: string *,
```

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
