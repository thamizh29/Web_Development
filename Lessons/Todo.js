function AddTodo(){
    const value = document.getElementById('valueField').value;
    const display = document.getElementById('DisplayList')
    const li = document.createElement('li');
    li.textContent = value;
    display.appendChild(li);

}