var Dancer = function(top, left, timeBetweenSteps) {
  this.dancer = {};
  this.$node = $('<span class = "dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(dancer.step, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
