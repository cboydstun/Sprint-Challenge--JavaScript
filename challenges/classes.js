// 1. Copy and paste your prototype in here and refactor into class syntax.

//function CuboidMaker (dimension){
//  this.length = dimension.length;
//  this.height = dimension.height;
//  this.width = dimension.width;
//};
// }
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
// let cuboid = new CuboidMaker ({
//   "length": 4,
//   "width": 5,
//   "height": 5
// });

class CuboidMaker {
    constructor(dimension) {
        this.length = dimension.length;
        this.height = dimension.height;
        this.width = dimension.width;
    }
    
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let cuboid = new CuboidMaker ({
   "length": 4,
   "width": 5,
   "height": 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume 
// and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work 
// by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(dimension) {
        super (dimension);
    }
    
    volume() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

let cube = new CubeMaker ({
    "length": 5,
    "height": 5,
    "width:": 5
});

console.log(cube.volume());
console.log(cube.surfaceArea());