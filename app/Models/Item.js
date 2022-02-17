import { generateId } from "../Utils/generateId.js"

export class Item {
  constructor({ name, quantity, price }) {
    this.id = generateId()
    this.name = name
    this.quantity = quantity
    this.price = price
    this.cartQuantity = 0
  }
  get Template() {
    return `
    <div class="col-4">
    <div class="rounded shadow bg-white" onclick="app.itemsController.addToCart('${this.id}')">
      <p>'${this.name}'</p>
      <ul>
        <li>Quantity: '${this.quantity}'</li>
        <li>Price: '${this.price}'</li>
      </ul>
    </div>
  </div>
    `
  }

  get CartTemplate() {
    return `
    <ul>
        <li>Quantity: '${this.name}'</li>
        <li>Quantity: '${this.cartQuantity}'</li>
        <li>Price: '${this.price}'</li>
      </ul>
    
    `
  }





}