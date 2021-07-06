function DFSArray() {
  const self = this;

  self.length = 0;
  self.data = {};
}

DFSArray.prototype = {
  get: function(index) {
    return this.data[index];
  },

  push: function(item, index = this.length) {
    if (index > this.length) throw new RangeError('index is out of range');
    else if (index === this.length) this.data[this.length] = item;
    else {
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }

      this.data[index] = item;
    }

    this.length++;
  },

  pop: function() {
    delete this.data[this.length - 1];
    this.length--;
  },
}

module.exports = DFSArray;