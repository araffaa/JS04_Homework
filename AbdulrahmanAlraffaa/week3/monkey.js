/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var monkey1 = {

    name: "Karl",
    species: 'Mandrill',
    foodsEaten: [],
    eatSomething(food){
        this.foodsEaten.push(food)
    },
    introduce(){
        if(this.foodsEaten.length>0){
            console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is ${this.foodsEaten}`)
            }
            else {
                console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is nothing`)
            }
    }

}

var monkey2 = {

    name: "Marcill",
    species: 'Gelada',
    foodsEaten: [],
    eatSomething(food){
        this.foodsEaten.push(food)
    },
    introduce(){
        if(this.foodsEaten.length>0){
            console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is ${this.foodsEaten}`)
            }
            else {
                console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is nothing`)
            }
    }

}

var monkey3 = {

    name: "Zack",
    species: 'Silvery lutung',
    foodsEaten: [],
    eatSomething(food){
        this.foodsEaten.push(food)
    },
    introduce(){
        if(this.foodsEaten.length>0){
        console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is ${this.foodsEaten}`)
        }
        else {
            console.log(`Hello my name is ${this.name} and my species is ${this.species} and what i have eaten is nothing`)
        }
    }

}

console.log(monkey1['name'])
console.log(monkey2.species)
monkey1.introduce()
monkey1.eatSomething('Banana')
monkey1.eatSomething('apple')
monkey1.eatSomething('leaf')
monkey1.introduce()