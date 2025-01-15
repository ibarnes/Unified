import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const connections = [
  {
    id: '1',
    name: 'Rebecca (Smith) Gentile',
    title: 'Global Lead, AWS and GSI Partnerships @ NVIDIA',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg', // Replace with actual image URLs
  },
  {
    id: '2',
    name: 'Johnson George',
    title: 'General Manager - UAQ Free Trade Zone, Government of UAE',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg',
  },
  {
    id: '3',
    name: 'Elie Barnaba',
    title: 'Business Transformation Leader - EY MENA',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg',
  },
  {
    id: '4',
    name: 'Sameh Naguib',
    title: 'Head of Strategic Partnerships at Amazon Web Services',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg',
  },
  {
    id: '5',
    name: 'Akshit Singh',
    title: 'Building Partnerships | StartupsXchange Family Office',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg',
  },
  {
    id: '6',
    name: 'Lia Lungu (BA, LLB, MBA)',
    title: 'MBA | Advisor to Tariq Al Futtaim | Board Influencer',
    connected: 'Connected 1 month ago',
    image: 'https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg',
  },
];

const ConnectionsScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.profileImage} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.connected}>{item.connected}</Text>
      </View>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Message</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.brand}
           onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
          UNIFIED</Text>
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
          <Text style={styles.headerTitle}>Connections</Text>
          <View style={styles.headerIcons1}>
            <TouchableOpacity>
              <Text style={styles.icon}>🔍</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
              <Text style={styles.icon}>⚙️</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <Text style={styles.connectionCount}>13,841 connections</Text>

      <FlatList
        data={connections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
       marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
    width: '100%',
    
  },
  headerTitle: {
    fontSize: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },

  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60, // Adjust width based on icon spacing
  },

  headerIcons1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60, // Adjust width based on icon spacing
  },

  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    marginLeft: 15,
  },
  connectionCount: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 5,
  },
  title: {
    fontSize: 12,
    color: '#555',
    paddingRight: 20,
  },
  connected: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  messageButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ConnectionsScreen;
