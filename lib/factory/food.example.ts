class Food {
    food_name: string
    price: number

    constructor(food_name: string, price: number) {
        this.food_name = food_name
        this.price = price
    }
}



class FoodFactory {
    static createFood(foodType: string, ...args: any[]): Food {
        switch (foodType.toLowerCase()) {
            case "main food":
                return new MainFood(args[0], args[1], args[2])
            case "sweet":
                return new SweetFood(args[0], args[1], args[2])
            default:
                throw new Error("please select a food" + foodType)
        }
    }
}


class MainFood extends Food {
    constructor(food_name: string, price: number, ingredients: string[]) {
        super(food_name, price)
        console.log(`main food "${food_name}" preparation...`);
        console.log(`ingredients: ${ingredients.join(", ")}`);
    }
}


class SweetFood extends Food {
    constructor(food_name: string, price: number, SweetType: string) {
        super(food_name, price)
        console.log(`Preparing ${food_name}`);
        console.log(`Sweet type: ${SweetType}`);

    }
}


const mainFood = FoodFactory.createFood("main food", "Salmon", 120, ["lemon", "oil"])
console.log(mainFood);

const sweetFood = FoodFactory.createFood("sweet", "brownie", 30, ["sugar", "chocolate", "eggs"])
console.log(sweetFood); 

