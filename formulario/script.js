// $(document).ready(function () {
//     $("#box1").mouseover(function () { 
//         $("#box1").css({backgroundColor: "crimson"});
//     });

//     $("#box1").mouseout(function () { 
//         $("#box1").css({backgroundColor: "white"});
//     });

//     $("#box2").mouseover(function () { 
//         $("#box2").css({backgroundColor: "aquamarine"});
//     });

//     $("#box2").mouseout(function () { 
//         $("#box2").css({backgroundColor: "white"});
//     });

//     $("#box3").mouseover(function () { 
//         $("#box3").css({backgroundColor: "violet"});
//     });

//     $("#box3").mouseout(function () { 
//         $("#box3").css({backgroundColor: "white"});
//     });
// });

// $(document).ready(function () {
//     var flag_bind = 0;
//     $("#box").bind("mouseover", function () {
//       $("#box").css({ backgroundColor: "crimson" });
//     });
//     $("#box").bind("mouseout", function () {
//       $("#box").css({ backgroundColor: "white" });
//     });
//     $("#posicao").click(function () {
//       if (flag_bind == 0) {
//         $("#box").unbind();
//         flag_bind = 1;
//     } else {
//       $("#box").bind("mouseover", function () {
//         $("#box").css({ backgroundColor: "crimson" });
//       });
//       $("#box").bind("mouseout", function () {
//         $("#box").css({ backgroundColor: "white" });
//       });
//       flag_bind = 0;
//     }
//   });
// });

// $(document).ready(function () {
//     var flag_bind = 0;
//     $("#box").bind("mousedown", function () {
//       $("#box").css({ backgroundColor: "crimson" });
//     });
//     $("#box").bind("mouseup", function () {
//       $("#box").css({ backgroundColor: "black" });
//     });
//     $("#posicao").click(function () {
//       if (flag_bind == 0) {
//         $("#box").unbind();
//         flag_bind = 1;
//     } else {
//       $("#box").bind("mouseover", function () {
//         $("#box").css({ backgroundColor: "crimson" });
//       });
//       $("#box").bind("mouseout", function () {
//         $("#box").css({ backgroundColor: "white" });
//       });
//       flag_bind = 0;
//     }
//   });
// });

// $(document).ready(function () {
//     $("#box").mouseover(function () {
//         $("#box").fadeTo(100, 0.9);
//     });
//     $("#box").mouseout(function () {
//         $("#box").fadeTo(100, 0.3);
//     });
// })

$(document).ready(function () {
    $(document).ready(function () {
        $("#box").hover(function () {
            $("#box").css({ backgroundColor: "yellow" });
        }, function () {
            $("#box").css({ backgroundColor: "blue" });
        }
        )
    });
});
