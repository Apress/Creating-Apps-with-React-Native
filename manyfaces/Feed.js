import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const widgetTypes = {
  LIKE: 'like',
  COMMENT: 'commnet',
  SHARE: 'share',
  MORE: 'more',
}

function Widget(props) {
  let iconName = 'thumb-up-outline';
  switch (props.type) {
    case widgetTypes.LIKE:
      iconName = 'thumb-up-outline';
      break;
    case widgetTypes.COMMENT:
      iconName = 'comment-text-outline';
      break;
    case widgetTypes.SHARE:
      iconName = 'launch';
      break;
    case widgetTypes.MORE:
      iconName = 'dots-horizontal';
      break;
  }

  return (
  <Icon name={iconName} color={'grey'} size={30} />
  );
}
  
function NumberedWidget(props) {
  return (
  <View style={[{...props.style}, styles.widget]}>
    <Widget type={props.type}/>
    <Text style={styles.widgetText}>{props.number}</Text>
  </View>
  );
}

class Feed extends React.Component {
  render() {
    return (
      <View style={[{...this.props.style}, styles.commonPadding]}>
        <View style={styles.metaContainer}>
          <Image style={styles.avatar} source={{uri: 'https://holmeshe.me/05apps/avatar01.jpeg'}}/>
          <View style={styles.infoContainer}>
            <Text style={styles.userName}>{'Marina'}</Text>
            <Text style={styles.date}>{'July 17'}</Text>
          </View>
        </View>
        <Text style={styles.textPost}>
          Meet Joy!
        </Text>
        <Image style={styles.imagePost} source={{uri: 'https://holmeshe.me/05apps/post01.png'}}/>
        <View style={styles.controlContainer}>
          <NumberedWidget style={{flex: 1}} type={widgetTypes.LIKE} number={10}/>
          <NumberedWidget style={{flex: 1}} type={widgetTypes.COMMENT} number={2}/>
          <NumberedWidget style={{flex: 1.5}} type={widgetTypes.SHARE} number={5}/>
          <Widget type={widgetTypes.MORE} />                
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commonPadding: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  metaContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    fontSize: 18,
  },
  textPost: {
    fontSize: 22,
    marginBottom: 20,
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4/3,
    marginBottom: 20,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  widget: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  widgetText: {
    marginLeft: 3,
    fontSize: 16,
    color: 'grey',
  },
});

export default Feed;
