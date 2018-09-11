import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
      paddingLeft: 150,
      paddingRight: 150,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#007aff',
      borderRadius: 10
   }
};

export { Button };
