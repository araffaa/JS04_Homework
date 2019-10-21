let streetNumber=['882','8928','52','7878','579']
let streetName=['1st Street','Front Ave','W. Canal Street','Summerhouse Circle','Meadow St']
let cityName=['Brandon','Northville','Alexandria','Strongsville','Newburgh']
let stateName=[`FL`,`MI`,`VA`,`OH`,`NY`]
let zipCode=[`33510`,`48167`,`22304`,`12550`,`44136`]
let rand1=Math.floor(Math.random()*streetNumber.length)
let rand2=Math.floor(Math.random()*streetName.length)
let rand3=Math.floor(Math.random()*cityName.length)
let rand4=Math.floor(Math.random()*stateName.length)
let rand5=Math.floor(Math.random()*zipCode.length)

console.log(`${streetNumber[rand1]} ${streetName[rand2]},${cityName[rand3]} ${stateName[rand4]} ${zipCode[rand5]}`);