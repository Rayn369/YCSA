(function () {
  let $body = document.querySelector("body");

  // canUse;
  // window.canUse = function (p) {
  //   if (!window._canUse) {
  //     window._canUse = document.createElement("div");
  //   }
  //   let e = window._canUse.style;
  //   let up = p.charAt(0).toUpperCase() + p.slice(1);
  //   return (
  //     p in e ||
  //     "Moz" + up in e ||
  //     "Webkit" + up in e ||
  //     "O" + up in e ||
  //     "ms" + up in e
  //   );
  // };

  // Play initial animations on page load.
  window.addEventListener("load", function () {
    window.setTimeout(function () {
      $body.classList.remove("is-preload");
    }, 200);
  });

  // Slideshow Background.
  (function () {
    // Settings.
    let settings = {
      // Images (in the format of 'url': 'alignment').
      images: {
        "images/homePage01.jpeg": "center",
        "images/homePage02.jpeg": "center",
        "images/homePage03.png": "center",
      },

      // Delay.
      delay: 10000,
    };

    // Variables
    let pos = 0,
      lastPos = 0,
      $wrapper,
      $bgs = [],
      $bg,
      k;

    // Create BG wrapper, BGs.
    $wrapper = document.createElement("div");
    $wrapper.id = "bg";
    $body.appendChild($wrapper);

    // create div for background imgs
    for (k in settings.images) {
      // Create BG.
      $bg = document.createElement("div");
      $bg.style.backgroundImage = 'url("' + k + '")';
      $bg.style.backgroundPosition = settings.images[k];
      $wrapper.appendChild($bg);

      // Add it to array.
      $bgs.push($bg);
    }

    // Main loop.
    $bgs[pos].classList.add("visible");
    $bgs[pos].classList.add("top");

    // Bail if we only have a single BG or the client doesn't support transitions.
    // if ($bgs.length == 1 || !canUse("transition")) return;

    window.setInterval(function () {
      lastPos = pos;
      pos++;

      // Wrap to beginning if necessary.
      if (pos >= $bgs.length) {
        pos = 0;
      }

      // Swap top images.
      $bgs[lastPos].classList.remove("top");
      $bgs[pos].classList.add("visible");
      $bgs[pos].classList.add("top");

      // Hide last image after a short delay.
      window.setTimeout(function () {
        $bgs[lastPos].classList.remove("visible");
      }, settings.delay / 2);
    }, settings.delay);
  })();
})();
