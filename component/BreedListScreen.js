import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const BreedListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(data.message);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleBreedPress = (breed) => {
    const subBreeds = breeds[breed];
    if (subBreeds && subBreeds.length > 0) {
      navigation.navigate('SubList', { data:subBreeds,data1:breed });
    } else {
      navigation.navigate('BreedImages', { breed });
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={Object.keys(breeds)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBreedPress(item)} style={styles.list}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}   
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginLeft: 20,
    margin: 5,
    backgroundColor: '#98F5F9', // Changed color to blue
    marginRight: 20,
    borderRadius: 10, // Added border radius
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },
});

export default BreedListScreen;
