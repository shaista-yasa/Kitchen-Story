import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.
        includes(tag));


  }
 
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'French Fries',
        cookTime: '20-25',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['fastfood', 'french fries', 'starters'],
      },
      {
        id: 2,
        name: 'Indian Thali',
        cookTime: '20-30',
        price: 10,
        favorite: false,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food2.jpg',
        tags: ['indianfood', 'thali', 'lunch'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['fastfood', 'burger', 'starters'],
      },




    ]
  }
}
