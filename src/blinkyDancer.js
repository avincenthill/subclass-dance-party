let BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this); //might be wrong
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
