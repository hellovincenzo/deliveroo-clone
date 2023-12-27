import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CategoryCard} from '../../molecules';

const Categories: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard
        title="Testing"
        imageUrl="https://links.papareact.com/gn7"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
export {Categories};
