function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
        .catch(error => console.error('Error fetching data:', error));
}

function display(data) {
    var allMeals = data.meals;
    console.log(allMeals);

    var oldContent = document.getElementById("container");
    oldContent.textContent = "";

    if (allMeals) {
        for (var i = 0; i < allMeals.length; i++) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal Name: ${allMeals[i].strMeal}  <br>
                                Meal ID: ${allMeals[i].idMeal}<br>
                                <img src="${allMeals[i].strMealThumb}"> <br> <br>
                                Cooking Instructions: <p>
                                ${allMeals[i].strInstructions}  </p> <br>
                                Youtube Link: ${allMeals[i].strYoutube}  <br>
                                Ingredient 11: ${allMeals[i].strIngredient11}  <br>
                                ImageStorg:${allMeals[i].strImageSource} <br>`;

                                

            newDiv.classList.add("mealStyle");
            oldContent.appendChild(newDiv);
        }
    } else {
        oldContent.innerHTML = "No results found.";
    }
}
