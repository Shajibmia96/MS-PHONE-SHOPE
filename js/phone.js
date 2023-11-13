const loadPhone = async(brandName) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
    const data = await res.json()
    const phones = data.data
   displayPhone(phones)
}

const displayPhone = (phones) =>{
  const phonesContainer=document.getElementById("card-container");
  phonesContainer.textContent ='';
  phones.forEach(phone => {
    //   console.log(phone.phone_name)
    const phoneCard = document.createElement("div");
    phoneCard.classList ="card p-4 bg-gray-300 shadow-xl "
    phoneCard.innerHTML =`
    <figure><img src="${phone.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>${phone.slug}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    phonesContainer.appendChild(phoneCard)
  });
}
// loadPhone()


// search button handel


const handelSearch= () =>{
//    console.log("hello sayem ,Iam Now Gajipur")
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value;

// inputField.value = " ";
// console.log(inputValue)
 loadPhone(inputValue)

}