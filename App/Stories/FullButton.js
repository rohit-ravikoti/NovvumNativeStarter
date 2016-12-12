import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import CenterView from './CenterView';
import FullButton from '../Components/FullButton';

storiesOf('FullButton', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('Default view', () => (
    <FullButton
      text="Hello!"
      onPress={action('pressed!')}
    />
  ));
