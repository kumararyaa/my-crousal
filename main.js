
let element=document.getElementsByClassName('content');
let obj=['images2.jpg','images3.jpg','images4.jpg','images5.jpg','images6.jpg','images7.jpg'];
let check_1=2;
let check_2=2;
const left__craousal = ()=>{
    let rightImagesAddres=element[2].firstChild.attributes[0].nodeValue;
    let rightImages=element[2].firstChild;
    let CenterImages=element[1].firstElementChild;
    
    let leftImagesAddres=element[0].firstChild.attributes[0].nodeValue;
    let leftImages=element[0].firstChild;
    console.log(leftImagesAddres);
    if((check_1)&&(check_2)&&(leftImagesAddres==='./images/images0.jpg'||leftImagesAddres==='./images/firstbike.jpg')){
        obj.push(leftImagesAddres.slice(9));
        check_1--;

    }
    let shiftImages=obj.shift();
    rightImages.src='./images/'+shiftImages;
    obj.push(shiftImages);
    leftImages.src=CenterImages.attributes[0].nodeValue;
    CenterImages.src=rightImagesAddres;
    document.getElementById('left-arrow').children[0].style.color='white';
    document.getElementById('right-arrow').children[0].style.color='wheat';
    
}
const right__creaousal = ()=>{
    console.log("hey");
    let leftImagesAddres=element[0].firstChild.attributes[0].nodeValue;
    let leftImages=element[0].firstChild;
    let CenterImages=element[1].firstElementChild;
    let rightImagesAddres=element[2].firstChild.attributes[0].nodeValue;
    let rightImages=element[2].firstChild;
    console.log(rightImagesAddres);
    if((check_1)&&(check_2)&&(rightImagesAddres==='./images/images1.jpg'||rightImagesAddres==='./images/firstbike.jpg')){
        obj.push(rightImagesAddres.slice(9));
        check_2--;
    }
    let shiftImages=obj.shift();
    leftImages.src='./images/'+shiftImages;
    obj.push(shiftImages);
    rightImages.src=CenterImages.attributes[0].nodeValue;
    CenterImages.src=leftImagesAddres;
    // console.log(element[2]);
    document.getElementById('right-arrow').children[0].style.color='white';
    document.getElementById('left-arrow').children[0].style.color='wheat';
}
let arrowLeftElement=document.getElementById('left-arrow');
arrowLeftElement.addEventListener('click',()=>{
    arrowLeftElement.children[0].style.color='white';
    document.getElementById('right-arrow').children[0].style.color='wheat';
    left__craousal();
});
let arrowRightElement=document.getElementById('right-arrow');
arrowRightElement.addEventListener('click',()=>{
    arrowRightElement.children[0].style.color='white';
    document.getElementById('left-arrow').children[0].style.color='wheat';
    right__creaousal();
})

setInterval(right__creaousal,3000);
if(element[0].addEventListener('click',()=>{
    left__craousal();
}));
if(element[2].addEventListener('click',()=>{
    right__creaousal();
}));


