import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"


function _drawItems() {
  let template = ''
  let item = ProxyState.items.forEach(i => template += i.Template)
  document.getElementById('items').innerHTML = template
}

function _drawCart() {
  let template = ''
  let cartItem = ProxyState.cart.forEach(i => template += i.CartTemplate)
  document.getElementById('cart').innerHTML = template
}

export class ItemsController {
  constructor() {
    ProxyState.on('items', _drawItems)
    ProxyState.on('cart', _drawCart)
    _drawItems()

  }

  addToCart(id) {
    console.log('item controller', id)
    itemsService.addToCart(id)
  }


}