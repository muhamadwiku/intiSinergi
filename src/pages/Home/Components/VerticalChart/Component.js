import React from 'react';
import { data, type } from '../../constants';
import styles from './style.module.css';

export default function Component() {
  return (
    <section className={styles.root}>
      <div className={styles.card}>
        <article>
          <h2>Chart 2</h2>
        </article>
        <article className={styles.bar_container} >
          {
            data.map((i, idx) => {
              return (
                <div className={i.type === 'disabled' ? styles.disabled : styles.active} key={idx} style={{ height: `${i.value}rem` }} />
              );
            })
          }
        </article>
        <article className={styles.bar_info}>
          {type.map((i, idx) => {
            return (
              <div key={idx}>
                <div className={i.type === 'disabled' ? styles.blob_disabled : styles.blob_active} />
                <p>{i.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  );
};
