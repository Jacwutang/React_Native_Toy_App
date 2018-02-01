import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
const AlbumDetail = ({album}) => {

  const {title,artist,thumbnail_image,image}  = album;

  return(
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
          style={styles.thumbnailStyle}
          source={ { uri: thumbnail_image} }
          />
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
        style={styles.imageStyle}
        source={ { uri: image} }
        />

      </CardSection>
    </Card>
  );

}

export default AlbumDetail;


const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },

  imageStyle:{
    height: 300,
    flex: 1,
    width: null,
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  headerTextStyle:{
    fontSize: 18,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
}
