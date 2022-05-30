/*
* Enunciado: Crea una función que sea capaz de calcular y retornar el área de un polígono.
* - La función recibirá por parámetro sólo UN polígono a la vez.
* - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
* - Imprime el cálculo del área de un polígono de cada tipo.
*/

import { useState } from "react";

class Polygon {
  constructor(base, h) {
    this.base = base;
    this.h = h;
  }

  area() {
    return this.base * this.h;
  }
}

export class Square extends Polygon {
  constructor(base) {
    super(base, base);
  }
}

export class Rectangle extends Polygon { }

export class Triangle extends Polygon {
  area() {
    return (this.base * this.h) / 2;
  }
}

export const getArea = () => {
  const polygon = document.querySelector('#selectPolygon').value;
  const base = document.querySelector('#base').value;
  const h = document.querySelector('#h').value;

  switch (polygon) {
    case 'square':
      const square = new Square(base);
      return square.area();
    case 'rectangle':
      const rectangle = new Rectangle(base, h);
      return rectangle.area();
    case 'triangle':
      const triangle = new Triangle(base, h);
      return triangle.area();
    default:
      break;
  }
}

function PolygonArea() {
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setResult(getArea());
  }

  const isSquare = (e) => {
    const val = e.target.value;
    const h = document.querySelector('#h');

    if (val === 'square') {
      h.setAttribute('disabled', 'true')
     } else if (h.hasAttribute('disabled')){
      h.removeAttribute('disabled')
     } 

  }

  return (
    <>
      <section className="section">
        <h2 className="h2">Fizz Buzz</h2>
        <p className="p">
          Enunciado: Crea una función que sea capaz de calcular y retornar el área de un polígono.
        </p>
        <ul className="section__ul">
          <li className="section__li">La función recibirá por parámetro sólo UN polígono a la vez.</li>
          <li className="section__li">Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.</li>
          <li className="section__li">Imprime el cálculo del área de un polígono de cada tipo.</li>
        </ul>

        <h3 className="h3">Code:</h3>
        <pre className="code">
          <code>
{`
class Polygon {                                 // Creamos la clase Polygon con las propiedades
  constructor(base, h) {                        // base y altura, además del método area()
    this.base = base;
    this.h = h;
  }

  area() {
    return this.base * this.h;
  }
}

class Square extends Polygon {                  // Extendemos la clase con la clase Square y cambiamos
  constructor(base) {                           // la altura por la misma base.
    super(base, base);
  }
}

class Rectangle extends Polygon { }             // Creamos la clase Rectangle extendiendo Polygon.

class Triangle extends Polygon {                // Creamos la clase Triangle extendiendo Polygon y modificando
  area() {                                      // el método area().
    return (this.base * this.h) / 2;
  }
}

const getArea = () => {                         // Función que recoge los valores, asigna los objetos y llama a sus métodos area().
  const polygon = document.querySelector('#selectPolygon').value;
  const base = document.querySelector('#base').value;
  const h = document.querySelector('#h').value;

  switch (polygon) {
    case 'square':
      const square = new Square(base);
      return square.area();
    case 'rectangle':
      const rectangle = new Rectangle(base, h);
      return rectangle.area();
    case 'triangle':
      const triangle = new Triangle(base, h);
      return triangle.area();
    default:
      break;
  }
}

const [result, setResult] = useState(0);        // Declaramos result como estado.

const handleClick = (e) => {
  e.preventDefault();
  setResult(getArea());                         // Asignamos el área al resultado.
}

`}
          </code>
        </pre>
        <h3 className="h3">Resultado: </h3>
        <ul className="section__ul">
          <li className="section__li">Para un cuadrado solo hace falta introducir la base.</li>
          <li className="section__li">Para un rectángulo o un triángulo harán falta ambas.</li>
        </ul>
        <select name="Polygon" id="selectPolygon" className="input select" onInput={isSquare}>
          <option value="rectangle">Rectángulo</option>
          <option value="square">Cuadrado</option>
          <option value="triangle">Triángulo</option>
        </select>
        <input type="number" id="base" className="input" placeholder="Introduce la base" />
        <input type="number" id="h" className="input" placeholder="Introduce la altura" />
        <button className="button" onClick={handleClick}>Calcular</button>
        <pre className="code code--result">
          <code>
            {
                result
            }
          </code>
        </pre>
      </section>
    </>
  );
}

export default PolygonArea;
