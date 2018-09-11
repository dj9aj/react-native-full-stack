import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CancelButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
         <Text style={textStyle}>
         {children}
         </Text>
      </TouchableOpacity>
   );
};

const styles = {
   textStyle: {
     alignSelf: 'center',
     color: '#fff',
     fontSize: 16,
     fontWeight: '600',
     paddingTop: 1,
     paddingBottom: 1
   },
   buttonStyle: {
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 20,
      marginLeft: 5,
      marginRight: 5,
      paddingBottom: 20,
      backgroundColor: '#999',
      borderRadius: 10
   }
};

export { CancelButton };