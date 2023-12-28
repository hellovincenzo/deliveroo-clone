import React from 'react';
import {Image, Text, ScrollView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RestaurantCard} from '../../molecules';

interface FeaturedRowProps {
  id: string;
  title: string;
  description: string;
  featuredCategory: string;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({
  id,
  title,
  description,
  featuredCategory,
}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon name="arrow-right" size={20} color={'#00CCB5'} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        style={styles.scrollView}
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id={123}
          imageUrl="https://reactnative.dev/img/tiny_logo.png"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          short_description="This is a Test, description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
  },
});

export {FeaturedRow};
