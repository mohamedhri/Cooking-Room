let ArryRecipes = [
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 20,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Salad"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "Glasse apple",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 100,
        comments : [],
        country :"./icons/france.png",
        userName : "yassine oularbi",
        category: "Salad"

    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "marocain pizza",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 33,
        comments : [],
        country :"./icons/france.png",
        userName : "salma baouch",
        category: "Pizza"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 50,
        comments : [],
        country :"./icons/france.png",
        userName : "mohamed amine",
        category: "Pasta"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes:23,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Chicken"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 230,
        comments : [],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
]


let input1=document.getElementById("image_input")
let input2=document.getElementById("title_input")
let input3=document.getElementById("title2_input")
let input4=document.getElementById("description_input")
let input5=document.getElementById("made_input")
let input6=document.getElementById("user_input")

//hhh



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
}
    
    document.getElementById("send").onclick = function(){
       
        let imgrecipes=document.getElementById('image_input');
        input1.onchange=function(){
            imgrecipes.src=URL.createObjectURL(input1.files[0])
        }
    
        AddCard();
        getData(recipes);
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
        }
        addCom();
    }


function addCom() {
    document.querySelectorAll(".commenters").forEach(function (commentElement, index) {
        const parentCom = document.querySelectorAll(".parent-com")[index];
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
            getData();

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



function bubbleSort(){
    ArryRecipes.sort(function(a , b){
        return b.likes - a.likes;
    })
    document.getElementById("container").innerHTML =""; 
    document.getElementById("users").innerHTML ="";
    getData();
}
bubbleSort();