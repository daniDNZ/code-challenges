import { useState } from "react";

function Anagram() {
  /*
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
  */
    const [response, setResponse] = useState('');

    const isAnagram = () => {
      let word1 = document.querySelector('#word1').value;
      let word2 = document.querySelector('#word2').value;

      let isInvalid = false;
      let arr1 = word1.toLowerCase().split('');
      let arr2 = word2.toLowerCase().split('');

      const checks = (arr) => {
        if (arr.length === 0 || JSON.stringify(arr1) === JSON.stringify(arr2)) isInvalid = true;

        arr.forEach(char => {
          if (char === ' ') isInvalid = true;
        });
      }

      checks(arr1);
      checks(arr2);

      arr1 = arr1.sort();
      arr2 = arr2.sort();

      isInvalid
        ? setResponse('Una palabra no puede contener espacios ni estar vacía, tampoco pueden ser la misma palabra.')
        : (
          JSON.stringify(arr1) === JSON.stringify(arr2)
            ? setResponse(`'${word1}' y '${word2}' son anagramas`)
            : setResponse(`'${word1}' y '${word2}' NO son anagramas`)
        );
    }


  return (
    <>
      <section className="section">
        <h2 className="h2">Anagram</h2>
        <p className="p">
          Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
        </p>
        <ul className="section__ul">
          <li className="section__li">Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.</li>
          <li className="section__li">NO hace falta comprobar que ambas palabras existan.</li>
          <li className="section__li">Dos palabras exactamente iguales no son anagrama.</li>
        </ul>

        <h3 className="h3">Code:</h3>
        <pre className="code">
          <code>
            {`
const [response, setResponse] = useState('');           // Utilizo el hook useState en React para renderizar los resultados.
const isAnagram = () => {
  let word1 = document.querySelector('#word1').value;   // Recogemos las palabras
  let word2 = document.querySelector('#word2').value;

  let isInvalid = false;                           

  let arr1 = word1.toLowerCase().split('');             // Pasamos las palabras a minúsculas y metemos los caracteres en arrays
  let arr2 = word2.toLowerCase().split('');             // con la función split()

  const checks = (arr) => {                            // Comprobamos que se han introducido palabras, que no tienen espacios y que son distintas.
    if (arr.length === 0 || JSON.stringify(arr1) === JSON.stringify(arr2)) isInvalid = true;
    arr.forEach(char => {
      if (char === ' ') isInvalid = true;
    });
  }

  checks(arr1);
  checks(arr2);

  arr1 = arr1.sort();                                   // Ordenamos los arrays
  arr2 = arr2.sort();

  isInvalid                                          
    ? setResponse('Una palabra no puede contener espacios ni estar vacía.')
    : (
      JSON.stringify(arr1) === JSON.stringify(arr2)     // Utilizamos JSON.stringify() para pasar los arrays a strings y compararlos
        ? setResponse(word1}+' y '+word2+' son anagramas')    // Asignamos los resultados, en este caso con el hook useState de React
        : setResponse(word1}+' y '+word2+' NO son anagramas')
    );
}

`}
          </code>
        </pre>
        <h3 className="h3">Resultado: </h3>
        <input type="text" id="word1" className="input" placeholder="Introduce la palabra 1" />
        <input type="text" id="word2" className="input" placeholder="Introduce la palabra 2" />
        <button className="button" onClick={isAnagram}>Comprobar</button>
        <pre className="code code--result">
          <code>
            {
              <p className="p">{response}</p>
            }
          </code>
        </pre>
      </section>
    </>
  );
}

export default Anagram;
