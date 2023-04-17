export default function showCardsRecipes(recipeListe) {
    let cardElms = document.querySelectorAll(".card")
    let cards = document.querySelector(".cards")
    let msgErreur = document.getElementById("message-erreur")
    cardElms.forEach(card => {
        card.style.display = "none"
        cards.style.display = "block"
        msgErreur.style.display = "block"
    })
    recipeListe.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
        msgErreur.style.display = "none"
        cards.style.display = "grid"
    })
}