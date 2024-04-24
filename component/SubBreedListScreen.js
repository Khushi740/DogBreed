import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SubBreedListScreen = ({ route }) => {
  // Extracting the selected breed from the navigation route
  const { breed } = route.params;

  // Extracting sub-breeds for the selected breed
  const subBreeds = breed ? breed.subBreeds ?? [] : [];


  console.log('Breed:', breed);
  console.log('Sub-breeds:', breed.subBreeds);
 


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{breed ? breed.name : ''} Sub-Breeds</Text>
      <FlatList
  data={subBreeds}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{breed.name} {item}</Text>

    </View>
  )}
  keyExtractor={(item) => item}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SubBreedListScreen;
