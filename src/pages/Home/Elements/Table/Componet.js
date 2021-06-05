import React from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';
import classes from './style.module.css';

export default function Component(props) {
  const { tableHead, data } = props

  return (
    <section className={styles.root}>
      <table>
        <thead>
          <tr>
            {tableHead.map((item, idx) => <TableHeader item={item} key={idx} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <TableRow column={tableHead} item={item} key={idx} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

Component.defaultProps = {
  tableHead: [],
  data: []
};

Component.propTypes = {
  tableHead: PropTypes.array,
  data: PropTypes.array
};

export function TableHeader({ item }) {
  return (
    <th className={styles.table_header}>{item.heading}</th>
  );
}

TableHeader.defaultProps = {
  item: {},
};

TableHeader.propTypes = {
  item: PropTypes.object,
};


export function TableRow({ column, item }) {

  return (
    <tr>
      {column.map((i, idx) => {
        const { value } = i;

        return (
          <td className={classes.table_row} key={idx}>
            {typeof value === 'function' ? value(item) : item[value]}
          </td>
        );
      })}
    </tr>
  );
}

TableRow.defaultProps = {
  column: [],
  item: {},
};

TableRow.propTypes = {
  column: PropTypes.array,
  idx: PropTypes.number,
};
