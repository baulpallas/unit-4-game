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

// function opponentSelection(numHero) {
//   $(".picked-character")[0].innerHTML += establishCharacter(heroes[numHero]);
//   $(".hero-holder").toggleClass("pickedCharacter");
//   $(".character-selection")[0].innerHTML = "";
//   for (var i = 0; i < heroes.length; i++) {
//     if (i === numHero) {
//       continue;
//     }
//     $(".enemy-row")[0].innerHTML += establishCharacter(heroes[i]);
//   }
//   $(".hero-holder").toggleClass("enemy");
// }

// function addSelectedHerotoDOM(i) {
//   if (starWarsRPG.heroSelected === heroes[i].name) {
//     starWarsRPG.heroObject = heroes[i];
//     renderSelectedHero(i);
//   }
// };

$(".hero-holder").on("click", function() {
  if (starWarsRPG.gameStage === "initial") {
    // starWarsRPG.heroSelected = $(this).attr("id");
    // $("id" + starWarsRPG.heroSelected).remove();
    starWarsRPG.heroSelected = $(this).attr("id");
    $("id" + starWarsRPG.heroSelected).remove();

    //Selects luke
    if (starWarsRPG.heroSelected === "Luke Skywalker") {
      starWarsRPG.heroObject = heroes[0];
      renderSelectedHero(0);
    }
    // Selects mace
    if (starWarsRPG.heroSelected === "Mace Windu") {
      starWarsRPG.heroObject = heroes[1];
      renderSelectedHero(1);
    }

    // Selects Maul
    if (starWarsRPG.heroSelected === "Darth Maul") {
      starWarsRPG.heroObject = heroes[2];
      renderSelectedHero(2);
      starWarsRPG.gameStage = "opponentSelection";
    }

    // Selects Vade
    if (starWarsRPG.heroSelected === "Darth Vader") {
      starWarsRPG.heroObject = heroes[3];
      renderSelectedHero(3);
      starWarsRPG.gameStage = "opponentSelection";
    }
  }
  starWarsRPG.gameStage = "opponentSelection";
  console.log(starWarsRPG);
});

$(".enemy-row").on("click", function(event) {
  if (starWarsRPG.gameStage === "opponentSelection") {
    starWarsRPG.opponentSelected = $(this).attr("id");
    $("#" + starWarsRPG.opponentSelected).remove();
    console.log(event);

    // // Luke is Opponent
    // if (starWarsRPG.opponentSelected === "Luke Skywalker") {
    //   starWarsRPG.opponentObject = heroes[0];
    //   console.log(starWarsRPG);
  }
});
