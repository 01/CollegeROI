var states;
var inputs;
$(function(){
  var colleges = [
  {
    value: 'Alabama A & M University',
    data: '100654'
  },
  {
    value: 'University of Alabama at Birmingham',
    data: '100663'
  },
  {
    value: 'Amridge University',
    data: '100690'
  },
  {
    value: 'University of Alabama in Huntsville',
    data: '100706'
  },
  {
    value: 'Alabama State University',
    data: '100724'
  },
  {
    value: 'The University of Alabama',
    data: '100751'
  },
  {
    value: 'Central Alabama Community College',
    data: '100760'
  },
  {
    value: 'Auburn University at Montgomery',
    data: '100830'
  },
  {
    value: 'Auburn University',
    data: '100858'
  },
  {
    value: 'Birmingham Southern College',
    data: '100937'
  },
  {
    value: 'Chattahoochee Valley Community College',
    data: '101028'
  },
  {
    value: 'Concordia College Alabama',
    data: '101073'
  },
  {
    value: 'South University-Montgomery',
    data: '101116'
  },
  {
    value: 'Enterprise State Community College',
    data: '101143'
  },
  {
    value: 'James H Faulkner State Community College',
    data: '101161'
  },
  {
    value: 'Faulkner University',
    data: '101189'
  },
  {
    value: 'Gadsden State Community College',
    data: '101240'
  },
  {
    value: 'George C Wallace State Community College-Dothan',
    data: '101286'
  },
  {
    value: 'George C Wallace State Community College-Hanceville',
    data: '101295'
  },
  {
    value: 'George C Wallace State Community College-Selma',
    data: '101301'
  },
  {
    value: 'Herzing University-Birmingham',
    data: '101365'
  },
  {
    value: 'Huntingdon College',
    data: '101435'
  },
  {
    value: 'Heritage Christian University',
    data: '101453'
  },
  {
    value: 'J F Drake State Community and Technical College',
    data: '101462'
  },
  {
    value: 'Jacksonville State University',
    data: '101480'
  },
  {
    value: 'Jefferson Davis Community College',
    data: '101499'
  },
  {
    value: 'Jefferson State Community College',
    data: '101505'
  },
  {
    value: 'John C Calhoun State Community College',
    data: '101514'
  },
  {
    value: 'Judson College',
    data: '101541'
  },
  {
    value: 'Lawson State Community College-Birmingham Campus',
    data: '101569'
  },
  {
    value: 'University of West Alabama',
    data: '101587'
  },
  {
    value: 'Lurleen B Wallace Community College',
    data: '101602'
  },
  {
    value: 'Marion Military Institute',
    data: '101648'
  },
  {
    value: 'Miles College',
    data: '101675'
  },
  {
    value: 'University of Mobile',
    data: '101693'
  },
  {
    value: 'University of Montevallo',
    data: '101709'
  },
  {
    value: 'Northwest-Shoals Community College',
    data: '101736'
  },
  {
    value: 'University of North Alabama',
    data: '101879'
  },
  {
    value: 'Northeast Alabama Community College',
    data: '101897'
  },
  {
    value: 'Oakwood University',
    data: '101912'
  },
  {
    value: 'Alabama Southern Community College',
    data: '101949'
  },
  {
    value: 'Prince Institute-Southeast',
    data: '101958'
  },{
    value: 'Charles R Drew University of Medicine and Science',
    data: '111966'
  },
  {
    value: 'Concordia University-Irvine',
    data: '112075'
  },
  {
    value: 'San Diego Christian College',
    data: '112084'
  },
  {
    value: 'Citrus College',
    data: '112172'
  },
  {
    value: 'City College of San Francisco',
    data: '112190'
  },
  {
    value: 'Claremont McKenna College',
    data: '112260'
  },
  {
    value: 'Coastline Community College',
    data: '112385'
  },
  {
    value: 'Cogswell College',
    data: '112394'
  },
  {
    value: 'Coleman University',
    data: '112446'
  },
  {
    value: 'Columbia College',
    data: '112561'
  },
  {
    value: 'Columbia College-Hollywood',
    data: '112570'
  },
  {
    value: 'El Camino College-Compton Center',
    data: '112686'
  },
  {
    value: 'Contra Costa College',
    data: '112826'
  },
  {
    value: 'Cosumnes River College',
    data: '113096'
  },
  {
    value: 'Crafton Hills College',
    data: '113111'
  },
  {
    value: 'Cuesta College',
    data: '113193'
  },
  {
    value: 'Cuyamaca College',
    data: '113218'
  },
  {
    value: 'Cypress College',
    data: '113236'
  },
  {
    value: 'De Anza College',
    data: '113333'
  },
  {
    value: 'Dell\'Arte International School of Physical Theatre',
    data: '113537'
  },
  {
    value: 'College of the Desert',
    data: '113573'
  },
  {
    value: 'Design Institute of San Diego',
    data: '113582'
  },
  {
    value: 'Diablo Valley College',
    data: '113634'
  },
  {
    value: 'Dominican University of California',
    data: '113698'
  },
  {
    value: 'East Los Angeles College',
    data: '113856'
  },
  {
    value: 'El Camino Community College District',
    data: '113980'
  },
  {
    value: 'Evergreen Valley College',
    data: '114266'
  },
  {
    value: 'Fashion Institute of Design & Merchandising-Los Angeles',
    data: '114354'
  },
  {
    value: 'Fashion Institute of Design & Merchandising-San Francisco',
    data: '114390'
  },
  {
    value: 'Fashion Institute of Design & Merchandising-Orange County',
    data: '114415'
  },
  {
    value: 'Feather River Community College District',
    data: '114433'
  },
  {
    value: 'Foothill College',
    data: '114716'
  },
  {
    value: 'Fresno City College',
    data: '114789'
  },
  {
    value: 'Fresno Pacific University',
    data: '114813'
  },
  {
    value: 'Fullerton College',
    data: '114859'
  },
  {
    value: 'Gavilan College',
    data: '114938'
  },
  {
    value: 'Glendale Community College',
    data: '115001'
  },
  {
    value: 'Golden Gate University-San Francisco',
    data: '115083'
  },
  {
    value: 'Golden West College',
    data: '115126'
  },
  {
    value: 'Grossmont College',
    data: '115296'
  },
  {
    value: 'Hartnell College',
    data: '115393'
  },
  {
    value: 'Harvey Mudd College',
    data: '115409'
  },
  {
    value: 'Heald College-Rancho Cordova',
    data: '115454'
  },
  {
    value: 'Heald College-Fresno',
    data: '115472'
  },
  {
    value: 'Heald College-San Jose',
    data: '115490'
  },
  {
    value: 'Heald College-San Francisco',
    data: '115515'
  },
  {
    value: 'Heald College-Concord',
    data: '115533'
  },
  {
    value: 'Holy Names University',
    data: '115728'
  },
  {
    value: 'Humboldt State University',
    data: '115755'
  },
  {
    value: 'Humphreys College-Stockton and Modesto Campuses',
    data: '115773'
  },
  {
    value: 'Imperial Valley College',
    data: '115861'
  },
  {
    value: 'Interior Designers Institute',
    data: '116226'
  },
  {
    value: 'Irvine Valley College',
    data: '116439'
  },
  {
    value: 'ITT Technical Institute-National City',
    data: '116466'
  },
  {
    value: 'ITT Technical Institute-San Dimas',
    data: '116475'
  },
  {
    value: 'ITT Technical Institute-Orange',
    data: '116484'
  },
  {
    value: 'American Jewish University',
    data: '116846'
  },
  {
    value: 'Reedley College',
    data: '117052'
  },
  {
    value: 'Life Pacific College',
    data: '117104'
  },
  {
    value: 'The Art Institute of California-Argosy University San Diego',
    data: '117113'
  },
  {
    value: 'University of La Verne',
    data: '117140'
  },
  {
    value: 'Laguna College of Art and Design',
    data: '117168'
  },
  {
    value: 'Lake Tahoe Community College',
    data: '117195'
  },
  {
    value: 'Laney College',
    data: '117247'
  },
  {
    value: 'Lassen Community College',
    data: '117274'
  },
  {
    value: 'Lincoln University',
    data: '117557'
  },
  {
    value: 'Southern California Seminary',
    data: '117575'
  },
  {
    value: 'La Sierra University',
    data: '117627'
  },
  {
    value: 'Long Beach City College',
    data: '117645'
  },
  {
    value: 'Los Angeles Harbor College',
    data: '117690'
  },{
    value: 'Los Angeles Pierce College',
    data: '117706'
  },
  {
    value: 'Los Angeles Southwest College',
    data: '117715'
  },
  {
    value: 'Los Angeles Trade Technical College',
    data: '117724'
  },
  {
    value: 'Los Angeles Valley College',
    data: '117733'
  },
  {
    value: 'The Master\'s College and Seminary',
    data: '117751'
  },
  {
    value: 'Los Angeles City College',
    data: '117788'
  },
  {
    value: 'Los Angeles Mission College',
    data: '117867'
  },
  {
    value: 'Los Medanos College',
    data: '117894'
  },
  {
    value: 'The Art Institute of California-Argosy University San Francisco',
    data: '117928'
  },
  {
    value: 'Loyola Marymount University',
    data: '117946'
  },
  {
    value: 'College of Marin',
    data: '118347'
  },
  {
    value: 'Marymount California University',
    data: '118541'
  },
  {
    value: 'Mendocino College',
    data: '118684'
  },
  {
    value: 'Menlo College',
    data: '118693'
  },
  {
    value: 'Merced College',
    data: '118718'
  },
  {
    value: 'Merritt College',
    data: '118772'
  },
  {
    value: 'Mills College',
    data: '118888'
  },
  {
    value: 'MiraCosta College',
    data: '118912'
  },
  {
    value: 'Mission College',
    data: '118930'
  },
  {
    value: 'Modesto Junior College',
    data: '118976'
  },
  {
    value: 'Monterey Peninsula College',
    data: '119067'
  },
  {
    value: 'Moorpark College',
    data: '119137'
  },
  {
    value: 'Mt San Antonio College',
    data: '119164'
  },
  {
    value: 'Mount Saint Mary\'s University',
    data: '119173'
  },
  {
    value: 'Mt San Jacinto Community College District',
    data: '119216'
  },
  {
    value: 'Mueller College',
    data: '119234'
  },
  {
    value: 'Musicians Institute',
    data: '119270'
  },
  {
    value: 'Napa Valley College',
    data: '119331'
  },
  {
    value: 'Everest College-Reseda',
    data: '119359'
  },
  {
    value: 'Everest College-San Bernardino',
    data: '119508'
  },
  {
    value: 'The National Hispanic University',
    data: '119544'
  },
  {
    value: 'National University',
    data: '119605'
  },
  {
    value: 'Newschool of Architecture and Design',
    data: '119775'
  },
  {
    value: 'Notre Dame de Namur University',
    data: '120184'
  },
  {
    value: 'Occidental College',
    data: '120254'
  },
  {
    value: 'Ohlone College',
    data: '120290'
  },
  {
    value: 'Orange Coast College',
    data: '120342'
  },
  {
    value: 'Otis College of Art and Design',
    data: '120403'
  },
  {
    value: 'Oxnard College',
    data: '120421'
  },
  {
    value: 'Hope International University',
    data: '120537'
  },
  {
    value: 'Pacific States University',
    data: '120838'
  },
  {
    value: 'Pacific Union College',
    data: '120865'
  },
  {
    value: 'University of the Pacific',
    data: '120883'
  },
  {
    value: 'Palo Verde College',
    data: '120953'
  },
  {
    value: 'Palomar College',
    data: '120971'
  },
  {
    value: 'Pasadena City College',
    data: '121044'
  },
  {
    value: 'Pepperdine University',
    data: '121150'
  },
  {
    value: 'Pitzer College',
    data: '121257'
  },
  {
    value: 'Platt College-San Diego',
    data: '121275'
  },
  {
    value: 'Point Loma Nazarene University',
    data: '121309'
  },
  {
    value: 'Pomona College',
    data: '121345'
  },
  {
    value: 'Porterville College',
    data: '121363'
  },
  {
    value: 'Westwood College-South Bay',
    data: '121381'
  },
  {
    value: 'Santa Ana College',
    data: '121619'
  },
  {
    value: 'University of Redlands',
    data: '121691'
  },
  {
    value: 'College of the Redwoods',
    data: '121707'
  },
  {
    value: 'Rio Hondo College',
    data: '121886'
  },
  {
    value: 'Riverside City College',
    data: '121901'
  },
  {
    value: 'Argosy University-San Francisco Bay Area',
    data: '121983'
  },
  {
    value: 'Sacramento City College',
    data: '122180'
  },
  {
    value: 'Saddleback College',
    data: '122205'
  },
  {
    value: 'San Diego City College',
    data: '122339'
  },
  {
    value: 'Golf Academy of America-Carlsbad',
    data: '122366'
  },
  {
    value: 'San Diego Mesa College',
    data: '122375'
  },
  {
    value: 'San Diego Miramar College',
    data: '122384'
  },
  {
    value: 'San Diego State University',
    data: '122409'
  },
  {
    value: 'University of San Diego',
    data: '122436'
  },
  {
    value: 'San Francisco Art Institute',
    data: '122454'
  },
  {
    value: 'San Francisco Conservatory of Music',
    data: '122506'
  },
  {
    value: 'San Francisco State University',
    data: '122597'
  },
  {
    value: 'University of San Francisco',
    data: '122612'
  },
  {
    value: 'San Joaquin Delta College',
    data: '122658'
  },
  {
    value: 'William Jessup University',
    data: '122728'
  },
  {
    value: 'San Jose City College',
    data: '122746'
  },
  {
    value: 'San Jose State University',
    data: '122755'
  },
  {
    value: 'College of San Mateo',
    data: '122791'
  },
  {
    value: 'Santa Barbara Business College-Bakersfield',
    data: '122834'
  },
  {
    value: 'Westwood College-Los Angeles',
    data: '122843'
  },
  {
    value: 'Santa Barbara Business College-Santa Maria',
    data: '122852'
  },
  {
    value: 'Santa Barbara City College',
    data: '122889'
  },
  {
    value: 'Santa Clara University',
    data: '122931'
  },
  {
    value: 'Santa Monica College',
    data: '122977'
  },
  {
    value: 'Santa Rosa Junior College',
    data: '123013'
  },
  {
    value: 'Scripps College',
    data: '123165'
  },
  {
    value: 'College of the Sequoias',
    data: '123217'
  },
  {
    value: 'Shasta Bible College and Graduate School',
    data: '123280'
  },
  {
    value: 'Shasta College',
    data: '123299'
  },
  {
    value: 'Sierra College',
    data: '123341'
  },
  {
    value: 'Sierra Valley College of Court Reporting',
    data: '123396'
  },
  {
    value: 'Simpson University',
    data: '123457'
  },
  {
    value: 'College of the Siskiyous',
    data: '123484'
  },
  {
    value: 'Skyline College',
    data: '123509'
  },
  {
    value: 'San Bernardino Valley College',
    data: '123527'
  },
  {
    value: 'Saint Mary\'s College of California',
    data: '123554'
  },
  {
    value: 'Solano Community College',
    data: '123563'
  },
  {
    value: 'Sonoma State University',
    data: '123572'
  },
  {
    value: 'Vanguard University of Southern California',
    data: '123651'
  },
  {
    value: 'Southwestern College',
    data: '123800'
  },
  {
    value: 'Southern California Institute of Architecture',
    data: '123952'
  },
  {
    value: 'University of Southern California',
    data: '123961'
  },
  {
    value: 'Taft College',
    data: '124113'
  },
  {
    value: 'Thomas Aquinas College',
    data: '124292'
  },
  {
    value: 'Epic Bible College',
    data: '124487'
  },
  {
    value: 'Ventura College',
    data: '125028'
  },
  {
    value: 'Victor Valley College',
    data: '125091'
  },
  {
    value: 'Berkeley City College',
    data: '125170'
  },
  {
    value: 'Walden University',
    data: '125231'
  },
  {
    value: 'West Hills College-Coalinga',
    data: '125462'
  },
  {
    value: 'West Los Angeles College',
    data: '125471'
  },
  {
    value: 'West Valley College',
    data: '125499'
  },
  {
    value: 'Westmont College',
    data: '125727'
  },
  {
    value: 'Whittier College',
    data: '125763'
  },
  {
    value: 'Woodbury University',
    data: '125897'
  },
  {
    value: 'Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary',
    data: '126076'
  },
  {
    value: 'Yuba College',
    data: '126119'
  },
  {
    value: 'Adams State University',
    data: '126182'
  },
  {
    value: 'Aims Community College',
    data: '126207'
  },
  {
    value: 'Arapahoe Community College',
    data: '126289'
  },
  {
    value: 'Bel-Rea Institute of Animal Technology',
    data: '126359'
  },
  {
    value: 'Everest College-Colorado Springs',
    data: '126401'
  },
  {
    value: 'University of Colorado Denver',
    data: '126562'
  },
  {
    value: 'University of Colorado Colorado Springs',
    data: '126580'
  },
  {
    value: 'Redstone College',
    data: '126605'
  },
  {
    value: 'University of Colorado Boulder',
    data: '126614'
  },
  {
    value: 'Colorado Christian University',
    data: '126669'
  },
  {
    value: 'Colorado College',
    data: '126678'
  },
  {
    value: 'The Art Institute of Colorado',
    data: '126702'
  },
  {
    value: 'Colorado Mountain College',
    data: '126711'
  },
  {
    value: 'Colorado Northwestern Community College',
    data: '126748'
  },
  {
    value: 'Colorado School of Mines',
    data: '126775'
  },
  {
    value: 'Colorado State University-Fort Collins',
    data: '126818'
  },
  {
    value: 'Colorado Technical University-Colorado Springs',
    data: '126827'
  },
  {
    value: 'Community College of Aurora',
    data: '126863'
  },
  {
    value: 'CollegeAmerica-Denver',
    data: '126872'
  }, {
    value: 'Prince Institute-Rocky Mountains',
    data: '126924'
  },
  {
    value: 'Community College of Denver',
    data: '126942'
  },
  {
    value: 'Westwood College-Denver North',
    data: '127024'
  },
  {
    value: 'University of Denver',
    data: '127060'
  },
  {
    value: 'Fort Lewis College',
    data: '127185'
  },
  {
    value: 'Front Range Community College',
    data: '127200'
  },
  {
    value: 'Lamar Community College',
    data: '127389'
  },
  {
    value: 'Colorado Mesa University',
    data: '127556'
  },
  {
    value: 'Metropolitan State University of Denver',
    data: '127565'
  },
  {
    value: 'Morgan Community College',
    data: '127617'
  },
  {
    value: 'Naropa University',
    data: '127653'
  },
  {
    value: 'National American University-Colorado Springs',
    data: '127680'
  },
  {
    value: 'National American University-Denver',
    data: '127699'
  },
  {
    value: 'Nazarene Bible College',
    data: '127714'
  },
  {
    value: 'Northeastern Junior College',
    data: '127732'
  },
  {
    value: 'University of Northern Colorado',
    data: '127741'
  },
  {
    value: 'Otero Junior College',
    data: '127778'
  },
  {
    value: 'Everest College-Thornton',
    data: '127787'
  },
  {
    value: 'Pikes Peak Community College',
    data: '127820'
  },
  {
    value: 'Pueblo Community College',
    data: '127884'
  },
  {
    value: 'Red Rocks Community College',
    data: '127909'
  },
  {
    value: 'Regis University',
    data: '127918'
  },
  {
    value: 'Rocky Mountain College of Art and Design',
    data: '127945'
  },
  {
    value: 'Colorado State University-Pueblo',
    data: '128106'
  },
  {
    value: 'Pickens Technical College',
    data: '128151'
  },
  {
    value: 'Trinidad State Junior College',
    data: '128258'
  },
  {
    value: 'Western State Colorado University',
    data: '128391'
  },
  {
    value: 'Albertus Magnus College',
    data: '128498'
  },
  {
    value: 'Asnuntuck Community College',
    data: '128577'
  },
  {
    value: 'Lincoln College of New England-Southington',
    data: '128683'
  },
  {
    value: 'Bridgeport Hospital School of Nursing',
    data: '128726'
  },
  {
    value: 'University of Bridgeport',
    data: '128744'
  },
  {
    value: 'Central Connecticut State University',
    data: '128771'
  },
  {
    value: 'Connecticut College',
    data: '128902'
  },
  {
    value: 'Porter and Chester Institute of Branford',
    data: '129002'
  },
  {
    value: 'University of Connecticut',
    data: '129020'
  },
  {
    value: 'Goodwin College',
    data: '129154'
  },
  {
    value: 'Eastern Connecticut State University',
    data: '129215'
  },
  {
    value: 'Fairfield University',
    data: '129242'
  },
  {
    value: 'Capital Community College',
    data: '129367'
  },
  {
    value: 'University of Hartford',
    data: '129525'
  },
  {
    value: 'Holy Apostles College and Seminary',
    data: '129534'
  },
  {
    value: 'Housatonic Community College',
    data: '129543'
  },
  {
    value: 'Lyme Academy College of Fine Arts',
    data: '129686'
  },
  {
    value: 'Manchester Community College',
    data: '129695'
  },
  {
    value: 'Naugatuck Valley Community College',
    data: '129729'
  },
  {
    value: 'Middlesex Community College',
    data: '129756'
  },
  {
    value: 'Mitchell College',
    data: '129774'
  },
  {
    value: 'Three Rivers Community College',
    data: '129808'
  },
  {
    value: 'University of New Haven',
    data: '129941'
  },
  {
    value: 'Norwalk Community College',
    data: '130004'
  },
  {
    value: 'Northwestern Connecticut Community College',
    data: '130040'
  },
  {
    value: 'Paier College of Art Inc',
    data: '130110'
  },
  {
    value: 'Porter and Chester Institute of Stratford',
    data: '130174'
  },
  {
    value: 'Post University',
    data: '130183'
  },
  {
    value: 'Quinebaug Valley Community College',
    data: '130217'
  },
  {
    value: 'Quinnipiac University',
    data: '130226'
  },
  {
    value: 'Sacred Heart University',
    data: '130253'
  },
  {
    value: 'University of Saint Joseph',
    data: '130314'
  },
  {
    value: 'Gateway Community College',
    data: '130396'
  },
  {
    value: 'St Vincent\'s College',
    data: '130448'
  },
  {
    value: 'Southern Connecticut State University',
    data: '130493'
  },
  {
    value: 'Trinity College',
    data: '130590'
  },
  {
    value: 'Tunxis Community College',
    data: '130606'
  },
  {
    value: 'Wesleyan University',
    data: '130697'
  },
  {
    value: 'Western Connecticut State University',
    data: '130776'
  },
  {
    value: 'Yale University',
    data: '130794'
  },
  {
    value: 'Delaware Technical Community College-Owens',
    data: '130891'
  },
  {
    value: 'Delaware Technical Community College-Terry',
    data: '130907'
  },
  {
    value: 'Delaware Technical Community College-Stanton/Wilmington',
    data: '130916'
  },
  {
    value: 'Delaware State University',
    data: '130934'
  },
  {
    value: 'University of Delaware',
    data: '130943'
  },
  {
    value: 'Goldey-Beacom College',
    data: '130989'
  },
  {
    value: 'Wesley College',
    data: '131098'
  },
  {
    value: 'Wilmington University',
    data: '131113'
  },
  {
    value: 'American University',
    data: '131159'
  },
  {
    value: 'Catholic University of America',
    data: '131283'
  },
  {
    value: 'University of the District of Columbia',
    data: '131399'
  },
  {
    value: 'Gallaudet University',
    data: '131450'
  },
  {
    value: 'George Washington University',
    data: '131469'
  },
  {
    value: 'Georgetown University',
    data: '131496'
  },
  {
    value: 'Howard University',
    data: '131520'
  },
  {
    value: 'Strayer University-District of Columbia',
    data: '131803'
  },
  {
    value: 'National Conservatory of Dramatic Arts',
    data: '131830'
  },
  {
    value: 'Trinity Washington University',
    data: '131876'
  },
  {
    value: 'The Art Institute of Fort Lauderdale',
    data: '132338'
  },
  {
    value: 'The Baptist College of Florida',
    data: '132408'
  },
  {
    value: 'Barry University',
    data: '132471'
  },
  {
    value: 'Bethune-Cookman University',
    data: '132602'
  },
  {
    value: 'Lynn University',
    data: '132657'
  },
  {
    value: 'Eastern Florida State College',
    data: '132693'
  },
  {
    value: 'Broward College',
    data: '132709'
  },
  {
    value: 'Fortis College-Winter Park',
    data: '132806'
  },
  {
    value: 'Carlos Albizu University-Miami',
    data: '132842'
  },
  {
    value: 'College of Central Florida',
    data: '132851'
  },
  {
    value: 'Johnson University Florida',
    data: '132879'
  },
  {
    value: 'University of Central Florida',
    data: '132903'
  },
  {
    value: 'Charlotte Technical Center',
    data: '132976'
  },
  {
    value: 'Chipola College',
    data: '133021'
  },
  {
    value: 'Clearwater Christian College',
    data: '133085'
  },
  {
    value: 'Daytona State College',
    data: '133386'
  },
  {
    value: 'South University-West Palm Beach',
    data: '133465'
  },
  {
    value: 'Eckerd College',
    data: '133492'
  },
  {
    value: 'Florida SouthWestern State College',
    data: '133508'
  },
  {
    value: 'Edward Waters College',
    data: '133526'
  },
  {
    value: 'Embry-Riddle Aeronautical University-Daytona Beach',
    data: '133553'
  },
  {
    value: 'Florida Agricultural and Mechanical University',
    data: '133650'
  },
  {
    value: 'Florida Atlantic University',
    data: '133669'
  },
  {
    value: 'Florida State College at Jacksonville',
    data: '133702'
  },
  {
    value: 'Flagler College-St Augustine',
    data: '133711'
  },
  {
    value: 'Florida College',
    data: '133809'
  },
  {
    value: 'Adventist University of Health Sciences',
    data: '133872'
  },
  {
    value: 'Florida Institute of Technology',
    data: '133881'
  },
  {
    value: 'Florida International University',
    data: '133951'
  },
  {
    value: 'Florida Keys Community College',
    data: '133960'
  },
  {
    value: 'Florida Memorial University',
    data: '133979'
  },
  {
    value: 'Florida Career College-Miami',
    data: '133997'
  },
  {
    value: 'Florida Southern College',
    data: '134079'
  },
  {
    value: 'Florida State University',
    data: '134097'
  },
  {
    value: 'University of Southernmost Florida',
    data: '134121'
  },
  {
    value: 'University of Florida',
    data: '134130'
  },
  {
    value: 'Everest University-Pompano Beach',
    data: '134149'
  },
  {
    value: 'Full Sail University',
    data: '134237'
  },
  {
    value: 'Gulf Coast State College',
    data: '134343'
  },
  {
    value: 'Key College',
    data: '134422'
  },
  {
    value: 'Hillsborough Community College',
    data: '134495'
  },
  {
    value: 'Hobe Sound Bible College',
    data: '134510'
  },
  {
    value: 'Indian River State College',
    data: '134608'
  },
  {
    value: 'Sanford-Brown College-Tampa',
    data: '134680'
  },
  {
    value: 'AI Miami International University of Art and Design',
    data: '134811'
  },
  {
    value: 'ITT Technical Institute-Tampa',
    data: '134909'
  },
  {
    value: 'Jacksonville University',
    data: '134945'
  },
  {
    value: 'Jones College-Jacksonville',
    data: '135063'
  },
  {
    value: 'Keiser University-Ft Lauderdale',
    data: '135081'
  },
  {
    value: 'Florida Gateway College',
    data: '135160'
  },
  {
    value: 'Lake-Sumter State College',
    data: '135188'
  },
  {
    value: 'Luther Rice University & Seminary',
    data: '135364'
  },
  {
    value: 'State College of Florida-Manatee-Sarasota',
    data: '135391'
  },
  {
    value: 'Traviss Career Center',
    data: '135522'
  },
  {
    value: 'Miami Dade College',
    data: '135717'
  },
  {
    value: 'University of Miami',
    data: '135726'
  },
  {
    value: 'Remington College-Tampa Campus',
    data: '135939'
  },
  {
    value: 'Everest Institute-North Miami',
    data: '135957'
  },
  {
    value: 'Lincoln College of Technology-West Palm Beach',
    data: '136066'
  },
  {
    value: 'North Florida Community College',
    data: '136145'
  },  {
    value: 'University of Phoenix-Arkansas',
    data: '484622'
  },
  {
    value: 'University of Phoenix-California',
    data: '484631'
  },
  {
    value: 'University of Phoenix-Colorado',
    data: '484640'
  },
  {
    value: 'University of Phoenix-Florida',
    data: '484668'
  },
  {
    value: 'University of Phoenix-Georgia',
    data: '484677'
  },
  {
    value: 'University of Phoenix-Louisiana',
    data: '484686'
  },
  {
    value: 'University of Phoenix-Michigan',
    data: '484695'
  },
  {
    value: 'University of Phoenix-Missouri',
    data: '484701'
  },
  {
    value: 'University of Phoenix-Nevada',
    data: '484710'
  },
  {
    value: 'University of Phoenix-North Carolina',
    data: '484729'
  },
  {
    value: 'University of Phoenix-Oklahoma',
    data: '484738'
  },
  {
    value: 'University of Phoenix-Tennessee',
    data: '484747'
  },
  {
    value: 'University of Phoenix-Texas',
    data: '484756'
  },
  {
    value: 'University of Phoenix-Virginia',
    data: '484765'
  },
  {
    value: 'University of Phoenix-Pennsylvania',
    data: '484783'
  },
  {
    value: 'Centro de Estudios Multidisciplinarios-Mayaguez',
    data: '484835'
  },
  {
    value: 'University of North Texas at Dallas',
    data: '484905'
  },
  {
    value: 'BridgeValley Community & Technical College',
    data: '484932'
  },
  {
    value: 'Virginia College-Fort Pierce',
    data: '484978'
  },
  {
    value: 'Trine University-Arizona Regional Campus',
    data: '485078'
  },
  {
    value: 'Georgia Military College',
    data: '485111'
  },
  {
    value: 'California College San Diego',
    data: '485263'
  },
  {
    value: 'West Coast University-Miami',
    data: '485272'
  },
  {
    value: 'National American University-Houston',
    data: '485281'
  },
  {
    value: 'Aparicio-Levy Technical Center',
    data: '485342'
  },
  {
    value: 'Fred D. Learey Technical Center',
    data: '485351'
  },
  {
    value: 'Dewey University-Mayaguez',
    data: '485421'
  },
  {
    value: 'Coastal Pines Technical College',
    data: '485458'
  },  {
    value: 'Remington College-Heathrow Campus',
    data: '460783'
  },
  {
    value: 'Miller-Motte College-Jacksonville',
    data: '460817'
  },
  {
    value: 'Miller-Motte Technical College-Augusta',
    data: '460826'
  },
  {
    value: 'Miller-Motte Technical College-Conway',
    data: '460835'
  },
  {
    value: 'Virginia College-Macon',
    data: '460844'
  },
  {
    value: 'Virginia College-Spartanburg',
    data: '460853'
  },
  {
    value: 'Chamberlain College of Nursing-Virginia',
    data: '460871'
  },
  {
    value: 'Stevens-Henager College',
    data: '460899'
  },
  {
    value: 'Virginia College-Richmond',
    data: '460923'
  },
  {
    value: 'Mildred Elley-New York Campus',
    data: '461014'
  },
  {
    value: 'National Paralegal College',
    data: '461023'
  },
  {
    value: 'Carolina College of Biblical Studies',
    data: '461032'
  },
  {
    value: 'The Collective School Of Music',
    data: '461157'
  },
  {
    value: 'Georgia Christian University',
    data: '461236'
  },
  {
    value: 'Jose Maria Vargas University',
    data: '461281'
  },
  {
    value: 'Keweenaw Bay Ojibwa Community College',
    data: '461315'
  },
  {
    value: 'Grace College of Divinity',
    data: '461528'
  },
  {
    value: 'Simmons College of Kentucky',
    data: '461759'
  },
  {
    value: 'Ashdown College of Health Sciences',
    data: '461777'
  },
  {
    value: 'North American University',
    data: '461795'
  },
  {
    value: 'Mesivta Keser Torah',
    data: '461847'
  },
  {
    value: 'Millennia Atlantic University',
    data: '461883'
  },
  {
    value: 'Colorado Academy of Veterinary Technology',
    data: '461953'
  },
  {
    value: 'John Paul the Great Catholic University',
    data: '462354'
  },
  {
    value: 'ITT Technical Institute-Durham',
    data: '462363'
  },
  {
    value: 'ITT Technical Institute-Hanover',
    data: '462372'
  },
  {
    value: 'University of Phoenix-Mississippi',
    data: '462390'
  },
  {
    value: 'Independence University',
    data: '465812'
  },
  {
    value: 'National American University-Tulsa',
    data: '466152'
  },
  {
    value: 'National American University-Centennial',
    data: '466161'
  },
  {
    value: 'National American University-Lee\'s Summit',
    data: '466170'
  },
  {
    value: 'National American University-Colorado Springs South',
    data: '466189'
  },
  {
    value: 'Globe University-Appleton',
    data: '466514'
  },
  {
    value: 'Chamberlain College of Nursing-Missouri',
    data: '466921'
  },
  {
    value: 'Chamberlain College of Nursing-Texas',
    data: '466930'
  },
  {
    value: 'ITT Technical Institute-Oakland',
    data: '467058'
  },
  {
    value: 'Broadview University-Boise',
    data: '467793'
  },
  {
    value: 'South University-The Art Institute of Fort Worth',
    data: '468015'
  },
  {
    value: 'South University-Novi',
    data: '468024'
  },
  {
    value: 'Harrison College-Morrisville',
    data: '468398'
  },
  {
    value: 'National University College-Caguas',
    data: '468723'
  },
  {
    value: 'New England Tractor Trailer Training School of Massachusetts',
    data: '468963'
  },
  {
    value: 'Dewey University-Hatillo',
    data: '469407'
  },
  {
    value: 'Dewey University-Manati',
    data: '469416'
  },
  {
    value: 'The Art Institute of Wisconsin',
    data: '470092'
  },
  {
    value: 'Brown Mackie College-Birmingham',
    data: '470162'
  },
  {
    value: 'ITT Technical Institute-Phoenix West',
    data: '470861'
  },
  {
    value: 'ITT Technical Institute-Brooklyn Center',
    data: '470870'
  },
  {
    value: 'ITT Technical Institute-Waco',
    data: '470898'
  },
  {
    value: 'ITT Technical Institute-Myrtle Beach',
    data: '470904'
  },
  {
    value: 'Azusa Pacific University College',
    data: '474863'
  },
  {
    value: 'Minneapolis Media Institute',
    data: '474881'
  },
  {
    value: 'CollegeAmerica-Phoenix',
    data: '474890'
  },
  {
    value: 'Stevens-Henager College',
    data: '474906'
  },
  {
    value: 'All-State Career School-Allied Health Campus',
    data: '474997'
  },
  {
    value: 'Brown Mackie College-Oklahoma City',
    data: '475042'
  },
  {
    value: 'Miller-Motte Technical College-Macon',
    data: '475060'
  },
  {
    value: 'Miller-Motte Technical College-Gulfport',
    data: '475079'
  },
  {
    value: 'South University_Savannah Online',
    data: '475121'
  },
  {
    value: 'Miller-Motte Technical College-Roanoke',
    data: '475194'
  },
  {
    value: 'Sanford-Brown College-Brooklyn Center',
    data: '475291'
  },
  {
    value: 'Virginia College-Savannah',
    data: '475352'
  },
  {
    value: 'Virginia College-Columbus',
    data: '475370'
  },
  {
    value: 'City College-Hollywood',
    data: '475477'
  },
  {
    value: 'Prince Institute-Great Lakes',
    data: '475529'
  },
  {
    value: 'Stella and Charles Guttman Community College',
    data: '475565'
  },
  {
    value: 'Bryan University',
    data: '475583'
  },
  {
    value: 'Virginia College-Tulsa',
    data: '475592'
  },
  {
    value: 'Criswell College',
    data: '475608'
  },
  {
    value: 'Virginia College-Knoxville',
    data: '475617'
  },
  {
    value: 'Academy of Couture Art',
    data: '475635'
  },
  {
    value: 'Global Institute',
    data: '475644'
  },
  {
    value: 'Bryant & Stratton College-Akron',
    data: '475699'
  },
  {
    value: 'Chamberlain College of Nursing-Georgia',
    data: '475732'
  },
  {
    value: 'Chamberlain College of Nursing-Indiana',
    data: '475741'
  },
  {
    value: 'Sessions College for Professional Design',
    data: '475839'
  },
  {
    value: 'Virginia College-Shreveport Bossier City',
    data: '475866'
  },
  {
    value: 'Golf Academy of America-Farmers Branch',
    data: '476337'
  },
  {
    value: 'Miami Ad School-New York',
    data: '476355'
  },
  {
    value: 'Futura Career Institute',
    data: '476498'
  },
  {
    value: 'Bais HaMedrash and Mesivta of Baltimore',
    data: '476601'
  },
  {
    value: 'Yeshiva Gedolah Zichron Leyma',
    data: '476692'
  },
  {
    value: 'Be\'er Yaakov Talmudic Seminary',
    data: '476717'
  },
  {
    value: 'West Coast University-Dallas',
    data: '477039'
  },
  {
    value: 'Stevens-Henager College',
    data: '477950'
  },
  {
    value: 'National American University-Bellevue',
    data: '477996'
  },
  {
    value: 'National American University-Burnsville',
    data: '478005'
  },
  {
    value: 'National American University-Mesquite',
    data: '478014'
  },
  {
    value: 'California College San Diego',
    data: '478634'
  },
  {
    value: 'ITT Technical Institute-Philadelphia',
    data: '479549'
  },
  {
    value: 'ITT Technical Institute-Marlton',
    data: '479558'
  },
  {
    value: 'ITT Technical Institute-West Palm Beach',
    data: '479594'
  },
  {
    value: 'ITT Technical Institute-Salem',
    data: '479600'
  },
  {
    value: 'ITT Technical Institute-Indianapolis East',
    data: '479628'
  },
  {
    value: 'ITT Technical Institute-Douglasville',
    data: '479637'
  },
  {
    value: 'ITT Technical Institute-Overland Park',
    data: '479646'
  },
  {
    value: 'ITT Technical Institute-Springfield',
    data: '479655'
  },
  {
    value: 'Pennsylvania State University-World Campus',
    data: '479956'
  },
  {
    value: 'Kaplan University-Augusta Campus',
    data: '480064'
  },
  {
    value: 'South University-Austin',
    data: '480073'
  },
  {
    value: 'South University-Cleveland',
    data: '480082'
  },
  {
    value: 'Bryant & Stratton College-Online',
    data: '480091'
  },
  {
    value: 'Virginia College-Florence',
    data: '480107'
  },
  {
    value: 'Mercyhurst University-North East Campus',
    data: '480189'
  },
  {
    value: 'Warner Pacific College Adult Degree Program',
    data: '480198'
  },
  {
    value: 'Platt College-Riverside',
    data: '480204'
  },
  {
    value: 'National College-Canton',
    data: '480480'
  },
  {
    value: 'Rasmussen College-Kansas',
    data: '480657'
  },
  {
    value: 'Manthano Christian College',
    data: '480754'
  },
  {
    value: 'California Miramar University',
    data: '480781'
  },
  {
    value: 'Virginia College-Greensboro',
    data: '480815'
  },
  {
    value: 'College of the Muscogee Nation',
    data: '480967'
  },
  {
    value: 'Midwives College of Utah',
    data: '480985'
  },
  {
    value: 'Grace Mission University',
    data: '481058'
  },
  {
    value: 'Helms College',
    data: '481155'
  },
  {
    value: 'Institute of Health Sciences',
    data: '481207'
  },
  {
    value: 'Mid-South Christian College',
    data: '481225'
  },
  {
    value: 'Grace School of Theology',
    data: '481401'
  },
  {
    value: 'Yeshiva Gedolah Kesser Torah',
    data: '481410'
  },
  {
    value: 'Yeshiva Yesodei Hatorah',
    data: '481438'
  },
  {
    value: 'Dorsey Business Schools-Lansing',
    data: '481599'
  },
  {
    value: 'ITT Technical Institute-Pensacola',
    data: '481614'
  },
  {
    value: 'ITT Technical Institute-San Antonio East',
    data: '481623'
  },
  {
    value: 'South University-High Point',
    data: '481720'
  },
  {
    value: 'Court Reporting Institute of St Louis',
    data: '481766'
  },
  {
    value: 'L\'Ecole Culinaire-Kansas City',
    data: '481915'
  },
  {
    value: 'Vatterott College-ex\'treme Institute by Nelly-St Louis',
    data: '481988'
  },
  {
    value: 'College of Business and Technology-Miami Gardens',
    data: '482024'
  },
  {
    value: 'Georgia Regents University',
    data: '482149'
  },
  {
    value: 'Middle Georgia State College',
    data: '482158'
  },
  {
    value: 'Academy of Interactive Entertainment',
    data: '482185'
  },
  {
    value: 'Virginia Baptist College',
    data: '482228'
  },
  {
    value: 'Aviation Institute of Maintenance-Las Vegas',
    data: '482255'
  },
  {
    value: 'National American University-Austin South',
    data: '482307'
  },
  {
    value: 'National American University-Lewisville',
    data: '482316'
  },
  {
    value: 'National American University-Georgetown',
    data: '482325'
  },
  {
    value: 'National American University-Richardson',
    data: '482334'
  },
  {
    value: 'National American University-Rochester',
    data: '482343'
  },
  {
    value: 'National American University-Weldon Spring',
    data: '482352'
  },
  {
    value: 'National American University-Wichita West',
    data: '482361'
  },
  {
    value: 'National American University-Indianapolis',
    data: '482370'
  },
  {
    value: 'National American University-Tigard',
    data: '482389'
  },
  {
    value: 'The Art Institute of St Louis',
    data: '482398'
  },
  {
    value: 'DeVry College of New York',
    data: '482413'
  },
  {
    value: 'DeVry University-Arizona',
    data: '482422'
  },
  {
    value: 'DeVry University-California',
    data: '482431'
  },
  {
    value: 'DeVry University-Colorado',
    data: '482440'
  },
  {
    value: 'DeVry University-Florida',
    data: '482459'
  },
  {
    value: 'DeVry University-Georgia',
    data: '482468'
  },
  {
    value: 'DeVry University-Illinois',
    data: '482477'
  },
  {
    value: 'DeVry University-Indiana',
    data: '482486'
  },
  {
    value: 'DeVry University-Kentucky',
    data: '482495'
  },
  {
    value: 'DeVry University-Maryland',
    data: '482501'
  },
  {
    value: 'DeVry University-Michigan',
    data: '482510'
  },
  {
    value: 'DeVry University-Minnesota',
    data: '482529'
  },
  {
    value: 'DeVry University-Missouri',
    data: '482538'
  },
  {
    value: 'DeVry University-Nevada',
    data: '482547'
  },
  {
    value: 'DeVry University-New Jersey',
    data: '482556'
  },
  {
    value: 'DeVry University-North Carolina',
    data: '482565'
  },
  {
    value: 'DeVry University-Ohio',
    data: '482574'
  },
  {
    value: 'DeVry University-Oklahoma',
    data: '482583'
  },
  {
    value: 'DeVry University-Oregon',
    data: '482592'
  },
  {
    value: 'DeVry University-Pennsylvania',
    data: '482608'
  },
  {
    value: 'DeVry University-Tennessee',
    data: '482617'
  },
  {
    value: 'DeVry University-Texas',
    data: '482635'
  },
  {
    value: 'DeVry University-Utah',
    data: '482644'
  },
  {
    value: 'DeVry University-Virginia',
    data: '482653'
  },
  {
    value: 'DeVry University-Washington',
    data: '482662'
  },
  {
    value: 'DeVry University-Wisconsin',
    data: '482671'
  },
  {
    value: 'University of North Georgia',
    data: '482680'
  },
  {
    value: 'South Georgia State College',
    data: '482699'
  },
  {
    value: 'Brown Mackie College-Dallas',
    data: '482954'
  },
  {
    value: 'Arizona College-Mesa',
    data: '482990'
  },
  {
    value: 'Central Georgia Technical College',
    data: '483045'
  },
  {
    value: 'Arizona State University-Skysong',
    data: '483124'
  },
  {
    value: 'Louisiana Delta Community College',
    data: '483212'
  },
  {
    value: 'Graduate School USA',
    data: '483285'
  },
  {
    value: 'Virginia College-Lubbock',
    data: '483319'
  },
  {
    value: 'Dorsey Business Schools-Dearborn',
    data: '483504'
  },
  {
    value: 'Ohio Institute of Allied Health',
    data: '483647'
  },
  {
    value: 'Azure College',
    data: '483762'
  },
  {
    value: 'IGlobal University',
    data: '483780'
  },
  {
    value: 'InterAmerican Technical Institute',
    data: '483869'
  },
  {
    value: 'Morthland College',
    data: '483984'
  },
  {
    value: 'High Desert Medical College',
    data: '484002'
  },
  {
    value: 'Burnett International College',
    data: '484181'
  },
  {
    value: 'University of Florida-Online',
    data: '484473'
  },
  {
    value: 'University of Phoenix-Arizona',
    data: '484613'
  },{
    value: 'University of North Florida',
    data: '136172'
  },
  {
    value: 'Northwood University-Florida',
    data: '136206'
  },
  {
    value: 'Nova Southeastern University',
    data: '136215'
  },
  {
    value: 'Northwest Florida State College',
    data: '136233'
  },
  {
    value: 'Everest University-North Orlando',
    data: '136288'
  },
  {
    value: 'Palm Beach Atlantic University',
    data: '136330'
  },
  {
    value: 'Palm Beach State College',
    data: '136358'
  },
  {
    value: 'Pasco-Hernando State College',
    data: '136400'
  },
  {
    value: 'Pensacola State College',
    data: '136473'
  },
  {
    value: 'Polk State College',
    data: '136516'
  },
  {
    value: 'Ridge Career Center',
    data: '136765'
  },
  {
    value: 'Ringling College of Art and Design',
    data: '136774'
  },
  {
    value: 'Rollins College',
    data: '136950'
  },
  {
    value: 'Saint Leo University',
    data: '137032'
  },
  {
    value: 'St Petersburg College',
    data: '137078'
  },
  {
    value: 'Santa Fe College',
    data: '137096'
  },
  {
    value: 'Argosy University-Sarasota',
    data: '137148'
  },
  {
    value: 'Seminole State College of Florida',
    data: '137209'
  },
  {
    value: 'Saint John Vianney College Seminary',
    data: '137272'
  },
  {
    value: 'Saint Johns River State College',
    data: '137281'
  },
  {
    value: 'South Florida State College',
    data: '137315'
  },
  {
    value: 'University of South Florida-Main Campus',
    data: '137351'
  },
  {
    value: 'St Thomas University',
    data: '137476'
  },
  {
    value: 'Stenotype Institute of Jacksonville Inc-Jacksonville',
    data: '137537'
  },
  {
    value: 'Stetson University',
    data: '137546'
  },
  {
    value: 'Southeastern University',
    data: '137564'
  },
  {
    value: 'Tallahassee Community College',
    data: '137759'
  },
  {
    value: 'Talmudic College of Florida',
    data: '137777'
  },
  {
    value: 'Everest University-Tampa',
    data: '137801'
  },
  {
    value: 'Everest University-Largo',
    data: '137810'
  },
  {
    value: 'The University of Tampa',
    data: '137847'
  },
  {
    value: 'Trinity Baptist College',
    data: '137953'
  },
  {
    value: 'Trinity College of Florida',
    data: '137962'
  },
  {
    value: 'Valencia College',
    data: '138187'
  },
  {
    value: 'Warner University',
    data: '138275'
  },
  {
    value: 'Webber International University',
    data: '138293'
  },
  {
    value: 'Rasmussen College-Florida',
    data: '138309'
  },
  {
    value: 'The University of West Florida',
    data: '138354'
  },
  {
    value: 'Abraham Baldwin Agricultural College',
    data: '138558'
  },
  {
    value: 'Agnes Scott College',
    data: '138600'
  },
  {
    value: 'Interactive College of Technology-Chamblee',
    data: '138655'
  },
  {
    value: 'Interactive College of Technology-Morrow',
    data: '138664'
  },
  {
    value: 'Albany Technical College',
    data: '138682'
  },
  {
    value: 'Darton State College',
    data: '138691'
  },
  {
    value: 'Albany State University',
    data: '138716'
  },
  {
    value: 'Andrew College',
    data: '138761'
  },
  {
    value: 'Armstrong State University',
    data: '138789'
  },
  {
    value: 'The Art Institute of Atlanta',
    data: '138813'
  },
  {
    value: 'Atlanta Technical College',
    data: '138840'
  },
  {
    value: 'Point University',
    data: '138868'
  },
  {
    value: 'Atlanta Metropolitan State College',
    data: '138901'
  },
  {
    value: 'Clark Atlanta University',
    data: '138947'
  },
  {
    value: 'Augusta Technical College',
    data: '138956'
  },
  {
    value: 'Bainbridge State College',
    data: '139010'
  },
  {
    value: 'Bauder College',
    data: '139074'
  },
  {
    value: 'Berry College',
    data: '139144'
  },
  {
    value: 'Beulah Heights University',
    data: '139153'
  },
  {
    value: 'Brenau University',
    data: '139199'
  },
  {
    value: 'Brewton-Parker College',
    data: '139205'
  },
  {
    value: 'Brown College of Court Reporting',
    data: '139214'
  },
  {
    value: 'College of Coastal Georgia',
    data: '139250'
  },
  {
    value: 'West Georgia Technical College',
    data: '139278'
  },
  {
    value: 'Carver Bible College',
    data: '139287'
  },
  {
    value: 'Clayton  State University',
    data: '139311'
  },
  {
    value: 'Columbus Technical College',
    data: '139357'
  },
  {
    value: 'Columbus State University',
    data: '139366'
  },
  {
    value: 'Georgia Northwestern Technical College',
    data: '139384'
  },
  {
    value: 'Covenant College',
    data: '139393'
  },
  {
    value: 'Dalton State College',
    data: '139463'
  },
  {
    value: 'South University-Savannah',
    data: '139579'
  },
  {
    value: 'East Georgia State College',
    data: '139621'
  },
  {
    value: 'Emmanuel College',
    data: '139630'
  },
  {
    value: 'Emory University',
    data: '139658'
  },
  {
    value: 'Georgia Highlands College',
    data: '139700'
  },
  {
    value: 'Fort Valley State University',
    data: '139719'
  },
  {
    value: 'Georgia Institute of Technology-Main Campus',
    data: '139755'
  },
  {
    value: 'Georgia Southwestern State University',
    data: '139764'
  },
  {
    value: 'Georgia College and State University',
    data: '139861'
  },
  {
    value: 'Georgia Southern University',
    data: '139931'
  },
  {
    value: 'Georgia State University',
    data: '139940'
  },
  {
    value: 'University of Georgia',
    data: '139959'
  },
  {
    value: 'Gordon State College',
    data: '139968'
  },
  {
    value: 'Southern Crescent Technical College',
    data: '139986'
  },
  {
    value: 'Gupton Jones College of Funeral Service',
    data: '139995'
  },
  {
    value: 'Gwinnett College-Lilburn',
    data: '140003'
  },
  {
    value: 'Gwinnett Technical College',
    data: '140012'
  },
  {
    value: 'Kennesaw State University',
    data: '140164'
  },
  {
    value: 'LaGrange College',
    data: '140234'
  },
  {
    value: 'Lanier Technical College',
    data: '140243'
  },
  {
    value: 'Life University',
    data: '140252'
  },
  {
    value: 'Chattahoochee Technical College',
    data: '140331'
  },
  {
    value: 'Herzing University-Atlanta',
    data: '140340'
  },
  {
    value: 'Mercer University',
    data: '140447'
  },
  {
    value: 'Morehouse College',
    data: '140553'
  },
  {
    value: 'Moultrie Technical College',
    data: '140599'
  },
  {
    value: 'North Georgia Technical College',
    data: '140678'
  },
  {
    value: 'Oglethorpe University',
    data: '140696'
  },
  {
    value: 'Paine College',
    data: '140720'
  },
  {
    value: 'Piedmont College',
    data: '140818'
  },
  {
    value: 'Portfolio Center',
    data: '140827'
  },
  {
    value: 'Reinhardt University',
    data: '140872'
  },
  {
    value: 'Savannah Technical College',
    data: '140942'
  },
  {
    value: 'Savannah College of Art and Design',
    data: '140951'
  },
  {
    value: 'Savannah State University',
    data: '140960'
  },
  {
    value: 'Shorter University',
    data: '140988'
  },
  {
    value: 'South Georgia Technical College',
    data: '141006'
  },
  {
    value: 'The Creative Circus',
    data: '141015'
  },
  {
    value: 'Spelman College',
    data: '141060'
  },
  {
    value: 'Southern Polytechnic State University',
    data: '141097'
  },
  {
    value: 'Southwest Georgia Technical College',
    data: '141158'
  },
  {
    value: 'Thomas University',
    data: '141167'
  },
  {
    value: 'Toccoa Falls College',
    data: '141185'
  },
  {
    value: 'Truett-McConnell College',
    data: '141237'
  },
  {
    value: 'Wiregrass Georgia Technical College',
    data: '141255'
  },
  {
    value: 'Valdosta State University',
    data: '141264'
  },
  {
    value: 'Wesleyan College',
    data: '141325'
  },
  {
    value: 'University of West Georgia',
    data: '141334'
  },
  {
    value: 'Young Harris College',
    data: '141361'
  },
  {
    value: 'Heald College-Honolulu',
    data: '141468'
  },
  {
    value: 'Chaminade University of Honolulu',
    data: '141486'
  },
  {
    value: 'University of Hawaii at Hilo',
    data: '141565'
  },
  {
    value: 'University of Hawaii at Manoa',
    data: '141574'
  },
  {
    value: 'Hawaii Pacific University',
    data: '141644'
  },
  {
    value: 'Honolulu Community College',
    data: '141680'
  },
  {
    value: 'Kapiolani Community College',
    data: '141796'
  },
  {
    value: 'Kauai Community College',
    data: '141802'
  },
  {
    value: 'Leeward Community College',
    data: '141811'
  },
  {
    value: 'University of Hawaii Maui College',
    data: '141839'
  },
  {
    value: 'University of Hawaii-West Oahu',
    data: '141981'
  },
  {
    value: 'Windward Community College',
    data: '141990'
  },
  {
    value: 'Boise Bible College',
    data: '142090'
  },
  {
    value: 'Boise State University',
    data: '142115'
  },
  {
    value: 'Eastern Idaho Technical College',
    data: '142179'
  },
  {
    value: 'Idaho State University',
    data: '142276'
  },
  {
    value: 'University of Idaho',
    data: '142285'
  },
  {
    value: 'The College of Idaho',
    data: '142294'
  },
  {
    value: 'Lewis-Clark State College',
    data: '142328'
  },
  {
    value: 'ITT Technical Institute-Boise',
    data: '142337'
  },
  {
    value: 'North Idaho College',
    data: '142443'
  },
  {
    value: 'Northwest Nazarene University',
    data: '142461'
  },
  {
    value: 'Brigham Young University-Idaho',
    data: '142522'
  },
  {
    value: 'College of Southern Idaho',
    data: '142559'
  },
  {
    value: 'American Academy of Art',
    data: '142887'
  },
  {
    value: 'School of the Art Institute of Chicago',
    data: '143048'
  },
  {
    value: 'Augustana College',
    data: '143084'
  },
  {
    value: 'Aurora University',
    data: '143118'
  },
  {
    value: 'Southwestern Illinois College',
    data: '143215'
  },
  {
    value: 'Black Hawk College',
    data: '143279'
  },
  {
    value: 'Blackburn College',
    data: '143288'
  },
  {
    value: 'Bradley University',
    data: '143358'
  },
  {
    value: 'Carl Sandburg College',
    data: '143613'
  },
  {
    value: 'Chicago State University',
    data: '144005'
  },
  {
    value: 'University of Chicago',
    data: '144050'
  },
  {
    value: 'City Colleges of Chicago-Kennedy-King College',
    data: '144157'
  },
  {
    value: 'City Colleges of Chicago-Malcolm X College',
    data: '144166'
  },
  {
    value: 'City Colleges of Chicago-Olive-Harvey College',
    data: '144175'
  },
  {
    value: 'City Colleges of Chicago-Harry S Truman College',
    data: '144184'
  },
  {
    value: 'City Colleges of Chicago-Richard J Daley College',
    data: '144193'
  },
  {
    value: 'City Colleges of Chicago-Harold Washington College',
    data: '144209'
  },
  {
    value: 'City Colleges of Chicago-Wilbur Wright College',
    data: '144218'
  },
  {
    value: 'Columbia College-Chicago',
    data: '144281'
  },
  {
    value: 'Concordia University-Chicago',
    data: '144351'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Chicago',
    data: '144467'
  },
  {
    value: 'Danville Area Community College',
    data: '144564'
  },
  {
    value: 'DePaul University',
    data: '144740'
  },
  {
    value: 'College of DuPage',
    data: '144865'
  },
  {
    value: 'East-West University',
    data: '144883'
  },
  {
    value: 'Eastern Illinois University',
    data: '144892'
  },
  {
    value: 'Elgin Community College',
    data: '144944'
  },
  {
    value: 'Elmhurst College',
    data: '144962'
  },
  {
    value: 'Eureka College',
    data: '144971'
  },
  {
    value: 'Fox College',
    data: '145239'
  },
  {
    value: 'Governors State University',
    data: '145336'
  },
  {
    value: 'Graham Hospital School of Nursing',
    data: '145354'
  },
  {
    value: 'Greenville College',
    data: '145372'
  },
  {
    value: 'Harrington College of Design',
    data: '145460'
  },
  {
    value: 'Hebrew Theological College',
    data: '145497'
  },
  {
    value: 'Highland Community College',
    data: '145521'
  },
  {
    value: 'University of Illinois at Chicago',
    data: '145600'
  },
  {
    value: 'Benedictine University',
    data: '145619'
  },
  {
    value: 'University of Illinois at Urbana-Champaign',
    data: '145637'
  },
  {
    value: 'Illinois Wesleyan University',
    data: '145646'
  },
  {
    value: 'Illinois Central College',
    data: '145682'
  },
  {
    value: 'Illinois College',
    data: '145691'
  },
  {
    value: 'Olney Central College',
    data: '145707'
  },
  {
    value: 'Illinois Institute of Technology',
    data: '145725'
  },
  {
    value: 'Argosy University-Chicago',
    data: '145770'
  },
  {
    value: 'Illinois State University',
    data: '145813'
  },
  {
    value: 'Illinois Valley Community College',
    data: '145831'
  },
  {
    value: 'Sanford-Brown College-Chicago',
    data: '146010'
  },
  {
    value: 'John A Logan College',
    data: '146205'
  },
  {
    value: 'John Wood Community College',
    data: '146278'
  },
  {
    value: 'Joliet Junior College',
    data: '146296'
  },
  {
    value: 'Judson University',
    data: '146339'
  },
  {
    value: 'Kankakee Community College',
    data: '146348'
  },
  {
    value: 'Kaskaskia College',
    data: '146366'
  },
  {
    value: 'Kendall College',
    data: '146393'
  },
  {
    value: 'Kishwaukee College',
    data: '146418'
  },
  {
    value: 'Knox College',
    data: '146427'
  },
  {
    value: 'College of Lake County',
    data: '146472'
  },
  {
    value: 'Lake Forest College',
    data: '146481'
  },
  {
    value: 'Lake Land College',
    data: '146506'
  },
  {
    value: 'Lewis and Clark Community College',
    data: '146603'
  },
  {
    value: 'Lewis University',
    data: '146612'
  },
  {
    value: 'Lincoln Christian University',
    data: '146667'
  },
  {
    value: 'Lincoln College',
    data: '146676'
  },
  {
    value: 'Lincoln Land Community College',
    data: '146685'
  },
  {
    value: 'Loyola University Chicago',
    data: '146719'
  },
  {
    value: 'Trinity College of Nursing & Health Sciences',
    data: '146755'
  },
  {
    value: 'MacCormac College',
    data: '146816'
  },
  {
    value: 'MacMurray College',
    data: '146825'
  },
  {
    value: 'McHenry County College',
    data: '147004'
  },
  {
    value: 'McKendree University',
    data: '147013'
  },
  {
    value: 'Methodist College',
    data: '147129'
  },
  {
    value: 'Midstate College',
    data: '147165'
  },
  {
    value: 'Millikin University',
    data: '147244'
  },
  {
    value: 'Monmouth College',
    data: '147341'
  },
  {
    value: 'Moody Bible Institute',
    data: '147369'
  },
  {
    value: 'Moraine Valley Community College',
    data: '147378'
  },
  {
    value: 'Morrison Institute of Technology',
    data: '147396'
  },
  {
    value: 'Morton College',
    data: '147411'
  },
  {
    value: 'National Louis University',
    data: '147536'
  },
  {
    value: 'North Central College',
    data: '147660'
  },
  {
    value: 'North Park University',
    data: '147679'
  },
  {
    value: 'Northern Illinois University',
    data: '147703'
  },
  {
    value: 'Northwestern College-Chicago Campus',
    data: '147749'
  },
  {
    value: 'Northwestern University',
    data: '147767'
  },
  {
    value: 'Northeastern Illinois University',
    data: '147776'
  },
  {
    value: 'Oakton Community College',
    data: '147800'
  },
  {
    value: 'Olivet Nazarene University',
    data: '147828'
  },
  {
    value: 'Parkland College',
    data: '147916'
  },
  {
    value: 'Prairie State College',
    data: '148007'
  },
  {
    value: 'Quincy University',
    data: '148131'
  },
  {
    value: 'Vatterott College-Quincy',
    data: '148140'
  },
  {
    value: 'The Illinois Institute of Art-Chicago',
    data: '148177'
  },
  {
    value: 'Rend Lake College',
    data: '148256'
  },
  {
    value: 'Richland Community College',
    data: '148292'
  },
  {
    value: 'Robert Morris University Illinois',
    data: '148335'
  },
  {
    value: 'Rock Valley College',
    data: '148380'
  },
  {
    value: 'Madison Media Institute-Rockford Career College',
    data: '148399'
  },
  {
    value: 'Rockford University',
    data: '148405'
  },
  {
    value: 'Roosevelt University',
    data: '148487'
  },
  {
    value: 'Dominican University',
    data: '148496'
  },
  {
    value: 'University of St Francis',
    data: '148584'
  },
  {
    value: 'Saint Xavier University',
    data: '148627'
  },
  {
    value: 'University of Illinois at Springfield',
    data: '148654'
  },
  {
    value: 'Sauk Valley Community College',
    data: '148672'
  },
  {
    value: 'Shawnee Community College',
    data: '148821'
  },
  {
    value: 'Shimer College',
    data: '148849'
  },
  {
    value: 'Saint Augustine College',
    data: '148876'
  },
  {
    value: 'Southeastern Illinois College',
    data: '148937'
  },
  {
    value: 'Spoon River College',
    data: '148991'
  },
  {
    value: 'Southern Illinois University-Carbondale',
    data: '149222'
  },
  {
    value: 'Southern Illinois University-Edwardsville',
    data: '149231'
  },
  {
    value: 'Taylor Business Institute',
    data: '149310'
  },
  {
    value: 'Telshe Yeshiva-Chicago',
    data: '149329'
  },
  {
    value: 'South Suburban College',
    data: '149365'
  },
  {
    value: 'Trinity Christian College',
    data: '149505'
  },
  {
    value: 'Trinity International University-Illinois',
    data: '149514'
  },
  {
    value: 'Triton College',
    data: '149532'
  },
  {
    value: 'VanderCook College of Music',
    data: '149639'
  },
  {
    value: 'Waubonsee Community College',
    data: '149727'
  },
  {
    value: 'Western Illinois University',
    data: '149772'
  },
  {
    value: 'Wheaton College',
    data: '149781'
  },
  {
    value: 'William Rainey Harper College',
    data: '149842'
  },
  {
    value: 'Ancilla College',
    data: '150048'
  },
  {
    value: 'Anderson University',
    data: '150066'
  },
  {
    value: 'Ball State University',
    data: '150136'
  },
  {
    value: 'Bethel College-Indiana',
    data: '150145'
  },
  {
    value: 'Butler University',
    data: '150163'
  },
  {
    value: 'Calumet College of Saint Joseph',
    data: '150172'
  },
  {
    value: 'College of Court Reporting Inc',
    data: '150251'
  },
  {
    value: 'DePauw University',
    data: '150400'
  },
  {
    value: 'Earlham College',
    data: '150455'
  },
  {
    value: 'University of Evansville',
    data: '150534'
  },
  {
    value: 'Franklin College',
    data: '150604'
  },
  {
    value: 'Goshen College',
    data: '150668'
  },
  {
    value: 'Grace College and Theological Seminary',
    data: '150677'
  },
  {
    value: 'Hanover College',
    data: '150756'
  },
  {
    value: 'Holy Cross College',
    data: '150774'
  },
  {
    value: 'Huntington University',
    data: '150941'
  },
  {
    value: 'Ivy Tech Community College',
    data: '150987'
  },
  {
    value: 'Indiana University-Purdue University-Fort Wayne',
    data: '151102'
  },
  {
    value: 'Indiana University-Purdue University-Indianapolis',
    data: '151111'
  },
  {
    value: 'Harrison College-Indianapolis',
    data: '151166'
  },
  {
    value: 'University of Indianapolis',
    data: '151263'
  },
  {
    value: 'Indiana Institute of Technology',
    data: '151290'
  },
  {
    value: 'University of Southern Indiana',
    data: '151306'
  },
  {
    value: 'Indiana State University',
    data: '151324'
  },
  {
    value: 'Indiana University-Kokomo',
    data: '151333'
  },
  {
    value: 'Indiana University-South Bend',
    data: '151342'
  },
  {
    value: 'Indiana University-Bloomington',
    data: '151351'
  },
  {
    value: 'Indiana University-Northwest',
    data: '151360'
  },
  {
    value: 'Indiana University-Southeast',
    data: '151379'
  },
  {
    value: 'Indiana University-East',
    data: '151388'
  },
  {
    value: 'International Business College-Fort Wayne',
    data: '151458'
  },
  {
    value: 'International Business College-Indianapolis',
    data: '151467'
  },
  {
    value: 'ITT Technical Institute-Nashville',
    data: '151494'
  },
  {
    value: 'ITT Technical Institute-Fort Wayne',
    data: '151500'
  },
  {
    value: 'ITT Technical Institute-Indianapolis',
    data: '151519'
  },
  {
    value: 'J Everett Light Career Center',
    data: '151537'
  },
  {
    value: 'Brown Mackie College-Merrillville',
    data: '151616'
  },
  {
    value: 'Brown Mackie College-Michigan City',
    data: '151625'
  },
  {
    value: 'Manchester University',
    data: '151777'
  },
  {
    value: 'Marian University',
    data: '151786'
  },
  {
    value: 'Indiana Wesleyan University',
    data: '151801'
  },
  {
    value: 'Martin University',
    data: '151810'
  },  {
    value: 'ITT Technical Institute-Madison',
    data: '451981'
  },
  {
    value: 'ITT Technical Institute-High Point',
    data: '451990'
  },
  {
    value: 'The Art Institutes International_Kansas City',
    data: '452018'
  },
  {
    value: 'The Art Institute of Raleigh-Durham',
    data: '452027'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Sacramento',
    data: '452036'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Seattle',
    data: '452045'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Cambridge',
    data: '452054'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Dallas',
    data: '452063'
  },
  {
    value: 'Argosy University-Salt Lake City',
    data: '452090'
  },
  {
    value: 'Escuela De Troqueleria Y Herramentaje',
    data: '452106'
  },
  {
    value: 'Virginia College-Montgomery',
    data: '452115'
  },
  {
    value: 'Fortis Institute-Nashville',
    data: '452124'
  },
  {
    value: 'Beckfield College-Tri-County',
    data: '452373'
  },
  {
    value: 'Pinnacle Career Institute-North Kansas City',
    data: '453109'
  },
  {
    value: 'Strayer University-North Carolina',
    data: '453163'
  },
  {
    value: 'Strayer University-New Jersey',
    data: '453215'
  },
  {
    value: 'National College-Dayton',
    data: '453455'
  },
  {
    value: 'National College-Youngstown',
    data: '453464'
  },
  {
    value: 'National College-Cincinnati',
    data: '453473'
  },
  {
    value: 'National College-Stow',
    data: '453482'
  },
  {
    value: 'Ohio Business College-Hilliard',
    data: '453747'
  },
  {
    value: 'Ohio Center for Broadcasting-Columbus',
    data: '453756'
  },
  {
    value: 'The King\ufffds College',
    data: '454184'
  },
  {
    value: 'Chamberlain College of Nursing-Illinois',
    data: '454227'
  },
  {
    value: 'Chamberlain College of Nursing-Ohio',
    data: '454236'
  },
  {
    value: 'Chamberlain College of Nursing-Arizona',
    data: '454245'
  },
  {
    value: 'Bryan University',
    data: '454458'
  },
  {
    value: 'Ottawa University-Online',
    data: '454582'
  },
  {
    value: 'Broadview University-Orem',
    data: '454591'
  },
  {
    value: 'Institute of Production and Recording',
    data: '454616'
  },
  {
    value: 'Virginia College-Greenville',
    data: '454625'
  },
  {
    value: 'Taft University System',
    data: '454689'
  },
  {
    value: 'Mayfield College',
    data: '454698'
  },
  {
    value: 'International Professional School of Bodywork',
    data: '454740'
  },
  {
    value: 'Aspen University',
    data: '454829'
  },
  {
    value: 'Denver School of Nursing',
    data: '454856'
  },
  {
    value: 'Allied Health Institute',
    data: '454883'
  },
  {
    value: 'College of Western Idaho',
    data: '455114'
  },
  {
    value: 'Yeshiva of Machzikai Hadas',
    data: '455257'
  },
  {
    value: 'Global Health College',
    data: '455390'
  },
  {
    value: 'Fortis Institute-Pensacola',
    data: '455479'
  },
  {
    value: 'Fortis College-Montgomery',
    data: '455488'
  },
  {
    value: 'Woodland Community College',
    data: '455512'
  },
  {
    value: 'Dorsey Business Schools-Farmington Hills',
    data: '455549'
  },
  {
    value: 'Dorsey Business Schools-Roseville Culinary Academy',
    data: '455558'
  },
  {
    value: 'Vatterott College-Appling Farms',
    data: '455567'
  },
  {
    value: 'Minnesota School of Business-Moorhead',
    data: '455585'
  },
  {
    value: 'Brown Mackie College-Boise',
    data: '455600'
  },
  {
    value: 'Brown Mackie College-Tulsa',
    data: '455619'
  },
  {
    value: 'Fortis Institute-Birmingham',
    data: '455628'
  },
  {
    value: 'Miller-Motte College-Greenville',
    data: '455655'
  },
  {
    value: 'Metro Business College-Arnold',
    data: '455673'
  },
  {
    value: 'Virginia College-Jacksonville',
    data: '455716'
  },
  {
    value: 'Providence Christian College',
    data: '455770'
  },
  {
    value: 'South Texas Training Center',
    data: '455974'
  },
  {
    value: 'The Art Institute of Washington-Dulles',
    data: '456010'
  },
  {
    value: 'Virginia College-Charleston',
    data: '456056'
  },
  {
    value: 'Fortis College-Phoenix',
    data: '456180'
  },
  {
    value: 'Miller-Motte College-Raleigh',
    data: '456205'
  },
  {
    value: 'Sanford-Brown College-Online',
    data: '456296'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-St Louis',
    data: '456302'
  },
  {
    value: 'Argosy University-Phoenix Online Division',
    data: '456348'
  },
  {
    value: 'ITT Technical Institute-Madison',
    data: '456393'
  },
  {
    value: 'ITT Technical Institute-Springfield',
    data: '456409'
  },
  {
    value: 'ITT Technical Institute-Huntington',
    data: '456418'
  },
  {
    value: 'ITT Technical Institute-Concord',
    data: '456427'
  },
  {
    value: 'ITT Technical Institute-Fort Myers',
    data: '456436'
  },
  {
    value: 'ITT Technical Institute-Charlotte North',
    data: '456445'
  },
  {
    value: 'Fortis College-Salt Lake City',
    data: '456454'
  },
  {
    value: 'Polytechnic University of Puerto Rico-Miami',
    data: '456481'
  },
  {
    value: 'Polytechnic University of Puerto Rico-Orlando',
    data: '456490'
  },
  {
    value: 'Brown Mackie College-Phoenix',
    data: '456612'
  },
  {
    value: 'Strayer University-West Virginia',
    data: '456621'
  },
  {
    value: 'Minnesota School of Business-Elk River',
    data: '456782'
  },
  {
    value: 'Brown Mackie College-Greenville',
    data: '456791'
  },
  {
    value: 'Globe University-Sioux Falls',
    data: '456807'
  },
  {
    value: 'Globe University-Eau Claire',
    data: '456816'
  },
  {
    value: 'Globe University-Minneapolis',
    data: '456834'
  },
  {
    value: 'L\'Ecole Culinaire-Memphis',
    data: '456940'
  },
  {
    value: 'University of Minnesota-Rochester',
    data: '456959'
  },
  {
    value: 'College of Business and Technology-Cutler Bay',
    data: '456977'
  },
  {
    value: 'National College-Columbus',
    data: '457004'
  },
  {
    value: 'Herzing University-Toledo',
    data: '457022'
  },
  {
    value: 'Chamberlain College of Nursing-Florida',
    data: '457129'
  },
  {
    value: 'Horizon University',
    data: '457226'
  },
  {
    value: 'University of Fort Lauderdale',
    data: '457402'
  },
  {
    value: 'Aviation Institute of Maintenance-Orlando',
    data: '457411'
  },
  {
    value: 'New Hope Christian College-Honolulu',
    data: '457484'
  },
  {
    value: 'D & L Academy of Hair Design',
    data: '457493'
  },
  {
    value: 'City Vision College',
    data: '457697'
  },
  {
    value: 'National Career Institute',
    data: '457767'
  },
  {
    value: 'Portland Actors Conservatory',
    data: '457925'
  },
  {
    value: 'Cardiotech Ultrasound School',
    data: '458034'
  },
  {
    value: 'Bethel College',
    data: '458113'
  },
  {
    value: 'Northwest School of Wooden Boat Building',
    data: '458140'
  },
  {
    value: 'West Coast University-Orange County',
    data: '458210'
  },
  {
    value: 'West Coast University-Ontario',
    data: '458229'
  },
  {
    value: 'Virginia College-Augusta',
    data: '458256'
  },
  {
    value: 'Dorsey Business Schools-Waterford Pontiac',
    data: '458380'
  },
  {
    value: 'Miller-Motte College-Fayetteville',
    data: '458405'
  },
  {
    value: 'Harrison College-Grove City',
    data: '458432'
  },
  {
    value: 'Miller-Motte Technical College-Columbus',
    data: '458441'
  },
  {
    value: 'National University College-Ponce',
    data: '458469'
  },
  {
    value: 'The Art Institute of Virginia Beach',
    data: '458496'
  },
  {
    value: 'Bryant & Stratton College-Bayshore',
    data: '458502'
  },
  {
    value: 'Daymar College-Online',
    data: '458557'
  },
  {
    value: 'Virginia College-Columbia',
    data: '458593'
  },
  {
    value: 'Fortis College-Indianapolis',
    data: '458681'
  },
  {
    value: 'Globe University-Madison East',
    data: '458733'
  },
  {
    value: 'Minnesota School of Business-Lakeville',
    data: '458742'
  },
  {
    value: 'Globe University_Green Bay',
    data: '458751'
  },
  {
    value: 'Globe University_Madison West',
    data: '458760'
  },
  {
    value: 'Globe University_Wausau',
    data: '458779'
  },
  {
    value: 'Strayer University-Georgia',
    data: '458919'
  },
  {
    value: 'Strayer University-Louisiana',
    data: '458937'
  },
  {
    value: 'Strayer University-Mississippi',
    data: '458955'
  },
  {
    value: 'Strayer University-South Carolina',
    data: '458964'
  },
  {
    value: 'Strayer University-Texas',
    data: '458973'
  },
  {
    value: 'The Art Institute of San Antonio',
    data: '458982'
  },
  {
    value: 'Globe University-La Crosse',
    data: '458991'
  },
  {
    value: 'Broadview Entertainment Arts University',
    data: '459091'
  },
  {
    value: 'Bryant & Stratton College-Hampton',
    data: '459107'
  },
  {
    value: 'Unitek College',
    data: '459204'
  },
  {
    value: 'South University_Richmond',
    data: '459259'
  },
  {
    value: 'South University_Virginia Beach',
    data: '459268'
  },
  {
    value: 'Future-Tech Institute',
    data: '459310'
  },
  {
    value: 'Compass College of Cinematic Arts',
    data: '459417'
  },
  {
    value: 'Victory Trade School',
    data: '459435'
  },
  {
    value: 'Starting Points Inc',
    data: '459444'
  },
  {
    value: 'ITT Technical Institute-Merrillville',
    data: '459587'
  },
  {
    value: 'ITT Technical Institute-Tallahassee',
    data: '459596'
  },
  {
    value: 'ITT Technical Institute-Salem',
    data: '459602'
  },
  {
    value: 'ITT Technical Institute-Akron',
    data: '459611'
  },
  {
    value: 'ITT Technical Institute-Corona',
    data: '459639'
  },
  {
    value: 'ITT Technical Institute-Johnson City',
    data: '459648'
  },
  {
    value: 'ITT Technical Institute-DeSoto',
    data: '459657'
  },
  {
    value: 'ITT Technical Institute-North Charleston',
    data: '459666'
  },
  {
    value: 'ITT Technical Institute-Aurora',
    data: '459675'
  },
  {
    value: 'ITT Technical Institute-Culver City',
    data: '459693'
  },
  {
    value: 'ITT Technical Institute-Dearborn',
    data: '459709'
  },
  {
    value: 'ITT Technical Institute-Las Vegas',
    data: '459718'
  },
  {
    value: 'Touro University Worldwide',
    data: '459727'
  },
  {
    value: 'National College-Willoughby Hills',
    data: '459833'
  },
  {
    value: 'Herzing University-Kenosha',
    data: '459842'
  },
  {
    value: 'Herzing University-Brookfield',
    data: '459851'
  },
  {
    value: 'Heald College-Modesto',
    data: '459930'
  },
  {
    value: 'Strayer University-Global Region',
    data: '459994'
  },
  {
    value: 'Fortis College-Columbia',
    data: '460020'
  },
  {
    value: 'Brown Mackie College-Albuquerque',
    data: '460039'
  },
  {
    value: 'Brown Mackie College-St Louis',
    data: '460048'
  },
  {
    value: 'California University of Management and Sciences',
    data: '460075'
  },
  {
    value: 'Ecotech Institute',
    data: '460215'
  },
  {
    value: 'Everest College-Fort Worth South',
    data: '460358'
  },
  {
    value: 'Moreno Valley College',
    data: '460394'
  },
  {
    value: 'Norco College',
    data: '460464'
  },
  {
    value: 'Dorsey Business Schools-Saginaw',
    data: '460482'
  },
  {
    value: 'Brown Mackie College-San Antonio',
    data: '460613'
  },
  {
    value: 'Cortiva Institute-New Jersey',
    data: '460640'
  },
  {
    value: 'ICPR Junior College-Manati',
    data: '460677'
  },
  {
    value: 'Tribeca Flashpoint Media Arts Academy',
    data: '460747'
  },
  {
    value: 'Hawaii Medical College',
    data: '460756'
  },
  {
    value: 'Virginia College-Baton Rouge',
    data: '460774'
  },  {
    value: 'Escuela Hotelera de San Juan',
    data: '444583'
  },
  {
    value: 'Industrial Technical College',
    data: '444671'
  },
  {
    value: 'Jones International University',
    data: '444723'
  },
  {
    value: 'Charlotte Christian College and Theological Seminary',
    data: '444778'
  },
  {
    value: 'The Art Institute of Tucson',
    data: '444927'
  },
  {
    value: 'Mountwest Community and Technical College',
    data: '444954'
  },
  {
    value: 'Centura College-Columbia',
    data: '444972'
  },
  {
    value: 'American InterContinental University-Online',
    data: '445027'
  },
  {
    value: 'Westwood College-Atlanta Midtown',
    data: '445072'
  },
  {
    value: 'ITT Technical Institute-Eden Prairie',
    data: '445081'
  },
  {
    value: 'Virginia College-Mobile',
    data: '445090'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Las Vegas',
    data: '445115'
  },
  {
    value: 'American InterContinental University-Houston',
    data: '445133'
  },
  {
    value: 'University of California-Merced',
    data: '445188'
  },
  {
    value: 'Everest College-Fort Worth',
    data: '445197'
  },
  {
    value: 'Remington College-North Houston Campus',
    data: '445203'
  },
  {
    value: 'Remington College-Nashville Campus',
    data: '445249'
  },
  {
    value: 'Westwood College-Northlake',
    data: '445276'
  },
  {
    value: 'University of Phoenix-New Jersey',
    data: '445300'
  },
  {
    value: 'University of Phoenix-Minnesota',
    data: '445319'
  },
  {
    value: 'University of Phoenix-Kentucky',
    data: '445391'
  },
  {
    value: 'Everest University-Orange Park',
    data: '445434'
  },
  {
    value: 'Everest College-McLean',
    data: '445470'
  },
  {
    value: 'Vatterott College-St Charles',
    data: '445559'
  },
  {
    value: 'Neumont University',
    data: '445692'
  },
  {
    value: 'Johnson & Wales University-Charlotte',
    data: '445708'
  },
  {
    value: 'L\'Ecole Culinaire-St Louis',
    data: '445726'
  },
  {
    value: 'Fortis Institute-Port Saint Lucie',
    data: '445744'
  },
  {
    value: 'Fortis Institute-Miami',
    data: '445753'
  },
  {
    value: 'Aviation Institute of Maintenance-Manassas',
    data: '445762'
  },
  {
    value: 'Minnesota School of Business-Waite Park',
    data: '445920'
  },
  {
    value: 'Minnesota School of Business-Shakopee',
    data: '445939'
  },
  {
    value: 'Ave Maria University',
    data: '446048'
  },
  {
    value: 'ATA Career Education',
    data: '446127'
  },
  {
    value: 'Community Christian College',
    data: '446163'
  },
  {
    value: 'Ecclesia College',
    data: '446233'
  },
  {
    value: 'European Massage Therapy School-Skokie',
    data: '446251'
  },
  {
    value: 'John D Rockefeller IV Career Center',
    data: '446349'
  },
  {
    value: 'Los Angeles College of Music',
    data: '446385'
  },
  {
    value: 'Maple Springs Baptist Bible College and Seminary',
    data: '446394'
  },
  {
    value: 'Centura Institute',
    data: '446446'
  },
  {
    value: 'Rosslyn Training Academy of Cosmetology',
    data: '446516'
  },
  {
    value: 'SAE Institute of Technology-Nashville',
    data: '446525'
  },
  {
    value: 'Universal College of Healing Arts',
    data: '446598'
  },
  {
    value: 'Uta Mesivta of Kiryas Joel',
    data: '446604'
  },
  {
    value: 'Harrisburg University of Science and Technology',
    data: '446640'
  },
  {
    value: 'The Art Institute of Ohio-Cincinnati',
    data: '446668'
  },
  {
    value: 'Stevens-Henager College',
    data: '446677'
  },
  {
    value: 'University of Phoenix-Iowa',
    data: '446729'
  },
  {
    value: 'Blue Ridge Community and Technical College',
    data: '446774'
  },
  {
    value: 'Sanford-Brown College-Las Vegas',
    data: '446792'
  },
  {
    value: 'Sanford-Brown College-Seattle',
    data: '446808'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Miami',
    data: '446835'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Minneapolis',
    data: '446844'
  },
  {
    value: 'Career Technical College-Shreveport',
    data: '446880'
  },
  {
    value: 'ITT Technical Institute-Kansas City',
    data: '446899'
  },
  {
    value: 'ITT Technical Institute-Kennesaw',
    data: '446905'
  },
  {
    value: 'ITT Technical Institute-Owings Mills',
    data: '446914'
  },
  {
    value: 'ITT Technical Institute-Warrensville Heights',
    data: '446923'
  },
  {
    value: 'United States University',
    data: '447050'
  },
  {
    value: 'Westwood College-Arlington Ballston',
    data: '447069'
  },
  {
    value: 'Everest College-Mesa',
    data: '447236'
  },
  {
    value: 'AmeriTech College-Draper',
    data: '447263'
  },
  {
    value: 'Argosy University-Los Angeles',
    data: '447272'
  },
  {
    value: 'Brown Mackie College-Miami',
    data: '447290'
  },
  {
    value: 'Fortis College-Largo',
    data: '447360'
  },
  {
    value: 'Eagle Gate College-Layton',
    data: '447421'
  },
  {
    value: 'Expression College for Digital Arts',
    data: '447458'
  },
  {
    value: 'Daymar College-Bellevue',
    data: '447476'
  },
  {
    value: 'New River Community and Technical College',
    data: '447582'
  },
  {
    value: 'Eagle Gate College-Salt Lake City',
    data: '447625'
  },
  {
    value: 'Minnesota School of Business-Rochester',
    data: '447670'
  },
  {
    value: 'Georgia Gwinnett College',
    data: '447689'
  },
  {
    value: 'Aviator College of Aeronautical Science and Technology',
    data: '447847'
  },
  {
    value: 'ATA College',
    data: '447935'
  },
  {
    value: 'SUM Bible College and Theological Seminary',
    data: '447953'
  },
  {
    value: 'Doane College-Lincoln Grand Island and Master',
    data: '448284'
  },
  {
    value: 'Shorter University-College of Adult & Professional Programs',
    data: '448309'
  },
  {
    value: 'The Art Institute of Indianapolis',
    data: '448345'
  },
  {
    value: 'Eastern International College-Belleville',
    data: '448354'
  },
  {
    value: 'ITT Technical Institute-Charlotte South',
    data: '448442'
  },
  {
    value: 'ITT Technical Institute-Clovis',
    data: '448451'
  },
  {
    value: 'ITT Technical Institute-Dunmore',
    data: '448460'
  },
  {
    value: 'ITT Technical Institute-Swartz Creek',
    data: '448479'
  },
  {
    value: 'ITT Technical Institute-Lexington',
    data: '448488'
  },
  {
    value: 'ITT Technical Institute-Maumee',
    data: '448497'
  },
  {
    value: 'ITT Technical Institute-Oklahoma City',
    data: '448503'
  },
  {
    value: 'ITT Technical Institute-Tulsa',
    data: '448512'
  },
  {
    value: 'University of Phoenix-South Carolina',
    data: '448567'
  },
  {
    value: 'The Art Institute of California-Argosy University Inland Empire',
    data: '448576'
  },
  {
    value: 'National American University-Zona Rosa',
    data: '448585'
  },
  {
    value: 'West Hills College-Lemoore',
    data: '448594'
  },
  {
    value: 'Stautzenberger College-Brecksville',
    data: '448600'
  },
  {
    value: 'Westwood College-Annandale',
    data: '448628'
  },
  {
    value: 'Miller-Motte Technical College-Madison',
    data: '448664'
  },
  {
    value: 'Rasmussen College-Illinois',
    data: '448673'
  },
  {
    value: 'Argosy University-Denver',
    data: '448734'
  },
  {
    value: 'CollegeAmerica-Colorado Springs',
    data: '448752'
  },
  {
    value: 'CollegeAmerica-Fort Collins',
    data: '448761'
  },
  {
    value: 'University of South Florida-St Petersburg',
    data: '448840'
  },
  {
    value: 'Triangle Tech Inc-Bethlehem',
    data: '448859'
  },
  {
    value: 'Arizona State University-Downtown Phoenix',
    data: '448886'
  },
  {
    value: 'The Art Institute of Tennessee-Nashville',
    data: '449010'
  },
  {
    value: 'Strayer University-Florida',
    data: '449038'
  },
  {
    value: 'College of Business and Technology-Flagler',
    data: '449083'
  },
  {
    value: 'College of Business and Technology-Hialeah',
    data: '449092'
  },
  {
    value: 'Miller-Motte College-Cary',
    data: '449117'
  },
  {
    value: 'Miami-Jacobs Career College-Springboro',
    data: '449126'
  },
  {
    value: 'Dewey University-Juana D\ufffdaz',
    data: '449135'
  },
  {
    value: 'Dewey University-Fajardo',
    data: '449144'
  },
  {
    value: 'Dewey University-Arroyo',
    data: '449153'
  },
  {
    value: 'Daymar College-Madisonville',
    data: '449302'
  },
  {
    value: 'American Public University System',
    data: '449339'
  },
  {
    value: 'Huntsville Bible College',
    data: '449348'
  },
  {
    value: 'Taylor College',
    data: '449524'
  },
  {
    value: 'Louisiana Culinary Institute',
    data: '449612'
  },
  {
    value: 'Bais Medrash Toras Chesed',
    data: '449658'
  },
  {
    value: 'Dayton School of Medical Massage',
    data: '449700'
  },
  {
    value: 'Visible Music College',
    data: '449764'
  },
  {
    value: 'University of the West',
    data: '449870'
  },
  {
    value: 'South University-Tampa',
    data: '449898'
  },
  {
    value: 'Averett University-Non-Traditional Programs',
    data: '449931'
  },
  {
    value: 'Miami-Jacobs Career College-Troy',
    data: '450003'
  },
  {
    value: 'The Art Institute of Salt Lake City',
    data: '450049'
  },
  {
    value: 'Fortis College-Columbus',
    data: '450058'
  },
  {
    value: 'Fortis College-Cincinnati',
    data: '450067'
  },
  {
    value: 'The Art Institute of Charleston',
    data: '450085'
  },
  {
    value: 'The Art Institute of California-Argosy University Sacramento',
    data: '450094'
  },
  {
    value: 'Virginia College-Biloxi',
    data: '450191'
  },
  {
    value: 'ITT Technical Institute-Baton Rouge',
    data: '450216'
  },
  {
    value: 'ITT Technical Institute-Columbia',
    data: '450225'
  },
  {
    value: 'ITT Technical Institute-Wichita',
    data: '450234'
  },
  {
    value: 'ITT Technical Institute-Atlanta',
    data: '450243'
  },
  {
    value: 'ITT Technical Institute-Mobile',
    data: '450252'
  },
  {
    value: 'ITT Technical Institute-Chattanooga',
    data: '450261'
  },
  {
    value: 'ITT Technical Institute-South Bend',
    data: '450270'
  },
  {
    value: 'Virginia College-School of Business and Health-Chattanooga',
    data: '450289'
  },
  {
    value: 'Strayer University-Delaware',
    data: '450298'
  },
  {
    value: 'Strayer University-Alabama',
    data: '450377'
  },
  {
    value: 'Broadview University-Layton',
    data: '450429'
  },
  {
    value: 'University of Phoenix-Alabama',
    data: '450456'
  },
  {
    value: 'Sanford-Brown College-San Antonio',
    data: '450465'
  },
  {
    value: 'University of Phoenix-Washington DC',
    data: '450483'
  },
  {
    value: 'Argosy University-Inland Empire',
    data: '450526'
  },
  {
    value: 'Argosy University-Nashville',
    data: '450535'
  },
  {
    value: 'Argosy University-San Diego',
    data: '450544'
  },
  {
    value: 'Rasmussen College-Wisconsin',
    data: '450571'
  },
  {
    value: 'Columbia Southern University',
    data: '450933'
  },
  {
    value: 'Trident University International',
    data: '450979'
  },
  {
    value: 'Digital Media Arts College',
    data: '451060'
  },
  {
    value: 'Yeshivas Be\'er Yitzchok',
    data: '451370'
  },
  {
    value: 'Yeshiva Toras Chaim',
    data: '451398'
  },
  {
    value: 'Talmudical Seminary of Bobov',
    data: '451404'
  },
  {
    value: 'New York Methodist Hospital Center for Allied Health Education',
    data: '451413'
  },
  {
    value: 'Southwest University at El Paso',
    data: '451556'
  },
  {
    value: 'Inland Massage Institute',
    data: '451635'
  },
  {
    value: 'The Art Institute of Pittsburgh-Online Division',
    data: '451662'
  },
  {
    value: 'University of South Florida-Sarasota-Manatee',
    data: '451671'
  },
  {
    value: 'Brown Mackie College-Indianapolis',
    data: '451699'
  },
  {
    value: 'CollegeAmerica-Cheyenne',
    data: '451705'
  },
  {
    value: 'Centro de Estudios Multidisciplinarios-Bayamon',
    data: '451741'
  },
  {
    value: 'Bryant & Stratton College-Wauwatosa',
    data: '451750'
  },
  {
    value: 'Minnesota School of Business-Blaine',
    data: '451769'
  },
  {
    value: 'The Art Institute of Michigan',
    data: '451796'
  },
  {
    value: 'The Art Institute of Austin',
    data: '451820'
  },
  {
    value: 'The Art Institute of California-Argosy University-Silicon Valley',
    data: '451848'
  },
  {
    value: 'Remington College-Houston Southeast Campus',
    data: '451857'
  },
  {
    value: 'Remington College-Shreveport Campus',
    data: '451866'
  },
  {
    value: 'National American University-Austin',
    data: '451875'
  },
  {
    value: 'National American University-Wichita',
    data: '451884'
  },
  {
    value: 'Fortis College-Landover',
    data: '451909'
  },
  {
    value: 'ITT Technical Institute-Cary',
    data: '451936'
  },
  {
    value: 'ITT Technical Institute-Madison',
    data: '451945'
  },
  {
    value: 'ITT Technical Institute-Clive',
    data: '451954'
  },
  {
    value: 'ITT Technical Institute-Columbus',
    data: '451963'
  },
  {
    value: 'ITT Technical Institute-Phoenix',
    data: '451972'
  },  {
    value: 'Northwest Vista College',
    data: '420398'
  },
  {
    value: 'ITT Technical Institute-Getzville',
    data: '420404'
  },
  {
    value: 'Oconee Fall Line Technical College',
    data: '420431'
  },
  {
    value: 'York County Community College',
    data: '420440'
  },
  {
    value: 'Sanford-Brown College-Atlanta',
    data: '420495'
  },
  {
    value: 'Arkansas State University-Mountain Home',
    data: '420538'
  },
  {
    value: 'Columbia Gorge Community College',
    data: '420556'
  },
  {
    value: 'Arizona State University-Polytechnic',
    data: '420574'
  },
  {
    value: 'Tillamook Bay Community College',
    data: '420723'
  },
  {
    value: 'Argosy University-Schaumburg',
    data: '420866'
  },
  {
    value: 'Brown Mackie College-Hopkinsville',
    data: '421513'
  },
  {
    value: 'Arizona College-Glendale',
    data: '421708'
  },
  {
    value: 'Living Arts College',
    data: '421832'
  },
  {
    value: 'New York Conservatory for Dramatic Arts',
    data: '421841'
  },
  {
    value: 'Eastern International College-Jersey City',
    data: '421878'
  },
  {
    value: 'Oregon Coast Community College',
    data: '423652'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Pasadena',
    data: '423980'
  },
  {
    value: 'Mildred Elley-Pittsfield Campus',
    data: '425986'
  },
  {
    value: 'Embry-Riddle Aeronautical University-Worldwide',
    data: '426314'
  },
  {
    value: 'ITT Technical Institute-Webster',
    data: '427663'
  },
  {
    value: 'Aviation Institute of Maintenance-Chesapeake',
    data: '427973'
  },
  {
    value: 'Centura College-Richmond Main',
    data: '427982'
  },
  {
    value: 'Miami Ad School-Wynwood',
    data: '428000'
  },
  {
    value: 'Southeastern College-Greenacres',
    data: '428170'
  },
  {
    value: 'Ottawa University-Milwaukee',
    data: '428259'
  },
  {
    value: 'Argosy University-Tampa',
    data: '428268'
  },
  {
    value: 'The Illinois Institute of Art-Schaumburg',
    data: '428286'
  },
  {
    value: 'Cambria-Rowe Business College-Indiana',
    data: '428329'
  },
  {
    value: 'Klamath Community College',
    data: '428392'
  },
  {
    value: 'The Art Institute of Phoenix',
    data: '428444'
  },
  {
    value: 'Urban College of Boston',
    data: '429128'
  },
  {
    value: 'ITT Technical Institute-Henderson',
    data: '429599'
  },
  {
    value: 'Colorado Technical University-Greenwood Village',
    data: '430087'
  },
  {
    value: 'Heald College-Portland',
    data: '430148'
  },
  {
    value: 'Golf Academy of America-Altamonte Springs',
    data: '430157'
  },
  {
    value: 'Golf Academy of America-Phoenix',
    data: '430166'
  },
  {
    value: 'Strayer University-Maryland',
    data: '430184'
  },
  {
    value: 'ITT Technical Institute-Hialeah',
    data: '430263'
  },
  {
    value: 'ITT Technical Institute-Harrisburg',
    data: '430351'
  },
  {
    value: 'ITT Technical Institute-Tarentum',
    data: '430360'
  },
  {
    value: 'ITT Technical Institute-Norwood',
    data: '430379'
  },
  {
    value: 'ITT Technical Institute-Strongsville',
    data: '430388'
  },
  {
    value: 'The Creative Center',
    data: '430485'
  },
  {
    value: 'San Juan Bautista School of Medicine',
    data: '430670'
  },
  {
    value: 'New Hampshire Institute of Art',
    data: '430810'
  },
  {
    value: 'Cayuga Onondaga BOCES-Practical Nursing Program',
    data: '430883'
  },
  {
    value: 'Colegio de Cinematograf\ufffda Artes y Television',
    data: '430935'
  },
  {
    value: 'Escuela Tecnica de Electricidad',
    data: '431123'
  },
  {
    value: 'Dewey University-Hato Rey',
    data: '431309'
  },
  {
    value: 'Mercy Hospital School of Nursing',
    data: '431600'
  },
  {
    value: 'Trinity College of Puerto Rico',
    data: '431929'
  },
  {
    value: 'Yeshiva of the Telshe Alumni',
    data: '431983'
  },
  {
    value: 'University of Phoenix-Washington',
    data: '432223'
  },
  {
    value: 'University of Phoenix-Oregon',
    data: '432241'
  },
  {
    value: 'Platt College-Ontario',
    data: '432384'
  },
  {
    value: 'Delaware College of Art and Design',
    data: '432524'
  },
  {
    value: 'The Art Institute of California-Argosy University Los Angeles',
    data: '432533'
  },
  {
    value: 'American University of Health Sciences',
    data: '433004'
  },
  {
    value: 'Carolinas College of Health Sciences',
    data: '433174'
  },
  {
    value: 'Western Governors University',
    data: '433387'
  },
  {
    value: 'Santa Barbara Business College-Ventura',
    data: '433420'
  },
  {
    value: 'Herzing University-Kenner',
    data: '433536'
  },
  {
    value: 'Spencerian College-Lexington',
    data: '433563'
  },
  {
    value: 'Florida Gulf Coast University',
    data: '433660'
  },
  {
    value: 'Little Priest Tribal College',
    data: '434016'
  },
  {
    value: 'ITT Technical Institute-Richardson',
    data: '434052'
  },
  {
    value: 'South Louisiana Community College',
    data: '434061'
  },
  {
    value: 'Charter College-Canyon Country',
    data: '434317'
  },
  {
    value: 'Michigan Jewish Institute',
    data: '434414'
  },
  {
    value: 'Myotherapy Institute',
    data: '434432'
  },
  {
    value: 'City College-Miami',
    data: '434539'
  },
  {
    value: 'ITT Technical Institute-Arnold',
    data: '434548'
  },
  {
    value: 'ITT Technical Institute-Oak Brook',
    data: '434557'
  },
  {
    value: 'ITT Technical Institute-Albany',
    data: '434566'
  },
  {
    value: 'ITT Technical Institute-Liverpool',
    data: '434575'
  },
  {
    value: 'Ilisagvik College',
    data: '434584'
  },
  {
    value: 'The Community College of Baltimore County',
    data: '434672'
  },
  {
    value: 'Golf Academy of America-Myrtle Beach',
    data: '434690'
  },
  {
    value: 'White Earth Tribal and Community College',
    data: '434751'
  },
  {
    value: 'Centura College-North Charleston',
    data: '434812'
  },
  {
    value: 'Dewey University-Carolina',
    data: '434900'
  },
  {
    value: 'Yeshiva College of the Nations Capital',
    data: '434937'
  },
  {
    value: 'University of Phoenix-Maryland',
    data: '434973'
  },
  {
    value: 'Argosy University-Phoenix',
    data: '436094'
  },
  {
    value: 'Vatterott College-St Joseph',
    data: '436182'
  },
  {
    value: 'Vatterott College-Sunset Hills',
    data: '436191'
  },
  {
    value: 'River Parishes Community College',
    data: '436304'
  },
  {
    value: 'Argosy University-Orange County',
    data: '436438'
  },
  {
    value: 'Dewey University-Bayamon',
    data: '436465'
  },
  {
    value: 'National American University-Bloomington',
    data: '436483'
  },
  {
    value: 'Century College',
    data: '436553'
  },
  {
    value: 'FINE Mortuary College',
    data: '436599'
  },
  {
    value: 'International Baptist College and Seminary',
    data: '436614'
  },
  {
    value: 'University of Connecticut-Tri-Campus',
    data: '436818'
  },
  {
    value: 'University of Connecticut-Avery Point',
    data: '436827'
  },
  {
    value: 'University of Connecticut-Stamford',
    data: '436836'
  },
  {
    value: 'ITT Technical Institute-Saint Rose',
    data: '437042'
  },
  {
    value: 'ITT Technical Institute-Richmond',
    data: '437051'
  },
  {
    value: 'Vatterott College-Oklahoma City',
    data: '437060'
  },
  {
    value: 'University of Management and Technology',
    data: '437097'
  },
  {
    value: 'Baton Rouge Community College',
    data: '437103'
  },
  {
    value: 'ITT Technical Institute-Lathrop',
    data: '437219'
  },
  {
    value: 'The English Center',
    data: '437653'
  },
  {
    value: 'Professional Golfers Career College',
    data: '437750'
  },
  {
    value: 'Westwood College-Anaheim',
    data: '437848'
  },
  {
    value: 'Stevens-Henager College',
    data: '438151'
  },
  {
    value: 'McCann School of Business & Technology',
    data: '438212'
  },
  {
    value: 'Stratford University',
    data: '438498'
  },
  {
    value: 'American InterContinental University-Atlanta',
    data: '438586'
  },
  {
    value: 'Everest College-Chesapeake',
    data: '438647'
  },
  {
    value: 'Eastern West Virginia Community and Technical College',
    data: '438708'
  },
  {
    value: 'Aviation Institute of Maintenance-Indianapolis',
    data: '438735'
  },
  {
    value: 'Remington College-Little Rock Campus',
    data: '438869'
  },
  {
    value: 'Everest University-Jacksonville',
    data: '438902'
  },
  {
    value: 'Argosy University-Seattle',
    data: '439057'
  },
  {
    value: 'ITT Technical Institute-Wilmington',
    data: '439136'
  },
  {
    value: 'Pierce College-Puyallup',
    data: '439145'
  },
  {
    value: 'Cascadia College',
    data: '439190'
  },
  {
    value: 'Johnson & Wales University-Denver',
    data: '439288'
  },
  {
    value: 'University of Phoenix-Ohio',
    data: '439297'
  },
  {
    value: 'Du Bois Business College-Huntingdon',
    data: '439303'
  },
  {
    value: 'Du Bois Business College-Oil City',
    data: '439312'
  },
  {
    value: 'ATS Institute of Technology',
    data: '439455'
  },
  {
    value: 'Crossroads Bible College',
    data: '439613'
  },
  {
    value: 'King\'s University',
    data: '439701'
  },
  {
    value: 'Fortis College-Baton Rouge',
    data: '439738'
  },
  {
    value: 'Fortis College-Orange Park',
    data: '439792'
  },
  {
    value: 'Pacific Islands University',
    data: '439862'
  },
  {
    value: 'Rosedale Bible College',
    data: '439899'
  },
  {
    value: 'AM College LLC',
    data: '439969'
  },
  {
    value: 'Aviation Institute of Maintenance-Atlanta',
    data: '440059'
  },
  {
    value: 'Westwood College-River Oaks',
    data: '440147'
  },
  {
    value: 'ITT Technical Institute-Green Bay',
    data: '440165'
  },
  {
    value: 'Remington College-Baton Rouge Campus',
    data: '440271'
  },
  {
    value: 'Everest College-Ontario Metro',
    data: '440299'
  },
  {
    value: 'The Art Institute of Washington',
    data: '440341'
  },
  {
    value: 'Arkansas State University-Newport',
    data: '440402'
  },
  {
    value: 'University of Phoenix-Massachusetts',
    data: '440420'
  },
  {
    value: 'University of Phoenix-Wisconsin',
    data: '440457'
  },
  {
    value: 'University of Phoenix-Idaho',
    data: '440466'
  },
  {
    value: 'Westwood College-Inland Empire',
    data: '440484'
  },
  {
    value: 'ITT Technical Institute-Levittown',
    data: '440642'
  },
  {
    value: 'Atenas College',
    data: '440651'
  },
  {
    value: 'National American University-Ellsworth AFB Extension',
    data: '440749'
  },
  {
    value: 'National American University-Albuquerque West',
    data: '440758'
  },
  {
    value: 'National American University-Brooklyn Center',
    data: '440767'
  },
  {
    value: 'Pillar College',
    data: '440794'
  },
  {
    value: 'Miami Ad School-Minneapolis',
    data: '440800'
  },
  {
    value: 'Miami Ad School-San Francisco',
    data: '440819'
  },
  {
    value: 'Vatterott College-Dividend',
    data: '440873'
  },
  {
    value: 'Vatterott College-Tulsa',
    data: '440882'
  },
  {
    value: 'Vatterott College-Wichita',
    data: '440891'
  },
  {
    value: 'Sanford-Brown College-Orlando',
    data: '440925'
  },
  {
    value: 'Miller-Motte Technical College-Charleston',
    data: '441025'
  },
  {
    value: 'Saginaw Chippewa Tribal College',
    data: '441070'
  },
  {
    value: 'Miami-Jacobs Career College-Sharonville',
    data: '441201'
  },
  {
    value: 'West Coast Ultrasound Institute',
    data: '441229'
  },
  {
    value: 'Texas County Technical College',
    data: '441487'
  },
  {
    value: 'Aviation Institute of Maintenance-Kansas City',
    data: '441496'
  },
  {
    value: 'Apex School of Theology',
    data: '441511'
  },
  {
    value: 'Yeshiva Shaarei Torah of Rockland',
    data: '441609'
  },
  {
    value: 'Universidad Pentecostal Mizpa',
    data: '441690'
  },
  {
    value: 'Caribbean Forensic and Technical College',
    data: '441706'
  },
  {
    value: 'Kussad Institute of Court Reporting',
    data: '441751'
  },
  {
    value: 'Lamar Institute of Technology',
    data: '441760'
  },
  {
    value: 'Aviation Institute of Maintenance-Dallas',
    data: '441788'
  },
  {
    value: 'Nevada State College',
    data: '441900'
  },
  {
    value: 'Virginia College-Jackson',
    data: '441919'
  },
  {
    value: 'Virginia College-Austin',
    data: '441928'
  },
  {
    value: 'California State University-Channel Islands',
    data: '441937'
  },
  {
    value: 'ITT Technical Institute-Springfield',
    data: '441955'
  },
  {
    value: 'ITT Technical Institute-Chantilly',
    data: '441964'
  },
  {
    value: 'The Art Institute of California-Argosy University Orange County',
    data: '441973'
  },
  {
    value: 'Franklin W Olin College of Engineering',
    data: '441982'
  },
  {
    value: 'University of Phoenix-Illinois',
    data: '442161'
  },
  {
    value: 'Birthwise Midwifery School',
    data: '442213'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Orlando',
    data: '442231'
  },
  {
    value: 'ITT Technical Institute-Canton',
    data: '442338'
  },
  {
    value: 'ITT Technical Institute-Plymouth Meeting',
    data: '442347'
  },
  {
    value: 'Pennsylvania College of Health Sciences',
    data: '442356'
  },
  {
    value: 'West Virginia Junior College-Bridgeport',
    data: '442383'
  },
  {
    value: 'Vatterott College-Cleveland',
    data: '442408'
  },
  {
    value: 'Interactive College of Technology-Gainesville',
    data: '442435'
  },
  {
    value: 'Alaska Christian College',
    data: '442523'
  },
  {
    value: 'Grantham University',
    data: '442569'
  },
  {
    value: 'Minnesota School of Business-Plymouth',
    data: '442578'
  },
  {
    value: 'University of the Potomac-VA Campus',
    data: '442639'
  },
  {
    value: 'National American University-Overland Park',
    data: '442718'
  },
  {
    value: 'Fortis Institute',
    data: '442745'
  },
  {
    value: 'Tohono O\'Odham Community College',
    data: '442781'
  },
  {
    value: 'Everest College-Dallas',
    data: '442790'
  },
  {
    value: 'Pacific College of Oriental Medicine-Chicago',
    data: '442842'
  },
  {
    value: 'Ottawa University-Jeffersonville',
    data: '442897'
  },
  {
    value: 'Faith Evangelical College & Seminary',
    data: '443049'
  },
  {
    value: 'Family of Faith College',
    data: '443058'
  },
  {
    value: 'Southeastern College-Jacksonville',
    data: '443270'
  },
  {
    value: 'West Coast University-Los Angeles',
    data: '443331'
  },
  {
    value: 'Williamson Christian College',
    data: '443340'
  },
  {
    value: 'Triangle Tech Inc-Sunbury',
    data: '443377'
  },
  {
    value: 'DigiPen Institute of Technology',
    data: '443410'
  },
  {
    value: 'Fortis Institute-Fort Lauderdale',
    data: '443438'
  },
  {
    value: 'Pierpont Community and Technical College',
    data: '443492'
  },
  {
    value: 'ITT Technical Institute-Duluth',
    data: '443526'
  },
  {
    value: 'ITT Technical Institute-Hilliard',
    data: '443535'
  },
  {
    value: 'University of Phoenix-Indiana',
    data: '443544'
  },
  {
    value: 'Dewey University-Hato Rey',
    data: '443562'
  },
  {
    value: 'American College of Healthcare Sciences',
    data: '443599'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Atlanta',
    data: '443623'
  },
  {
    value: 'Miller-Motte Technical College-Chattanooga',
    data: '443650'
  },
  {
    value: 'Westwood College-Chicago Loop',
    data: '443687'
  },
  {
    value: 'Everest Institute-Norcross',
    data: '443748'
  },
  {
    value: 'Strayer University-Tennessee',
    data: '443766'
  },
  {
    value: 'Strayer University-Pennsylvania',
    data: '443784'
  },
  {
    value: 'Everest College-Arlington',
    data: '443854'
  },
  {
    value: 'Charlie\'s Guard-Detective Bureau and Academy Inc',
    data: '443951'
  },
  {
    value: 'Everest College-Tacoma',
    data: '444024'
  },
  {
    value: 'National University College-Rio Grande',
    data: '444042'
  },
  {
    value: 'Colorado Technical University-Online',
    data: '444158'
  },
  {
    value: 'Baker College of Allen Park',
    data: '444167'
  },
  {
    value: 'Bayamon Community College',
    data: '444194'
  },
  {
    value: 'Folsom Lake College',
    data: '444219'
  },
  {
    value: 'Daymar Institute-Murfreesboro',
    data: '444255'
  },
  {
    value: 'Baptist University of the Americas',
    data: '444398'
  },
  {
    value: 'Beis Medrash Heichal Dovid',
    data: '444413'
  },
  {
    value: 'Court Reporting Institute of Louisiana',
    data: '444547'
  },
  {
    value: 'Culinary Institute Inc',
    data: '444565'
  },  {
    value: 'Stanford University',
    data: '243744'
  },
  {
    value: 'Purdue University-Main Campus',
    data: '243780'
  },
  {
    value: 'Parker University',
    data: '243823'
  },
  {
    value: 'EDP Univeristy of Puerto Rico Inc-San Juan',
    data: '243832'
  },
  {
    value: 'ICPR Junior College-General Institutional',
    data: '243841'
  },
  {
    value: 'ITT Technical Institute-Sylmar',
    data: '244011'
  },
  {
    value: 'ITT Technical Institute-Westminster',
    data: '244154'
  },
  {
    value: 'Widener University-Delaware Campus',
    data: '244190'
  },
  {
    value: 'City College-Fort Lauderdale',
    data: '244233'
  },
  {
    value: 'Georgia Perimeter College',
    data: '244437'
  },
  {
    value: 'Georgia Piedmont Technical College',
    data: '244446'
  },
  {
    value: 'Vatterott College-Berkeley',
    data: '245342'
  },
  {
    value: 'Metro Business College-Rolla',
    data: '245421'
  },
  {
    value: 'Metro Business College-Jefferson City',
    data: '245430'
  },
  {
    value: 'Warren County Community College',
    data: '245625'
  },
  {
    value: 'St. John\'s College',
    data: '245652'
  },
  {
    value: 'Bais Medrash Elyon',
    data: '245777'
  },
  {
    value: 'Mid-America Christian University',
    data: '245953'
  },
  {
    value: 'Career Point College',
    data: '246008'
  },
  {
    value: 'Palo Alto College',
    data: '246354'
  },
  {
    value: 'Unification Theological Seminary',
    data: '246789'
  },
  {
    value: 'Athens Technical College',
    data: '246813'
  },
  {
    value: 'Beckfield College-Florence',
    data: '247065'
  },
  {
    value: 'Dorsey Business Schools-Wayne',
    data: '247153'
  },
  {
    value: 'Sussex County Community College',
    data: '247603'
  },
  {
    value: 'Landmark College',
    data: '247649'
  },
  {
    value: 'National American University-Independence',
    data: '247700'
  },
  {
    value: 'Yeshiva Gedolah of Greater Detroit',
    data: '247773'
  },
  {
    value: 'Collin County Community College District',
    data: '247834'
  },
  {
    value: 'Owensboro Community and Technical College',
    data: '247940'
  },
  {
    value: 'Fashion Institute of Design & Merchandising-San Diego',
    data: '248846'
  },
  {
    value: 'National American University-Albuquerque',
    data: '248882'
  },
  {
    value: 'ECPI University',
    data: '248934'
  },
  {
    value: 'Fortis Institute-Forty Fort',
    data: '249609'
  },
  {
    value: 'Laurel Business Institute',
    data: '250027'
  },
  {
    value: 'Aviation Institute of Maintenance-Philadelphia',
    data: '250285'
  },
  {
    value: 'Dorsey Business Schools-Roseville',
    data: '250744'
  },
  {
    value: 'ITT Technical Institute-Newburgh',
    data: '251251'
  },
  {
    value: 'Southern Union State Community College',
    data: '251260'
  },
  {
    value: 'South University-Columbia',
    data: '251312'
  },
  {
    value: 'Everest University-Brandon',
    data: '260293'
  },
  {
    value: 'Lac Courte Oreilles Ojibwa Community College',
    data: '260372'
  },
  {
    value: 'Platt College-Los Angeles',
    data: '260789'
  },
  {
    value: 'Platt College-Aurora',
    data: '260813'
  },
  {
    value: 'Kaplan University-Davenport Campus',
    data: '260901'
  },
  {
    value: 'Kaplan University-Cedar Falls Campus',
    data: '260910'
  },
  {
    value: 'Christian Life College',
    data: '260947'
  },
  {
    value: 'ITT Technical Institute-Arlington Heights',
    data: '260974'
  },
  {
    value: 'Northwestern College-Southwestern Campus',
    data: '260992'
  },
  {
    value: 'ITT Technical Institute-Troy',
    data: '261472'
  },
  {
    value: 'Pennsylvania Institute of Health and Technology',
    data: '261861'
  },
  {
    value: 'Skyline College-Roanoke',
    data: '261931'
  },
  {
    value: 'St Charles Community College',
    data: '262031'
  },
  {
    value: 'Brandman University',
    data: '262086'
  },
  {
    value: 'New College of Florida',
    data: '262129'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Scottsdale',
    data: '262332'
  },
  {
    value: 'Heald College-Roseville',
    data: '363387'
  },
  {
    value: 'Daymar College-Bowling Green',
    data: '363439'
  },
  {
    value: 'Everest College-Everett',
    data: '363590'
  },
  {
    value: 'Luna Community College',
    data: '363633'
  },
  {
    value: 'Yeshivah Gedolah Rabbinical College',
    data: '363712'
  },
  {
    value: 'Caribbean University-Ponce',
    data: '363907'
  },
  {
    value: 'Caribbean University-Vega Baja',
    data: '363916'
  },
  {
    value: 'University of Advancing Technology',
    data: '363934'
  },
  {
    value: 'Paradise Valley Community College',
    data: '364016'
  },
  {
    value: 'Chandler-Gilbert Community College',
    data: '364025'
  },
  {
    value: 'Madison Media Institute',
    data: '364168'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Austin',
    data: '364973'
  },
  {
    value: 'The Art Institute of New York City',
    data: '365055'
  },
  {
    value: 'Vista College',
    data: '365204'
  },
  {
    value: 'South Florida Bible College and Theological Seminary',
    data: '366003'
  },
  {
    value: 'Pennsylvania College of Technology',
    data: '366252'
  },
  {
    value: 'Commonwealth Institute of Funeral Service',
    data: '366261'
  },
  {
    value: 'Stone Child College',
    data: '366340'
  },
  {
    value: 'Suffolk County Community College',
    data: '366395'
  },
  {
    value: 'Las Positas College',
    data: '366401'
  },
  {
    value: 'Ogeechee Technical College',
    data: '366465'
  },
  {
    value: 'Remington College-Mobile Campus',
    data: '366535'
  },
  {
    value: 'Everest College-Aurora',
    data: '366544'
  },
  {
    value: 'Southern Technical College',
    data: '366553'
  },
  {
    value: 'ITT Technical Institute-Norwood',
    data: '366580'
  },
  {
    value: 'ITT Technical Institute-Knoxville',
    data: '366650'
  },
  {
    value: 'ITT Technical Institute-Austin',
    data: '366678'
  },
  {
    value: 'ITT Technical Institute-Houston North',
    data: '366696'
  },
  {
    value: 'California State University-San Marcos',
    data: '366711'
  },
  {
    value: 'Argosy University-Hawaii',
    data: '366748'
  },
  {
    value: 'Kaplan University-Des Moines Campus',
    data: '367024'
  },
  {
    value: 'Pinnacle Career Institute-Lawrence',
    data: '367097'
  },
  {
    value: 'Interactive College of Technology-Newport',
    data: '367103'
  },
  {
    value: 'Career Technical College-Monroe',
    data: '367112'
  },
  {
    value: 'McNally Smith College of Music',
    data: '367194'
  },
  {
    value: 'NorthWest Arkansas Community College',
    data: '367459'
  },
  {
    value: 'Colorado Heights University',
    data: '367839'
  },
  {
    value: 'Hodges University',
    data: '367884'
  },
  {
    value: 'Everest University-Lakeland',
    data: '367909'
  },
  {
    value: 'Argosy University-Atlanta',
    data: '367936'
  },
  {
    value: 'Daymar Institute-Clarksville',
    data: '368443'
  },
  {
    value: 'Nossi College of Art',
    data: '368452'
  },
  {
    value: 'ITT Technical Institute-Norfolk',
    data: '368601'
  },
  {
    value: 'Everest College-West Los Angeles',
    data: '368805'
  },
  {
    value: 'Southeastern Technical College',
    data: '368911'
  },
  {
    value: 'ITT Technical Institute-Albuquerque',
    data: '369084'
  },
  {
    value: 'D G Erwin Technical Center',
    data: '369419'
  },
  {
    value: 'Bryan University',
    data: '369516'
  },
  {
    value: 'Miami-Jacobs Career College-Columbus',
    data: '369862'
  },
  {
    value: 'Bryant & Stratton College-Eastlake',
    data: '369905'
  },
  {
    value: 'Fortis College-Mobile',
    data: '371052'
  },
  {
    value: 'Heald College-Stockton',
    data: '371760'
  },
  {
    value: 'Heald College-Hayward',
    data: '371779'
  },
  {
    value: 'Everest College-Anaheim',
    data: '371982'
  },
  {
    value: 'Everest College-City of Industry',
    data: '372037'
  },
  {
    value: 'IBMC College',
    data: '372329'
  },
  {
    value: 'ITT Technical Institute-Lake Mary',
    data: '372578'
  },
  {
    value: 'Fortis College-Smyrna',
    data: '372921'
  },
  {
    value: 'Remington College-Honolulu Campus',
    data: '372958'
  },
  {
    value: 'Vatterott College-Des Moines',
    data: '373058'
  },
  {
    value: 'Brown Mackie College-Quad Cities',
    data: '373085'
  },
  {
    value: 'New England School of Communications',
    data: '373827'
  },
  {
    value: 'Bryant & Stratton College-Southtowns',
    data: '374972'
  },
  {
    value: 'Yeshiva Gedolah Imrei Yosef D\'spinka',
    data: '375230'
  },
  {
    value: 'Remington College-Cleveland Campus',
    data: '375416'
  },
  {
    value: 'Brown Mackie College-Findlay',
    data: '375489'
  },
  {
    value: 'U S Grant Joint Vocational School',
    data: '375568'
  },
  {
    value: 'Le Cordon Bleu College of Culinary Arts-Portland',
    data: '375841'
  },
  {
    value: 'Centro de Estudios Multidisciplinarios-Humacao',
    data: '376224'
  },
  {
    value: 'EDIC College',
    data: '376321'
  },
  {
    value: 'Liceo de Arte-Dise-O y Comercio',
    data: '376330'
  },
  {
    value: 'College of the Marshall Islands',
    data: '376695'
  },
  {
    value: 'ITT Technical Institute-San Antonio',
    data: '377069'
  },
  {
    value: 'Remington College-Fort Worth Campus',
    data: '377111'
  },
  {
    value: 'Centura College-Newport News',
    data: '377449'
  },
  {
    value: 'Centura College-Norfolk',
    data: '377458'
  },
  {
    value: 'Northwest College of Art & Design',
    data: '377546'
  },
  {
    value: 'University of Washington-Bothell Campus',
    data: '377555'
  },
  {
    value: 'University of Washington-Tacoma Campus',
    data: '377564'
  },
  {
    value: 'Valley College-Beckley',
    data: '377652'
  },
  {
    value: 'ITT Technical Institute-Torrance',
    data: '378406'
  },
  {
    value: 'Pacific College of Oriental Medicine-San Diego',
    data: '378576'
  },
  {
    value: 'Remington College-Houston Campus',
    data: '380094'
  },
  {
    value: 'Bay Mills Community College',
    data: '380359'
  },
  {
    value: 'Fond du Lac Tribal and Community College',
    data: '380368'
  },
  {
    value: 'Northwest Indian College',
    data: '380377'
  },
  {
    value: 'Provo College',
    data: '380438'
  },
  {
    value: 'University of Phoenix-Utah',
    data: '380465'
  },
  {
    value: 'Seattle Vocational Institute',
    data: '381529'
  },
  {
    value: 'Baker College of Port Huron',
    data: '381617'
  },
  {
    value: 'Colorado School of Healing Arts',
    data: '381732'
  },
  {
    value: 'Westwood College-Denver South',
    data: '381787'
  },
  {
    value: 'ITT Technical Institute-San Bernardino',
    data: '381909'
  },
  {
    value: 'University of Phoenix-Puerto Rico',
    data: '382063'
  },
  {
    value: 'King\'s College',
    data: '382504'
  },
  {
    value: 'Miller-Motte Technical College-Clarksville',
    data: '382771'
  },
  {
    value: 'Southwest Collegiate Institute for the Deaf',
    data: '382911'
  },
  {
    value: 'Fortis College-Richmond',
    data: '382957'
  },
  {
    value: 'Hawaii Community College',
    data: '383190'
  },
  {
    value: 'Antonelli College-Hattiesburg',
    data: '383950'
  },
  {
    value: 'Eastern New Mexico University-Ruidoso Campus',
    data: '383996'
  },
  {
    value: 'Beacon College',
    data: '384254'
  },
  {
    value: 'Estrella Mountain Community College',
    data: '384333'
  },
  {
    value: 'Heartland Community College',
    data: '384342'
  },
  {
    value: 'University of the Potomac-Washington DC Campus',
    data: '384412'
  },
  {
    value: 'Rabbi Jacob Joseph School',
    data: '384421'
  },
  {
    value: 'Sanford-Brown Institute-Ft Lauderdale',
    data: '385008'
  },
  {
    value: 'Fortis Institute-Scranton',
    data: '385503'
  },
  {
    value: 'Everglades University',
    data: '385619'
  },
  {
    value: 'Seminar L\'moros Bais Yaakov',
    data: '386153'
  },
  {
    value: 'Herzing University-Winter Park',
    data: '386472'
  },
  {
    value: 'Emil Fries Piano Hospital and Training Center',
    data: '387660'
  },
  {
    value: 'National College-Nashville',
    data: '388043'
  },
  {
    value: 'College of Biblical Studies-Houston',
    data: '388520'
  },
  {
    value: 'Virginia College-Pensacola',
    data: '389727'
  },
  {
    value: 'Everest University-South Orlando',
    data: '390701'
  },
  {
    value: 'School of Professional Horticulture at the New York Botanical Garden',
    data: '392354'
  },
  {
    value: 'Watkins College of Art Design & Film',
    data: '392840'
  },
  {
    value: 'Copper Mountain Community College',
    data: '395362'
  },
  {
    value: 'Mt Sierra College',
    data: '398130'
  },
  {
    value: 'Santiago Canyon College',
    data: '399212'
  },
  {
    value: 'Southern California Institute of Technology',
    data: '399869'
  },
  {
    value: 'Soka University of America',
    data: '399911'
  },
  {
    value: 'World Mission University',
    data: '401223'
  },
  {
    value: 'Southwest University of Visual Arts-Albuquerque',
    data: '402776'
  },
  {
    value: 'Frontier Community College',
    data: '403469'
  },
  {
    value: 'Lincoln Trail College',
    data: '403478'
  },
  {
    value: 'Wabash Valley College',
    data: '403487'
  },
  {
    value: 'Baker College of Auburn Hills',
    data: '404073'
  },
  {
    value: 'Baker College of Clinton Township',
    data: '404082'
  },
  {
    value: 'Schiller International University',
    data: '404338'
  },
  {
    value: 'Vatterott College-Springfield',
    data: '404365'
  },
  {
    value: 'Vatterott College-Joplin',
    data: '404374'
  },
  {
    value: 'Vatterott College-Kansas City',
    data: '404383'
  },
  {
    value: 'Coconino Community College',
    data: '404426'
  },
  {
    value: 'Sanford-Brown College-Houston',
    data: '404499'
  },
  {
    value: 'Sanford-Brown Institute-Jacksonville',
    data: '404505'
  },
  {
    value: 'Sanford-Brown College-Dallas',
    data: '404514'
  },
  {
    value: 'Baker College of Cadillac',
    data: '404648'
  },
  {
    value: 'Columbia Central University-Yauco',
    data: '404806'
  },
  {
    value: 'ASA College',
    data: '404994'
  },
  {
    value: 'Yeshivas Novominsk',
    data: '405058'
  },
  {
    value: 'Rabbinical College of Ohr Shimon Yisroel',
    data: '405854'
  },
  {
    value: 'Carroll Community College',
    data: '405872'
  },
  {
    value: 'University of Phoenix-New Mexico',
    data: '405997'
  },
  {
    value: 'Westwood College-Dupage',
    data: '406194'
  },
  {
    value: 'Wright Career College',
    data: '406200'
  },
  {
    value: 'City College-Gainesville',
    data: '406547'
  },
  {
    value: 'Arizona State University-West',
    data: '407009'
  },
  {
    value: 'ITT Technical Institute-Jacksonville',
    data: '407063'
  },
  {
    value: 'Minnesota School of Business-Brooklyn Center',
    data: '407285'
  },
  {
    value: 'ITT Technical Institute-Omaha',
    data: '407319'
  },
  {
    value: 'Omaha School of Massage and Healthcare of Herzing University',
    data: '407328'
  },
  {
    value: 'Brown Mackie College-Fort Wayne',
    data: '408039'
  },
  {
    value: 'Texas State Technical College-Marshall',
    data: '408394'
  },
  {
    value: 'Laurel Technical Institute',
    data: '408729'
  },
  {
    value: 'Florida National University-Main Campus',
    data: '408844'
  },
  {
    value: 'ITT Technical Institute-Fort Lauderdale',
    data: '409069'
  },
  {
    value: 'South Texas College',
    data: '409315'
  },
  {
    value: 'Everest Institute-Kendall',
    data: '409670'
  },
  {
    value: 'California State University-Monterey Bay',
    data: '409698'
  },
  {
    value: 'Heald College-Salinas',
    data: '409874'
  },
  {
    value: 'Brown Mackie College-Atlanta',
    data: '410283'
  },
  {
    value: 'Bryant & Stratton College-Henrietta',
    data: '410496'
  },
  {
    value: 'The Art Institute of California-Argosy University Hollywood',
    data: '410502'
  },
  {
    value: 'Sage College',
    data: '410520'
  },
  {
    value: 'Remington College-Memphis Campus',
    data: '412599'
  },
  {
    value: 'Capella University',
    data: '413413'
  },
  {
    value: 'College of Menominee Nation',
    data: '413617'
  },
  {
    value: 'Leech Lake Tribal College',
    data: '413626'
  },
  {
    value: 'ITT Technical Institute-Little Rock',
    data: '413839'
  },
  {
    value: 'ITT Technical Institute-Oxnard',
    data: '413848'
  },
  {
    value: 'ITT Technical Institute-Louisville',
    data: '413857'
  },
  {
    value: 'ITT Technical Institute-Greenville',
    data: '413866'
  },
  {
    value: 'ITT Technical Institute-Cordova',
    data: '413884'
  },
  {
    value: 'Baker College of Jackson',
    data: '414160'
  },
  {
    value: 'Mech-Tech College',
    data: '414461'
  },
  {
    value: 'ITT Technical Institute-Everett',
    data: '414531'
  },
  {
    value: 'ITT Technical Institute-Bessemer',
    data: '414568'
  },
  {
    value: 'ITT Technical Institute-Orland Park',
    data: '414586'
  },
  {
    value: 'Pacific College of Oriental Medicine-New York',
    data: '414595'
  },
  {
    value: 'Baker College Center for Graduate Studies',
    data: '414708'
  },
  {
    value: 'Johnson & Wales University-North Miami',
    data: '414823'
  },
  {
    value: 'ITT Technical Institute-Pittsburgh',
    data: '414841'
  },
  {
    value: 'Trine University-Regional/Non-Traditional Campuses',
    data: '414878'
  },
  {
    value: 'Pennsylvania Highlands Community College',
    data: '414911'
  },
  {
    value: 'Platt Technical High School',
    data: '417275'
  },
  {
    value: 'College of Business and Technology-Kendall',
    data: '417318'
  },
  {
    value: 'City College-Altamonte Springs',
    data: '417327'
  },
  {
    value: 'Southeast Missouri Hospital College of Nursing and Health Sciences',
    data: '417734'
  },
  {
    value: 'Messenger College',
    data: '417752'
  },
  {
    value: 'Jefferson Lewis BOCES-Practical Nursing Program',
    data: '417886'
  },
  {
    value: 'Veeb Nassau County School of Practical Nursing',
    data: '417910'
  },
  {
    value: 'New York College of Health Professions',
    data: '418126'
  },
  {
    value: 'Willoughby-Eastlake School of Practical Nursing',
    data: '418223'
  },
  {
    value: 'Automeca Technical College-Aguadilla',
    data: '418782'
  },
  {
    value: 'Fortis Institute-Cookeville',
    data: '418870'
  },
  {
    value: 'United Technical Center',
    data: '419031'
  },
  {
    value: 'Central California School',
    data: '419183'
  },
  {
    value: 'Jna Institute of Culinary Arts',
    data: '419341'
  },
  {
    value: 'Argosy University-Washington DC',
    data: '419457'
  },
  {
    value: 'Automeca Technical College-Bayamon',
    data: '419703'
  },
  {
    value: 'Automeca Technical College-Caguas',
    data: '419712'
  },
  {
    value: 'Automeca Technical College-Ponce',
    data: '419721'
  },
  {
    value: 'Everest University-Melbourne',
    data: '420006'
  },
  {
    value: 'Centura College-Chesapeake',
    data: '420024'
  },
  {
    value: 'University of Phoenix-Hawaii',
    data: '420042'
  },
  {
    value: 'Virginia College-Birmingham',
    data: '420307'
  },
  {
    value: 'Virginia College-Huntsville',
    data: '420316'
  },
  {
    value: 'Yeshiva D\'monsey Rabbinical College',
    data: '420325'
  },  {
    value: 'Broadview University-West Jordan',
    data: '230056'
  },
  {
    value: 'Dixie State University',
    data: '230171'
  },
  {
    value: 'Eagle Gate College-Murray',
    data: '230366'
  },
  {
    value: 'ITT Technical Institute-Murray',
    data: '230384'
  },
  {
    value: 'Latter-day Saints Business College',
    data: '230418'
  },
  {
    value: 'Everest College-Salt Lake City',
    data: '230472'
  },
  {
    value: 'Snow College',
    data: '230597'
  },
  {
    value: 'Southern Utah University',
    data: '230603'
  },
  {
    value: 'Stevens-Henager College',
    data: '230621'
  },
  {
    value: 'Stevens-Henager College',
    data: '230630'
  },
  {
    value: 'Utah State University',
    data: '230728'
  },
  {
    value: 'Utah Valley University',
    data: '230737'
  },
  {
    value: 'Salt Lake Community College',
    data: '230746'
  },
  {
    value: 'University of Utah',
    data: '230764'
  },
  {
    value: 'Weber State University',
    data: '230782'
  },
  {
    value: 'Westminster College',
    data: '230807'
  },
  {
    value: 'Bennington College',
    data: '230816'
  },
  {
    value: 'Burlington College',
    data: '230825'
  },
  {
    value: 'Castleton State College',
    data: '230834'
  },
  {
    value: 'Champlain College',
    data: '230852'
  },
  {
    value: 'Community College of Vermont',
    data: '230861'
  },
  {
    value: 'Goddard College',
    data: '230889'
  },
  {
    value: 'Green Mountain College',
    data: '230898'
  },
  {
    value: 'Johnson State College',
    data: '230913'
  },
  {
    value: 'Lyndon State College',
    data: '230931'
  },
  {
    value: 'Marlboro College',
    data: '230940'
  },
  {
    value: 'Middlebury College',
    data: '230959'
  },
  {
    value: 'Norwich University',
    data: '230995'
  },
  {
    value: 'Saint Michael\'s College',
    data: '231059'
  },
  {
    value: 'College of St Joseph',
    data: '231077'
  },
  {
    value: 'Southern Vermont College',
    data: '231086'
  },
  {
    value: 'Sterling College',
    data: '231095'
  },
  {
    value: 'Vermont Technical College',
    data: '231165'
  },
  {
    value: 'University of Vermont',
    data: '231174'
  },
  {
    value: 'Advanced Technology Institute',
    data: '231411'
  },
  {
    value: 'Averett University',
    data: '231420'
  },
  {
    value: 'Blue Ridge Community College',
    data: '231536'
  },
  {
    value: 'Bluefield College',
    data: '231554'
  },
  {
    value: 'Bridgewater College',
    data: '231581'
  },
  {
    value: 'College of William and Mary',
    data: '231624'
  },
  {
    value: 'Regent University',
    data: '231651'
  },
  {
    value: 'Central Virginia Community College',
    data: '231697'
  },
  {
    value: 'Christopher Newport University',
    data: '231712'
  },
  {
    value: 'Bryant & Stratton College-Virginia Beach',
    data: '231785'
  },
  {
    value: 'Bryant & Stratton College-Richmond',
    data: '231828'
  },
  {
    value: 'Jefferson College of Health Sciences',
    data: '231837'
  },
  {
    value: 'Dabney S Lancaster Community College',
    data: '231873'
  },
  {
    value: 'Danville Community College',
    data: '231882'
  },
  {
    value: 'Centura College-Virginia Beach',
    data: '232016'
  },
  {
    value: 'Emory & Henry College',
    data: '232025'
  },
  {
    value: 'Eastern Mennonite University',
    data: '232043'
  },
  {
    value: 'Eastern Shore Community College',
    data: '232052'
  },
  {
    value: 'Ferrum College',
    data: '232089'
  },
  {
    value: 'George Mason University',
    data: '232186'
  },
  {
    value: 'Germanna Community College',
    data: '232195'
  },
  {
    value: 'Hampden-Sydney College',
    data: '232256'
  },
  {
    value: 'Hampton University',
    data: '232265'
  },
  {
    value: 'Hollins University',
    data: '232308'
  },
  {
    value: 'J Sargeant Reynolds Community College',
    data: '232414'
  },
  {
    value: 'James Madison University',
    data: '232423'
  },
  {
    value: 'John Tyler Community College',
    data: '232450'
  },
  {
    value: 'Everest College-Newport News',
    data: '232502'
  },
  {
    value: 'Liberty University',
    data: '232557'
  },
  {
    value: 'Longwood University',
    data: '232566'
  },
  {
    value: 'Lord Fairfax Community College',
    data: '232575'
  },
  {
    value: 'Lynchburg College',
    data: '232609'
  },
  {
    value: 'Mary Baldwin College',
    data: '232672'
  },
  {
    value: 'University of Mary Washington',
    data: '232681'
  },
  {
    value: 'Marymount University',
    data: '232706'
  },
  {
    value: 'Mountain Empire Community College',
    data: '232788'
  },
  {
    value: 'American National University',
    data: '232797'
  },
  {
    value: 'New River Community College',
    data: '232867'
  },
  {
    value: 'Tidewater Tech-Trades',
    data: '232919'
  },
  {
    value: 'Norfolk State University',
    data: '232937'
  },
  {
    value: 'Northern Virginia Community College',
    data: '232946'
  },
  {
    value: 'Old Dominion University',
    data: '232982'
  },
  {
    value: 'Patrick Henry Community College',
    data: '233019'
  },
  {
    value: 'Paul D Camp Community College',
    data: '233037'
  },
  {
    value: 'Southside Regional Medical Center Professional Schools',
    data: '233082'
  },
  {
    value: 'Miller-Motte Technical College-Lynchburg',
    data: '233091'
  },
  {
    value: 'Piedmont Virginia Community College',
    data: '233116'
  },
  {
    value: 'Radford University',
    data: '233277'
  },
  {
    value: 'Randolph-Macon College',
    data: '233295'
  },
  {
    value: 'Randolph College',
    data: '233301'
  },
  {
    value: 'Rappahannock Community College',
    data: '233310'
  },
  {
    value: 'Fortis College-Norfolk',
    data: '233329'
  },
  {
    value: 'Richard Bland College of the College of William and Mary',
    data: '233338'
  },
  {
    value: 'Bon Secours Memorial College of Nursing',
    data: '233356'
  },
  {
    value: 'University of Richmond',
    data: '233374'
  },
  {
    value: 'Roanoke College',
    data: '233426'
  },
  {
    value: 'Shenandoah University',
    data: '233541'
  },
  {
    value: 'Southern Virginia University',
    data: '233611'
  },
  {
    value: 'Southside Virginia Community College',
    data: '233639'
  },
  {
    value: 'Southwest Virginia Community College',
    data: '233648'
  },
  {
    value: 'Strayer University-Virginia',
    data: '233684'
  },
  {
    value: 'Sweet Briar College',
    data: '233718'
  },
  {
    value: 'Thomas Nelson Community College',
    data: '233754'
  },
  {
    value: 'Tidewater Community College',
    data: '233772'
  },
  {
    value: 'The University of Virginia\'s College at Wise',
    data: '233897'
  },
  {
    value: 'Virginia Highlands Community College',
    data: '233903'
  },
  {
    value: 'Virginia Polytechnic Institute and State University',
    data: '233921'
  },
  {
    value: 'Virginia Western Community College',
    data: '233949'
  },
  {
    value: 'Virginia Commonwealth University',
    data: '234030'
  },
  {
    value: 'University of Virginia-Main Campus',
    data: '234076'
  },
  {
    value: 'Virginia Military Institute',
    data: '234085'
  },
  {
    value: 'Virginia University of Lynchburg',
    data: '234137'
  },
  {
    value: 'Virginia State University',
    data: '234155'
  },
  {
    value: 'Virginia Union University',
    data: '234164'
  },
  {
    value: 'Virginia Wesleyan College',
    data: '234173'
  },
  {
    value: 'Washington and Lee University',
    data: '234207'
  },
  {
    value: 'Wytheville Community College',
    data: '234377'
  },
  {
    value: 'The Art Institute of Seattle',
    data: '234492'
  },
  {
    value: 'Bellevue College',
    data: '234669'
  },
  {
    value: 'Bellingham Technical College',
    data: '234696'
  },
  {
    value: 'Big Bend Community College',
    data: '234711'
  },
  {
    value: 'Everest College-Bremerton',
    data: '234739'
  },
  {
    value: 'Central Washington University',
    data: '234827'
  },
  {
    value: 'Centralia College',
    data: '234845'
  },
  {
    value: 'Clark College',
    data: '234933'
  },
  {
    value: 'Clover Park Technical College',
    data: '234951'
  },
  {
    value: 'Columbia Basin College',
    data: '234979'
  },
  {
    value: 'Cornish College of the Arts',
    data: '235024'
  },
  {
    value: 'Eastern Washington University',
    data: '235097'
  },
  {
    value: 'Edmonds Community College',
    data: '235103'
  },
  {
    value: 'Everett Community College',
    data: '235149'
  },
  {
    value: 'The Evergreen State College',
    data: '235167'
  },
  {
    value: 'Pierce College-Fort Steilacoom',
    data: '235237'
  },
  {
    value: 'Gonzaga University',
    data: '235316'
  },
  {
    value: 'Grays Harbor College',
    data: '235334'
  },
  {
    value: 'Green River Community College',
    data: '235343'
  },
  {
    value: 'Heritage University',
    data: '235422'
  },
  {
    value: 'Highline College',
    data: '235431'
  },
  {
    value: 'ITT Technical Institute-Seattle',
    data: '235510'
  },
  {
    value: 'ITT Technical Institute-Spokane Valley',
    data: '235529'
  },
  {
    value: 'Bates Technical College',
    data: '235671'
  },
  {
    value: 'Lake Washington Institute of Technology',
    data: '235699'
  },
  {
    value: 'Lower Columbia College',
    data: '235750'
  },
  {
    value: 'Trinity Lutheran College',
    data: '235769'
  },
  {
    value: 'North Seattle College',
    data: '236072'
  },
  {
    value: 'Northwest University',
    data: '236133'
  },
  {
    value: 'Olympic College',
    data: '236188'
  },
  {
    value: 'Pacific Lutheran University',
    data: '236230'
  },
  {
    value: 'Peninsula College',
    data: '236258'
  },
  {
    value: 'University of Puget Sound',
    data: '236328'
  },
  {
    value: 'Renton Technical College',
    data: '236382'
  },
  {
    value: 'Saint Martin\'s University',
    data: '236452'
  },
  {
    value: 'South Seattle College',
    data: '236504'
  },
  {
    value: 'Seattle Central College',
    data: '236513'
  },
  {
    value: 'Seattle Pacific University',
    data: '236577'
  },
  {
    value: 'Seattle University',
    data: '236595'
  },
  {
    value: 'Shoreline Community College',
    data: '236610'
  },
  {
    value: 'Skagit Valley College',
    data: '236638'
  },
  {
    value: 'South Puget Sound Community College',
    data: '236656'
  },
  {
    value: 'Spokane Community College',
    data: '236692'
  },
  {
    value: 'Spokane Falls Community College',
    data: '236708'
  },
  {
    value: 'Tacoma Community College',
    data: '236753'
  },
  {
    value: 'Walla Walla Community College',
    data: '236887'
  },
  {
    value: 'Walla Walla University',
    data: '236896'
  },
  {
    value: 'Washington State University',
    data: '236939'
  },
  {
    value: 'University of Washington-Seattle Campus',
    data: '236948'
  },
  {
    value: 'Wenatchee Valley College',
    data: '236975'
  },
  {
    value: 'Everest College-Vancouver',
    data: '236993'
  },
  {
    value: 'Western Washington University',
    data: '237011'
  },
  {
    value: 'Whatcom Community College',
    data: '237039'
  },
  {
    value: 'Whitman College',
    data: '237057'
  },
  {
    value: 'Whitworth University',
    data: '237066'
  },
  {
    value: 'Yakima Valley Community College',
    data: '237109'
  },
  {
    value: 'Alderson Broaddus University',
    data: '237118'
  },
  {
    value: 'Appalachian Bible College',
    data: '237136'
  },
  {
    value: 'Ben Franklin Career Center',
    data: '237172'
  },
  {
    value: 'Bethany College',
    data: '237181'
  },
  {
    value: 'Bluefield State College',
    data: '237215'
  },
  {
    value: 'Cabell County Career Technology Center',
    data: '237242'
  },
  {
    value: 'University of Charleston',
    data: '237312'
  },
  {
    value: 'Concord University',
    data: '237330'
  },
  {
    value: 'Davis & Elkins College',
    data: '237358'
  },
  {
    value: 'Fairmont State University',
    data: '237367'
  },
  {
    value: 'Glenville State College',
    data: '237385'
  },
  {
    value: 'Huntington Junior College',
    data: '237437'
  },
  {
    value: 'Marshall University',
    data: '237525'
  },
  {
    value: 'Meredith Manor International Equestrian Center',
    data: '237552'
  },
  {
    value: 'Mountain State College',
    data: '237598'
  },
  {
    value: 'Ohio Valley University',
    data: '237640'
  },
  {
    value: 'West Virginia University at Parkersburg',
    data: '237686'
  },
  {
    value: 'Potomac State College of West Virginia University',
    data: '237701'
  },
  {
    value: 'Salem International University',
    data: '237783'
  },
  {
    value: 'Shepherd University',
    data: '237792'
  },
  {
    value: 'Southern West Virginia Community and Technical College',
    data: '237817'
  },
  {
    value: 'West Virginia State University',
    data: '237899'
  },
  {
    value: 'West Liberty University',
    data: '237932'
  },
  {
    value: 'West Virginia University Institute of Technology',
    data: '237950'
  },
  {
    value: 'West Virginia Wesleyan College',
    data: '237969'
  },
  {
    value: 'West Virginia Business College-Wheeling',
    data: '237978'
  },
  {
    value: 'West Virginia Junior College-Charleston',
    data: '237987'
  },
  {
    value: 'West Virginia Junior College-Morgantown',
    data: '237996'
  },
  {
    value: 'West Virginia Northern Community College',
    data: '238014'
  },
  {
    value: 'West Virginia University',
    data: '238032'
  },
  {
    value: 'Wheeling Jesuit University',
    data: '238078'
  },
  {
    value: 'Alverno College',
    data: '238193'
  },
  {
    value: 'Madison Area Technical College',
    data: '238263'
  },
  {
    value: 'Bellin College',
    data: '238324'
  },
  {
    value: 'Beloit College',
    data: '238333'
  },
  {
    value: 'Blackhawk Technical College',
    data: '238397'
  },
  {
    value: 'Cardinal Stritch University',
    data: '238430'
  },
  {
    value: 'Carroll University',
    data: '238458'
  },
  {
    value: 'Carthage College',
    data: '238476'
  },
  {
    value: 'Concordia University-Wisconsin',
    data: '238616'
  },
  {
    value: 'Edgewood College',
    data: '238661'
  },
  {
    value: 'Fox Valley Technical College',
    data: '238722'
  },
  {
    value: 'Gateway Technical College',
    data: '238759'
  },
  {
    value: 'ITT Technical Institute-Greenfield',
    data: '238892'
  },
  {
    value: 'Lakeland College',
    data: '238980'
  },
  {
    value: 'Lakeshore Technical College',
    data: '239008'
  },
  {
    value: 'Lawrence University',
    data: '239017'
  },
  {
    value: 'Maranatha Baptist University',
    data: '239071'
  },
  {
    value: 'Marian University',
    data: '239080'
  },
  {
    value: 'Marquette University',
    data: '239105'
  },
  {
    value: 'Mid-State Technical College',
    data: '239220'
  },
  {
    value: 'Milwaukee Area Technical College',
    data: '239248'
  },
  {
    value: 'Milwaukee Institute of Art & Design',
    data: '239309'
  },
  {
    value: 'Milwaukee School of Engineering',
    data: '239318'
  },
  {
    value: 'Moraine Park Technical College',
    data: '239372'
  },
  {
    value: 'Mount Mary University',
    data: '239390'
  },
  {
    value: 'Nicolet Area Technical College',
    data: '239442'
  },
  {
    value: 'Northcentral Technical College',
    data: '239460'
  },
  {
    value: 'Northeast Wisconsin Technical College',
    data: '239488'
  },
  {
    value: 'Northland International University',
    data: '239503'
  },
  {
    value: 'Northland College',
    data: '239512'
  },
  {
    value: 'Ripon College',
    data: '239628'
  },
  {
    value: 'Saint Norbert College',
    data: '239716'
  },
  {
    value: 'Silver Lake College of the Holy Family',
    data: '239743'
  },
  {
    value: 'Southwest Wisconsin Technical College',
    data: '239910'
  },
  {
    value: 'Bryant & Stratton College-Milwaukee',
    data: '239929'
  },
  {
    value: 'University of Wisconsin Colleges',
    data: '240055'
  },
  {
    value: 'Viterbo University',
    data: '240107'
  },
  {
    value: 'Chippewa Valley Technical College',
    data: '240116'
  },
  {
    value: 'Waukesha County Technical College',
    data: '240125'
  },
  {
    value: 'Western Technical College',
    data: '240170'
  },
  {
    value: 'University of Wisconsin-Whitewater',
    data: '240189'
  },
  {
    value: 'Wisconsin Indianhead Technical College',
    data: '240198'
  },
  {
    value: 'University of Wisconsin-Eau Claire',
    data: '240268'
  },
  {
    value: 'University of Wisconsin-Green Bay',
    data: '240277'
  },
  {
    value: 'University of Wisconsin-La Crosse',
    data: '240329'
  },
  {
    value: 'Wisconsin Lutheran College',
    data: '240338'
  },
  {
    value: 'University of Wisconsin-Oshkosh',
    data: '240365'
  },
  {
    value: 'University of Wisconsin-Parkside',
    data: '240374'
  },
  {
    value: 'Herzing University-Madison',
    data: '240392'
  },
  {
    value: 'University of Wisconsin-Stout',
    data: '240417'
  },
  {
    value: 'University of Wisconsin-Superior',
    data: '240426'
  },
  {
    value: 'University of Wisconsin-Madison',
    data: '240444'
  },
  {
    value: 'University of Wisconsin-Milwaukee',
    data: '240453'
  },
  {
    value: 'University of Wisconsin-Platteville',
    data: '240462'
  },
  {
    value: 'University of Wisconsin-River Falls',
    data: '240471'
  },
  {
    value: 'University of Wisconsin-Stevens Point',
    data: '240480'
  },
  {
    value: 'Casper College',
    data: '240505'
  },
  {
    value: 'Central Wyoming College',
    data: '240514'
  },
  {
    value: 'Eastern Wyoming College',
    data: '240596'
  },
  {
    value: 'Laramie County Community College',
    data: '240620'
  },
  {
    value: 'Northwest College',
    data: '240657'
  },
  {
    value: 'Sheridan College',
    data: '240666'
  },
  {
    value: 'Western Wyoming Community College',
    data: '240693'
  },
  {
    value: 'University of Wyoming',
    data: '240727'
  },
  {
    value: 'American Samoa Community College',
    data: '240736'
  },
  {
    value: 'Guam Community College',
    data: '240745'
  },
  {
    value: 'University of Guam',
    data: '240754'
  },
  {
    value: 'Northern Marianas College',
    data: '240790'
  },
  {
    value: 'American University of Puerto Rico',
    data: '241100'
  },
  {
    value: 'American University of Puerto Rico',
    data: '241128'
  },
  {
    value: 'American Educational College',
    data: '241146'
  },
  {
    value: 'Universidad Adventista de las Antillas',
    data: '241191'
  },
  {
    value: 'Atlantic University College',
    data: '241216'
  },
  {
    value: 'Universidad Central de Bayamon',
    data: '241225'
  },
  {
    value: 'Columbia Central University-Caguas',
    data: '241304'
  },
  {
    value: 'Carlos Albizu University-San Juan',
    data: '241331'
  },
  {
    value: 'Caribbean University-Bayamon',
    data: '241377'
  },
  {
    value: 'Caribbean University-Carolina',
    data: '241386'
  },
  {
    value: 'Pontifical Catholic University of Puerto Rico-Arecibo',
    data: '241395'
  },
  {
    value: 'Pontifical Catholic University of Puerto Rico-Ponce',
    data: '241410'
  },
  {
    value: 'Centro de Estudios Multidisciplinarios-San Juan',
    data: '241517'
  },
  {
    value: 'Universidad Teologica del Caribe',
    data: '241614'
  },
  {
    value: 'Colegio Universitario de San Juan',
    data: '241720'
  },
  {
    value: 'Universidad Metropolitana',
    data: '241739'
  },
  {
    value: 'Puerto Rico Conservatory of Music',
    data: '241766'
  },
  {
    value: 'EDP University of Puerto Rico Inc-San Sebastian',
    data: '241836'
  },
  {
    value: 'Escuela de Artes Plasticas de Puerto Rico',
    data: '241951'
  },
  {
    value: 'Instituto Tecnologico de Puerto Rico-Recinto de Manati',
    data: '242042'
  },
  {
    value: 'Huertas College',
    data: '242112'
  },
  {
    value: 'Humacao Community College',
    data: '242121'
  },
  {
    value: 'ICPR Junior College-Arecibo',
    data: '242130'
  },
  {
    value: 'ICPR Junior College-Mayaguez',
    data: '242149'
  },
  {
    value: 'Instituto Tecnologico de Puerto Rico-Recinto de Guayama',
    data: '242556'
  },
  {
    value: 'Instituto Tecnologico de Puerto Rico-Recinto de Ponce',
    data: '242565'
  },
  {
    value: 'Instituto Tecnologico de Puerto Rico-Recinto de San Juan',
    data: '242583'
  },
  {
    value: 'Inter American University of Puerto Rico-San German',
    data: '242617'
  },
  {
    value: 'Inter American University of Puerto Rico-Aguadilla',
    data: '242626'
  },
  {
    value: 'Inter American University of Puerto Rico-Arecibo',
    data: '242635'
  },
  {
    value: 'Inter American University of Puerto Rico-Barranquitas',
    data: '242644'
  },
  {
    value: 'Inter American University of Puerto Rico-Metro',
    data: '242653'
  },
  {
    value: 'Inter American University of Puerto Rico-Ponce',
    data: '242662'
  },
  {
    value: 'Inter American University of Puerto Rico-Fajardo',
    data: '242680'
  },
  {
    value: 'Inter American University of Puerto Rico-Guayama',
    data: '242699'
  },
  {
    value: 'Inter American University of Puerto Rico-Bayamon',
    data: '242705'
  },
  {
    value: 'National University College-Bayamon',
    data: '242972'
  },
  {
    value: 'National University College-Arecibo',
    data: '242981'
  },
  {
    value: 'University of Puerto Rico-Aguadilla',
    data: '243106'
  },
  {
    value: 'University of Puerto Rico-Arecibo',
    data: '243115'
  },
  {
    value: 'University of Puerto Rico-Bayamon',
    data: '243133'
  },
  {
    value: 'University of Puerto Rico-Carolina',
    data: '243142'
  },
  {
    value: 'University of Puerto Rico-Cayey',
    data: '243151'
  },
  {
    value: 'University of Puerto Rico-Humacao',
    data: '243179'
  },
  {
    value: 'University of Puerto Rico-Utuado',
    data: '243188'
  },
  {
    value: 'University of Puerto Rico-Mayaguez',
    data: '243197'
  },
  {
    value: 'University of Puerto Rico-Ponce',
    data: '243212'
  },
  {
    value: 'University of Puerto Rico-Rio Piedras',
    data: '243221'
  },
  {
    value: 'Universidad Del Este',
    data: '243346'
  },
  {
    value: 'Universidad del Sagrado Corazon',
    data: '243443'
  },
  {
    value: 'Universidad Central Del Caribe',
    data: '243568'
  },
  {
    value: 'Universidad Politecnica de Puerto Rico',
    data: '243577'
  },
  {
    value: 'Pontifical Catholic University of Puerto Rico-Mayaguez',
    data: '243586'
  },
  {
    value: 'Universidad Del Turabo',
    data: '243601'
  },
  {
    value: 'College of Micronesia-FSM',
    data: '243638'
  },
  {
    value: 'Palau Community College',
    data: '243647'
  },
  {
    value: 'University of the Virgin Islands',
    data: '243665'
  },  {
    value: 'Providence College',
    data: '217402'
  },
  {
    value: 'Rhode Island College',
    data: '217420'
  },
  {
    value: 'Community College of Rhode Island',
    data: '217475'
  },
  {
    value: 'University of Rhode Island',
    data: '217484'
  },
  {
    value: 'Rhode Island School of Design',
    data: '217493'
  },
  {
    value: 'Roger Williams University',
    data: '217518'
  },
  {
    value: 'Salve Regina University',
    data: '217536'
  },
  {
    value: 'St Joseph School of Nursing',
    data: '217572'
  },
  {
    value: 'Northpoint Bible College',
    data: '217606'
  },
  {
    value: 'Aiken Technical College',
    data: '217615'
  },
  {
    value: 'Allen University',
    data: '217624'
  },
  {
    value: 'Anderson University',
    data: '217633'
  },
  {
    value: 'Charleston Southern University',
    data: '217688'
  },
  {
    value: 'Technical College of the Lowcountry',
    data: '217712'
  },
  {
    value: 'Benedict College',
    data: '217721'
  },
  {
    value: 'Bob Jones University',
    data: '217749'
  },
  {
    value: 'Southern Wesleyan University',
    data: '217776'
  },
  {
    value: 'College of Charleston',
    data: '217819'
  },
  {
    value: 'Northeastern Technical College',
    data: '217837'
  },
  {
    value: 'Citadel Military College of South Carolina',
    data: '217864'
  },
  {
    value: 'Claflin University',
    data: '217873'
  },
  {
    value: 'Clemson University',
    data: '217882'
  },
  {
    value: 'Clinton College',
    data: '217891'
  },
  {
    value: 'Coker College',
    data: '217907'
  },
  {
    value: 'Columbia International University',
    data: '217925'
  },
  {
    value: 'Columbia College',
    data: '217934'
  },
  {
    value: 'Converse College',
    data: '217961'
  },
  {
    value: 'Denmark Technical College',
    data: '217989'
  },
  {
    value: 'Erskine College',
    data: '217998'
  },
  {
    value: 'Florence-Darlington Technical College',
    data: '218025'
  },
  {
    value: 'Forrest College',
    data: '218043'
  },
  {
    value: 'Francis Marion University',
    data: '218061'
  },
  {
    value: 'Furman University',
    data: '218070'
  },
  {
    value: 'Greenville Technical College',
    data: '218113'
  },
  {
    value: 'Horry-Georgetown Technical College',
    data: '218140'
  },
  {
    value: 'Lander University',
    data: '218229'
  },
  {
    value: 'Limestone College',
    data: '218238'
  },
  {
    value: 'Midlands Technical College',
    data: '218353'
  },
  {
    value: 'Morris College',
    data: '218399'
  },
  {
    value: 'Newberry College',
    data: '218414'
  },
  {
    value: 'North Greenville University',
    data: '218441'
  },
  {
    value: 'Orangeburg Calhoun Technical College',
    data: '218487'
  },
  {
    value: 'Piedmont Technical College',
    data: '218520'
  },
  {
    value: 'Presbyterian College',
    data: '218539'
  },
  {
    value: 'University of South Carolina-Aiken',
    data: '218645'
  },
  {
    value: 'University of South Carolina-Beaufort',
    data: '218654'
  },
  {
    value: 'University of South Carolina-Columbia',
    data: '218663'
  },
  {
    value: 'University of South Carolina-Lancaster',
    data: '218672'
  },
  {
    value: 'University of South Carolina-Salkehatchie',
    data: '218681'
  },
  {
    value: 'University of South Carolina-Sumter',
    data: '218690'
  },
  {
    value: 'University of South Carolina-Union',
    data: '218706'
  },
  {
    value: 'Coastal Carolina University',
    data: '218724'
  },
  {
    value: 'South Carolina State University',
    data: '218733'
  },
  {
    value: 'University of South Carolina-Upstate',
    data: '218742'
  },
  {
    value: 'Spartanburg Methodist College',
    data: '218821'
  },
  {
    value: 'Spartanburg Community College',
    data: '218830'
  },
  {
    value: 'Central Carolina Technical College',
    data: '218858'
  },
  {
    value: 'Tri-County Technical College',
    data: '218885'
  },
  {
    value: 'Trident Technical College',
    data: '218894'
  },
  {
    value: 'Voorhees College',
    data: '218919'
  },
  {
    value: 'Williamsburg Technical College',
    data: '218955'
  },
  {
    value: 'Winthrop University',
    data: '218964'
  },
  {
    value: 'Wofford College',
    data: '218973'
  },
  {
    value: 'York Technical College',
    data: '218991'
  },
  {
    value: 'Augustana College',
    data: '219000'
  },
  {
    value: 'Black Hills State University',
    data: '219046'
  },
  {
    value: 'Kilian Community College',
    data: '219055'
  },
  {
    value: 'Dakota State University',
    data: '219082'
  },
  {
    value: 'Dakota Wesleyan University',
    data: '219091'
  },
  {
    value: 'Lake Area Technical Institute',
    data: '219143'
  },
  {
    value: 'Mitchell Technical Institute',
    data: '219189'
  },
  {
    value: 'Mount Marty College',
    data: '219198'
  },
  {
    value: 'National American University-Rapid City',
    data: '219204'
  },
  {
    value: 'National American University-Sioux Falls',
    data: '219213'
  },
  {
    value: 'Northern State University',
    data: '219259'
  },
  {
    value: 'Oglala Lakota College',
    data: '219277'
  },
  {
    value: 'Presentation College',
    data: '219295'
  },
  {
    value: 'South Dakota School of Mines and Technology',
    data: '219347'
  },
  {
    value: 'South Dakota State University',
    data: '219356'
  },
  {
    value: 'Sinte Gleska University',
    data: '219374'
  },
  {
    value: 'University of Sioux Falls',
    data: '219383'
  },
  {
    value: 'Sisseton Wahpeton College',
    data: '219408'
  },
  {
    value: 'Southeast Technical Institute',
    data: '219426'
  },
  {
    value: 'University of South Dakota',
    data: '219471'
  },
  {
    value: 'Western Dakota Technical Institute',
    data: '219480'
  },
  {
    value: 'American Baptist College',
    data: '219505'
  },
  {
    value: 'Aquinas College',
    data: '219578'
  },
  {
    value: 'Austin Peay State University',
    data: '219602'
  },
  {
    value: 'Baptist Memorial College of Health Sciences',
    data: '219639'
  },
  {
    value: 'Belmont University',
    data: '219709'
  },
  {
    value: 'Bethel University',
    data: '219718'
  },
  {
    value: 'Bryan College-Dayton',
    data: '219790'
  },
  {
    value: 'Carson-Newman University',
    data: '219806'
  },
  {
    value: 'Chattanooga State Community College',
    data: '219824'
  },
  {
    value: 'Christian Brothers University',
    data: '219833'
  },
  {
    value: 'Cleveland State Community College',
    data: '219879'
  },
  {
    value: 'Columbia State Community College',
    data: '219888'
  },
  {
    value: 'Cumberland University',
    data: '219949'
  },
  {
    value: 'Lipscomb University',
    data: '219976'
  },
  {
    value: 'Daymar Institute-Nashville',
    data: '220002'
  },
  {
    value: 'Dyersburg State Community College',
    data: '220057'
  },
  {
    value: 'East Tennessee State University',
    data: '220075'
  },
  {
    value: 'Chattanooga College Medical Dental and Technical Careers',
    data: '220118'
  },
  {
    value: 'Fisk University',
    data: '220181'
  },
  {
    value: 'Welch College',
    data: '220206'
  },
  {
    value: 'Freed-Hardeman University',
    data: '220215'
  },
  {
    value: 'Hiwassee College',
    data: '220312'
  },
  {
    value: 'Jackson State Community College',
    data: '220400'
  },
  {
    value: 'John A Gupton College',
    data: '220464'
  },
  {
    value: 'Johnson University',
    data: '220473'
  },
  {
    value: 'King University',
    data: '220516'
  },
  {
    value: 'South College',
    data: '220552'
  },
  {
    value: 'Lane College',
    data: '220598'
  },
  {
    value: 'Le Moyne-Owen College',
    data: '220604'
  },
  {
    value: 'Lee University',
    data: '220613'
  },
  {
    value: 'Lincoln Memorial University',
    data: '220631'
  },
  {
    value: 'Martin Methodist College',
    data: '220701'
  },
  {
    value: 'Maryville College',
    data: '220710'
  },
  {
    value: 'Memphis College of Art',
    data: '220808'
  },
  {
    value: 'University of Memphis',
    data: '220862'
  },
  {
    value: 'Middle Tennessee State University',
    data: '220978'
  },
  {
    value: 'Milligan College',
    data: '221014'
  },
  {
    value: 'Motlow State Community College',
    data: '221096'
  },
  {
    value: 'Nashville State Community College',
    data: '221184'
  },
  {
    value: 'O\'More College of Design',
    data: '221254'
  },
  {
    value: 'Rhodes College',
    data: '221351'
  },
  {
    value: 'Roane State Community College',
    data: '221397'
  },
  {
    value: 'Southwest Tennessee Community College',
    data: '221485'
  },
  {
    value: 'Sewanee-The University of the South',
    data: '221519'
  },
  {
    value: 'Pellissippi State Community College',
    data: '221643'
  },
  {
    value: 'Southern Adventist University',
    data: '221661'
  },
  {
    value: 'Tennessee Wesleyan College',
    data: '221731'
  },
  {
    value: 'The University of Tennessee-Chattanooga',
    data: '221740'
  },
  {
    value: 'The University of Tennessee-Knoxville',
    data: '221759'
  },
  {
    value: 'The University of Tennessee-Martin',
    data: '221768'
  },
  {
    value: 'Fountainhead College of Technology',
    data: '221795'
  },
  {
    value: 'Tennessee State University',
    data: '221838'
  },
  {
    value: 'Tennessee Technological University',
    data: '221847'
  },
  {
    value: 'Tennessee Temple University',
    data: '221856'
  },
  {
    value: 'Trevecca Nazarene University',
    data: '221892'
  },
  {
    value: 'Northeast State Community College',
    data: '221908'
  },
  {
    value: 'Tusculum College',
    data: '221953'
  },
  {
    value: 'Union University',
    data: '221971'
  },
  {
    value: 'Vanderbilt University',
    data: '221999'
  },
  {
    value: 'Volunteer State Community College',
    data: '222053'
  },
  {
    value: 'Walters State Community College',
    data: '222062'
  },
  {
    value: 'William Moore College of Technology',
    data: '222105'
  },
  {
    value: 'Abilene Christian University',
    data: '222178'
  },
  {
    value: 'Alvin Community College',
    data: '222567'
  },
  {
    value: 'Amarillo College',
    data: '222576'
  },
  {
    value: 'Angelina College',
    data: '222822'
  },
  {
    value: 'Angelo State University',
    data: '222831'
  },
  {
    value: 'Arlington Baptist College',
    data: '222877'
  },
  {
    value: 'The Art Institute of Houston',
    data: '222938'
  },
  {
    value: 'Austin College',
    data: '222983'
  },
  {
    value: 'Austin Community College District',
    data: '222992'
  },
  {
    value: 'Baptist Missionary Association Theological Seminary',
    data: '223117'
  },
  {
    value: 'Baylor University',
    data: '223232'
  },
  {
    value: 'Coastal Bend College',
    data: '223320'
  },
  {
    value: 'Blinn College',
    data: '223427'
  },
  {
    value: 'Remington College-Dallas Campus',
    data: '223463'
  },
  {
    value: 'Vet Tech Institute of Houston',
    data: '223472'
  },
  {
    value: 'Brazosport College',
    data: '223506'
  },
  {
    value: 'Brookhaven College',
    data: '223524'
  },
  {
    value: 'Cedar Valley College',
    data: '223773'
  },
  {
    value: 'Central Texas College',
    data: '223816'
  },
  {
    value: 'Cisco College',
    data: '223898'
  },
  {
    value: 'Clarendon College',
    data: '223922'
  },
  {
    value: 'Concordia University-Texas',
    data: '224004'
  },
  {
    value: 'North Central Texas College',
    data: '224110'
  },
  {
    value: 'Texas A & M University-Corpus Christi',
    data: '224147'
  },
  {
    value: 'Court Reporting Institute of Dallas',
    data: '224183'
  },
  {
    value: 'Dallas Baptist University',
    data: '224226'
  },
  {
    value: 'Dallas Christian College',
    data: '224244'
  },
  {
    value: 'Dallas Institute of Funeral Service',
    data: '224271'
  },
  {
    value: 'University of Dallas',
    data: '224323'
  },
  {
    value: 'Del Mar College',
    data: '224350'
  },
  {
    value: 'Career Point College',
    data: '224439'
  },
  {
    value: 'East Texas Baptist University',
    data: '224527'
  },
  {
    value: 'Texas A & M University-Texarkana',
    data: '224545'
  },
  {
    value: 'Texas A & M University-Commerce',
    data: '224554'
  },
  {
    value: 'Eastfield College',
    data: '224572'
  },
  {
    value: 'El Centro College',
    data: '224615'
  },
  {
    value: 'El Paso Community College',
    data: '224642'
  },
  {
    value: 'South University-The Art Institute of Dallas',
    data: '224776'
  },
  {
    value: 'Frank Phillips College',
    data: '224891'
  },
  {
    value: 'Galveston College',
    data: '224961'
  },
  {
    value: 'Grayson College',
    data: '225070'
  },
  {
    value: 'Hardin-Simmons University',
    data: '225247'
  },
  {
    value: 'Trinity Valley Community College',
    data: '225308'
  },
  {
    value: 'Hill College',
    data: '225371'
  },
  {
    value: 'Houston Baptist University',
    data: '225399'
  },
  {
    value: 'University of Houston-Clear Lake',
    data: '225414'
  },
  {
    value: 'Houston Community College',
    data: '225423'
  },
  {
    value: 'University of Houston-Downtown',
    data: '225432'
  },
  {
    value: 'University of Houston-Victoria',
    data: '225502'
  },
  {
    value: 'University of Houston',
    data: '225511'
  },
  {
    value: 'Howard College',
    data: '225520'
  },
  {
    value: 'Howard Payne University',
    data: '225548'
  },
  {
    value: 'Huston-Tillotson University',
    data: '225575'
  },
  {
    value: 'University of the Incarnate Word',
    data: '225627'
  },
  {
    value: 'ITT Technical Institute-Arlington',
    data: '225849'
  },
  {
    value: 'ITT Technical Institute-Houston West',
    data: '225858'
  },
  {
    value: 'Jacksonville College-Main Campus',
    data: '225876'
  },
  {
    value: 'Jarvis Christian College',
    data: '225885'
  },
  {
    value: 'KD College Conservatory of Film and Dramatic Arts',
    data: '225991'
  },
  {
    value: 'Kilgore College',
    data: '226019'
  },
  {
    value: 'Lamar University',
    data: '226091'
  },
  {
    value: 'Lamar State College-Orange',
    data: '226107'
  },
  {
    value: 'Lamar State College-Port Arthur',
    data: '226116'
  },
  {
    value: 'Laredo Community College',
    data: '226134'
  },
  {
    value: 'Texas A & M International University',
    data: '226152'
  },
  {
    value: 'Lee College',
    data: '226204'
  },
  {
    value: 'LeTourneau University',
    data: '226231'
  },
  {
    value: 'Lubbock Christian University',
    data: '226383'
  },
  {
    value: 'College of the Mainland',
    data: '226408'
  },
  {
    value: 'University of Mary Hardin-Baylor',
    data: '226471'
  },
  {
    value: 'McLennan Community College',
    data: '226578'
  },
  {
    value: 'McMurry University',
    data: '226587'
  },
  {
    value: 'Covenant School of Nursing and Allied Health',
    data: '226675'
  },
  {
    value: 'Midland College',
    data: '226806'
  },
  {
    value: 'Midwestern State University',
    data: '226833'
  },
  {
    value: 'Wade College',
    data: '226879'
  },
  {
    value: 'Mountain View College',
    data: '226930'
  },
  {
    value: 'Navarro College',
    data: '227146'
  },
  {
    value: 'Lone Star College System',
    data: '227182'
  },
  {
    value: 'North Lake College',
    data: '227191'
  },
  {
    value: 'University of North Texas',
    data: '227216'
  },
  {
    value: 'Northeast Texas Community College',
    data: '227225'
  },
  {
    value: 'Northwood University-Texas',
    data: '227243'
  },
  {
    value: 'Odessa College',
    data: '227304'
  },
  {
    value: 'Our Lady of the Lake University',
    data: '227331'
  },
  {
    value: 'The University of Texas-Pan American',
    data: '227368'
  },
  {
    value: 'The University of Texas at Brownsville',
    data: '227377'
  },
  {
    value: 'Panola College',
    data: '227386'
  },
  {
    value: 'Paris Junior College',
    data: '227401'
  },
  {
    value: 'Paul Quinn College',
    data: '227429'
  },
  {
    value: 'Prairie View A & M University',
    data: '227526'
  },
  {
    value: 'Ranger College',
    data: '227687'
  },
  {
    value: 'Aviation Institute of Maintenance-Houston',
    data: '227748'
  },
  {
    value: 'Rice University',
    data: '227757'
  },
  {
    value: 'Richland College',
    data: '227766'
  },
  {
    value: 'Saint Edward\'s University',
    data: '227845'
  },
  {
    value: 'St Philip\'s College',
    data: '227854'
  },
  {
    value: 'University of St Thomas',
    data: '227863'
  },
  {
    value: 'Sam Houston State University',
    data: '227881'
  },
  {
    value: 'San Antonio College',
    data: '227924'
  },
  {
    value: 'San Jacinto Community College',
    data: '227979'
  },
  {
    value: 'Schreiner University',
    data: '228042'
  },
  {
    value: 'St Mary\'s University',
    data: '228149'
  },
  {
    value: 'South Plains College',
    data: '228158'
  },
  {
    value: 'Southern Methodist University',
    data: '228246'
  },
  {
    value: 'Southwest Texas Junior College',
    data: '228316'
  },
  {
    value: 'Southwestern Assemblies of God University',
    data: '228325'
  },
  {
    value: 'Southwestern University',
    data: '228343'
  },
  {
    value: 'Stephen F Austin State University',
    data: '228431'
  },
  {
    value: 'Texas State University',
    data: '228459'
  },
  {
    value: 'Southwestern Adventist University',
    data: '228468'
  },
  {
    value: 'Southwestern Christian College',
    data: '228486'
  },
  {
    value: 'Sul Ross State University',
    data: '228501'
  },
  {
    value: 'Tarleton State University',
    data: '228529'
  },
  {
    value: 'Tarrant County College District',
    data: '228547'
  },
  {
    value: 'Temple College',
    data: '228608'
  },
  {
    value: 'Texas State Technical College-Waco',
    data: '228680'
  },
  {
    value: 'Texarkana College',
    data: '228699'
  },
  {
    value: 'Texas A & M University-Kingsville',
    data: '228705'
  },
  {
    value: 'Texas A & M University-College Station',
    data: '228723'
  },
  {
    value: 'The University of Texas at Arlington',
    data: '228769'
  },
  {
    value: 'The University of Texas at Austin',
    data: '228778'
  },
  {
    value: 'The University of Texas at Dallas',
    data: '228787'
  },
  {
    value: 'The University of Texas at El Paso',
    data: '228796'
  },
  {
    value: 'The University of Texas at Tyler',
    data: '228802'
  },
  {
    value: 'Texas Christian University',
    data: '228875'
  },
  {
    value: 'Texas College',
    data: '228884'
  },
  {
    value: 'Texas Lutheran University',
    data: '228981'
  },
  {
    value: 'The University of Texas of the Permian Basin',
    data: '229018'
  },
  {
    value: 'The University of Texas at San Antonio',
    data: '229027'
  },
  {
    value: 'Texas Southern University',
    data: '229063'
  },
  {
    value: 'Texas Tech University',
    data: '229115'
  },
  {
    value: 'Texas Wesleyan University',
    data: '229160'
  },
  {
    value: 'Texas Woman\'s University',
    data: '229179'
  },
  {
    value: 'Trinity University',
    data: '229267'
  },
  {
    value: 'Texas State Technical College-Harlingen',
    data: '229319'
  },
  {
    value: 'Texas State Technical College-West Texas',
    data: '229328'
  },
  {
    value: 'Tyler Junior College',
    data: '229355'
  },
  {
    value: 'Vernon College',
    data: '229504'
  },
  {
    value: 'Victoria College',
    data: '229540'
  },
  {
    value: 'Wayland Baptist University',
    data: '229780'
  },
  {
    value: 'Weatherford College',
    data: '229799'
  },
  {
    value: 'West Texas A & M University',
    data: '229814'
  },
  {
    value: 'Western Texas College',
    data: '229832'
  },
  {
    value: 'Wharton County Junior College',
    data: '229841'
  },
  {
    value: 'Wiley College',
    data: '229887'
  },
  {
    value: 'Brigham Young University-Provo',
    data: '230038'
  },
  {
    value: 'Brigham Young University-Hawaii',
    data: '230047'
  },  {
    value: 'Ohio University-Main Campus',
    data: '204857'
  },
  {
    value: 'Ohio University-Zanesville Campus',
    data: '204866'
  },
  {
    value: 'Ohio Valley College of Technology',
    data: '204884'
  },
  {
    value: 'Trinity Health System School of Nursing',
    data: '204893'
  },
  {
    value: 'Ohio Wesleyan University',
    data: '204909'
  },
  {
    value: 'Otterbein University',
    data: '204936'
  },
  {
    value: 'Owens Community College',
    data: '204945'
  },
  {
    value: 'Pontifical College Josephinum',
    data: '205027'
  },
  {
    value: 'Professional Skills Institute',
    data: '205054'
  },
  {
    value: 'Rabbinical College Telshe',
    data: '205124'
  },
  {
    value: 'Fortis College-Centerville',
    data: '205179'
  },
  {
    value: 'University of Rio Grande',
    data: '205203'
  },
  {
    value: 'Advertising Art Educational Services DBA School of Advertising Art',
    data: '205391'
  },
  {
    value: 'Shawnee State University',
    data: '205443'
  },
  {
    value: 'Sinclair Community College',
    data: '205470'
  },
  {
    value: 'Gallipolis Career College',
    data: '205513'
  },
  {
    value: 'Daymar College-New Boston',
    data: '205522'
  },
  {
    value: 'Daymar College-Jackson',
    data: '205531'
  },
  {
    value: 'Daymar College-Lancaster',
    data: '205559'
  },
  {
    value: 'Daymar College-Chillicothe',
    data: '205568'
  },
  {
    value: 'Brown Mackie College-Cincinnati',
    data: '205610'
  },
  {
    value: 'Brown Mackie College-Akron',
    data: '205647'
  },
  {
    value: 'Stark State College',
    data: '205841'
  },
  {
    value: 'Stautzenberger College-Maumee',
    data: '205887'
  },
  {
    value: 'Franciscan University of Steubenville',
    data: '205957'
  },
  {
    value: 'Southern State Community College',
    data: '205966'
  },
  {
    value: 'Ohio Mid-Western College',
    data: '206002'
  },
  {
    value: 'Terra State Community College',
    data: '206011'
  },
  {
    value: 'Tiffin University',
    data: '206048'
  },
  {
    value: 'University of Toledo',
    data: '206084'
  },
  {
    value: 'Tri-State Bible College',
    data: '206154'
  },
  {
    value: 'Trumbull Business College',
    data: '206224'
  },
  {
    value: 'Union Institute & University',
    data: '206279'
  },
  {
    value: 'Urbana University',
    data: '206330'
  },
  {
    value: 'Ursuline College',
    data: '206349'
  },
  {
    value: 'Virginia Marti College of Art and Design',
    data: '206394'
  },
  {
    value: 'Walsh University',
    data: '206437'
  },
  {
    value: 'Washington State Community College',
    data: '206446'
  },
  {
    value: 'Wilberforce University',
    data: '206491'
  },
  {
    value: 'Wilmington College',
    data: '206507'
  },
  {
    value: 'Wittenberg University',
    data: '206525'
  },
  {
    value: 'The College of Wooster',
    data: '206589'
  },
  {
    value: 'Wright State University-Main Campus',
    data: '206604'
  },
  {
    value: 'Wright State University-Lake Campus',
    data: '206613'
  },
  {
    value: 'Xavier University',
    data: '206622'
  },
  {
    value: 'ITT Technical Institute-Youngstown',
    data: '206631'
  },
  {
    value: 'Youngstown State University',
    data: '206695'
  },
  {
    value: 'Bacone College',
    data: '206817'
  },
  {
    value: 'Oklahoma Wesleyan University',
    data: '206835'
  },
  {
    value: 'Southern Nazarene University',
    data: '206862'
  },
  {
    value: 'Cameron University',
    data: '206914'
  },
  {
    value: 'Carl Albert State College',
    data: '206923'
  },
  {
    value: 'University of Central Oklahoma',
    data: '206941'
  },
  {
    value: 'Connors State College',
    data: '206996'
  },
  {
    value: 'East Central University',
    data: '207041'
  },
  {
    value: 'Eastern Oklahoma State College',
    data: '207050'
  },
  {
    value: 'Redlands Community College',
    data: '207069'
  },
  {
    value: 'Hillsdale Free Will Baptist College',
    data: '207157'
  },
  {
    value: 'Langston University',
    data: '207209'
  },
  {
    value: 'Murray State College',
    data: '207236'
  },
  {
    value: 'Spartan College of Aeronautics and Technology',
    data: '207254'
  },
  {
    value: 'Northeastern State University',
    data: '207263'
  },
  {
    value: 'Northern Oklahoma College',
    data: '207281'
  },
  {
    value: 'Northeastern Oklahoma A&M College',
    data: '207290'
  },
  {
    value: 'Northwestern Oklahoma State University',
    data: '207306'
  },
  {
    value: 'Oklahoma Christian University',
    data: '207324'
  },
  {
    value: 'Oklahoma Panhandle State University',
    data: '207351'
  },
  {
    value: 'Oklahoma State University-Main Campus',
    data: '207388'
  },
  {
    value: 'Oklahoma State University-Oklahoma City',
    data: '207397'
  },
  {
    value: 'Oklahoma Baptist University',
    data: '207403'
  },
  {
    value: 'Oklahoma City Community College',
    data: '207449'
  },
  {
    value: 'Oklahoma City University',
    data: '207458'
  },
  {
    value: 'University of Oklahoma-Norman Campus',
    data: '207500'
  },
  {
    value: 'Oklahoma State University Institute of Technology',
    data: '207564'
  },
  {
    value: 'Oral Roberts University',
    data: '207582'
  },
  {
    value: 'Rogers State University',
    data: '207661'
  },
  {
    value: 'Rose State College',
    data: '207670'
  },
  {
    value: 'St. Gregory\'s University',
    data: '207689'
  },
  {
    value: 'University of Science and Arts of Oklahoma',
    data: '207722'
  },
  {
    value: 'Seminole State College',
    data: '207740'
  },
  {
    value: 'Southeastern Oklahoma State University',
    data: '207847'
  },
  {
    value: 'Southwestern Christian University',
    data: '207856'
  },
  {
    value: 'Southwestern Oklahoma State University',
    data: '207865'
  },
  {
    value: 'Tulsa Community College',
    data: '207935'
  },
  {
    value: 'University of Tulsa',
    data: '207971'
  },
  {
    value: 'Western Oklahoma State College',
    data: '208035'
  },
  {
    value: 'The Art Institute of Portland',
    data: '208239'
  },
  {
    value: 'Blue Mountain Community College',
    data: '208275'
  },
  {
    value: 'Central Oregon Community College',
    data: '208318'
  },
  {
    value: 'Chemeketa Community College',
    data: '208390'
  },
  {
    value: 'Clackamas Community College',
    data: '208406'
  },
  {
    value: 'Clatsop Community College',
    data: '208415'
  },
  {
    value: 'Concordia University-Portland',
    data: '208488'
  },
  {
    value: 'Eastern Oregon University',
    data: '208646'
  },
  {
    value: 'New Hope Christian College-Eugene',
    data: '208725'
  },
  {
    value: 'George Fox University',
    data: '208822'
  },
  {
    value: 'ITT Technical Institute-Portland',
    data: '208965'
  },
  {
    value: 'Lane Community College',
    data: '209038'
  },
  {
    value: 'Lewis & Clark College',
    data: '209056'
  },
  {
    value: 'Linfield College-McMinnville Campus',
    data: '209065'
  },
  {
    value: 'Linn-Benton Community College',
    data: '209074'
  },
  {
    value: 'Marylhurst University',
    data: '209108'
  },
  {
    value: 'Mount Angel Seminary',
    data: '209241'
  },
  {
    value: 'Mt Hood Community College',
    data: '209250'
  },
  {
    value: 'Multnomah University',
    data: '209287'
  },
  {
    value: 'Northwest Christian University',
    data: '209409'
  },
  {
    value: 'Oregon Institute of Technology',
    data: '209506'
  },
  {
    value: 'Oregon College of Art and Craft',
    data: '209533'
  },
  {
    value: 'Oregon State University',
    data: '209542'
  },
  {
    value: 'University of Oregon',
    data: '209551'
  },
  {
    value: 'Pacific Northwest College of Art',
    data: '209603'
  },
  {
    value: 'Pacific University',
    data: '209612'
  },
  {
    value: 'Portland Community College',
    data: '209746'
  },
  {
    value: 'Portland State University',
    data: '209807'
  },
  {
    value: 'University of Portland',
    data: '209825'
  },
  {
    value: 'Reed College',
    data: '209922'
  },
  {
    value: 'Rogue Community College',
    data: '209940'
  },
  {
    value: 'Pioneer Pacific College',
    data: '210076'
  },
  {
    value: 'Southern Oregon University',
    data: '210146'
  },
  {
    value: 'Southwestern Oregon Community College',
    data: '210155'
  },
  {
    value: 'Treasure Valley Community College',
    data: '210234'
  },
  {
    value: 'Umpqua Community College',
    data: '210270'
  },
  {
    value: 'Warner Pacific College',
    data: '210304'
  },
  {
    value: 'Corban University',
    data: '210331'
  },
  {
    value: 'Everest College-Portland',
    data: '210359'
  },
  {
    value: 'Willamette University',
    data: '210401'
  },
  {
    value: 'Western Oregon University',
    data: '210429'
  },
  {
    value: 'Bryn Athyn College of the New Church',
    data: '210492'
  },
  {
    value: 'Albright College',
    data: '210571'
  },
  {
    value: 'Community College of Allegheny County',
    data: '210605'
  },
  {
    value: 'Allegheny College',
    data: '210669'
  },
  {
    value: 'DeSales University',
    data: '210739'
  },
  {
    value: 'Alvernia University',
    data: '210775'
  },
  {
    value: 'Antonelli Institute',
    data: '210890'
  },
  {
    value: 'The Art Institutes of York-PA',
    data: '210906'
  },
  {
    value: 'The Art Institute of Philadelphia',
    data: '210942'
  },
  {
    value: 'The Art Institute of Pittsburgh',
    data: '210960'
  },
  {
    value: 'Baptist Bible College & Seminary of Pennsylvania',
    data: '211024'
  },
  {
    value: 'Community College of Beaver County',
    data: '211079'
  },
  {
    value: 'Arcadia University',
    data: '211088'
  },
  {
    value: 'Bloomsburg University of Pennsylvania',
    data: '211158'
  },
  {
    value: 'Bradford School',
    data: '211200'
  },
  {
    value: 'Bryn Mawr College',
    data: '211273'
  },
  {
    value: 'Bucknell University',
    data: '211291'
  },
  {
    value: 'Bucks County Community College',
    data: '211307'
  },
  {
    value: 'Butler County Community College',
    data: '211343'
  },
  {
    value: 'Cabrini College',
    data: '211352'
  },
  {
    value: 'California University of Pennsylvania',
    data: '211361'
  },
  {
    value: 'Cambria-Rowe Business College-Johnstown',
    data: '211398'
  },
  {
    value: 'Carlow University',
    data: '211431'
  },
  {
    value: 'Carnegie Mellon University',
    data: '211440'
  },
  {
    value: 'Cedar Crest College',
    data: '211468'
  },
  {
    value: 'Central Penn College',
    data: '211477'
  },
  {
    value: 'Chatham University',
    data: '211556'
  },
  {
    value: 'Chestnut Hill College',
    data: '211583'
  },
  {
    value: 'Cheyney University of Pennsylvania',
    data: '211608'
  },
  {
    value: 'Clarion University of Pennsylvania',
    data: '211644'
  },
  {
    value: 'Curtis Institute of Music',
    data: '211893'
  },
  {
    value: 'Dean Institute of Technology',
    data: '211909'
  },
  {
    value: 'Delaware County Community College',
    data: '211927'
  },
  {
    value: 'Delaware Valley University',
    data: '211981'
  },
  {
    value: 'Dickinson College',
    data: '212009'
  },
  {
    value: 'Douglas Education Center',
    data: '212045'
  },
  {
    value: 'Drexel University',
    data: '212054'
  },
  {
    value: 'Du Bois Business College-Du Bois',
    data: '212072'
  },
  {
    value: 'Everest Institute-Pittsburgh',
    data: '212090'
  },
  {
    value: 'Duquesne University',
    data: '212106'
  },
  {
    value: 'East Stroudsburg University of Pennsylvania',
    data: '212115'
  },
  {
    value: 'Eastern University',
    data: '212133'
  },
  {
    value: 'Edinboro University of Pennsylvania',
    data: '212160'
  },
  {
    value: 'Elizabethtown College',
    data: '212197'
  },
  {
    value: 'Erie Institute of Technology Inc',
    data: '212434'
  },
  {
    value: 'Faith Theological Seminary',
    data: '212452'
  },
  {
    value: 'Aria Health School of Nursing',
    data: '212568'
  },
  {
    value: 'Franklin and Marshall College',
    data: '212577'
  },
  {
    value: 'Gannon University',
    data: '212601'
  },
  {
    value: 'Geneva College',
    data: '212656'
  },
  {
    value: 'Gettysburg College',
    data: '212674'
  },
  {
    value: 'Gwynedd Mercy University',
    data: '212832'
  },
  {
    value: 'Harcum College',
    data: '212869'
  },
  {
    value: 'Harrisburg Area Community College-Harrisburg',
    data: '212878'
  },
  {
    value: 'Haverford College',
    data: '212911'
  },
  {
    value: 'Commonwealth Technical Institute',
    data: '212975'
  },
  {
    value: 'Holy Family University',
    data: '212984'
  },
  {
    value: 'Hussian School of Art',
    data: '212993'
  },
  {
    value: 'Immaculata University',
    data: '213011'
  },
  {
    value: 'Indiana University of Pennsylvania-Main Campus',
    data: '213020'
  },
  {
    value: 'Johnson College',
    data: '213233'
  },
  {
    value: 'Juniata College',
    data: '213251'
  },
  {
    value: 'Keystone College',
    data: '213303'
  },
  {
    value: 'King\'s College',
    data: '213321'
  },
  {
    value: 'Kutztown University of Pennsylvania',
    data: '213349'
  },
  {
    value: 'La Roche College',
    data: '213358'
  },
  {
    value: 'La Salle University',
    data: '213367'
  },
  {
    value: 'Lackawanna College',
    data: '213376'
  },
  {
    value: 'Lafayette College',
    data: '213385'
  },
  {
    value: 'Lancaster Bible College',
    data: '213400'
  },
  {
    value: 'Lansdale School of Business',
    data: '213473'
  },
  {
    value: 'Lebanon Valley College',
    data: '213507'
  },
  {
    value: 'Lehigh Carbon Community College',
    data: '213525'
  },
  {
    value: 'Berks Technical Institute',
    data: '213534'
  },
  {
    value: 'Lehigh University',
    data: '213543'
  },
  {
    value: 'The Lincoln University',
    data: '213598'
  },
  {
    value: 'Lock Haven University',
    data: '213613'
  },
  {
    value: 'St Margaret School of Nursing',
    data: '213622'
  },
  {
    value: 'Luzerne County Community College',
    data: '213659'
  },
  {
    value: 'Lycoming College',
    data: '213668'
  },
  {
    value: 'Manor College',
    data: '213774'
  },
  {
    value: 'Mansfield University of Pennsylvania',
    data: '213783'
  },
  {
    value: 'Marywood University',
    data: '213826'
  },
  {
    value: 'Vet Tech Institute',
    data: '213914'
  },
  {
    value: 'Mercyhurst University',
    data: '213987'
  },
  {
    value: 'Messiah College',
    data: '213996'
  },
  {
    value: 'Metropolitan Career Center Computer Technology Institute',
    data: '214023'
  },
  {
    value: 'Millersville University of Pennsylvania',
    data: '214041'
  },
  {
    value: 'Misericordia University',
    data: '214069'
  },
  {
    value: 'Montgomery County Community College',
    data: '214111'
  },
  {
    value: 'Moore College of Art and Design',
    data: '214148'
  },
  {
    value: 'Moravian College',
    data: '214157'
  },
  {
    value: 'Mount Aloysius College',
    data: '214166'
  },
  {
    value: 'Muhlenberg College',
    data: '214175'
  },
  {
    value: 'Neumann University',
    data: '214272'
  },
  {
    value: 'Northampton County Area Community College',
    data: '214379'
  },
  {
    value: 'Pittsburgh\'s Ohio Valley Hospital School of Nursing',
    data: '214476'
  },
  {
    value: 'Pennsylvania Institute of Technology',
    data: '214582'
  },
  {
    value: 'Pennsylvania State University-Penn State Erie-Behrend College',
    data: '214591'
  },
  {
    value: 'Pennsylvania State University-Penn State New Kensington',
    data: '214625'
  },
  {
    value: 'Pennsylvania State University-Penn State Shenango',
    data: '214634'
  },
  {
    value: 'Pennsylvania State University-Penn State Wilkes-Barre',
    data: '214643'
  },
  {
    value: 'Pennsylvania State University-Penn State Worthington Scranton',
    data: '214652'
  },
  {
    value: 'Pennsylvania State University-Penn State Lehigh Valley',
    data: '214670'
  },
  {
    value: 'Pennsylvania State University-Penn State Altoona',
    data: '214689'
  },
  {
    value: 'Pennsylvania State University-Penn State Beaver',
    data: '214698'
  },
  {
    value: 'Pennsylvania State University-Penn State Berks',
    data: '214704'
  },
  {
    value: 'Pennsylvania State University-Penn State Harrisburg',
    data: '214713'
  },
  {
    value: 'Pennsylvania State University-Penn State Brandywine',
    data: '214731'
  },
  {
    value: 'Pennsylvania State University-Penn State DuBois',
    data: '214740'
  },
  {
    value: 'Pennsylvania State University-Penn State Fayette- Eberly',
    data: '214759'
  },
  {
    value: 'Pennsylvania State University-Penn State Hazleton',
    data: '214768'
  },
  {
    value: 'Pennsylvania State University-Main Campus',
    data: '214777'
  },
  {
    value: 'Pennsylvania State University-Penn State Greater Allegheny',
    data: '214786'
  },
  {
    value: 'Pennsylvania State University-Penn State Mont Alto',
    data: '214795'
  },
  {
    value: 'Pennsylvania State University-Penn State Abington',
    data: '214801'
  },
  {
    value: 'Pennsylvania State University-Penn State Schuylkill',
    data: '214810'
  },
  {
    value: 'Pennsylvania State University-Penn State York',
    data: '214829'
  },
  {
    value: 'Pace Institute',
    data: '214838'
  },
  {
    value: 'Peirce College',
    data: '214883'
  },
  {
    value: 'Penn Commercial Business/Technical School',
    data: '214892'
  },
  {
    value: 'Pennsylvania Academy of the Fine Arts',
    data: '214971'
  },
  {
    value: 'Pennsylvania College of Art and Design',
    data: '215053'
  },
  {
    value: 'University of Pennsylvania',
    data: '215062'
  },
  {
    value: 'Philadelphia University',
    data: '215099'
  },
  {
    value: 'The University of the Arts',
    data: '215105'
  },
  {
    value: 'Cairn University-Langhorne',
    data: '215114'
  },
  {
    value: 'University of the Sciences',
    data: '215132'
  },
  {
    value: 'Community College of Philadelphia',
    data: '215239'
  },
  {
    value: 'University of Pittsburgh-Bradford',
    data: '215266'
  },
  {
    value: 'University of Pittsburgh-Greensburg',
    data: '215275'
  },
  {
    value: 'University of Pittsburgh-Johnstown',
    data: '215284'
  },
  {
    value: 'University of Pittsburgh-Pittsburgh Campus',
    data: '215293'
  },
  {
    value: 'University of Pittsburgh-Titusville',
    data: '215309'
  },
  {
    value: 'Pittsburgh Institute of Aeronautics',
    data: '215381'
  },
  {
    value: 'Pittsburgh Technical Institute',
    data: '215415'
  },
  {
    value: 'Prism Career Institute-Upper Darby',
    data: '215433'
  },
  {
    value: 'Point Park University',
    data: '215442'
  },
  {
    value: 'Reading Area Community College',
    data: '215585'
  },
  {
    value: 'Reading Hospital School of Health Sciences',
    data: '215594'
  },
  {
    value: 'Reformed Presbyterian Theological Seminary',
    data: '215628'
  },
  {
    value: 'The Restaurant School at Walnut Hill College',
    data: '215637'
  },
  {
    value: 'Robert Morris University',
    data: '215655'
  },
  {
    value: 'Rosedale Technical Institute',
    data: '215682'
  },
  {
    value: 'Rosemont College',
    data: '215691'
  },
  {
    value: 'Saint Francis University',
    data: '215743'
  },
  {
    value: 'Saint Joseph\'s University',
    data: '215770'
  },
  {
    value: 'Saint Vincent College',
    data: '215798'
  },
  {
    value: 'University of Scranton',
    data: '215929'
  },
  {
    value: 'Seton Hill University',
    data: '215947'
  },
  {
    value: 'University of Pittsburgh Medical Center-Shadyside School of Nursing',
    data: '215974'
  },
  {
    value: 'Sharon Regional Health System School of Nursing',
    data: '215983'
  },
  {
    value: 'Laurel Technical Institute',
    data: '215992'
  },
  {
    value: 'Shippensburg University of Pennsylvania',
    data: '216010'
  },
  {
    value: 'Slippery Rock University of Pennsylvania',
    data: '216038'
  },
  {
    value: 'Saint Charles Borromeo Seminary-Overbrook',
    data: '216047'
  },
  {
    value: 'South Hills School of Business & Technology',
    data: '216083'
  },
  {
    value: 'Susquehanna University',
    data: '216278'
  },
  {
    value: 'Swarthmore College',
    data: '216287'
  },
  {
    value: 'Thaddeus Stevens College of Technology',
    data: '216296'
  },
  {
    value: 'Talmudical Yeshiva of Philadelphia',
    data: '216311'
  },
  {
    value: 'Temple University',
    data: '216339'
  },
  {
    value: 'Thiel College',
    data: '216357'
  },
  {
    value: 'Fortis Institute-Erie',
    data: '216418'
  },
  {
    value: 'Triangle Tech Inc-Erie',
    data: '216427'
  },
  {
    value: 'Triangle Tech Inc-Pittsburgh',
    data: '216436'
  },
  {
    value: 'Triangle Tech Inc-Greensburg',
    data: '216445'
  },
  {
    value: 'Triangle Tech Inc-Dubois',
    data: '216454'
  },
  {
    value: 'Ursinus College',
    data: '216524'
  },
  {
    value: 'University of Valley Forge',
    data: '216542'
  },
  {
    value: 'Valley Forge Military College',
    data: '216551'
  },
  {
    value: 'Villanova University',
    data: '216597'
  },
  {
    value: 'Washington & Jefferson College',
    data: '216667'
  },
  {
    value: 'Waynesburg University',
    data: '216694'
  },
  {
    value: 'West Chester University of Pennsylvania',
    data: '216764'
  },
  {
    value: 'Western Pennsylvania Hospital School of Nursing',
    data: '216773'
  },
  {
    value: 'Pittsburgh Career Institute',
    data: '216782'
  },
  {
    value: 'Westminster College',
    data: '216807'
  },
  {
    value: 'Westmoreland County Community College',
    data: '216825'
  },
  {
    value: 'Widener University-Main Campus',
    data: '216852'
  },
  {
    value: 'Wilkes University',
    data: '216931'
  },
  {
    value: 'Wilson College',
    data: '217013'
  },
  {
    value: 'Yeshivath Beth Moshe',
    data: '217040'
  },
  {
    value: 'York College Pennsylvania',
    data: '217059'
  },
  {
    value: 'Yorktowne Business Institute',
    data: '217086'
  },
  {
    value: 'Brown University',
    data: '217156'
  },
  {
    value: 'Bryant University',
    data: '217165'
  },
  {
    value: 'Johnson & Wales University-Providence',
    data: '217235'
  },
  {
    value: 'New England Institute of Technology',
    data: '217305'
  },  {
    value: 'Brevard College',
    data: '198066'
  },
  {
    value: 'Brunswick Community College',
    data: '198084'
  },
  {
    value: 'Cabarrus College of Health Sciences',
    data: '198109'
  },
  {
    value: 'Caldwell Community College and Technical Institute',
    data: '198118'
  },
  {
    value: 'Campbell University',
    data: '198136'
  },
  {
    value: 'Cape Fear Community College',
    data: '198154'
  },
  {
    value: 'Carteret Community College',
    data: '198206'
  },
  {
    value: 'Catawba College',
    data: '198215'
  },
  {
    value: 'Catawba Valley Community College',
    data: '198233'
  },
  {
    value: 'South College-Asheville',
    data: '198242'
  },
  {
    value: 'Central Carolina Community College',
    data: '198251'
  },
  {
    value: 'Central Piedmont Community College',
    data: '198260'
  },
  {
    value: 'Chowan University',
    data: '198303'
  },
  {
    value: 'Cleveland Community College',
    data: '198321'
  },
  {
    value: 'Coastal Carolina Community College',
    data: '198330'
  },
  {
    value: 'Craven Community College',
    data: '198367'
  },
  {
    value: 'Davidson County Community College',
    data: '198376'
  },
  {
    value: 'Davidson College',
    data: '198385'
  },
  {
    value: 'Duke University',
    data: '198419'
  },
  {
    value: 'Durham Technical Community College',
    data: '198455'
  },
  {
    value: 'East Carolina University',
    data: '198464'
  },
  {
    value: 'Edgecombe Community College',
    data: '198491'
  },
  {
    value: 'Elizabeth City State University',
    data: '198507'
  },
  {
    value: 'Elon University',
    data: '198516'
  },
  {
    value: 'Fayetteville Technical Community College',
    data: '198534'
  },
  {
    value: 'Fayetteville State University',
    data: '198543'
  },
  {
    value: 'Forsyth Technical Community College',
    data: '198552'
  },
  {
    value: 'Gardner-Webb University',
    data: '198561'
  },
  {
    value: 'Gaston College',
    data: '198570'
  },
  {
    value: 'Greensboro College',
    data: '198598'
  },
  {
    value: 'Guilford College',
    data: '198613'
  },
  {
    value: 'Guilford Technical Community College',
    data: '198622'
  },
  {
    value: 'Halifax Community College',
    data: '198640'
  },
  {
    value: 'Haywood Community College',
    data: '198668'
  },
  {
    value: 'Heritage Bible College',
    data: '198677'
  },
  {
    value: 'High Point University',
    data: '198695'
  },
  {
    value: 'Isothermal Community College',
    data: '198710'
  },
  {
    value: 'James Sprunt Community College',
    data: '198729'
  },
  {
    value: 'Laurel University',
    data: '198747'
  },
  {
    value: 'Johnson C Smith University',
    data: '198756'
  },
  {
    value: 'Johnston Community College',
    data: '198774'
  },
  {
    value: 'Lees-McRae College',
    data: '198808'
  },
  {
    value: 'Lenoir Community College',
    data: '198817'
  },
  {
    value: 'Lenoir-Rhyne University',
    data: '198835'
  },
  {
    value: 'Livingstone College',
    data: '198862'
  },
  {
    value: 'Louisburg College',
    data: '198871'
  },
  {
    value: 'Mars Hill University',
    data: '198899'
  },
  {
    value: 'Martin Community College',
    data: '198905'
  },
  {
    value: 'Mayland Community College',
    data: '198914'
  },
  {
    value: 'McDowell Technical Community College',
    data: '198923'
  },
  {
    value: 'Mercy School of Nursing',
    data: '198941'
  },
  {
    value: 'Meredith College',
    data: '198950'
  },
  {
    value: 'Methodist University',
    data: '198969'
  },
  {
    value: 'Miller-Motte College-Wilmington',
    data: '198978'
  },
  {
    value: 'Mitchell Community College',
    data: '198987'
  },
  {
    value: 'Montgomery Community College',
    data: '199023'
  },
  {
    value: 'Montreat College',
    data: '199032'
  },
  {
    value: 'University of Mount Olive',
    data: '199069'
  },
  {
    value: 'Nash Community College',
    data: '199087'
  },
  {
    value: 'North Carolina A & T State University',
    data: '199102'
  },
  {
    value: 'University of North Carolina at Asheville',
    data: '199111'
  },
  {
    value: 'University of North Carolina at Chapel Hill',
    data: '199120'
  },
  {
    value: 'University of North Carolina at Charlotte',
    data: '199139'
  },
  {
    value: 'University of North Carolina at Greensboro',
    data: '199148'
  },
  {
    value: 'North Carolina Central University',
    data: '199157'
  },
  {
    value: 'University of North Carolina School of the Arts',
    data: '199184'
  },
  {
    value: 'North Carolina State University at Raleigh',
    data: '199193'
  },
  {
    value: 'North Carolina Wesleyan College',
    data: '199209'
  },
  {
    value: 'University of North Carolina Wilmington',
    data: '199218'
  },
  {
    value: 'Pamlico Community College',
    data: '199263'
  },
  {
    value: 'William Peace University',
    data: '199272'
  },
  {
    value: 'University of North Carolina at Pembroke',
    data: '199281'
  },
  {
    value: 'Pfeiffer University',
    data: '199306'
  },
  {
    value: 'Piedmont International University',
    data: '199315'
  },
  {
    value: 'Piedmont Community College',
    data: '199324'
  },
  {
    value: 'Pitt Community College',
    data: '199333'
  },
  {
    value: 'Queens University of Charlotte',
    data: '199412'
  },
  {
    value: 'Randolph Community College',
    data: '199421'
  },
  {
    value: 'Richmond Community College',
    data: '199449'
  },
  {
    value: 'Mid-Atlantic Christian University',
    data: '199458'
  },
  {
    value: 'Roanoke-Chowan Community College',
    data: '199467'
  },
  {
    value: 'Robeson Community College',
    data: '199476'
  },
  {
    value: 'Rockingham Community College',
    data: '199485'
  },
  {
    value: 'Rowan-Cabarrus Community College',
    data: '199494'
  },
  {
    value: 'Saint Augustine\'s University',
    data: '199582'
  },
  {
    value: 'Salem College',
    data: '199607'
  },
  {
    value: 'Sampson Community College',
    data: '199625'
  },
  {
    value: 'Sandhills Community College',
    data: '199634'
  },
  {
    value: 'Shaw University',
    data: '199643'
  },
  {
    value: 'St Andrews University',
    data: '199698'
  },
  {
    value: 'Southeastern Community College',
    data: '199722'
  },
  {
    value: 'Southwestern Community College',
    data: '199731'
  },
  {
    value: 'Stanly Community College',
    data: '199740'
  },
  {
    value: 'Southeastern Baptist Theological Seminary',
    data: '199759'
  },
  {
    value: 'Surry Community College',
    data: '199768'
  },
  {
    value: 'Alamance Community College',
    data: '199786'
  },
  {
    value: 'Tri-County Community College',
    data: '199795'
  },
  {
    value: 'Vance-Granville Community College',
    data: '199838'
  },
  {
    value: 'Wake Forest University',
    data: '199847'
  },
  {
    value: 'Wake Technical Community College',
    data: '199856'
  },
  {
    value: 'Warren Wilson College',
    data: '199865'
  },
  {
    value: 'Wayne Community College',
    data: '199892'
  },
  {
    value: 'Western Piedmont Community College',
    data: '199908'
  },
  {
    value: 'Wilkes Community College',
    data: '199926'
  },
  {
    value: 'Wilson Community College',
    data: '199953'
  },
  {
    value: 'Wingate University',
    data: '199962'
  },
  {
    value: 'Carolina Christian College',
    data: '199971'
  },
  {
    value: 'Winston-Salem State University',
    data: '199999'
  },
  {
    value: 'Western Carolina University',
    data: '200004'
  },
  {
    value: 'Rasmussen College-North Dakota',
    data: '200013'
  },
  {
    value: 'Bismarck State College',
    data: '200022'
  },
  {
    value: 'Dickinson State University',
    data: '200059'
  },
  {
    value: 'Fort Berthold Community College',
    data: '200086'
  },
  {
    value: 'University of Jamestown',
    data: '200156'
  },
  {
    value: 'Lake Region State College',
    data: '200192'
  },
  {
    value: 'Cankdeska Cikana Community College',
    data: '200208'
  },
  {
    value: 'University of Mary',
    data: '200217'
  },
  {
    value: 'Mayville State University',
    data: '200226'
  },
  {
    value: 'Minot State University',
    data: '200253'
  },
  {
    value: 'University of North Dakota',
    data: '200280'
  },
  {
    value: 'North Dakota State College of Science',
    data: '200305'
  },
  {
    value: 'Dakota College at Bottineau',
    data: '200314'
  },
  {
    value: 'North Dakota State University-Main Campus',
    data: '200332'
  },
  {
    value: 'Williston State College',
    data: '200341'
  },
  {
    value: 'Sitting Bull College',
    data: '200466'
  },
  {
    value: 'Trinity Bible College',
    data: '200484'
  },
  {
    value: 'Turtle Mountain Community College',
    data: '200527'
  },
  {
    value: 'United Tribes Technical College',
    data: '200554'
  },
  {
    value: 'Valley City State University',
    data: '200572'
  },
  {
    value: 'ETI Technical College',
    data: '200590'
  },
  {
    value: 'The Art Institute of Cincinnati-AIC College of Design',
    data: '200624'
  },
  {
    value: 'Miami-Jacobs Career College-Independence',
    data: '200633'
  },
  {
    value: 'Akron Institute of Herzing University',
    data: '200785'
  },
  {
    value: 'University of Akron Main Campus',
    data: '200800'
  },
  {
    value: 'University of Akron Wayne College',
    data: '200846'
  },
  {
    value: 'Allegheny Wesleyan College',
    data: '200873'
  },
  {
    value: 'Antonelli College-Cincinnati',
    data: '201016'
  },
  {
    value: 'Art Academy of Cincinnati',
    data: '201061'
  },
  {
    value: 'Ashland University',
    data: '201104'
  },
  {
    value: 'Aultman College of Nursing and Health Sciences',
    data: '201177'
  },
  {
    value: 'Baldwin Wallace University',
    data: '201195'
  },
  {
    value: 'Belmont College',
    data: '201283'
  },
  {
    value: 'Bluffton University',
    data: '201371'
  },
  {
    value: 'Fortis College-Ravenna',
    data: '201399'
  },
  {
    value: 'Bowling Green State University-Firelands',
    data: '201432'
  },
  {
    value: 'Bowling Green State University-Main Campus',
    data: '201441'
  },
  {
    value: 'Bryant & Stratton College-Parma',
    data: '201469'
  },
  {
    value: 'Capital University',
    data: '201548'
  },
  {
    value: 'Case Western Reserve University',
    data: '201645'
  },
  {
    value: 'Cedarville University',
    data: '201654'
  },
  {
    value: 'Central Ohio Technical College',
    data: '201672'
  },
  {
    value: 'Central State University',
    data: '201690'
  },
  {
    value: 'Chatfield College',
    data: '201751'
  },
  {
    value: 'Choffin Career  and Technical Center',
    data: '201803'
  },
  {
    value: 'The Christ College of Nursing and Health Sciences',
    data: '201821'
  },
  {
    value: 'Cincinnati Christian University',
    data: '201858'
  },
  {
    value: 'University of Cincinnati-Main Campus',
    data: '201885'
  },
  {
    value: 'Cincinnati State Technical and Community College',
    data: '201928'
  },
  {
    value: 'University of Cincinnati-Clermont College',
    data: '201946'
  },
  {
    value: 'University of Cincinnati-Blue Ash College',
    data: '201955'
  },
  {
    value: 'Ohio Christian University',
    data: '201964'
  },
  {
    value: 'Clark State Community College',
    data: '201973'
  },
  {
    value: 'Cleveland Institute of Art',
    data: '202046'
  },
  {
    value: 'Cleveland Institute of Music',
    data: '202073'
  },
  {
    value: 'Cleveland State University',
    data: '202134'
  },
  {
    value: 'Columbiana County Career and Technical Center',
    data: '202152'
  },
  {
    value: 'Bradford School',
    data: '202161'
  },
  {
    value: 'Columbus College of Art and Design',
    data: '202170'
  },
  {
    value: 'Columbus State Community College',
    data: '202222'
  },
  {
    value: 'Cuyahoga Community College District',
    data: '202356'
  },
  {
    value: 'Davis College',
    data: '202435'
  },
  {
    value: 'University of Dayton',
    data: '202480'
  },
  {
    value: 'Defiance College',
    data: '202514'
  },
  {
    value: 'Denison University',
    data: '202523'
  },
  {
    value: 'Edison State Community College',
    data: '202648'
  },
  {
    value: 'Bryant & Stratton College-Cleveland',
    data: '202684'
  },
  {
    value: 'The University of Findlay',
    data: '202763'
  },
  {
    value: 'Franklin University',
    data: '202806'
  },
  {
    value: 'Gods Bible School and College',
    data: '202903'
  },
  {
    value: 'Good Samaritan College of Nursing and Health Science',
    data: '202912'
  },
  {
    value: 'Heidelberg University',
    data: '203085'
  },
  {
    value: 'Hiram College',
    data: '203128'
  },
  {
    value: 'Hocking College',
    data: '203155'
  },
  {
    value: 'International College of Broadcasting',
    data: '203289'
  },
  {
    value: 'ITT Technical Institute-Dayton',
    data: '203313'
  },
  {
    value: 'Eastern Gateway Community College',
    data: '203331'
  },
  {
    value: 'John Carroll University',
    data: '203368'
  },
  {
    value: 'Hondros College',
    data: '203386'
  },
  {
    value: 'Kent State University at Ashtabula',
    data: '203447'
  },
  {
    value: 'Kent State University at East Liverpool',
    data: '203456'
  },
  {
    value: 'Kent State University at Stark',
    data: '203465'
  },
  {
    value: 'Kent State University at Trumbull',
    data: '203474'
  },
  {
    value: 'Kent State University at Tuscarawas',
    data: '203483'
  },
  {
    value: 'Kent State University at Salem',
    data: '203492'
  },
  {
    value: 'Kent State University at Kent',
    data: '203517'
  },
  {
    value: 'Kent State University at Geauga',
    data: '203526'
  },
  {
    value: 'Kenyon College',
    data: '203535'
  },
  {
    value: 'Kettering College',
    data: '203544'
  },
  {
    value: 'Lake Erie College',
    data: '203580'
  },
  {
    value: 'Lakeland Community College',
    data: '203599'
  },
  {
    value: 'James A Rhodes State College',
    data: '203678'
  },
  {
    value: 'Ohio Business College-Sheffield',
    data: '203720'
  },
  {
    value: 'Ohio Business College-Sandusky',
    data: '203739'
  },
  {
    value: 'Lorain County Community College',
    data: '203748'
  },
  {
    value: 'Lourdes University',
    data: '203757'
  },
  {
    value: 'Malone University',
    data: '203775'
  },
  {
    value: 'Marietta College',
    data: '203845'
  },
  {
    value: 'Marion Technical College',
    data: '203881'
  },
  {
    value: 'Mercy College of Ohio',
    data: '203960'
  },
  {
    value: 'Miami University-Hamilton',
    data: '204006'
  },
  {
    value: 'Miami University-Middletown',
    data: '204015'
  },
  {
    value: 'Miami University-Oxford',
    data: '204024'
  },
  {
    value: 'Miami-Jacobs Career College-Dayton',
    data: '204060'
  },
  {
    value: 'Mount Carmel College of Nursing',
    data: '204176'
  },
  {
    value: 'University of Mount Union',
    data: '204185'
  },
  {
    value: 'Mount Vernon Nazarene University',
    data: '204194'
  },
  {
    value: 'Mount Saint Joseph University',
    data: '204200'
  },
  {
    value: 'Zane State College',
    data: '204255'
  },
  {
    value: 'Muskingum University',
    data: '204264'
  },
  {
    value: 'Fortis College-Cuyahoga Falls',
    data: '204307'
  },
  {
    value: 'Brown Mackie College-North Canton',
    data: '204316'
  },
  {
    value: 'North Central State College',
    data: '204422'
  },
  {
    value: 'Northwest State Community College',
    data: '204440'
  },
  {
    value: 'Notre Dame College',
    data: '204468'
  },
  {
    value: 'University of Northwestern Ohio',
    data: '204486'
  },
  {
    value: 'Oberlin College',
    data: '204501'
  },
  {
    value: 'Ohio College of Massotherapy Inc',
    data: '204592'
  },
  {
    value: 'Ohio Dominican University',
    data: '204617'
  },
  {
    value: 'Ohio Northern University',
    data: '204635'
  },
  {
    value: 'Ohio State University Agricultural Technical Institute',
    data: '204662'
  },
  {
    value: 'Ohio State University-Lima Campus',
    data: '204671'
  },
  {
    value: 'Ohio State University-Mansfield Campus',
    data: '204680'
  },
  {
    value: 'Ohio State University-Marion Campus',
    data: '204699'
  },
  {
    value: 'Ohio State University-Newark Campus',
    data: '204705'
  },
  {
    value: 'Ohio State University-Main Campus',
    data: '204796'
  },
  {
    value: 'Ohio University-Eastern Campus',
    data: '204802'
  },
  {
    value: 'Ohio University-Chillicothe Campus',
    data: '204820'
  },
  {
    value: 'Ohio University-Southern Campus',
    data: '204839'
  },
  {
    value: 'Ohio University-Lancaster Campus',
    data: '204848'
  },  {
    value: 'Yeshiva Karlin Stolin',
    data: '197601'
  },
  {
    value: 'Yeshivat Mikdash Melech',
    data: '197610'
  },
  {
    value: 'Yeshiva Derech Chaim',
    data: '197647'
  },
  {
    value: 'Yeshiva of Nitra Rabbinical College',
    data: '197674'
  },
  {
    value: 'Yeshiva Shaar Hatorah',
    data: '197692'
  },
  {
    value: 'Yeshiva University',
    data: '197708'
  },
  {
    value: 'Yeshivath Viznitz',
    data: '197735'
  },
  {
    value: 'Yeshivath Zichron Moshe',
    data: '197744'
  },
  {
    value: 'College of the Albemarle',
    data: '197814'
  },
  {
    value: 'The Art Institute of Charlotte',
    data: '197832'
  },
  {
    value: 'South Piedmont Community College',
    data: '197850'
  },
  {
    value: 'Appalachian State University',
    data: '197869'
  },
  {
    value: 'Asheville-Buncombe Technical Community College',
    data: '197887'
  },
  {
    value: 'Barton College',
    data: '197911'
  },
  {
    value: 'Beaufort County Community College',
    data: '197966'
  },
  {
    value: 'Belmont Abbey College',
    data: '197984'
  },
  {
    value: 'Bennett College',
    data: '197993'
  },
  {
    value: 'Bladen Community College',
    data: '198011'
  },
  {
    value: 'Blue Ridge Community College',
    data: '198039'
  },  {
    value: 'SUNY College of Technology at Canton',
    data: '196015'
  },
  {
    value: 'SUNY College of Technology at Delhi',
    data: '196024'
  },
  {
    value: 'SUNY College of Agriculture and Technology at Cobleskill',
    data: '196033'
  },
  {
    value: 'Farmingdale State College',
    data: '196042'
  },
  {
    value: 'Morrisville State College',
    data: '196051'
  },
  {
    value: 'SUNY at Albany',
    data: '196060'
  },
  {
    value: 'SUNY at Binghamton',
    data: '196079'
  },
  {
    value: 'University at Buffalo',
    data: '196088'
  },
  {
    value: 'Stony Brook University',
    data: '196097'
  },
  {
    value: 'SUNY College of Environmental Science and Forestry',
    data: '196103'
  },
  {
    value: 'SUNY Institute of Technology at Utica-Rome',
    data: '196112'
  },
  {
    value: 'SUNY College at Brockport',
    data: '196121'
  },
  {
    value: 'SUNY Buffalo State',
    data: '196130'
  },
  {
    value: 'SUNY College at Cortland',
    data: '196149'
  },
  {
    value: 'SUNY at Fredonia',
    data: '196158'
  },
  {
    value: 'SUNY College at Geneseo',
    data: '196167'
  },
  {
    value: 'State University of New York at New Paltz',
    data: '196176'
  },
  {
    value: 'SUNY Oneonta',
    data: '196185'
  },
  {
    value: 'SUNY College at Oswego',
    data: '196194'
  },
  {
    value: 'SUNY College at Potsdam',
    data: '196200'
  },
  {
    value: 'SUNY at Purchase College',
    data: '196219'
  },
  {
    value: 'SUNY College at Old Westbury',
    data: '196237'
  },
  {
    value: 'SUNY College at Plattsburgh',
    data: '196246'
  },
  {
    value: 'SUNY Empire State College',
    data: '196264'
  },
  {
    value: 'SUNY Maritime College',
    data: '196291'
  },
  {
    value: 'Swedish Institute a College of Health Sciences',
    data: '196389'
  },
  {
    value: 'Syracuse University',
    data: '196413'
  },
  {
    value: 'Talmudical Seminary Oholei Torah',
    data: '196431'
  },
  {
    value: 'Talmudical Institute of Upstate New York',
    data: '196440'
  },
  {
    value: 'Technical Career Institutes',
    data: '196477'
  },
  {
    value: 'Tompkins Cortland Community College',
    data: '196565'
  },
  {
    value: 'Torah Temimah Talmudical Seminary',
    data: '196583'
  },
  {
    value: 'Touro College',
    data: '196592'
  },
  {
    value: 'Trocaire College',
    data: '196653'
  },
  {
    value: 'Ulster County Community College',
    data: '196699'
  },
  {
    value: 'Union College',
    data: '196866'
  },
  {
    value: 'United Talmudical Seminary',
    data: '197018'
  },
  {
    value: 'Utica College',
    data: '197045'
  },
  {
    value: 'Utica School of Commerce',
    data: '197081'
  },
  {
    value: 'Vassar College',
    data: '197133'
  },
  {
    value: 'Villa Maria College',
    data: '197142'
  },
  {
    value: 'School of Visual Arts',
    data: '197151'
  },
  {
    value: 'Wagner College',
    data: '197197'
  },
  {
    value: 'Webb Institute',
    data: '197221'
  },
  {
    value: 'Wells College',
    data: '197230'
  },
  {
    value: 'The College of Westchester',
    data: '197285'
  },
  {
    value: 'SUNY Westchester Community College',
    data: '197294'
  },
  {
    value: 'Wood Tobe-Coburn School',
    data: '197522'
  },
  {
    value: 'Word of Life Bible Institute',
    data: '197531'
  },  {
    value: 'Siena College',
    data: '195474'
  },
  {
    value: 'Skidmore College',
    data: '195526'
  },
  {
    value: 'Saint Joseph\'s College-New York',
    data: '195544'
  },
  {
    value: 'Saint Elizabeth College of Nursing',
    data: '195702'
  },
  {
    value: 'Saint John Fisher College',
    data: '195720'
  },
  {
    value: 'St Paul\'s School of Nursing-Staten Island',
    data: '195784'
  },
  {
    value: 'St John\'s University-New York',
    data: '195809'
  },
  {
    value: 'New York Career Institute',
    data: '195845'
  },
  {
    value: 'Sullivan County Community College',
    data: '195988'
  },
  {
    value: 'SUNY College of Technology at Alfred',
    data: '196006'
  },{
    value: 'Ohr Hameir Theological Seminary',
    data: '194189'
  },
  {
    value: 'Onondaga Community College',
    data: '194222'
  },
  {
    value: 'Orange County Community College',
    data: '194240'
  },
  {
    value: 'Pace University-New York',
    data: '194310'
  },
  {
    value: 'Paul Smiths College of Arts and Science',
    data: '194392'
  },
  {
    value: 'Plaza College',
    data: '194499'
  },
  {
    value: 'Davis College',
    data: '194569'
  },
  {
    value: 'Pratt Institute-Main',
    data: '194578'
  },  {
    value: 'Molloy College',
    data: '193292'
  },
  {
    value: 'Monroe College',
    data: '193308'
  },
  {
    value: 'Monroe Community College',
    data: '193326'
  },
  {
    value: 'Mount Saint Mary College',
    data: '193353'
  },
  {
    value: 'College of Mount Saint Vincent',
    data: '193399'
  },
  {
    value: 'Nassau Community College',
    data: '193478'
  },
  {
    value: 'Nazareth College',
    data: '193584'
  },
  {
    value: 'Neighborhood Playhouse School of the Theater',
    data: '193609'
  },
  {
    value: 'The College of New Rochelle',
    data: '193645'
  },
  {
    value: 'The New School',
    data: '193654'
  },
  {
    value: 'New York University',
    data: '193900'
  },
  {
    value: 'Niagara County Community College',
    data: '193946'
  },
  {
    value: 'Niagara University',
    data: '193973'
  },
  {
    value: 'North Country Community College',
    data: '194028'
  },
  {
    value: 'New York Institute of Technology',
    data: '194091'
  },
  {
    value: 'New York School of Interior Design',
    data: '194116'
  },
  {
    value: 'Nyack College',
    data: '194161'
  },  {
    value: 'Jefferson Community College',
    data: '192022'
  },
  {
    value: 'Jewish Theological Seminary of America',
    data: '192040'
  },
  {
    value: 'The Juilliard School',
    data: '192110'
  },
  {
    value: 'SBI Campus-An Affiliate of Sanford-Brown',
    data: '192156'
  },
  {
    value: 'Kehilath Yakov Rabbinical Seminary',
    data: '192165'
  },
  {
    value: 'Keuka College',
    data: '192192'
  },
  {
    value: 'LIM College',
    data: '192271'
  },
  {
    value: 'Le Moyne College',
    data: '192323'
  },
  {
    value: 'LIU Brooklyn',
    data: '192439'
  },
  {
    value: 'LIU Post',
    data: '192448'
  },
  {
    value: 'Long Island Business Institute',
    data: '192509'
  },
  {
    value: 'Machzikei Hadath Rabbinical College',
    data: '192624'
  },
  {
    value: 'Mandl School-The College of Allied Health',
    data: '192688'
  },
  {
    value: 'Manhattan College',
    data: '192703'
  },
  {
    value: 'Manhattan School of Music',
    data: '192712'
  },
  {
    value: 'Manhattanville College',
    data: '192749'
  },
  {
    value: 'Maria College of Albany',
    data: '192785'
  },
  {
    value: 'Marion S Whelan School of Nursing of Geneva General Hospital',
    data: '192800'
  },
  {
    value: 'Marist College',
    data: '192819'
  },
  {
    value: 'Marymount Manhattan College',
    data: '192864'
  },
  {
    value: 'Medaille College',
    data: '192925'
  },
  {
    value: 'Memorial School of Nursing',
    data: '192961'
  },
  {
    value: 'Mercy College',
    data: '193016'
  },
  {
    value: 'Mesivta Torah Vodaath Rabbinical Seminary',
    data: '193052'
  },
  {
    value: 'Mesivta of Eastern Parkway-Yeshiva Zichron Meilech',
    data: '193061'
  },
  {
    value: 'Mesivtha Tifereth Jerusalem of America',
    data: '193070'
  },
  {
    value: 'Mildred Elley School-Albany Campus',
    data: '193201'
  },
  {
    value: 'Mirrer Yeshiva Cent Institute',
    data: '193247'
  },
  {
    value: 'Mohawk Valley Community College',
    data: '193283'
  },  {
    value: 'Elmira College',
    data: '190983'
  },
  {
    value: 'Erie Community College',
    data: '191083'
  },
  {
    value: 'Fashion Institute of Technology',
    data: '191126'
  },
  {
    value: 'Finger Lakes Community College',
    data: '191199'
  },
  {
    value: 'Five Towns College',
    data: '191205'
  },
  {
    value: 'Fordham University',
    data: '191241'
  },
  {
    value: 'Fulton-Montgomery Community College',
    data: '191302'
  },
  {
    value: 'Genesee Community College',
    data: '191339'
  },
  {
    value: 'Hamilton College',
    data: '191515'
  },
  {
    value: 'Hartwick College',
    data: '191533'
  },
  {
    value: 'Helene Fuld College of Nursing',
    data: '191597'
  },
  {
    value: 'Herkimer County Community College',
    data: '191612'
  },
  {
    value: 'Hilbert College',
    data: '191621'
  },
  {
    value: 'Hobart William Smith Colleges',
    data: '191630'
  },
  {
    value: 'Hofstra University',
    data: '191649'
  },
  {
    value: 'Houghton College',
    data: '191676'
  },
  {
    value: 'Hudson Valley Community College',
    data: '191719'
  },
  {
    value: 'Institute of Design and Construction',
    data: '191764'
  },
  {
    value: 'Iona College',
    data: '191931'
  },
  {
    value: 'Island Drafting and Technical Institute',
    data: '191959'
  },
  {
    value: 'Ithaca College',
    data: '191968'
  },
  {
    value: 'Jamestown Community College',
    data: '191986'
  },
  {
    value: 'Jamestown Business College',
    data: '192004'
  },  {
    value: 'Beth Hatalmud Rabbinical College',
    data: '189264'
  },
  {
    value: 'Beth Hamedrash Shaarei Yosher Institute',
    data: '189273'
  },
  {
    value: 'Phillips Beth Israel School of Nursing',
    data: '189282'
  },
  {
    value: 'Boricua College',
    data: '189413'
  },
  {
    value: 'Bramson ORT College',
    data: '189422'
  },
  {
    value: 'Briarcliffe College',
    data: '189459'
  },
  {
    value: 'SUNY Broome Community College',
    data: '189547'
  },
  {
    value: 'Bryant & Stratton College-Amherst',
    data: '189556'
  },
  {
    value: 'Bryant & Stratton College-Syracuse North',
    data: '189565'
  },
  {
    value: 'Bryant & Stratton College-Syracuse',
    data: '189574'
  },
  {
    value: 'Bryant & Stratton College-Buffalo',
    data: '189583'
  },
  {
    value: 'Bryant & Stratton College-Greece',
    data: '189592'
  },
  {
    value: 'Business Informatics Center Inc',
    data: '189653'
  },
  {
    value: 'Canisius College',
    data: '189705'
  },
  {
    value: 'St Paul\'s School of Nursing-Queens',
    data: '189811'
  },
  {
    value: 'Cayuga County Community College',
    data: '189839'
  },
  {
    value: 'Cazenovia College',
    data: '189848'
  },
  {
    value: 'Central Yeshiva Tomchei Tmimim Lubavitz',
    data: '189857'
  },
  {
    value: 'Circle in the Square Theater School',
    data: '190008'
  },
  {
    value: 'Clarkson University',
    data: '190044'
  },
  {
    value: 'Clinton Community College',
    data: '190053'
  },
  {
    value: 'Colgate University',
    data: '190099'
  },
  {
    value: 'Metropolitan College of New York',
    data: '190114'
  },
  {
    value: 'Columbia University in the City of New York',
    data: '190150'
  },
  {
    value: 'Columbia-Greene Community College',
    data: '190169'
  },
  {
    value: 'Concordia College-New York',
    data: '190248'
  },
  {
    value: 'Cooper Union for the Advancement of Science and Art',
    data: '190372'
  },
  {
    value: 'Cornell University',
    data: '190415'
  },
  {
    value: 'Corning Community College',
    data: '190442'
  },
  {
    value: 'Crouse Hospital College of Nursing',
    data: '190451'
  },
  {
    value: 'Culinary Institute of America',
    data: '190503'
  },
  {
    value: 'CUNY Bernard M Baruch College',
    data: '190512'
  },
  {
    value: 'CUNY Borough of Manhattan Community College',
    data: '190521'
  },
  {
    value: 'CUNY Bronx Community College',
    data: '190530'
  },
  {
    value: 'CUNY Brooklyn College',
    data: '190549'
  },
  {
    value: 'College of Staten Island CUNY',
    data: '190558'
  },
  {
    value: 'CUNY City College',
    data: '190567'
  },
  {
    value: 'CUNY Hostos Community College',
    data: '190585'
  },
  {
    value: 'CUNY Hunter College',
    data: '190594'
  },
  {
    value: 'CUNY John Jay College of Criminal Justice',
    data: '190600'
  },
  {
    value: 'CUNY Kingsborough Community College',
    data: '190619'
  },
  {
    value: 'CUNY LaGuardia Community College',
    data: '190628'
  },
  {
    value: 'CUNY Lehman College',
    data: '190637'
  },
  {
    value: 'CUNY Medgar Evers College',
    data: '190646'
  },
  {
    value: 'CUNY New York City College of Technology',
    data: '190655'
  },
  {
    value: 'CUNY Queens College',
    data: '190664'
  },
  {
    value: 'CUNY Queensborough Community College',
    data: '190673'
  },
  {
    value: 'CUNY York College',
    data: '190691'
  },
  {
    value: 'D\'Youville College',
    data: '190716'
  },
  {
    value: 'Daemen College',
    data: '190725'
  },
  {
    value: 'Yeshiva of Far Rockaway Derech Ayson Rabbinical Seminary',
    data: '190752'
  },
  {
    value: 'Dominican College of Blauvelt',
    data: '190761'
  },
  {
    value: 'Dowling College',
    data: '190770'
  },
  {
    value: 'Dutchess Community College',
    data: '190840'
  },
  {
    value: 'Belanger School of Nursing',
    data: '190956'
  },
  {
    value: 'Elmira Business Institute',
    data: '190974'
  },  {
    value: 'Berkeley College-New York',
    data: '189228'
  }, {
    value: 'Sh\'or Yoshuv Rabbinical College',
    data: '195438'
  },  {
    value: 'St Lawrence University',
    data: '195216'
  },
  {
    value: 'The College of Saint Rose',
    data: '195234'
  },
  {
    value: 'St. Thomas Aquinas College',
    data: '195243'
  },
  {
    value: 'Samaritan Hospital School of Nursing',
    data: '195289'
  },
  {
    value: 'Sarah Lawrence College',
    data: '195304'
  },
  {
    value: 'Schenectady County Community College',
    data: '195322'
  },  {
    value: 'Rensselaer Polytechnic Institute',
    data: '194824'
  },
  {
    value: 'Roberts Wesleyan College',
    data: '194958'
  },
  {
    value: 'Everest Institute-Rochester',
    data: '194967'
  },
  {
    value: 'Rochester Institute of Technology',
    data: '195003'
  },
  {
    value: 'University of Rochester',
    data: '195030'
  },{
    value: 'Rockland Community College',
    data: '195058'
  },
  {
    value: 'The Sage Colleges',
    data: '195128'
  },
  {
    value: 'St Bonaventure University',
    data: '195164'
  },
  {
    value: 'St Francis College',
    data: '195173'
  },  {
    value: 'St Joseph\'s College of Nursing at St Joseph\'s Hospital Health Center',
    data: '195191'
  },  {
    value: 'Rabbinical College Beth Shraga',
    data: '194693'
  },
  {
    value: 'Rabbinical College of Long Island',
    data: '194736'
  },
  {
    value: 'Rabbinical Seminary of America',
    data: '194763'
  },  {
    value: 'Brown Mackie College-South Bend',
    data: '151944'
  },
  {
    value: 'Mid-America College of Funeral Service',
    data: '151962'
  },
  {
    value: 'University of Notre Dame',
    data: '152080'
  },
  {
    value: 'Oakland City University',
    data: '152099'
  },
  {
    value: 'Purdue University-Calumet Campus',
    data: '152248'
  },
  {
    value: 'Purdue University-North Central Campus',
    data: '152266'
  },
  {
    value: 'Rose-Hulman Institute of Technology',
    data: '152318'
  },
  {
    value: 'University of Saint Francis-Fort Wayne',
    data: '152336'
  },
  {
    value: 'Saint Josephs College',
    data: '152363'
  },
  {
    value: 'Saint Mary-of-the-Woods College',
    data: '152381'
  },
  {
    value: 'Saint Mary\'s College',
    data: '152390'
  },
  {
    value: 'Saint Elizabeth School of Nursing',
    data: '152497'
  },
  {
    value: 'Taylor University',
    data: '152530'
  },
  {
    value: 'Trine University',
    data: '152567'
  },
  {
    value: 'Valparaiso University',
    data: '152600'
  },
  {
    value: 'Vincennes University',
    data: '152637'
  },
  {
    value: 'Wabash College',
    data: '152673'
  },
  {
    value: 'Allen College',
    data: '152798'
  },
  {
    value: 'AIB College of Business',
    data: '152822'
  },
  {
    value: 'Briar Cliff University',
    data: '152992'
  },
  {
    value: 'Buena Vista University',
    data: '153001'
  },
  {
    value: 'Central College',
    data: '153108'
  },
  {
    value: 'Clarke University',
    data: '153126'
  },
  {
    value: 'Coe College',
    data: '153144'
  },
  {
    value: 'Cornell College',
    data: '153162'
  },
  {
    value: 'Des Moines Area Community College',
    data: '153214'
  },
  {
    value: 'Divine Word College',
    data: '153241'
  },
  {
    value: 'Dordt College',
    data: '153250'
  },
  {
    value: 'Drake University',
    data: '153269'
  },
  {
    value: 'University of Dubuque',
    data: '153278'
  },
  {
    value: 'Ellsworth Community College',
    data: '153296'
  },
  {
    value: 'Emmaus Bible College',
    data: '153302'
  },
  {
    value: 'Eastern Iowa Community College District',
    data: '153311'
  },
  {
    value: 'Faith Baptist Bible College and Theological Seminary',
    data: '153320'
  },
  {
    value: 'Graceland University-Lamoni',
    data: '153366'
  },
  {
    value: 'Grand View University',
    data: '153375'
  },
  {
    value: 'Grinnell College',
    data: '153384'
  },
  {
    value: 'Kaplan University-Mason City Campus',
    data: '153409'
  },
  {
    value: 'Kaplan University-Cedar Rapids Campus',
    data: '153418'
  },
  {
    value: 'Hamilton Technical College',
    data: '153427'
  },
  {
    value: 'Hawkeye Community College',
    data: '153445'
  },
  {
    value: 'Indian Hills Community College',
    data: '153472'
  },
  {
    value: 'Iowa Central Community College',
    data: '153524'
  },
  {
    value: 'Iowa Lakes Community College',
    data: '153533'
  },
  {
    value: 'Iowa State University',
    data: '153603'
  },
  {
    value: 'Iowa Wesleyan College',
    data: '153621'
  },
  {
    value: 'Iowa Western Community College',
    data: '153630'
  },
  {
    value: 'University of Iowa',
    data: '153658'
  },
  {
    value: 'Kirkwood Community College',
    data: '153737'
  },
  {
    value: 'Loras College',
    data: '153825'
  },
  {
    value: 'Luther College',
    data: '153834'
  },
  {
    value: 'Maharishi University of Management',
    data: '153861'
  },
  {
    value: 'Marshalltown Community College',
    data: '153922'
  },
  {
    value: 'Mercy College of Health Sciences',
    data: '153977'
  },
  {
    value: 'Morningside College',
    data: '154004'
  },
  {
    value: 'Mount Mercy University',
    data: '154013'
  },
  {
    value: 'Ashford University',
    data: '154022'
  },
  {
    value: 'North Iowa Area Community College',
    data: '154059'
  },
  {
    value: 'University of Northern Iowa',
    data: '154095'
  },
  {
    value: 'Northwestern College',
    data: '154101'
  },
  {
    value: 'Northeast Iowa Community College',
    data: '154110'
  },
  {
    value: 'Northwest Iowa Community College',
    data: '154129'
  },
  {
    value: 'Palmer College of Chiropractic',
    data: '154174'
  },
  {
    value: 'Saint Ambrose University',
    data: '154235'
  },
  {
    value: 'St Luke\'s College',
    data: '154262'
  },
  {
    value: 'Simpson College',
    data: '154350'
  },
  {
    value: 'Southeastern Community College',
    data: '154378'
  },
  {
    value: 'Southwestern Community College',
    data: '154396'
  },
  {
    value: 'Upper Iowa University',
    data: '154493'
  },
  {
    value: 'Waldorf College',
    data: '154518'
  },
  {
    value: 'Wartburg College',
    data: '154527'
  },
  {
    value: 'Western Iowa Tech Community College',
    data: '154572'
  },
  {
    value: 'William Penn University',
    data: '154590'
  },
  {
    value: 'Allen County Community College',
    data: '154642'
  },
  {
    value: 'Baker University',
    data: '154688'
  },
  {
    value: 'Barton County Community College',
    data: '154697'
  },
  {
    value: 'Benedictine College',
    data: '154712'
  },
  {
    value: 'Bethany College',
    data: '154721'
  },
  {
    value: 'Bethel College-North Newton',
    data: '154749'
  },
  {
    value: 'Brown Mackie College-Kansas City',
    data: '154767'
  },
  {
    value: 'Brown Mackie College-Salina',
    data: '154776'
  },
  {
    value: 'Bryan University',
    data: '154794'
  },
  {
    value: 'Butler Community College',
    data: '154800'
  },
  {
    value: 'Central Baptist Theological Seminary',
    data: '154837'
  },
  {
    value: 'Central Christian College of Kansas',
    data: '154855'
  },
  {
    value: 'Cloud County Community College',
    data: '154907'
  },
  {
    value: 'Coffeyville Community College',
    data: '154925'
  },
  {
    value: 'Colby Community College',
    data: '154934'
  },
  {
    value: 'Cowley County Community College',
    data: '154952'
  },
  {
    value: 'Dodge City Community College',
    data: '154998'
  },
  {
    value: 'Donnelly College',
    data: '155007'
  },
  {
    value: 'Emporia State University',
    data: '155025'
  },
  {
    value: 'Flint Hills Technical College',
    data: '155052'
  },
  {
    value: 'Fort Hays State University',
    data: '155061'
  },
  {
    value: 'Barclay College',
    data: '155070'
  },
  {
    value: 'Friends University',
    data: '155089'
  },
  {
    value: 'Fort Scott Community College',
    data: '155098'
  },
  {
    value: 'Garden City Community College',
    data: '155104'
  },
  {
    value: 'Haskell Indian Nations University',
    data: '155140'
  },
  {
    value: 'Hesston College',
    data: '155177'
  },
  {
    value: 'Highland Community College',
    data: '155186'
  },
  {
    value: 'Hutchinson Community College',
    data: '155195'
  },
  {
    value: 'Independence Community College',
    data: '155201'
  },
  {
    value: 'Johnson County Community College',
    data: '155210'
  },
  {
    value: 'Kansas City Kansas Community College',
    data: '155292'
  },
  {
    value: 'Kansas City College & Bible School',
    data: '155308'
  },
  {
    value: 'University of Kansas',
    data: '155317'
  },
  {
    value: 'Newman University',
    data: '155335'
  },
  {
    value: 'Kansas State University',
    data: '155399'
  },
  {
    value: 'Kansas Wesleyan University',
    data: '155414'
  },
  {
    value: 'Washburn Institute of Technology',
    data: '155423'
  },
  {
    value: 'Labette Community College',
    data: '155450'
  },
  {
    value: 'Manhattan Area Technical College',
    data: '155487'
  },
  {
    value: 'Manhattan Christian College',
    data: '155496'
  },
  {
    value: 'McPherson College',
    data: '155511'
  },
  {
    value: 'MidAmerica Nazarene University',
    data: '155520'
  },
  {
    value: 'Neosho County Community College',
    data: '155566'
  },
  {
    value: 'North Central Kansas Technical College',
    data: '155593'
  },
  {
    value: 'Ottawa University-Ottawa',
    data: '155627'
  },
  {
    value: 'Ottawa University-Kansas City',
    data: '155636'
  },
  {
    value: 'Pittsburg State University',
    data: '155681'
  },
  {
    value: 'Pratt Community College',
    data: '155715'
  },
  {
    value: 'University of Saint Mary',
    data: '155812'
  },
  {
    value: 'Salina Area Technical College',
    data: '155830'
  },
  {
    value: 'Seward County Community College and Area Technical School',
    data: '155858'
  },
  {
    value: 'Southwestern College',
    data: '155900'
  },
  {
    value: 'Sterling College',
    data: '155937'
  },
  {
    value: 'Tabor College',
    data: '155973'
  },
  {
    value: 'Washburn University',
    data: '156082'
  },
  {
    value: 'Wichita Area Technical College',
    data: '156107'
  },
  {
    value: 'Wichita State University',
    data: '156125'
  },
  {
    value: 'Alice Lloyd College',
    data: '156189'
  },
  {
    value: 'Asbury University',
    data: '156213'
  },
  {
    value: 'Ashland Community and Technical College',
    data: '156231'
  },
  {
    value: 'Bellarmine University',
    data: '156286'
  },
  {
    value: 'Berea College',
    data: '156295'
  },
  {
    value: 'Southcentral Kentucky Community and Technical College',
    data: '156338'
  },
  {
    value: 'Brescia University',
    data: '156356'
  },
  {
    value: 'Campbellsville University',
    data: '156365'
  },
  {
    value: 'Bluegrass Community and Technical College',
    data: '156392'
  },
  {
    value: 'Centre College',
    data: '156408'
  },
  {
    value: 'Clear Creek Baptist Bible College',
    data: '156417'
  },
  {
    value: 'University of the Cumberlands',
    data: '156541'
  },
  {
    value: 'Eastern Kentucky University',
    data: '156620'
  },
  {
    value: 'Elizabethtown Community and Technical College',
    data: '156648'
  },
  {
    value: 'Georgetown College',
    data: '156745'
  },
  {
    value: 'Hazard Community and Technical College',
    data: '156790'
  },
  {
    value: 'Henderson Community College',
    data: '156851'
  },
  {
    value: 'Hopkinsville Community College',
    data: '156860'
  },
  {
    value: 'Daymar College-Paducah Main',
    data: '156903'
  },
  {
    value: 'Jefferson Community and Technical College',
    data: '156921'
  },
  {
    value: 'National College-Lexington',
    data: '157021'
  },
  {
    value: 'Kentucky Mountain Bible College',
    data: '157030'
  },
  {
    value: 'Kentucky State University',
    data: '157058'
  },
  {
    value: 'Kentucky Wesleyan College',
    data: '157076'
  },
  {
    value: 'University of Kentucky',
    data: '157085'
  },
  {
    value: 'Kentucky Christian University',
    data: '157100'
  },
  {
    value: 'Lindsey Wilson College',
    data: '157216'
  },
  {
    value: 'Sullivan College of Technology and Design',
    data: '157270'
  },
  {
    value: 'University of Louisville',
    data: '157289'
  },
  {
    value: 'Madisonville Community College',
    data: '157304'
  },
  {
    value: 'Maysville Community and Technical College',
    data: '157331'
  },
  {
    value: 'Midway College',
    data: '157377'
  },
  {
    value: 'Morehead State University',
    data: '157386'
  },
  {
    value: 'Murray State University',
    data: '157401'
  },
  {
    value: 'Gateway Community and Technical College',
    data: '157438'
  },
  {
    value: 'Northern Kentucky University',
    data: '157447'
  },
  {
    value: 'Daymar College-Owensboro',
    data: '157465'
  },
  {
    value: 'West Kentucky Community and Technical College',
    data: '157483'
  },
  {
    value: 'University of Pikeville',
    data: '157535'
  },
  {
    value: 'Big Sandy Community and Technical College',
    data: '157553'
  },
  {
    value: 'Brown Mackie College-Louisville',
    data: '157599'
  },
  {
    value: 'Saint Catharine College',
    data: '157632'
  },
  {
    value: 'Brown Mackie College-Northern Kentucky',
    data: '157696'
  },
  {
    value: 'Somerset Community College',
    data: '157711'
  },
  {
    value: 'Southeast Kentucky Community and Technical College',
    data: '157739'
  },
  {
    value: 'Spalding University',
    data: '157757'
  },
  {
    value: 'Spencerian College-Louisville',
    data: '157766'
  },
  {
    value: 'Sullivan University',
    data: '157793'
  },
  {
    value: 'Thomas More College',
    data: '157809'
  },
  {
    value: 'Transylvania University',
    data: '157818'
  },
  {
    value: 'Union College',
    data: '157863'
  },
  {
    value: 'Western Kentucky University',
    data: '157951'
  },
  {
    value: 'Central Louisiana Technical Community College',
    data: '158088'
  },
  {
    value: 'Capital Area Technical College',
    data: '158352'
  },
  {
    value: 'Bossier Parish Community College',
    data: '158431'
  },
  {
    value: 'Centenary College of Louisiana',
    data: '158477'
  },
  {
    value: 'Delgado Community College',
    data: '158662'
  },
  {
    value: 'Delta School of Business and Technology',
    data: '158723'
  },
  {
    value: 'Dillard University',
    data: '158802'
  },
  {
    value: 'Nunez Community College',
    data: '158884'
  },
  {
    value: 'Grambling State University',
    data: '159009'
  },
  {
    value: 'ITI Technical College',
    data: '159197'
  },
  {
    value: 'Louisiana State University-Alexandria',
    data: '159382'
  },
  {
    value: 'Louisiana State University and Agricultural & Mechanical College',
    data: '159391'
  },
  {
    value: 'Louisiana State University-Eunice',
    data: '159407'
  },
  {
    value: 'Louisiana State University-Shreveport',
    data: '159416'
  },
  {
    value: 'Louisiana College',
    data: '159568'
  },
  {
    value: 'Louisiana Tech University',
    data: '159647'
  },
  {
    value: 'Loyola University New Orleans',
    data: '159656'
  },
  {
    value: 'McNeese State University',
    data: '159717'
  },
  {
    value: 'University of New Orleans',
    data: '159939'
  },
  {
    value: 'Nicholls State University',
    data: '159966'
  },
  {
    value: 'University of Louisiana at Monroe',
    data: '159993'
  },
  {
    value: 'Northwest Louisiana Technical College',
    data: '160010'
  },
  {
    value: 'Northwestern State University of Louisiana',
    data: '160038'
  },
  {
    value: 'Our Lady of Holy Cross College',
    data: '160065'
  },
  {
    value: 'Our Lady of the Lake College',
    data: '160074'
  },
  {
    value: 'Saint Joseph Seminary College',
    data: '160409'
  },
  {
    value: 'Fletcher Technical Community College',
    data: '160481'
  },
  {
    value: 'Remington College-Lafayette Campus',
    data: '160524'
  },
  {
    value: 'SOWELA Technical Community College',
    data: '160579'
  },
  {
    value: 'Southeastern Louisiana University',
    data: '160612'
  },
  {
    value: 'Southern University and A & M College',
    data: '160621'
  },
  {
    value: 'Southern University at New Orleans',
    data: '160630'
  },
  {
    value: 'Southern University at Shreveport',
    data: '160649'
  },
  {
    value: 'University of Louisiana at Lafayette',
    data: '160658'
  },
  {
    value: 'Northshore Technical Community College',
    data: '160667'
  },
  {
    value: 'Tulane University of Louisiana',
    data: '160755'
  },
  {
    value: 'Xavier University of Louisiana',
    data: '160904'
  },
  {
    value: 'South Central Louisiana Technical College-Young Memorial Campus',
    data: '160913'
  },
  {
    value: 'Kaplan University-Maine Campus',
    data: '160940'
  },
  {
    value: 'College of the Atlantic',
    data: '160959'
  },
  {
    value: 'Bates College',
    data: '160977'
  },
  {
    value: 'Bowdoin College',
    data: '161004'
  },
  {
    value: 'Maine College of Health Professions',
    data: '161022'
  },
  {
    value: 'Central Maine Community College',
    data: '161077'
  },
  {
    value: 'Colby College',
    data: '161086'
  },
  {
    value: 'Eastern Maine Community College',
    data: '161138'
  },
  {
    value: 'Husson University',
    data: '161165'
  },
  {
    value: 'Kennebec Valley Community College',
    data: '161192'
  },
  {
    value: 'The Landing School',
    data: '161208'
  },
  {
    value: 'University of Maine at Augusta',
    data: '161217'
  },
  {
    value: 'University of Maine at Farmington',
    data: '161226'
  },
  {
    value: 'University of Maine at Fort Kent',
    data: '161235'
  },
  {
    value: 'University of Maine at Machias',
    data: '161244'
  },
  {
    value: 'University of Maine',
    data: '161253'
  },
  {
    value: 'Maine Maritime Academy',
    data: '161299'
  },
  {
    value: 'University of Maine at Presque Isle',
    data: '161341'
  },
  {
    value: 'University of New England',
    data: '161457'
  },
  {
    value: 'Northern Maine Community College',
    data: '161484'
  },
  {
    value: 'Maine College of Art',
    data: '161509'
  },
  {
    value: 'Saint Joseph\'s College of Maine',
    data: '161518'
  },
  {
    value: 'Southern Maine Community College',
    data: '161545'
  },
  {
    value: 'University of Southern Maine',
    data: '161554'
  },
  {
    value: 'Thomas College',
    data: '161563'
  },
  {
    value: 'Unity College',
    data: '161572'
  },
  {
    value: 'Washington County Community College',
    data: '161581'
  },
  {
    value: 'Allegany College of Maryland',
    data: '161688'
  },
  {
    value: 'Anne Arundel Community College',
    data: '161767'
  },
  {
    value: 'Baltimore City Community College',
    data: '161864'
  },
  {
    value: 'University of Baltimore',
    data: '161873'
  },
  {
    value: 'Bowie State University',
    data: '162007'
  },
  {
    value: 'Capitol Technology University',
    data: '162061'
  },
  {
    value: 'Cecil College',
    data: '162104'
  },
  {
    value: 'College of Southern Maryland',
    data: '162122'
  },
  {
    value: 'Chesapeake College',
    data: '162168'
  },
  {
    value: 'Washington Adventist University',
    data: '162210'
  },
  {
    value: 'Coppin State University',
    data: '162283'
  },
  {
    value: 'Frederick Community College',
    data: '162557'
  },
  {
    value: 'Frostburg State University',
    data: '162584'
  },
  {
    value: 'Garrett College',
    data: '162609'
  },
  {
    value: 'Goucher College',
    data: '162654'
  },
  {
    value: 'Kaplan University-Hagerstown Campus',
    data: '162681'
  },
  {
    value: 'Hagerstown Community College',
    data: '162690'
  },
  {
    value: 'Harford Community College',
    data: '162706'
  },
  {
    value: 'Hood College',
    data: '162760'
  },
  {
    value: 'Howard Community College',
    data: '162779'
  },
  {
    value: 'Johns Hopkins University',
    data: '162928'
  },
  {
    value: 'Loyola University Maryland',
    data: '163046'
  },
  {
    value: 'University of Maryland-University College',
    data: '163204'
  },
  {
    value: 'University of Maryland-Baltimore County',
    data: '163268'
  },
  {
    value: 'University of Maryland-College Park',
    data: '163286'
  },
  {
    value: 'Maryland Institute College of Art',
    data: '163295'
  },
  {
    value: 'University of Maryland Eastern Shore',
    data: '163338'
  },
  {
    value: 'Montgomery College',
    data: '163426'
  },
  {
    value: 'Morgan State University',
    data: '163453'
  },
  {
    value: 'Mount St Mary\'s University',
    data: '163462'
  },
  {
    value: 'Ner Israel Rabbinical College',
    data: '163532'
  },
  {
    value: 'Notre Dame of Maryland University',
    data: '163578'
  },
  {
    value: 'Prince George\'s Community College',
    data: '163657'
  },
  {
    value: 'Salisbury University',
    data: '163851'
  },
  {
    value: 'St Mary\'s College of Maryland',
    data: '163912'
  },
  {
    value: 'Sojourner-Douglass College',
    data: '163921'
  },
  {
    value: 'St John\'s College',
    data: '163976'
  },
  {
    value: 'Towson University',
    data: '164076'
  },
  {
    value: 'Stevenson University',
    data: '164173'
  },
  {
    value: 'Washington College',
    data: '164216'
  },
  {
    value: 'McDaniel College',
    data: '164270'
  },
  {
    value: 'Wor-Wic Community College',
    data: '164313'
  },
  {
    value: 'New England College of Business and Finance',
    data: '164438'
  },
  {
    value: 'American International College',
    data: '164447'
  },
  {
    value: 'Amherst College',
    data: '164465'
  },
  {
    value: 'Anna Maria College',
    data: '164492'
  },
  {
    value: 'Assumption College',
    data: '164562'
  },
  {
    value: 'Babson College',
    data: '164580'
  },
  {
    value: 'Boston Baptist College',
    data: '164614'
  },
  {
    value: 'Bay Path University',
    data: '164632'
  },
  {
    value: 'Bay State College',
    data: '164641'
  },
  {
    value: 'Becker College',
    data: '164720'
  },
  {
    value: 'Bentley University',
    data: '164739'
  },
  {
    value: 'Berklee College of Music',
    data: '164748'
  },
  {
    value: 'Berkshire Community College',
    data: '164775'
  },
  {
    value: 'Boston Architectural College',
    data: '164872'
  },
  {
    value: 'Boston College',
    data: '164924'
  },
  {
    value: 'The Boston Conservatory',
    data: '164933'
  },
  {
    value: 'Boston University',
    data: '164988'
  },
  {
    value: 'Brandeis University',
    data: '165015'
  },
  {
    value: 'Bridgewater State University',
    data: '165024'
  },
  {
    value: 'Bristol Community College',
    data: '165033'
  },
  {
    value: 'Bunker Hill Community College',
    data: '165112'
  },
  {
    value: 'Cambridge College',
    data: '165167'
  },
  {
    value: 'Cape Cod Community College',
    data: '165194'
  },
  {
    value: 'Laboure College',
    data: '165264'
  },
  {
    value: 'Clark University',
    data: '165334'
  },
  {
    value: 'Curry College',
    data: '165529'
  },
  {
    value: 'Dean College',
    data: '165574'
  },
  {
    value: 'Eastern Nazarene College',
    data: '165644'
  },
  {
    value: 'Emerson College',
    data: '165662'
  },
  {
    value: 'Emmanuel College',
    data: '165671'
  },
  {
    value: 'Endicott College',
    data: '165699'
  },
  {
    value: 'Fisher College',
    data: '165802'
  },
  {
    value: 'Fitchburg State University',
    data: '165820'
  },
  {
    value: 'Framingham State University',
    data: '165866'
  },
  {
    value: 'Benjamin Franklin Institute of Technology',
    data: '165884'
  },
  {
    value: 'Gordon College',
    data: '165936'
  },
  {
    value: 'Greenfield Community College',
    data: '165981'
  },
  {
    value: 'Hampshire College',
    data: '166018'
  },
  {
    value: 'Harvard University',
    data: '166027'
  },
  {
    value: 'Hellenic College-Holy Cross Greek Orthodox School of Theology',
    data: '166054'
  },
  {
    value: 'College of the Holy Cross',
    data: '166124'
  },
  {
    value: 'Holyoke Community College',
    data: '166133'
  },
  {
    value: 'Lasell College',
    data: '166391'
  },
  {
    value: 'Lawrence Memorial Hospital School of Nursing',
    data: '166407'
  },
  {
    value: 'Lesley University',
    data: '166452'
  },
  {
    value: 'University of Massachusetts-Lowell',
    data: '166513'
  },
  {
    value: 'Marian Court College',
    data: '166601'
  },
  {
    value: 'University of Massachusetts-Amherst',
    data: '166629'
  },
  {
    value: 'University of Massachusetts-Boston',
    data: '166638'
  },
  {
    value: 'Massachusetts Bay Community College',
    data: '166647'
  },
  {
    value: 'MCPHS University',
    data: '166656'
  },
  {
    value: 'Massachusetts College of Art and Design',
    data: '166674'
  },
  {
    value: 'Massachusetts Institute of Technology',
    data: '166683'
  },
  {
    value: 'Massachusetts Maritime Academy',
    data: '166692'
  },
  {
    value: 'Massasoit Community College',
    data: '166823'
  },
  {
    value: 'Merrimack College',
    data: '166850'
  },
  {
    value: 'Middlesex Community College',
    data: '166887'
  },
  {
    value: 'Montserrat College of Art',
    data: '166911'
  },
  {
    value: 'Mount Holyoke College',
    data: '166939'
  },
  {
    value: 'Mount Ida College',
    data: '166948'
  },
  {
    value: 'Mount Wachusett Community College',
    data: '166957'
  },
  {
    value: 'School of the Museum of Fine Arts-Boston',
    data: '166984'
  },
  {
    value: 'The New England Conservatory of Music',
    data: '167057'
  },
  {
    value: 'New England School of Photography',
    data: '167224'
  },
  {
    value: 'Newbury College',
    data: '167251'
  },
  {
    value: 'Nichols College',
    data: '167260'
  },
  {
    value: 'Massachusetts College of Liberal Arts',
    data: '167288'
  },
  {
    value: 'North Shore Community College',
    data: '167312'
  },
  {
    value: 'The New England Institute of Art',
    data: '167321'
  },
  {
    value: 'Northeastern University',
    data: '167358'
  },
  {
    value: 'Northern Essex Community College',
    data: '167376'
  },
  {
    value: 'College of Our Lady of the Elms',
    data: '167394'
  },
  {
    value: 'Pine Manor College',
    data: '167455'
  },
  {
    value: 'Quincy College',
    data: '167525'
  },
  {
    value: 'Quinsigamond Community College',
    data: '167534'
  },
  {
    value: 'Regis College',
    data: '167598'
  },
  {
    value: 'Roxbury Community College',
    data: '167631'
  },
  {
    value: 'Saint John\'s Seminary',
    data: '167677'
  },
  {
    value: 'Salem State University',
    data: '167729'
  },
  {
    value: 'Simmons College',
    data: '167783'
  },
  {
    value: 'Bard College at Simon\'s Rock',
    data: '167792'
  },
  {
    value: 'Smith College',
    data: '167835'
  },
  {
    value: 'Springfield College',
    data: '167899'
  },
  {
    value: 'Springfield Technical Community College',
    data: '167905'
  },
  {
    value: 'University of Massachusetts-Dartmouth',
    data: '167987'
  },
  {
    value: 'Stonehill College',
    data: '167996'
  },
  {
    value: 'Suffolk University',
    data: '168005'
  },
  {
    value: 'Tufts University',
    data: '168148'
  },
  {
    value: 'Wellesley College',
    data: '168218'
  },
  {
    value: 'Wentworth Institute of Technology',
    data: '168227'
  },
  {
    value: 'Western New England University',
    data: '168254'
  },
  {
    value: 'Westfield State University',
    data: '168263'
  },
  {
    value: 'Wheaton College',
    data: '168281'
  },
  {
    value: 'Wheelock College',
    data: '168290'
  },
  {
    value: 'Williams College',
    data: '168342'
  },
  {
    value: 'Worcester Polytechnic Institute',
    data: '168421'
  },
  {
    value: 'Worcester State University',
    data: '168430'
  },
  {
    value: 'Adrian College',
    data: '168528'
  },
  {
    value: 'Albion College',
    data: '168546'
  },
  {
    value: 'Alma College',
    data: '168591'
  },
  {
    value: 'Alpena Community College',
    data: '168607'
  },
  {
    value: 'Andrews University',
    data: '168740'
  },
  {
    value: 'Aquinas College',
    data: '168786'
  },
  {
    value: 'Baker College of Owosso',
    data: '168838'
  },
  {
    value: 'Baker College of Flint',
    data: '168847'
  },
  {
    value: 'Bay de Noc Community College',
    data: '168883'
  },
  {
    value: 'Calvin College',
    data: '169080'
  },
  {
    value: 'Carnegie Institute',
    data: '169187'
  },
  {
    value: 'Central Michigan University',
    data: '169248'
  },
  {
    value: 'Mott Community College',
    data: '169275'
  },
  {
    value: 'Cleary University',
    data: '169327'
  },
  {
    value: 'College for Creative Studies',
    data: '169442'
  },
  {
    value: 'Davenport University',
    data: '169479'
  },
  {
    value: 'Delta College',
    data: '169521'
  },
  {
    value: 'MIAT College of Technology',
    data: '169655'
  },
  {
    value: 'University of Detroit Mercy',
    data: '169716'
  },
  {
    value: 'Dorsey Business Schools-Madison Heights',
    data: '169734'
  },
  {
    value: 'Dorsey Business Schools-Southgate',
    data: '169761'
  },
  {
    value: 'Eastern Michigan University',
    data: '169798'
  },
  {
    value: 'Ferris State University',
    data: '169910'
  },
  {
    value: 'Glen Oaks Community College',
    data: '169974'
  },
  {
    value: 'Kettering University',
    data: '169983'
  },
  {
    value: 'Gogebic Community College',
    data: '169992'
  },
  {
    value: 'Grace Bible College',
    data: '170000'
  },
  {
    value: 'Cornerstone University',
    data: '170037'
  },
  {
    value: 'Grand Rapids Community College',
    data: '170055'
  },
  {
    value: 'Grand Valley State University',
    data: '170082'
  },
  {
    value: 'Great Lakes Christian College',
    data: '170091'
  },
  {
    value: 'Henry Ford Community College',
    data: '170240'
  },
  {
    value: 'Hope College',
    data: '170301'
  },
  {
    value: 'ITT Technical Institute-Wyoming',
    data: '170417'
  },
  {
    value: 'Jackson College',
    data: '170444'
  },
  {
    value: 'Kalamazoo College',
    data: '170532'
  },
  {
    value: 'Kalamazoo Valley Community College',
    data: '170541'
  },
  {
    value: 'Kellogg Community College',
    data: '170550'
  },
  {
    value: 'Kirtland Community College',
    data: '170587'
  },
  {
    value: 'Lake Michigan College',
    data: '170620'
  },
  {
    value: 'Lake Superior State University',
    data: '170639'
  },
  {
    value: 'Lansing Community College',
    data: '170657'
  },
  {
    value: 'Lawrence Technological University',
    data: '170675'
  },
  {
    value: 'Macomb Community College',
    data: '170790'
  },
  {
    value: 'Madonna University',
    data: '170806'
  },
  {
    value: 'Marygrove College',
    data: '170842'
  },
  {
    value: 'Rochester College',
    data: '170967'
  },
  {
    value: 'University of Michigan-Ann Arbor',
    data: '170976'
  },
  {
    value: 'Michigan State University',
    data: '171100'
  },
  {
    value: 'Michigan Technological University',
    data: '171128'
  },
  {
    value: 'University of Michigan-Dearborn',
    data: '171137'
  },
  {
    value: 'University of Michigan-Flint',
    data: '171146'
  },
  {
    value: 'Mid Michigan Community College',
    data: '171155'
  },
  {
    value: 'Monroe County Community College',
    data: '171225'
  },
  {
    value: 'Montcalm Community College',
    data: '171234'
  },
  {
    value: 'Baker College of Muskegon',
    data: '171298'
  },
  {
    value: 'Muskegon Community College',
    data: '171304'
  },
  {
    value: 'North Central Michigan College',
    data: '171395'
  },
  {
    value: 'Northern Michigan University',
    data: '171456'
  },
  {
    value: 'Northwestern Michigan College',
    data: '171483'
  },
  {
    value: 'Northwood University-Michigan',
    data: '171492'
  },
  {
    value: 'Oakland Community College',
    data: '171535'
  },
  {
    value: 'Oakland University',
    data: '171571'
  },
  {
    value: 'Olivet College',
    data: '171599'
  },
  {
    value: 'Kuyper College',
    data: '171881'
  },
  {
    value: 'Sacred Heart Major Seminary',
    data: '172033'
  },
  {
    value: 'Saginaw Valley State University',
    data: '172051'
  },
  {
    value: 'Schoolcraft College',
    data: '172200'
  },
  {
    value: 'Siena Heights University',
    data: '172264'
  },
  {
    value: 'St Clair County Community College',
    data: '172291'
  },
  {
    value: 'Southwestern Michigan College',
    data: '172307'
  },
  {
    value: 'Spring Arbor University',
    data: '172334'
  },
  {
    value: 'Michigan Career and Technical Institute',
    data: '172422'
  },
  {
    value: 'Finlandia University',
    data: '172440'
  },
  {
    value: 'Washtenaw Community College',
    data: '172617'
  },
  {
    value: 'Wayne County Community College District',
    data: '172635'
  },
  {
    value: 'Wayne State University',
    data: '172644'
  },
  {
    value: 'West Shore Community College',
    data: '172671'
  },
  {
    value: 'Western Michigan University',
    data: '172699'
  },
  {
    value: 'Academy College',
    data: '172866'
  },
  {
    value: 'Alexandria Technical & Community College',
    data: '172918'
  },
  {
    value: 'Anoka Technical College',
    data: '172954'
  },
  {
    value: 'Anoka-Ramsey Community College',
    data: '172963'
  },
  {
    value: 'Augsburg College',
    data: '173045'
  },
  {
    value: 'Riverland Community College',
    data: '173063'
  },
  {
    value: 'Northwest Technical College',
    data: '173115'
  },
  {
    value: 'Bemidji State University',
    data: '173124'
  },
  {
    value: 'Bethany Lutheran College',
    data: '173142'
  },
  {
    value: 'Bethel University',
    data: '173160'
  },
  {
    value: 'Central Lakes College-Brainerd',
    data: '173203'
  },
  {
    value: 'Carleton College',
    data: '173258'
  },
  {
    value: 'Concordia College at Moorhead',
    data: '173300'
  },
  {
    value: 'Concordia University-Saint Paul',
    data: '173328'
  },
  {
    value: 'Dakota County Technical College',
    data: '173416'
  },
  {
    value: 'Martin Luther College',
    data: '173452'
  },
  {
    value: 'Lake Superior College',
    data: '173461'
  },
  {
    value: 'Duluth Business University',
    data: '173489'
  },
  {
    value: 'Minnesota State Community and Technical College',
    data: '173559'
  },
  {
    value: 'Globe University-Woodbury',
    data: '173629'
  },
  {
    value: 'Minnesota West Community and Technical College',
    data: '173638'
  },
  {
    value: 'Gustavus Adolphus College',
    data: '173647'
  },
  {
    value: 'Hamline University',
    data: '173665'
  },
  {
    value: 'Hennepin Technical College',
    data: '173708'
  },
  {
    value: 'Hibbing Community College',
    data: '173735'
  },
  {
    value: 'Inver Hills Community College',
    data: '173799'
  },
  {
    value: 'Itasca Community College',
    data: '173805'
  },
  {
    value: 'The Art Institutes International-Minnesota',
    data: '173887'
  },
  {
    value: 'Macalester College',
    data: '173902'
  },
  {
    value: 'South Central College',
    data: '173911'
  },
  {
    value: 'Minnesota State University-Mankato',
    data: '173920'
  },
  {
    value: 'Argosy University-Twin Cities',
    data: '173984'
  },
  {
    value: 'Mesabi Range College',
    data: '173993'
  },
  {
    value: 'Metropolitan State University',
    data: '174020'
  },
  {
    value: 'University of Minnesota-Twin Cities',
    data: '174066'
  },
  {
    value: 'University of Minnesota-Crookston',
    data: '174075'
  },
  {
    value: 'Minneapolis Business College',
    data: '174118'
  },
  {
    value: 'Minneapolis College of Art and Design',
    data: '174127'
  },
  {
    value: 'Minneapolis Community and Technical College',
    data: '174136'
  },
  {
    value: 'Herzing University-Minneapolis',
    data: '174154'
  },
  {
    value: 'Crossroads College',
    data: '174206'
  },
  {
    value: 'University of Minnesota-Duluth',
    data: '174233'
  },
  {
    value: 'University of Minnesota-Morris',
    data: '174251'
  },
  {
    value: 'Minnesota School of Business-Richfield',
    data: '174279'
  },
  {
    value: 'Minnesota State University Moorhead',
    data: '174358'
  },
  {
    value: 'North Hennepin Community College',
    data: '174376'
  },
  {
    value: 'National American University-Roseville',
    data: '174385'
  },
  {
    value: 'Sanford-Brown College-Mendota Heights',
    data: '174394'
  },
  {
    value: 'Normandale Community College',
    data: '174428'
  },
  {
    value: 'North Central University',
    data: '174437'
  },
  {
    value: 'Northland Community and Technical College',
    data: '174473'
  },
  {
    value: 'University of Northwestern-St Paul',
    data: '174491'
  },
  {
    value: 'Northwestern Health Sciences University',
    data: '174507'
  },
  {
    value: 'Oak Hills Christian College',
    data: '174525'
  },
  {
    value: 'Pine Technical & Community College',
    data: '174570'
  },
  {
    value: 'Rainy River Community College',
    data: '174604'
  },
  {
    value: 'Rochester Community and Technical College',
    data: '174738'
  },
  {
    value: 'College of Saint Benedict',
    data: '174747'
  },
  {
    value: 'St Cloud Technical and Community College',
    data: '174756'
  },
  {
    value: 'Saint Cloud State University',
    data: '174783'
  },
  {
    value: 'Saint Johns University',
    data: '174792'
  },
  {
    value: 'Saint Mary\'s University of Minnesota',
    data: '174817'
  },
  {
    value: 'St Olaf College',
    data: '174844'
  },
  {
    value: 'Crown College',
    data: '174862'
  },
  {
    value: 'The College of Saint Scholastica',
    data: '174899'
  },
  {
    value: 'University of St Thomas',
    data: '174914'
  },
  {
    value: 'St Catherine University',
    data: '175005'
  },
  {
    value: 'Rasmussen College-Minnesota',
    data: '175014'
  },
  {
    value: 'Saint Paul College',
    data: '175041'
  },
  {
    value: 'Southwest Minnesota State University',
    data: '175078'
  },
  {
    value: 'Vermilion Community College',
    data: '175157'
  },
  {
    value: 'Dunwoody College of Technology',
    data: '175227'
  },
  {
    value: 'Ridgewater College',
    data: '175236'
  },
  {
    value: 'Minnesota State College-Southeast Technical',
    data: '175263'
  },
  {
    value: 'Winona State University',
    data: '175272'
  },
  {
    value: 'Century College',
    data: '175315'
  },
  {
    value: 'Alcorn State University',
    data: '175342'
  },
  {
    value: 'Belhaven University',
    data: '175421'
  },
  {
    value: 'Blue Mountain College',
    data: '175430'
  },
  {
    value: 'Coahoma Community College',
    data: '175519'
  },
  {
    value: 'Antonelli College-Jackson',
    data: '175528'
  },
  {
    value: 'Copiah-Lincoln Community College',
    data: '175573'
  },
  {
    value: 'Delta State University',
    data: '175616'
  },
  {
    value: 'East Central Community College',
    data: '175643'
  },
  {
    value: 'East Mississippi Community College',
    data: '175652'
  },
  {
    value: 'Hinds Community College',
    data: '175786'
  },
  {
    value: 'Holmes Community College',
    data: '175810'
  },
  {
    value: 'Itawamba Community College',
    data: '175829'
  },
  {
    value: 'Jackson State University',
    data: '175856'
  },
  {
    value: 'Jones County Junior College',
    data: '175883'
  },
  {
    value: 'Meridian Community College',
    data: '175935'
  },
  {
    value: 'Millsaps College',
    data: '175980'
  },
  {
    value: 'Mississippi Delta Community College',
    data: '176008'
  },
  {
    value: 'University of Mississippi',
    data: '176017'
  },
  {
    value: 'Mississippi University for Women',
    data: '176035'
  },
  {
    value: 'Mississippi Valley State University',
    data: '176044'
  },
  {
    value: 'Mississippi College',
    data: '176053'
  },
  {
    value: 'Mississippi Gulf Coast Community College',
    data: '176071'
  },
  {
    value: 'Mississippi State University',
    data: '176080'
  },
  {
    value: 'Northeast Mississippi Community College',
    data: '176169'
  },
  {
    value: 'Northwest Mississippi Community College',
    data: '176178'
  },
  {
    value: 'Pearl River Community College',
    data: '176239'
  },
  {
    value: 'Rust College',
    data: '176318'
  },
  {
    value: 'Southeastern Baptist College',
    data: '176336'
  },
  {
    value: 'Southwest Mississippi Community College',
    data: '176354'
  },
  {
    value: 'University of Southern Mississippi',
    data: '176372'
  },
  {
    value: 'Tougaloo College',
    data: '176406'
  },
  {
    value: 'William Carey University',
    data: '176479'
  },
  {
    value: 'Avila University',
    data: '176628'
  },
  {
    value: 'ITT Technical Institute-Earth City',
    data: '176637'
  },
  {
    value: 'Baptist Bible College',
    data: '176664'
  },
  {
    value: 'Cox College',
    data: '176770'
  },
  {
    value: 'Calvary Bible College and Theological Seminary',
    data: '176789'
  },
  {
    value: 'Central Christian College of the Bible',
    data: '176910'
  },
  {
    value: 'Central Methodist University-College of Liberal Arts and Sciences',
    data: '176947'
  },
  {
    value: 'University of Central Missouri',
    data: '176965'
  },
  {
    value: 'Cleveland University-Kansas City',
    data: '177038'
  },
  {
    value: 'Columbia College',
    data: '177065'
  },
  {
    value: 'Conception Seminary College',
    data: '177083'
  },
  {
    value: 'Cottey College',
    data: '177117'
  },
  {
    value: 'Crowder College',
    data: '177135'
  },
  {
    value: 'Culver-Stockton College',
    data: '177144'
  },
  {
    value: 'Drury University',
    data: '177214'
  },
  {
    value: 'East Central College',
    data: '177250'
  },
  {
    value: 'Pinnacle Career Institute-South Kansas City',
    data: '177302'
  },
  {
    value: 'Evangel University',
    data: '177339'
  },
  {
    value: 'Fontbonne University',
    data: '177418'
  },
  {
    value: 'Four Rivers Career Center',
    data: '177436'
  },
  {
    value: 'Ozarks Technical Community College',
    data: '177472'
  },
  {
    value: 'Hannibal-LaGrange University',
    data: '177542'
  },
  {
    value: 'Harris-Stowe State University',
    data: '177551'
  },
  {
    value: 'Hickey College',
    data: '177579'
  },
  {
    value: 'Jefferson College',
    data: '177676'
  },
  {
    value: 'Kansas City Art Institute',
    data: '177746'
  },
  {
    value: 'Kenrick Glennon Seminary',
    data: '177816'
  },
  {
    value: 'Lake Career and Technical Center',
    data: '177870'
  },
  {
    value: 'Lincoln University',
    data: '177940'
  },
  {
    value: 'Lindenwood University',
    data: '177968'
  },
  {
    value: 'State Technical College of Missouri',
    data: '177977'
  },
  {
    value: 'Metropolitan Community College-Kansas City',
    data: '177995'
  },
  {
    value: 'Lutheran School of Nursing',
    data: '178004'
  },
  {
    value: 'Maryville University of Saint Louis',
    data: '178059'
  },
  {
    value: 'Metro Business College-Cape Girardeau',
    data: '178110'
  },
  {
    value: 'Midwestern Baptist Theological Seminary',
    data: '178208'
  },
  {
    value: 'Mineral Area College',
    data: '178217'
  },
  {
    value: 'Westwood College-O\'Hare Airport',
    data: '178226'
  },
  {
    value: 'Missouri Baptist University',
    data: '178244'
  },
  {
    value: 'Missouri College',
    data: '178305'
  },
  {
    value: 'Missouri Southern State University',
    data: '178341'
  },
  {
    value: 'Missouri Tech',
    data: '178350'
  },
  {
    value: 'Missouri Valley College',
    data: '178369'
  },
  {
    value: 'Missouri Western State University',
    data: '178387'
  },
  {
    value: 'University of Missouri-Columbia',
    data: '178396'
  },
  {
    value: 'University of Missouri-Kansas City',
    data: '178402'
  },
  {
    value: 'Missouri University of Science and Technology',
    data: '178411'
  },
  {
    value: 'University of Missouri-St Louis',
    data: '178420'
  },
  {
    value: 'Moberly Area Community College',
    data: '178448'
  },
  {
    value: 'Truman State University',
    data: '178615'
  },
  {
    value: 'Northwest Missouri State University',
    data: '178624'
  },
  {
    value: 'Ozark Christian College',
    data: '178679'
  },
  {
    value: 'College of the Ozarks',
    data: '178697'
  },
  {
    value: 'Park University',
    data: '178721'
  },
  {
    value: 'Stevens-The Institute of Business & Arts',
    data: '178767'
  },
  {
    value: 'Ranken Technical College',
    data: '178891'
  },
  {
    value: 'Rockhurst University',
    data: '179043'
  },
  {
    value: 'Everest College-Springfield',
    data: '179070'
  },
  {
    value: 'Saint Louis University',
    data: '179159'
  },
  {
    value: 'Saint Louis Christian College',
    data: '179256'
  },
  {
    value: 'St Louis College of Pharmacy',
    data: '179265'
  },
  {
    value: 'Saint Louis Community College',
    data: '179308'
  },
  {
    value: 'Southwest Baptist University',
    data: '179326'
  },
  {
    value: 'Missouri State University-West Plains',
    data: '179344'
  },
  {
    value: 'State Fair Community College',
    data: '179539'
  },
  {
    value: 'Stephens College',
    data: '179548'
  },
  {
    value: 'Southeast Missouri State University',
    data: '179557'
  },
  {
    value: 'Missouri State University-Springfield',
    data: '179566'
  },
  {
    value: 'Three Rivers Community College',
    data: '179645'
  },
  {
    value: 'North Central Missouri College',
    data: '179715'
  },
  {
    value: 'Washington University in St Louis',
    data: '179867'
  },
  {
    value: 'Webster University',
    data: '179894'
  },
  {
    value: 'Wentworth Military Academy and College',
    data: '179919'
  },
  {
    value: 'Westminster College',
    data: '179946'
  },
  {
    value: 'William Jewell College',
    data: '179955'
  },
  {
    value: 'William Woods University',
    data: '179964'
  },
  {
    value: 'Blackfeet Community College',
    data: '180054'
  },
  {
    value: 'Highlands College of Montana Tech',
    data: '180081'
  },
  {
    value: 'Carroll College',
    data: '180106'
  },
  {
    value: 'Dawson Community College',
    data: '180151'
  },
  {
    value: 'Chief Dull Knife College',
    data: '180160'
  },
  {
    value: 'Montana State University-Billings',
    data: '180179'
  },
  {
    value: 'Flathead Valley Community College',
    data: '180197'
  },
  {
    value: 'Aaniiih Nakoda College',
    data: '180203'
  },
  {
    value: 'Fort Peck Community College',
    data: '180212'
  },
  {
    value: 'Great Falls College Montana State University',
    data: '180249'
  },
  {
    value: 'University of Great Falls',
    data: '180258'
  },
  {
    value: 'Helena College University of Montana',
    data: '180276'
  },
  {
    value: 'Little Big Horn College',
    data: '180328'
  },
  {
    value: 'Miles Community College',
    data: '180373'
  },
  {
    value: 'Montana Tech of the University of Montana',
    data: '180416'
  },
  {
    value: 'Montana State University',
    data: '180461'
  },
  {
    value: 'The University of Montana',
    data: '180489'
  },
  {
    value: 'Montana State University-Northern',
    data: '180522'
  },
  {
    value: 'Rocky Mountain College',
    data: '180595'
  },
  {
    value: 'Salish Kootenai College',
    data: '180647'
  },
  {
    value: 'The University of Montana-Western',
    data: '180692'
  },
  {
    value: 'Bellevue University',
    data: '180814'
  },
  {
    value: 'Clarkson College',
    data: '180832'
  },
  {
    value: 'Bryan College of Health Sciences',
    data: '180878'
  },
  {
    value: 'Central Community College',
    data: '180902'
  },
  {
    value: 'Chadron State College',
    data: '180948'
  },
  {
    value: 'Concordia University-Nebraska',
    data: '180984'
  },
  {
    value: 'Creighton University',
    data: '181002'
  },
  {
    value: 'Doane College-Crete',
    data: '181020'
  },
  {
    value: 'Grace University',
    data: '181093'
  },
  {
    value: 'Hastings College',
    data: '181127'
  },
  {
    value: 'University of Nebraska at Kearney',
    data: '181215'
  },
  {
    value: 'Kaplan University-Lincoln Campus',
    data: '181242'
  },
  {
    value: 'Nebraska Methodist College of Nursing & Allied Health',
    data: '181297'
  },
  {
    value: 'Metropolitan Community College Area',
    data: '181303'
  },
  {
    value: 'Mid-Plains Community College',
    data: '181312'
  },
  {
    value: 'Midland University',
    data: '181330'
  },
  {
    value: 'Nebraska Christian College',
    data: '181376'
  },
  {
    value: 'University of Nebraska at Omaha',
    data: '181394'
  },
  {
    value: 'Kaplan University-Omaha Campus',
    data: '181400'
  },
  {
    value: 'Nebraska Indian Community College',
    data: '181419'
  },
  {
    value: 'Nebraska Wesleyan University',
    data: '181446'
  },
  {
    value: 'University of Nebraska-Lincoln',
    data: '181464'
  },
  {
    value: 'Northeast Community College',
    data: '181491'
  },
  {
    value: 'Peru State College',
    data: '181534'
  },
  {
    value: 'College of Saint Mary',
    data: '181604'
  },
  {
    value: 'Southeast Community College Area',
    data: '181640'
  },
  {
    value: 'Union College',
    data: '181738'
  },
  {
    value: 'Vatterott College-Spring Valley',
    data: '181756'
  },
  {
    value: 'Nebraska College of Technical Agriculture',
    data: '181765'
  },
  {
    value: 'Wayne State College',
    data: '181783'
  },
  {
    value: 'Western Nebraska Community College',
    data: '181817'
  },
  {
    value: 'York College',
    data: '181853'
  },
  {
    value: 'College of Southern Nevada',
    data: '182005'
  },
  {
    value: 'The Art Institute of Las Vegas',
    data: '182111'
  },
  {
    value: 'Everest College-Henderson',
    data: '182148'
  },
  {
    value: 'University of Nevada-Las Vegas',
    data: '182281'
  },
  {
    value: 'University of Nevada-Reno',
    data: '182290'
  },
  {
    value: 'Great Basin College',
    data: '182306'
  },
  {
    value: 'Sierra Nevada College',
    data: '182458'
  },
  {
    value: 'Truckee Meadows Community College',
    data: '182500'
  },
  {
    value: 'Western Nevada College',
    data: '182564'
  },
  {
    value: 'Colby-Sawyer College',
    data: '182634'
  },
  {
    value: 'Daniel Webster College',
    data: '182661'
  },
  {
    value: 'Dartmouth College',
    data: '182670'
  },
  {
    value: 'Franklin Pierce University',
    data: '182795'
  },
  {
    value: 'Mount Washington College',
    data: '182865'
  },
  {
    value: 'College of Saint Mary Magdalen',
    data: '182917'
  },
  {
    value: 'New England College',
    data: '182980'
  },
  {
    value: 'Southern New Hampshire University',
    data: '183026'
  },
  {
    value: 'University of New Hampshire-Main Campus',
    data: '183044'
  },
  {
    value: 'Keene State College',
    data: '183062'
  },
  {
    value: 'University of New Hampshire at Manchester',
    data: '183071'
  },
  {
    value: 'Plymouth State University',
    data: '183080'
  },
  {
    value: 'NHTI-Concord\'s Community College',
    data: '183099'
  },
  {
    value: 'White Mountains Community College',
    data: '183105'
  },
  {
    value: 'River Valley Community College',
    data: '183114'
  },
  {
    value: 'Lakes Region Community College',
    data: '183123'
  },
  {
    value: 'Manchester Community College',
    data: '183132'
  },
  {
    value: 'Nashua Community College',
    data: '183141'
  },
  {
    value: 'Great Bay Community College',
    data: '183150'
  },
  {
    value: 'Rivier University',
    data: '183211'
  },
  {
    value: 'Saint Anselm College',
    data: '183239'
  },
  {
    value: 'St Joseph School of Nursing',
    data: '183248'
  },
  {
    value: 'Granite State College',
    data: '183257'
  },
  {
    value: 'Thomas More College of Liberal Arts',
    data: '183275'
  },
  {
    value: 'Eastwick College-Hackensack',
    data: '183488'
  },
  {
    value: 'Atlantic Cape Community College',
    data: '183655'
  },
  {
    value: 'Bergen Community College',
    data: '183743'
  },
  {
    value: 'Berkeley College-Woodland Park',
    data: '183789'
  },
  {
    value: 'Bloomfield College',
    data: '183822'
  },
  {
    value: 'Brookdale Community College',
    data: '183859'
  },
  {
    value: 'Burlington County College',
    data: '183877'
  },
  {
    value: 'Caldwell University',
    data: '183910'
  },
  {
    value: 'Camden County College',
    data: '183938'
  },
  {
    value: 'Centenary College',
    data: '183974'
  },
  {
    value: 'County College of Morris',
    data: '184180'
  },
  {
    value: 'Cumberland County College',
    data: '184205'
  },
  {
    value: 'Drew University',
    data: '184348'
  },
  {
    value: 'duCret School of Arts',
    data: '184357'
  },
  {
    value: 'Essex County College',
    data: '184481'
  },
  {
    value: 'Fairleigh Dickinson University-Metropolitan Campus',
    data: '184603'
  },
  {
    value: 'Felician College',
    data: '184612'
  },
  {
    value: 'Fairleigh Dickinson University-College at Florham',
    data: '184694'
  },
  {
    value: 'Georgian Court University',
    data: '184773'
  },
  {
    value: 'Rowan University',
    data: '184782'
  },
  {
    value: 'Rowan College at Gloucester County',
    data: '184791'
  },
  {
    value: 'Eastwick College-Ramsey',
    data: '184959'
  },
  {
    value: 'Holy Name Medical Center School of Nursing',
    data: '184968'
  },
  {
    value: 'Hudson County Community College',
    data: '184995'
  },
  {
    value: 'New Jersey City University',
    data: '185129'
  },
  {
    value: 'Joe Kubert School of Cartoon and Graphic Art',
    data: '185174'
  },
  {
    value: 'Kean University',
    data: '185262'
  },
  {
    value: 'Mercer County Community College',
    data: '185509'
  },
  {
    value: 'Middlesex County College',
    data: '185536'
  },
  {
    value: 'Monmouth University',
    data: '185572'
  },
  {
    value: 'Montclair State University',
    data: '185590'
  },
  {
    value: 'JFK Muhlenberg Harold B & Dorothy A Snyder Schools-School of Nursing',
    data: '185679'
  },
  {
    value: 'Eastwick College-Nutley',
    data: '185721'
  },
  {
    value: 'New Jersey Institute of Technology',
    data: '185828'
  },
  {
    value: 'Ocean County College',
    data: '185873'
  },
  {
    value: 'Passaic County Community College',
    data: '186034'
  },
  {
    value: 'Princeton University',
    data: '186131'
  },
  {
    value: 'Rabbinical College of America',
    data: '186186'
  },
  {
    value: 'Ramapo College of New Jersey',
    data: '186201'
  },
  {
    value: 'Rider University',
    data: '186283'
  },
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
  {
    value: 'Saint Francis Medical Center School of Nursing',
    data: '186423'
  },
  {
    value: 'Saint Peter\'s University',
    data: '186432'
  },
  {
    value: 'Salem Community College',
    data: '186469'
  },
  {
    value: 'Seton Hall University',
    data: '186584'
  },
  {
    value: 'College of Saint Elizabeth',
    data: '186618'
  },
  {
    value: 'Raritan Valley Community College',
    data: '186645'
  },
  {
    value: 'Stevens Institute of Technology',
    data: '186867'
  },
  {
    value: 'Stockton University',
    data: '186876'
  },
  {
    value: 'Talmudical Academy-New Jersey',
    data: '186900'
  },
  {
    value: 'Thomas Edison State College',
    data: '187046'
  },
  {
    value: 'The College of New Jersey',
    data: '187134'
  },
  {
    value: 'Union County College',
    data: '187198'
  },
  {
    value: 'William Paterson University of New Jersey',
    data: '187444'
  },
  {
    value: 'Central New Mexico Community College',
    data: '187532'
  },
  {
    value: 'Navajo Technical University',
    data: '187596'
  },
  {
    value: 'New Mexico State University-Dona Ana',
    data: '187620'
  },
  {
    value: 'Clovis Community College',
    data: '187639'
  },
  {
    value: 'Eastern New Mexico University-Main Campus',
    data: '187648'
  },
  {
    value: 'Eastern New Mexico University-Roswell Campus',
    data: '187666'
  },
  {
    value: 'Institute of American Indian and Alaska Native Culture',
    data: '187745'
  },
  {
    value: 'New Mexico Highlands University',
    data: '187897'
  },
  {
    value: 'New Mexico Junior College',
    data: '187903'
  },
  {
    value: 'New Mexico Military Institute',
    data: '187912'
  },
  {
    value: 'University of New Mexico-Gallup Campus',
    data: '187958'
  },
  {
    value: 'New Mexico Institute of Mining and Technology',
    data: '187967'
  },
  {
    value: 'University of New Mexico-Los Alamos Campus',
    data: '187976'
  },
  {
    value: 'University of New Mexico-Main Campus',
    data: '187985'
  },
  {
    value: 'New Mexico State University-Alamogordo',
    data: '187994'
  },
  {
    value: 'New Mexico State University-Carlsbad',
    data: '188003'
  },
  {
    value: 'New Mexico State University-Grants',
    data: '188021'
  },
  {
    value: 'New Mexico State University-Main Campus',
    data: '188030'
  },
  {
    value: 'University of New Mexico-Valencia County Campus',
    data: '188049'
  },
  {
    value: 'Northern New Mexico College',
    data: '188058'
  },
  {
    value: 'San Juan College',
    data: '188100'
  },
  {
    value: 'Santa Fe Community College',
    data: '188137'
  },
  {
    value: 'Santa Fe University of Art and Design',
    data: '188146'
  },
  {
    value: 'University of the Southwest',
    data: '188182'
  },
  {
    value: 'Southwestern Indian Polytechnic Institute',
    data: '188216'
  },
  {
    value: 'University of New Mexico-Taos Campus',
    data: '188225'
  },
  {
    value: 'Mesalands Community College',
    data: '188261'
  },
  {
    value: 'Western New Mexico University',
    data: '188304'
  },
  {
    value: 'Vaughn College of Aeronautics and Technology',
    data: '188340'
  },
  {
    value: 'Adelphi University',
    data: '188429'
  },
  {
    value: 'Adirondack Community College',
    data: '188438'
  },
  {
    value: 'Globe Institute of Technology',
    data: '188465'
  },
  {
    value: 'Bryant & Stratton College-Albany',
    data: '188517'
  },
  {
    value: 'Albany College of Pharmacy and Health Sciences',
    data: '188526'
  },
  {
    value: 'Alfred University',
    data: '188641'
  },
  {
    value: 'The Ailey School',
    data: '188669'
  },
  {
    value: 'American Academy of Dramatic Arts-New York',
    data: '188678'
  },
  {
    value: 'American Academy McAllister Institute of Funeral Service',
    data: '188687'
  },
  {
    value: 'Joffrey Ballet School',
    data: '188696'
  },
  {
    value: 'American Musical and Dramatic Academy',
    data: '188854'
  },
  {
    value: 'Associated Beth Rivkah Schools',
    data: '188942'
  },
  {
    value: 'Bard College',
    data: '189088'
  },
  {
    value: 'Barnard College',
    data: '189097'
  }, {
    value: 'Professional Business College',
    data: '194611'
  },
  {
    value: 'Rabbinical Academy Mesivta Rabbi Chaim Berlin',
    data: '194657'
  },
  {
    value: 'Rabbinical College Bobover Yeshiva Bnei Zion',
    data: '194666'
  },
  {
    value: 'Rabbinical College of Ch\'san Sofer New York',
    data: '194675'
  }, 
  {
    value: 'Fresno Pacific University',
    data: '114813'
  },
   
    {
    value: 'Crowley\'s Ridge College',
    data: '106810'
  },
  ];


  var majors = [
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
      var thehtml = '<strong>University:</strong>' + suggestion.value + ' <br> <strong>UNID:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
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
$(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 60000,
               values: [ 15000, 25000 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
         
const stateInit = _ => {
  $('.state-auto:not([init])').autocomplete({
    lookup: states,
    onSelect: function (suggestion) {

      var thehtml = '<strong>State:</strong> ' + suggestion.value + ' <br> <strong>abreviation:</strong> ' + suggestion.data;
      inputs.push(suggestion.data);
      console.log(suggestion.data);
      $('#outputcontent3').html(thehtml);
    }
  }).attr("init",true);
}
$(document).ready(_ => stateInit())
$(document).ready(_ => inputs = new Array(0))