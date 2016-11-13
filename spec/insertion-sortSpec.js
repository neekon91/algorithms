describe('insertionSort', function() {
  var sort;


  it('should have a function named "insertionSort":', function() {
    expect(insertionSort).to.be.a('function');

  });

  it('should not use Array.sort', function(){
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: function () {
        should.fail(null, null, 'Array.sort called! That\'s cheating.',null);
      }
    });
    var result = insertionSort([8,7,3,6,9,2,4,5,1]);
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: _sort
    });
  });
  
  it('should sort an unsorted array of numbers', function(){
    sort = insertionSort([10,4,3,2,5,6,7,8,1,9]);
    expect(sort).to.eql([ 1,2,3,4,5,6,7,8,9,10 ]);
  })

  it('should sort an unsorted array of mixed numbers part II', function(){
    sort = insertionSort([342,5,4,1,543,64,4,145,32,45]);
    expect(sort).to.eql([ 1, 4, 4, 5, 32, 45, 64, 145, 342, 543 ]);
  })
});
