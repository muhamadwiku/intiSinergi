import React from 'react';
import styles from './style.module.css';


export default function HorizontalGraph(props) {
  const { data, footer } = props;
  const item = data.reverse();
  return (
    <>
      <article>
        {item.map((i, idx) => {
          let validation = () => {
            switch (i.percentage) {
              case 100:
                return i.percentage - 71;
              case 90:
                return i.percentage - 64;
              case 80:
                return i.percentage - 57;
              case 70:
                return i.percentage - 50;
              case 60:
                return i.percentage - 43;
              case 50:
                return i.percentage - 36;
              case 40:
                return i.percentage - 29;
              case 30:
                return i.percentage - 21;
              case 20:
                return i.percentage - 15;
              case 10:
                return i.percentage - 8;
              default:
                break;
            }
          }
          return (
            <div className={styles.bar_container} key={idx}>
              <span className={styles.bar_y}>{i.name}</span>
              <div className={styles.bar_shadow} >
                <span className={styles.bar} style={{ width: `${validation()}em` }} />
              </div>
            </div>
          );
        })}
      </article>
      <div className={styles.bar_x}>
        {footer.map((i, idx) => <p key={idx}>{i}</p>)}
      </div>
    </>
  );
};