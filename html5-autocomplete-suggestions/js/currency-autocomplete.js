var states;
var colleges;
var majors;
var Stateinputs;
var Collegeinputs;
var Majorinputs;
var Major;

$(function(){


  majors = [
  {
    value: "ACCOUNTING",
    data: "65000"
  },
  {
    value: "ACTUARIAL SCIENCE",
    data: "72000"
  },
  {
    value: "ADVERTISING AND PUBLIC RELATIONS",
    data: "50000"
  },
  {
    value: "AEROSPACE ENGINEERING",
    data: "80000"
  },
  {
    value: "AGRICULTURAL ECONOMICS",
    data: "63000"
  },
  {
    value: "AGRICULTURE PRODUCTION AND MANAGEMENT",
    data: "54000"
  },
  {
    value: "ANIMAL SCIENCES",
    data: "46000"
  },
  {
    value: "ANTHROPOLOGY AND ARCHEOLOGY",
    data: "43000"
  },
  {
    value: "APPLIED MATHEMATICS",
    data: "70000"
  },
  {
    value: "ARCHITECTURAL ENGINEERING",
    data: "78000"
  },
  {
    value: "ARCHITECTURE",
    data: "63000"
  },
  {
    value: "AREA ETHNIC AND CIVILIZATION STUDIES",
    data: "46000"
  },
  {
    value: "ART AND MUSIC EDUCATION",
    data: "42600"
  },
  {
    value: "ART HISTORY AND CRITICISM",
    data: "44500"
  },
  {
    value: "ASTRONOMY AND ASTROPHYSICS",
    data: "80000"
  },
  {
    value: "ATMOSPHERIC SCIENCES AND METEOROLOGY",
    data: "60000"
  },
  {
    value: "BIOCHEMICAL SCIENCES",
    data: "53000"
  },
  {
    value: "BIOLOGICAL ENGINEERING",
    data: "62000"
  },
  {
    value: "BIOLOGY",
    data: "51000"
  },
  {
    value: "BIOMEDICAL ENGINEERING",
    data: "65000"
  },
  {
    value: "BOTANY",
    data: "50000"
  },
  {
    value: "BUSINESS ECONOMICS",
    data: "65000"
  },
  {
    value: "BUSINESS MANAGEMENT AND ADMINISTRATION",
    data: "58000"
  },
  {
    value: "CHEMICAL ENGINEERING",
    data: "86000"
  },
  {
    value: "CHEMISTRY",
    data: "59000"
  },
  {
    value: "CIVIL ENGINEERING",
    data: "78000"
  },
  {
    value: "CLINICAL PSYCHOLOGY",
    data: "45000"
  },
  {
    value: "COGNITIVE SCIENCE AND BIOPSYCHOLOGY",
    data: "53000"
  },
  {
    value: "COMMERCIAL ART AND GRAPHIC DESIGN",
    data: "46600"
  },
  {
    value: "COMMUNICATION DISORDERS SCIENCES AND SERVICES",
    data: "42000"
  },
  {
    value: "COMMUNICATION TECHNOLOGIES",
    data: "50000"
  },
  {
    value: "COMMUNICATIONS",
    data: "50000"
  },
  {
    value: "COMMUNITY AND PUBLIC HEALTH",
    data: "47000"
  },
  {
    value: "COMPOSITION AND RHETORIC",
    data: "40000"
  },
  {
    value: "COMPUTER ADMINISTRATION MANAGEMENT AND SECURITY",
    data: "55000"
  },
  {
    value: "COMPUTER AND INFORMATION SYSTEMS",
    data: "65000"
  },
  {
    value: "COMPUTER ENGINEERING",
    data: "80000"
  },
  {
    value: "COMPUTER NETWORKING AND TELECOMMUNICATIONS",
    data: "55000"
  },
  {
    value: "COMPUTER PROGRAMMING AND DATA PROCESSING",
    data: "60000"
  },
  {
    value: "COMPUTER SCIENCE",
    data: "78000"
  },
  {
    value: "CONSTRUCTION SERVICES",
    data: "65000"
  },
  {
    value: "COSMETOLOGY SERVICES AND CULINARY ARTS",
    data: "40000"
  },
  {
    value: "COUNSELING PSYCHOLOGY",
    data: "39000"
  },
  {
    value: "COURT REPORTING",
    data: "50000"
  },
  {
    value: "CRIMINAL JUSTICE AND FIRE PROTECTION",
    data: "50000"
  },
  {
    value: "CRIMINOLOGY",
    data: "49000"
  },
  {
    value: "DRAMA AND THEATER ARTS",
    data: "42000"
  },
  {
    value: "EARLY CHILDHOOD EDUCATION",
    data: "35300"
  },
  {
    value: "ECOLOGY",
    data: "47500"
  },
  {
    value: "ECONOMICS",
    data: "69000"
  },
  {
    value: "EDUCATIONAL ADMINISTRATION AND SUPERVISION",
    data: "58000"
  },
  {
    value: "EDUCATIONAL PSYCHOLOGY",
    data: "40000"
  },
  {
    value: "ELECTRICAL ENGINEERING",
    data: "88000"
  },
  {
    value: "ELECTRICAL ENGINEERING TECHNOLOGY",
    data: "67000"
  },
  {
    value: "ELECTRICAL, MECHANICAL, AND PRECISION TECHNOLOGIES AND PRODUCTION",
    data: "48000"
  },
  {
    value: "ELEMENTARY EDUCATION",
    data: "40000"
  },
  {
    value: "ENGINEERING AND INDUSTRIAL MANAGEMENT",
    data: "74000"
  },
  {
    value: "ENGINEERING MECHANICS PHYSICS AND SCIENCE",
    data: "65000"
  },
  {
    value: "ENGINEERING TECHNOLOGIES",
    data: "63000"
  },
  {
    value: "ENGLISH LANGUAGE AND LITERATURE",
    data: "50000"
  },
  {
    value: "ENVIRONMENTAL ENGINEERING",
    data: "70000"
  },
  {
    value: "ENVIRONMENTAL SCIENCE",
    data: "52000"
  },
  {
    value: "FAMILY AND CONSUMER SCIENCES",
    data: "40500"
  },
  {
    value: "FILM VIDEO AND PHOTOGRAPHIC ARTS",
    data: "47000"
  },
  {
    value: "FINANCE",
    data: "65000"
  },
  {
    value: "FINE ARTS",
    data: "45000"
  },
  {
    value: "FOOD SCIENCE",
    data: "62000"
  },
  {
    value: "FORESTRY",
    data: "58000"
  },
  {
    value: "FRENCH GERMAN LATIN AND OTHER COMMON FOREIGN LANGUAGE STUDIES",
    data: "48000"
  },
  {
    value: "GENERAL AGRICULTURE",
    data: "50000"
  },
  {
    value: "GENERAL BUSINESS",
    data: "60000"
  },
  {
    value: "GENERAL EDUCATION",
    data: "43000"
  },
  {
    value: "GENERAL ENGINEERING",
    data: "75000"
  },
  {
    value: "GENERAL MEDICAL AND HEALTH SERVICES",
    data: "50000"
  },
  {
    value: "GENERAL SOCIAL SCIENCES",
    data: "50000"
  },
  {
    value: "GENETICS",
    data: "48000"
  },
  {
    value: "GEOGRAPHY",
    data: "54000"
  },
  {
    value: "GEOLOGICAL AND GEOPHYSICAL ENGINEERING",
    data: "85000"
  },
  {
    value: "GEOLOGY AND EARTH SCIENCE",
    data: "65000"
  },
  {
    value: "GEOSCIENCES",
    data: "57000"
  },
  {
    value: "HEALTH AND MEDICAL ADMINISTRATIVE SERVICES",
    data: "50000"
  },
  {
    value: "HEALTH AND MEDICAL PREPARATORY PROGRAMS",
    data: "50000"
  },
  {
    value: "HISTORY",
    data: "50000"
  },
  {
    value: "HOSPITALITY MANAGEMENT",
    data: "49000"
  },
  {
    value: "HUMAN RESOURCES AND PERSONNEL MANAGEMENT",
    data: "54000"
  },
  {
    value: "HUMAN SERVICES AND COMMUNITY ORGANIZATION",
    data: "38000"
  },
  {
    value: "HUMANITIES",
    data: "46700"
  },
  {
    value: "INDUSTRIAL AND MANUFACTURING ENGINEERING",
    data: "75000"
  },
  {
    value: "INDUSTRIAL AND ORGANIZATIONAL PSYCHOLOGY",
    data: "62000"
  },
  {
    value: "INDUSTRIAL PRODUCTION TECHNOLOGIES",
    data: "70000"
  },
  {
    value: "INFORMATION SCIENCES",
    data: "68000"
  },
  {
    value: "INTERCULTURAL AND INTERNATIONAL STUDIES",
    data: "45000"
  },
  {
    value: "INTERDISCIPLINARY SOCIAL SCIENCES",
    data: "45000"
  },
  {
    value: "INTERNATIONAL BUSINESS",
    data: "54000"
  },
  {
    value: "INTERNATIONAL RELATIONS",
    data: "55000"
  },
  {
    value: "JOURNALISM",
    data: "50000"
  },
  {
    value: "LANGUAGE AND DRAMA EDUCATION",
    data: "42000"
  },
  {
    value: "LIBERAL ARTS",
    data: "50000"
  },
  {
    value: "LIBRARY SCIENCE",
    data: "40000"
  },
  {
    value: "LINGUISTICS AND COMPARATIVE LANGUAGE AND LITERATURE",
    data: "48000"
  },
  {
    value: "MANAGEMENT INFORMATION SYSTEMS AND STATISTICS",
    data: "72000"
  },
  {
    value: "MARKETING AND MARKETING RESEARCH",
    data: "56000"
  },
  {
    value: "MASS MEDIA",
    data: "48000"
  },
  {
    value: "MATERIALS ENGINEERING AND MATERIALS SCIENCE",
    data: "78000"
  },
  {
    value: "MATERIALS SCIENCE",
    data: "75000"
  },
  {
    value: "MATHEMATICS",
    data: "66000"
  },
  {
    value: "MATHEMATICS AND COMPUTER SCIENCE",
    data: "92000"
  },
  {
    value: "MATHEMATICS TEACHER EDUCATION",
    data: "43000"
  },
  {
    value: "MECHANICAL ENGINEERING",
    data: "80000"
  },
  {
    value: "MECHANICAL ENGINEERING RELATED TECHNOLOGIES",
    data: "60000"
  },
  {
    value: "MEDICAL ASSISTING SERVICES",
    data: "55000"
  },
  {
    value: "MEDICAL TECHNOLOGIES TECHNICIANS",
    data: "60000"
  },
  {
    value: "METALLURGICAL ENGINEERING",
    data: "96000"
  },
  {
    value: "MICROBIOLOGY",
    data: "60000"
  },
  {
    value: "MILITARY TECHNOLOGIES",
    data: "64000"
  },
  {
    value: "MINING AND MINERAL ENGINEERING",
    data: "92000"
  },
  {
    value: "MISCELLANEOUS AGRICULTURE",
    data: "52000"
  },
  {
    value: "MISCELLANEOUS BIOLOGY",
    data: "52000"
  },
  {
    value: "MISCELLANEOUS BUSINESS & MEDICAL ADMINISTRATION",
    data: "53000"
  },
  {
    value: "MISCELLANEOUS EDUCATION",
    data: "50000"
  },
  {
    value: "MISCELLANEOUS ENGINEERING",
    data: "70000"
  },
  {
    value: "MISCELLANEOUS ENGINEERING TECHNOLOGIES",
    data: "63000"
  },
  {
    value: "MISCELLANEOUS FINE ARTS",
    data: "45000"
  },
  {
    value: "MISCELLANEOUS HEALTH MEDICAL PROFESSIONS",
    data: "45000"
  },
  {
    value: "MISCELLANEOUS PSYCHOLOGY",
    data: "45000"
  },
  {
    value: "MISCELLANEOUS SOCIAL SCIENCES",
    data: "52000"
  },
  {
    value: "MOLECULAR BIOLOGY",
    data: "45000"
  },
  {
    value: "MULTI-DISCIPLINARY OR GENERAL SCIENCE",
    data: "56000"
  },
  {
    value: "MULTI/INTERDISCIPLINARY STUDIES",
    data: "43000"
  },
  {
    value: "MUSIC",
    data: "45000"
  },
  {
    value: "NATURAL RESOURCES MANAGEMENT",
    data: "52000"
  },
  {
    value: "NAVAL ARCHITECTURE AND MARINE ENGINEERING",
    data: "97000"
  },
  {
    value: "NEUROSCIENCE",
    data: "35000"
  },
  {
    value: "NUCLEAR ENGINEERING",
    data: "95000"
  },
  {
    value: "NUCLEAR, INDUSTRIAL RADIOLOGY, AND BIOLOGICAL TECHNOLOGIES",
    data: "62000"
  },
  {
    value: "NURSING",
    data: "62000"
  },
  {
    value: "NUTRITION SCIENCES",
    data: "49500"
  },
  {
    value: "OCEANOGRAPHY",
    data: "55000"
  },
  {
    value: "OPERATIONS LOGISTICS AND E-COMMERCE",
    data: "65000"
  },
  {
    value: "OTHER FOREIGN LANGUAGES",
    data: "45000"
  },
  {
    value: "PETROLEUM ENGINEERING",
    data: "125000"
  },
  {
    value: "PHARMACOLOGY",
    data: "60000"
  },
  {
    value: "PHARMACY PHARMACEUTICAL SCIENCES AND ADMINISTRATION",
    data: "106000"
  },
  {
    value: "PHILOSOPHY AND RELIGIOUS STUDIES",
    data: "45000"
  },
  {
    value: "PHYSICAL AND HEALTH EDUCATION TEACHING",
    data: "48400"
  },
  {
    value: "PHYSICAL FITNESS PARKS RECREATION AND LEISURE",
    data: "44000"
  },
  {
    value: "PHYSICAL SCIENCES",
    data: "60000"
  },
  {
    value: "PHYSICS",
    data: "70000"
  },
  {
    value: "PHYSIOLOGY",
    data: "50000"
  },
  {
    value: "PLANT SCIENCE AND AGRONOMY",
    data: "50000"
  },
  {
    value: "POLITICAL SCIENCE AND GOVERNMENT",
    data: "58000"
  },
  {
    value: "PRE-LAW AND LEGAL STUDIES",
    data: "48000"
  },
  {
    value: "PSYCHOLOGY",
    data: "45000"
  },
  {
    value: "PUBLIC ADMINISTRATION",
    data: "56000"
  },
  {
    value: "PUBLIC POLICY",
    data: "60000"
  },
  {
    value: "SCHOOL STUDENT COUNSELING",
    data: "41000"
  },
  {
    value: "SCIENCE AND COMPUTER TEACHER EDUCATION",
    data: "46000"
  },
  {
    value: "SECONDARY TEACHER EDUCATION",
    data: "45000"
  },
  {
    value: "SOCIAL PSYCHOLOGY",
    data: "47000"
  },
  {
    value: "SOCIAL SCIENCE OR HISTORY TEACHER EDUCATION",
    data: "45000"
  },
  {
    value: "SOCIAL WORK",
    data: "40000"
  },
  {
    value: "SOCIOLOGY",
    data: "47000"
  },
  {
    value: "SOIL SCIENCE",
    data: "63000"
  },
  {
    value: "SPECIAL NEEDS EDUCATION",
    data: "42000"
  },
  {
    value: "STATISTICS AND DECISION SCIENCE",
    data: "70000"
  },
  {
    value: "STUDIO ARTS",
    data: "37600"
  },
  {
    value: "TEACHER EDUCATION: MULTIPLE LEVELS",
    data: "40000"
  },
  {
    value: "THEOLOGY AND RELIGIOUS VOCATIONS",
    data: "40000"
  },
  {
    value: "TRANSPORTATION SCIENCES AND TECHNOLOGIES",
    data: "67000"
  },
  {
    value: "TREATMENT THERAPY PROFESSIONS",
    data: "61000"
  },
  {
    value: "UNITED STATES HISTORY",
    data: "50000"
  },
  {
    value: "VISUAL AND PERFORMING ARTS",
    data: "40000"
  },
  {
    value: "ZOOLOGY",
    data: "55000"
  }
];
colleges = [
   {
    value: 'Rutgers University-Camden',
    data: '186371'
  },
  {
    value: 'Rutgers University-New Brunswick',
    data: '186380'
  },
  {
    value: 'Rutgers University-Newark',
    data: '186399'
  },
  ];
states = [
  {
    value: "Alabama",
    data: "AL"
  },
  {
    value: "Alaska",
    data: "AK"
  },
  {
    value: "Arizona",
    data: "AZ"
  },
  {
    value: "Arkansas",
    data: "AR"
  },
  {
    value: "California",
    data: "CA"
  },
  {
    value: "Colorado",
    data: "CO"
  },
  {
    value: "Connecticut",
    data: "CT"
  },
  {
    value: "Delaware",
    data: "DE"
  },
  {
    value: "Florida",
    data: "FL"
  },
  {
    value: "Georgia",
    data: "GA"
  },
  {
    value: "Hawaii",
    data: "HI"
  },
  {
    value: "Idaho",
    data: "ID"
  },
  {
    value: "Illinois",
    data: "IL"
  },
  {
    value: "Indiana",
    data: "IN"
  },
  {
    value: "Iowa",
    data: "IA"
  },
  {
    value: "Kansas",
    data: "KS"
  },
  {
    value: "Kentucky",
    data: "KY"
  },
  {
    value: "Louisiana",
    data: "LA"
  },
  {
    value: "Maine",
    data: "ME"
  },
  {
    value: "Maryland",
    data: "MD"
  },
  {
    value: "Massachusetts",
    data: "MA"
  },
  {
    value: "Michigan",
    data: "MI"
  },
  {
    value: "Minnesota",
    data: "MN"
  },
  {
    value: "Mississippi",
    data: "MS"
  },
  {
    value: "Missouri",
    data: "MO"
  },
  {
    value: "Montana",
    data: "MT"
  },
  {
    value: "Nebraska",
    data: "NE"
  },
  {
    value: "Nevada",
    data: "NV"
  },
  {
    value: "New Hampshire",
    data: "NH"
  },
  {
    value: "New Jersey",
    data: "NJ"
  },
  {
    value: "New Mexico",
    data: "NM"
  },
  {
    value: "New York",
    data: "NY"
  },
  {
    value: "North Carolina",
    data: "NC"
  },
  {
    value: "North Dakota",
    data: "ND"
  },
  {
    value: "Ohio",
    data: "OH"
  },
  {
    value: "Oklahoma",
    data: "OK"
  },
  {
    value: "Oregon",
    data: "OR"
  },
  {
    value: "Pennsylvania",
    data: "PA"
  },
  {
    value: "Rhode Island",
    data: "RI"
  },
  {
    value: "South Carolina",
    data: "SC"
  },
  {
    value: "South Dakota",
    data: "SD"
  },
  {
    value: "Tennessee",
    data: "TN"
  },
  {
    value: "Texas",
    data: "TX"
  },
  {
    value: "Utah",
    data: "UT"
  },
  {
    value: "Vermont",
    data: "VT"
  },
  {
    value: "Virginia",
    data: "VA"
  },
  {
    value: "Washington",
    data: "WA"
  },
  {
    value: "West Virginia",
    data: "WV"
  },
  {
    value: "Wisconsin",
    data: "WI"
  },
  {
    value: "Wyoming",
    data: "WY"
  }
];
  
  // setup autocomplete function pulling from colleges[] array
  $('#autocomplete').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {
      console.log("suggestion.value");
    }
  });

  $('#autocomplete2').autocomplete({
    lookup: majors,
    onSelect: function (suggestion2) {
      var thehtml = '<strong>Major:</strong> ' + suggestion2.value + ' <br> <strong>Salary:</strong> ' + suggestion2.data;
      $('#outputcontent2').html(thehtml);
    }
  });
  
});





const stateInit = _ => {
  $('.state-auto:not([init])').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {

      Stateinputs.push(suggestion.data);
      console.log(suggestion.data);
    }
  }).attr("init",true);
}
const majorInit = _ => {
  $('.major-auto:not([init])').autocomplete({
    lookup: majors,
    onSelect: function (suggestion) {

      Majorinputs.push(suggestion.data);
      console.log(suggestion.data);
    }
  }).attr("init",true);
}

const collegeInit = _ => {
  $('.college-auto:not([init])').autocomplete({
    lookup: colleges,
    onSelect: function (suggestion) {

      Collegeinputs.push(suggestion.data);
      console.log(suggestion.data);
    }
  }).attr("init",true);
}






$(document).ready(_ => stateInit())
$(document).ready(_ => Stateinputs = new Array(0))
$(document).ready(_ => collegeInit())
$(document).ready(_ => Collegeinputs = new Array(0))
$(document).ready(_ => majorInit())
$(document).ready(_ => Majorinputs = new Array(0))