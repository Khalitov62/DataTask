let params = (new URL(document.location)).searchParams;
let name = params.get('dataId')
console.log(params);


fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-around ";
    res.forEach((data) => {
      let card = document.createElement("div");
      let cardBody = document.createElement("div");
      let title = document.createElement("h5");
      let userId = document.createElement("h5");
      let subtitle = document.createElement("h6");
      let text = document.createElement("p");
      
      var a = document.createElement("a");



      var linkText = document.createTextNode("Product-Info");
      a.appendChild(linkText);
      a.title = "Product-Info";
      a.href = `detail.html?dataId=${data.id}`;

      card.className = " border border-info";
      title.className = "card-title";
      subtitle.className = "card-subtitle mb-2 text-muted";
      text.className = "card-text";
      userId.innerText = `Id: ${data.id}`;
      title.innerText = `Fullname: ${data.name}, Username: ${data.username}`;
      subtitle.innerText = `Email address: ${data.email}`;
      text.innerHTML = `<strong>Address</strong> <br>
          Street: ${data.address.street},<br>
           City: ${data.address.city}`;
      cardBody.append(userId, title, subtitle, text, a);
      card.append(cardBody);
      row.append(card);

   
    });
    container.append(row);
  });