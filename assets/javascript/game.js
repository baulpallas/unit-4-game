// Creates characters

var starWarsRPG = {
  gameStage: "initial",
  heroSelected: "",
  heroObject: "",
  opponentSelected: "",
  opponentObject: "",
  opponentsRemain: 3
};

// Intialize heroes
var heroes = [
  {
    name: "Luke Skywalker",
    hp: 120,
    ap: 6,
    cap: 7,
    imageURL: "./assets/images/Luke.jpeg"
  },

  {
    name: "Mace Windu",
    hp: 120,
    ap: 6,
    cap: 7,
    imageURL: "./assets/images/Mace_Windu.png"
  },

  {
    name: "Darth Maul",
    hp: 120,
    ap: 6,
    cap: 7,
    imageURL: "./assets/images/Darthmall.jpg"
  },

  {
    name: "Darth Vader",
    hp: 120,
    ap: 6,
    cap: 7,
    imageURL: "./assets/images/DarthVader.jpg"
  }
];
// =======================================================
// =======================================================
// Render heroes and create Divs
function establishCharacter(hero, heroClass = "") {
  var heroHTML =
    '<div id="' +
    hero["name"] +
    '"class="mx-1 hero-holder ' +
    heroClass +
    ' d-flex flex-column align-items-center"> <p class="mb-0 hero-name">' +
    hero["name"] +
    '</p> <img class="hero-image w-100" src="' +
    hero["imageURL"] +
    '" alt="hero image"/><p class="mb-0 hero-hp">' +
    hero["hp"] +
    "</p> </div>";
  return heroHTML;
}

// Renders characters at load in character selection row
function renderHeroesAtLoad() {
  for (var i = 0; i < heroes.length; i++) {
    $(".character-selection")[0].innerHTML += establishCharacter(heroes[i]);
  }
}

renderHeroesAtLoad();

//
function renderSelectedHero(numHero) {
  $(".picked-character")[0].innerHTML += establishCharacter(heroes[numHero]);
  $(".hero-holder").toggleClass("pickedCharacter");
  $(".character-selection")[0].innerHTML = "";
  for (var i = 0; i < heroes.length; i++) {
    if (i === numHero) {
      continue;
    }
    $(".enemy-row")[0].innerHTML += establishCharacter(heroes[i]);
  }
  $(".hero-holder").toggleClass("enemy");
}

$(".hero-holder").on("click", function() {
  if (starWarsRPG.gameStage === "initial") {
    // starWarsRPG.heroSelected = $(this).attr("id");
    // $("id" + starWarsRPG.heroSelected).remove();
    starWarsRPG.heroSelected = $(this).attr("id");
    $("id" + starWarsRPG.heroSelected).remove();

    //Selects luke
    if (starWarsRPG.heroSelected === "Luke Skywalker") {
      starWarsRPG.heroObject = heroes[0];
      console.log(starWarsRPG);
      renderSelectedHero(0);
    }
    // Selects mace
    if (starWarsRPG.heroSelected === "Mace Windu") {
      starWarsRPG.heroObject = heroes[1];
      console.log(starWarsRPG);
      renderSelectedHero(1);
    }

    // Selects Maul
    if (starWarsRPG.heroSelected === "Darth Maul") {
      starWarsRPG.heroObject = heroes[2];
      console.log(starWarsRPG);
      renderSelectedHero(2);
    }

    // Selects Maul
    if (starWarsRPG.heroSelected === "Darth Vader") {
      starWarsRPG.heroObject = heroes[3];
      console.log(starWarsRPG);
      renderSelectedHero(3);
    }
  }
});

// if ($(".player").data("clicked") !== true) {
//   console.log("fuck you");
//   $(".luke").one("click", () => {
//     console.log(event);
//     $(this).data("clicked", true);
//     $(".player").appendTo(".enemy-container");
//     $(".player").toggleClass("enemy");
//     $(".luke").appendTo(".character-selector");
//     $(".luke").toggleClass("pickedCharacter");
//   });

//   // Mace character selection
//   $(".mace").one("click", () => {
//     $(this).data("clicked", true);
//     $(".player").appendTo(".enemy-container");
//     $(".player").toggleClass("enemy");
//     $(".mace").appendTo(".character-selector");
//     $(".mace").toggleClass("pickedCharacter");
//   });

//   // Maul character Selection
//   $(".maul").one("click", () => {
//     $(this).data("clicked", true);
//     $(".player").appendTo(".enemy-container");
//     $(".player").toggleClass("enemy");
//     $(".maul").appendTo(".character-selector");
//     $(".maul").toggleClass("pickedCharacter");
//   });

//   // Maul character Selection
//   $(".vader").one("click", () => {
//     $(this).data("clicked", true);
//     $(".player").appendTo(".enemy-container");
//     $(".player").toggleClass("enemy");
//     $(".vader").appendTo(".character-selector");
//     $(".vader").toggleClass("pickedCharacter");
//   });
// } else {
//   console.log("what");

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
