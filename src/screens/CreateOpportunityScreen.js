import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CreateOpportunityScreen = ({navigation}) => {
  const [opportunity, setOpportunity] = useState('');
  const [goal, setGoal] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [timeframe, setTimeframe] = useState('');

  const handlePublish = () => {
    // Handle the publish action (e.g., send data to a server or update state)
    console.log({opportunity, goal, collaborators, timeframe});
	
		navigation.navigate('ReviewPostScreen', {
		  type: 'opportunity',
		  data: {
			title: opportunity,
			goal,
			collaborators,
			details,
		  },
		});
	
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
	  <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#000',
        }}
        onPress={goBack}
      > X</Text>
      <Text style={styles.title}>Create an Opportunity</Text>
      <Text style={styles.description}>
        Tell us what your working toward. AI will assist in refining your post.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E.g. Collaborate to develop AI-driven diagnostic tools for hospitals and research institutions."
        value={opportunity}
        onChangeText={setOpportunity}
      />

      <TextInput
        style={styles.input}
        placeholder="E.g., Advance AI research in healthcare diagnostics."
        value={goal}
        onChangeText={setGoal}
      />

      <TextInput
        style={styles.input}
        placeholder="E.g., Hospitals, research institutions, or AI experts."
        value={collaborators}
        onChangeText={setCollaborators}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter a timeframe (e.g. by Q3 2025)."
        value={timeframe}
        onChangeText={setTimeframe}
      />

      <TouchableOpacity style={styles.button} onPress={handlePublish}>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
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

export default CreateOpportunityScreen;
