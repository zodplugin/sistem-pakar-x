import {React, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {Fire} from '../../config';
import {showError, getData} from '../../utils';
import {ILNullPhoto} from '../../assets';

const UserProfile = ({navigation, route}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params && route.params.profileData) {
          const {profileData} = route.params;
          setProfile({
            photo:
              profileData.photo?.length > 1
                ? {uri: profileData.photo}
                : ILNullPhoto,
            fullName: profileData.fullName || '',
            profession: profileData.profession || '',
          });
        } else {
          const res = await getData('user');
          const updatedProfile = {
            photo: res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto,
            fullName: res.fullName || '',
            profession: res.profession || '',
          };
          setProfile(updatedProfile);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Tambahkan penanganan kesalahan sesuai kebutuhan aplikasi Anda
      }
    };

    fetchData();
  }, [route.params, navigation]);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Languange"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  header: {
    backgroundColor: '#BB2380', 
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
