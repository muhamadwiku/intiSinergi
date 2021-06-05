import React from 'react';
import HorizontalGraph from '../../Elements/HorizontalGraph';
import styles from './style.module.css';

export default function Component() {
  const dataItem = [
    { name: 'jan', percentage: 40 },
    { name: 'feb', percentage: 68 },
    { name: 'mar', percentage: 20 },
    { name: 'apr', percentage: 90 },
    { name: 'mei', percentage: 60 },
    { name: 'jun', percentage: 50 },
  ];

  const itemFooter = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
  ];
  
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


