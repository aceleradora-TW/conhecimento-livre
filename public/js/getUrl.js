String.prototype.getUrl = function() {
  if (this.search('&') === -1) {
    return this.slice(this.search('=') + 1)
  } else {
    return this.slice(this.search('=') + 1, this.search('&'))
  }
}
