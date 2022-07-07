class LRUCache {
  constructor(max) {
    this.max = max;
    this.map = new Map();
  }
  get(key) {
    if (this.map.has(key)) {
      const val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    } else {
      return -1;
    }
  }
  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, value);
    } else if (this.map.size < this.max) {
      this.map.set(key, value);
    } else {
      this.map.set(key, value);
      this.map.delete(this.map.keys().next().value);
    }
  }
}
