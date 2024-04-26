import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SubBreedListScreen = ({ route }) => {
  // Extracting the selected breed from the navigation route
  const breed = route.params.data1;
  console.log(breed)
  const subBreeds = route.params.data;
  console.log(subBreeds)
  return (
    <View style={styles.container}>
      
      <FlatList
        data={subBreeds}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
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
    backgroundColor: '#FFF', // Set background color to white
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center align the title
  },
  item: {
    backgroundColor: '#40E0D0', // Set background color to turquoise
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10, // Add border radius for rounded corners
  },
  itemText: {
    fontSize: 16,
    color: '#FFFFFF', // Set text color to white
    textAlign: 'center', // Center align the text
  },
});

export default SubBreedListScreen;
