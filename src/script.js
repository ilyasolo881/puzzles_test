const PUZZLES_PARTS =
  "942517 605676 498291 668826 357057 478151 315629 007148 252887 421662 284505 467650 115330 648206 207562 612298 576885 294200 847595 021597 074878 801997 585401 168510 385293 151863 022142 340350 976151 337989 863284 488310 303887 939173 331413 905657 833617 170794 094486 551394 943693 147970 400196 537505 367493 117178 675840 868721 519081 735564 401733 915348 169233 324651 958675 368753 861460 401341 343222 794373 816374 535119 188234 577779 097792 729303 782637 148159 830641 716890 397853 871196 277603 749226 839595 131852 409432 810698 456030 529185 758823 265024 051041 699031 737269 139340 730977 249786 039931 055669 100107 653178 279773 336550 332847 685485 423269 193536 890062 377637 595777 412134 322736 546929 616370 767332 781184 920944 851005 258850 064083 051202 427711 359855 540928 314284 085261 880969 649699 064881 705423 646927 252556 272007 217511 620286 229724 108865 124636 231417 961201 658432 775416 246027 854036 687762 389097 013153 417085 919198 988711 488665";

function LongestPuzzlesCombination(StringOfPuzzlesParts) {
  const PUZZLES = StringOfPuzzlesParts.split(" ");

  let RESULT_PUZZLE = [];

  for (let i = 0; i < PUZZLES.length; i++) {
    const FIRST_PUZZLE = PUZZLES[i]; //
    const PUZZLES_COPPY = PUZZLES.slice();
    const TEST_ARR = [];

    TEST_ARR.push(FIRST_PUZZLE);
    PUZZLES_COPPY.splice(i, 1);

    while (true) {
      const PUZZLE_NEXT = PUZZLES_COPPY.find(
        (PUZZLE_CURRENT) =>
          PUZZLE_CURRENT.slice(0, 2) ===
          TEST_ARR[TEST_ARR.length - 1].slice(4, 6)
      );

      if (PUZZLE_NEXT === undefined) {
        break;
      }

      const PUZZLE_NEXT_INDEX = PUZZLES_COPPY.indexOf(PUZZLE_NEXT);

      TEST_ARR.push(PUZZLE_NEXT);
      PUZZLES_COPPY.splice(PUZZLE_NEXT_INDEX, 1);
    }

    if (RESULT_PUZZLE.length < TEST_ARR.length) {
      RESULT_PUZZLE = TEST_ARR;
    }
  }

  const RESULT_STRING = RESULT_PUZZLE.reduce(
    (RESULT_STRING, PUZZLE, PUZZLE_INDEX, PUZZLE_ARRAY) => {
      if (PUZZLE_INDEX === PUZZLE_ARRAY.length - 1) {
        return (RESULT_STRING += PUZZLE);
      }

      return (RESULT_STRING += PUZZLE.slice(0, 4));
    },
    ""
  );

  return RESULT_STRING;
}

const longestPuzzle = LongestPuzzlesCombination(PUZZLES_PARTS);
const longestPuzzleDiv = document.querySelector(".puzzle__text");

console.log(`Longest puzzles combination: ${longestPuzzle}`);

longestPuzzleDiv.innerHTML = `Longest puzzles combination: ${longestPuzzle}`;
