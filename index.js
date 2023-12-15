function getRecipe() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let recipe = prompt("Which Recipe do you want?");
  if (name === null || name === "") {
    alert("Please enter your name");
    name = prompt("What is your name?");
  } else if (email === null || email === "") {
    alert("Please enter your email");
    email = prompt("What is your email address?");
  } else if (recipe === null || recipe === "") {
    alert("Please enter the required dish");
    recipe = prompt("Which dish's Recipe do you want?");
  } else {
    alert(
      `Thank you ${name}! We'll send your recipe for ${recipe} by email. We hope you have a wonderful experience trying one of our meals.`
    );
  }
}

let get = document.querySelector("button");
get.addEventListener("click", getRecipe);
