$(document).ready(function() {
  window.dancers = [];

  $('.addBlinkyDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    //init dancer
    var dancer = new BlinkyDancer(
      $('body').height() * 0.9 * Math.random(),
      $('body').width() * 0.9 * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addPlanetButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new Planet(
      $('body').height() * 0.9 * Math.random(),
      $('body').width() * 0.9 * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addCometButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new Comet(
      ($('body').height() / 2) * 0.9 * Math.random(),
      ($('body').width() / 2) * 0.9 * Math.random(),
      5
    );
    $('body').append(dancer.$node);
  });

  $('.addBlackHoleButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new BlackHole(
      $('body').height() * 0.5,
      $('body').width() * 0.5,
      30
    );
    $('body').append(dancer.$node);
    setTimeout(() => {
      dancer.$node.fadeOut();
      $('img').remove();
    }, 2200);
  });
});
