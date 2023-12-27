import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Categories, FeaturedRow} from '../../components/organisims';

const HomeTemplate = ({}) => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View className="flex-1">
          <Text className="font-bole text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <Icon name="chevron-down" size={20} color={'#00CCB5'} />
          </Text>
        </View>

        <Icon name="account-outline" size={35} color={'#00CCB5'} />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1  bg-gray-200 space-x-2 p-3">
          <Icon name="magnify" color="gray" size={20} />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <Icon name="tune-vertical" color={'#00CCB5'} size={20} />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={styles.scrollView}>
        <Categories />

        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 100,
  },
});
export {HomeTemplate};
