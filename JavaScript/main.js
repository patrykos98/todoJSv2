const input=document.getElementById('inputBox');
const buttonAdd=document.querySelector('.btn');
const buttonClear=document.querySelector('.btn--clear')
const list=document.querySelector('.ulList ul');
let liItems=[];


buttonAdd.addEventListener('click',function(){
    const value=input.value;
    if(value=='') alert('Nic nie napisaleś!')
    else{
    const liItem=document.createElement('li');
    liItem.innerText=value; 
    list.appendChild(liItem);
    }
    
    list.addEventListener('click',function(e){
        if(e.target.className==='') {e.target.classList.add('checked')}
        else if(e.target.className==='checked') {e.target.classList.remove('checked')};
        
    })

    //liItems=document.querySelectorAll('li');
    
    // list.forEach((listItem)=>{
    //     listItem.addEventListener('click',function(){
    //         console.log(listItem);
    //         listItem.classList.toggle('checked');
    //     })
    // })
    
    // list.addEventListener('click',function(e){
    //     console.log(e.target);
    //     if(e.target.tagName==="li") e.target.classList.toggle('checked');
    // })
    
}
)



buttonClear.addEventListener('click',function(){
    input.value='';
    //let targett=e.target;
    //console.log(targett);
})


