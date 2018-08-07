const Dancer = function(top, left, timeBetweenSteps) {
  this.dancer = {};
  this.$node = $('<span class = "dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  console.log(this);
};

Dancer.prototype.setPosition = function(top, left) {
  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
