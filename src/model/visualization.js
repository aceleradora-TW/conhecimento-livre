class Visualization {
  constructor(contentID, quantity) {
    this.contentID = contentID;
    this.quantity = quantity;
  }
  toJSON() {
    return {
      contentID: this.contentID,
      quantity: this.quantity,
    }
  }
}

module.exports = Visualization
