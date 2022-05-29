import { Fragment } from "react";

function Fibonacci() {
  /*
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 *  0, 1, 1, 2, 3, 5, 8, 13...
  */
  let i = 0;
  let fibonacci = [];
  let a = 0;
  let b = 1;

  fibonacci = [...fibonacci, a, b];

  for (let i = 2; i < 50; i++) {
    let c = a + b;
    a = b;
    b = c;

    fibonacci = [...fibonacci, c];
  }

  return (
    <>
      <section className="section">
        <h2 className="h2">Fibonacci</h2>
        <p className="p">
        Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
        </p>
        <ul className="section__ul">
          <li className="section__li">La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.</li>
          <li className="section__li"> 0, 1, 1, 2, 3, 5, 8, 13...</li>
        </ul>

        <h3 className="h3">Code:</h3>
        <pre className="code">
          <code>
{`
  let fibonacci = [];                 // Inicializamos el array y los dos primeros números
  let a = 0;      
  let b = 1;

  fibonacci = [...fibonacci, a, b];  // Incluímos los números en el array

  for (let i = 2; i < 50; i++) {    // Creamos un bucle con 48 iteraciones 
    let c = a + b;                   // Almacenamos el resultado de los dos últimos números en c
    a = b;                           // Reasignamos los dos últimos números
    b = c;

    fibonacci = [...fibonacci, c];   // Introducimos c en el array
  }

`}
          </code>
        </pre>
        <h3 className="h3">Resultado: </h3>
        <pre className="code code--result">
          <code>
            {
              fibonacci.map(n => {
                i++;
                return (
                  <Fragment key={`${n}-${i}`}> 
                    <p>{n}</p>
                  </Fragment>
                )
              })
            }
          </code>
        </pre>
      </section>
    </>
  );
}

export default Fibonacci;