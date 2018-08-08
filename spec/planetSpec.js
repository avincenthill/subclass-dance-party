describe('planet', function() {
  var planet, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    planet = new Planet(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(planet.$node).to.be.an.instanceof(jQuery);
  });

  it('should have an addClass function that makes its node wobble', function() {
    sinon.spy(planet.$node, 'addClass');
    planet.step();
    expect(planet.$node.addClass.called).to.be.true;
  });

  describe('', function() {
    it('should call step at least once per second', function() {
      sinon.spy(planet, 'step');
      expect(planet.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(planet.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(planet.step.callCount).to.be.equal(2);
    });
  });
});
