import React, {useState, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../context/AppContext';

const goals = [
  'Scale My Business',
  'Expand My Network',
  'Find Funding',
  'Collaborate On Projects',
  'Access Industry Insights',
  'Launch a New Product or Service',
  'Develop New Skills',
];

const GoalsScreen = ({navigation}) => {
  const {selectedGoals, setSelectedGoals} = useContext(AppContext);

  const toggleGoal = goal => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleContinue = () => {
    navigation.navigate('NeedsScreen');
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
        <Text style={styles.progressText}>GOALS</Text>
        <TouchableOpacity
          onPress={handleContinue}
          disabled={selectedGoals.length === 0}>
          <Icon
            name="arrow-forward-outline"
            size={24}
            color={selectedGoals.length > 0 ? '#007BFF' : '#ccc'}
          />
        </TouchableOpacity>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressSegment, styles.progressActive]} />
        <View style={[styles.progressSegment, styles.progressActive]} />

        <View style={styles.progressSegment} />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        What do you hope to achieve with Unified?
      </Text>

      {/* List of Goals */}
      <FlatList
        data={goals}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.goalItem,
              selectedGoals.includes(item) && styles.selectedGoal,
            ]}
            onPress={() => toggleGoal(item)}>
            <Text
              style={[
                styles.goalText,
                selectedGoals.includes(item) && styles.selectedGoalText,
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
  goalItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  selectedGoal: {
    backgroundColor: '#007BFF',
    borderColor: '#0056b3',
  },
  goalText: {
    fontSize: 16,
    color: '#333',
  },
  selectedGoalText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GoalsScreen;
