const dataLoadAPI = async(brandName="13" ) =>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
   const data = await res.json()
   const phone = data.data
   displayLoadData(phone)
}

 const displayLoadData=(phonesData) =>{
       const cardContainer = document.getElementById("card-container")
    //    for new element add
      cardContainer.textContent = '';
      phonesData.forEach(phone =>{
        console.log(phone)
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
           if(phone >12){
            phone.slice(0 ,12)
           }
           cardContainer.appendChild(newDiv)
      });
      toggleLoadingSpinner(false)
 }
dataLoadAPI()

// search  bar 
const searchButton =() =>{
    const inputField = document.getElementById("inputField")
    const inputValue = inputField.value;
    // console.log(inputValue)
    dataLoadAPI(inputValue );
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
 }