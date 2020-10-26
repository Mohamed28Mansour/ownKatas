// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s) {
  let unique = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      unique.push(s[i]);
    }
  }
  return unique.join(" ");
}
