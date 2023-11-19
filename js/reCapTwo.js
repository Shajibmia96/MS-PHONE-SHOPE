const dataLoadAPI = async(brandName="13" ,isShowAll ) =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
   const data = await res.json()
   const phone = data.data
   displayLoadData(phone ,isShowAll)
}

 const displayLoadData=(phonesData ,isShowAll) =>{
       const cardContainer = document.getElementById("card-container")
    //    for new element add
      cardContainer.textContent = '';
      const showAllContainer = document.getElementById("showAll");
      // show button mudify;
      console.log("All Show button was clicked" , isShowAll)

      if(phonesData.length >12 && !isShowAll){
        showAllContainer.classList.remove("hidden")
      }else{
        showAllContainer.classList.add("hidden")
      }
      if(!isShowAll){
        phonesData = phonesData.slice(0,12);
      }
    
          //data adding in container
      phonesData.forEach(phone =>{
        // console.log(phone)
          const newDiv = document.createElement("div")
          newDiv.classList = "card p-4 bg-gray-300 shadow-xl"
           newDiv.innerHTML =`
           <figure><img src="${phone.image}" alt="Shoes" /></figure>
           <div class="card-body space-y-4">
             <h2 class="card-title">${phone.phone_name}</h2>
             <p>${phone.slug}</p>
             <div class="card-actions justify-center">
               <button class="btn btn-primary">Buy Now</button>
             </div>
           </div>
           `;
           
           cardContainer.appendChild(newDiv)
      });
      toggleLoadingSpinner(false)
 }
dataLoadAPI()

// search  bar 
const searchButton =(isShowAll) =>{
    const inputField = document.getElementById("inputField")
    const inputValue = inputField.value;
    // console.log(inputValue)
    dataLoadAPI(inputValue , isShowAll);
    toggleLoadingSpinner(true)
}

// Loading spinner
 const toggleLoadingSpinner =(isLoading) =>{
  const loadSpinner = document.getElementById("loadingSpinner");
    if(isLoading){
      loadSpinner.classList.remove("hidden")
    }else[
      loadSpinner.classList.add("hidden")
    ]
 };
//  handle seeAllELement

 const seeAllELement =()=>{
    const showAllbtn = document.getElementById("showAll");
    //  showAllbtn.classList.remove("hidden")
    searchButton(true)
 }