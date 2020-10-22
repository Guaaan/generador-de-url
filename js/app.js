

  let pronoun = ["the", "our", "inthe", 'her', 'his', 'in'];
  let adj = [ "great", "big", "last", "first", "bad", "ugly", "sad", "alcoholic",];
  let noun = [ "jogger", "racoon", "hour", "adventure", "cat", "helicopter", "garden", 'dog'];
  let com = [".com", ".net", ".io", ".cl", ".es", 'edu', 'col'];
  
  //let proIndex = Math.floor(Math.random() * pronoun.length);
  //let adjIndex = Math.floor(Math.random() * adj.length);
  //let nounIndex = Math.floor(Math.random() * noun.length);
  //let comIndex = Math.floor(Math.random() * com.length);
  
  //return pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + com[comIndex];
  
  for (let h = 0; h < pronoun.length; h++){
    for (let i = 0; i < adj.length; i++){
      for (let j = 0; j < noun.length; j++){
        for (let k = 0; k < com.length; k++){
         console.log(pronoun[h] + adj[i] + noun[j] + com[k]);
        }
      }
    }
  }