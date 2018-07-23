module.exports = {
  add: (a, b) => parseFloat(a) + parseFloat(b),
  sub: (a, b) => parseFloat(a) - parseFloat(b),
  mul: (a, b) => parseFloat(a) * parseFloat(b),
  div: (a, b) => {
    if (parseFloat(b) === 0) return "Can not divide by zero";
    return parseFloat(a) / parseFloat(b)
  },
}