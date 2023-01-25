// // #1
function delay(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms)
    })
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

// #2
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);  
// второй resolve не был выполнен, так как принимается только один resolve

// #3
// Они не одинаковы, так как в первом примере лиюо код сработает без ошибочно, либо ошибка передастся в catch. На втором примере действия будут выполняться последовательно.