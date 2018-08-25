var data = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api";

fetch(data)
  .then(res =>{
    return res.json();
  })
  .then(data1 => {
    console.log(data1);
    let results = data1.results;
    let titleData = `<table class="table table-striped"><tr><th>Title</th> <th>Link to full recipe</th> <th>Ingredients</th><th>Photo</th></tr>`;
    
    for (let i = 0; i <results.length; i++){
  
       titleData += `<tr><td id="title-${i}">${results[i].title}</td><td><a href="${results[i].href}">Recipe</a></td><td>${results[i].ingredients}</td><td><img src=" ${results[i].thumbnail}"/></td></tr>`;
     
     document.getElementById('food-list').innerHTML = titleData;
  }}
    );


