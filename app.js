const addTask = document.getElementById('add-task-btn');
const inputFieldOne = document.getElementById('input-field-one');
const inputFieldTwo = document.getElementById('input-field-two');
const inputFieldThree = document.getElementById('input-field-three');
const collections = document.querySelector('.collections');
const clearTask = document.getElementById('clear-tasks');
const container = document.getElementById('container');


setTimeout(function(){container.style.boxShadow = '5px -5px 15px 10px rgb(32, 12, 12)'}, 1000);

addTask.addEventListener('click', function(){
  // const the value of each input
  const valueOne =inputFieldOne.value;
  const valueTwo = inputFieldTwo.value;
  const valueThree = inputFieldThree.value;
  // show an alert whenever the input value = nothing
  if(valueOne === "" || valueTwo === '' || valueThree === ''){
    alert('add a task')
  // reload the page after poping up the alert
    location.reload();
  }
  else{
    const row = document.createElement ('tr');
    // add td's
    row.innerHTML = `
    <td>*</td>
    <td> ${valueOne} </td>
    <td> ${valueTwo} </td>
    <td> ${valueThree} </td>
    <td><a href="#" classe = 'delete'>X</a> </td>
      `;  
    collections.appendChild(row);
    // task button style after adding the task to the table
    addTask.textContent = 'task Added successfully';
    addTask.style.color = "black";
    // set timeout to the styling to go away after showing in a short amount of time
    //still in proccess



    // remove the input values from the input after adding them to the table
    inputFieldOne.value  = '';
    inputFieldTwo.value = '';
    inputFieldThree.value = ''; 
  }  
  // const collections = document.querySelector('.collections');
  // collections.addEventListener('click', function(e){
  // if(e.target.classList.contains('delete')){
  //   alert()
  // }
  // })

// clear tasks from the table
clearTask.addEventListener('click', function(){
  //set the content to nothing
  collections.innerHTML = '';
  //change the text and the background color whenever the tasks are being cleared 
  clearTask.textContent = 'Tasks are cleared';
  clearTask.style.textTransform = 'lowercase';
  clearTask.style.backgroundColor = 'red';
})
})

// clear one task from the table by clicking on the X