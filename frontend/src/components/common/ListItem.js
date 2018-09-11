import React, { Component } from 'react';
import { Text } from 'react-native';
import { ItemSection } from './index';


class ListItem extends Component {

   formatName(str) {
      const words = []; // Create new array for modified string

      for (let word of str.split(' ')) { // Loop over array from shallow copy by splitting input string by spaces (into words)
         words.push(word[0].toUpperCase() + word.slice(1)); // Uppercase first index and then join with rest of word from index 1 and push into new array
      }
      
      return words.join(' '); // Convert array to string and return result
   }
   
   render() {
      const name = this.props.candidate.name;
      
      return (
         <ItemSection><Text style={{ fontSize: 20 }}>{this.formatName(name)}</Text></ItemSection>
      );
   }
}

export { ListItem };