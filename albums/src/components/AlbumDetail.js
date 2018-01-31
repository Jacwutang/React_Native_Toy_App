import React from 'react';
import {Text,View} from 'react-native';

const AlbumDetail = (props) => {

  const {album}  = props;

  return(
    <View>
      <Text> {album.title} </Text>
    </View>
  );

}

export default AlbumDetail;
