import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CreateBottomSheet = ({ visibleSheet, setVisibleSheet }) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const closeSheet = () => {
    setVisibleSheet(null);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={visibleSheet ? 1 : -1}
      snapPoints={snapPoints}
      onClose={closeSheet}
    >
      {visibleSheet === 'createTray' && (
        <View style={styles.container}>
          <Text style={styles.title}>New Post</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisibleSheet('createGoalTray')}
          >
            <Text style={styles.buttonText}>I'm working toward a specific objective</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>I'm looking for help with something specific</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>I have something to offer to others</Text>
          </TouchableOpacity>
        </View>
      )}
      {visibleSheet === 'createGoalTray' && (
        <View style={styles.container}>
          <Text style={styles.title}>Create a Goal</Text>
          <TextInput style={styles.input} placeholder="What are you working toward?" />
          <TextInput style={styles.input} placeholder="Why is this goal important to you?" />
          <TextInput style={styles.input} placeholder="What does success look like for you?" />
          <TextInput style={styles.input} placeholder="When do you want to accomplish this by?" />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisibleSheet('createGoalPreviewTray')}
          >
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeSheet}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
      {visibleSheet === 'createGoalPreviewTray' && (
        <View style={styles.container}>
          <Text style={styles.title}>Review and Finalize Your Post</Text>
          <Text>Your Goal: Expand into green energy markets globally.</Text>
          <Text>Why this goal is important: Contribute to sustainable energy solutions worldwide.</Text>
          <TouchableOpacity style={styles.button} onPress={closeSheet}>
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisibleSheet('createGoalTray')}>
            <Text style={styles.cancelText}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%',
  },
  cancelText: {
    marginTop: 10,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default CreateBottomSheet;