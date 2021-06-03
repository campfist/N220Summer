//Create a variable that calls the movies div
let moviesDiv = document.getElementById("moviesDiv");

//Create collection of movies
let movies = [
    {title: "The Dark Knight", genre: "Action", release: 2008},
    {title: "Army of the Dead", genre: "Adventure", release: 2021},
    {title: "Spiral", genre: "Mystery", release: 2021}
];

//Create for loop to loop through elements and display each one of them on the webpage
for(let x = 0; x < movies.length; x++) {
    let newEl = document.createElement("div");
    newEl.innerHTML = movies[x].title + ": " + movies[x].genre + ", " + movies[x].release;
    newEl.classList.add("movie");
    moviesDiv.appendChild(newEl);

    //Create if statement to change the background color of an element to yellow
    if(movies[x].genre == "Action") {
        newEl.style.backgroundColor = "yellow";
    }
}