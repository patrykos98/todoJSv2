const input=document.getElementById('inputBox');
const buttonAdd=document.querySelector('.btn');
const buttonClear=document.querySelector('.btn--clear')
const list=document.querySelector('.ulList ul');
let liItems=[];


buttonAdd.addEventListener('click',function(){
    if(confirm("Czy chcesz dodać to zadanie?")){
        
    const value=input.value;
    if(value=='') alert('Nic nie napisaleś!')
    else{
    const liItem=document.createElement('li');
    liItem.innerText=value; 
    list.appendChild(liItem);
    const divLi=document.createElement('div');
    liItem.appendChild(divLi);
    divLi.addEventListener('click',function(e){
        if(confirm("Usunąć zadanie?"))e.target.parentElement.remove();
        
    })
    list.addEventListener('click',function(e){
        if(e.target.className==='') {e.target.classList.add('checked')}
        else if(e.target.className==='checked') {e.target.classList.remove('checked')};
        
    })
    }
    }
    else{
        alert('Wycofałeś dodanie zadania do listy!');
    }
    
    
}
)



buttonClear.addEventListener('click',function(){
    input.value='';
    
})


