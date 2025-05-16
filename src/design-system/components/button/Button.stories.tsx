import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'DesignSystem/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta; // ✅ 이 부분이 꼭 있어야 함!
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};
