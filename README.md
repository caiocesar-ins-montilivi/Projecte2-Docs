# Projecte2-Docs
Documentació per el projecte 2 de DAW-2n utilitzant MkDocs Material. Fet per **Caio Cesar Gomes**.

## Com configurar
Per a poder utilitzar aquest projecte en el teu equip de manera local i poder fer canvis has
de descarregar una còpia d'aquest projecte i posteriorment instal·lar les seves dependències.

### Pas 1:
Clonar el projecte en local
```
git clone https://github.com/caiocesar-ins-montilivi/Projecte2-Docs.git
```

### Pas 2 (Recomanat):
> [!TIP]
> És molt recomanat fer aquest pas per a que no hi hagin conflictes de versions amb les llibreríes locals.
Crea un [entorn virtual de Python](https://docs.python.org/es/3.5/tutorial/venv.html)
```
python -m venv env
env\Scripts\activate
```

### Pas 3:
Instal·lar les llibreríes utilitzant fitxer de requeriments (requirements.txt)
```
pip install -r requirements.txt
```

### Pas 4:
Executar servidor local de desenvolupament
```
mkdocs serve
```
