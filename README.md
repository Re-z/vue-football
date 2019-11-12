# vue-football

# Description
This web-app is used to create two different football teams and store data about football players and each completed match

## Features:
- Uses Vuex and VueRouter 
- Uses VueMaterial framework
- На странице manage players > delete player и all players info есть поиск по игроку
- 404 page
- У каждого игрока есть персональная страница, которая работает на одном компоненте и при переходе на эту страницу передается объект-параметр через vue router. Также этот объект-параметр сразу записывается в Local storage и если страница с игроком перегружается - данные тянутся не из запроса, а из Local storage.
- Есть возможность добавить нового игрока в базу. На странице manage players > add нужно заполнить форму (есть валидация). Запрос отправляется в firebase. Для нового игрока устанавливается дефолтная аватарка.


## Todo
- Icons to header menu
- На странице добавления игрока поправить верстку textarea
- Сделать проверку валидации на странице добавления нового игрока
- На странице добавления нового игрока сделать проверку на заполнение всех полей формы и не пускать дальше, если есть незаполненные поля (как на сайте с театром)
- Сделать адаптивку под маки
- Переписать скрипт рандомизации массива выбранных игроков (есть подозрения, что криво шаффлит)
- Сделать авторизацию



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
