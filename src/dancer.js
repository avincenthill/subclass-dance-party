const Dancers = function() {
  this.dancers = [];
};

const Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img></img>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.kill = function() {
  $(this.$node).remove();
};

// Dancer.prototype.moveToward = function(x2, y2) {
//   this.step();
//   //need to do y = mx + b math
//   let x1 = this.$node.position().left;
//   let y1 = this.$node.position().top;
//   let m = (y2 - y1) / (x2 - x1);
//   b = y1 - m * x1;
//   this.setPosition(x2 - x1, y2 - y1);
// };
