import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CreateNeedScreen = ({navigation}) => {
  const [need, setNeed] = useState('');
  const [whoCanHelp, setWhoCanHelp] = useState('');
  const [timeframe, setTimeframe] = useState('');

  const handlePublish = () => {
    // Handle the publish action (e.g., send data to a server or update state)
    console.log({need, whoCanHelp, timeframe});
	
		navigation.navigate('ReviewPostScreen', {
		  type: 'need',
		  data: {
			title: need,
			details,
			collaborators,
			timeframe,
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
      <Text style={styles.title}>Create a Need</Text>
      <Text style={styles.description}>
        Tell us what you need help with. AI will assist in refining your post.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E.g. I need AI Researchers for energy grids."
        value={need}
        onChangeText={setNeed}
      />

      <TextInput
        style={styles.input}
        placeholder="Add industries or expertise (e.g. AI, sustainability)."
        value={whoCanHelp}
        onChangeText={setWhoCanHelp}
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

export default CreateNeedScreen;
