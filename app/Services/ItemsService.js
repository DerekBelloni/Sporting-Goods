import { ProxyState } from "../AppState.js";

class ItemsService {
  addToCart(id) {
    let foundItem = ProxyState.items.find(i => i.id == id)
    // console.log('itemsservice', foundItem)
    foundItem.quantity -= 1
    ProxyState.items = ProxyState.items
    ProxyState.cart.push(foundItem)
    console.log(ProxyState.cart)
    let foundCartItem = ProxyState.cart.find(i => i.id == id)
    foundCartItem.cartQuantity += 1
    console.log("foundCartItem", foundCartItem)

    ProxyState.cart = ProxyState.cart
  }

}

export const itemsService = new ItemsService();