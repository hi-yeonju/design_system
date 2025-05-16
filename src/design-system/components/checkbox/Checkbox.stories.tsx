import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms & Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta; // ✅ 이 부분이 꼭 있어야 함!
type Story = StoryObj<typeof Checkbox>;


export const Basic: Story = {
  args: {
  },
};

export const Border: Story = {
  args: {
    variant: 'border'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};


export const Agree: Story = {
  args: {
    label: '이용약관에 동의해주세요.',
    btn: '보기',
    onClick: () => {
      alert('약관 보기 실행')
    }
  },
};
