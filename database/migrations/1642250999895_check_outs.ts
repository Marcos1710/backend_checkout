import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CheckOuts extends BaseSchema {
  protected tableName = 'check_outs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_name')
      table.string('value_brl')
      table.string('value_usd')
      table.string('client_name')
      table.string('client_mail')
      table.string('client_address')
      table.date('purchase_date')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
