import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   return (
      <View style={styles.containerStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   containerStyle: {
      borderRadius: 2,
      borderBottomWidth: 0,
      elevation: 1,
      paddingBottom: 20,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
      height: 580,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between'
   }
};

export { Card }
