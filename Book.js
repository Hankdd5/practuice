imagesForAll = ["bookcover.png", "f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg", "f5.jpg", "f6.jpg", "f7.jpg"]
count = 0
document.getElementById("RightButton").addEventListener("click", () =>{
    if(count >= 7){
        console.log("king")
        count = -1
    }
    console.log(count)
    count += 1
    document.getElementById("imageForAll").src = `image/${imagesForAll[count]}`
    console.log(count)
})
document.getElementById("LeftButton").addEventListener("click", () =>{
    if(count == 0){
        count = 7
    }
    count -= 1
    document.getElementById("imageForAll").src = `image/${imagesForAll[count]}`
    console.log(count)


})
console.log("help")
console.log("23")

