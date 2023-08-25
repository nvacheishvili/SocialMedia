import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', 600),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    marginLeft: -4,
    fontFamily: getFontFamily('Inter', 400),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {marginLeft: 10, flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {flexDirection: 'row', marginLeft: 27},
  userPostStatText: {marginLeft: 3, color: '#79869F'},
});

export default style;
