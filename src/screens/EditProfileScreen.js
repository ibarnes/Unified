import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1708627196334546944/6BEk_4Zn_400x400.jpg' }}
          style={styles.profilePicture}
        />
        <TouchableOpacity>
          <Text style={styles.editPictureText}>Edit picture</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Fields */}
      <View style={styles.profileFieldContainer}>
        {/** User Information */}
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Name</Text>
          <TextInput style={styles.fieldValue} editable={false} value="Isaac Barnes" />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Username</Text>
          <TextInput style={styles.fieldValue} editable={true} value="IsaacBarnes" />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Bio</Text>
          <TextInput
            style={styles.fieldValue}
            editable={true}
            multiline
            value="CEO @ Unified State Group, visionary entrepreneur transforming emerging markets through innovative partnerships in digital, energy, and economic sectors for a sustainable future."
          />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Website</Text>
          <TextInput style={styles.fieldValue} editable={false} value="https://www.unifiedstategroup.com" />
        </View>

        {/** Goals and Needs */}
        <TouchableOpacity style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Primary Goals</Text>
          <Text style={styles.fieldValue}>Scale My Business, Expand My Network</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Primary Needs</Text>
          <Text style={styles.fieldValue}>Finding Partners, Scaling Operations</Text>
        </TouchableOpacity>

        {/** Professional Information */}
        <Text style={styles.sectionHeader}>Professional Information</Text>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Sectors</Text>
          <TextInput style={styles.fieldValue} editable={false} value="Technology, Energy, and Finance" />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Industries</Text>
          <TextInput
            style={styles.fieldValue}
            editable={false}
            value="Cloud Computing, Renewable Energy, Microfinance"
          />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Job Title</Text>
          <TextInput style={styles.fieldValue} editable={false} value="CEO" />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>Location</Text>
          <TextInput style={styles.fieldValue} editable={false} value="Atlanta, GA" />
        </View>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldLabel}>LinkedIn</Text>
          <TextInput style={styles.fieldValue} editable={false} value="https://www.linkedin.com/in/isaacbarnes/" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
	paddingVertical: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editPictureText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  profileFieldContainer: {
    marginBottom: 20,
  },
  fieldGroup: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  fieldValue: {
    fontSize: 16,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default EditProfileScreen;