// Write your code here
// Write your code here
class Breakfast{
  constructor(food, drink){
    this.food = food,
    this.drink = drink
  }
}

class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad,
    this.soup = soup,
    this.drink = drink
  }
}

class Dinner{
  #desert
  constructor(salad, soup, entree, desert){
    this.salad = salad,
    this.soup = soup,
    this.entree = entree,
    this.#desert = desert
  }
}

const newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon')
