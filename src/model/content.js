class Content {
  constructor(order, className, duration, description, url, type, author) {
    this.order = order;
    this.className = className;
    this.duration = duration;
    this.description = description;
    this.url = url;
    this.type = type;
    this.author = author;
    this.views = 0;
  }
  toJSON() {
    return {
      order: this.order,
      className: this.className,
      duration: this.duration,
      description: this.description,
      url: this.url,
      type: this.type,
      author: this.author
      views: this.views,
    }
  }
}

module.exports = Content
