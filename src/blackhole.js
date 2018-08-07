let BlackHole = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $(
    '<img class="dancer" src="/img/blackhole.png" height="100" width="100">'
  );

  this.setPosition(top, left);
};

BlackHole.prototype = Object.create(Dancer.prototype);
BlackHole.prototype.constructor = BlackHole;
BlackHole.prototype.step = function() {
  Dancer.prototype.step.call(this);
  let height = $(this.$node).height();
  let width = $(this.$node).width();
  $(this.$node).height(height * 1.065);
  $(this.$node).width(width * 1.065);

  let top = this.$node.position().top;
  let left = this.$node.position().left;
  this.setPosition(top - 27, left - 27);
  if (width > 10000) {
    // this.$node = null;
    this.kill();
  }
};
