const videos = [120000, 28000, 105000, 49000, 23000, 39000]

const changeVideo = (event) => {

  const randomNumber = Math.floor(Math.random()*7)
  console.log("random number: ", randomNumber)

  document.querySelectorAll(".video").forEach((video, index) => {
    if(index === randomNumber){
      video.style["z-index"] = 10
    } else {
      video.style["z-index"] = 1
    }
  })

  // document.querySelectorAll(".svg-dice").forEach((svg, index) => {
  //   if(index === randomNumber){
  //     svg.style["display"] = "block";
  //   } else {
  //     svg.style["display"] = "none";
  //   }
  // })

const coinFlip = Math.random()
const timeToPlay = coinFlip > 0.5 ? videos[randomNumber] : 5000
  setTimeout(changeVideo, timeToPlay)
  // setTimeout(changeVideo, 5000)
}
changeVideo()
