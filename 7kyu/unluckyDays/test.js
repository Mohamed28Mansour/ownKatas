Test.describe("Basic Tests", (_) => {
  Test.assertEquals(unluckyDays(1586), 1, "should be: 1");
  Test.assertEquals(unluckyDays(1001), 3, "should be: 3");
  Test.assertEquals(unluckyDays(2819), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2792), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2723), 2, "should be: 2");
  Test.assertEquals(unluckyDays(1909), 1, "should be: 1");
  Test.assertEquals(unluckyDays(1812), 2, "should be: 2");
  Test.assertEquals(unluckyDays(1618), 2, "should be: 2");
  Test.assertEquals(unluckyDays(2132), 1, "should be: 1");
  Test.assertEquals(unluckyDays(2065), 3, "should be: 3");
});
