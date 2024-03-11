import type { Meta, StoryObj } from '@storybook/vue3'

import GreatDialogForm from './index.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'basic-material/GreatDialogForm',
  component: GreatDialogForm,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'clicked' },
  // },
  args: {
    modelValue: true,
    formList: [
      { type: 'input', label: '文本输入', prop: 'text' }
    ],
  }, // default value
} satisfies Meta<typeof GreatDialogForm>

export default meta
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf5
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    modelValue: true,
    formList: [
      { type: 'color', label: '文本输入', prop: 'text' }
    ],
  },
}

export const Secondary: Story = {
  args: {
    modelValue: true,
    formList: [
      { type: 'number', label: '文本输入', prop: 'text' }
    ],
  },
}

export const Large: Story = {
  args: {
    modelValue: true,
    formList: [
      { type: 'time-picker', label: '文本输入', prop: 'text' }
    ],
  },
}

export const Small: Story = {
  args: {
    modelValue: true,
    formList: [
      {
        type: 'select',
        label: '文本输入',
        prop: 'text',
        options: [
          { label: '南方', value: 'south' },
          { label: '北方', value: 'north' }
        ]
      }
    ],
  },
}
