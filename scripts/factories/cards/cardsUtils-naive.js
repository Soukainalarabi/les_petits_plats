export default function showCardsRecipes(recipeListe) {
    let cardElms = document.querySelectorAll(".card")
    let cards = document.querySelector(".cards")
    let msgErreur = document.getElementById("message-erreur")

    //on cache d'abord tous les cards des recipes
    for (const card of cardElms) {
        card.style.display = "none"
        cards.style.display = "block"
        msgErreur.style.display = "block"
    }

    //on affiche que les recipes passés en paramètre
    for (const res of recipeListe) {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
        msgErreur.style.display = "none"
        cards.style.display = "grid"
    }
}