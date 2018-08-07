let BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $(
    '<img class="dancer" src="/img/transparentStar.png" height="18" width="18">'
  );
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeOut();
  this.$node.addClass('animated flip');
  this.$node.fadeIn();
};

//TBD decouple pic from superclass
//make planet subclass
//make comet subclass
//make moon
//make supernova
//make black hole
//make lineup function
//make go crazy
