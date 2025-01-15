import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ReviewPostScreen = ({route, navigation}) => {
  const {type, data} = route.params; // `type` can be "goal", "need", or "opportunity"

  const getTitle = () => {
    switch (type) {
      case 'goal':
        return 'Your Goal';
      case 'need':
        return 'Your Need';
      case 'opportunity':
        return 'Your Opportunity';
      default:
        return '';
    }
  };

  const goProfile = () => {
	console.log(`${type} Published`);
    navigation.navigate('ProfileScreen');
  };

  const renderFields = () => {
    switch (type) {
      case 'goal':
        return (
          <>
            <Text style={styles.label}>Why is this goal important to you?</Text>
            <TextInput
              style={styles.input}
              value={data.importance}
              editable={false}
            />
            <Text style={styles.label}>
              What does success look like for you?
            </Text>
            <TextInput
              style={styles.input}
              value={data.success}
              editable={false}
            />
            <Text style={styles.label}>
              When do you want to accomplish this by?
            </Text>
            <TextInput
              style={styles.input}
              value={data.timeframe}
              editable={false}
            />
          </>
        );
      case 'need':
        return (
          <>
            <Text style={styles.label}>Details</Text>
            <TextInput
              style={styles.input}
              value={data.details}
              editable={false}
            />
            <Text style={styles.label}>Who can help?</Text>
            <TextInput
              style={styles.input}
              value={data.collaborators}
              editable={false}
            />
            <Text style={styles.label}>When do you need it?</Text>
            <TextInput
              style={styles.input}
              value={data.timeframe}
              editable={false}
            />
          </>
        );
      case 'opportunity':
        return (
          <>
            <Text style={styles.label}>
              What is the goal of this opportunity?
            </Text>
            <TextInput
              style={styles.input}
              value={data.goal}
              editable={false}
            />
            <Text style={styles.label}>Who are the ideal collaborators?</Text>
            <TextInput
              style={styles.input}
              value={data.collaborators}
              editable={false}
            />
            <Text style={styles.label}>Details</Text>
            <TextInput
              style={styles.input}
              value={data.details}
              editable={false}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review and Finalize Your Post</Text>
      <Text style={styles.label}>{getTitle()}</Text>
      <TextInput style={styles.input} value={data.title} editable={false} />
      {renderFields()}
      <TouchableOpacity
        style={styles.button}
        onPress={goProfile}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 100,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReviewPostScreen;
