
import React from 'react';
import styles from './Select.module.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, onChange, children, ...props }) => {
  return (
    <select className={styles.select} value={value} onChange={onChange} {...props}>
      {children}
    </select>
  );
};

export default Select;
