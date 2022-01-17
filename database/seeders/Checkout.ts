import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CheckOut from 'App/Models/CheckOut'

export default class CheckoutSeeder extends BaseSeeder {
  public async run () {
    await CheckOut.createMany([
      {
        product_name: "monitor",
        value_brl: "1.399,90",
        value_usd: "253,49",
        client_name: "Marcos",
        client_mail: "marcos@teste.com.br",
        client_address: "Avenida Abel Cabral, Nova Parnamirim, Natal/RN",
        purchase_date: undefined
      },
      {
        product_name: "teclado",
        value_brl: "89,90",
        value_usd: "16,28",
        client_name: "Marcos",
        client_mail: "marcos@teste.com.br",
        client_address: "Avenida Abel Cabral, Nova Parnamirim, Natal/RN",
        purchase_date: undefined
      },
      {
        product_name: "smartphone",
        value_brl: "889,90",
        value_usd: "161,14",
        client_name: "Marcos",
        client_mail: "marcos@teste.com.br",
        client_address: "Avenida Abel Cabral, Nova Parnamirim, Natal/RN",
        purchase_date: undefined
      }
    ])
  }
}
