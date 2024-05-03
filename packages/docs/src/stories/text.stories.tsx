import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro veritatis quisquam, dolore id laudantium velit aperiam. Amet optio, officia quos inventore neque ab iusto totam maiores, tenetur in, expedita dolorem?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text!!!',
    as: 'strong',
  },
}
