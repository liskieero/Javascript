////////////////////////////////////////////////////////////////////////////////
function droppingDuplicatedCharacter(s, arr) {
  let arrJoin = arr.join("");
  let re;
  let newS = s;

  for (letter of arrJoin) {
    re = new RegExp(letter, "g");
    newS = newS.replace(re, "");
  }
  return newS[0];
}


function firstNotRepeatingCharacter(s) {
  let objRep = {};
  let objInd = {};
  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    if (objRep[s[i]] === undefined) {
      objRep[s[i]] = s[i];
    } else {
      objInd[s[i]] = s.lastIndexOf(s[i]);
    }
  }

  const ans = droppingDuplicatedCharacter(s, Object.keys(objInd));
  if (ans !== undefined) {
    return ans;
  } else {
    return '_';
  }
}
////////////////////////////////////////////////////////////////////////////////

const s = "abacabad";
// const s = "abacabaabacaba";
firstNotRepeatingCharacter(s);



// demo code
const s = "abacabad";
let arr = ["a", "b"];
let arrJoin = arr.join("");
let re;
let newS = s;

for (letter of arrJoin) {
  re = new RegExp(letter, "g");
  newS = newS.replace(re, "");
}
