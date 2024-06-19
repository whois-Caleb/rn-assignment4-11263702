import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Svg, SvgUri } from 'react-native-svg';
import androidSafeView from './styles/androidSafeView';

export default function Home() {
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
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/facebook_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.company}>Facebook</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$18,000</Text>
            <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#04284a'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/google_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Project Manager</Text>
            <Text style={styles.company}>Google</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$20,000</Text>
            <Text style={styles.featuredJobLocation}>Kumasi, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#4895e9'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/amazon_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Product Tester</Text>
            <Text style={styles.company}>Amazon</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$15,000</Text>
            <Text style={styles.featuredJobLocation}>Cape Coast, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#0fd9f0'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/x_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Senior Developer</Text>
            <Text style={styles.company}>X</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$40,000</Text>
            <Text style={styles.featuredJobLocation}>Colarado, US</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#5386e4'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/linkedin_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Junior Developer</Text>
            <Text style={styles.company}>LinkedIn</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$28,000</Text>
            <Text style={styles.featuredJobLocation}>Tema, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#04284a'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/netflix_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Product Tester</Text>
            <Text style={styles.company}>Netflix</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$17,000</Text>
            <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#4895e9'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/amazon-prime-video_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Project Manager</Text>
            <Text style={styles.company}>Amazon Prime Video</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$34,000</Text>
            <Text style={styles.featuredJobLocation}>Tamale, Ghana</Text>
          </View>
        </View>

        <View style={[styles.featuredJobCard, {backgroundColor: '#0fd9f0'}]}>
          <View style={styles.jobInfoContainer}>
            <View style={styles.logoContainer}>
            <Image source={require("./assets/tesla-motors_icon.png")} style={styles.companyLogo} />
            </View>
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Product Evaluator</Text>
            <Text style={styles.company}>Tesla Motors</Text>
          </View>
          </View>
          <View style={styles.jobDetails}>
            <Text style={styles.featuredSalary}>$28,000</Text>
            <Text style={styles.featuredJobLocation}>Carlifonia, US</Text>
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
          <Text style={styles.popularJobLocation}>Los Angeles, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/beats_icon.png")} style={styles.popularJobImage} />
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.company}>Beats</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$84,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/facebook_icon.png")} style={styles.popularJobImage} />
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.company}>Facebook</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$86,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
        <Image source={require("./assets/apple_icon.png")} style={styles.popularJobImage} />
        <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Senior Developer</Text>
          <Text style={styles.company}>Apple</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$104,000/y</Text>
          <Text style={styles.popularJobLocation}>Carlifonia, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/microsoft_icon.png")} style={styles.popularJobImage} />
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Product Evaluator</Text>
          <Text style={styles.company}>Microsoft</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$64,000/y</Text>
          <Text style={styles.popularJobLocation}>Texas, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/instagram_icon.png")} style={styles.popularJobImage} />
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Sales Analyst</Text>
          <Text style={styles.company}>Instagram</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$74,000/y</Text>
          <Text style={styles.popularJobLocation}>Los Angeles, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/whatsapp_icon.png")} style={styles.popularJobImage}/>
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Marketing Director</Text>
          <Text style={styles.company}>WhatsApp</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$84,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </View>

      <View style={styles.popularJob}>
      <Image source={require("./assets/telegram_icon.png")} style={styles.popularJobImage} />
      <View style={styles.popularJobInfo}>
          <Text style={styles.popularJobTitle}>Senior Developer</Text>
          <Text style={styles.company}>Telegram</Text>
        </View>
        <View style={styles.popularJobDetails}>
          <Text style={styles.salary}>$102,000/y</Text>
          <Text style={styles.popularJobLocation}>New York, US</Text>
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
    backgroundColor: '#5386e4',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: 220,
    height: 170,
    marginRight: 10,
  },
  jobInfoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoContainer:{
    backgroundColor: '#ffffff',
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  companyLogo:{
    objectFit: 'contain',
    height: 25,
    width: 25,
    alignSelf: 'center',
  },
  jobInfo: {
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  company: {
    color: '#9b9ba6',
  },
  jobDetails: {
    marginTop: 20,  
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  featuredSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  featuredJobLocation: {
    color: 'white',
  },
  popularJobLocation: {
    color: '#888',
  },
  popularJob: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 90,
  },
  popularJobDetails: {
    
  },
  popularJobImage: {
    height: 41,
    width: 35,
    objectFit: 'contain'
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

