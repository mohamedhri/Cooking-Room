let ArryRecipes = [
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 30,
        comments : [33,44,5,6,4,5,4,5],
        country :"./icons/france.png",
        userName : "oussama charafi",
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "Glasse apple",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 30,
        comments : [33,44,5,6,4,5,4,5],
        country :"./icons/france.png",
        userName : "yassine oularbi",
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "marocain pizza",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 30,
        comments : [33,44,5,6,4,5,4,5],
        country :"./icons/france.png",
        userName : "salma baouch",
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 30,
        comments : [33,44,5,6,4,5,4,5],
        country :"./icons/france.png",
        userName : "mohamed amine",
    },
    {
        photo: "ropa.jpeg",
        title : "Cream prawen,inspired by morocco",
        title2 : "salade Perry",
        descreption : "Salade nesoiase",
        made : " made by morroco",
        likes: 30,
        comments : [33,44,5,6,4,5,4,5],
        country :"./icons/france.png",
        userName : "oussama charafi",
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
   




function getData(recipes){
   
    for(let i = 0 ; i < recipes.length; i++){

        document.getElementById("container").innerHTML += 
    `
    <div class="wrapper-recipes">
                <div class="wrapper-card">
                    <div class="card-recipes">
                        <div class="img">
                            <img src="${recipes[i].photo}" width="100%" alt="" id="img-recipes">
                        </div>
                        <div class="content-recipes">
                            <h2>${recipes[i].title}
                            </h2>
                            <h3>${recipes[i].title2}<span>${recipes[i].made}</span></h3>
                        </div>
                            <div class="comments">
                            <h3 class="commenters"><img src="icons/chat (1).png" width="20px">&nbsp;${recipes[i].comments.length}</h3>
                            <h3 class="likes"><img src="/icons/love.png" width="20px">&nbsp;${recipes[i].likes}</h3>
                            <h3 class="contry"><img src="${recipes[i].country}" width="20px"></h3>
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
                <h4 id="user-name">${recipes[i].userName}</h4>
                <h4 id="user-recipes">${recipes[i].title2}</h4>
                <h4 id="status">Now</h4>
            </div>
        </div>
        `
}

    }


    function paginate(array, page_size, page_number) {
       
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }


function pagination(){

    document.addEventListener("DOMContentLoaded", function() {
        const size = 3; 
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
    });

}
pagination();





    // document.getElementById("previous-button").addEventListener("click", function(e) {
    //     e.preventDefault();
    //     if (currentPage > 1) {
    //         currentPage--;
    //         displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));
    //     }
    // });

    // document.getElementById("next-button").addEventListener("click", function(e) {
    //     e.preventDefault();
    //     if (currentPage > 0) {
    //         currentPage++;
    //         displayRecipes(paginate(recipes, PAGE_SIZE, currentPage));
    //     }
    // });





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