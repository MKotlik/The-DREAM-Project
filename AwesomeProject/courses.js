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
