## Apuntes de HTML clase 3
### Colores
Existen diversas maneras de tratar los colores:
* [Nombres](https://www.w3schools.com/html/html_colors.asp)
* [RGB](https://www.w3schools.com/html/html_colors_rgb.asp)
* [HSL](https://www.w3schools.com/html/html_colors_hsl.asp)
* [HEX](https://www.w3schools.com/html/html_colors_hex.asp)

### Enlaces 
Para agregar enlaces necesitamos la etiqueta ```<a>``` y se pueden abrir de varias maneras:
* _blank
* _self
* _top
* _parent

### Imagenes
Para vincular las imagenes a nuestro HTML, necesitamos la etiqueta ```<img>``` el atributo que no debe faltar dentro de la etiqueta es **src**, por ejemplo, agregamos esta imagen:
![Cafe](medios/cafe.jpg)

### tablas
Nos ayudan a organizar la información, para definir una tabla necesitamos la etiqueta ```<table>``` y para definir las filas necesitamos ```<tr>```, para definir las columnas necesitamos ```<td>```
Un ejemplo sencillo sería:
```
<table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th colspan="2">Telefono</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Yesser Miranda</td>
                <td>89364636</td>
                <td>81350431</td>
            </tr>
        </tbody>
    </table>
```
### LISTAS ORDENADAS Y DESORDENADAS
Para las listas desordenadas, utilizamos ```<ul>``` para las listas ordenadas utilizamos ```<ol>``` para cada uno de los items utilizamos ```<li>```
```
    <!--LISTAS DESORDENADAS-->
    <h4>Bebidas</h4>
    <ul>
        <li>Cafe</li>
        <li>Gaseosa</li>
        <li>Agua</li>
    </ul>

    <!--LISTAS ORDENADAS-->
    <h4>Mi lista de viaje</h4>
    <ol>
        <li>Jabon de baño</li>
        <li>Pasta dental</li>
        <li>Cargador de celular</li>
    </ol>
    ```

