import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue'}}>Go Back</Text>
      </TouchableOpacity>
      <Text>Welcome to profile page</Text>
    </SafeAreaView>
  );
};

export default Profile;
