//fires when document loads
$(document).ready(function() {
  //loop thru dancers and step each
  $('.addBlinkyDancerButton').on('click', function(event) {
    var dancer = new BlinkyDancer(
      $('body').height() * 0.9 * Math.random(),
      $('body').width() * 0.9 * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addPlanetButton').on('click', function(event) {
    var dancer = new Planet(
      $('body').height() * 0.9 * Math.random(),
      $('body').width() * 0.9 * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    $(dancer.$node).hover(
      () => {
        $(dancer.$node).addClass('animated wobble');
      },
      () => {
        $(dancer.$node).removeClass('animated wobble');
      }
    );
  });

  $('.addCometButton').on('click', function(event) {
    var dancer = new Comet(
      ($('body').height() / 2) * 0.9 * Math.random(),
      ($('body').width() / 2) * 0.9 * Math.random(),
      5
    );
    $('body').append(dancer.$node);
  });

  $('.addBlackHoleButton').on('click', function(event) {
    var dancer = new BlackHole(
      $('body').height() * 0.5,
      $('body').width() * 0.5,
      30
    );
    $('body').append(dancer.$node);
    setTimeout(() => {
      $('img').remove();
    }, 2000);
  });

  $('.lineUpButton').on('click', function(event) {
    //for each img in body
    //position based on length of imgs in body
    var items = document.body.getElementsByClassName('dancer');
    let width = $('body').width();
    let height = $('body').height();
    console.log(width, height);

    for (var i = 0, len = items.length; i < len; i++) {
      [...items].forEach((element, index) =>
        $(element).animate({
          top: String(height / 2),
          left: String((width / items.length) * (index + 0.5) - 15)
        })
      );
    }
  });
});
