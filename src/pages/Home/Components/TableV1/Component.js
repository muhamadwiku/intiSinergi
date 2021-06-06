import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

import CheckBox from '../../../../elements/Checkbox';
import { TableData } from '../../constants';

import SnackBar from '../../../../elements/SnackBar';
import Button from '../../../../elements/Button';
import ICON_DELETE from '../../../../assets/icons/ic_delete.svg';
import ICON_ASSIGN from '../../../../assets/icons/ic_assign.svg';
import ICON_CLOSE from '../../../../assets/icons/ic_close.svg';

export default function Component() {
  const [open, setOpen] = useState(false);
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState([]);

  console.log(selected);

  const _selectItem = (item) => {
    // let Arr = [];
    // Arr.push(...selected, parseInt(item));
    console.log(item);
    setOpen(true)
  };

  useEffect(() => {
    if (all) {
      setSelected([1, 2, 3, 4]);
      setOpen(true);
    } else {
      setSelected();
      setOpen(false);
    };
  }, [all])

  const _CheckHeader = () => {
    return (
      <div>
        <CheckBox
          checked={all}
          onChange={() => setAll(!all)}
        />
      </div>
    );
  };

  const _Check1 = (i) => {
    return (
      <div>
        <CheckBox
          checked={selected?.includes(i)}
          onChange={(e) => _selectItem(e.target.value)}
          value={i}
        />
      </div>
    );
  };


  return (
    <div className={styles.root}>
      <section className={styles.table}>
        <header className={styles.thead}>
          <div className={styles.th}>{_CheckHeader()}</div>
          <div className={styles.th}>Name</div>
          <div className={styles.th}>Category</div>
          <div className={styles.th}>Availabolity</div>
          <div className={styles.th}>Arrival</div>
        </header>
        <div className={styles.tbody}>
          <div className={styles.tr}>{_Check1(1)}</div>
          <div className={styles.tr}>Table 01</div>
          <div className={styles.tr}>Category 01</div>
          <div className={styles.tr}>Full</div>
          <div className={styles.tr}>Arrived</div>
        </div>
        <div className={styles.tbody}>
          <div className={styles.tr}>{_Check1(2)}</div>
          <div className={styles.tr}>Table 02</div>
          <div className={styles.tr}>Category 01</div>
          <div className={styles.tr}>Available</div>
          <div className={styles.tr}>Hasn’t arrived</div>
        </div>
        <div className={styles.tbody}>
          <div className={styles.tr}>{_Check1(3)}</div>
          <div className={styles.tr}>Table 03</div>
          <div className={styles.tr}>Category 01</div>
          <div className={styles.tr}>Available</div>
          <div className={styles.tr}>Arrived</div>
        </div>
        <div className={styles.tbody}>
          <div className={styles.tr}>{_Check1(4)}</div>
          <div className={styles.tr}>Table 04</div>
          <div className={styles.tr}>Category 04</div>
          <div className={styles.tr}>Available</div>
          <div className={styles.tr}>Arrived</div>
        </div>
      </section>

      {
        open && (
          <SnackBar>
            <div className={styles.container}>
              <Button onClick={() => setOpen(false)} varian="close">
                <img alt='delete' src={ICON_CLOSE} />
              </Button>
              <div>
                <p>{selected?.length} Table Selected</p>
              </div>
              <Button varian="inherit">
                <img alt='delete' className={styles.with_img} src={ICON_ASSIGN} />
              Assign Category
            </Button>
              <Button className={styles.with_img} varian="warning">
                <img alt='delete' className={styles.with_img} src={ICON_DELETE} />
              Delete Table
            </Button>
            </div>
          </SnackBar>
        )
      }
    </div>
  );
};
