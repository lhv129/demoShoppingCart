let openShopping = document.querySelector('.shopping');
let close = document.querySelector('.closeShopping');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let quantity = document.querySelector('.quantity');
let quantityBag = 0;
//---------------------Open,Close Cart--------------------------
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
close.addEventListener('click',()=>{
    body.classList.remove('active');
})

//----------------------------valueItem-----------------------
let btnAdd = document.querySelectorAll('.button.bag');
btnAdd.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        let btnItem = event.target;
        let product = btnItem.parentElement.parentElement.parentElement;
        let productImg = product.querySelector('.thumbail').src;
        let productName = product.querySelector('.productName').innerText;
        let productPrice = product.querySelector('.text-price').innerText;
        addCart(productImg,productName,productPrice);
        quantityBag++;
        quantity.innerText = quantityBag;
    }});
});

//-------------------------addItem-------------------------------
function addCart(productImg,productName,productPrice){
    let addTr = document.createElement("tr");
    item = '<tr><td class="boxCart-left"><a href="#"><img class="boxCart-img" src="'+productImg+'"></a></td><td class="boxCart-right"><a class="boxCart-name" href="#"><h2 class="boxCart-name">'+productName+'</h2></a><p class="boxCart-size">Đen / S</p><p class="boxCart-quantity">1</p><p><span class="boxCart-price">'+productPrice+'</span><span style="font-size: 12px;">đ</span></p><img class="boxCart-close" onclick="changeQuantity()" src="images/x-symbol.svg"></td></tr>';
    addTr.innerHTML = item;
    let listCartItem = document.querySelector('tbody');
    listCartItem.append(addTr);
    total();
    removeItemCart();
}
//-----------------------totalPrice--------------------------------
function total(){
    let cartItem = document.querySelectorAll("tbody tr");
    let totalPrice = document.querySelector(".total");
    let totalPriceSum = 0;
    for (let i =0;i<cartItem.length;i++){
        let productPrice = cartItem[i].querySelector(".boxCart-price").innerHTML;
        let totalA = productPrice * 1000;
        totalPriceSum = totalPriceSum + totalA;
    }
    totalPriceSumString = totalPriceSum.toLocaleString('de-DE');
    totalPrice.innerHTML = totalPriceSumString+'<span>đ</span>'; 
}

//-----------------------removeItemCart--------------------------------
function removeItemCart(){
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0;i<cartItem.length;i++){
        let removeItem = document.querySelectorAll(".boxCart-close");
        removeItem[i].addEventListener("click",function(event){
            let removeItemTarget = event.target;
            let deleteItem = removeItemTarget.parentElement.parentElement;
            deleteItem.remove();
            total();
        })
    }
}
function changeQuantity(){
    quantityBag--;
    quantity.innerHTML = quantityBag;
}

