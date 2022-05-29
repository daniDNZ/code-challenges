import { Fragment } from "react";

function FizzBuzz() {

  /*
   * Enunciado: Escribe un programa que muestre los números de 1 a 100 (ambos incluidos), sustituyendo los siguientes:
   * - Múltiplos de 3 por la palabra "fizz".
   * - Múltiplos de 5 por la palabra "buzz".
   * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
   *
  */

  let result = [];

  for (let i = 1; i <= 100; i++) {
    let print;

    i % 3 === 0
      ? (i % 5 === 0 ? print = 'fizzbuzz' : print = 'fizz')
      : (i % 5 === 0 ? print = 'buzz' : print = i);

    result.push(print);
  }

  let n = 0; // Para el map

  return (
    <>
      <section className="section">
        <h2 className="h2">Fizz Buzz</h2>
        <p className="p">
          Imprime los números de 1 a 100 (ambos incluidos), sustituyendo los siguientes:
        </p>
        <ul className="section__ul">
          <li className="section__li">Múltiplos de 3 por la palabra "fizz".</li>
          <li className="section__li">Múltiplos de 5 por la palabra "buzz".</li>
          <li className="section__li">Múltiplos de ambos por la palabra "fizzbuzz".</li>
        </ul>

        <h3 className="h3">Code:</h3>
        <pre className="code">
          <code>
            {`
let result = [];
for (let i = 1; i <= 100; i++) {                    // Con un bucle recorremos los números
  let print;

i%3 === 0                                           // Comprobamos si es múltiplo de 3
? (i%5 === 0 ? print = 'fizzbuzz' : print = 'fizz') // A la vez miramos si es también de 5
: (i%5 === 0 ? print = 'buzz' : print = i);         // Si no es de 3, comprobamos si es de 5

result.push(print);
}

`}
          </code>
        </pre>
        <h3 className="h3">Resultado: </h3>
        <pre className="code code--result">
          <code>
          
            {
              result.map((el) => {
                n++;
                return (
                  // React exige poner key, por eso utilizamos Fragment en vez de <>
                  <Fragment key={`${el}-${n}`}> 
                    <p>{el}</p>
                  </Fragment>

                );

              })
            }
          </code>
        </pre>
      </section>
    </>
  );
}

export default FizzBuzz;
