# CarruselAngular18
Carrusel con solamente Angular sin ninguna libreria extra
## Utilización:
1. Componentes: 
	* slider-container
	* slider
2. Implementación:
	* **itemsPerSlice** : cantidad de elementos que deseo mostrar por slice.
	* **data** : array de elementos para el carrusel
```js
<app-slider-container [itemsPerSlice]="3" [data]="mockData"/>
```
## Package
Solamente Angular 18 con CSS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Concepto de funcionamiento
1. Tenemos un contenedor principal. Aquí se mostrarán los elementos. Lo llamaré **contPrincipal** para hacer más fácil la redacción.
2. Sobre este contenedor tendremos otro. Este será quien contenga a todos los elementos. Lo llamaré **contContenido** de ahora en adelante.
3. Para avanzar o retroceder tendremos dos botones o íconos.
4. Todo lo que sobresalga del contPrincipal debe cortarse. Así solo se visualizará una parte del contContenido.
5. mediante los botones moveremos horizontalmente contContenido.
	* Usamos la propiedad: `transfor:translate(ejeX)`
### ¿Cuanto debe trasladarse?
Para calcular cuanto debe trasladarse el **contContenido** dentro del **contPrincipal**:
1. El ancho del contPrincipal puede ser cualquiera y será la base del cálculo.
2. Dependiendo la cantidad de slides que deseamos mostrar, vamos a calcular el ancho del contContenido: 
	* Ancho( contContenido ) = Ancho( contPrincipal ) * N°deSlides
3. El porcentaje que ocupará cada slice del contContenido será:
	*	100% / N°deSlides 
4.  Este es el porcentaje que debe trasladarse el contContenido cada vez que se presionen los botones. Debe ser acumulativo.

EJEMPLO:

3 imágenes -> cada img. ocupa el 33,3% 

imaginando que se acciona dos veces el boton derecho:

der -> -33.3%
der -> -66.6%

##

## Agregada la funcion de elegir la cantidad de items por slice
1. El `slider-container` se encargará de procesar el array de datos para adecuarlo al requerimiento. Se forma una matriz y se agregan elementos nulos para iterarlos en la vista en caso de ser necesario.

## Proximas Mejoras
### - elegir el efecto de transicion
puede ser sencillo solo pasarlo por parámetro y usarlo en la función `setCurrentStyles`
### - responsive desing
quizá lo mejor sea poner el whidth base en el "slider-container" ya que todo el resto va en % basandose en ese valor.
