import { Link } from "react-router-dom";
import { capitalize, allItems } from './Utils';

function Home() {

  return (
    <>
    <section className="section">
      <h1 className="h1">Desafíos de código y mini apps en JavaScript</h1>
      <p className="p">
        Aquí puedes encontrar desafíos de código y pequeñas apps programadas en JavasCript. Siéntete libre de cotillear
        todo lo que quieras y de visitar el repositorio de <a href="https://github.com/daniDNZ/code-challenges" className="a">GitHub</a>.
        Si quieres contactar conmigo, puedes hacerlo a través de mi <a href="https://danisanzdev.com" className="a">web</a>.
      </p>
    </section>
      <section className="section">
        <h2 className="h2">Desafíos</h2>
        <ul className="section__ul">
          {
            allItems.challenges.map((challenge) => {
              const path = `/challenges/${challenge}`;
              return (
                <li className="section__li" key={challenge}>
                  <Link to={path} className="section__a a">{capitalize(challenge)}</Link>
                </li>
              )
            })
          }
        </ul>
      </section>
      {/* <section className="section">
        <h2 className="h2">Mini apps y juegos</h2>
        <ul className="section__ul">
          {
            allItems.apps.map((app) => {
              const path = `/apps/${app}`;
              return (
                <li className="section__li" key={app}>
                  <Link to={path} className="section__a a">{capitalize(app)}</Link>
                </li>
              )
            })
          }
        </ul>
      </section> */}
    </>
  );
}

export default Home;
