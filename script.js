let ArryRecipes = [
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 20,
        comments : [33,44,5,6,4,5,4,5],
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
        comments : [33,44,5,6,4,5,4,5],
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
        comments : [33,44,5,6,4,5,4,5],
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
        comments : [33,44,5,6,4,5,4,5],
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
        comments : [33,44,5,6,4,5,4,5],
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
        likes: 30,
        comments : ["ss","ee",44.443,44,556,445,445,],
        country :"./icons/france.png",
        userName : "oussama charafi",
        category: "Soup"
    },
]


let input1=document.getElementById("P1")
let input2=document.getElementById("P2")
let input3=document.getElementById("P3")
let input4=document.getElementById("P4")
let input5=document.getElementById("P5")
let input6=document.getElementById("P6")
let input7=document.getElementById("P7")
let input8=document.getElementById("P8")
let input9=document.getElementById("P9")


function AddCard(){


    const card = {
        photo: input1.files.length > 0 ? URL.createObjectURL(input1.files[0]) : '',
        title:input2.value,
        title2:input3.value,
        descreption:input4.value,
        made:input5.value,
        likes:input6.value,
        comments:input7.value,
        country:input8.files.length>0 ? URL.createObjectURL(input1.files[0]) : '',
        userName:input9.value,
    }
    
    ArryRecipes.push(card);
}
    
    document.getElementById("send").onclick = function(){
        document.getElementById("container").innerHTML =""; 
        document.getElementById("users").innerHTML ="";

        let imgrecipes=document.getElementById('img-recipes');
        input1.onchange=function(){
            imgrecipes.src=URL.createObjectURL(input1.files[0])
        }
    
        AddCard();
        getData();
    }
   




function getData(){
    for(let i = 0 ; i < ArryRecipes.length; i++){
        document.getElementById("container").innerHTML += 
    `
    <div class="wrapper-recipes">
                <div class="wrapper-card">
                    <div class="card-recipes">
                        <div class="img">
                            <img src="${ArryRecipes[i].photo}" width="100%" alt="" id="img-recipes">
                        </div>
                        <div class="content-recipes">
                            <h2>${ArryRecipes[i].title}
                            </h2>
                            <h3>${ArryRecipes[i].title2}<span>${ArryRecipes[i].made}</span></h3>
                        </div>
                            <div class="comments">
                            <h3 class="commenters"><img src="icons/chat (1).png" width="20px">&nbsp;${ArryRecipes[i].comments.length}</h3>
                            <h3 class="likes"><img src="/icons/love.png" width="20px">&nbsp;${ArryRecipes[i].likes}</h3>
                            <h3 class="contry"><img src="${ArryRecipes[i].country}" width="20px"></h3>
                            </div>
                    </div>
                </div>
            </div>
    `
        document.getElementById("users").innerHTML +=
        `
        <div class="users-content" >
            <div class="full-name">
                <h4 id="user-img"><img src="/profile.png" width="25px" alt=""></h4>
                <h4 id="user-name">${ArryRecipes[i].userName}</h4>
                <h4 id="user-recipes">${ArryRecipes[i].title2}</h4>
                <h4 id="status">Now</h4>
            </div>
        </div>
        `
}
    }
getData();


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
    document.getElementById("container").innerHTML = ""; 

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
                                <h3 class="commenters"><img src="icons/chat (1).png" width="20px">&nbsp;${ArryRecipes[i].comments.length}</h3>
                                <h3 class="likes"><img src="/icons/love.png" width="20px">&nbsp;${ArryRecipes[i].likes}</h3>
                                <h3 class="contry"><img src="${ArryRecipes[i].country}" width="20px"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
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