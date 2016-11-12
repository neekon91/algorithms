const candy = ratings =>
  ratings.reduce((candies, rating, i) =>
    (candies.push(rating > ratings[i-1] ? candies[i-1] + 1 : 1), candies), [])
  .reduceRight((sum, candy, i, candies) =>
    sum + (ratings[i] > ratings[i+1] ? candies[i] = Math.max(candy, candies[i+1] + 1) : candy), 0);
