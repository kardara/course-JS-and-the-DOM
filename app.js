const parent=document.querySelector('.addtask');
const input1=document.getElementById('input')
const button1=document.getElementById('button')
const ulist=document.getElementById('todoList')
button1.addEventListener('click', function add() {
    const userInput = input1.value;
    if (userInput.trim() === '') {
        console.log('Please enter a task!');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = userInput;
    ulist.appendChild(listItem);
    const remove=document.createElement('button');
    remove.textContent='Remove'
    listItem.appendChild(remove)
    remove.addEventListener('click', function remove(){
        listItem.remove()
    })
    input1.value = '';
});
