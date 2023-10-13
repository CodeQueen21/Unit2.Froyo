//vanilla,vanilla,vanilla,strawberry,coffee,coffee

let input = window.prompt('What froyo flavors would you like?');
let flavors = input.split(",");
let order = {};

function flavorCount (list) {
        let vanilla = 0;
        let strawberry = 0;
        let coffee = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i] === 'vanilla') {
               vanilla ++;
               order.vanilla = vanilla;
            }
            if (list[i] === 'strawberry') {
                strawberry ++;
                order.strawberry = strawberry;
             }
             if (list[i] === 'coffee') {
                coffee ++;
                order.coffee = coffee;
             }
        }
           return order;
    }

    console.log(flavorCount(flavors));



    






