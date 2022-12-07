const studyMonitor = [
  {
    semester: 1,
    quartiles:[
      {
        quartile: 1,
        courses: [
          {
            code: 'CU75001V3',
            name: 'Program- & Career Orientation (PCO)',
            ec: 2.5,
            exams: [
              {
                exam: 'Assessment website',
                grade: 10
              }
            ]
          },
          {
            code: 'CU75002V2',
            name: 'Computer Science Basics (CSB)',
            ec: 5,
            exams: [
              {
                exam: 'Written knowledge test',
                grade: 9.8
              }  
            ]
          },
          {
            code: 'CU75003V1',
            name: 'Programming Basics (PBA)',
            ec: 5,
            exams: [
              {
                exam: 'Case study exam',
                grade: 8
              }
            ] 
          },
          {
            code: 'CU75054V1',
            name: 'IT Personality- projectweek 1',
            ec: 1.25,
            exams: [
              {
                exam: 'Portfolio',
                grade: null
              }
            ]
          }
        ]
      },
      {
        quartile: 2,
        courses: [
          {
            code: 'CU75004V1',
            name: 'Object-Oriented programming (OOP)',
            ec: 10,
            exams: [
              {
                exam: 'Presentation',
                grade: null
              },
              {
                exam: 'Case study exam',
                grade: null
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semester: 2,
    quartiles: [
      {
        quartile: 3,
        courses: [
          {
            code: 'CU75008V1',
            name: 'Framework Development 1 (FDE1)',
            ec: 5,
            exams: [
              {
                exam: 'Case study exam',
                grade: null
              }
            ]
          },
          {
            code: 'CU75009V4',
            name: 'Framework Project 1 (FPR1)',
            ec: 7.5,
            exams: [
              {
                exam: 'Criterium based interview',
                grade: null
              },
              {
                exam: 'Assignment',
                grade: null
              },
              {
                exam: 'Case study exam',
                grade: null
              }
            ]
          }
        ]
      },
      {
        quartile: 4,
        course: [
          {
            code: 'CU75011V3',
            name: 'Framework Project 2 (FPR2)',
            ec: 10,
            exams: [
              {
                exam: 'Final delivery',
                grade: null
              },
              {
                exam: 'Report of acceptance tests and optional assessments',
                grade: null
              },
              {
                exam: 'IT Development portfolio',
                grade: null
              }
            ]
          },
          {    
            code: 'CU75055V1',
            name: 'IT Personality International week',
            ec: 1.25,
            exams: [
              {
                exam: 'Portfolio',
                grade: null
              }
            ] 
          },
          {
            code: 'CU75068V2',
            name: 'Personal Professional Development: Exploration (PPD-E)(INT Class)',
            ec: 12.5,
            exams: [
              {
                exam: 'English Test',
                grade: null
              },
              {
                exam: 'Criterium focused interview',
                grade: null
              }
            ]
          }
        ]
      }
    ]
  } 
];

const table = document.createElement('table');
document.getElementById('main').appendChild(table);

createDashboard(table);

function createDashboard(tableElement) {
  // thead creation
  const theadElement = document.createElement("thead");
  tableElement.appendChild(theadElement);
  tableElement.firstElementChild.innerHTML = `
  <tr>
      <th> Quartile </th>
      <th> Course code </th>
      <th> Course name </th>
      <th> ECTS </th>
      <th> Exam </th>
      <th> Weight </th>
      <th> Exam name </th>
      <th> Grade </th>
  </tr>
  `;
  // tbody creation
  let tbodyElement = document.createElement("tbody");
  tableElement.appendChild(tbodyElement);
  tbodyElement = tableElement.lastElementChild; // swtich the referral to <tbody> element to the created and appended one.
  studyMonitor.forEach(function (quartile) { // loop through each quartile
    quartile.courses.forEach(function (course,courseIndex) { // loop through each course inside one quartile
      course.exams.forEach(function (exam,examIndex) { // loop through each exam inside one exam
        if(courseIndex == 0 && examIndex == 0){ // use this template if it is first looped course in one quartile
          tbodyElement.innerHTML += `<tr><td rowspan="${quartile.number_of_exams}">${quartile.quartile}</td><td rowspan="${course.exams.length}">${course.course_code}</td><td rowspan="${course.exams.length}">${course.course_name}</td><td rowspan="${course.exams.length}">${course.ects}</td><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
        }
        else{
          if(examIndex == 0){ // use this template if it is first looped exam in one course
            tbodyElement.innerHTML += `<tr><td rowspan="${course.exams.length}">${course.course_code}</td><td rowspan="${course.exams.length}">${course.course_name}</td><td rowspan="${course.exams.length}">${course.ects}</td><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
          }
          else{ // use this template if it is next looped exam in one course
            tbodyElement.innerHTML += `<tr><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
          }
        }
      });
    });
  });
}