---
comments: true
---

# <div class="inline-flex"><div class="badge post">POST</div> validarlogin <div class="badge" title="Requereix autenticació">🔑</div></div>

## Validar login

**Tipus**: Privada
<br>
**Id Operació**: ValidarLogin()

Aquest endpoint val·lida i autentica el login d'un usuari en la plataforma.
És necessari una Api Key per utilitzar-lo.

[Testejar utilitzant SWAGGER](../../playground.md){ .md-button .md-button--primary }

**Ruta**

!!! note ""

        culinaryjet.daw.institutmontilivi.cat/api/validarlogin/{correu}&{contrasenya}

**Paràmetres de consulta**

```c#
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
