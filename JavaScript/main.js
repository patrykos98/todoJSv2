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
    
    for(i=0;i<liItems.length;i++)
    {
        liItems[i].setAttribute('id',i);
    }

    const liClicked= e => {
        console.log(e.target.id);
    }

    for(let li of liItems){
        li.addEventListener('click',liClicked);
    }

    

    })

buttonClear.addEventListener('click',function(){
    input.value='';
    //let targett=e.target;
    //console.log(targett);
})



// divs.forEach(function(item){
//     item.addEventListener('click',function(){
//        item.remove();
//     })
// });
