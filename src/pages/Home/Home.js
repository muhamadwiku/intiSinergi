import React from 'react';
import HorizontalChart from './Components/HorizontalChart';
import Table from './Components/TableV1';
import VerticalChart from './Components/VerticalChart';
import styles from './style.module.css';

export default function Component() {
  return (
    <main className={styles.root}>
      <section>
        <div>
          <HorizontalChart />
          <VerticalChart />
        </div>
        <article>
          <Table />
        </article>
      </section>
    </main>
  );
};
