$(document).ready(function () {
  console.log("ready!");
  var audio = new Audio('sng/song.mp3')
  audio.play();
  $('#myModal').modal({
    show: true
  })
  $(".start-mario-btn").click(function () {
    setTimeout(function () {
      console.log("mario go");
      location.href = "/mario"
      hide(4);
      // var audio = new Audio('sng/song.mp3')
      // audio.play();
    }, 5 * 500);
    $(".start-demogorgon-btn").click(function () {
      setTimeout(function () {
        location.href = "/demogorgon"
        console.log("demogorgon go");
        hide(4);
        // var audio = new Audio('sng/song.mp3')
        // audio.play();
      }, 5 * 500);
    });
  });

  // function getBobData() {
  //   console.log("Start - getBobData");
  //   $.get("/request", function (data) {
  //     bob.states.push(data);
  //     console.log("End - getBobData");
  //     setTimeout(function () {
  //       getBobData()
  //     }, 500);
  //   });
  // }

  // function spamAlice() {
  //   console.log("Start - spamAlice");
  //   if (alice.states.length !== 0) {
  //     $.get("/insert?base=" + alice.states.shift(), function (data) {
  //       console.log("End - spamAlice");
  //       setTimeout(function () {
  //         spamAlice()
  //       }, 500);
  //     });
  //   } else {
  //     setTimeout(function () {
  //       spamAlice()
  //     }, 500);
  //   }
  // }

  // function pointA(_vector) {
  //   if (points.lastMeasure % 2 == 1) {
  //     switch ("" + _vector[points.lastMeasure - 1] + _vector[points.lastMeasure]) {
  //       case "00": points.n00++; break;
  //       case "01": points.n01++; break;
  //       case "10": points.n10++; break;
  //       case "11": points.n11++; break;
  //     }
  //   }
  //   _vector[points.lastMeasure] ? points.n1++ : points.n0++;
  //   points.lastMeasure++;
  //   return Math.round(points.scale * (points.alpha * entropyB(points.n0 / (points.n0 + points.n1))
  //     + points.beta * 0.5 * entropyBB(
  //       points.n00 / (points.n00 + points.n01 + points.n10 + points.n11),
  //       points.n01 / (points.n00 + points.n01 + points.n10 + points.n11),
  //       points.n10 / (points.n00 + points.n01 + points.n10 + points.n11),
  //       points.n11 / (points.n00 + points.n01 + points.n10 + points.n11)
  //     )));
  // }

  // function pointTotal() {
  //   return pointA();
  // }

  // function entropyB(_p) {
  //   return - _p * Math.log2(_p) - (1 - _p) * Math.log2(1 - _p);
  // }

  // function entropyBB(_p00, _p01, _p10, _p11) {
  //   return - _p00 * Math.log2(_p00) - _p01 * Math.log2(_p01) - _p10 * Math.log2(_p10) - _p11 * Math.log2(_p11);
  // }

  function hide(_x) {
    $(".msg-" + _x).removeClass("invisible");
    $(".msg-" + _x).addClass("invisible");
  }

  function unhide(_x) {
    $(".msg-" + _x).removeClass("invisible");
  }

  // function setScore() {
  //   var score = Math.round(100 * (points.hitA / (points.hitA + points.missA) + points.hitB / (points.hitB + points.missB)));
  //   $(".progress-bar").attr("aria-valuenow", score);
  //   $(".progress-bar").attr("style", "width: " + score + "%");
  // }
});