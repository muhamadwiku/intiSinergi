import React from 'react';
import styles from './style.module.css';

export default function Component(props) {
  const { children, onClose, onClick, varian, className} = props;
  return (
    <button 
    className={varian ? styles[`${varian}`] : className}
    onClick={onClick}
    onClose={onClose}>
      {children}
    </button>
  );
}