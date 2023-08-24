import React from 'react';

import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import style from './style';

const UserProfileImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimensions, height: props.imageDimensions}}
      />
    </View>
  );
};
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};
export default UserProfileImage;
