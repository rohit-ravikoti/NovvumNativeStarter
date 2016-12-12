import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import CenterView from './CenterView';
import MapCallout from '../Components/MapCallout';

storiesOf('MapCallout', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('Default view', () => (
    <MapCallout
      location={{
        title: 'Callout Example'
      }}
      onPress={action('pressed!')}
    />
  ));
