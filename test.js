let obj = {
  name: "John",
  age: 30,
  city: "New York"
}

function showDetails( [name, city] ) {
  console.log(`Name is ${name} city is ${city}`);
}

showDetails(obj)