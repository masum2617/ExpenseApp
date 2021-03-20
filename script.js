//const expenseAmount = document.querySelector('input.expense1');
const sumButton = document.querySelector('button.sum');
const resultPlace = document.getElementById('result');
const editButton = document.querySelector('button.editButton');
//const label = document.querySelector('label.expenseLabel');
const deleteItem = document.querySelector('button.deleteButton');
const newItemButton = document.querySelector('button.newItem');


const listDiv =  document.querySelector('.list');

const listUl = listDiv.querySelector('ul');
const lis = listUl.children;

const update = document.querySelector('.updateResult');
const btn = update.querySelectorAll('button');
//console.log(btn);

for (let i=0; i< lis.length; i++){
    attachButtons(lis[i]);
}

function attachButtons(li){
    let edit = document.createElement('button');
    edit.className = 'editButton';
    edit.textContent = 'Edit';
    li.appendChild(edit);

    let del = document.createElement('button');
    del.className = 'deleteButton';
    del.textContent = 'X';
    li.appendChild(del);

}

newItemButton.addEventListener('click', ()=>{

    var labelName = prompt("Enter caption: ");

    let ul = document.getElementsByTagName('ul')[0];

    let l = document.createElement('li');
    
    var lbl = document.createElement('label');
    lbl.className = 'expenseLabel';
    lbl.textContent = labelName+': ';
    l.appendChild(lbl); //appending the label first

    var input = document.createElement('input');
    input.setAttribute('type','number');
    input.className ='expense1';
    l.appendChild(input);

    attachButtons(l);
    ul.appendChild(l);

});

listUl.addEventListener('click', (event)=>{
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == 'editButton'){
            var parentForButton  = event.target.parentNode;
            //console.log(currentBtn);
            var currentLabel = parentForButton.firstElementChild;
            var newlblName = prompt("Enter a new caption: ");
            currentLabel.innerHTML = newlblName+':';
        }
        
        if(event.target.className == 'deleteButton'){
            let parentForDelBtn= event.target.parentNode;//parent li
            let parentForList = parentForDelBtn.parentNode;
            parentForList.removeChild(parentForDelBtn);
        }

    }
    
    //console.log(event.target);

});

sumButton.addEventListener('click',()=>{
  let ul = document.getElementsByTagName('ul')[0];
  let childrenUl = ul.children;
  //console.log(ul);
  var sum=parseInt(0);
  for(let i=0; i<childrenUl.length; i++){
      //console.log(childrenUl[i]);
      let expenseAmount = childrenUl[i].querySelector('input.expense1');
      sum +=parseInt(expenseAmount.value);
      //console.log(sum);
      expenseAmount.value= '';
  }
  resultPlace.innerHTML= sum;
 
})


























// const expenseAmount = document.querySelector('input.expense1');
// const sumButton = document.querySelector('button.sum');
// const resultPlace = document.getElementById('result');
// const editButton = document.querySelector('button.editButton');
// const label = document.querySelector('label.expenseLabel');
// const deleteItem = document.querySelector('button.deleteButton');
// const containerDiv = document.getElementById('firstDiv');
// const newItemButton = document.querySelector('button.newItem');

// // const newItemSection = document.getElementById('newItemSection');

// sumButton.addEventListener('click', (event)=> {

//     // var res = resultPlace.innerHTML = parseInt(expenseAmount.value);


//     resultPlace.innerHTML = parseInt(expenseAmount.value);
// });


// // function buttonForEdit(){
// //     editButton.addEventListener('click', (event)=> {
// //         if(event.target.tagName == 'BUTTON'){
// //             var labelName = prompt("Please enter a caption");
// //             label.innerHTML = labelName + ':';
// //         }
    
// //     });
// //     // var labelName = prompt("Please enter a caption");
// //     // label.innerHTML = labelName + ':';
// // }
// editButton.addEventListener('click', (event)=> {
//     if(event.target.tagName == 'BUTTON'){
//         var labelName = prompt("Please enter a caption");
//         label.innerHTML = labelName + ':';
//     }

// });
// // var labelName = prompt("Please enter a caption");
// // label.innerHTML = labelName + ':';



// // deleteItem.addEventListener('click', ()=> {
// //     var c = document.getElementsByClassName('top');
// //     var b = document.getElementById("firstDiv");
    
// // });

// newItemButton.addEventListener('click', (event)=>{

//     var labelName = prompt("Please enter a NEW caption");
//     if(event.target.tagName == 'BUTTON'){
//         var input = document.createElement('input');
//         var btnEdit = document.createElement('button');
//         var btnDel = document.createElement('button');
        
//         input.setAttribute('type','number');
//         var label = document.createElement("label");
//         label.textContent = labelName+': ';

//         btnEdit.innerHTML = 'Edit';
//         btnDel.innerHTML = 'X';
//         btnEdit.classList.add("editButton");
//         btnEdit.onclick = buttonForEdit;
        
//         var newDiv = document.createElement("DIV");
//         newDiv.appendChild(label);
//         newDiv.appendChild(input);
//         newDiv.appendChild(btnEdit);

//         newDiv.appendChild(btnDel);
        
//         containerDiv.appendChild(newDiv);

//     }

// });