import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import CenterView from './CenterView';
import AlertMessage from '../Components/AlertMessage';

storiesOf('AlertMessage', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('Default view', () => (
    <AlertMessage />
  ));
