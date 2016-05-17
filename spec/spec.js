describe('coinChange', function(){
  context('Test Case 1', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(48, [1,2,5,10,20])).to.equal([1,2,5,20,20])
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(coinChange(48, [10,5,1]))).to.equal([1,1,1,5,10,10,10,10])
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct coins', function(){
      var x = []
      var start = performance.now()
      for(var i=0;i<20000; ++i) { x.push(1) }
      var finish = performance.now()
      start = performance.now()
      var result = coinChange(coinChange(20000, [1]))
      finish = performance.now()
      console.log(finish-start)
      expect(result).to.equal(x)
      expect(finish-start).to.toBeLessThan(0.5)
    });
  });

  context('Test Case 4', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(coinChange(20, [7]))).to.equal([])
    });
  });


  context('Test Case 5', function(){
    it('it returns the correct coins', function(){
      expect(coinChange(coinChange(289, [7,3,5,10,50,19]))).to.equal([
           //50, 50, 50, 50, 50, 19, 19
      ]);
    });
  });
});


describe('scheduleEvents', function(){
  context('Test Case 1', function(){
    it('it returns the correct events', function(){
      events = [
        [10,  0, 18, 30 ],
        [12, 15, 13,  0 ],
        [12, 30, 16, 30 ],
        [15,  0, 18,  0 ],
        [18,  0, 20, 45 ],
      ]
      expect(scheduleEvents(events)).to.equal([1,3,4])
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct events', function(){
      events = [
        [12, 15, 13, 15 ],
        [15,  0, 18,  0 ],
        [10,  0, 13,  0 ],
        [18,  0, 20, 45 ],
        [12, 30, 16, 30 ],
      ]
      expect(scheduleEvents(events)).to.equal([1,3,4])
    });
  });


  context('Test Case 3', function(){
    it('it returns the correct events', function(){
      events = [
        [10,  0, 11, 30 ],
        [10,  0, 13,  0 ],
        [11, 30, 13, 15 ],
        [12,  0, 18,  0 ],
        [18,  0, 20, 45 ],
        [12, 30, 16, 30 ],
      ]
      expect(scheduleEvents(events)).to.equal([0,2,4])
    });


    context('Test Case 4', function(){
      it('it returns the correct events', function(){
        events = [
          [10,  0, 11, 30 ],
          [17,  0, 20, 30 ],
          [17,  0, 19,  0 ],
          [18,  0, 19,  5 ],
          [19,  3, 19, 20 ],
          [10,  0, 13,  0 ],
        ]
        expect(scheduleEvents(events)).to.equal([0,2,4,5])
      });
    });

    context('Test Case 4', function(){
      it('it returns the correct events', function(){
        events = [
          [10,  0, 11, 30 ],
          [17,  0, 20, 30 ],
          [17,  0, 19,  0 ],
          [18,  0, 19,  5 ],
          [19, 10, 19, 20 ]
          [10,  0, 13,  0 ],
        ]
        expect(scheduleEvents(events)).to.equal([0,1,2])
      });
    });
});


describe('naiveRucksack', function(){
  context('Test Case 1', function(){
    it('it returns the correct items', function(){
      capacity = 4
      rucksack = [
        [1, 1],
        [2, 4],
        [3, 9],
      ]
      expect(naiveRucksack(capacity, rucksack).to.equal(
        [
          [1, 50],
          [2, 100],
        ]
      ));
    });
  });

  context('Test Case 2', function(){
    it('it returns the correct items', function(){
      capacity = 20
      rucksack = [
        [10, 3],
        [5, 1],
        [2, 4],
        [7, 1],
        [3, 9],
      ]
      expect(naiveRucksack(capacity, rucksack).to.equal(
        [
          [0, 100],
          [1, 100],
          [2, 100],
          [4, 100],
        ]
      ));
    });
  });

  context('Test Case 3', function(){
    it('it returns the correct items', function(){
      capacity = 20
      rucksack = [
        [10, 30],
        [6, 1],
        [7, 1],
        [3, 9],
        [5, 5],
      ]
      expect(naiveRucksack(capacity, rucksack).to.equal(
        [
          [0, 100],
          [3, 100],
          [4, 100],
          [6,  34],
        ]
      ));
    });
  });

  context('Test Case 4', function(){
    it('it returns the correct items', function(){
      capacity = 12
      rucksack = [
        [2, 1],
        [10, 13],
        [5, 4],
        [6, 5],
      ]
      expect(naiveRucksack(capacity, rucksack).to.equal(
        [
          [1, 100],
          [3, 34]
        ]
      ));
    });
  });

  context('Test Case 5', function(){
    it('it returns the correct items', function(){
      capacity = 25
      rucksack = [
        [2, 1],  //0.5
        [26, 13],//0.65
        [5, 4],  //0.8
        [6, 5],  //0.84
      ]
      expect(naiveRucksack(capacity, rucksack).to.equal(
        [
          [1, 54],
          [2, 100],
          [3, 100],
        ]
      ));
    });
  });
});
