/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let pronoun = ["the", "our", "my", "her"];
  let adj = ["great", "big", "stupid", "nice"];
  let noun = ["jogger", "racoon", "bike", "sandwich"];

  function newDomain(pronoun, adj, noun) {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let domain = pronoun[i] + adj[j] + noun[k] + ".com";

          console.log(domain);
        }
      }
    }
  }
  newDomain(pronoun, adj, noun);
};
