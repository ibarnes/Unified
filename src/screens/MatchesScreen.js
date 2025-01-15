import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const opportunities = [
  {
    id: '1',
    title: 'Zayed International Airport',
    description: 'Abu Dhabi Airports - Biometric Duty-Free and Lounge Services',
    posted: 'Posted 3 weeks ago',
    matchPercentage: '87% Matched to your Goal',
  },
  {
    id: '2',
    title: 'Zayed International Airport',
    description: 'Abu Dhabi Airports - AI Forecasting for On-Time Takeoffs',
    posted: 'Posted 3 weeks ago',
    matchPercentage: '87% Matched to your Goal',
  },
];

const partners = [
  { id: '0', name: 'Nvidia', description: 'Digital innovation, global graphics and compute', logo: require('../assets/images/nvidia-logo.png') },
  { id: '1', name: 'Netflix', description: 'Digital innovation, global content reach', logo: require('../assets/images/netflix-logo.png') },
  { id: '2', name: 'PayPal', description: 'Cryptocurrency, global finance inclusion', logo: require('../assets/images/paypal-logo.png') },
  { id: '3', name: 'CocaCola', description: 'Global beverage innovation', logo: require('../assets/images/coca-cola-logo.png') },
  { id: '4', name: 'Google', description: 'Search engine and AI leader', logo: require('../assets/images/google-logo.png') },
];

const MatchesScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const renderHeader = () => (
    <View>
      <Text style={styles.header}>Your Personalized Matches</Text>
      <Text style={styles.subHeader}>Powered by Unified AI</Text>
      <Text style={styles.subHeader}>Tailored for your goals, industry, and challenges</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Opportunities (47)</Text>
        <TouchableOpacity>
          <Icon name="information-circle-outline" size={20} color="#007BFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View>
      <Text style={styles.sectionTitle}>Partners you may be interested in</Text>
      <View style={styles.partnerGrid}>
        {partners.map((partner) => (
          <TouchableOpacity
            key={partner.id}
            style={styles.partnerCard}
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Image source={partner.logo} style={styles.partnerLogo} />
            <Text style={styles.partnerName}>{partner.name}</Text>
            <Text style={styles.partnerDescription}>{partner.description}</Text>
            <TouchableOpacity
              style={styles.connectButton}
              onPress={() => console.log(`Connect with ${partner.name}`)}
            >
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      data={opportunities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.opportunityCard}>
          <View style={styles.opportunityContent}>
            <Text style={styles.opportunityTitle}>{item.title}</Text>
            <Text style={styles.opportunityDescription}>{item.description}</Text>
            <Text style={styles.opportunityPosted}>{item.posted}</Text>
            <Text style={styles.opportunityMatch}>{item.matchPercentage}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="close-circle" size={24} color="#FF4C4C" />
          </TouchableOpacity>
        </View>
      )}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      contentContainerStyle={styles.scrollContainer}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 100,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  opportunityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  opportunityContent: {
    flex: 1,
  },
  opportunityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  opportunityDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  opportunityPosted: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  opportunityMatch: {
    fontSize: 12,
    color: '#28A745',
    fontWeight: 'bold',
  },
  partnerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  partnerCard: {
    width: '48%',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  partnerLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  partnerName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  partnerDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  connectButton: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  connectButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MatchesScreen;