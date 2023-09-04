import style from './nav.module.scss';
import isdi from '../../assets/svg/isdi.svg';

export function Nav() {
  return (
    <nav className={style['nav-container']}>
      <main>
        <img src={isdi} alt="ISDI Coders logo" />
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Become a patreon</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </main>
    </nav>
  );
}
