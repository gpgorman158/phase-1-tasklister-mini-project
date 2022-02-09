document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('form')
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    //console.log(e.target['new-task-description'].value);
    handleTask(e.target.querySelector('#new-task-description').value);
    form.reset();
    //let submitValue = e.target.querySelector('#new-task-description').value;
    //document.querySelector('#tasks').append(submitValue);

    
  })
  
});

function handleTask (task) {
  let list = document.querySelector('#tasks')
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  let listElement = document.createElement('li');
  btn.textContent = 'x'
  list.appendChild(listElement);
  listElement.append(`${task} `, btn);
  //console.log(task);
}

function handleDelete(e){
  e.target.parentNode.remove();

}




