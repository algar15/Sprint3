let array = ["R","U","B","E","N"];

function countNameChars(arr) {
    const count= arr.reduce((acc, current) => {
    acc[current] = acc[current]? acc[current] += 1 : 1
    return acc
}, {})
console.log(count)
}
countNameChars(array)