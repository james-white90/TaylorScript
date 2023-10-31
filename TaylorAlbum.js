// make array of 5 Taylor Swift albums

const taylorAlbums = ["Reputation", 1989, "Red", "Speak now", "Evermore"]
const taylorTrash = []
//add element to end of Array with push

taylorAlbums.push("foklore")
taylorTrash.push(taylorAlbums.pop())
taylorAlbums.unshift("Lover")
console.log(taylorAlbums)
console.log(taylorTrash)