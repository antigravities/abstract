# abstract
Abstract classes in JavaScript, because why be a normal person?

Stolen from another project of mine and really only intended to be (re-)used by me, but I guess you can use it if you really want.

# Install
```
npm install --save @antigravities/abstract
```

# Use
```
const Abstract = require("@antigravities/abstract");

class Animal extends Abstract {
  constructor(){
    super(['makeNoise']);
  }
}

class Dog extends Animal {
  makeNoise(){
    console.log("woof");
  }
}

class Cat extends Animal {
  makeNoise(){
    console.log("meow");
  }
}

class Pig extends Animal { }

new Dog();
new Cat();
new Pig(); // Error: Pig must implement makeNoise
```

# License
[MIT](LICENSE)
