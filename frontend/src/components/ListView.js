import React, { Component } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Spinner, ListItem } from './common';
import * as actions from '../actions';

class ListView extends Component {


   componentDidMount() {
      this.props.fetchAllCandidates();
   }

   static navigationOptions = {
      title: 'People',
      headerStyle: {
         backgroundColor: '#fff'
      },
      headerTitleStyle: {
         color: '#212121'
      }
   };
   
   renderDetailView(id, name) {
      const { navigate } = this.props.navigation;
      this.props.selectedCandidate(id); // Call action creator
      navigate('Detail', { name: name, uid: id }) // Render Detail Screen
   }     

   renderList() {
      if (this.props.loading) {
         return <Spinner size="large" />
      }
      return (
         <FlatList 
            data={this.props.candidates}
            keyExtractor={item => item.name}
            renderItem={({ item }) => 
            <TouchableOpacity onPress={() => this.renderDetailView(item.uid, item.name)}>
               <ListItem candidate={item} />
            </TouchableOpacity>}
         />
      );
   }

   render() {
      return (
         <View>
            {this.renderList()}
         </View>
      );
   }
}

// Get global state from Redux store. Take some properties off state object and provide them as props to the ListView component
const mapStateToProps = state => {
   
   const candidates = _.map(state.candidates.candidates, (val, uid) => {
      return { ...val, uid }
   });

   return { candidates: candidates, loading: state.candidates.loading };
};

export default connect(mapStateToProps, actions)(ListView);