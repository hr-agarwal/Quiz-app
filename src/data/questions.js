const questions = {
  // -------Science Questions------
  Science: {
    Easy: [
      {
        question: 'What planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correct: 'Mars'
      },
      {
        question: 'Water freezes at what temperature (°C)?',
        options: ['0', '100', '50', '-10'],
        correct: '0'
      },
      {
        question:'Which is the largest planet in our Solar System?',
        options: ['Earth','Jupiter','Saturn','Neptune'],
        correct: 'Jupiter'
      },
      {
        question:'What is H2O commonly known as?',
        options: ['Oxygen','Salt','Water','Hydrogen'],
        correct: 'Water'
      },
      {
        question:'What is the center of an atom called?',
        options: ['Electron','Nucleus','Proton','Neutron'],
        correct: 'Nucleus'
      },
      {
        question:'Which organ helps in digestion and produces insulin?',
        options: ['Pancreas','Stomach','Liver','Heart'],
        correct: 'Pancreas'
      },
      {
        question:'What is the natural satellite of Earth?',
        options: ['Moon','Mars','Sun','Venus'],
        correct: 'Moon'
      },
      {
        question:'Which part of the body is used to see?',
        options: ['Ear','Nose','Hands','Eye'],
        correct: 'Eye'
      },
      {
        question:'Which metal is liquid at room temperature?',
        options: ['Iron','Mercury','Gold','Copper'],
        correct: 'Mercury'
      },
      {
        question:'Which gas is filled in balloons to make them float?',
        options: ['Oxygen','Hydrogen','Helium','Carbon Dioxide'],
        correct: 'Helium'
      }
      ],



    Medium: [
      {
        question: 'What is the chemical symbol for Gold?',
        options: ['Au', 'Ag', 'Go', 'Gd'],
        correct: 'Au'
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi body'],
        correct: 'Mitochondria'
      },
      {
        question: 'Which law states that for every action, there is an equal and opposite reaction?',
        options: ['Newtons First Law', ' Newtons Second Law', 'Newtons Third Law', 'Hookes Law'],
        correct: 'Newtons Third Law'
      },
      {
        question: 'What is the chemical formula for table salt',
        options: ['HCl', 'NaCl', 'KCl', 'NH3'],
        correct: 'NaCl'
      },
      {
        question: 'Which blood group is known as the universal donor?',
        options: ['A', 'B', 'O', 'AB'],
        correct: 'O'
      },
      {
        question: 'Which layer of the atmosphere contains the ozone layer?',
        options: ['Troposphere', '. Stratosphere', ' Mesosphere', 'Thermosphere'],
        correct: 'Stratosphere'
      },
      {
        question: 'Which planet has the most moons?',
        options: ['Jupiter', 'Mars', 'Neptune', 'Earth'],
        correct: 'Jupiter'
      },
      {
        question: 'Which vitamin is synthesized when skin is exposed to sunlight?',
        options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
        correct: 'Vitamin D'
      },
      {
        question: 'What is the boiling point of water at sea level in Fahrenheit?',
        options: ['90°F', '98.6°F', '212°F', '100°F'],
        correct: '212°F'
      },
      {
        question: 'Which part of the brain controls balance and coordination?',
        options: ['Cerebrum', 'Medulla', 'Cerebellum', 'Hypothalamus'],
        correct: 'Cerebellum'
      }
    ],



    Hard: [
      {
        question: 'Which particle has no electric charge?',
        options: ['Proton', 'Neutron', 'Electron', 'Ion'],
        correct: 'Neutron'
      },
      {
        question: 'What is the pH of pure water at 25°C?',
        options: ['6', '7', '8', '9'],
        correct: '7'
      },
      {
        question: 'Which law explains why ships float in water?',
        options: ['Newton’s 2nd Law', 'Pascal’s Law', 'Archimedes’ Principle', 'Bernoulli’s Principle'],
        correct: 'Archimedes’ Principle'
      },
      {
        question: 'Which type of electromagnetic wave has the shortest wavelength?',
        options: ['Ultraviolet', 'X-rays', 'Gamma rays', 'Microwaves'],
        correct: 'Gamma rays'
      },
    {
        question: 'Which element has the highest melting point?',
        options: ['Tungsten', 'Iron', 'Carbon', 'Osmium'],
        correct: 'Tungsten'
      },
    {
        question: 'Which vitamin is also known as Cobalamin?',
        options: ['Vitamin B1', 'Vitamin B6', 'Vitamin B12', 'Vitamin C'],
        correct: 'Vitamin B12'
      },
    {
        question: 'What part of the DNA structure carries genetic information?',
        options: ['Phosphate group', 'Sugar', 'Nitrogenous bases', 'Backbone'],
        correct: 'Nitrogenous bases'
      },
    {
        question: 'Which gas is used in modern refrigerators as a refrigerant?',
        options: ['Ammonia', 'Freon', 'Carbon dioxide', 'Hydrogen'],
        correct: 'Freon'
      }
    ]
        },



        //--------- History Questions--------
  History: {
    Easy: [
  {
    question: 'Who is known as the Father of the Indian Nation?',
    options: ['Jawaharlal Nehru', 'Subhash Chandra Bose', 'Mahatma Gandhi', 'Bhagat Singh'],
    correct: 'Mahatma Gandhi'
  },
  {
    question: 'Who was the first Prime Minister of India?',
    options: ['Lal Bahadur Shastri', 'Mahatma Gandhi', 'Dr. Rajendra Prasad', 'Jawaharlal Nehru'],
    correct: 'Jawaharlal Nehru'
  },
  {
    question: 'Which Mughal emperor built the Taj Mahal?',
    options: ['Akbar', 'Aurangzeb', 'Shah Jahan', 'Babur'],
    correct: 'Shah Jahan'
  },
  {
    question: 'When did India become independent?',
    options: ['1945', '1947', '1950', '1930'],
    correct: '1947'
  },
  {
    question: 'Who wrote the Indian national anthem?',
    options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subhash Chandra Bose'],
    correct: 'Rabindranath Tagore'
  },
  {
    question: 'Who was the last Viceroy of British India?',
    options: ['Lord Curzon', 'Lord Wellesley', 'Lord Mountbatten', 'Lord Canning'],
    correct: 'Lord Mountbatten'
  },
  {
    question: 'Who was the first President of independent India?',
    options: ['Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Dr. Rajendra Prasad', 'C. Rajagopalachari'],
    correct: 'Dr. Rajendra Prasad'
  },
  {
    question: 'Who led the Dandi March in 1930?',
    options: ['Subhash Chandra Bose', 'Mahatma Gandhi', 'Sardar Patel', 'Bal Gangadhar Tilak'],
    correct: 'Mahatma Gandhi'
  },
  {
    question: 'Which empire was founded by Chandragupta Maurya?',
    options: ['Mughal Empire', 'Gupta Empire', 'Maurya Empire', 'Delhi Sultanate'],
    correct: 'Maurya Empire'
  },
  {
    question: 'Which Indian leader gave the slogan “Give me blood, and I shall give you freedom”?',
    options: ['Bhagat Singh', 'Mahatma Gandhi', 'Subhash Chandra Bose', 'Jawaharlal Nehru'],
    correct: 'Subhash Chandra Bose'
  },
  {
    question: 'Who introduced the Permanent Settlement in Bengal?',
    options: ['Lord Mountbatten', 'Lord Curzon', 'Lord Cornwallis', 'Robert Clive'],
    correct: 'Lord Cornwallis'
  },
  {
    question: 'Who was the founder of the Sikh religion?',
    options: ['Guru Arjan Dev', 'Guru Gobind Singh', 'Guru Nanak', 'Guru Tegh Bahadur'],
    correct: 'Guru Nanak'
  },
  {
    question: 'The revolt of 1857 started in which city?',
    options: ['Delhi', 'Kanpur', 'Meerut', 'Lucknow'],
    correct: 'Meerut'
  },
  {
    question: 'Who was known as the Iron Man of India?',
    options: ['Subhash Chandra Bose', 'Sardar Vallabhbhai Patel', 'Jawaharlal Nehru', 'Dr. Rajendra Prasad'],
    correct: 'Sardar Vallabhbhai Patel'
  },
  {
    question: 'Which Indian leader is called “Lokmanya”?',
    options: ['Bal Gangadhar Tilak', 'Lala Lajpat Rai', 'Bhagat Singh', 'Dadabhai Naoroji'],
    correct: 'Bal Gangadhar Tilak'
  },
  {
    question: 'Who is known for the discovery of the Indus Valley Civilization?',
    options: ['Lord Mountbatten', 'Mortimer Wheeler', 'Alexander Cunningham', 'Dayaram Sahni'],
    correct: 'Dayaram Sahni'
  },
  {
    question: 'In which year was the Quit India Movement launched?',
    options: ['1942', '1945', '1930', '1919'],
    correct: '1942'
  },
  {
    question: 'Who formed the Indian National Army (INA)?',
    options: ['Jawaharlal Nehru', 'Subhash Chandra Bose', 'Sardar Patel', 'Rajendra Prasad'],
    correct: 'Subhash Chandra Bose'
  },
  {
    question: 'What was the capital of the Maurya Empire?',
    options: ['Patliputra', 'Delhi', 'Kannauj', 'Mathura'],
    correct: 'Patliputra'
  },
  {
    question: 'Who was the first woman ruler of India?',
    options: ['Indira Gandhi', 'Rani Laxmi Bai', 'Razia Sultana', 'Sarojini Naidu'],
    correct: 'Razia Sultana'
  }
],


    Medium: [
  {
    question: 'Who was the founder of the Gupta Empire?',
    options: ['Chandragupta Maurya', 'Ashoka', 'Samudragupta', 'Sri Gupta'],
    correct: 'Sri Gupta'
  },
  {
    question: 'Which Indian freedom fighter was popularly known as “Punjab Kesari”?',
    options: ['Lala Lajpat Rai', 'Bhagat Singh', 'Bal Gangadhar Tilak', 'Chittaranjan Das'],
    correct: 'Lala Lajpat Rai'
  },
  {
    question: 'Which movement was started by Mahatma Gandhi after the Jallianwala Bagh Massacre?',
    options: ['Quit India Movement', 'Swadeshi Movement', 'Non-Cooperation Movement', 'Civil Disobedience Movement'],
    correct: 'Non-Cooperation Movement'
  },
  {
    question: 'Who was the first Governor-General of independent India?',
    options: ['Lord Mountbatten', 'C. Rajagopalachari', 'Dr. Rajendra Prasad', 'Jawaharlal Nehru'],
    correct: 'Lord Mountbatten'
  },
  {
    question: 'The Simon Commission was boycotted in which year?',
    options: ['1927', '1928', '1930', '1935'],
    correct: '1928'
  },
  {
    question: 'Which act introduced the system of diarchy in provinces?',
    options: ['Charter Act 1833', 'Government of India Act 1919', 'Government of India Act 1935', 'Indian Councils Act 1909'],
    correct: 'Government of India Act 1919'
  },
  {
    question: 'The Third Battle of Panipat was fought between Marathas and which empire?',
    options: ['British', 'Mughals', 'Afghans', 'Portuguese'],
    correct: 'Afghans'
  },
  {
    question: 'Who gave the slogan “Swaraj is my birthright”?',
    options: ['Mahatma Gandhi', 'Bal Gangadhar Tilak', 'Subhash Chandra Bose', 'Jawaharlal Nehru'],
    correct: 'Bal Gangadhar Tilak'
  },
  {
    question: 'Which Indian leader formed the Forward Bloc in 1939?',
    options: ['Subhash Chandra Bose', 'Mahatma Gandhi', 'Sardar Patel', 'Chittaranjan Das'],
    correct: 'Subhash Chandra Bose'
  },
  {
    question: 'Which Mughal emperor was defeated in the Battle of Plassey?',
    options: ['Aurangzeb', 'Shah Alam II', 'Bahadur Shah Zafar', 'Siraj-ud-Daulah'],
    correct: 'Siraj-ud-Daulah'
  }
],


    Hard: [
  {
    question: 'Which Indian revolutionary founded the Hindustan Socialist Republican Association (HSRA)?',
    options: ['Bhagat Singh', 'Chandrashekhar Azad', 'Ram Prasad Bismil', 'Sukhdev'],
    correct: 'Ram Prasad Bismil'
  },
  {
    question: 'The Treaty of Bassein was signed between the British and which Indian ruler?',
    options: ['Tipu Sultan', 'Nana Sahib', 'Baji Rao II', 'Raghunath Rao'],
    correct: 'Baji Rao II'
  },
  {
    question: 'Who was the first Indian woman to become the President of the Indian National Congress?',
    options: ['Sarojini Naidu', 'Annie Besant', 'Vijaya Lakshmi Pandit', 'Indira Gandhi'],
    correct: 'Annie Besant'
  },
  {
    question: 'Which ancient Indian text is considered the oldest treatise on politics and economics?',
    options: ['Mahabharata', 'Ramayana', 'Arthashastra', 'Manusmriti'],
    correct: 'Arthashastra'
  },
  {
    question: 'Who was the founder of the Prarthana Samaj?',
    options: ['Raja Ram Mohan Roy', 'Atmaram Pandurang', 'Swami Dayananda', 'Ishwar Chandra Vidyasagar'],
    correct: 'Atmaram Pandurang'
  },
  {
    question: 'Which Chola king conquered parts of Southeast Asia?',
    options: ['Rajaraja Chola I', 'Rajendra Chola I', 'Kulothunga Chola', 'Vikrama Chola'],
    correct: 'Rajendra Chola I'
  },
  {
    question: 'Who authored the book “Discovery of India”?',
    options: ['Dr. B.R. Ambedkar', 'Sardar Patel', 'Jawaharlal Nehru', 'Rabindranath Tagore'],
    correct: 'Jawaharlal Nehru'
  },
  {
    question: 'Which king established the Vikramshila University?',
    options: ['Ashoka', 'Harsha', 'Dharampala', 'Chandragupta II'],
    correct: 'Dharampala'
  },
  {
    question: 'In which year was the Indian National Congress founded?',
    options: ['1880', '1885', '1890', '1895'],
    correct: '1885'
  },
  {
    question: 'The Ilbert Bill Controversy happened during the tenure of which Viceroy?',
    options: ['Lord Ripon', 'Lord Curzon', 'Lord Canning', 'Lord Lytton'],
    correct: 'Lord Ripon'
  }
]
},


// -----------Entertainment Questions---------

Entertainment: {
    Easy: [
  {
    question: 'Who is known as the King of Bollywood?',
    options: ['Aamir Khan', 'Shah Rukh Khan', 'Salman Khan', 'Ranbir Kapoor'],
    correct: 'Shah Rukh Khan'
  },
  {
    question: 'Which movie features the song “Let It Go”?',
    options: ['Moana', 'Frozen', 'Tangled', 'Encanto'],
    correct: 'Frozen'
  },
  {
    question: 'What color is the genie in “Aladdin”?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correct: 'Blue'
  },
  {
    question: 'Which superhero uses a hammer called Mjölnir?',
    options: ['Iron Man', 'Thor', 'Hulk', 'Captain America'],
    correct: 'Thor'
  },
  {
    question: 'Who is Mickey Mouse’s girlfriend?',
    options: ['Molly', 'Daisy', 'Minnie', 'Lily'],
    correct: 'Minnie'
  },
  {
    question: 'Which show features characters Ross, Rachel, Monica, Joey, Chandler, and Phoebe?',
    options: ['Friends', 'The Office', 'How I Met Your Mother', 'Seinfeld'],
    correct: 'Friends'
  },
  {
    question: 'Which Indian movie won an Oscar for Best Original Song in 2023?',
    options: ['Pathaan', 'RRR', 'Jawan', 'Gully Boy'],
    correct: 'RRR'
  },
  {
    question: 'Who voices Groot in the Marvel Cinematic Universe?',
    options: ['Chris Pratt', 'Vin Diesel', 'Bradley Cooper', 'Tom Holland'],
    correct: 'Vin Diesel'
  },
  {
    question: 'Which game features characters like Mario and Luigi?',
    options: ['Sonic', 'Street Fighter', 'Super Mario', 'Halo'],
    correct: 'Super Mario'
  },
  {
    question: 'Which actress starred as Hermione in Harry Potter?',
    options: ['Emma Stone', 'Emma Roberts', 'Emma Watson', 'Emma Thompson'],
    correct: 'Emma Watson'
  }
],


    Medium: [
  {
    question: 'Who directed the movie "Inception"?',
    options: ['James Cameron', 'Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese'],
    correct: 'Christopher Nolan'
  },
  {
    question: 'Which Indian actor played the lead in the film “Paan Singh Tomar”?',
    options: ['Nawazuddin Siddiqui', 'Irrfan Khan', 'Rajkummar Rao', 'Vicky Kaushal'],
    correct: 'Irrfan Khan'
  },
  {
    question: 'What is the name of the fictional country in "Black Panther"?',
    options: ['Zamunda', 'Wakanda', 'Elbonia', 'Asgard'],
    correct: 'Wakanda'
  },
  {
    question: 'Who created the TV series “Stranger Things”?',
    options: ['Duffer Brothers', 'Shonda Rhimes', 'J.J. Abrams', 'Vince Gilligan'],
    correct: 'Duffer Brothers'
  },
  {
    question: 'Which Indian playback singer is known as the “Nightingale of India”?',
    options: ['Alka Yagnik', 'Shreya Ghoshal', 'Lata Mangeshkar', 'Sunidhi Chauhan'],
    correct: 'Lata Mangeshkar'
  },
  {
    question: 'Which music band produced the song “Bohemian Rhapsody”?',
    options: ['Queen', 'The Beatles', 'ABBA', 'Coldplay'],
    correct: 'Queen'
  },
  {
    question: 'What year was the first Academy Awards (Oscars) ceremony held?',
    options: ['1929', '1935', '1940', '1950'],
    correct: '1929'
  },
  {
    question: 'Which Indian film was nominated for Best Foreign Language Film at the Oscars in 2002?',
    options: ['Lagaan', 'Mother India', 'Salaam Bombay', 'Swades'],
    correct: 'Lagaan'
  },
  {
    question: 'Who plays Eleven in the show “Stranger Things”?',
    options: ['Millie Bobby Brown', 'Sadie Sink', 'Natalia Dyer', 'Sophie Turner'],
    correct: 'Millie Bobby Brown'
  },
  {
    question: 'What’s the name of the dragon in “How to Train Your Dragon”?',
    options: ['Stormfly', 'Toothless', 'Meatlug', 'Hookfang'],
    correct: 'Toothless'
  }
],

    Hard:[
  {
    question: 'Who composed the background score for the movie “Interstellar”?',
    options: ['John Williams', 'Hans Zimmer', 'Alan Silvestri', 'James Horner'],
    correct: 'Hans Zimmer'
  },
  {
    question: 'Which Indian film won the Palme d\'Or at the Cannes Film Festival?',
    options: ['Salaam Bombay', 'The Lunchbox', 'Pather Panchali', 'Marana Simhasanam'],
    correct: 'Marana Simhasanam'
  },
  {
    question: 'In which year did Doordarshan start color television broadcasting in India?',
    options: ['1980', '1982', '1985', '1988'],
    correct: '1982'
  },
  {
    question: 'Which actor won the first National Film Award for Best Actor in India?',
    options: ['Dilip Kumar', 'Balraj Sahni', 'Sivaji Ganesan', 'Uttam Kumar'],
    correct: 'Sivaji Ganesan'
  },
  {
    question: 'Which film features the character “Anton Chigurh”?',
    options: ['The Godfather', 'No Country for Old Men', 'Pulp Fiction', 'Fight Club'],
    correct: 'No Country for Old Men'
  },
  {
    question: 'Which film was the first to win 11 Academy Awards?',
    options: ['Ben-Hur', 'Titanic', 'Gone with the Wind', 'The Lord of the Rings'],
    correct: 'Ben-Hur'
  },
  {
    question: 'Which Bollywood director is known for the movie “Satya” (1998)?',
    options: ['Ram Gopal Varma', 'Anurag Kashyap', 'Karan Johar', 'Rajkumar Hirani'],
    correct: 'Ram Gopal Varma'
  },
  {
    question: 'Which composer created the score for “Slumdog Millionaire”?',
    options: ['A.R. Rahman', 'Ilaiyaraaja', 'Shankar Mahadevan', 'Vishal Bhardwaj'],
    correct: 'A.R. Rahman'
  },
  {
    question: 'What’s the full name of the fictional wizard “Harry Potter”?',
    options: ['Harry James Potter', 'Harry John Potter', 'Harry Julian Potter', 'Harry Joseph Potter'],
    correct: 'Harry James Potter'
  },
  {
    question: 'Which Indian actress made her debut at Cannes with the movie “Aishwarya”?',
    options: ['Aishwarya Rai', 'Priyanka Chopra', 'Deepika Padukone', 'Manisha Koirala'],
    correct: 'Aishwarya Rai'
  }
]

}
  
};

export default questions;
