// Problem
// Two robots land with their parachutes on an infinite one-dimensional number line. They both land on their parachutes. They are allowed only to make use of the following functions.


// I. moveLeft() // robot moves to left by 1 unit in 1 unit time

// II. moveRight() // robot moves to right by 1 unit in 1 unit time

// III. noOperation() // robot does not move and takes 1 unit time

// IV. onTopOfParachute() // returns true if the robot is standing on top of either of the parachute, else false

// V. didWeMeet() // returns true if the robot meets to the other robot, else false

// Write a function in order to make the robots meet each other. Robots will be executing the same copy of this function.
/*
                    &  &
                    #  #
#############################################################################################################
*/
class Robot{
    position; 
    parachute;
    static robots = []


    constructor(number){
        this.position = number
        this.parachute = number
        Robot.robots.push(this)
    }

    moveLeft(){
        this.position--
    }

    moveRight(){
        this.position++
    }

    onTopOfParachute(){
        for(var i = 0; i < Robot.robots.length; i++){
            if(Robot.robots[i].parachute == this.position){
                return true
            }
        }
        return false
    }

    static didWeMeet(){
        if(Robot.robots[0]){
            let position = Robot.robots[0].position
            for(var i = 0; i < Robot.robots.length; i++){
                if(Robot.robots[i].position != position){
                    return false
                }
            }
            return true
        }
        else{
            return false
        }
    }
} 

function meetRobots(counter = 1, robot1 = new Robot(10), robot2 = new Robot(22)){
    console.log("Robot 1 Position: "+ robot1.position + "Robot 2 Position: "+ robot2.position)
    if(Robot.didWeMeet()){
        return true
    }
    else{
        for(var i = 0; i < counter; i++){
            robot1.moveLeft()
            robot2.moveLeft()
        }
        console.log("Robot 1 Position: "+ robot1.position + "Robot 2 Position: "+ robot2.position)
        for(var i = 0; i < counter; i++){
            if(!robot1.onTopOfParachute()){
                robot1.moveRight()
            }
            if(!robot2.onTopOfParachute()){
                robot2.moveRight()
            }
        }
    }
    counter++
    return meetRobots(counter, robot1, robot2)
}
meetRobots()




// Consider a village with vampires and a sleeping man (who never wakes up, no matter what). // A vampire can eat the sleeping man, but after eating him, the vampire falls asleep. // Similarly, any vampire can eat any other sleeping vampire, and this process repeats. // Assume that the vampires are very smart and would ALWAYS choose to stay alive than to eat the man and risk their lives. // Initially, there are 65 vampires and 1 sleeping man. What would happen in the village?

//Nothing happens if you don't factor in starvation for the vampires

//If starvation is applicable we'd end up with one Vampire sleeping

//If vampires can eat another vampire prior to the vampire sleeping. The vampires would eat eachother until there is one left and that vampire would eat the man. 


//A dealer has 1000 coins and 10 bags. He has to divide the coins over the ten bags so that he can make any number of coins simply by handing over a few bags. How must divide his money into the ten bags?

/* Max 1000 coins and hand over all ten bags
1- 1 coin
2 2 coins
3 4 coins
4 8 coins
5 16 coins
6 32 coins
7 64 coins
8 128 coins
9 256 coins
10 489 coins

*/

/*
The following is a description of the instance of this famous puzzle involving 2 eggs and a building with 100 floors. 

Suppose that we wish to know which stories in a 100-story building are safe to drop eggs from, and which will cause the eggs to break on landing. What strategy should be used to drop eggs such that a total number of drops in the worst case is minimized and we find the required floor 

We may make a few assumptions: 

An egg that survives a fall can be used again.
A broken egg must be discarded.
The effect of a fall is the same for all eggs.
If an egg breaks when dropped, then it would break if dropped from a higher floor.
If an egg survives a fall then it would survive a shorter fall.

Start at the second floor and increase by 3 . When one egg breaks, then check the floor below. 

start at 3rd floor breaks
do first floor then second floor. 

if not breaks check 6th 
if no breaks = 34 droppings
Worst case @98th floor 35 droppings 

if we increase by 4
if now breaks = 25 droppings
worst case= @99 floor 28 droppings

if we increase by 5
if no breaks = 20 droppings
worst case = @99th floor 24 droppings

if we increase by 6 
if no breaks = 17 droppings 
worst cast = 99th floor 21
worst case = 95th floor 21

if we increase by 7 
if no breaks = 15 droppings
worst case = 97th floor 20 droppings
worst case 99th floor 16 droppings

if we increase by 8 
if no breaks = 13 droppings
95th floor = 19 droppings

if we incrase by 9 
if no breaks 12
98th floor 19 droppings

10 : 
none; 10
99th = 19 droppings

11: 
none 10 
98: 19 droppings

12: 
none: 9
95th 19 droppigns

13: 
none: 8
99th: 17
90: 19 droppings

14: 
none 8 
97th: 20 droppings

1 floor = 1 drop max 1
2 floors = start with top than check bottom max 2 
3 floors = start with 2nd than check bottom or top. max 2
4 floors = start with 3rd than check bottom and 2nd or top: max 3
5 floors = start with 3rd than check two top or two bottom: max 3
6 floors = start with 3rd than check 5th than top or bottom: max 3
7 floors = start with 3rd than you have 4 floors which is a max of 3 : max 4
8 floors = start with 3rd floor than you have 5 floors with is max of 3: max 4
9 floors = start with 3rd floor than you have 6 floors wich is max of 3: max 4 
10 floors = start with 4th floor than you have 6 floors wich is max of 3: max 4
11 floors = start with 4th floor than you have 7 floors wich is max of 4: max 5
12-15: 5
16-21: 6
22-



*/
function floors(floors){
    var drops = 1
    var counter = 0
    for(var i = 2; i <= floors; i++){
        if(counter == 0){
            drops++
            counter = drops
        }
        counter--
    }
    return drops
}

console.log(floors(10000))