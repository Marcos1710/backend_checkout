import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CheckOut extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_name: string

  @column()
  public value_brl: string

  @column()
  public value_usd: string

  @column()
  public client_name: string

  @column()
  public client_mail: string

  @column()
  public client_address: string

  @column()
  public purchase_date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
