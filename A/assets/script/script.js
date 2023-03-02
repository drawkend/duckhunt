let gameName = "Mario";

function test(a) {
    let result;
    if (a === "Sonic") {
      result = 'cest bien';
    } else if (a === 'Doom') {
      result = 'nul';
    } else {
        result = "Inconnu";
    }
    return result;
  }
  
  console.log(test(gameName));



