function setPlace(event){
    event.preventDefault();
    const addPlace = document.querySelector('#add-place');
    const addUsername = document.querySelector('#add-username');
    const addPhone = document.querySelector('#add-phone')
    const addCountry = document.querySelector('#add-country');
    const addCheckIn = document.querySelector('#add-checkIn');
    const addCheckOut = document.querySelector('#add-checkOut');
    const addMumber = document.querySelector('#add-mumber');
    

    // Cannot empty
    if (addPlace.value === '') return confirm('Place cannot empty');
    if (addUsername.value === '') return confirm('Username cannot empty');
    if (addPhone.value === '') return confirm('Phone cannot empty');
    if (addCountry.value === '') return confirm('Country cannot empty');
    if (addCheckIn.value === '') return confirm('Check-in cannot empty');
    if (addCheckOut.value === '') return confirm('Check-out cannot empty');
    if (addMumber.value === '') return confirm('Mumber cannot empty');
    

    // create div class card to store Place
    const divCards = document.createElement('div');
    divCards.classList.add('card');
    
    // create span Place
    const spanPlace = document.createElement('span');
    spanPlace.classList.add('card-place');
    spanPlace.textContent = addPlace.value;
    
     // create span Username
     const spanUsername = document.createElement('span');
     spanUsername.classList.add('card-username');
     spanUsername.textContent = addUsername.value;

     // create span Phone
     const spanPhone = document.createElement('span');
     spanPhone.classList.add('card-phone');
     spanPhone.textContent = addPhone.value;

    //  Create span Country
    const spanCountry = document.createElement('span');
    spanCountry.classList.add('card-country');
    spanCountry.textContent = addCountry.value;

    // Create span Check-in
    const spanCheckIn = document.createElement('span');
    spanCheckIn.classList.add('card-checkIn');
    spanCheckIn.textContent = addCheckIn.value;

    // create span Check-out
    const spanCheckOut = document.createElement('span');
    spanCheckOut.classList.add('card-checkOut')
    spanCheckOut.textContent = addCheckOut.value;

    // create span Member
    const spanMumber = document.createElement('span');
    spanMumber.classList.add('card-mumber');
    spanMumber.textContent = addMumber.value;
    
    
    // create span Delete
    const spanDelete = document.createElement('span');
    spanDelete.classList.add('delete');
    spanDelete.textContent = 'x';
   
    
    
    // append span Country and span Delete to div class card
    divCards.appendChild(spanPlace);
    divCards.appendChild(spanUsername);
    divCards.appendChild(spanPhone);
    divCards.appendChild(spanCountry);
    divCards.appendChild(spanCheckIn);
    divCards.appendChild(spanCheckOut);
    divCards.appendChild(spanMumber);
    divCards.appendChild(spanDelete);
    
    
    // append divCard to cardPlace
    cardPlace.appendChild(divCards);
    
   
    // clear add
    addPlace.value = '';  
    addUsername.value = '';  
    addPhone.value = '';  
    addCountry.value = '';  
    addCheckIn.value = '';  
    addCheckOut.value = '';  
    addMumber.value = '';  
     
}

// =================== delete element ==========
function deletePlace(event){
    if (event.target.className === 'delete'){
        event.target.parentElement.remove();
        console.log(event.target.className);
        
    }
}

// ==========call to add element in form-container========
const btnAdd = document.querySelector('#add');
const cardPlace = document.querySelector('.card-container');
const search = document.querySelector('#searchId');

// set eventListenter for remove 
btnAdd.addEventListener('click', setPlace);
cardPlace.addEventListener('click', deletePlace);



// ============== search element ============
search.addEventListener('keyup', function(event){
    let text = search.value.toLowerCase();
    let searchUsernames = document.querySelectorAll('.card');
    for (let searchUsername of searchUsernames){
        let title = searchUsername.querySelector('.card-username').textContent.toLowerCase();
        if(title.indexOf(text) === -1){
            searchUsername.style.display = "none";
        }else{
            searchUsername.style.display = "flex";
        }
    }
});
// ======================= html display none ================================

document.querySelector('#search').style.display = "none";
document.querySelector('.form-container').style.display = "none";
document.querySelector('.card-container').style.display = "none";


//  ====================== show element =============================

let clickShowFormContainer = () => {
    let showFormS = document.querySelector('.form-container');
    showFormS.style.display = "block";
    document.querySelector('.logOut').style.display = "block";
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h3').style.display = 'none';
    document.querySelector('#search').style.display = 'none';
    document.querySelector('.card-container').style.display = "none";
}

let clickShowCardContainer = () =>{
    let showCardS = document.querySelector('.card-container');
    showCardS.style.display = "block";
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h3').style.display = 'none';
    document.querySelector('.form-container').style.display = "none";
    
}

let clickShowSearch = () => {
    let showS = document.querySelector('#search');
    showS.style.display = "block";
    document.querySelector('.logOut').style.display = 'block';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h3').style.display = 'none';
    
}

// ======================call for show=================================
let showSearch = document.querySelector('#btn-ListInfo');
let showFormContainer = document.querySelector('#btn-property');
let showCardContainer = document.querySelector('#btn-ListInfo');


// showCardContainer.addEventListener('click', showCard);
showSearch.addEventListener('click', clickShowSearch);
showCardContainer.addEventListener('click', clickShowCardContainer);
showFormContainer.addEventListener('click', clickShowFormContainer);


// ======== Create element h1, h2 and h3=================

const h1= document.createElement("h1");
h1.textContent = "Welcome To Siem Reap Ptas Knhom";
document.querySelector("body").appendChild(h1);
h1.style.color = "white";


const h2= document.createElement("h2");
h2.textContent = "The Days Of Trips In Seim Reap";
document.querySelector("body").appendChild(h2);
h2.style.color = "white";

const h3 = document.createElement("h3");
h3.textContent = "Seim Reap travel guide"
document.querySelector("body").appendChild(h3);
h3.style.color = "white";

const buttonLogOut = document.createElement("button");
buttonLogOut.classList.add("logOut");
buttonLogOut.textContent = "Logout";
document.querySelector("body").appendChild(buttonLogOut);
buttonLogOut.style.color = "black";


// ============TODO Listen to mouse over and mouse out in btn-sign and btn-property========
let mouseOverBtnSign = () => {
    document.querySelector('#btn-ListInfo').style.background = "orange";   
}
let mouseOverBtnProperty = () => {
    document.querySelector('#btn-property').style.background = "orange";
}
let mouseOutBtnSign = () => {
    document.querySelector('#btn-ListInfo').style.background = "white";
}
let mouseOutBtnProperty = () => {
    document.querySelector('#btn-property').style.background = "white";
}

let btnSign = document.querySelector('#btn-ListInfo');
let btnProperty = document.querySelector('#btn-property');

document.querySelector('#btn-ListInfo').onmouseover = mouseOverBtnSign;
document.querySelector('#btn-property').onmouseover = mouseOverBtnProperty;
document.querySelector('#btn-ListInfo').onmouseout = mouseOutBtnSign;
document.querySelector('#btn-property').onmouseout = mouseOutBtnProperty;


// ================Change color even Button Property===========
let setColorBtnProperty = () =>{
    document.body.style.background = "#f39c12";
}
let colorBtnProperty = document.querySelector('#btn-property');
colorBtnProperty.addEventListener('click', setColorBtnProperty);


// ======= Click ADD show button Property=======
let setBtnAdd = () =>{
    let showBtnAdd = document.querySelector('.card-container');
    showBtnProperty.style.display = 'block';
}
let linkAdd = document.querySelector('#add');
linkAdd.addEventListener('click', setBtnAdd);


// Change color even Butto List Info=======

let setColorBtnListInfo = () =>{
    document.body.style.background = "black";
}
colorBtnListInfo = document.querySelector('#btn-ListInfo');
colorBtnListInfo.addEventListener('click', setColorBtnListInfo);

// ======= Mouse over and Mouse Out on LogOut======
let mouseOverBtnLogOut = () =>{
    document.querySelector('.logOut').style.background = "orange";
}
let mouseOutBtnLogOut = () =>{
    document.querySelector('.logOut').style.background = "white";
}
let mouseOverOutLogOut = document.querySelector('.logOut');

document.querySelector('.logOut').onmouseover = mouseOverBtnLogOut;
document.querySelector('.logOut').onmouseout = mouseOutBtnLogOut;



// ====== Mouse over and Mouse Out on h1=====
let mouseOverOnh1 = () =>{
    document.querySelector('h1').style.color = "orange";
}
let mouseOverOnh2 = () =>{
    document.querySelector('h2').style.color = "orange";
}
let mouseOverOnh3 = () =>{
    document.querySelector('h3').style.color = "orange";
}
let mouseOutOnh1 = () =>{
    document.querySelector('h1').style.color = "white";
}
let mouseOutOnh2 = () =>{
    document.querySelector('h2').style.color = "white";
}
let mouseOutOnh3 = () =>{
    document.querySelector('h3').style.color = "white";
}
let mouseOverOuth1 = document.querySelector('h1');
let mouseOverOuth2 = document.querySelector('h2');
let moseOverOuth3 = document.querySelector('h3');

document.querySelector('h1').onmousemove = mouseOverOnh1;
document.querySelector('h2').onmousemove = mouseOverOnh2;
document.querySelector('h3').onmousemove = mouseOverOnh3;

document.querySelector('h1').onmouseout = mouseOutOnh1;
document.querySelector('h2').onmouseout = mouseOutOnh2;
document.querySelector('h3').onmouseout = mouseOutOnh3;

// ========  Display none on logout ==========
document.querySelector('.logOut').style.display = "none";


// ======== Click button LogOut=========
let clickBtnLogOut = () =>{
    let showBody = document.querySelector('body');
    showBody.style.display = "block";
}
let btnLogOut = document.querySelector('.logOut');
btnLogOut.addEventListener('click', clickBtnLogOut);

// =============== Sort item ================


// =================== DATES& VALIDATION =====

// btnAddDate.addEventListener('click', event => {
//     event.preventDefault();
//     const checkInDate = document.querySelector('.card-checkIn');
//     const checkOutDate = document.querySelector('.card-checkOut');
    
//     const startDate = new.Date(checkInDate.value);
//     const endDate = new.Date(checkOutDate.value);

//     if (startDate.getTime() <= endDate.getTime()){
//         console.log("That's enough");
//     }else{
//         confirm("Sorry start date must be smaller than last date");
//     }
// });
const btnAddDate = document.querySelector('#add');



