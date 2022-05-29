import { NavLink } from "react-router-dom";
import { FaCaretDown, FaFingerprint } from 'react-icons/fa';
import { useEffect } from "react";
import { capitalize, allItems } from "./Utils";

function Header() {

  const toggle = (id) => {
    const drop = document.querySelector(id);

    !drop.classList.contains('show')
      ? drop.classList.add('show')
      : drop.classList.remove('show');
  }

  useEffect(() => {

    window.onclick = (e) => {
      const clicked = e.target;
      if (!clicked.matches('.drop-btn') && !clicked.matches('.collapser__btn') ) {
        const dropdowns = document.querySelectorAll('.nav__dropdown');
        const navCollapse = document.querySelector('.nav__collapse');

        dropdowns.forEach((drop) => {
          if (drop.classList.contains('show'))
            drop.classList.remove('show');
        })

        if (navCollapse.classList.contains('show'))
          navCollapse.classList.remove('show');
      }

    }
  })

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="collapser">
            <NavLink to='/' className="nav__a a">.dnz</NavLink>
            <button className="nav__a a collapser__btn" onClick={() => toggle('.nav__collapse')}>
              <FaFingerprint />
            </button>
          </div>

          <ul className="nav__ul nav__collapse">
            <li className="nav__li"><NavLink to='/' className="nav__a a">Home</NavLink></li>
            <li className="nav__li">
              <button className="nav__a a drop-btn" onClick={() => toggle('#drop-challenges')}>Desafíos de código
                <FaCaretDown />
              </button>
              <ul id="drop-challenges" className="nav__dropdown">
                {
                  allItems.challenges.map((challenge) => {
                    const path = `/challenges/${challenge}`;
                    return (
                      <li className="nav__li" key={challenge}>
                        <NavLink to={path} className="nav__a a">{capitalize(challenge)}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            {/* <li className="nav__li">
              <button className="nav__a a drop-btn" onClick={() => toggle('#drop-apps')}>Mini apps
                <FaCaretDown />
              </button>
              <ul id="drop-apps" className="nav__dropdown">
                {
                  allItems.apps.map((app) => {
                    const path = `/apps/${app}`;
                    return (
                      <li className="nav__li" key={app}>
                        <NavLink to={path} className="nav__a a">{capitalize(app)}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
