// const reLoadPhone = async(brandName ='13' , isSeeAll) =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
//     const data = await res.json();
//    const phone = data.data
//    displayReLoadPhone(phone , isSeeAll)
// }

// const displayReLoadPhone =(phones , isSeeAll) =>{
//     // console.log(phone)
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.textContent = '';

//     // add button to see 12 mre than element
//     const showAllContainer = document.getElementById("showAll");
//     if(phones.length > 12 && !isSeeAll){
//         showAllContainer.classList.remove("hidden")
//     }else{
//         showAllContainer.classList.add("hidden")
//     };
//     // console.log("is see all" , isSeeAll)

//     //Slice More than 12 element
//       if(!isSeeAll){
//         phones = phones.slice(0,12)
//       }
//      phones.forEach(phone => {
//         //  console.log(phone)
//         const phoneCard = document.createElement("div")
//         phoneCard.classList = "card p-4 bg-gray-300 shadow-xl"
//         phoneCard.innerHTML = `
//         <figure><img src="${phone.image}" /></figure>
//         <div class="card-body">
//           <h2 class="card-title">${phone.phone_name}</h2>
//           <p>${phone. slug}</p>
//           <div class="card-actions justify-center">
//             <button onclick ="handleDataShow('${phone.slug}')" class="btn btn-primary">Show Details</button>
//           </div>
//         </div>
//         `
//         cardContainer.appendChild(phoneCard)
//      });
//      toggleLoadSpinner(false)
// };

// // ShowData details

//  const handleDataShow = async(idNumber) =>{
//     //  console.log("hello" , idNumber)
//     const res = await fetch(`https://openapi.programming-hero.com/api/phone/${idNumber}`);
//     const data = await res.json()
//     // console.log(data)
//     const phoneData = data.data
//     showPhoneDetails(phoneData)

//  }

// //  showPhoneDetails

// const showPhoneDetails = (phone) =>{
//    const phoneDetails = phone
//    console.log(phoneDetails);
//    const showDetailsContainer = document.getElementById("showDetailsContainer");
//    showDetailsContainer.innerHTML = `
//      <div class = "space-y-10" >
//      <div class ="flex justify-center items-center"><img src ="${phoneDetails?.image}" alt ="" "><img/></div>
//       <h1 class ="text-3xl font-bold">${phoneDetails?.name}<h1/>
//       <p><span class ="text-2xl font-medium" >Storage:</span>${phoneDetails?.mainFeatures?.storage
//       }</p>
//       <p><span class ="text-2xl font-medium" >Display Size :</span>${phoneDetails?.mainFeatures.displaySize

//       }</p>
//       <p><span class ="text-2xl font-medium" >Brand:</span>${phoneDetails.brand
//       }</p>
//       <p><span class ="text-2xl font-medium" >Storage:</span>${phoneDetails.mainFeatures.storage
//       }</p>
//       <p><span class ="text-2xl font-medium" >Storage:</span>${phoneDetails?.ainFeatures?.storage || "NO Storage Not available"
//       }</p>
//      <div/>

//    `
   
//   showDetailsModal.showModal()
// }

// reLoadPhone()



// // click handel
 
//  const searchButton =(isSeeAll)=>{
//     // toggleLoadSpinner
//     toggleLoadSpinner(true)
//     const inputField = document.getElementById("inputField");
//     const inputValue = inputField.value;
//     // console.log(inputValue)
//    reLoadPhone(inputValue ,isSeeAll)
//  }

// //  SEE all elements of search

// // LoadSpinner
// const toggleLoadSpinner = (isLoading) =>{
//    const loadSpinner = document.getElementById("loadingSpinner")
//    if(isLoading){
//        loadSpinner.classList.remove("hidden")
//    }else{
//     loadSpinner.classList.add("hidden")
//    }
// }


// // See alls items

//   const seeAllELement=() =>{
//     searchButton(true)
//   }