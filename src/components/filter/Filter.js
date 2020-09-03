import React from 'react';
import FilterItem from '../filterItem/FilterItem';
import style from './filter.module.css';

function Filter() {
  return (
    <div className={style.filter}>
      <FilterItem id={'filterYear'} name={'год'}/>
      <FilterItem id={'filterMinistry'} name={'министерство'}/>
      <FilterItem id={'filterTerritory'} name={'территория'}/>
      <FilterItem id={'filterProgram'} name={'программа'}/>
      <div className={style.ready}>
        <div className={style.readyInfo}>
          <p>Готовность:</p>
          <input type="number" min={0} max={100}/>
          -
          <input type="number" min={0} max={100}/>
        </div>
        <div className={style.ranges}>
          <input className={style.readyDisplay} type="range"/>
          <input className={style.readyFrom} type="range" min={0} max={99}/>
          <input className={style.readyTo} type="range" min={1} max={100}/>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.button}>Поиск</button>
        <button className={style.button}>Сброс</button>
      </div>
    </div>
  );
}

export default Filter;