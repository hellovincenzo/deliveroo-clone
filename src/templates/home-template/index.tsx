import React from 'react';
import {View, StatusBar, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeTemplate: React.FC = ({}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#2058c0" translucent />
      <View>
        <Text>Hello, World!</Text>
      </View>
    </SafeAreaView>
  );
};

export {HomeTemplate};
