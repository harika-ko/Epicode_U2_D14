const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTQ4NjU1MDYsImV4cCI6MTY1NjA3NTEwNn0.CytmxArs6DM9IY723KxsefpHzvAEU8nDeGtMlemWuNM",
    },
};

let frontendFunction = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options);
    const parsedBody = await response.json();
    console.log(parsedBody);

    let listgroup = document.querySelector(".list-group");

    parsedBody.forEach((userinput) => {
        let li1 = document.createElement("li");
        li1.innerHTML = `
    <li class="list-group-item d-flex">
              <div>
                <h2>${userinput.name}</h2>
                <p>Brand: ${userinput.brand}</p>
                <p>Description: ${userinput.description}</p>
                <p><a href="${userinput.imageUrl}">Link to an image of the product</a></p>
                <p>${userinput._id}</p>
                <small>Created at: ${userinput.createdAt}</small>
                <span>$${userinput.price}</span>
              </div>
            </li>`;
        listgroup.appendChild(li1);
    });
};

window.onload = () => {
    frontendFunction();
};
