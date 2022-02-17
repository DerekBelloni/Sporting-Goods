import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testItem = new Item({ name: "football", quantity: 13, price: 25 })

const testItemTwo = new Item({ name: "golf club", quantity: 7, price: 100 })

const testItemThree = new Item({ name: "baseball", quantity: 9, price: 10 })
class AppState extends EventEmitter {
  items = [testItem, testItemTwo, testItemThree]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
