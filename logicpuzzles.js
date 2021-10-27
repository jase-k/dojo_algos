// Burning Rope Challenge - 
// You have two ropes that each take an hour to burn,
// but burn at inconsistent rates. How can you measure 45 minutes?
//


// You have 2 eggs...
// You have a 100 story building and you have to figure out where they will break when dropped from certain floors. Goal is to find out the highest floor they will not break from in minimum attempts. 

// 1 floor: 1 drop 
// 2 floors : 2 drop
// 3 floors : 2 drops 
// 4 floors : 3 drops 
// 5 floors : 3 drops 
// 6 floors : 3 drops
// 7 floors : 4 drops
// 8 floors : 4 drops 
// 9 floors : 4 drops
// 10 floors : 4 drops

function drops(floors){
    var drops = 1;
    var counter = drops
    for(var i = 0 ;  i < floors; i++){
        if(!counter){
            drops++
            counter = drops
        }
        counter--
    }
    return drops
}
console.log(drops(1000))


// Grandma's Cake

// You are on your way to visit your Grandma, who lives at the end of the valley. It’s her anniversary,
//  and you want to give her the cakes you’ve made. Between your house and her house, you have to cross
//   5 bridges, and as it goes in the land of make believe, there is a troll under every bridge! Each troll, 
//   quite rightly, insists that you pay a troll toll. Before you can cross their bridge, you have to give
//    them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake.

// How many cakes do you have to leave home with to make sure that you arrive at Grandma’s with exactly 2 cakes?

//2 everytime you cross a bridge they take one (half) and give one back. 




// Farmer and His Sons

// A farmer wants to divide his 17 horses among his three sons. According to farmer the 
//oldest son should get half of the horses,
//the middle son should get one third of the horses and 
//the youngest son should get one ninth of the horses.

// When their father died they were not able to divide the horses as the result was coming 
// in fractions. As the sons were fighting on how to divide the horses a traveling mathematician came and heard 
// their problem. He proposed a solution with which all the sons got their share in the property without harming any animal.
// What was the advice given and how the group of horses were divided?

// 9 horses for the first 1, 6 horses for the second, and 2 horses for the third? As they would all get more than their share because 1/2 +1/3 +1/9 = 17/18

// Why are manholes covers round?
// because the holes are round. 


// Add two numbers without using the addition operator.
// x + y = z == x*y
function addNum(x, y){
    return x - (-y)
}
console.log(addNum(1,2))
console.log(addNum(5,6))


// A farmer needs to cross the river with his fox, his chicken and a bag of corn. However, the boat can only fit the farmer and one other thing at a time. The problem is, the fox and the chicken are both hungry, so if he leaves the fox and chicken together, the fox might eat the chicken. If he leaves the chicken and corn together, the chicken might eat the corn.

// So how can the farmer get everyone across the river safely?
//First he takes the chicken across
//He comes back to get the corn
//He takes the corn across and picks up the chicken. 
//He brings the chicken back to the original side of the river and picks up the fox
//He leaves the chicken and brings the fox acrosss the river
//He comes back for the chicken and they are all across the river. 


// Each and every word in this list has the same unusual uniqueness in common. Here are the words:

// Assess
// Banana
// Dresser
// Grammar
// Potato
// Revive
// Uneven
// Voodoo

//They all have two sets of two letters



// My neighbor Frank says to me one day, he says I have five children. I say I know that. He says half of them are boys. I said I'll get right back to you. Can you explain that?





// A teacher named Ms. Jones asks her third-grade class if it's anyone's birthday that day and, to her surprise, even though there are 30-something kids in the class, no one raises their hand.
// Ms. Jones then asks, "Well, is there anyone here who has a family member whose birthday it is today?"

// And little Katie raises her hand and says, "As a matter of fact, today is my father's birthday, and it's also my grandfather's birthday."
// The teacher says, "Oh really -- how interesting!"
// Little Katie goes on to say, "And they're the same age."

// The teacher says, "Oh, no, no, Katie, that can't be." But Katie insists that they’re the same age.
// So the question is: Can it be and, if so, how? Now, if you start thinking about February 28th and all that, you're barking up the wrong tree.

//the grandfather is the maternal grandfather and there is a huge age gap between mother and father



// Here's a list of words. What do they have in common? Here's the list: 
// 4"Deft," as in he made a deft move. 
// 5"First,' he came in first. 
// 8"Calmness,' he was overcome by calmness. 
// 6"Canopy,' a canopy covered the boat so he wouldn't get wet. 
// 8"Laughing,' it was no laughing matter. 
// 6"Stupid,' needs no further explanation. 
// 9"Crab cake," as in, "My brother made me crab cakes for dinner, and I ate a bottle of antacid when I got home." 
// 6"hijack,' I was hoping that our producer's flight would be hijacked to Bora Bora.

//There are five houses.
// The Englishman lives in the red house.
// The Ukrainian drinks tea.
// The Spaniard owns the dog.
// The Norwegian lives in the first house.
// The Japanese smokes Parliaments.
// The Norwegian lives next to the blue house.
// Milk is drunk in the middle house.
// The Old Gold smoker owns snails.
// The Lucky Strike smoker drinks orange juice.
// Coffee is drunk in the green house.
// Kools are smoked in the yellow house.
// Kools are smoked in a house next to the house where the horse is kept.

// The green house is immediately to the right of the ivory house (to your right as you stand facing the row of five houses).
//
// The man who smokes Chesterfields lives in the house next to the man with the fox.

// To solve the puzzle, tell me

// Houses: Y B * * *   // R * * * *  *  G I
// Nation: N U * * *   // E S J *  *  * * 
//   Pets: * H * * *   // * D * S  *  * *
//  drink: W T M OC OC //  * * * *  OJ  C *
//   cigs: K C * L* L* // * * P OG LS * *  


// Houses: Y B R I G // 
// Nation: N U E S J // 
//   Pets: F H S D Z // 
//  drink: W T M O C // 
//   cigs: K C O L P // 







// In a room there are a mixture of people and dogs. There are 72 heads, and 200 legs. How many dogs are in the room? (No tricks, no chromosomal abnormalities, no disabilities …)
// 28 dogs and 44 humans