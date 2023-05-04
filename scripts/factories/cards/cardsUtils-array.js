export default function showCardsRecipes(recipeListe) {
    let cardElms = document.querySelectorAll(".card")
    let cards = document.querySelector(".cards")
    let msgErreur = document.getElementById("message-erreur")
    //on cache d'abord tous les cards des recipes
    cardElms.forEach(card => {
        card.style.display = "none"
        cards.style.display = "block"
        msgErreur.style.display = "block"
    })
    //on affiche que les recipes passés en paramètre
    recipeListe.forEach(res => {
        document.getElementById(`recipe-${res.id}`).style.display = "block"
        msgErreur.style.display = "none"
        cards.style.display = "grid"
    })
}