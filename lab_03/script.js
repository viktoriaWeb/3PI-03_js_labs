let url = 'https://6032c2a0a223790017acf69f.mockapi.io/api/v1/todos';

function renderer (response){
	let ulist = document.getElementById('app');
	JSON.parse(response).forEach(item => {
		let li = document.createElement('li');
		li.innerHTML = item.task;
		ulist.appendChild(li);	
	});
	
}



function get(url, handler) {

	let xhr = new XMLHttpRequest();
//метод .open ініціює запит
	xhr.open("GET", url);
//DOM event onload ініціює xhr response як тільки веб сторінка загрузиться
	xhr.onload = () => handler(xhr.response);
//метод setRequestHeader об екта XMLHttpRequest задає  значення заголовка HTTP  запиту
	xhr.setRequestHeader("Content-Type", 'application/json');
// метод .send відправляє запит на сервер
	xhr.send();	
}





get(url, renderer)
