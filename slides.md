# Greedy Algorithms
@alexstoick

---

# What is greedy?

---

![greedy](http://image.shutterstock.com/z/stock-vector-a-vector-illustration-of-greedy-cartoon-pig-holding-armful-of-money-127389956.jpg)

---

# Actually...

Locally optimum choice at every step

---

![coin_diagram_1](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-4.png)

---

![coin_diagram_2](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-5.png)

---

![coin_diagram_3](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-6.png)

---

![coin_diagram_4](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-7.png)

---

![coin_diagram_5](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-8.png)

---

![coin_diagram_6](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-9.png)

---

![coin_diagram_7](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-10.png)

---

![coin_diagram_8](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-11.png)

---

![coin_diagram_9](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-12.png)

---

![coin_diagram_9](https://dl.dropboxusercontent.com/u/13711485/assets/GreedyAlgos/change-13.png)

---

## Challenge 1: Providing change

Use the least number of coins

---

#### `coinChange(amount, coins)`
- param1: `amount` (`Integer`) amount of change to return
- param2: `coins` (`Array of Integers`) the available coins you can use
- returns: (`Array of Integers`) the coins used for the change

---


## Challenge 2: Event Scheduling

Schedule as many events as possible

---

#### `scheduleEvents(events)`
- param1: `events` (`Array` of `Object`s) the available events represented as a tuple of (`{start, finish}`)
```js
[{ start: 12, finish: 30 }, { start: 11, finish: 50 }]
```
- returns: (`Array` of `Integers`) where each integer is the index of a show from `events`

```js
[ 1, 5, 8 ]
```

---

## Challenge 3: Naive (Fragmented) Rucksack

Fill a bag with the most valuable items

---

#### `naiveRucksack(N, items)`
- param1: `N` maximum weight capacity
- param2: `items` (`Array` of `Integers`) pairs of (weight, value)
```js
[ [50, 100], [25, 50], [30, 50] ]
```
- returns: (`Array` of `Integers`) where a pair is composited from (item-index, item-percentage), where item-percentage is the percentage of the item that was inserted into the rucksack

```js
[ [1, 100], [3, 100], [8, 25] ]
```
