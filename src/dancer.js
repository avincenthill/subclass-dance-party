const Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img></img>');
  this.setPosition(top, left);
  this.step();
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
  $(this.node).remove();
};
