import type { Preview } from '@storybook/react'
import { registerVariables } from '../src/design-system/tokens';

import '../src/app/globals.css'; 

// 토큰 css 전역변수로 등록
registerVariables();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;