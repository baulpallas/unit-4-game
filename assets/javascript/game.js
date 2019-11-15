// Creates characters

var starWarsRPG = {
  gameStage: "initial",
  heroSelected: "",
  heroObject: "",
  opponentSelected: "",
  opponentObject: "",
  opponentsRemain: 3
};

var orginalAP;

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
    hero["name"].split(" ").join("-") +
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
function renderSelectedHero(
  numHero,
  pickedNewLocation,
  pickedOldLocation,
  enemyLocation,
  newClass
) {
  $(pickedNewLocation)[0].innerHTML += establishCharacter(heroes[numHero]);
  $(".hero-holder").toggleClass("pickedCharacter");
  $(pickedOldLocation)[0].innerHTML = "";
  for (var i = 0; i < heroes.length; i++) {
    if (
      heroes[i].name !== starWarsRPG.opponentSelected &&
      heroes[i].name !== starWarsRPG.heroSelected
    ) {
      $(enemyLocation)[0].innerHTML += establishCharacter(heroes[i]);
    }
  }
  $(".hero-holder").toggleClass(newClass);
}

// Selects Hero
$(".hero-holder").on("click", function() {
  if (starWarsRPG.gameStage === "initial") {
    starWarsRPG.heroSelected = $(this)
      .attr("id")
      .split("-")
      .join(" ");
    $("id" + starWarsRPG.heroSelected).remove();
    console.log(starWarsRPG.heroSelected);
    console.log(this);
    for (var i = 0; i < heroes.length; i++) {
      if (starWarsRPG.heroSelected === heroes[i].name) {
        starWarsRPG.heroObject = heroes[i];
        renderSelectedHero(
          i,
          ".picked-character",
          ".character-selection",
          ".enemy-row",
          "enemy"
        );
      }
    }
    orginalAP = starWarsRPG.heroObject["ap"];
    starWarsRPG.gameStage = "opponentSelection";
    console.log(starWarsRPG);
  }
});

// Select Opponent

$(".enemy-row").on("click", ".enemy", function(event) {
  if (starWarsRPG.gameStage === "opponentSelection") {
    starWarsRPG.opponentSelected = $(this)
      .attr("id")
      .split("-")
      .join(" ");
    $("#" + starWarsRPG.opponentSelected).remove();

    // selects luke as opponent
    if (starWarsRPG.opponentSelected === "Luke Skywalker") {
      starWarsRPG.opponentObject = heroes[0];
      renderSelectedHero(
        0,
        ".defender-row",
        ".enemy-row",
        ".enemy-row",
        "enemy"
      );
    }
    // Selects mace
    if (starWarsRPG.opponentSelected === "Mace Windu") {
      starWarsRPG.opponentObject = heroes[1];
      renderSelectedHero(
        1,
        ".defender-row",
        ".enemy-row",
        ".enemy-row",
        "enemy"
      );
    }

    // Selects Maul
    if (starWarsRPG.opponentSelected === "Darth Maul") {
      starWarsRPG.opponentObject = heroes[2];
      renderSelectedHero(
        2,
        ".defender-row",
        ".enemy-row",
        ".enemy-row",
        "enemy"
      );
    }

    // Selects Vade
    if (starWarsRPG.opponentSelected === "Darth Vader") {
      starWarsRPG.opponentObject = heroes[3];
      console.log(starWarsRPG.opponentObject);
      renderSelectedHero(
        3,
        ".defender-row",
        ".enemy-row",
        ".enemy-row",
        "enemy"
      );
    }
    starWarsRPG.gameStage = "gameOn";
    console.log(starWarsRPG.gameStage);
  }
});

// initialize fight button
$(".btn").on("click", function(event) {
  if (starWarsRPG.gameStage === "gameOn") {
    console.log("Button Works");

    battleFn(starWarsRPG.heroObject, starWarsRPG.opponentObject);
  }
});

function battleFn(selectedHero, enemyHero) {
  if (starWarsRPG.gameStage === "gameOn" && enemyHero["hp"] > 0) {
    var enemyHealth = enemyHero["hp"] - selectedHero["ap"];
    var heroHealth = selectedHero["hp"] - enemyHero["cap"];
    var varHeroNewAP = orginalAP + selectedHero["ap"];
    enemyHero["hp"] = enemyHealth;
    selectedHero["hp"] = heroHealth;
    selectedHero["ap"] = varHeroNewAP;
    console.log(enemyHero["hp"], selectedHero["hp"], selectedHero["ap"]);
  }
  if (enemyHero["hp"] < 0) {
    $("#" + enemyHero["name"].split(" ").join("-")).remove();
    starWarsRPG.gameStage = "opponentSelection";
  }

  if (selectedHero["hp"] < 0) {
    //add gameOver functionality
  }
}

// function addHPToDOM (selectedHero, enemyHero {
//   var newHeroHP =
// }
