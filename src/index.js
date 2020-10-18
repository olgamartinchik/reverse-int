module.exports = function reverse(n) {
    let v = Math.abs(n)
    let num = v.toString().split('').reverse().join('')

    return num
}