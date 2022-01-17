import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource("checkouts", "CheckOutsController").apiOnly()
}).prefix("v1").namespace("App/Controllers/Http/CheckOuts")