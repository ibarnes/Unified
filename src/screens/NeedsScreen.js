import React, {useState, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../context/AppContext';

const needs = [
  'Finding Partners',
  'Raising Capital',
  'Scaling Operations',
  'Improving Brand Visibility',
  'Accessing Industry Expertise',
  'Building A Skilled Team',
  'Entering New Markets',
];

const NeedsScreen = ({navigation}) => {
  const {selectedNeeds, setSelectedNeeds} = useContext(AppContext);

  const toggleNeed = need => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter(n => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleContinue = () => {
    console.log('Selected Needs:', selectedNeeds); // Log or send to backend
    navigation.navigate('HomeScreen'); // Navigate to the next onboarding step
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Navigation Arrows */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.progressText}>NEEDS</Text>
        <TouchableOpacity
          onPress={handleContinue}
          disabled={selectedNeeds.length === 0}>
          <Icon
            name="arrow-forward-outline"
            size={24}
            color={selectedNeeds.length > 0 ? '#007BFF' : '#ccc'}
          />
        </TouchableOpacity>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressSegment, styles.progressActive]} />
        <View style={[styles.progressSegment, styles.progressActive]} />
        <View style={[styles.progressSegment, styles.progressActive]} />
      </View>

      {/* Title */}
      <Text style={styles.title}>What are your current challenges?</Text>

      {/* List of Needs */}
      <FlatList
        data={needs}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.needItem,
              selectedNeeds.includes(item) && styles.selectedNeed,
            ]}
            onPress={() => toggleNeed(item)}>
            <Text
              style={[
                styles.needText,
                selectedNeeds.includes(item) && styles.selectedNeedText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 2,
    borderRadius: 2,
  },
  progressActive: {
    backgroundColor: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  needItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  selectedNeed: {
    backgroundColor: '#007BFF',
    borderColor: '#0056b3',
  },
  needText: {
    fontSize: 16,
    color: '#333',
  },
  selectedNeedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NeedsScreen;
