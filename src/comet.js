let Comet = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $(
    '<img class="dancer" src="/img/comet.png" height="100" width="100">'
  );

  this.setPosition(top, left);
  setTimeout(() => {
    this.kill();
  }, 150);
};

Comet.prototype = Object.create(Dancer.prototype);
Comet.prototype.constructor = Comet;
Comet.prototype.step = function() {
  Dancer.prototype.step.call(this);
  let top = this.$node.position().top;
  let left = this.$node.position().left;
  this.setPosition(top + 20, left + 25);
  this.$node.fadeIn();
};
