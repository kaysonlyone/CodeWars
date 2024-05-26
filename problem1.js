//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.the output should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name){
    // code away
  const nameArray = name.split(" ");
  const firstInitial = nameArray[0][0].toUpperCase();
  const secondInitial = nameArray[1][0].toUpperCase();
  return `${firstInitial}.${secondInitial}`;
}


//I initially faced a challenge with structuring the problem but was able to work through it.