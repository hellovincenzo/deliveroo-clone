import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({title, imageUrl}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        className="h-20 w-20 rounded "
        source={{
          uri: imageUrl,
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {CategoryCard};
