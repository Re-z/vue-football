# vue-football
# Demo http://football.codefantasy.xyz/
# Description
This is an application for footbal manager(administrator), which allows to store information about football players, add, remove players from Database and divide players into teams.


## Features:
- Uses Vuex и VueRouter 
- Uses VueMaterial framework
- Uses Firebase as data storage
- At the pages manage players > delete player & all players info there is an search
- 404 page
- Every player has his own personal page. It`s implemented with via one component
- There is possibiliy to add new player to Database (Firebase). To do that, you can go to manage players page > add and fill the form (and pass validation). For every new player is used default avatar
- Has responsive layout 1024px+
- At Manage Players page there is a verification of form. If user leaves page and there are some filled fields in form --> alert popup is shown
- There is an Firebase authentification (at /login page). Login - admin@gmail.com, password - 123456. Also
there is an route guards mechanism, and user cannot go to inner pages if he didnt pass the login step.


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
