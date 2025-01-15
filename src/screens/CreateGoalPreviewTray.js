import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreateGoalPreviewTray = ({ navigation, route }) => {
  const { goal, importance, success, timeline } = route.params;

  const handleEdit = () => {
    navigation.goBack(); // Navigate back to the Create Goal Tray for editing
  };

  const handlePublish = () => {
    console.log('Publishing Post:', { goal, importance, success, timeline });
    // Add your backend API call here for publishing the goal
    navigation.navigate('HomeScreen'); // Navigate back to Home after publishing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Review and Finalize Your Post</Text>
      <Text style={styles.subHeader}>
        Review the details below and make any changes before publishing.
      </Text>

      {/* Display the Goal */}
      <View style={styles.section}>
        <Text style={styles.label}>Your Goal</Text>
        <Text style={styles.value}>{goal}</Text>
      </View>

      {/* Display the Importance */}
      <View style={styles.section}>
        <Text style={styles.label}>Why is this goal important to you?</Text>
        <View style={styles.bullets}>
          <Text style={styles.bulletPoint}>• {importance}</Text>
          <Text style={styles.bulletPoint}>• What success looks like: {success}</Text>
          <Text style={styles.bulletPoint}>• Timeframe: {timeline}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bullets: {
    marginTop: 5,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  editButton: {
    flex: 1,
    marginRight: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  publishButton: {
    flex: 1,
    marginLeft: 10,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  publishButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreateGoalPreviewTray;