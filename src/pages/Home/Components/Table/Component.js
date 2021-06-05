import React, { useState } from 'react';
import CheckBox from '../../Elements/checkBox';
import styles from './style.module.css';
import Table from '../../Elements/Table';

import { TableData } from '../../constants';


export default function Component() {
  const [checked, setChecked] = useState(false);

  const _renderCheckbox = () => {
    return (
      <div>
        <CheckBox
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
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
      heading: _renderCheckbox(),
      value: (data) => _renderCheckbox(data.isActive, data.packetId),
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
    </section>
  );
};
