import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateScreen = ({ navigation }) => {
    const handleOptionPress = (option) => {
        if (option === 'working_toward') {
            navigation.navigate('CreateGoalScreen');
        } else if (option === 'looking_for_help') {
            navigation.navigate('CreateNeedScreen');
        } else if (option === 'offering') {
            navigation.navigate('CreateOpportunityScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Post</Text>
            <Text style={styles.subtitle}>What would you like to share?</Text>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('working_toward')}>
                <Text style={styles.optionText}>I'm working toward a specific objective.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('looking_for_help')}>
                <Text style={styles.optionText}>I'm looking for help with something specific.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress('offering')}>
                <Text style={styles.optionText}>I have something to offer to others.</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
    },
    optionButton: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
});

export default CreateScreen;