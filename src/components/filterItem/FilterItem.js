import React from 'react';
import style from './filterItem.module.css'

function FilterItem({name, id}) {
  return (
    <div className={style.item}>
      <label htmlFor={id}>{name}</label>
      <select className={style.select} id={id}>
        <option value="1">{name}</option>
      </select>
    </div>
  );
}

export default FilterItem;