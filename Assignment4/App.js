import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SvgUri } from 'react-native-svg';
import androidSafeView from './styles/androidSafeView';

const App = () => {
  return (
    <SafeAreaView style={androidSafeView.androidSafeArea}>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
        </View>
        <Image
          source={require('./assets/Profile_image.png')}
          style={styles.profileImage}
        />
      </View>
       
      <View style={styles.searchContainer}>
        <Icon name='search' size={24} color="#888" style={{paddingHorizontal:2}}/>       
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <Icon name="tune" size={24} color="#888" style={styles.searchIcon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal={true} style={styles.featuredJobs} showsHorizontalScrollIndicator={false}>
        <View style={styles.featuredJobCard}>
          <SvgUri width="24" height="24" uri="path-to-facebook-logo-svg" />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.company}>Facebook</Text>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.salary}>$180,00</Text>
            <Text style={styles.location}>Accra, Ghana</Text>
          </View>
        </View>

        <View style={styles.featuredJobCard}>
          <SvgUri width="24" height="24" uri="path-to-google-logo-svg" />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.company}>Google</Text>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.salary}>$160,00</Text>
            <Text style={styles.location}>California, US</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.popularJob}>
        <Image width="24" height="24" source={require("./assets/burger-king-4 1.png")} />
        <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Jr Executive</Text>
          <Text style={styles.company}>Burger King</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$96,000/y</Text>
          <Text style={styles.location}>Los Angeles, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
        <Image width="24" height="24" source={require("./assets/beats_icon.png")} />
        <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.company}>Beats</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$84,000/y</Text>
          <Text style={styles.location}>Florida, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
        <Image width="24" height="24" source={require("./assets/facebook_icon.png")} />
        <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.company}>Facebook</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$86,000/y</Text>
          <Text style={styles.location}>Florida, US</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#888',
  },
  featuredJobs: {
    marginBottom: 20,
  },
  featuredJobCard: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 10,
    width: 200, // Set a fixed width for the cards to enable horizontal scrolling
    marginRight: 10,
  },
  jobInfo: {
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    color: '#888',
  },
  jobDetails: {
    marginTop: 20,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    color: '#888',
  },
  popularJob: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  popularJobInfo: {
    flex: 1,
    marginLeft: 10,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;