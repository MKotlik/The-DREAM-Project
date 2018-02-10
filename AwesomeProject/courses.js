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

var DPVSessions = ["Desiciones", "Campo dos Riscos"];
var LPCSessions = ["s1", "s2"];
var unicaSessions = ["s1", "s2"];


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
  this.sessDates = []*DPVSession.length;
}

function CourseLPC(courseName) {
  this.id = coursesRun;
  coursesRun += 1;
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: coursesRun
    },
    expires: NULL
  });
  this.courseType = 'LPC';
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
  this.sessions = LPCSessions;
  this.sessDates = []*LPCSession.length;
}

function CourseUnica(courseName) {
  this.id = coursesRun;
  coursesRun += 1;
  storage.save ({
    key: 'startUpState',
    data: {
      courRun: coursesRun
    },
    expires: NULL
  });
  this.courseType = 'Única';
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
  this.sessions = unicaSessions;
  this.sessDates = []*unicaSession.length;
}
