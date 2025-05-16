
import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
    /** 부가 설명 */
    label?: string
    /** 추가 링크 버튼명 */
    btn?: string
    /** 추가 링크 동작 */
    onClick?: () => void
    /** 스타일 */
    variant: 'solid' | 'border';
    /** disabled */
    disabled?: boolean;
}

const Checkbox = ({
    label,
    variant = 'solid',
    disabled = false,
    btn = '보기',
    onClick,
    ...props
}:CheckboxProps) => {

    const id = React.useId(); 

    return (
        <div className={styles.container}>
            <label className={[styles.checkbox, styles[variant]].join(' ')} htmlFor={id}>
                <input type="checkbox" id={id}  className='visually-hidden' {...props} disabled={disabled} />
                <span className='no-drag'><i aria-hidden="true"></i> {label || ''}</span>
            </label>
            {onClick && (
                <button className={styles.more} onClick={onClick}>{btn}</button>
            )}
        </div>
    );
}


export default Checkbox;