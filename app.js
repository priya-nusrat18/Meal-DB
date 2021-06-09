const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", ()=>{
    const inputField = document.getElementById("inputField").value;
    loadData(inputField);

});

const loadData =(name)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if (name === " " || name === null){
            alert("Please type Correct Name!")
        }else{
            
        updateUI(data)
        }
    })
    .catch(err =>alert("Please type correct Name!"))
}
const updateUI=(food)=>{
	const mealBox = document.getElementById("list-single-box");
	food.meals.forEach((meal) => {
        const singleBox =document.createElement("div");
		singleBox.className = 'food';
		singleBoxInfo = `
		<img onclick="showDetails('${meal.idMeal}')"class="food-img" src="${meal.strMealThumb}"></img>
		<h3 class="food-name"> ${meal.strMeal}</h3>
		`;
		singleBox.innerHTML = singleBoxInfo;
        mealBox.appendChild(singleBox);
	});
    document.getElementById("inputField").value=" ";
}
const showDetails=(id)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data=> renderInfo(data.meals[0]))
    
}
const renderInfo = (meal) => {
	const foodsDiv = document.getElementById("meal-detail");
	foodsDiv.innerHTML = `
    <img  class="detail-food-img" src ="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    <h3>Ingredient</h3>
    <p>1- ${meal.strIngredient1} ${meal.strMeasure1}</p>
    <p>2-  ${meal.strIngredient2} ${meal.strMeasure2}</p>
    <p>3-  ${meal.strIngredient3} ${meal.strMeasure3}</p>
    <p>4-  ${meal.strIngredient4} ${meal.strMeasure4}</p>
    <p>5- ${meal.strIngredient5} ${meal.strMeasure5}</p>
    <p>6-  ${meal.strIngredient6} ${meal.strMeasure6}</p>

    `;
};