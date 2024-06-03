const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
    let longestAvenger = "";
    for (const avenger of avengers) {
      if (avenger.length > longestAvenger.length) {
        longestAvenger = avenger;
      }
    }
    console.log(longestAvenger);
}
findLongestWord(avengers);