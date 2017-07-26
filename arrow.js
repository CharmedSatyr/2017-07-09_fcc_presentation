const array = [1, 2, 3, 4, 5, 6];

//Clunky function syntax
function clunky(arg) {
   console.log('Clunky:', arg.map(function (item) {
         return item + 1;
      })
      .filter(function (item) {
         return (item < 4)
      })
      .reduce(function (acc, curr) {
         return acc + curr;
      }));
}
clunky(array);


//Arrow function syntax
const arrow = (arg) => {
   console.log('Arrow:', arg.map(item => item + 1)
      .filter(item => item < 4)
      .reduce((acc, curr) => acc + curr));
}
arrow(array);
