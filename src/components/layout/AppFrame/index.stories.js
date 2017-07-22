import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppFrame } from 'components'

storiesOf('AppFrame', module)
  .add('default', () => (
    <AppFrame />
  ))
