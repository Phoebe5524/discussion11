function challenge1(element){
    console.log('the check attribute: ' + element.checked);
    if (element.checked === true){
        document.querySelector('emailDiv').style.display = 'block';
    }
    else{
        document.querySelector('emailDiv').style.display = 'none';
    }
}
function challenge2(){
    console.log('from challenge 2 checkbox');
    document.querySelector('sameAddress').addEventListener('click', challenge2);
}
