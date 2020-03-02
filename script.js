var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var tagli = document.getElementsByTagName('li');

//addEventListener -  обработчик события с вывовом возвращающей значени функции

document.getElementById('my').onclick = function(){
alert ('Dasha Gero production;)')
}

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();     // перехват события
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
}

function doLi(){
    for( let li of tagli){
        li.addEventListener('click', function(){
    if( li.style.textDecoration == "line-through"){
        li.style.textDecoration = "none";
    }
    else {
        li.style.textDecoration = "line-through";
    }
    event.stopPropagation();
        })
    }
}

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
       let check = dataInput.value.trim(); //trim - удаляет пробельные символы с начала и конца строки
       if (check == ""){
           allert("Пустая строка не может быть добавлена в список задач");
       }
       else if (check !== ""){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        

        newSpan.innerHTML = "Delete   ";
        var now = " " + "Добавлено: " + day + "-" + month  + "-" + year +" года"; 
           var newItem = this.value; // получение данных из поля input;
        this.value = " "; }
  

   

        ulSpisok.appendChild(newLi).append(newSpan, newItem, now );
    }
     doLi();
    deleteTodo();
})

saveBtn.addEventListener('click', function(){
      localStorage.setItem('TodoApp', ulSpisok.innerHTML );  
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
});

doLi();
deleteTodo();

loadTodo();