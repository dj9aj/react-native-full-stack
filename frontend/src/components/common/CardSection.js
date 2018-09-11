import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   return (
      <View style={props.style}>
         {props.children}
      </View>
   );
};

const styles = {
   containerStyle: {
      padding: 10,
      margin: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      flexDirection: 'column',
      borderColor: '#ddd',
      height: 200
   }
};

export { CardSection };
