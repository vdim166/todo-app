Клонируйте репозиторий  
git clone https://github.com/vdim166/todo-app

Перейдите в директорию проекта  
cd todo-app

Установите зависимости  
npm i

Создайте базу в postgres с названием todo_app

Создайте файл в корне config/default.json и добавьте параметры подключения к базе данных
Например  
{  
 "DATABASE_URL": "postgres://postgres:root@localhost:5432/todo_app",  
 "PORT": 3000  
}

Скомпилируйте ts файлы  
npm run build

Запустите проект  
npm run start

Примеры запросов к API
![alt text](images/1.png)
![alt text](images/2.png)
![alt text](images/3.png)
![alt text](images/4.png)
![alt text](images/5.png)
