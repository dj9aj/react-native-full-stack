import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Card, CardSection, SaveButton, CancelButton, Spinner } from './common';
import * as helpers from '../helpers/helpers'

class DetailView extends Component {

   static navigationOptions = {
      title: 'Detail View',
      headerStyle: {
         backgroundColor: '#fff'
      },
      headerTitleStyle: {
         color: '#212121'
      }
   };

   componentDidMount() {
      const id = this.props.selectedCandidateID
      this.props.fetchCandidateRecord(id);
   }

   // Helper method as arrow function preserves the 'this' value
   save = () => {
      const { saveRating, toggleEditMode, selectedCandidateID, currentRating, editMode } = this.props; 
      saveRating(selectedCandidateID, currentRating); // Save rating to db
      toggleEditMode(editMode);
   }

   cancelEditMode = () => {
      const { toggleEditMode, editMode, cancelEditMode } = this.props;
      const { rating } = this.props.candidateRecord;
      toggleEditMode(editMode);
      cancelEditMode(rating);
   }

   render() {
      const { name, image, dob, rating } = this.props.candidateRecord;
      const { editMode, currentRating, loading, toggleEditMode, amendRating } = this.props;
      
      if (loading) {
         return <Spinner size="large" />
      }
      
      if (!editMode) {
         return (
            <Card>
               <CardSection style={styles.imageContainerStyle}>
                  <View style={styles.outlineStyle}></View>
                  <Image style={styles.imageStyle} source={{ uri: image }} />
               </CardSection>
               <CardSection>
                  <Text style={styles.headerTextStyle}>{helpers.formatName(name)}</Text>
               </CardSection>
               <CardSection style={styles.dateContainerStyle}>
                  <Text style={styles.ageStyle}>{helpers.getAge(dob)} years old</Text>
                  <Text>{helpers.timeToBday(dob)}</Text>
               </CardSection>
               <CardSection style={styles.ratingContainerStyle}>
                  <Text style={styles.ratingText}>Rating:</Text>
                  <Text style={styles.ratingText}>{currentRating}</Text>
               </CardSection>
               <Button onPress={() => toggleEditMode(editMode)}>
                  Edit
               </Button>
            </Card>
         ) 
      } else {
         return (
            <Card>
               <CardSection style={styles.imageContainerStyle}>
                  <View style={styles.outlineStyle}></View>
                  <Image style={styles.imageStyle} source={{ uri: image }} />
               </CardSection>
               <CardSection>
                  <Text style={styles.headerTextStyle}>{helpers.formatName(name)}</Text>
               </CardSection>
               <CardSection style={styles.dateContainerStyle}>
                  <Text style={styles.ageStyle}>{helpers.getAge(dob)} years old</Text>
                  <Text>{helpers.timeToBday(dob)}</Text>
               </CardSection>
               <CardSection style={styles.ratingContainerStyle}>
                  <Text style={styles.ratingText}>Rating:</Text>
                  <Text onPress={() => amendRating('decrease', currentRating)} style={[styles.ratingText, styles.ratingButtonStyle]}>
                     -
                  </Text>
                  <Text style={styles.ratingText}>{currentRating}</Text>
                  <Text onPress={() => amendRating('increase', currentRating)} style={[styles.ratingText, styles.ratingButtonStyle]}>
                     +
                  </Text>
               </CardSection>
               <CardSection style={styles.editButtonStyle}>
                  <CancelButton onPress={this.cancelEditMode} style={styles.cancelButtonStyle}>
                     Cancel
                  </CancelButton>
                  <SaveButton onPress={this.save}>
                     Save
                  </SaveButton>
               </CardSection>
            </Card>
         )
      }
   }
}


const styles = {

   containerStyle: {
      padding: 10,
      margin: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      flexDirection: 'row',
      borderColor: '#ddd',
      height: 200
   },
   headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
   },
   headerTextStyle: {
      fontSize: 25,
      position: 'relative',
      height: 40,
      marginBottom: 20
   },
   ageStyle: {
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: 10
   },
   imageContainerStyle: {
      margin: 20,
      marginBottom: 40
   },
   imageStyle: {
      height: 185,
      width: 185,
      borderRadius: 90,
      justifyContent: 'center',
      marginTop: 20,
   },
   outlineStyle: {
      position: 'absolute',
      width: 205,
      height: 205,
      top: 10,
      left: -10,
      right: 40,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: '#999',
      opacity: 0.8
   },
   dateContainerStyle: {
      marginBottom: 15
   },
   ratingContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 20
   },
   ratingText: {
      fontSize: 20,
      padding: 8
   },
   ratingButtonStyle: {
      fontWeight: 'bold',
      fontSize: 30
   },
   editButtonStyle: {
      flexDirection: 'row',
   },
   cancelButtonStyle: {
      backgroundColor: '#999'
   }
};   


const mapStateToProps = state => {

   return { 
      candidateRecord: state.candidateRecord.candidate,
      selectedCandidateID: state.selectedCandidate.selectedCandidate,
      loading: state.candidateRecord.loading,
      editMode: state.candidateRecord.editMode,
      currentRating: state.candidateRecord.amendedRating || state.candidateRecord.candidate.rating,
   };
};


export default connect(mapStateToProps, actions)(DetailView);