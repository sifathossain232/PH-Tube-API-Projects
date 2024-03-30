// const loadPhone = async () => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
//     const data = await res.json();
//     // console.log(data);
//     const phones = data.data;

//     displayPhones(phones)


// }

// const displayPhones = (phones) => {
//     const phonesNavContainer = document.getElementById('phones-nav-container');
//     console.log(phonesNavContainer);
//     phones?.forEach(phone => {
//         const phoneNav = document.createElement('div');
//         phoneNav.setAttribute('id', phone?.category_id)
//         phoneNav.onclick = function (event) {
//             handleShowDetail(event.currentTarget.id)
//         }
//         phoneNav.innerHTML = `
//         <div>
//             ${phone?.category}
//         </div>
//         `;
//         // 3: append child
//         phonesNavContainer.appendChild(phoneNav);
//     });
// }
// const handleShowDetail = async (id) => {
//     const fetcherURL = `https://openapi.programming-hero.com/api/videos/category/${id}`;
//     const res = await fetch(fetcherURL);
//     const data = await res.json();

//     const phone = data?.data
//     showPhoneDtail(phone);
// }

// const showPhoneDtail = (phones) => {
//     // console.log(phones);
//     const phoneName = document.getElementById('show-ditail-container');
//     phones.forEach(phone => {
//         console.log(phone);
//         const newDiv = document.createElement('div')

//         newDiv.innerHTML = `
//         <p>${phone?.thumbnail}</p>
//         `;
//         phoneName.appendChild(newDiv)
//     });


//     // display the modal
//     // console.log(phones);

//     // const showDitailContainer = document.getElementById('show-ditail-container');
//     // showDitailContainer.innerHTML = `
//     // <div class="mt-5 flex flex-col gap-3">
//     // <h1 class="font-bold text-3xl">${phone?.name}</h1>
//     // <p><span class="font-medium text-xl">Storage : </span>${phone?.mainFeatures?.storage}</p>
//     // <p><span class="font-medium text-xl">Display Size : </span>${phone?.mainFeatures?.displaySize}</p>
//     // <p><span class="font-medium text-xl>ChipSet : </span>${phone?.mainFeatures?.chipSet}</p>
//     // <p><span class="font-medium text-xl">Memory : </span>${phone?.mainFeatures?.memory}</p>
//     // <p><span class="font-medium text-xl">Release Date : </span>${phone?.releaseDate || 'No Release Date'}</p>
//     // <p><span class="font-medium text-xl">Brand : </span>${phone?.brand}</p>
//     // <p><span class="font-medium text-xl">GPS : </span>${phone?.others?.GPS || 'No GPS'}</p>
//     // </div>

//     // `
// }
// loadPhone();
// handleShowDetail();





const loadPhone = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const phones = data.data;

    displayPhones(phones);
}

const displayPhones = (phones) => {
    const phonesNavContainer = document.getElementById('phones-nav-container');
    phones.forEach(phone => {
        const phoneNav = document.createElement('div');
        phoneNav.setAttribute('id', phone.category_id);
        phoneNav.classList.add('phone-category'); // Add a class for styling
        phoneNav.innerHTML = `
            <div class="cursor-pointer">${phone.category}</div>
        `;
        phoneNav.onclick = function (event) {
            handleShowDetail(event.currentTarget.id);
        }
        phonesNavContainer.appendChild(phoneNav);
    });
}

const handleShowDetail = async (id) => {
    const fetcherURL = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    const res = await fetch(fetcherURL);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetail(phone);
}

const showPhoneDetail = (phones) => {
    const phoneDetailContainer = document.getElementById('show-detail-container');
    phoneDetailContainer.innerHTML = ''; // Clear previous content
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDetailContainer.classList = 'grid grid-cols-3 gap-5 mx-10 my-10'
        phoneDiv.classList.add('phone-detail'); // Add a class for styling
        phoneDiv.innerHTML = `
        <div >
        <div class=" relative">
        <img class ='rounded-xl w-full h-96' src="${phone.thumbnail}" alt="${phone.name}">
        
        <p class="absolute bottom-32 right-5 text-white bg-black px-4 py-2 rounded-lg">${new Date(phone.others.posted_date).toUTCString()} </p>
     
     

        <div class='flex mt-3  gap-3'> 
        <img class = 'rounded-full size-10' src=${phone.authors[0].profile_picture} alt="">
       
       

        <div>
        <p class='text-xl'>${phone.title}</p>
        <p>${phone.authors[0].profile_name}</p>
        <p>${phone.others.views} views</p>  
    </div>
    </div>
     
        </div>
    </div>
     
    
        `;
        phoneDetailContainer.appendChild(phoneDiv);
    });
}

// Call loadPhone to start the process
loadPhone();


