fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));
