function a(cb) {
    setTimeout(function() {
        console.log('111');
        if (cb) cb();
    }, 1000);
}

function b(cb) {
    setTimeout(function() {
        console.log('222');
        if (cb) cb();
    }, 500);
}

function c(cb) {
    setTimeout(function() {
        console.log('333');
        if (cb) cb();
    }, 1500);
}

function d(cb) {
    setTimeout(function() {
        console.log('444');
        if (cb) cb();
    }, 1000);
}

function not_good() {
    // not working
    array = [a, b, c, d];
    for (var i = 0; i < array.length; i++) {
        console.log(i);
        array[i]();
    }
}

function series(funcarr) {
  var i = 0;
  if(i < funcarr.length){
    for(; i<funcarr.length; i++){
      (function(j) {
        funcarr[j]();
      })(i);
    }
  }
}

function series(funcarr, i) {
  if(i < funcarr.length){
    funcarr[i](function() {
      series(funcarr, i+1);
    })
  }
}


series([a,b,c,d], 0);

// a(function() {
//     b();
// });

// a(function() {
//     b(function() {
//         c();
//     })
// });

// a(function() {
//     b(function() {
//         c(function() {
//             d();
//         });
//     });
// });


// a();
// b();
// c();
// d();

// javascript 함수는 항상 비동기적으로 실행된다.
// javascript vm engine이 실행해준다.
