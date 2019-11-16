// Creates characters

var starWarsRPG = {
  gameStage: "initial",
  heroSelected: "",
  heroObject: "",
  opponentSelected: "",
  opponentObject: "",
  opponentsRemain: 3,
  opponentsDefeated: []
};

// function starWarsRPG() {
//   return {
//     gameStage: "initial",
//     heroSelected: "",
//     heroObject: "",
//     opponentSelected: "",
//     opponentObject: "",
//     opponentsRemain: 3,
//     opponentsDefeated: []
//   };
// }

// starWarsRPG1 = starWarsRPG();

var orginalAP;

// Intialize heroes

function initializeHero() {
  return [
    {
      name: "Luke Skywalker",
      hp: Math.floor(Math.random() * 140) + 110,
      ap: Math.floor(Math.random() * 10) + 1,
      cap: Math.floor(Math.random() * 10) + 1,
      imageURL: "./assets/images/Luke.jpeg"
    },

    {
      name: "Mace Windu",
      hp: Math.floor(Math.random() * 140) + 110,
      ap: Math.floor(Math.random() * 10) + 1,
      cap: Math.floor(Math.random() * 10) + 1,
      imageURL: "./assets/images/Mace_Windu.png"
    },

    {
      name: "Darth Maul",
      hp: Math.floor(Math.random() * 140) + 110,
      ap: Math.floor(Math.random() * 10) + 1,
      cap: Math.floor(Math.random() * 10) + 1,
      imageURL: "./assets/images/Darthmall.jpg"
    },

    {
      name: "Darth Vader",
      hp: Math.floor(Math.random() * 140) + 110,
      ap: Math.floor(Math.random() * 10) + 1,
      cap: Math.floor(Math.random() * 10) + 1,
      imageURL: "./assets/images/DarthVader.jpg"
    }
  ];
}
heroes = initializeHero();
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
    '" alt="hero image"/><p class="mb-0 ' +
    hero["name"].split(" ").join("-") +
    '-hp">' +
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
      heroes[i].name !== starWarsRPG.heroSelected &&
      starWarsRPG.opponentsDefeated.includes(heroes[i].name) !== true
    ) {
      $(enemyLocation)[0].innerHTML += establishCharacter(heroes[i]);
    }
  }
  $(".hero-holder").toggleClass(newClass);
}

// Selects Hero
function selectHerosEventListenerHolder() {
  $(".hero-holder").click(function() {
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
}
selectHerosEventListenerHolder();

// Select Opponent
$(".enemy-row").on("click", ".enemy", function(event) {
  if (starWarsRPG.gameStage === "opponentSelection") {
    starWarsRPG.opponentSelected = $(this)
      .attr("id")
      .split("-")
      .join(" ");
    $("#" + starWarsRPG.opponentSelected).remove();
    for (var i = 0; i < heroes.length; i++) {
      if (starWarsRPG.opponentSelected === heroes[i].name) {
        starWarsRPG.opponentObject = heroes[i];
        renderSelectedHero(
          i,
          ".defender-row",
          ".enemy-row",
          ".enemy-row",
          "enemy"
        );
      }
    }
    starWarsRPG.gameStage = "gameOn";
    console.log(starWarsRPG.gameStage);
  }
});

// initialize fight button
$(".fight").on("click", function(event) {
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
    refreshHPToDOM(selectedHero);
    refreshHPToDOM(enemyHero);
    console.log(enemyHero["hp"], selectedHero["hp"], selectedHero["ap"]);
  }
  if (enemyHero["hp"] <= 0) {
    $("#" + enemyHero["name"].split(" ").join("-")).remove();
    starWarsRPG.opponentsDefeated.push(enemyHero["name"]);
    console.log(starWarsRPG.opponentsDefeated);
    starWarsRPG.gameStage = "opponentSelection";
    starWarsRPG.opponentsRemain--;
    console.log(starWarsRPG.opponentsRemain);
  }

  if (starWarsRPG.opponentsRemain === 0) {
    console.log("no opponents remain");
    gameOver();
    $(".defender-row").append(`<h2>You won! Play again?</h2>`);
  }

  if (selectedHero["hp"] < 0) {
    gameOver();
    $(".picked-character").append(`<h2>You Lost! Play again?</h2>`);
  }
}

function refreshHPToDOM(character) {
  var newHP = character["hp"];
  var nameConversion = character["name"].split(" ").join("-");
  var characterHPName = `.${nameConversion}-hp`;
  $(characterHPName).text(newHP);
}

function gameOver() {
  $(".character-selection").html("");
  $(".picked-character").html("");
  $(".defender-row").html("");
  $(".enemy-row").html("");
  heroes = [];
  heroes = initializeHero();
  starWarsRPG.gameStage = "initial";
  console.log(starWarsRPG);
}

$(".restart").on("click", function() {
  starWarsRPG["gameStage"] = "initial";
  starWarsRPG["heroSelected"] = "";
  starWarsRPG["heroObject"] = "";
  starWarsRPG["opponentSelected"] = "";
  starWarsRPG["opponentObject"] = "";
  starWarsRPG["opponentsRemain"] = 3;
  starWarsRPG["opponentsDefeated"] = [];

  starWarsRPG["gameStage"] = "initial";
  starWarsRPG["gameStage"] = "initial";
  gameOver();
  renderHeroesAtLoad();
  selectHerosEventListenerHolder();
});
