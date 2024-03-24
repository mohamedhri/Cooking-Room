let ArryRecipes = [
    {
        photo: "images/ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 20,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Salad",
        ingredients: [
            "4 (6 ounce) fillets",
            "2 tablespoons olive oil",
            "2 tablespoons capers",
            "1/8 teaspoon salt",
            "1/8 teaspoon ground black pepper",
            "4 slices lemon"
        ]
    },
    {
        photo: "images/ropa1.jpg",
        title : "Cream prawen,inspired by morocco",
        title2 : "Glasse apple",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 100,
        comments : [],
        country :"./icons/france.png",
        userName : "yassine oularbi",
        category: "Salad",
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "2 tablespoons olive oil",
            "1 teaspoon dried oregano",
            "1 teaspoon garlic powder",
            "Salt and black pepper to taste",
            "1/2 cup cherry tomatoes, halved",
            "1/2 cucumber, sliced",
            "1/4 red onion, thinly sliced",
            "1/4 cup Kalamata olives, pitted and halved",
            "4 cups mixed salad greens",
            "1/4 cup crumbled feta cheese",
            "2 tablespoons balsamic vinegar",
            "1 tablespoon lemon juice",
            "1 tablespoon honey",
            "2 tablespoons chopped fresh parsley"
        ]

    },
    {
        photo: "images/ropa2.jpg",
        title : "Cream prawen,inspired by morocco",
        title2 : "marocain pizza",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 33,
        comments : [],
        country :"./icons/france.png",
        userName : "salma baouch",
        category: "Pizza",
        ingredients: [
            "4 (6 ounce) fillets",
            "2 tablespoons olive oil",
            "2 tablespoons capers",
            "1/8 teaspoon salt",
            "1/8 teaspoon ground black pepper",
            "4 slices lemon"
        ]
    },
    {
        photo: "images/ropa3.jpg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 50,
        comments : [],
        country :"./icons/france.png",
        userName : "mohamed amine",
        category: "Pasta",
        ingredients: [
            "4 (6 ounce) fillets",
            "2 tablespoons olive oil",
            "2 tablespoons capers",
            "1/8 teaspoon salt",
            "1/8 teaspoon ground black pepper",
            "4 slices lemon"
        ]
    },
    {
        photo: "images/ropa4.jpg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes:23,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Chicken",
        
    },
    
]


let input1=document.getElementById("image_input")
let input2=document.getElementById("title_input")
let input3=document.getElementById("title2_input")
let input4=document.getElementById("description_input")
let input5=document.getElementById("made_input")
let input6=document.getElementById("user_input")
let input7=document.getElementById("category")






function AddCard(){

    const card = {
        photo: input1.files.length > 0 ? URL.createObjectURL(input1.files[0]) : '',
        title:input2.value,
        title2:input3.value,
        descreption:input4.value,
        made:input5.value,
        likes:20,
        comments:[],
        country:"./icons/france.png",
        userName:input6.value,
    }
    
    ArryRecipes.push(card);

    document.getElementById("alert").style.display = "flex"
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";

    input7.value = "";


}
    
    document.getElementById("send").onclick = function(){
       
        let imgrecipes=document.getElementById('image_input');
            input1.onchange=function(){
            imgrecipes.src=URL.createObjectURL(input1.files[0])
        }
    
        AddCard();
        getData(recipes);
    }
    document.getElementById("p-close").onclick = function(){
     document.getElementById("alert").style.display = "none"
    }

   


    function getData(recipes) {
        for (let i = 0; i < recipes.length; i++) {
            document.getElementById("container").innerHTML +=
                `
            <div class="wrapper-recipes">
                <div class="wrapper-card">
                    <div class="card-recipes">
                        <div class="img">
                            <img src="${recipes[i].photo}" width="100%" alt="" id="img-recipes">
                        </div>
                        <div class="content-recipes">
                            <h2>${recipes[i].title}</h2>
                            <h3>${recipes[i].title2}<span>${recipes[i].made}</span></h3>
                        </div>
                        <div class="comments">
                            <span class="parent-com">
                                <input type="text" class="comments-card" placeholder="Commenter">
                                <button class="add-com"><img src="icons/send.png"/></button>
                            </span>
                            <h3 class="commenters"><img src="icons/chat.png" width="20px">&nbsp;${recipes[i].comments.length}</h3>
                            <h3 class="likes"><img src="icons/love.png" width="20px">&nbsp;${recipes[i].likes}</h3>
                            <h3 class="contry"><img src="${recipes[i].country}" width="20px"></h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
            document.getElementById("users").innerHTML +=
                `
            <div class="users-content">
                <div class="full-name">
                    <h4 class="user-img"><img src="images/profile.png" width="25px" alt=""></h4>
                    <h4 class="user-name">${recipes[i].userName}</h4>
                    <h4 class="user-recipes">${recipes[i].title2}</h4>
                    <h4 class="status">Now</h4>
                </div>
            </div>
        `;
            if(ArryRecipes.length <= 1000){
                document.getElementById("all-views").innerHTML = ArryRecipes.length ;
            }
            else{
                document.getElementById("all-views").innerHTML = ArryRecipes.length + "K";
            }
        
        }
        addCom();
        search();
    }
   
function search(){
    let cardElements = document.querySelectorAll('.wrapper-recipes');
    let search = document.getElementById("input-search");
    cardElements.forEach((element, index) => {
        ArryRecipes[index].element = element;
    });
    search.addEventListener("input", e => {
        let value = e.target.value.toLowerCase();
        
        ArryRecipes.forEach(card => {
            let found = card.title.toLowerCase().includes(value) || card.title2.toLowerCase().includes(value) || card.descreption.toLowerCase().includes(value);
            card.element.classList.toggle("hide", !found)
        });
    });
}
  
function addCom() {
    document.querySelectorAll(".commenters").forEach(function (commentElement, index) {
        const parentCom = document.querySelectorAll(".parent-com")[index];
        parentCom.style.display = "none"
        commentElement.addEventListener("click", () => {
            if (parentCom.style.display === "none") {
                parentCom.style.display = "flex";
            } else {
                parentCom.style.display = "none";
            }
        });
    });

    document.querySelectorAll(".add-com").forEach(function (element,index){
        element.addEventListener("click", function(){
            const indexElement = index;

            const commentInput = document.querySelectorAll(".comments-card")[indexElement]; 
            const comValue = commentInput.value;
            ArryRecipes[indexElement].comments.push(comValue);

            const parentCom = document.querySelectorAll(".parent-com")[indexElement];
            parentCom.style.display = "none";

            document.getElementById("container").innerHTML = "";
            document.getElementById("users").innerHTML = "";
            getData(ArryRecipes);

            console.log(indexElement);
        })
    })

}

    
    



function paginate(array, page_size, page_number) {
       
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}


function pagination(){

document.addEventListener("DOMContentLoaded", function() {
    const size = 6; 
    let currentPage = 1;
    getData(paginate(ArryRecipes, size, currentPage));
    const paginationLinks = document.querySelectorAll(".page-link");
    paginationLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const pageNumber = parseInt(e.target.innerText);

            if (!isNaN(pageNumber)) {
                currentPage = pageNumber;
                document.getElementById("users").innerHTML ="";
                document.getElementById("container").innerHTML ="" 
                
                getData(paginate(ArryRecipes, size, currentPage));
            }

        });
       
    });
    document.getElementById("previous-button").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            document.getElementById("users").innerHTML ="";
            document.getElementById("container").innerHTML ="" 
            getData(paginate(ArryRecipes, size, currentPage));
        }
    });
    
    document.getElementById("next-button").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 0) {
            currentPage++;
            document.getElementById("users").innerHTML ="";
            document.getElementById("container").innerHTML ="" 
            getData(paginate(ArryRecipes, size, currentPage));
        }
    });
  
});


}
pagination();







  





function populateCategoryFilter() {
    let categories = new Set(); 

    for (let i = 0; i < ArryRecipes.length; i++) {
        categories.add(ArryRecipes[i].category);
    }

    
    const categoryFilterSelect = document.getElementById("category-filter");
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        categoryFilterSelect.appendChild(option);
    });
}


function filterRecipesByCategory(category) {
    document.getElementById("container").innerHTML =""; 
    document.getElementById("users").innerHTML ="";

    for (let i = 0; i < ArryRecipes.length; i++) {
        if (category === "all" || ArryRecipes[i].category === category) {
            document.getElementById("container").innerHTML += `
                <div class="wrapper-recipes">
                    <div class="wrapper-card">
                        <div class="card-recipes">
                            <div class="img">
                                <img src="${ArryRecipes[i].photo}" width="100%" alt="" id="img-recipes">
                            </div>
                            <div class="content-recipes">
                                <h2>${ArryRecipes[i].title}</h2>
                                <h3>${ArryRecipes[i].title2}<span>${ArryRecipes[i].made}</span></h3>
                            </div>
                            <div class="comments">
                            <span class="parent-com">
                                <input type="text" class="comments-card" placeholder="Commenter">
                                <button class="add-com"><img src="icons/send.png"/></button>
                            </span>
                            <h3 class="commenters"><img src="icons/chat.png" width="20px">&nbsp;${ArryRecipes[i].comments.length}</h3>
                            <h3 class="likes"><img src="icons/love.png" width="20px">&nbsp;${ArryRecipes[i].likes}</h3>
                            <h3 class="contry"><img src="${ArryRecipes[i].country}" width="20px"></h3>
                        </div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById("users").innerHTML +=
        `
        <div class="users-content" >
            <div class="full-name">
                <h4 id="user-img"><img src="images/profile.png" width="25px" alt=""></h4>
                <h4 id="user-name">${ArryRecipes[i].userName}</h4>
                <h4 id="user-recipes">${ArryRecipes[i].title2}</h4>
                <h4 id="status">Now</h4>
            </div>
        </div>
        `

       
        }
    }
    addCom();
}
populateCategoryFilter();


document.getElementById("category-filter").addEventListener("change", function() {
    const selectedCategory = this.value;
    filterRecipesByCategory(selectedCategory);
});



// function bubbleSort(){
//     ArryRecipes.sort(function(a , b){
//         return b.likes - a.likes;
//     })
//     document.getElementById("container").innerHTML =""; 
//     document.getElementById("users").innerHTML ="";
//     getData();
// }
// bubbleSort();


// Fonction pour afficher les détails du produit dans la modale
function showProductDetails(
    ingredientsTab,
    directionsTab,
    timeTab,
    servingTab,
    nutritionTab
) {
    // Mettre à jour les éléments de la modale avec les détails du produit
    ingredientsTab.innerHTML = `
        <h3>Ingredients</h3>
        <ul>
            <li>4 (6 ounce) fillets</li>
            <li>salmon 2 tablespoons olive oil</li>
            <li>2 tablespoons capers</li>
            <li>1/8 teaspoon salt</li>
            <li>1/8 teaspoon ground black pepper</li>
            <li>4 slices lemon</li>
        </ul>
    `;

    directionsTab.innerHTML = `
        <h3>Directions</h3>
        <p>
            Preheat a large heavy skillet over medium heat for 3 minutes.
            <br /><br />
            Coat salmon with olive oil. Place in skillet, and increase heat to high. Cook for 3 minutes. Sprinkle with capers, and salt and pepper. Turn salmon over, and cook for 5 minutes, or until browned. Salmon is done when it flakes easily with a fork.<br /><br />
            Transfer salmon to individual plates, and garnish with lemon slices.
        </p>
    `;

    timeTab.innerHTML = `
        <h3>Estimated Time</h3>
        <ul>
            <li>10m preparation time</li>
            <li>10m cooking time</li>
            <li>20m total</li>
        </ul>
    `;

    servingTab.innerHTML = `
        <h3>Servings</h3>
        <p>
            This specific recipe serves up to four people. Adjust it accordingly to suit the specific needs of your party.
        </p>
    `;

    nutritionTab.innerHTML = `
        <h3>Nutritional Value</h3>
        <p><i>Based on a 2000 calorie diet</i></p>
        <ul>
            <li>Calories: 371 kcal 19%</li>
            <li>Fat: 25.1 g 39%</li>
            <li>Carbs: 1.7g 1%</li>
            <li>Protein: 33.7 g 67%</li>
            <li>Cholesterol: 99 mg 33%</li>
            <li>Sodium: 300 mg 12%</li>
        </ul>
    `;

    // Afficher la modale
    $("#productModal").modal("show");
}


// Ajouter un gestionnaire d'événement de clic pour chaque colonne
let columns = document.querySelectorAll("#container");
columns.forEach((column) => {
    column.addEventListener("click", function () {
    
        let ingredientsTab = document.getElementById("ingredients");
        let directionsTab = document.getElementById("directions");
        let timeTab = document.getElementById("time");
        let servingTab = document.getElementById("serving");
        let nutritionTab = document.getElementById("nutrition");

        // Afficher les détails du produit dans la modale
        showProductDetails(
            ingredientsTab,
            directionsTab,
            timeTab,
            servingTab,
            nutritionTab
        );
    });
});

// Fonction pour changer d'onglet dans la modale
function salmon(evt, recipe) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(recipe).style.display = "flex";
    evt.currentTarget.className += " active";
}


// Afficher la modale
function showModal() {
    document.querySelector('.modal').style.display = 'flex';
}

// Ajouter un gestionnaire d'événement pour le bouton de fermeture
document.querySelector('.btn-close').addEventListener('click', hideModal);

// Ajouter un gestionnaire d'événement pour le bouton de confirmation
document.querySelector('.modal-confirm').addEventListener('click', function() {
    // Code à exécuter lors de la confirmation
    hideModal();
});

bubbleSort();




