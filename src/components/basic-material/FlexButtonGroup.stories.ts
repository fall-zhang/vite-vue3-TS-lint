import type { Meta, StoryObj } from '@storybook/vue3'

import FlexButtonGroup from './FlexButtonGroup.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'basic-material/FlexButtonGroup',
  component: FlexButtonGroup,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // argTypes: {
  //   size: { control: 'select', options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'clicked' },
  // },
  args: { option: [{ label: '清晨', value: '1' }, { label: '正午', value: '2' }, { label: '傍晚', value: '3' }] }, // default value
} satisfies Meta<typeof FlexButtonGroup>

export default meta
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const One: Story = {
  args: {
    option: [{ label: '清晨', value: '1' }, { label: '正午', value: '2' }, { label: '傍晚', value: '3' }]
  },
}

export const Multi: Story = {
  args: {
    option: [{ label: '香蕉', value: '1' }, { label: '苹果', value: '2' }, { label: '橘子', value: '3' }],
  },
}
