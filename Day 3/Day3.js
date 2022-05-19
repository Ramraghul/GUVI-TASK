// 2)For the given JSON iterate over all for loops (for, for in, for of, forEach)

{
    "basics": {
      "name": "first and last name",
      "picture": "",
      "email": "email address",
      "phone": "xxx xxx xxxx",
      "degree": "",
      "website": "URL",
      "summary": "Paragraph",

      "location": {
        "address": "street address",
        "postalCode": "pin code",
        "city": "city",
        "countryCode": "TAMILNADU",
        "region": " region "
      },
     }
     },
    "work": [
      {
        "company": " employer name",
        "position": " job title",,
        "summary": "A one-sentence to one-paragraph summary of this employer or position",
        "highlights": 
       }
    ],
    "volunteer": [
      {
        "organization": "volunteer organization name",
        "position": " job title",
        "website": "The URL for the employer's website",
        "summary": "A one-sentence to one-paragraph summary of this employer or position",
        "highlights": 
      }
    ],
    "education": [
      {
        "institution": "school name",
        "area": " study or degree earned",
        "studyType": "",
        "startDate": " start date, in YYYY-MM-DD format",
        "endDate": " date, in YYYY-MM-DD format",
        "gpa": "",
        "courses": [
          ""
        ]
      }
    ],
    "awards": [
      {
        "title": "award title",
        "date": " date, in YYYY-MM-DD format ",
        "awarder": "Your award given by",
        "summary": " xxx xxxx xxx"
      }
    ],
    "skills": [
      {
        "name": "A category of job skills (e.g. 'Programming Languages')",
        "level": "",
        "keywords": [
          "Keywords under this category (e.g. 'Java', 'C++', etc)"
        ]
      }
    ],
    "languages": [
      {
        "language": "Language name",
        "fluency": "language fluency"
      }
    ],
    "interests": [
      {
        "name": "A category of interests (e.g. 'Sports')",
        "keywords": [
          "Keywords under this category (e.g. 'Cricket', 'Football', 'Golf')"
        ]
      }
    ]

// 1)Create your own resume data in JSON format

)FOR->

var obj = [ { person: "sai", age: "2", city: "HYD" }, { fname: "sarya", age: "5", city: "Goa" }, { fname: "raj kiran", age: "87", city: "lucknow" }, ]; 
for(i=0;i<obj.length;i++){
    console.log(obj[i].fname)
    console.log(obj[i].age)
    console.log(obj[i].city)
}

B)for in->
for(i=0;i<obj.length;i++){
for(var param in obj[i]){
     console.log(`${param}: ${obj[i][param]}`);
}
}

C)for of->
for(var elements of obj){
  console.log(elements.fname)
    console.log(elements.age)
    console.log(elements.city)  
}

D)for each->
obj.forEach(function(objects){
   console.log(objects.fname)
    console.log(objects.age)
    console.log(objects.city)
})


