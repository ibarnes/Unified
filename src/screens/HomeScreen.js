import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.brand}>UNIFIED</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="notifications-outline" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfileScreen');
              }}>
              <Icon name="settings-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.greeting}>Hi, Isaac</Text>
            <Text style={styles.subGreeting}>GOOD AFTERNOON</Text>
          </View>
          <Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1708627196334546944/6BEk_4Zn_400x400.jpg',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Profile Customization Section */}
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Edit Profile</Text>
        <Text style={styles.actionSubText}>
          Refine your preferences to improve recommendations.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Manage Posts</Text>
        <Text style={styles.actionSubText}>
          Manage your Needs, Goals, and Opportunities.
        </Text>
      </TouchableOpacity>

      {/* Feature Grid */}
      <View style={styles.features}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => {
            navigation.navigate('MatchesStack');
          }}>
          
          <Icon name="person-outline" size={24} color="#007BFF" />
          <Text style={styles.featureTitle}>Recommended Partners</Text>
          <Text style={styles.featureDescription}>
            Find professionals aligned with your goals.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}
         onPress={() => {
            navigation.navigate('MatchesStack');
          }} >
          <Icon name="calendar-outline" size={24} color="#007BFF" />
          <Text style={styles.featureTitle}>Upcoming Opportunities</Text>
          <Text style={styles.featureDescription}>
            Discover projects and events tailored for you.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <Icon name="stats-chart-outline" size={24} color="#007BFF" />
          <Text style={styles.featureTitle}>Your Insights</Text>
          <Text style={styles.featureDescription}>
            Get personalized reports and data-driven recommendations.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard}>
          <Icon name="trending-up-outline" size={24} color="#007BFF" />
          <Text style={styles.featureTitle}>Trending Projects</Text>
          <Text style={styles.featureDescription}>
            Discover high-impact initiatives and opportunities.
          </Text>
        </TouchableOpacity>

        <View style={styles.navigation}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60, // Adjust width based on icon spacing
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
  actionButton: {
    backgroundColor: '#F5F8FB',
    padding: 15,
    borderRadius: 10,
    borderColor: '#AEADB3',
    borderWidth: 1,
    marginBottom: 15,
  },
  actionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  actionSubText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
  featureDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;
