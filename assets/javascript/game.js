// declare variables
var lukeHP = 150;
var lukeAP;
var lukeCAP;
var maulHP = 150;
var maulAP;
var maulCAP;
var obiHP = 150;
var obiAP;
var obiCAP;
var vaderHP = 150;
var vaderAP;
var vaderCAP;

$(document).ready(function() {
  // Luke Character selection

  if ($(".player").data("clicked") !== true) {
    console.log("fuck you");
    $(".luke").one("click", () => {
      console.log(event);
      $(this).data("clicked", true);
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".luke").appendTo(".character-selector");
      $(".luke").toggleClass("pickedCharacter");
    });

    // Mace character selection
    $(".mace").one("click", () => {
      $(this).data("clicked", true);
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".mace").appendTo(".character-selector");
      $(".mace").toggleClass("pickedCharacter");
    });

    // Maul character Selection
    $(".maul").one("click", () => {
      $(this).data("clicked", true);
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".maul").appendTo(".character-selector");
      $(".maul").toggleClass("pickedCharacter");
    });

    // Maul character Selection
    $(".vader").one("click", () => {
      $(this).data("clicked", true);
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".vader").appendTo(".character-selector");
      $(".vader").toggleClass("pickedCharacter");
    });
  } else {
    console.log("what");
  }
});

//   $(".mace").one("click", () => {
//     $(this).data("clicked", true);
//     if (
//       $("#luke").data("clicked") !== true ||
//       $("#mace").data("clicked") !== true ||
//       $("#maul").data("clicked") !== true ||
//       $("#vader").data("clicked") !== true ||
//       $("#obi").data("clicked") !== true ||
//       $("#sidius").data("clicked") !== true
//     ) {
//       $(".player").appendTo(".enemy-container");
//       $(".player").toggleClass("enemy");
//       $(".mace").appendTo(".character-selector");
//       $(".luke").toggleClass("pickedCharacter");
//       console.log("it worked");
//     }
//   });
// });

// $("#luke").click(function(event) {
//   $(this).data("clicked", true);
//   if (
//     $("#luke").data("clicked") !== true ||
//     $("#mace").data("clicked") !== true ||
//     $("#maul").data("clicked") !== true ||
//     $("#vader").data("clicked") !== true ||
//     $("#obi").data("clicked") !== true ||
//     $("#sidius").data("clicked") !== true
//   ) {
//     $(".player").appendTo(".enemy-container");
//     $(".player").toggleClass("enemy");
//     $(".luke").appendTo(".character-selector");
//     $(".luke").toggleClass("pickedCharacter");
//     console.log("it worked");
//   } else {
//     $("#luke").click(function(){
//       $("#luke").unbind();
//     });
//   }
// });
// });
