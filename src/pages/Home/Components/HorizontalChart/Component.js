import React from 'react';
import HorizontalGraph from '../../Elements/HorizontalGraph';
import {dataItem, itemFooter} from '../../constants';
import styles from './style.module.css';

export default function Component() {
 
  
  return (
    <section className={styles.root}>
      <div className={styles.card}>
        <article>
          <h2>Chart 1</h2>
        </article>
        <article>
          <HorizontalGraph data={dataItem} footer={itemFooter} />
        </article>
      </div>
    </section>
  );
};


