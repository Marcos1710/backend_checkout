import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import api from 'Config/api'
import CheckOut from 'App/Models/CheckOut'

export default class CheckOutsController {
  public async index(ctx: HttpContextContract) {
    try {
      const { page, offset } = ctx.request.qs()
      const checkouts = await Database.from('check_outs').paginate(page, offset)

      return ctx.response.status(200).json(checkouts)
    } catch (e) {
      return ctx.response.status(500).json(e)
    }
  }

  public async store(ctx: HttpContextContract) {
    try {
      const checkOut: CheckOut = new CheckOut()
      const bodys = ctx.request.body()

      if (bodys.length === 0) return ctx.response.status(400).json({ message: "no found body" })

      bodys.map(async body => {
        const brl: number = parseFloat(body.value_brl.replace(".", "").replace(",", "."))
        let usd: number = 0.0;
        
        try {
          const finance = await api.get("finance")
          usd = brl / finance.data.results.currencies.USD.buy
          
        } catch (e) {
          usd = brl / 5.5283
        } finally {
          usd = parseFloat(usd.toFixed(2))
        }

        const newData: Object = {
          ...body,
          value_usd: usd
        }

        checkOut.fill(newData).save()
        return ctx.response.status(200)
      })

    } catch (e) {
      return ctx.response.status(500).json(e)
    }
  }
}
