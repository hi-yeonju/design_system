import React from 'react';
import styles from './Button.module.css';
import { isColorDark } from '@/design-system/utilities/util';
import { colors } from '@/design-system/tokens/color';

export interface ButtonProps {
  /** 버튼 색상 */
  color?:  keyof typeof colors | string;
  /** 텍스트 색상 */
  textColor?: string;
  /** 스타일 */
  variant?: 'solid' | 'border';
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** 버튼 곡률 */
  radius?: 'sm' | 'md' | 'lg' | 'full';
  /** 버튼 곡률 */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  /** 버튼명 */
  label?: string;
  /** disabled */
  disabled?: boolean;
}

export const Button = ({
  size = 'md',
  variant = 'solid',
  color = colors.primary,
  radius = 'md',
  textColor,
  shadow = 'none',
  label = '확인',
  disabled = false,
  ...props
}: ButtonProps) => {

  // color 처리
  let colorUse = color;
  const isPresetColor = color in colors;
  if (isPresetColor) {
    colorUse = colors[color as keyof typeof colors];
  }
  const isDark = isColorDark(colorUse || '#000');

  // variant 스타일
  const dynamicColorStyle = variant === 'solid'
    ? {
      backgroundColor: colorUse,
      color: textColor ? textColor : (isDark ? '#ffffff' : '#000000'),
      border: 'none',
    }
    : {
      backgroundColor: 'transparent',
      color: textColor ? textColor : colorUse,
      border: `1px solid ${colorUse}`,
    };

  // size 스타일
  const dynamicSizeStyle = (() => {
    switch (size) {
      case 'sm': return { padding: '5px 8px', fontSize: '12px' };
      case 'md': return { padding: '8px 10px', fontSize: '13px' };
      case 'lg': return { padding: '10px 16px', fontSize: '14px' };
      case 'xl': return { padding: '12px 20px', fontSize: '14px' };
      default: return { padding: '8px 10px', fontSize: '13px' };
    }
  })();

  // radius 스타일
  const dynamicRadiusStyle = (() => {
    switch (radius) {
      case 'sm': return { borderRadius: '3px' };
      case 'md': return { borderRadius: '5px' };
      case 'lg': return { borderRadius: '8px' };
      case 'full': return { borderRadius: '100px' };
      default: return { borderRadius: '5px' };
    }
  })();

  // shadow 스타일
  const dynamicShadowStyle = (() => {
    switch (shadow) {
      case 'sm': return { boxShadow: '0 2px 6px rgba(0,0,0,0.1)' };
      case 'md': return { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' };
      case 'lg': return { boxShadow: '0 4px 20px rgba(0,0,0,0.15)' };
      default: return { boxShadow: 'none' };
    }
  })();

  return (
    <button
      type="button"
      className={styles.button}
      {...props}
      disabled={disabled}
      style={{
        cursor: 'pointer',
        ...dynamicSizeStyle,
        ...dynamicRadiusStyle,
        ...dynamicShadowStyle,
        ...dynamicColorStyle,
      }}
    >
      {label}
    </button>
  );
};
