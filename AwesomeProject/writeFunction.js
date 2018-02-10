var line1 = 'Programa, ' + course.courseType + (','*30) + '\n';
var line2 = 'Fecha Inicial, ' + course.initialDate + (','*30) + '\n';
var line3 = 'Fecha Final, ' + course.finalDate + (','*30) + '\n';
var line4 = 'Barrio/Ciudad, ' + course.area + (','*30) + '\n';
var line5 = 'Coordinador Regional,' + (','*30) + '\n';
var line6 = 'Nombre, Contacto' + (','*30) + '\n';
var line7 = course.regCoord.name + ',' + course.regCoord.cont + (','*30) + '\n';
var line8 = 'Entrenador/a,' + (','*30) + '\n';
var line9 = 'Nombre, Contacto' + (','*30) + '\n';
var line10 =  course.trainer.name + ',' + course.trainer.cont + (','*30) + '\n';
var line11 = 'Organizacion Coordinante,' + course.partnerOrg + (','*30) + '\n';
var line12 = 'Lugar,' + course.placeType + (','*30) + '\n';
var line13 = 'Nombre de el Lugar,' + course.placeName + (','*30) + '\n';
var line14 = 'Estructura,' + course.structure + (','*30) + '\n';
var line15 = ','*31;
var line16 = ',,,' + course.sessions + ','*(28-(course.sessions.length-1));
var line17 = 'Participantes,,Fecha' + course.sessDates +
','*(28-(course.sessions.length-1));
var line18 = 'Nombre,Edad,Sexo'

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
  this.courseType = 'DPV';
  this.courseName = courseName;
  this.initialDate = "";
  this.finalDate = "";
  this.area = "";
  this.regCoord = { name:"", cont:"" };
  this.trainer = { name:"", cont:"" };
  this.partnerOrg = "";
  this.placeType = "";
  this.placeName = "";
  this.structure = "";
  this.students = [];
  this.sessions = DPVSessions;
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
