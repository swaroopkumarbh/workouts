function decrement(no) {
    return --no;
  }
  
  function timer(no, func) {
    var p = document.getElementById("timer-display");
    p.innerHTML = no;
    var res9 = func(no);
    setTimeout(() => {
      p.innerHTML = res9;
    }, 1000);
    timer2(res9, decrement);
    function timer2(no, func) {
      var no = res9;
      var res8 = func(no);
      setTimeout(() => {
        p.innerHTML = res8;
      }, 2000);
  
      timer3(res8, decrement);
  
      function timer3(no, func) {
        var no = res8;
        var res7 = func(no);
        setTimeout(() => {
          p.innerHTML = res7;
        }, 3000);
        timer4(res7, decrement);
  
        function timer4(no, func) {
          var no = res7;
          var res6 = func(no);
          setTimeout(() => {
            p.innerHTML = res6;
          }, 4000);
  
          timer5(res6, decrement);
          function timer5(no, func) {
            var no = res6;
            var res5 = func(no);
            setTimeout(() => {
              p.innerHTML = res5;
            }, 5000);
  
            timer6(res5, decrement);
            function timer6(no, func) {
              var no = res5;
              var res4 = func(no);
              setTimeout(() => {
                p.innerHTML = res4;
              }, 6000);
  
              timer7(res4, decrement);
              function timer7(no, func) {
                var no = res4;
                var res3 = func(no);
                setTimeout(() => {
                  p.innerHTML = res3;
                }, 7000);
  
                timer8(res3, decrement);
  
                function timer8(no, func) {
                  var no = res3;
                  var res2 = func(no);
                  setTimeout(() => {
                    p.innerHTML = res2;
                  }, 8000);
  
                  timer9(res2, decrement);
                  function timer9(no, func) {
                    var no = res2;
                    var res1 = func(no);
                    setTimeout(() => {
                      p.innerHTML = res1;
                    }, 9000);
  
                    timer10(res1, decrement);
                    function timer10(no, func) {
                      setTimeout(() => {
                        p.innerHTML = "Good Morning";
                      }, 10000);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  timer(10, decrement);