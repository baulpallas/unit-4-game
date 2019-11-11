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
  $("#luke").one("click", () => {
    $(this).data("clicked", true);
    if (
      $(".luke").data("clicked") !== true ||
      $("#mace").data("clicked") !== true ||
      $("#maul").data("clicked") !== true ||
      $("#vader").data("clicked") !== true ||
      $("#obi").data("clicked") !== true ||
      $("#sidius").data("clicked") !== true
    ) {
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".luke").appendTo(".character-selector");
      $(".luke").toggleClass("pickedCharacter");
      console.log("it worked");
    }
  });

  $(".mace").one("click", () => {
    $(this).data("clicked", true);
    if (
      $("#luke").data("clicked") !== true ||
      $("#mace").data("clicked") !== true ||
      $("#maul").data("clicked") !== true ||
      $("#vader").data("clicked") !== true ||
      $("#obi").data("clicked") !== true ||
      $("#sidius").data("clicked") !== true
    ) {
      $(".player").appendTo(".enemy-container");
      $(".player").toggleClass("enemy");
      $(".mace").appendTo(".character-selector");
      $(".mace").toggleClass("pickedCharacter");
      console.log("it worked");
    }
  });
});

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
