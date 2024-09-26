var shiv = document.getElementById("Shivatmak");
var adhi = document.getElementById("adhiraj");
var prath = document.getElementById("prathit");

function CountVoters() {
  document.getElementById(`StartBtn`).style.display = "none";
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      let x = Math.floor(Math.random() * 3) + 1;

      // Ensure we increment only one candidate based on x
      if (x === 3) {
        shiv.value = parseInt(shiv.value) + 1;
      } else if (x === 2) {
        adhi.value = parseInt(adhi.value) + 1;
      } else {
        prath.value = parseInt(prath.value) + 1;
      }

      // Check if we are at the last iteration
      if (i === 999) {
        declareWinner(); // Call function to declare the winner
      }
    }, i ** 2 / 50); // Delay increases with each iteration
  }
}

function declareWinner() {
  const shivVotes = parseInt(shiv.value);
  const adhiVotes = parseInt(adhi.value);
  const prathVotes = parseInt(prath.value);
  const l = 1;
  let k = Math.max(shivVotes, adhiVotes, prathVotes);
  let winner;
  if (shivVotes > adhiVotes && shivVotes > prathVotes) {
    winner = "Shivatmak";
    shiv.value = shivVotes + 334;
  } else if (adhiVotes > shivVotes && adhiVotes > prathVotes) {
    winner = "Adhiraj";
    adhi.value = adhiVotes + 334;
  } else if (prathVotes > shivVotes && prathVotes > adhiVotes) {
    winner = "Prathit";
    prath.value = prathVotes + 334;
  } else {
    winner = "It's a tie!";
  }

  console.log(`The winner is: ${winner}`);
}
function gotow() {
  window.location.href = "counting.html";
}
