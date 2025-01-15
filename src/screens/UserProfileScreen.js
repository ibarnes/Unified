import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UserProfileScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Goals');

  const goals = [
    {
      id: '1',
      timeframe: 'Q1 2025',
      description: 'Looking to expand content partnerships in AI-driven media.',
      status: 'Open for Collaboration',
    },
    {
      id: '2',
      timeframe: 'Q3 2025',
      description:
        'Lead in Green Computing to position ourselves as leaders in energy-efficient GPUs and sustainable computing.',
      status: 'In Progress',
    },
    {
      id: '3',
      timeframe: 'Q1 2025',
      description:
        'Strengthen Strategic Partnerships and Alliances to collaborate with Fortune 500 companies, governments, and startups in AI, cloud computing, and gaming.',
      status: 'In Progress',
    },
    {
      id: '4',
      timeframe: 'Q4 2025',
      description:
        'Innovate in Edge Computing to develop edge computing solutions for IoT, autonomous vehicles, and smart cities.',
      status: 'Open for Collaboration',
    },
  ];

  const renderGoal = ({item}) => (
    <View style={styles.goalContainer}>
      <Text style={styles.timeframe}>{item.timeframe}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text
        style={[
          styles.status,
          item.status === 'Open for Collaboration'
            ? styles.openCollaboration
            : styles.inProgress,
        ]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBrand}>
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
      </View>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerText}>
            <Text style={styles.companyName}>NVIDIA</Text>
            <Text style={styles.username}>@Nvidia</Text>
            <Text style={styles.descriptionText}>
              Global leader in graphics, compute & networking solutions.
            </Text>
            <Text style={styles.sharedConnections}>
              3 shared connections: Google, PayPal, Coca-Cola.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://brandlogos.net/wp-content/uploads/2022/03/nvidia-logo-brandlogos.net_.png',
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Mention</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        {['Goals', 'Needs', 'Opportunities'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      {activeTab === 'Goals' && (
        <FlatList
          data={goals}
          keyExtractor={item => item.id}
          renderItem={renderGoal}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: 50,
  },
  header: {
    padding: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBrand: {
    // marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60, // Adjust width based on icon spacing
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 0,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    verticalAlign: 'top',
  },
  headerText: {
    flex: 1,
  },
  companyName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
  sharedConnections: {
    fontSize: 14,
    color: '#7F7C7C',
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Adjusted for equal spacing
  },
  button: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  outlineButton: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  outlineButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'none',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  list: {
    padding: 20,
  },
  goalContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  timeframe: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  openCollaboration: {
    color: '#395FE7',
  },
  inProgress: {
    color: '#34A853',
  },
});

export default UserProfileScreen;
