import React, { useState } from 'react';
import CheckBox from '../../../../elements/Checkbox';
import styles from './style.module.css';
import Table from '../../../../elements/Table';

import { TableData } from '../../constants';
import SnackBar from '../../../../elements/SnackBar';
import Button from '../../../../elements/Button';
import ICON_DELETE from '../../../../assets/icons/ic_delete.svg';
import ICON_ASSIGN from '../../../../assets/icons/ic_assign.svg';
import ICON_CLOSE from '../../../../assets/icons/ic_close.svg';

export default function Component() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);

  const _renderCheckboxHeader = () => {
    return (
      <div>
        <CheckBox
          checked={checked}
          onChange={(e) => { setSelected(e.target.value); setChecked(!checked) }}
        />
      </div>
    );
  }
  const _renderCheckbox = (data) => {
    // console.log(data);
    console.log(selected);
    return (
      <>
        <CheckBox
          checked={false}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          value={data}
        />
      </>
    );
  }

  const _renderName = (data) => {
    return (
      <div className={styles.header_name}>
        {data.name}
      </div>
    );
  };

  const _renderCategory = (data) => {
    return (
      <div className={styles.header_name}>
        {data.category}
      </div>
    );
  };

  const _renderAvailable = (data) => {
    return (
      <div className={styles.header_name}>
        {data.availability}
      </div>
    );
  };

  const _renderArrival = (data) => {
    return (
      <div className={styles.header_name}>
        {data.arrival}
      </div>
    );
  };

  const tableHead = [
    {
      heading: _renderCheckboxHeader(TableData),
      value: (data) => _renderCheckbox(data),
    },
    { heading: 'Name', value: (data) => _renderName(data) },
    { heading: 'Category', value: (data) => _renderCategory(data) },
    { heading: 'Availability', value: (data) => _renderAvailable(data) },
    { heading: 'Arrival', value: (data) => _renderArrival(data) },
  ];
  return (
    <section className={styles.root}>
      <Table
        tableHead={tableHead}
        data={TableData}
      />

      {
        open && (
          <SnackBar>
            <div className={styles.container}>
              <Button onClick={() => setOpen(false)} varian="close">
                <img alt='delete' src={ICON_CLOSE} />
              </Button>
              <div>
                <p> 1 Table Selected</p>
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
    </section>
  );
};
