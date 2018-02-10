import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





function CourseDPV() {

  this.initialDate = "";
  this.finalDate = "";
  this.regionalCoordinator = { firstName:"", lastName:"", contact:"", };
  this.trainer = { firstName:"", lastName:"", contact:"", };
  this.partnerOrg = "";
  this.placeType = "";
  this.placeName = "";
  this.structure = "";
  this.students = [];
  this.sessions = DPVsessions;

}

function student(name) {

  this.name = name;
  this.age = "";
  this.gender = "";
  this.graduated = false;
  this.preResults = [""]*15;
  this.postResults = [""]*15;
  this.attendence = 
}
