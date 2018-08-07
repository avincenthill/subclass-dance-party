let Planet = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  let getRandomArbitrary = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  this.$node = $(
    '<img class="dancer" src="/img/planet' +
      String(getRandomArbitrary(1, 4)) +
      '.png" height="50" width="50">'
  );
  this.setPosition(top, left);
};

Planet.prototype = Object.create(Dancer.prototype);
Planet.prototype.constructor = Planet;
Planet.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (this.$node.hasClass('animated jello')) {
    this.$node.removeClass('animated jello');
  } else {
    this.$node.addClass('animated jello');
  }

  // this.$node.fadeIn();
};
