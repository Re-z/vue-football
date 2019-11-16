# vue-football
# Demo http://football.codefantasy.xyz/
# Description
This web-app is used to create two different football teams and store data about football players and each completed match

## Features:
- Использует Vuex и VueRouter 
- Использует VueMaterial фреймворк
- На странице manage players > delete player и all players info есть поиск по игроку
- 404 page
- У каждого игрока есть персональная страница, которая работает на одном компоненте и при переходе на эту страницу передается объект-параметр через vue router. Также этот объект-параметр сразу записывается в Local storage и если страница с игроком перегружается - данные тянутся не из запроса, а из Local storage.
- Есть возможность добавить нового игрока в базу. На странице manage players > add нужно заполнить форму (есть валидация). Запрос отправляется в firebase. Для нового игрока устанавливается дефолтная аватарка.
- Адаптирован под MacBook (1024px)
- На странице Manage Players есть проверка на заполнение всех полей формы. Если юзер уходит со страницы, при этом есть заполненные поля формы - показывается попап, предупреждаюший об этом

## Что можно еще сделать
- Переписать скрипт рандомизации массива выбранных игроков (есть подозрения, что криво шаффлит)
- Сделать авторизацию по токену через firebase
- Резетить поля формы после добавления нового игрока
- Сделать фильтрацию в большой таблице (all players info)


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
