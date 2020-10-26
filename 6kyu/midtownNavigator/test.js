Test.assertEquals(
  midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"),
  "Walk 2 blocks south, and 1 blocks east"
);
Test.assertEquals(
  midtownNav("5th Ave and W 46th St", "7th Ave and E 58th St"),
  "Walk 12 blocks north, and 2 blocks west"
);
