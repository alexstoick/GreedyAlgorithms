const { coinChange, scheduleEvents, naiveRucksack } = require("../src/algo");

describe('coinChange', function(){
  context('Test Case 1', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(48, [1,2,5,10,20])).to.eql([1,2,5,20,20])
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(48, [10,5,1])).to.eql([1,1,1,5,10,10,10,10])
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct coins', function(){
      var x = []
      for(var i=0;i<20000; ++i) { x.push(1) }
      var result = coinChange(20000, [1])
      expect(result).to.eql(x)
    });

    it('it returns the correct coins efficiently', function(){
      var x = []
      var start = performance.now()
      for(var i=0;i<20000; ++i) { x.push(1) }
      var finish = performance.now()
      start = performance.now()
      var result = coinChange(20000, [1])
      finish = performance.now()
      console.log(finish-start)
      expect(result).to.eql(x)
      expect(finish-start).to.be.lessThan(0.5)
    });
  });

  context('Test Case 4', function(){
    it('it returns an empty array if impossible', function(){
      expect(coinChange(20, [7])).to.eql([])
    });
  });


  context('Test Case 5', function(){
    it('it returns an empty array if impossible' /* but is it? */, function(){
      expect(coinChange(289, [7,3,5,10,50,19])).to.eql([
        // Ideal: 50, 50, 50, 50, 50, 19, 10, 3, 3, 3
      ]);
    });
  });
});


describe('scheduleEvents', function(){
  function parseArray(array) {
    return {
      start: array[0] * 60 + array[1],
      finish: array[2] * 60 + array[3]
    };
  }
  context('Test Case 1', function(){
    it('it returns the correct events', function(){
      var events = [
        parseArray([10,  0, 18, 30 ]),
        parseArray([12, 15, 13,  0 ]),
        parseArray([12, 30, 16, 30 ]),
        parseArray([15,  0, 18,  0 ]),
        parseArray([18,  0, 20, 45 ]),
      ]
      expect(scheduleEvents(events)).to.eql([0,2,4])
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct events', function(){
      var events = [
        parseArray([12, 15, 13, 15 ]),
        parseArray([15,  0, 18,  0 ]),
        parseArray([10,  0, 13,  0 ]),
        parseArray([18,  0, 20, 45 ]),
        parseArray([12, 30, 16, 30 ]),
      ]
      expect(scheduleEvents(events)).to.eql([0,3,4])
    });
  });


  context('Test Case 3', function(){
    it('it returns the correct events', function(){
      var events = [
        parseArray([10,  0, 11, 30 ]),
        parseArray([10,  0, 13,  0 ]),
        parseArray([11, 30, 13, 15 ]),
        parseArray([12,  0, 18,  0 ]),
        parseArray([18,  0, 20, 45 ]),
        parseArray([12, 30, 16, 30 ]),
      ]
      expect(scheduleEvents(events)).to.eql([0,2,5])
    });
  });

  context('Test Case 4', function(){
    it('it returns the correct events, but not the best choice!', function(){
      var events = [
        parseArray([10,  0, 11, 30 ]),
        parseArray([17,  0, 20, 30 ]),
        parseArray([17,  0, 19,  0 ]),
        parseArray([18,  0, 19,  5 ]),
        parseArray([19,  3, 19, 20 ]),
        parseArray([10,  0, 13,  0 ]),
      ]
      expect(scheduleEvents(events)).to.eql([0,2,4])
    });
  });

  context('Test Case 5', function(){
    it('it returns the correct events', function(){
      var events = [
        parseArray([10,  0, 11, 30 ]),
        parseArray([17,  0, 20, 30 ]),
        parseArray([17,  0, 19,  0 ]),
        parseArray([18,  0, 19,  5 ]),
        parseArray([19, 10, 19, 20 ]),
        parseArray([10,  0, 13,  0 ]),
      ]
      expect(scheduleEvents(events)).to.eql([0,2,4])
    });
  });
});


describe('naiveRucksack', function(){
  context('Test Case 1', function(){
    it('it returns the correct items', function(){
      var capacity = 4
      var rucksack = [
        [1, 1],
        [2, 4],
        [3, 9],
      ]
      expect(naiveRucksack(capacity, rucksack)).to.eql(
        [
          [0, 100],
          [1, 50],
        ]
      );
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct items', function(){
      var capacity = 20
      var rucksack = [
        [10, 3],
        [5, 1],
        [2, 4],
        [7, 1],
        [3, 9],
      ]
      expect(naiveRucksack(capacity, rucksack)).to.eql(
        [
          [0, 100],
          [1, 100],
          [2, 100],
          [3, 100],
        ]
      );
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct items', function(){
      var capacity = 20
      var rucksack = [
        [10, 30],
        [6, 1],
        [7, 1],
        [3, 9],
        [5, 5],
      ]
      expect(naiveRucksack(capacity, rucksack)).to.eql(
        [
          [0, 100],
          [1, 100],
          [2, 100],
          [3,  33],
        ]
      );
    });
  });

  context('Test Case 4', function(){
    it('it returns the correct items', function(){
      var capacity = 12
      var rucksack = [
        [2, 1],
        [10, 13],
        [5, 4],
        [6, 5],
      ]
      expect(naiveRucksack(capacity, rucksack)).to.eql(
        [
          [0, 100],
          [1, 33]
        ]
      );
    });
  });

  context('Test Case 5', function(){
    it('it returns the correct items', function(){
      var capacity = 25
      var rucksack = [
        [2, 1],  //0.5
        [26, 13],//0.65
        [5, 4],  //0.8
        [6, 5],  //0.84
      ]
      expect(naiveRucksack(capacity, rucksack)).to.eql(
        [
          [0, 100],
          [1, 100],
          [2, 100],
          [3, 46],
        ]
      );
    });
  });
});
