import * as React from 'react';

import {NavigationProp} from '@react-navigation/native';

import {HomeTemplate} from '../../templates';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return <HomeTemplate />;
};

export {HomeScreen};
