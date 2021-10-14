const charLimiter = (text, num) => {
  if (text.length > num) {
    text = `${text.substring(0, num - 3)}...`
  }
  return text
}

module.exports = charLimiter;
