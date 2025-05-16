export * from './color'


import { colors } from './color';

// 토큰 css 전역변수로 등록
export const registerVariables = () => {
  const root = document.documentElement;

  const categories = {
    color: colors,
  };

  Object.entries(categories).forEach(([category, tokenSet]) => {
    Object.entries(tokenSet).forEach(([key, value]) => {
      root.style.setProperty(`--${category}-${key}`, value);
    });
  });
};