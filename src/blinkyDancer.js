let BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // Dancer.step = this.oldStep;
  //debugger;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  // debugger;
  // this.oldStep();
  Dancer.prototype.step.call(this); //might be wrong

  //debugger;
  this.$node.toggle();
  // console.log(new Date());
};
