# Greedy Algorithms
@alexstoick

---

# What is greedy?

---

![greedy](https://photos-4.dropbox.com/t/2/AAAXSaWO16lj63RQdSHTWKmQMNQmzxE-wwLUDrf7p6hpdg/12/13711485/png/32x32/1/_/1/2/Screenshot%202016-05-17%2013.55.10.png/EKGOmAoYyPHHAiABKAE/092AuAh6UuToBQNwSXVfwTAX1FGHAD5__X2tjy2lk_A?size=2048x1536&size_mode=3)

---

# Actually...

Locally optimum choice at every step

---

![coin_diagram_1](https://photos-6.dropbox.com/t/2/AADjH3TVgWYn3qf9L06cNLWY3AdLTccBYEshkgeEe0IxiA/12/13711485/png/32x32/1/_/1/2/change-4.png/EKGOmAoYivLHAiABKAE/0GmXuJ78aIPlPdk5PXl0MTSAUN6rq-o0PIE4apkoJIY?size=2048x1536&size_mode=3)

---

![coin_diagram_2](https://photos-1.dropbox.com/t/2/AABGgVvp4QgM-FJuUimPFkKdUWLCsSsfoBi2bhFeC5PGDg/12/13711485/png/32x32/1/_/1/2/change-5.png/EKGOmAoYivLHAiABKAE/YJ4pyQmSl9IDzRHhJu32qsJudvPqAlZBBGJ8T1d8Z60?size=2048x1536&size_mode=3)

---

![coin_diagram_3](https://photos-1.dropbox.com/t/2/AAANaE9bYGpcuQugSZrCyaAm88Ew9H_vGCiIPs-D509d7g/12/13711485/png/32x32/1/_/1/2/change-6.png/EKGOmAoYivLHAiABKAE/hXMv_dUDKX8CbdM9VLt2aq8LBGPb6Np5DigIr9T6V9I?size=2048x1536&size_mode=3)

---

![coin_diagram_4](https://photos-3.dropbox.com/t/2/AAB8iWcCHjhGhu8XCVZufE036FGAHYR3I69VTr47IEfEmQ/12/13711485/png/32x32/1/_/1/2/change-7.png/EKGOmAoYivLHAiABKAE/NrfyZFrRM9Cu-6cAPkbqwiWf5RZ5WRKOCksZbOaaAL0?size=2048x1536&size_mode=3)

---

![coin_diagram_5](https://photos-6.dropbox.com/t/2/AABR5PuXDX6ihUQ2jHZFn4fQYmYfut5OZhvxgmt-g4D9Gw/12/13711485/png/32x32/1/_/1/2/change-8.png/EKGOmAoYivLHAiABKAE/szMLRBg04FlWfV_PQcw91JVYugn5saX4xw1P76vgRj4?size=2048x1536&size_mode=3)

---

![coin_diagram_6](https://photos-4.dropbox.com/t/2/AAC6-GPYwl6NfxuczJJjQ5vDJtDjiLKwp4yjqChzZEFGGw/12/13711485/png/32x32/1/_/1/2/change-9.png/EKGOmAoYivLHAiABKAE/79K8RvKJ8a69k7X6E0QtPMskA7f5xhjURghLAvoI8D0?size=2048x1536&size_mode=3)

---

![coin_diagram_7](https://photos-5.dropbox.com/t/2/AAAosx49UrHWDenlaLMcqwPSzlqtcNq3-fQsnXuM6M5XwQ/12/13711485/png/32x32/1/_/1/2/change-10.png/EKGOmAoYivLHAiABKAE/JsABWjqwuH0ZUAavxhAeouDk6FTCJGQFTjVgJh5yR3A?size=2048x1536&size_mode=3)

---

![coin_diagram_8](https://photos-2.dropbox.com/t/2/AADFY2YCdUC40dX5GySk8zz54bXylH63ecnRTWHQsdyFBQ/12/13711485/png/32x32/1/_/1/2/change-11.png/EKGOmAoYivLHAiABKAE/czM9CNytVyCi6TUwUfAvSa8-NJx7_3vUn_mU8qWdz_g?size=2048x1536&size_mode=3)

---

![coin_diagram_9](https://photos-1.dropbox.com/t/2/AABRU0QIwofQu8bq58KqTh4Cofz_TxvQJtZ_cdZTG23q4g/12/13711485/png/32x32/1/_/1/2/change-12.png/EKGOmAoYivLHAiABKAE/1kHqaJ4bCxIqxuhIqyF--9D8DD3NhsPiOSxGApdqpFc?size=2048x1536&size_mode=3)

---

![coin_diagram_9](https://photos-4.dropbox.com/t/2/AADSBpgG-27RzexkpPSvlnfZTZN9YCKzyzZ-AEb9s4j_2Q/12/13711485/png/32x32/1/_/1/2/change-13.png/EKGOmAoYivLHAiABKAE/GfMiMT6OVBaLjF7hf22kR4RBVb9sg4m_Z2jFDfBvdlg?size=2048x1536&size_mode=3)

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
- param1: `events` (`Array of Arrays`) the available events represented as a tuple of (startHour, startMinute, finishHour, finishMinute)
```js
[ [12,30,15,45], [11,50,12,40] ]
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
