document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('form')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target['new-task-description'].value);
    buildTask(e.target.querySelector('#new-task-description').value);
    form.reset();
    //let submitValue = e.target.querySelector('#new-task-description').value;
    //document.querySelector('#tasks').append(submitValue);

    
  })
  
});

function buildTask (task) {
  let list = document.querySelector('#tasks')
  let btn = document.createElement('button');
  //delete event listener
  btn.addEventListener('click', handleDelete);
  let listElement = document.createElement('li');
  
  let priority = document.createElement('select');
  let highPrior = document.createElement('option');
  highPrior.value = "high";
  highPrior.textContent = 'High';
  highPrior.style.color = 'red';
  let lowPrior = document.createElement('option');
  lowPrior.value = "low";
  lowPrior.textContent = 'Low';
  lowPrior.style.color = 'green';
  
  btn.textContent = 'x';
  list.appendChild(listElement);
  listElement.append(`${task} `, priority, btn);
  priority.append(highPrior, lowPrior);
  //console.log(task);
  //updateBColor();
}

function handleDelete(e){
  e.target.parentNode.remove();

}
/*
function updateBColor(){
  let liArray = document.querySelectorAll('li');
  console.log(liArray);
  Array.from(liArray);
  console.log(liArray);
  for(element in liArray){
    console.log(element.value);
    if (element.value === document.getElementsByTagName[0].value)
    {  return "this is bogus"; } 
  };
}
*/


