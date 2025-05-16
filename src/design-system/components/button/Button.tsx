import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, styles.button2].join(' ')}
    >
      {label}
    </button>
  );
};
