
/*
  * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
  * Hecho esto, imprime los números primos entre 1 y 100.
  *
*/

export const isPrime = (n) => {

  for (let i = 2; i < n; i++) {
    if (n / i >= n || n % i === 0) {
      return false;
    }
  }

  return true;
}

export const zeroToHungred = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if(isPrime(i)) result = [...result, i];
  }

  return result;
}

function PrimeNumber() {


  return (
    <>
      <section className="section">
        <h2 className="h2">Fizz Buzz</h2>
        <p className="p">
          Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
          Hecho esto, imprime los números primos entre 1 y 100.
        </p>

        <h3 className="h3">Code:</h3>
        <pre className="code">
          <code>
{`
const isPrime = (n) => {                      // Función que comprueba si n es primo

  for (let i = 2; i < n; i++) {               // Bucle que recorre todos los números desde 2 hasta n
    if (n / i >= n || n % i === 0) {          // Si el cociente es mayor o igual a n, o el resto es 0,
      return false;                           // quiere decir que el número no es primo. Devuelve false.
    }
  }

  return true;                                // Si no ha devuelto false, entonces es primo.
}

const zeroToHungred = () => {                 // Función que devuelve los números primos del 1 al 100.

  let result = [];

  for (let i = 1; i <= 100; i++) {            // Recorremos los números del 1 al 100.
    if(isPrime(i)) result = [...result, i];   // Si isPrime() nos devuelve true, añadimos el número al array.
  }

  return result;                              // Devolvemos el resultado.
}

`}
          </code>
        </pre>
        <h3 className="h3">Resultado: </h3>
        <pre className="code code--result">
          <code>
            {
              zeroToHungred().map((n) => {
                return <p>{n}</p>;
              })
            }
          </code>
        </pre>
      </section>
    </>
  );
}

export default PrimeNumber;
