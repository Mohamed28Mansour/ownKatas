Test.describe("Example tests", (_) => {
  Test.it("should handle example case", (_) => {
    Test.assertEquals(
      removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      ),
      "alpha beta gamma delta alpha beta gamma delta"
    );
  });
});
