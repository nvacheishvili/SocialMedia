import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
