module.exports = class Abstract {
  constructor(mustImplement) {
    try {
      mustImplement.forEach(i => {
        if (!this[i] || typeof this[i] !== "function") {
          throw new Error(this.constructor.name + " must implement " + i);
        }
      });
    }
    catch (e) {
      throw e;
    }
  }
}
