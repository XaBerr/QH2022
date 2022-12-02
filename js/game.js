//  INIT
kaboom({
  background: [10, 10, 10],
  // background: [134, 135, 247],
  width: 1000,
  height: 240 * 2,
  scale: 2,
});
// loadSprite("background", "../img/background.jpg");
// add([sprite("background")]);

let currentQuantumState = [
  { "label": "|JN>+|NJ>", "active": false },
  { "label": "|NJ>+|JN>", "active": false },
  { "label": "|JJ>+|NN>", "active": false },
  { "label": "|NN>+|JJ>", "active": false },
  { "label": "|JN>", "active": false },
  { "label": "|NJ>", "active": false },
  { "label": "|JJ>", "active": false },
  { "label": "|NN>", "active": false },
];

loadRoot("../img/sprites/");
loadSprite("quantum", "quantum.png");

// ASSETS
// mushroom island
loadAseprite("mario", "Mario.png", "Mario.json");
loadAseprite("enemies", "enemies.png", "enemies.json");
loadAseprite("enemies-ud", "enemies-ud.png", "enemies-ud.json");
loadSprite("ground", "ground.png");
loadSprite("questionBox", "questionBox.png");
loadSprite("emptyBox", "emptyBox.png");
loadSprite("brick", "brick.png");
loadSprite("coin", "coin.png");
loadSprite("bigMushy", "bigMushy.png");
loadSprite("pipeTop", "pipeTop.png");
loadSprite("pipeBottom", "pipeBottom.png");
loadSprite("shrubbery", "shrubbery.png");
loadSprite("hill", "hill.png");
loadSprite("cloud", "cloud.png");
loadSprite("castle", "laboratory.png");

// upsidedown
loadAseprite("demogorgon", "demogorgon.png", "demogorgon.json");
loadAseprite("enemies-ud", "enemies-ud.png", "enemies-ud.json");
loadSprite("ground-ud", "ground-ud.png");
loadSprite("questionBox-ud", "questionBox-ud.png");
loadSprite("emptyBox-ud", "emptyBox-ud.png");
loadSprite("brick-ud", "brick-ud.png");
loadSprite("coin-ud", "coin-ud.png");
loadSprite("bigMushy-ud", "bigMushy-ud.png");
loadSprite("pipeTop-ud", "pipeTop-ud.png");
loadSprite("pipeBottom-ud", "pipeBottom-ud.png");
loadSprite("shrubbery-ud", "shrubbery-ud.png");
loadSprite("hill-ud", "hill-ud.png");
loadSprite("cloud-ud", "cloud-ud.png");
loadSprite("castle-ud", "laboratory-ud.png");

// LEVELS
const LEVELS = [
  [
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "      -?-b-                                                                                     ",
    "                                                    ?        ?                                  ",
    "                                      Q                                                         ",
    "                                      _                 ?                                       ",
    "                                 _    |                                                         ",
    "           Q               _     |    |                _         Q                              ",
    "   Q   e     e             |  e  |    |   e   e        |    e    e    e             H           ",
    "================     ===========================================================================",
    "================     ===========================================================================",

    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "                                                                                                ",
    "      +!+B+                                                                                     ",
    "                                                    !        !                                  ",
    "                                      Q                                                         ",
    "                                      L                 !                                       ",
    "                                 L    T                                                         ",
    "          Q                L     T    T                L         Q                              ",
    "       E     E             T  E  T    T   E   E        T    E    E    E             H           ",
    "################     ###########################################################################",
    "################     ###########################################################################",
  ],
  // [
  //   "                                                                                             ",
  //   "                                                                                             ",
  //   "                                                                                             ",
  //   "                                       ?                                                     ",
  //   "                                                                                             ",
  //   "                                   -?-                                                       ",
  //   "                                                                                             ",
  //   "      -?-b-                  -?-                                                             ",
  //   "                                                                                             ",
  //   "                                                                                             ",
  //   "                                                                                             ",
  //   "                                                                                             ",
  //   "       _                                            _                                        ",
  //   "       |                                            |          E    E            H           ",
  //   "================     ========================================================================",
  //   "================     ========================================================================",
  // ]
];

const levelConf = {
  // grid size
  width: 16,
  height: 16,
  pos: vec2(0, 0),
  // define each object as a list of components
  "Q": () => [
    sprite("quantum"),
    area(),
    solid(),
    origin("bot"),
    'quantum'
  ],
  "O": () => [
    sprite("emptyBox"),
    area(),
    solid(),
    bump(),
    origin("bot"),
    'emptyBox'
  ],
  "=": () => [
    sprite("ground"),
    area(),
    solid(),
    origin("bot"),
    "ground"
  ],
  "-": () => [
    sprite("brick"),
    area(),
    solid(),
    origin("bot"),
    "brick"
  ],
  "H": () => [
    sprite("castle"),
    area({ width: 1, height: 240 }),
    origin("bot"),
    "castle"
  ],
  "?": () => [
    sprite("questionBox"),
    area(),
    solid(),
    origin("bot"),
    'questionBox',
    'coinBox'
  ],
  "b": () => [
    sprite("questionBox"),
    area(),
    solid(),
    origin("bot"),
    'questionBox',
    'mushyBox'
  ],
  "c": () => [
    sprite("coin"),
    area(),
    solid(),
    bump(64, 8),
    cleanup(),
    lifespan(0.4, { fade: 0.01 }),
    origin("bot"),
    "coin"
  ],
  "M": () => [
    sprite("bigMushy"),
    area(),
    solid(),
    patrol(10000),
    body(),
    cleanup(),
    origin("bot"),
    "bigMushy"
  ],
  "|": () => [
    sprite("pipeBottom"),
    area(),
    solid(),
    origin("bot"),
    "pipe"
  ],
  "_": () => [
    sprite("pipeTop"),
    area(),
    solid(),
    origin("bot"),
    "pipe"
  ],
  "e": () => [
    sprite("enemies", { anim: 'Walking' }),
    area({ width: 16, height: 16 }),
    solid(),
    body(),
    patrol(50),
    enemy(),
    origin("bot"),
    "badGuy"
  ],
  "p1": () => [
    sprite("mario", { frame: 0 }),
    area({ width: 16, height: 16 }),
    body(),
    mario(),
    bump(150, 20, false),
    origin("bot"),
    "playerMario"
  ],
  "@": () => [
    sprite("emptyBox-ud"),
    area(),
    solid(),
    bump(),
    origin("bot"),
    'emptyBox'
  ],
  "#": () => [
    sprite("ground-ud"),
    area(),
    solid(),
    origin("bot"),
    "ground"
  ],
  "+": () => [
    sprite("brick-ud"),
    area(),
    solid(),
    origin("bot"),
    "brick"
  ],
  "H": () => [
    sprite("castle"),
    area({ width: 1, height: 240 }),
    origin("bot"),
    "castle"
  ],
  "!": () => [
    sprite("questionBox-ud"),
    area(),
    solid(),
    origin("bot"),
    'questionBox',
    'coinBox'
  ],
  "B": () => [
    sprite("questionBox-ud"),
    area(),
    solid(),
    origin("bot"),
    'questionBox',
    'mushyBox'
  ],
  "C": () => [
    sprite("coin"),
    area(),
    solid(),
    bump(64, 8),
    cleanup(),
    lifespan(0.4, { fade: 0.01 }),
    origin("bot"),
    "coin"
  ],
  "M": () => [
    sprite("bigMushy-ud"),
    area(),
    solid(),
    patrol(10000),
    body(),
    cleanup(),
    origin("bot"),
    "bigMushy"
  ],
  "T": () => [
    sprite("pipeBottom-ud"),
    area(),
    solid(),
    origin("bot"),
    "pipe"
  ],
  "U": () => [
    sprite("pipeTop-ud"),
    area(),
    solid(),
    origin("bot"),
    "pipe"
  ],
  "E": () => [
    sprite("enemies-ud", { anim: 'Walking' }),
    area({ width: 16, height: 16 }),
    solid(),
    body(),
    patrol(50),
    enemy(),
    origin("bot"),
    "badGuy"
  ],
  "L": () => [
    sprite("pipeTop-ud"),
    area(),
    solid(),
    origin("bot"),
    "pipe"
  ],
  "p2": () => [
    sprite("demogorgon", { frame: 0 }),
    area({ width: 16, height: 16 }),
    body(),
    demogorgon(),
    bump(150, 20, false),
    origin("bot"),
    "playerDemogorgon"
  ]
};

// START SCENE
scene("start", () => {
  go("game");
  // add([
  //   text("Press enter to start", { size: 24 }),
  //   pos(vec2(160, 120)),
  //   origin("center"),
  //   color(255, 255, 255),
  // ]);

  // onKeyRelease("enter", () => {
  //   go("game");
  // })
});

go("start");

// GAME SCENE
scene("game", (levelNumber = 0) => {

  layers([
    "bg",
    "game",
    "ui",
  ], "game");


  const level = addLevel(LEVELS[levelNumber], levelConf);

  add([
    sprite("cloud"),
    pos(20, 50),
    layer("bg")
  ]);

  add([
    sprite("hill"),
    pos(32, 208),
    layer("bg"),
    origin("bot")
  ])

  add([
    sprite("shrubbery"),
    pos(200, 208),
    layer("bg"),
    origin("bot")
  ])

  add([
    text("Level " + (levelNumber + 1), { size: 24 }),
    pos(vec2(160, 120)),
    color(255, 255, 255),
    origin("center"),
    layer('ui'),
    lifespan(1, { fade: 0.5 })
  ]);

  const playerMario = level.spawn("p1", 1, 9)

  // Player Mario movements
  const SPEED = 120;

  onKeyDown("right", () => {
    if (playerMario.isFrozen) return;
    playerMario.flipX(false);
    playerMario.move(SPEED, 0);
  });

  onKeyDown("left", () => {
    if (playerMario.isFrozen) return;
    playerMario.flipX(true);
    if (toScreen(playerMario.pos).x > 20) {
      playerMario.move(-SPEED, 0);
    }
  });

  onKeyPress("space", () => {
    if (playerMario.isAlive && playerMario.grounded()) {
      playerMario.jump();
      canSquashMario = true;
    }
  });

  playerMario.onUpdate(() => {
    // center camera to playerMario
    var currCam = camPos();
    if (currCam.x < playerMario.pos.x) {
      camPos(playerMario.pos.x, currCam.y);
    }
    if (playerMario.isAlive && playerMario.grounded()) {
      canSquashMario = false;
    }
    // Check if Mario has fallen off the screen
    if (playerMario.pos.y > height() - 16) {
      killed(playerMario, "mario");
    }
  });

  // Killing enemies
  let canSquashMario = false;

  playerMario.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false) return;
    if (canSquashMario) {
      // Mario has jumped on the bad guy:
      baddy.squash();
    } else {
      // Mario has been hurt. Add logic here later...
    }
  });

  // Blocks breaking
  playerMario.on("headbutt", (obj) => {
    if (obj.is("questionBox")) {
      if (obj.is("coinBox")) {
        let coin = level.spawn("c", obj.gridPos.sub(0, 1));
        coin.bump();
      } else
        if (obj.is("mushyBox")) {
          level.spawn("M", obj.gridPos.sub(0, 1));
        }
      var pos = obj.gridPos;
      destroy(obj);
      var box = level.spawn("O", pos);
      box.bump();
    }
  });

  // Other actions
  playerMario.onCollide("bigMushy", (mushy) => {
    destroy(mushy);
    playerMario.bigger();
  });

  playerMario.onCollide("quantum", (quantum) => {
    destroy(quantum);
    // playerMario.bigger();
    currentQuantumState.forEach(element => {
      element["active"] = false;
    });
    quantumStatePos = Math.floor(Math.random() * currentQuantumState.length);
    currentQuantumState[quantumStatePos]["active"] = true;
    add([
      text(currentQuantumState[quantumStatePos]["label"], { size: 24 }),
      pos(toWorld(vec2(300, 234))),
      color(255, 255, 255),
      origin("center"),
      layer('ui'),
      fixed(),
      lifespan(4, { fade: 0.5 })
    ]);
  });

  playerMario.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false) return;
    if (playerMario.isAlive == false) return;
    if (canSquashMario) {
      // Mario has jumped on the bad guy:
      baddy.squash();
    } else {
      // Mario has been hurt
      if (playerMario.isBig) {
        playerMario.smaller();
      } else {
        // Mario is dead :(
        killed(playerMario, "mario");
      }
    }
  });

  function killed(_player, _id) {
    // Mario is dead :(
    if (_player.isAlive == false) return; // Don't run it if mario is already dead
    _player.die();
    if (_id == "mario") {
      add([
        text("Game Over :(", { size: 24 }),
        pos(toWorld(vec2(160, 120))),
        color(255, 255, 255),
        origin("center"),
        layer('ui'),
      ]);
      add([
        text("Game Win :)", { size: 24 }),
        pos(toWorld(vec2(160, 320))),
        color(255, 255, 255),
        origin("center"),
        layer('ui'),
      ]);
    } else {
      add([
        text("Game Over :(", { size: 24 }),
        pos(toWorld(vec2(160, 320))),
        color(255, 255, 255),
        origin("center"),
        layer('ui'),
      ]);
      add([
        text("Game Win :)", { size: 24 }),
        pos(toWorld(vec2(160, 120))),
        color(255, 255, 255),
        origin("center"),
        layer('ui'),
      ]);
    }
    wait(2, () => {
      go("start");
    })
  }

  playerMario.onCollide("castle", (castle, side) => {
    playerMario.freeze();
    add([
      text("Well Done!", { size: 24 }),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer('ui'),
    ]);
    wait(1, () => {
      let nextLevel = levelNumber + 1;

      if (nextLevel >= LEVELS.length) {
        go("start");
      } else {
        go("game", nextLevel);
      }
    })
  });

  // Player demogorgon
  const playerDemogorgon = level.spawn("p2", 1, 12 + 9)

  onKeyDown("d", () => {
    if (playerDemogorgon.isFrozen) return;
    playerDemogorgon.flipX(false);
    playerDemogorgon.move(SPEED, 0);
  });

  onKeyDown("a", () => {
    if (playerDemogorgon.isFrozen) return;
    playerDemogorgon.flipX(true);
    if (toScreen(playerDemogorgon.pos).x > 20) {
      playerDemogorgon.move(-SPEED, 0);
    }
  });

  onKeyPress("w", () => {
    if (playerDemogorgon.isAlive && playerDemogorgon.grounded()) {
      playerDemogorgon.jump();
      canSquashDemogorgon = true;
    }
  });

  playerDemogorgon.onUpdate(() => {
    // center camera to playerDemogorgon
    var currCam = camPos();
    if (currCam.x < playerDemogorgon.pos.x) {
      camPos(playerDemogorgon.pos.x, currCam.y);
    }
    if (playerDemogorgon.isAlive && playerDemogorgon.grounded()) {
      canSquashDemogorgon = false;
    }
    // Check if Demogorgon has fallen off the screen
    if (playerDemogorgon.pos.y > height() - 16) {
      killed(playerDemogorgon, "demogorgon");
    }
  });

  let canSquashDemogorgon = false;

  // Killing enemies
  playerDemogorgon.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false) return;
    if (canSquashDemogorgon) {
      // Demogorgon has jumped on the bad guy:
      baddy.squash();
    } else {
      // Demogorgon has been hurt. Add logic here later...
    }
  });

  // Blocks breaking
  playerDemogorgon.on("headbutt", (obj) => {
    if (obj.is("questionBox")) {
      if (obj.is("coinBox")) {
        let coin = level.spawn("c", obj.gridPos.sub(0, 1));
        coin.bump();
      } else
        if (obj.is("mushyBox")) {
          level.spawn("M", obj.gridPos.sub(0, 1));
        }
      var pos = obj.gridPos;
      destroy(obj);
      var box = level.spawn("@", pos);
      box.bump();
    }
  });

  // Other actions
  playerDemogorgon.onCollide("bigMushy", (mushy) => {
    destroy(mushy);
    playerDemogorgon.bigger();
  });

  playerDemogorgon.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false) return;
    if (playerDemogorgon.isAlive == false) return;
    if (canSquashDemogorgon) {
      // Demogorgon has jumped on the bad guy:
      baddy.squash();
    } else {
      // Demogorgon has been hurt
      if (playerDemogorgon.isBig) {
        playerDemogorgon.smaller();
      } else {
        // Demogorgon is dead :(
        killed(playerDemogorgon, "demogorgon");
      }
    }
  });

  playerDemogorgon.onCollide("castle", (castle, side) => {
    playerDemogorgon.freeze();
    add([
      text("Well Done!", { size: 24 }),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer('ui'),
    ]);
    wait(1, () => {
      let nextLevel = levelNumber + 1;

      if (nextLevel >= LEVELS.length) {
        go("start");
      } else {
        go("game", nextLevel);
      }
    })
  });

});

function customComponent(args) {
  return {
    id: "name",
    require: ["component1", "component2",],
    add() {
    },
    update() {
    },
  };
}

function patrol(distance = 100, speed = 50, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area",],
    startingPos: vec2(0, 0),
    add() {
      this.startingPos = this.pos;
      this.on("collide", (obj, side) => {
        if (side === "left" || side === "right") {
          dir = -dir;
        }
      });
    },
    update() {
      if (Math.abs(this.pos.x - this.startingPos.x) > distance) {
        if (this.pos.x > this.startingPos.x) {
          dir = -Math.abs(dir);
        } else {
          dir = Math.abs(dir);
        }
      }
      this.move(speed * dir, 0);
    },
  };
}

function enemy() {
  return {
    id: "enemy",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update() {
    },
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 2;
      this.area.width = 16;
      this.area.height = 8;
      this.use(lifespan(0.5, { fade: 0.1 }));
    }
  }
}

function bump(offset = 8, speed = 2, stopAtOrigin = true) {
  return {
    id: "bump",
    require: ["pos"],
    bumpOffset: offset,
    speed: speed,
    bumped: false,
    origPos: 0,
    direction: -1,
    update() {
      if (this.bumped) {
        this.pos.y = this.pos.y + this.direction * this.speed;
        if (this.pos.y < this.origPos - this.bumpOffset) {
          this.direction = 1;
        }
        if (stopAtOrigin && this.pos.y >= this.origPos) {
          this.bumped = false;
          this.pos.y = this.origPos;
          this.direction = -1;
        }
      }
    },
    bump() {
      this.bumped = true;
      this.origPos = this.pos.y;
    }
  };
}

function mario() {
  return {
    id: "mario",
    require: ["body", "area", "sprite", "bump"],
    smallAnimation: "Running",
    bigAnimation: "RunningBig",
    smallStopFrame: 0,
    bigStopFrame: 8,
    smallJumpFrame: 5,
    bigJumpFrame: 13,
    isBig: false,
    isFrozen: false,
    isAlive: true,
    update() {
      if (this.isFrozen) {
        this.standing();
        return;
      }

      if (!this.grounded()) {
        this.jumping();
      }
      else {
        if (keyIsDown("left") || keyIsDown("right")) {
          this.running();
        } else {
          this.standing();
        }
      }
    },
    bigger() {
      this.isBig = true;
      this.area.width = 24;
      this.area.height = 32;
    },
    smaller() {
      this.isBig = false;
      this.area.width = 16;
      this.area.height = 16;
    },
    standing() {
      this.stop();
      this.frame = this.isBig ? this.bigStopFrame : this.smallStopFrame;
    },
    jumping() {
      this.stop();
      this.frame = this.isBig ? this.bigJumpFrame : this.smallJumpFrame;
    },
    running() {
      const animation = this.isBig ? this.bigAnimation : this.smallAnimation;
      if (this.curAnim() !== animation) {
        this.play(animation);
      }
    },
    freeze() {
      this.isFrozen = true;
    },
    die() {
      this.unuse("body");
      this.bump();
      this.isAlive = false;
      this.freeze();
      this.use(lifespan(1, { fade: 1 }));
    }
  }
}

function demogorgon() {
  return {
    id: "demogorgon",
    require: ["body", "area", "sprite", "bump"],
    smallAnimation: "Running",
    bigAnimation: "RunningBig",
    smallStopFrame: 0,
    bigStopFrame: 8,
    smallJumpFrame: 5,
    bigJumpFrame: 13,
    isBig: false,
    isFrozen: false,
    isAlive: true,
    update() {
      if (this.isFrozen) {
        this.standing();
        return;
      }

      if (!this.grounded()) {
        this.jumping();
      }
      else {
        if (keyIsDown("a") || keyIsDown("d")) {
          this.running();
        } else {
          this.standing();
        }
      }
    },
    bigger() {
      this.isBig = true;
      this.area.width = 24;
      this.area.height = 32;
    },
    smaller() {
      this.isBig = false;
      this.area.width = 16;
      this.area.height = 16;
    },
    standing() {
      this.stop();
      this.frame = this.isBig ? this.bigStopFrame : this.smallStopFrame;
    },
    jumping() {
      this.stop();
      this.frame = this.isBig ? this.bigJumpFrame : this.smallJumpFrame;
    },
    running() {
      const animation = this.isBig ? this.bigAnimation : this.smallAnimation;
      if (this.curAnim() !== animation) {
        this.play(animation);
      }
    },
    freeze() {
      this.isFrozen = true;
    },
    die() {
      this.unuse("body");
      this.bump();
      this.isAlive = false;
      this.freeze();
      this.use(lifespan(1, { fade: 1 }));
    }
  }
}