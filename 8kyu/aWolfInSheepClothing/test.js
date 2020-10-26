describe("Sample tests", function () {
  it("Tests", function () {
    Test.assertEquals(
      warnTheSheep([
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "wolf",
        "sheep",
        "sheep",
      ]),
      "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    );
    Test.assertEquals(
      warnTheSheep([
        "sheep",
        "wolf",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
      ]),
      "Oi! Sheep number 5! You are about to be eaten by a wolf!"
    );
    Test.assertEquals(
      warnTheSheep([
        "wolf",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
        "sheep",
      ]),
      "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    );
    Test.assertEquals(
      warnTheSheep(["sheep", "wolf", "sheep"]),
      "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    );
    Test.assertEquals(
      warnTheSheep(["sheep", "sheep", "wolf"]),
      "Pls go away and stop eating my sheep"
    );
  });
});
