import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const sectors = [
    'Real Estate',
    'Finance & FinTech',
    'Education & EdTech',
    'Transportation',
    'Healthcare',
    'Infrastructure',
    'Green Energy & Sustainability',
];

const SectorsScreen = ({ navigation }) => {
    const handleSelection = (sector) => {
        // Save sector and navigate to Goals
        console.log('Selected Sector:', sector);
        navigation.navigate('GoalsScreen');
    };

    const goBack = () => {
        navigation.goBack();
    };

    const goForward = () => {
        navigation.navigate('GoalsScreen');
    };

    return (
        <View style={styles.container}>
            {/* Top Navigation and Progress Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back-outline" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.progressText}>SECTORS</Text>
                <TouchableOpacity onPress={goForward}>
                    <Icon name="arrow-forward-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Progress Indicator */}
            <View style={styles.progressContainer}>
                <View style={[styles.progressSegment, styles.progressActive]} />
                <View style={styles.progressSegment } />
                
                <View style={styles.progressSegment} />
            </View>

            {/* Main Content */}
            <Text style={styles.title}>What is your sector?</Text>
            <FlatList
                data={sectors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => handleSelection(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 60, backgroundColor: '#fff' },
    topBar: {
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
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
    item: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
});

export default SectorsScreen;