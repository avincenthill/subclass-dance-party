// // requestAnimationFrame polyfill by Erik Möller
// // fixes from Paul Irish and Tino Zijdel
// // optimised by @rma4ok
// // rebased by @yckart
// // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// (function(c) {
//   var b = 'equestAnimationFrame',
//     f = 'r' + b,
//     a = 'ancelAnimationFrame',
//     e = 'c' + a,
//     d = 0,
//     h = ['moz', 'ms', 'o', 'webkit'],
//     g;
//   while (!c[f] && (g = h.pop())) {
//     c[f] = c[g + 'R' + b];
//     c[e] = c[g + 'C' + a] || c[g + 'CancelR' + b];
//   }
//   if (!c[f]) {
//     c[f] = function(l) {
//       var k = new Date().getTime(),
//         i = 16 - (k - d),
//         j = i > 0 ? i : 0;
//       d = k + j;
//       return setTimeout(function() {
//         l(d);
//       }, j);
//     };
//     c[e] = clearTimeout;
//   }
// })(this);

// var supportFullscreen = (function() {
//   var prefixes = 'requestFullScreen webkitRequestFullScreen mozRequestFullScreen'.split(
//       ' '
//     ),
//     i = prefixes.length;
//   while (i--) {
//     if (new Image()[prefixes[i]]) {
//       return prefixes[i];
//     }
//   }
//   return false;
// })();

// navigator.pointer =
//   navigator.pointer || navigator.webkitPointer || navigator.mozPointer;
// var supportPointerLock = (function() {
//   var prefixes = 'requestPointerLock webkitRequestPointerLock mozRequestPointerLock'.split(
//       ' '
//     ),
//     i = prefixes.length;
//   while (i--) {
//     if (new Image()[prefixes[i]]) {
//       return prefixes[i];
//     }
//   }
//   return false;
// })();

// var fov = 250;
// var maxSpeed = 15;

// var SCREEN_WIDTH = window.innerWidth;
// var SCREEN_HEIGHT = window.innerHeight;

// var HALF_WIDTH = SCREEN_WIDTH / 2;
// var HALF_HEIGHT = SCREEN_HEIGHT / 2;

// var numPoints = 800;

// var mouseX = 0;
// var mouseY = 0;
// var delta = -1;
// var keys = [];

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// canvas.width = SCREEN_WIDTH;
// canvas.height = SCREEN_HEIGHT;

// function draw3Din2D(point3d) {
//   x3d = point3d[0];
//   y3d = point3d[1];
//   z3d = point3d[2];
//   var scale = fov / 2 / (fov + z3d);
//   var x2d = x3d * scale + HALF_WIDTH;
//   var y2d = y3d * scale + HALF_HEIGHT;

//   ctx.lineWidth = scale;
//   ctx.strokeStyle = 'rgb(255,255,255)';
//   ctx.beginPath();
//   ctx.moveTo(x2d, y2d);
//   ctx.lineTo(x2d + scale, y2d);
//   // ctx.rect(x2d, y2d, scale, scale);
//   ctx.stroke();
// }

// var points = [];

// function initPoints() {
//   var i = numPoints;
//   while (i--) {
//     points.push([
//       (Math.random() * numPoints) / 2 - 200,
//       (Math.random() * numPoints) / 2 - 200,
//       (Math.random() * numPoints) / 2 - 200
//     ]);
//   }
// }

// function rotatePointAroundY(point3d, angle, vert) {
//   x = point3d[0];
//   y = point3d[1];
//   z = point3d[2] + fov;

//   cosRX = Math.cos(angle);
//   sinRX = Math.sin(angle);
//   cosRY = Math.cos(vert);
//   sinRY = Math.sin(vert);
//   tempz = z;
//   tempy = y;
//   tempx = x;

//   x = tempx * cosRX + tempz * sinRX;
//   y = tempy * cosRY + tempz * sinRY;
//   z = tempx * -sinRX + tempz * cosRX;
//   point3d[0] = x;
//   point3d[1] = y;
//   point3d[2] = z - fov;
//   // canvas.style.backgroundPosition = x*2 + "px " + y*2 + "px";
// }

// function render() {
//   // clear
//   ctx.fillStyle = 'black';
//   ctx.globalAlpha = 10 / (delta * -1);
//   ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
//   ctx.globalAlpha = 1;

//   // crosshair point
//   ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
//   ctx.beginPath();
//   ctx.arc(
//     mouseX / 80 + HALF_WIDTH,
//     mouseY / 80 + HALF_HEIGHT,
//     2,
//     0,
//     Math.PI * 2,
//     true
//   );
//   ctx.closePath();
//   ctx.fill();

//   // crosshair box
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
//   ctx.beginPath();
//   ctx.strokeRect(
//     mouseX / 80 + HALF_WIDTH - 20,
//     mouseY / 80 + HALF_HEIGHT - 20,
//     40,
//     40
//   );
//   ctx.closePath();
//   ctx.stroke();

//   var i = numPoints;
//   while (i--) {
//     var point3d = points[i];
//     rotatePointAroundY(point3d, mouseX * -0.00002, mouseY * -0.0001);
//     if (keys[87] && delta > -maxSpeed) {
//       delta -= 0.00005;
//     } // w
//     if (!keys[87] && delta < -0.1) {
//       delta += 0.0003;
//     }

//     if (keys[83]) {
//       delta += 0.00005;
//     } // s
//     if (!keys[83] && delta > -0.1) {
//       delta -= 0.0003;
//     }

//     if (keys[65]) {
//       point3d[0] -= delta / 2;
//     } // a
//     if (keys[68]) {
//       point3d[0] += delta / 2;
//     } // d
//     point3d[2] += delta;

//     // x
//     if (point3d[0] < -300) {
//       point3d[0] = 300;
//     } else if (point3d[0] > 300) {
//       point3d[0] = -300;
//     }

//     // y
//     if (point3d[1] < -300) {
//       point3d[1] = 300;
//     } else if (point3d[1] > 300) {
//       point3d[1] = -300;
//     }

//     // z
//     if (point3d[2] < -fov) {
//       point3d[2] = fov;
//     } else if (point3d[2] > 249) {
//       point3d[2] = -249;
//     }

//     draw3Din2D(point3d);
//   }
// }

// initPoints();

// (function loop() {
//   render();
//   requestAnimationFrame(loop);
// })();

// function updateMouse(e) {
//   var touch = e.type === 'mousemove' ? e : e.touches[0] || e.changedTouches[0];
//   if (document.webkitPointerLockElement === document.body) {
//     mouseX += e.movementX || e.mozMovementX || e.webkitMovementX || 0;
//     mouseY += e.movementY || e.mozMovementY || e.webkitMovementY || 0;
//   } else {
//     mouseX = touch.pageX - canvas.offsetLeft - HALF_WIDTH;
//     mouseY = touch.pageY - canvas.offsetTop - HALF_HEIGHT;
//   }
//   e.preventDefault();
// }

// document.addEventListener('mousemove', updateMouse, false);
// document.addEventListener('touchstart', updateMouse, false);
// document.addEventListener('touchmove', updateMouse, false);

// // Returns +1 for a single wheel roll 'up', -1 for a single roll 'down'
// // http://stackoverflow.com/a/5542105/1250044
// function handleScroll(event) {
//   delta += (function(evt) {
//     if (!evt) {
//       evt = event;
//     }
//     var w = evt.wheelDelta,
//       d = evt.detail;
//     if (d) {
//       if (w) {
//         return (w / d / 40) * d > 0 ? 1 : -1;
//       }
//       // Opera
//       else {
//         return -d / 3;
//       } // Firefox;         TODO: do not /3 for OS X
//     } else {
//       return w / 120;
//     } // IE/Safari/Chrome TODO: /3 for Chrome OS X
//   })(event);
// }

// document.addEventListener('DOMMouseScroll', handleScroll, false);
// document.addEventListener('mousewheel', handleScroll, false);

// document.onkeydown = document.onkeyup = function(e) {
//   keys[e.which] = e.type === 'keydown';
// };

// document.body.ondblclick = function() {
//   this[supportFullscreen](Element.ALLOW_KEYBOARD_INPUT);
//   this[supportPointerLock]();
// };

// window.ondevicemotion = function(e) {
//   var acceleration = e.accelerationIncludingGravity;
//   mouseX = (acceleration.x / 5 - 0.5) * 100 + 50;
//   // mouseY = ( ( acceleration.y / 5 ) + 0.5 ) * 100;
//   delta = acceleration.y;
// };
