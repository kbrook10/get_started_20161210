'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

//Create immutable variable to access the Route module
const Route = use('Route')

//Create connection to match the URLs and the views to render...Home, About, Contact
Route.on('/').render('home')
Route.on('/about').render('about')
Route.on('/contact').render('contact')
