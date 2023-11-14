const reLoadPhone = async(brandName) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
    const data = await res.json();
   const phone = data.data
   displayReLoadPhone(phone)
}

const displayReLoadPhone =(phones) =>{
    // console.log(phone)
    const cardContainer = document.getElementById("card-container");
    cardContainer.textContent = '';

    // add button to see 12 mre than element
    const showAllContainer = document.getElementById("showAll");
    if(phones.length > 12){
        showAllContainer.classList.remove("hidden")
    }else{
        showAllContainer.classList.add("hidden")
    }

    //Slice More than 12 element
    phones = phones.slice(0,12)
     phones.forEach(phone => {
        //  console.log(phone)
        const phoneCard = document.createElement("div")
        phoneCard.classList = "card p-4 bg-gray-300 shadow-xl"
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone. slug}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        cardContainer.appendChild(phoneCard)
     });
     toggleLoadSpinner(false)
};

// reLoadPhone()



// click handel
 
 const searchButton =()=>{
    // toggleLoadSpinner
    toggleLoadSpinner(true)
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value;
    // console.log(inputValue)
   reLoadPhone(inputValue)
 }

//  SEE all elements of search

// LoadSpinner
const toggleLoadSpinner = (isLoading) =>{
   const loadSpinner = document.getElementById("loadingSpinner")
   if(isLoading){
       loadSpinner.classList.remove("hidden")
   }else{
    loadSpinner.classList.add("hidden")
   }
}
