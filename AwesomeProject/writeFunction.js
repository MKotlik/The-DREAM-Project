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

function writeFile(course) {

  var line1 = 'Programa, ' + course.courseType + (','*30) + '\n';
  var line2 = 'Fecha Inicial, ' + course.initialDate + (','*30) + '\n';
  var line3 = 'Fecha Final, ' + course.finalDate + (','*30) + '\n';
  var line4 = 'Barrio/Ciudad, ' + course.area + (','*30) + '\n';
  var line5 = 'Coordinador Regional,' + (','*30) + '\n';
  var line6 = 'Nombre, Contacto' + (','*30) + '\n';
  var line7 = course.regCoord.name + ',' + course.regCoord.cont
  + (','*30) + '\n';
  var line8 = 'Entrenador/a,' + (','*30) + '\n';
  var line9 = 'Nombre, Contacto' + (','*30) + '\n';
  var line10 =  course.trainer.name + ',' + course.trainer.cont
  + (','*30) + '\n';
  var line11 = 'Organizacion Coordinante,' + course.partnerOrg
  + (','*30) + '\n';
  var line12 = 'Lugar,' + course.placeType + (','*30) + '\n';
  var line13 = 'Nombre de el Lugar,' + course.placeName + (','*30) + '\n';
  var line14 = 'Estructura,' + course.structure + (','*30) + '\n';
  var line15 = ','*31;
  var line16 = ',,,' + course.sessions + ','*(28-(course.sessions.length-1));
  var line17 = 'Participantes,,Fecha' + course.sessDates +
  ','*(28-(course.sessions.length-1));
  var line18 = 'Nombre,Edad,Sexo'+ ','*29;

  var RNFS = require('react-native-fs');
  var path = RNFS.DocumentDirectoryPath + '/DreamProjectCourse.csv';
  RNSF.writeFile(path, line1+line2+line3+line4+line5+line6+line7+line8+line9)
  .then ((success) => {
    console.log('file written');
  })
  .catch((err) => {
    console.log(err.message);
  });
  RNSF.appendFile(path, line10+line11+line12+line13+line14+line15+line16+line17)
  .then ((success) => {
    console.log('file written');
  })
  .catch((err) => {
    console.log(err.message);
  });
  RNSF.appendFile(path, line18)
  .then ((success) => {
    console.log('file written');
  })
  .catch((err) => {
    console.log(err.message);
  });
  var i;
  for (i in course.students) {
    ray = [course.students[i].name, course.students.age[i]];
    ray += [course.students[i].gender];
    ray += [course.students[i].attendence];
    link = ray.join(',');
    RNSF.appendFile(path, link)
    .then ((success) => {
      console.log('file written');
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
}
