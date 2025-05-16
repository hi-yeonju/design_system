import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Forms & Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
     control: { type: 'select' }, // 자유입력 허용
     options: ['primary', 'secondary', 'danger', '#ffaf10', '#00ff00'], // 선택지도 보여주기
    },
  }
};

export default meta; // ✅ 이 부분이 꼭 있어야 함!
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    label: 'Button',
    size: 'md',

  },
};

export const Outline: Story = {
  args: {
    size: 'md',
    label: 'Outline',
    color: 'secondary', // argTypes에 정의한 옵션 중 하나
    variant: 'border',
  },
};

export const Shadow: Story = {
  args: {
    size: 'xl',
    label: 'Shadow',
    shadow: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    label: 'Disabled',
    color: '#eee', // argTypes에 정의한 옵션 중 하나
    textColor: '#aaa',
    disabled: true
  },
};