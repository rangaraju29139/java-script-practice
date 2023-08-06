let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users", true);
request.send();
request.onload = function () {
  console.log(this.response);
  let data = JSON.parse(this.response);
  console.log(data);
  data.forEach((element) => {
    console.log(element.login);
  });
};
