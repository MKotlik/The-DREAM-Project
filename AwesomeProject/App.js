/*
DREAM Project - Headcount
Copyright © 2018 Eugene Henninger-Voss, Michael Kotlik, Martina Tan
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

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

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Attendance"
          onPress={() => this.props.navigation.navigate('Attendance')}
        />
      </View>
    );
  }
}

class AttendanceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Attendance Screen</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text}
            </Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Attendance: {
      screen: AttendanceScreen,
    },
  },
  {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

function save(course) {
  storage.save({
    key: 'course',
    id: course.id,
    data: course,
    expires: NULL,
  });
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
