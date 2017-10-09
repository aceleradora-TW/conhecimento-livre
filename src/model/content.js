class Content {
  constructor(order, className, duration, description, url, type) {
    this.order = order;
    this.className = className;
    this.duration = duration;
    this.description = description;
    this.url = url;
    this.type = type;
  }
  toJSON() {
    return {
      order: this.order,
      className: this.className,
      duration: this.duration,
      description: this.description,
      url: this.url,
      type: this.type,
    }
  }
}

module.exports = Content
