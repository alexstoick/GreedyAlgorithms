## Greedy Algorithms

A greedy algorithm makes the locally optimum choice at each stage in the hope of finding a globally optimum solution.

There are 3 challenges:

For each challenge you will write 1 function. Your your function will be run against several tests with each one in turn testing your algorithm's ability to handle more tricky scenarios. Try and make as many pass as possible!

1. Providing change

Provide a certain amount of change to a customer using _the least number of coins_.

Implement a function `coinChange(amount, coins)`
- param1: `amount` (`Integer`) amount of change to return
- param2: `coins` (`Array of Integers`) the available coins you can use
- returns: (`Array of Integers`) the coins used for the change

2. Event Scheduling

You are the owner of a theatre hall and you want to rent it out to _schedule as many events as possible_. 

Implement a function `scheduleEvents(events)`
- param1: `events` (`Array of Arrays`) the available events represented as a tuple of (startHour, startMinute, finishHour, finishMinute) e.g. `[ [12,30,15,45], [11,50,12,40] ]`
- returns: (`Array` of `Integers`) where each integer is the index of a show from `events`

3. Naive (Fragmented) Rucksack

You have a rucksack with a _maximum capacity of N (Integer) kilograms_, and you want to _fill it with the most valuable items_. You can insert full or partial items in the rucksack. 

Implement a function `naiveRucksack(N, items)`
- param1: `N` maximum weight capacity
- param2: `items` (`Array` of `Integers`) pairs of (weight, value) e.g. `[ [50, 100], [25, 50], [30, 50] ]`
- returns: (`Array` of `Integers`) where a pair is composited from (item-index, item-percentage), where item-percentage is the percentage of the item that was inserted into the rucksack
