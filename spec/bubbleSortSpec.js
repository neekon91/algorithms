describe('bubbleSort', function() {
  var bubble;


  it('should have a function named "bubbleSort":', function() {
    expect(bubbleSort).to.be.a('function');

  });

  it('should sort an unsorted array of numbers', function(){
    bubble = bubbleSort([10,4,3,2,5,6,7,8,1,9]);
    expect(bubble).to.eql([ 1,2,3,4,5,6,7,8,9,10 ]);
  })

  it('should sort an unsorted array of mixed numbers part II', function(){
    bubble = bubbleSort([342,5,4,1,543,64,4,145,32,45]);
    expect(bubble).to.eql([ 1, 4, 4, 5, 32, 45, 64, 145, 342, 543 ]);
  })
});
