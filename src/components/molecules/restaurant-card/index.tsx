import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RestaurantCardProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: any[];
  long: number;
  lat: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: 'https://links.papareact.com/gn7',
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold pt-2 text-lg">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <Icon name="star" color="green" size={22} />
        <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text> . {genre}
        </Text>
      </View>

      <View className="flex-row items-center space-x-1">
        <Icon name="map-marker-outline" color="gray" size={22} />
        <Text className="text-sm text-gray-500">Nearby . {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantCard};
