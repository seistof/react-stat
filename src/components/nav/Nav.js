import React from 'react';
import NavItem from '../navItem/NavItem';
import style from './nav.module.css';

function Nav() {
  return (
    <div className={style.nav}>
      <NavItem name={'Конструктор'}/>
      <NavItem name={'Загрузка'}/>
      <NavItem name={'Экспорт'}/>
      <NavItem name={'Министерства'}/>
      <NavItem name={'Территории'}/>
      <NavItem name={'Программы'}/>
    </div>
  );
}

export default Nav;