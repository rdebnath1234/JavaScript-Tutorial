let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "green",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 6,
  },
  {
    color: "yellow",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 7,
  },
  {
    color: "blue",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 8,
  },
];
let carDetails = cars.map((car) => {
  // Destructure properties from the car object
  let { color, type, registration, capacity } = car;
  return {
    color: color,
    type: type,
    registration: registration,
    capacity: capacity,
  };
});
console.log(carDetails);

//common element between two arrays
let arr1 = [12, 13, 15, 14];
let arr2 = [12, 16, 18, 14];
for (let i = 0; i <= arr1.length; i++) {
  let commonNumber;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      commonNumber = arr1[i];
      console.log("Common Number is : " + commonNumber);
    }
  }
}

//Greater Element of an array
let arr3=[12,13,15,20,25,31,51]
let greaterNumber=arr3[0]
for(let i=0;i<arr3.length;i++){
  if(greaterNumber<arr3[i]){
    greaterNumber=arr3[i];
  }
}
console.log("Greater Number is : "+greaterNumber)