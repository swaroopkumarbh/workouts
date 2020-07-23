let seconds = 10;
setTimeout(() => {
  let p = document.getElementById("timer-display");
  p.innerHTML = seconds;
  let res9 = seconds--;
  setTimeout(() => {
    p.innerHTML = res9;
  }, 1000);
  setTimeout(() => {
    let res8 = --res9;
    setTimeout(() => {
      p.innerHTML = res8;
    }, 2000);

    setTimeout(() => {
      let res7 = --res8;
      setTimeout(() => {
        p.innerHTML = res7;
      }, 3000);

      setTimeout(() => {
        let res6 = --res7;
        setTimeout(() => {
          p.innerHTML = res6;
        }, 4000);

        setTimeout(() => {
          let res5 = --res6;
          setTimeout(() => {
            p.innerHTML = res5;
          }, 5000);

          setTimeout(() => {
            let res4 = --res5;
            setTimeout(() => {
              p.innerHTML = res4;
            }, 6000);

            setTimeout(() => {
              let res3 = --res4;
              setTimeout(() => {
                p.innerHTML = res3;
              }, 7000);

              setTimeout(() => {
                let res2 = --res3;
                setTimeout(() => {
                  p.innerHTML = res2;
                }, 8000);

                setTimeout(() => {
                  let res1 = --res2;
                  console.log(res1);
                  setTimeout(() => {
                    p.innerHTML = res1;
                  }, 9000);


                  setTimeout(() => {
                    let res0 = --res1;
                    setTimeout(() => {
                      p.innerHTML = res0;
                    }, 10000);

                    setTimeout(() => {
                      setTimeout(() => {
                        p.innerHTML = "Good Morning";
                      }, 11000);
                    }, 0)
                  }, 0)
                }, 0)
              }, 0)
            }, 0)
          }, 0)
        }, 0)
      }, 0)
    }, 0)
  }, 0)
}, 0)