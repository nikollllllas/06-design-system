import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  MultiStep,
  MultiStepProps,
} from '@ng-studies-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 2,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size={'sm'}>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}
