
// const coinFlip = Math.random()
// if (coinFlip > 0.5) return


const videos = [120000, 28000, 10500, 39000, 60000]

const changezIndex = (event) => {

  const randomNumber = Math.floor(Math.random()*5)
  console.log("random number: ", randomNumber)

  document.querySelectorAll(".video").forEach((video, index) => {
    if(index === randomNumber){
      video.style["z-index"] = 10
    } else {
      video.style["z-index"] = 1
    }
  })
const coinFlip = Math.random()
const timeToPlay = coinFlip > 0.5 ? videos[randomNumber] : 5000
  setTimeout(changezIndex, timeToPlay)
}
changezIndex()
