const input=document.getElementById('inputBox');
const buttonAdd=document.querySelector('.btn');
const buttonClear=document.querySelector('.btn--clear')
const list=document.querySelector('.ulList ul');


buttonAdd.addEventListener('click',function(){
    const value=input.value;
    if(value=='') alert('Nic nie napisaleś!')
    else{
    const liItem=document.createElement('li');
    liItem.innerText=value; 
    list.appendChild(liItem);
    }
    let liItems=[...document.querySelectorAll('.ulList ul li')];
    liItems.forEach(function(item){
        item.addEventListener('click',function(){
            item.classList.toggle('checked');
            item.removeEventListener('click',function(){
                item.classList.toggle('checked');
            })
        })
    })
    })

buttonClear.addEventListener('click',function(){
    input.value='';
})



// divs.forEach(function(item){
//     item.addEventListener('click',function(){
//        item.remove();
//     })
// });
