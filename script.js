/* Данный класс описывает все необходимые для работы свойства*/ 
class Task{
  constructor(status,deadline,description,priority,factEnd){
    this.status = status;
    this.deadline = deadline;
    this.description = description;
    this.priority = priority;
    this.factEnd = factEnd;
  }
}
//данная переменная будет хранить значение которе будет указывать на порядковый номер элемента в списке
var count = 0;
//создаем массив наших задач
var Tasks = new Array();
//данная функция будет запускаться при старте страницы а также при добавлении удалении элементов
function start(){
  //сперва отображаем элемент содержащий таблицу сданными
  document.getElementById('main').style.display='block';
  //выбираем элемент таблица
    var tableObj = document.getElementsByClassName('tabclass')[0];
    
    tableObj.style.display='inline-block';
    //далее заполняем заголовок таблицы
    var tableHTML='<br>';
  
    tableHTML+='<tr></tr>';
    tableHTML +='<td>Описание</td><td>Статус</td><td>Приоритет</td><td>Плановая дата окончания</td><td>Фактическая дата окончания</td><td>Действие</td>';
   
    //после чего в цикле проходимся по элементам массива с задачами
    for (var i = 0; i < Tasks.length; i++){
        
        tableHTML+='<tr>'+'</tr>';
        // и помещаем информацию об элементе массива в ячейку таблицы
        //в данном случае первая ячейка по клику вызываетметод который редактирует содержимое 
        //выбранного элемента массива
        //для чего в его параметры передается порядковый номер элемента
        //кроме того в крайней ячейке тоже вызывается метод удаления элемента из списка задач
            tableHTML+="<td onclick='ShowEdit("+i+")'>"+Tasks[i].description+'</td><td>'+Tasks[i].status+'</td><td>'+Tasks[i].priority+'</td><td>'+Tasks[i].deadline+'</td><td>'+Tasks[i].factEnd+'</td>'+"<td onclick='remove("+i+")'>"+"Удалить"+'</td>';
        
        
      }
  //после формированиятаблицы добавляем ее к странице
    tableObj.innerHTML = tableHTML;
    //как только элементы добавлены показываем главное окно и скрываем окно добавления элемента
    document.getElementById("main").appendChild(tableObj);
    document.getElementById('popup').style.display='none';

}
   // даннаяформа отображаетсядлядобавления новых задач
function ShowPopup(){ 
   
  document.getElementById('popup').style.display='block';
  document.getElementById('reallab').style.display='none';
  document.getElementById('realFin').style.display='none';
  document.getElementById('main').style.display='none';
  document.querySelectorAll('input, textarea').forEach(el=>el.value = '');
  var need = document.getElementsByClassName("tabclass")[0];
  document.getElementById("Add").style.display='block';
  //поэтому кнопка вызывающая метод редактирования скрыта
  document.getElementById("Save").style.display='none';
  document.getElementById()
  
}
function Add(){
  //заполняем значения переменных из которых сформируем обьект

  var taskdesc = document.getElementById("description").value;
  var prty = document.getElementById("priority");
  var priority = prty.value;
  var sts = document.getElementById("status");
  var status = sts.value;
  var deadline = document.getElementById("deadline").value;
  var fend = "-";
  //послечего создадим обьект содержащий все свойства задачи
  var tempTask = new Task(status,deadline,taskdesc,priority,fend);
  //и добавим созданный обьект в список
  Tasks.push(tempTask);
  //вызовем метод который пройдетсяпо списку и заполнит таблицу
  start();
}
//при редактировании задачи вызываем метод,который в качестве
//парметра получает порядковый номер выбранного  элемента в массиве
//после чего мы опять скрываем/показываем элементы необходимые для редактирования
// 
function ShowEdit(num){
  count = num;
  document.getElementById('main').style.display='none';
  document.getElementById('popup').style.display='block';
  document.getElementById('reallab').style.display='block';
  document.getElementById('realFin').style.display='block';
  document.getElementById("description").value=Tasks[num].description;
  document.getElementById("priority").value=Tasks[num].priority;
  document.getElementById("status").value = Tasks[num].status;
  document.getElementById("deadline").value = Tasks[num].deadline;
  document.getElementById("realFin").value=Tasks[num].factEnd;
  document.getElementById("Add").style.display='none';
  document.getElementById("Save").style.display='block';
  
  
}
//после редактирования кнопка добавления скрыта, кнопка сохранения доступна
//вызываем метод сохраняющий нужный элемент после редактирования
function Save(){
 var num = count;
 Tasks[num].description = document.getElementById("description").value;
 Tasks[num].priority = document.getElementById("priority").value;
 Tasks[num].deadline = document.getElementById("deadline").value;
 Tasks[num].status = document.getElementById("status").value;
 Tasks[num].factEnd= document.getElementById("realFin").value;
 start();

}
//в данном случае удаляем элемент получае в качестве параметра порядковый номер элемента
function remove(num){
Tasks.splice(num,1);
start();
}