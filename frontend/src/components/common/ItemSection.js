import React from 'react';
import { View } from 'react-native';

const ItemSection = (props) => {
   return (
      <View style={[styles.containerStyle, props.style]}>
         {props.children}
      </View>
   );
};

const styles = {
   containerStyle: {
      borderBottomWidth: 1,
      padding: 30,
      margin: 4,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
   }
};

export { ItemSection };
