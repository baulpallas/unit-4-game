// declare variables
var lukeHP;
var lukeAP;
var lukeCAP;
var maulHP;
var maulAP;
var maulCAP;
var obiHP;
var obiAP;
var obiCAP;
var vaderHP;
var vaderAP;
var vaderCAP;
var sidiusHP;
var sidiusAP;
var sidiusCAP;

$(document).ready(function() {
  // Luke Character selection
  $(".luke").one("click", () => {
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

  // Obi character Selection
  $(".obi").one("click", () => {
    $(this).data("clicked", true);
    $(".player").appendTo(".enemy-container");
    $(".player").toggleClass("enemy");
    $(".obi").appendTo(".character-selector");
    $(".obi").toggleClass("pickedCharacter");
  });

  // Maul character Selection
  $(".vader").one("click", () => {
    $(this).data("clicked", true);
    $(".player").appendTo(".enemy-container");
    $(".player").toggleClass("enemy");
    $(".vader").appendTo(".character-selector");
    $(".vader").toggleClass("pickedCharacter");
  });

  // Sidius character selection
  $(".sidius").one("click", () => {
    $(this).data("clicked", true);
    $(".player").appendTo(".enemy-container");
    $(".player").toggleClass("enemy");
    $(".sidius").appendTo(".character-selector");
    $(".sidius").toggleClass("pickedCharacter");
  });
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
