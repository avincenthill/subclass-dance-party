describe('comet', function() {
  var comet, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    comet = new Comet(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(comet.$node).to.be.an.instanceof(jQuery);
  });

  describe('', function() {
    it('should call step at least once per second', function() {
      sinon.spy(comet, 'step');
      expect(comet.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(comet.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(comet.step.callCount).to.be.equal(2);
    });
  });
});
