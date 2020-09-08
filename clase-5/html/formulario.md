# Agregando un formulario
## Formularios en HTML
Para agregar un formulario en HTML necesitamos la etiqueta ```<form>```, algunos atributos bastantes importantes son `action`, `method` para especificar el destino y el metodo del mensaje HTTP.
* Ejemplo
```
<form action="" method="POST">
    Nombre: <input type="text" placeholder="Ingrese el nombre" name="nombre">
    fecha de nacimiento <input type="date" name="fecha">
    <input type="submit" value="Enviar">
</form>
```
Cada elemento ha de llevar el atributo `name` para que se puedan enviar.