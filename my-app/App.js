import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var DPVSessions = ["Desiciones", "Campo dos Riscos"];
var LPCSessions = ["s1", "s2"];
var unicaSessions = ["s1", "s2"];

try
{
  storage.load ({
    key: 'startUpState',
    autoSync: false,
    syncInBackground: false,
  }) .then (ret => {
    courseRun = ret.courRun;
  })
}
catch(err) {
  var coursesRun = 0
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: 0
    },
    expires: NULL
  });
}

// Default stuff
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
//end default

function save(course) {
  storage.save({
    key: 'course',
    id: course.id,
    data: course,
    expires: NULL,
  });
}



function writeFile(course) {
  var RNFS = require('react-native-fs');
  var path = RNFS.DocumentDirectoryPath + '/DreamProjectCourse.csv';
  RNSF.writeFile(path, 'This should be the first line')
  .then ((success) => {
    console.log('file written');
  })
  .catch((err) => {
    console.log(err.message);
  });
  RNSF.appendFile(path, 'This should be the first line')
  .then ((success) => {
    console.log('file written');
  })
  .catch((err) => {
    console.log(err.message);
  });
  RNSF.writeFile()
  RNSF.readFile(RNFS.DocumentDirectoryPath+'/DreamProjectCourse.csv')
  .then((result) => {
    render() {
        <View style={styles.container}>
          <Text>{result}</Text>
        </View>
      );
  })
}

function CourseDPV(courseName) {
  this.id = coursesRun;
  coursesRun += 1;
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: coursesRun
    },
    expires: NULL
  });
  this.courseName = courseName;
  this.initialDate = "";
  this.finalDate = "";
  this.regionalCoordinator = { firstName:"", lastName:"", contact:"", };
  this.trainer = { firstName:"", lastName:"", contact:"", };
  this.partnerOrg = "";
  this.placeType = "";
  this.placeName = "";
  this.structure = "";
  this.students = [];
  this.sessions = DPVSessions;
}

function CourseLPC(courseName) {
  this.id = coursesRun;
  coursesRun += 1;
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: courseRun
    },
    expires: NULL
  });
  this.courseName = courseName;
  this.initialDate = "";
  this.finalDate = "";
  this.regionalCoordinator = { firstName:"", lastName:"", contact:"", };
  this.trainer = { firstName:"", lastName:"", contact:"", };
  this.partnerOrg = "";
  this.placeType = "";
  this.placeName = "";
  this.structure = "";
  this.students = [];
  this.sessions = LPCSessions;
}

function CourseUnica(courseName) {
  this.id = coursesRun;
  coursesRun =+ 1;
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: coursesRun
    },
    expires: NULL
  });
  this.courseName = courseName;
  this.initialDate = "";
  this.finalDate = "";
  this.regionalCoordinator = { firstName:"", lastName:"", contact:"", };
  this.trainer = { firstName:"", lastName:"", contact:"", };
  this.partnerOrg = "";
  this.placeType = "";
  this.placeName = "";
  this.structure = "";
  this.students = [];
  this.sessions = unicaSessions;
}

function student(name) {
  this.name = name;
  this.age = "";
  this.gender = "";
  this.graduated = false;
  this.preResults = [""]*15;
  this.postResults = [""]*15;
  this.attendence = [""]*20;
}
