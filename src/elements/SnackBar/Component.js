import React from 'react';
import styles from './style.module.css';

export default function Component (props) {
  const {children} = props;
  return(
    <section className={styles.snack_root}>
      <div className={styles.container}>
        {children}
      </div> 
    </section>
  );
};
