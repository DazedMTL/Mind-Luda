/*! npm.im/iphone-inline-video */
var makeVideoPlayableInline = (function () {
  "use strict"; /*! npm.im/intervalometer */
  function e(e, n, r, i) {
    function t(r) {
      (d = n(t, i)), e(r - (a || r)), (a = r);
    }
    var d, a;
    return {
      start: function () {
        d || t(0);
      },
      stop: function () {
        r(d), (d = null), (a = 0);
      },
    };
  }
  function n(n) {
    return e(n, requestAnimationFrame, cancelAnimationFrame);
  }
  function r(e, n, r, i) {
    function t(n) {
      Boolean(e[r]) === Boolean(i) && n.stopImmediatePropagation(), delete e[r];
    }
    return e.addEventListener(n, t, !1), t;
  }
  function i(e, n, r, i) {
    function t() {
      return r[n];
    }
    function d(e) {
      r[n] = e;
    }
    i && d(e[n]), Object.defineProperty(e, n, { get: t, set: d });
  }
  function t(e, n, r) {
    r.addEventListener(n, function () {
      return e.dispatchEvent(new Event(n));
    });
  }
  function d(e, n) {
    Promise.resolve().then(function () {
      e.dispatchEvent(new Event(n));
    });
  }
  function a(e) {
    var n = new Audio();
    return (
      t(e, "play", n),
      t(e, "playing", n),
      t(e, "pause", n),
      (n.crossOrigin = e.crossOrigin),
      (n.src = e.src || e.currentSrc || "data:"),
      n
    );
  }
  function o(e, n, r) {
    (m || 0) + 200 < Date.now() && ((e[g] = !0), (m = Date.now())),
      r || (e.currentTime = n),
      (A[++k % 3] = (100 * n) | 0);
  }
  function u(e) {
    return e.driver.currentTime >= e.video.duration;
  }
  function s(e) {
    var n = this;
    n.video.readyState >= n.video.HAVE_FUTURE_DATA
      ? (n.hasAudio ||
          ((n.driver.currentTime =
            n.video.currentTime + (e * n.video.playbackRate) / 1e3),
          n.video.loop && u(n) && (n.driver.currentTime = 0)),
        o(n.video, n.driver.currentTime))
      : n.video.networkState !== n.video.NETWORK_IDLE ||
        n.video.buffered.length ||
        n.video.load(),
      n.video.ended && (delete n.video[g], n.video.pause(!0));
  }
  function c() {
    var e = this,
      n = e[b];
    return e.webkitDisplayingFullscreen
      ? void e[E]()
      : ("data:" !== n.driver.src &&
          n.driver.src !== e.src &&
          (o(e, 0, !0), (n.driver.src = e.src)),
        void (
          e.paused &&
          ((n.paused = !1),
          e.buffered.length || e.load(),
          n.driver.play(),
          n.updater.start(),
          n.hasAudio ||
            (d(e, "play"),
            n.video.readyState >= n.video.HAVE_ENOUGH_DATA && d(e, "playing")))
        ));
  }
  function v(e) {
    var n = this,
      r = n[b];
    r.driver.pause(),
      r.updater.stop(),
      n.webkitDisplayingFullscreen && n[T](),
      (r.paused && !e) ||
        ((r.paused = !0),
        r.hasAudio || d(n, "pause"),
        n.ended && ((n[g] = !0), d(n, "ended")));
  }
  function p(e, r) {
    var i = (e[b] = {});
    (i.paused = !0),
      (i.hasAudio = r),
      (i.video = e),
      (i.updater = n(s.bind(i))),
      r
        ? (i.driver = a(e))
        : (e.addEventListener("canplay", function () {
            e.paused || d(e, "playing");
          }),
          (i.driver = {
            src: e.src || e.currentSrc || "data:",
            muted: !0,
            paused: !0,
            pause: function () {
              i.driver.paused = !0;
            },
            play: function () {
              (i.driver.paused = !1), u(i) && o(e, 0);
            },
            get ended() {
              return u(i);
            },
          })),
      e.addEventListener(
        "emptied",
        function () {
          var n = !i.driver.src || "data:" === i.driver.src;
          i.driver.src &&
            i.driver.src !== e.src &&
            (o(e, 0, !0),
            (i.driver.src = e.src),
            n ? i.driver.play() : i.updater.stop());
        },
        !1
      ),
      e.addEventListener("webkitbeginfullscreen", function () {
        e.paused
          ? r && !i.driver.buffered.length && i.driver.load()
          : (e.pause(), e[E]());
      }),
      r &&
        (e.addEventListener("webkitendfullscreen", function () {
          i.driver.currentTime = e.currentTime;
        }),
        e.addEventListener("seeking", function () {
          A.indexOf((100 * e.currentTime) | 0) < 0 &&
            (i.driver.currentTime = e.currentTime);
        }));
  }
  function l(e) {
    var n = e[b];
    (e[E] = e.play),
      (e[T] = e.pause),
      (e.play = c),
      (e.pause = v),
      i(e, "paused", n.driver),
      i(e, "muted", n.driver, !0),
      i(e, "playbackRate", n.driver, !0),
      i(e, "ended", n.driver),
      i(e, "loop", n.driver, !0),
      r(e, "seeking"),
      r(e, "seeked"),
      r(e, "timeupdate", g, !1),
      r(e, "ended", g, !1);
  }
  function f(e, n, r) {
    void 0 === n && (n = !0),
      void 0 === r && (r = !0),
      (r && !h) ||
        e[b] ||
        (p(e, n),
        l(e),
        e.classList.add("IIV"),
        !n && e.autoplay && e.play(),
        /iPhone|iPod|iPad/.test(navigator.platform) ||
          console.warn(
            "iphone-inline-video is not guaranteed to work in emulated environments"
          ));
  }
  var m,
    y =
      "undefined" == typeof Symbol
        ? function (e) {
            return "@" + (e || "@") + Math.random();
          }
        : Symbol,
    h =
      "object-fit" in document.head.style &&
      /iPhone|iPod/i.test(navigator.userAgent) &&
      !matchMedia("(-webkit-video-playable-inline)").matches,
    b = y(),
    g = y(),
    E = y("nativeplay"),
    T = y("nativepause"),
    A = [],
    k = 0;
  return (f.isWhitelisted = h), f;
})();
