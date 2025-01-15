import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CreateTray = ({ navigation, isVisible, onClose }) => {
  const bottomSheetRef = useRef(null);

  // Snap Points for the BottomSheet
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    isVisible && (
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onClose={onClose} // Close the tray
      >
        
      </BottomSheet>
    )
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 14,
    color: '#777',
  },
  button: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    width: '90%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default CreateTray;