document.getElementById("Calculate").addEventListener("click", callHitOrStand);
const out = document.getElementById('output');

function callHitOrStand() {
    out.innerHTML = hitOrStand(document.getElementById("First").value, document.getElementById("Second").value, document.getElementById("Third").value);
}

// Function to determine if user should hit, stand, double, or split
// @Param firstCard, secondCard, dealerCard 
// @Return "Hit", "Stand", "Double", "Split"
function hitOrStand(firstCard, secondCard, dealerCard) {

    // Set all face cards to equal 10
    if((firstCard === "J") || (firstCard == "Q") || (firstCard == "K")) {
        firstCard = 10
    }
    if((secondCard === "J") || (secondCard == "Q") || (secondCard == "K")) {
        secondCard = 10
    }
    if((dealerCard === "J") || (dealerCard == "Q") || (dealerCard == "K")) {
        dealerCard = 10
    }
    let playerHand = +firstCard + +secondCard;

    if((firstCard == 10) && (secondCard == 10)) {
        return "stand"
    }
    // Player is given two 9's
    else if((firstCard == 9) && (secondCard == 9)) {
        if((dealerCard == 7) || (dealerCard == 10) || (dealerCard = "A")) {
            return "stand"
        }
        return "split"
    }
    // Player is given two 8's
    else if((firstCard == 8) && (secondCard == 8)) {
        return "split"
    }
    // Player is given two 7's
    else if((firstCard == 7) && (secondCard == 7)) {
        if(dealerCard <= 7) {
            return "split"
        }
        "hit"
    }
    // Player is given two 6's
    else if((firstCard == 6) && (secondCard == 6)) {
        if(dealerCard <= 6) {
            return "split"
        }
        return "hit"
    }
    // Player is given two 5's
    else if((firstCard == 5) && (secondCard == 5)) {
        if(dealerCard <= 9) {
            return "double"
        }
        return "hit"
    }
    // Player is given two 4's
    else if((firstCard == 4) && (secondCard == 4)) {
        return "hit"
    }
    // Player is given two 3's
    else if((firstCard == 3) && (secondCard == 3)) {
        if((dealerCard <= 7) && (dealerCard >= 4)) {
            return "split"
        }
        return "hit"
    }
    // Player is given two 2's
    else if((firstCard == 2) && (secondCard == 2)) {
        if((dealerCard <= 7) && (dealerCard >= 4)) {
            return "split"
        }
        return "hit"
    }
    // Player is given at least one Ace
    else if ((firstCard === "A") || (secondCard === "A")) {

        // Two aces
        if(firstCard == secondCard) {
            return "split"
        }
        // Ace and a 9
        else if((firstCard == 9) || (secondCard == 9)) {
            return "stand"
        }
        // Ace and an 8
        else if((firstCard == 8) || (secondCard == 8)) {
            return "stand"
        }
        // Ace and a 7
        else if((firstCard == 7) || (secondCard == 7)) {
            if((dealerCard >= 3) && (dealerCard <= 6)) {
                return "double"
            }
            else if((dealerCard == 2) || (dealerCard == 7) || (dealerCard == 8)) {
                return "stand"
            }
            return "hit"
        }
        // Ace and a 6, 5, 4, 3, or 2
        else if((firstCard == 6) || (secondCard == 6) || (firstCard == 5) || (secondCard == 5) || (firstCard == 4) || (secondCard == 4) ||
        (firstCard == 3) || (secondCard == 3) || (firstCard == 2) || (secondCard == 2)) {
            if((dealerCard >= 4) && (dealerCard <= 6)) {
                return "double"
            }
            return "hit"
        }
    }
    // Neither of players cards are aces
    // Player hand is 13 - 16
    else if((playerHand >= 13) && (playerHand <= 16)) {
        if(dealerCard <= 6) {
            return "stand"
        }
        else return "hit"
    }
    // Player hand is 12
    else if(playerHand == 12) {
        if((dealerCard >= 4) && (dealerCard <= 6)) {
            return "stand"
        }
        return "hit"
    }
    // Player hand is 11
    else if(playerHand == 11) {
        return "double"
    }
    // Player hand is 10
    else if(playerHand == 10) {
        if(dealerCard <= 9) {
            return "double"
        }
        return "hit"
    }
    //Player hand is 9
    else if(playerHand == 9) {
        if((dealerCard >= 3) && (dealerCard <= 6)) {
            return "double"
        }
        return "hit"
    }
    //Player hand is 17+
    else if(playerHand >= 17) {
        return "stand"
    }
    return "hit"
}



