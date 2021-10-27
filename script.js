
let places = [
    {
        id: 1,
        name: "Amaravathi",
        image_url: "https://www.holidify.com/images/tooltipImages/AMARAVATHI.jpg",
        description:"Amaravathi is a small town located on the banks of the River Krishna in the Guntur district of Andhra Pradesh. It serves as quiet a familiar name for the Buddhists in India and is a prime hub for pilgrimage and sightseeing for tourists. Thus, Amaravathi is also called the Abode of God.",
    },
    {
        id: 2,
        name: "Godavari Bridge",
        image_url: "https://www.holidify.com/images/tooltipImages/RAJAHAMUNDRY.jpg",
        description:"Founded in the 19th century by Chalukya king Raja Raja Narendra after whom it was named Rajamahendri or Rajamahendravaram but now is known as Rajahamundry.",
    },
    {
        id: 3,
        name: "Uppalapadu Nature Conservation",
        image_url: "https://www.holidify.com/images/tooltipImages/GUNTUR.jpg",
        description:"Guntur houses the newly coined Andhra Capital of Amravathi, which lies about 30 km away. It serves as the administrative headquarters of Guntur district and has some unique distinctions to its name, having the largest chilli market yard in Asia being one of them. Guntur is also the third most populous town in Andhra Pradesh. With a busy industrial activity scenario,",
    },
    {
        id: 4,
        name: "Manginapudi Beach",
        image_url: "https://www.holidify.com/images/tooltipImages/MACHELIPATNAM.jpg",
        description:"The port town of Machelipatnam nestled on the banks of River Krishna is one of the most popular tourist attractions of South India. Steeped in rich historical past, the town still reflects the footprint of several foreign invaders in the country.",
    },
    {
        id: 5,
        name: "Lepakshi Temple",
        image_url: "https://www.holidify.com/images/tooltipImages/LEPAKSHI.jpg",
        description:"Lepakshi is a small quaint village with a trail of several great kingdoms that once ruled the area. Lepakshi was founded in 1535 AD by Maharaja Aliya Rama Raya of the Vijayanagara empire. Located in Anantapur District of Andhra Pradesh and 120 km from Bangalore",
    },
    {
        id: 6,
        name: "Ahobilam Temple",
        image_url: "https://www.holidify.com/images/tooltipImages/ANANTAPUR.jpg",
        description:"Reverberating with flashes of India's glorious history, Anantapuram is a must visit if history and heritage fascinates you.",
    },
    {
        id: 7,
        name: "Vizag Beach",
        image_url: "https://www.holidify.com/images/tooltipImages/VISAKHAPATNAM.jpg",
        description:"Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh, Visakhapatnam is known for its picturesque beaches and serene landscape, as well as a rich cultural past, which makes it an ideal spot for a fantastic coastal vacation.",    
    },
    {
        id: 8,
        name: "Nagarjuna Konda",
        image_url: "https://www.holidify.com/images/tooltipImages/NAGARJUNAKONDA.jpg",
        description:"Nagarjunakonda or Nagajuna Hills is located 150 km from Hyderabad, near the Nagarjuna Sagar Reservoir in the Nalgonda District of Andhra Pradesh. Excavations have revealed that Buddhist civilizations existed here almost 1800 years ago, scriptures and artifacts have been found to give evidence of this fact.",
    },
    {
        id: 9,
        name: "Vijayawada",
        image_url: "https://www.holidify.com/images/tooltipImages/VIJAYAWADA.jpg",
        description:"With scrumptious fruits, sensational sweets and scenic marvels, Vijayawada literally translates to 'The Place of Victory'.",    
    },
    {
        id: 10,
        name: "Kurnool",
        image_url: "https://www.holidify.com/images/tooltipImages/KURNOOL.jpg",
        description:"A place of much historical value with beautiful surrounding areas, Kurnool, is a small town in Andhra Pradesh where much of history left its imprints.",  
    },
    {
        id: 9,
        name: "Vijayawada",
        image_url: "https://www.holidify.com/images/tooltipImages/VIJAYAWADA.jpg",
        description:"With scrumptious fruits, sensational sweets and scenic marvels, Vijayawada literally translates to 'The Place of Victory'.",    
    },

];

let ul=document.querySelector('.list');



places.forEach((element) => {
    let li= document.createElement('li');
    let image=document.createElement('img');
    image.src=element.image_url;
    let h3=document.createElement('h3');
    h3.innerText=element.name;
    let p=document.createElement('p');
    p.innerText=element.description;

    li.append(image,h3,p);

    ul.append(li);
});