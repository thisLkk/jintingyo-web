function canvasHandle(PIXI, window, document) {
  var setupRAF = function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o']; // 浏览器兼容
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
  };

  var w, h, renderer, stage, waveGraphics, waveTexture, partTexture, waveCount, partCount, waves, parts;

  function init() {
    // 设置舞台
    renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight / 2, {
      backgroundColor: '0x' + tinycolor('hsl(200, 50%, 10%)').toHex()
    });
    stage = new PIXI.Container();
    waveCount = 5000; // 水波纹总数
    waves = [];
    let dom = document.getElementById('userInfo')
    dom.appendChild(renderer.view);
    reset();
    for (var i = 0; i < 300; i++) {
      step();
    }
    loop();
  }

  function reset() {
    w = window.innerWidth;
    h = window.innerHeight;
    renderer.resize(w, h);
    waveGraphics = null;
    waveTexture = null;
    waveGraphics = new PIXI.Graphics(); // 画线
    waveGraphics.cacheAsBitmap = true;
    waveGraphics.beginFill('0x' + tinycolor('hsl(200, 74%, 40%)').toHex(), 0.15);
    waveGraphics.drawCircle(0, 0, 15);
    waveGraphics.endFill();
    waveTexture = waveGraphics.generateTexture();
  }

  function step() {
    if (waves.length < waveCount) {
      for (var i = 0; i < 10; i++) {
        var wave = new PIXI.Sprite(waveTexture),
          scale = 0.2 + Math.random() * 0.8;
        wave.position.x = w / 2;
        wave.position.y = 0;
        wave.anchor.x = 0;
        wave.anchor.y = 0;
        wave.scale.x = scale * 10;
        wave.scale.y = scale * 0.5;
        wave.blendMode = PIXI.BLEND_MODES.SCREEN;
        waves.push({
          sprite: wave,
          x: w / 2 - 90,
          y: -80,
          vx: 0,
          vy: 0,
          angle: Math.PI / 2 + Math.random() * Math.PI + Math.PI * 1.5,
          speed: 0.01 + Math.random() / 10
        });
        stage.addChild(wave);
      }
    }
    for (var i = 0, length = waves.length; i < length; i++) {
      var wave = waves[i];
      wave.sprite.position.x = wave.x;
      wave.sprite.position.y = wave.y;
      wave.vx = Math.cos(wave.angle) * wave.speed;
      wave.vy = Math.sin(wave.angle) * wave.speed;
      wave.x += wave.vx;
      wave.y += wave.vy;
      wave.speed *= 1.006;
      if (wave.x > w + 200 || wave.x < -200 || wave.y > h + 200) {
        wave.x = w / 2 - 90;
        wave.y = -80;
        wave.speed = 0.01 + Math.random() / 10;
      }
    }
    renderer.render(stage);
  }

  function loop() {
    step();
    requestAnimationFrame(loop);
  }
  window.addEventListener('resize', reset)
  setupRAF();
  init();
}