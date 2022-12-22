const url = 'http://localhost:3000/ramens'
let currentRamen
let ramenList

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        ramenList = data
        currentRamen = ramenList[0]
        ramenList.map((ramens) => {
            renderImage(ramens)
            displayInfo(ramenList[0])
        })
        
        
    })




function renderImage(ramens) {
    const ramenImage = document.querySelector('#ramen-menu')
    const img = document.createElement('img')
    //li.textContent = "hi"
    img.src = ramens.image
    ramenImage.append(img)

    img.addEventListener('click', () => {
        currentRamen = ramens
        displayInfo(ramens)
    })
}

const detailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const restaurantName = document.querySelector('.restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')


function displayInfo (ramens) {
    detailImage.src = ramens.image
    ramenName.textContent = ramens.name
    restaurantName.textContent = ramens.restaurant
    rating.textContent = ramens.rating
    comment.textContent = ramens.comment

}


const form = document.querySelector('#new-ramen')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log("Submitted!")

    let body = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
        image: e.target.image.value
    }

    displayInfo(body)
    renderImage(body)
})

