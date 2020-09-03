import React from 'react';
import Filter from '../filter/Filter';
import Nav from '../nav/Nav';
import style from './menu.module.css';

function Menu() {
  return (
    <div className={style.menu}>
      <div>
        <Filter/>
      </div>
      <div>
        <Nav/>
      </div>
    </div>
  );
}

export default Menu;