/**
 * The function will use a Greedy method to solve the problem of giving
 * change.
 *
 * @param {Integer} the amount for which we have to give change
 * @param {Array} the values of the coins that are available
 *
 * @return {Array} the list of the selected coins, sorted ascending by value,
 * or an empty array if impossible
 */

function coinChange (amount, coins) {
  var iterations = 0;
  var selectedCoins = [];

  // sort coins high to low (high is best)
  coins.sort(function (a, b) {
    return b - a;
  });

  while (amount > 0) {
    // prevent browser crashing
    if (iterations > 1000001) break;
    iterations++;

    // coin is the highest coin value less than the amount
    for (var i = 0; i < coins.length; i++ ) {
      var coin = coins[i];

      if (coin <= amount) {
        // Add the biggest possible coin to the return array
        selectedCoins.push(coin);

        // Deduct the coin value from the amount
        amount = amount - coin;
        break;
      }
    }
  }

  if (amount > 0) {
    return [];
  }

  return selectedCoins.sort(function (a, b) { return a - b})
}

/**
 *
 * @param {Array} the list of event tuples composed of (start_hour, start_minute,
 * finish_hour, finish_minute)
 *
 * @return {Array} array containing the indexes of the selected events, sorted
 * ascending by value
 */

function scheduleEvents (events) {
  var selectedEvents = [];

  // sort events with finishing first first
  events.sort(isFinishFirst);

  console.log(events);
  // add first event
  selectedEvents.push(0);

  for (var i = 1; i < events.length; i++) {
    var previousEventIndex = selectedEvents[selectedEvents.length - 1];
    var previousEvent = events[previousEventIndex];
    // is there a collision with previous event
    console.log("prev", previousEvent);
    console.log(events[i]);
    if (isStartFirst(previousEvent, events[i])) {
      selectedEvents.push(i);
    }
  };

  return selectedEvents;
}

function isFinishFirst(event1, event2) {
  return !(event1.finish <= event2.finish);
}

function isStartFirst(event1, event2) {
  return event1.finish <= event2.start;
}

/**
 *
 * @param {Integer} the capacity of the rucksack in kilograms
 * @param {Array} array of pairs describing the items available to fill the
 * rucksack. Each pair is formed from weight, followed by value.
 *
 * @return {Array} array of pairs where each pair is composited from
 * (item-index, percentage). The array should be sorted ascending by item-index.
 */

function naiveRucksack (capactiy, items) {

  items.sort(function (a, b) { return a[1]/a[0] - b[1]/b[2]})
  console.log(items);
  return [];
}
