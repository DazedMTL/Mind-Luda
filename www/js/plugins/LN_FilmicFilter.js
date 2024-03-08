//=============================================================================
// LN_FilmicFilter.js
// ----------------------------------------------------------------------------
// Copyright (c) 2021 lriki
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// [GitHub] : https://github.com/lriki/LN_FilmicFilter
// [Twitter]: https://twitter.com/lriki8
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc LN_FilmicFilter v1.1.0 (MIT License)
 * @author LRIKI
 *
 * @help グラフィックスをより豊かに見せるための撮影効果を付加します。
 *
 * 使い方は次のページを参照してください。
 * https://github.com/lriki/LN_FilmicFilter/blob/main/README.md
 *
 * 変更履歴は次のページを参照してください。
 * https://github.com/lriki/LN_FilmicFilter/releases
 *
 * 既知の不具合や要望は次のページを参照してください。
 * https://github.com/lriki/LN_FilmicFilter/issues
 *
 * @param EditorKey
 * @text エディタの表示キー
 * @desc デフォルトのF11キーでエディタが表示できない場合に、キーを変更できます。例えば A キーで表示する場合 a と入力してください。
 * @default F11
 * @type string
 *
 * @command SetFilmicFilter
 * @text SetFilmicFilter
 * @desc フィルタを適用します。
 *
 * @arg filterId
 * @type number
 * @min -1
 * @default 0
 * @text フィルタID
 * @desc 適用するフィルタファイルの番号です。 (例: 2-夕焼け.json の場合は 2 を指定する)
 *
 * @arg duration
 * @type number
 * @default 30
 * @text 時間
 * @desc 変化にかける時間です。フレーム単位で指定します。
 *
 * @arg wait
 * @type boolean
 * @default true
 * @text 完了までウェイト
 * @desc 変化が完了するまでイベントを待機します。
 */

(() => {
  "use strict";
  var n = {
      376: (e, t, n) => {
        function o(e, t) {
          var n = e.__state.conversionName.toString(),
            o = Math.round(e.r),
            r = Math.round(e.g),
            i = Math.round(e.b),
            a = e.a,
            s = Math.round(e.h),
            l = e.s.toFixed(1),
            u = e.v.toFixed(1);
          if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
            for (var d = e.hex.toString(16); d.length < 6; ) d = "0" + d;
            return "#" + d;
          }
          return "CSS_RGB" === n
            ? "rgb(" + o + "," + r + "," + i + ")"
            : "CSS_RGBA" === n
            ? "rgba(" + o + "," + r + "," + i + "," + a + ")"
            : "HEX" === n
            ? "0x" + e.hex.toString(16)
            : "RGB_ARRAY" === n
            ? "[" + o + "," + r + "," + i + "]"
            : "RGBA_ARRAY" === n
            ? "[" + o + "," + r + "," + i + "," + a + "]"
            : "RGB_OBJ" === n
            ? "{r:" + o + ",g:" + r + ",b:" + i + "}"
            : "RGBA_OBJ" === n
            ? "{r:" + o + ",g:" + r + ",b:" + i + ",a:" + a + "}"
            : "HSV_OBJ" === n
            ? "{h:" + s + ",s:" + l + ",v:" + u + "}"
            : "HSVA_OBJ" === n
            ? "{h:" + s + ",s:" + l + ",v:" + u + ",a:" + a + "}"
            : "unknown format";
        }
        n.r(t),
          n.d(t, {
            color: () => be,
            controllers: () => ve,
            dom: () => ye,
            gui: () => xe,
            GUI: () => we,
            default: () => Ce,
          });
        var r,
          a = Array.prototype.forEach,
          i = Array.prototype.slice,
          p = {
            BREAK: {},
            extend: function (n) {
              return (
                this.each(
                  i.call(arguments, 1),
                  function (t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach(
                      function (e) {
                        this.isUndefined(t[e]) || (n[e] = t[e]);
                      }.bind(this)
                    );
                  },
                  this
                ),
                n
              );
            },
            defaults: function (n) {
              return (
                this.each(
                  i.call(arguments, 1),
                  function (t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach(
                      function (e) {
                        this.isUndefined(n[e]) && (n[e] = t[e]);
                      }.bind(this)
                    );
                  },
                  this
                ),
                n
              );
            },
            compose: function () {
              var n = i.call(arguments);
              return function () {
                for (var e = i.call(arguments), t = n.length - 1; 0 <= t; t--)
                  e = [n[t].apply(this, e)];
                return e[0];
              };
            },
            each: function (e, t, n) {
              if (e)
                if (a && e.forEach && e.forEach === a) e.forEach(t, n);
                else if (e.length === e.length + 0) {
                  for (var o = void 0, o = 0, r = e.length; o < r; o++)
                    if (o in e && t.call(n, e[o], o) === this.BREAK) return;
                } else
                  for (var i in e)
                    if (t.call(n, e[i], i) === this.BREAK) return;
            },
            defer: function (e) {
              setTimeout(e, 0);
            },
            debounce: function (o, r, i) {
              var a = void 0;
              return function () {
                var e = this,
                  t = arguments;
                var n = i || !a;
                clearTimeout(a),
                  (a = setTimeout(function () {
                    (a = null), i || o.apply(e, t);
                  }, r)),
                  n && o.apply(e, t);
              };
            },
            toArray: function (e) {
              return e.toArray ? e.toArray() : i.call(e);
            },
            isUndefined: function (e) {
              return void 0 === e;
            },
            isNull: function (e) {
              return null === e;
            },
            isNaN:
              ((r = function (e) {
                return isNaN(e);
              }),
              (s.toString = function () {
                return r.toString();
              }),
              s),
            isArray:
              Array.isArray ||
              function (e) {
                return e.constructor === Array;
              },
            isObject: function (e) {
              return e === Object(e);
            },
            isNumber: function (e) {
              return e === e + 0;
            },
            isString: function (e) {
              return e === e + "";
            },
            isBoolean: function (e) {
              return !1 === e || !0 === e;
            },
            isFunction: function (e) {
              return e instanceof Function;
            },
          };
        function s(e) {
          return r.apply(this, arguments);
        }
        var l,
          u = [
            {
              litmus: p.isString,
              conversions: {
                THREE_CHAR_HEX: {
                  read: function (e) {
                    e = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return (
                      null !== e && {
                        space: "HEX",
                        hex: parseInt(
                          "0x" +
                            e[1].toString() +
                            e[1].toString() +
                            e[2].toString() +
                            e[2].toString() +
                            e[3].toString() +
                            e[3].toString(),
                          0
                        ),
                      }
                    );
                  },
                  write: o,
                },
                SIX_CHAR_HEX: {
                  read: function (e) {
                    e = e.match(/^#([A-F0-9]{6})$/i);
                    return (
                      null !== e && {
                        space: "HEX",
                        hex: parseInt("0x" + e[1].toString(), 0),
                      }
                    );
                  },
                  write: o,
                },
                CSS_RGB: {
                  read: function (e) {
                    e = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return (
                      null !== e && {
                        space: "RGB",
                        r: parseFloat(e[1]),
                        g: parseFloat(e[2]),
                        b: parseFloat(e[3]),
                      }
                    );
                  },
                  write: o,
                },
                CSS_RGBA: {
                  read: function (e) {
                    e = e.match(
                      /^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/
                    );
                    return (
                      null !== e && {
                        space: "RGB",
                        r: parseFloat(e[1]),
                        g: parseFloat(e[2]),
                        b: parseFloat(e[3]),
                        a: parseFloat(e[4]),
                      }
                    );
                  },
                  write: o,
                },
              },
            },
            {
              litmus: p.isNumber,
              conversions: {
                HEX: {
                  read: function (e) {
                    return { space: "HEX", hex: e, conversionName: "HEX" };
                  },
                  write: function (e) {
                    return e.hex;
                  },
                },
              },
            },
            {
              litmus: p.isArray,
              conversions: {
                RGB_ARRAY: {
                  read: function (e) {
                    return (
                      3 === e.length && {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2],
                      }
                    );
                  },
                  write: function (e) {
                    return [e.r, e.g, e.b];
                  },
                },
                RGBA_ARRAY: {
                  read: function (e) {
                    return (
                      4 === e.length && {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: e[3],
                      }
                    );
                  },
                  write: function (e) {
                    return [e.r, e.g, e.b, e.a];
                  },
                },
              },
            },
            {
              litmus: p.isObject,
              conversions: {
                RGBA_OBJ: {
                  read: function (e) {
                    return (
                      !!(
                        p.isNumber(e.r) &&
                        p.isNumber(e.g) &&
                        p.isNumber(e.b) &&
                        p.isNumber(e.a)
                      ) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a }
                    );
                  },
                  write: function (e) {
                    return { r: e.r, g: e.g, b: e.b, a: e.a };
                  },
                },
                RGB_OBJ: {
                  read: function (e) {
                    return (
                      !!(
                        p.isNumber(e.r) &&
                        p.isNumber(e.g) &&
                        p.isNumber(e.b)
                      ) && { space: "RGB", r: e.r, g: e.g, b: e.b }
                    );
                  },
                  write: function (e) {
                    return { r: e.r, g: e.g, b: e.b };
                  },
                },
                HSVA_OBJ: {
                  read: function (e) {
                    return (
                      !!(
                        p.isNumber(e.h) &&
                        p.isNumber(e.s) &&
                        p.isNumber(e.v) &&
                        p.isNumber(e.a)
                      ) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a }
                    );
                  },
                  write: function (e) {
                    return { h: e.h, s: e.s, v: e.v, a: e.a };
                  },
                },
                HSV_OBJ: {
                  read: function (e) {
                    return (
                      !!(
                        p.isNumber(e.h) &&
                        p.isNumber(e.s) &&
                        p.isNumber(e.v)
                      ) && { space: "HSV", h: e.h, s: e.s, v: e.v }
                    );
                  },
                  write: function (e) {
                    return { h: e.h, s: e.s, v: e.v };
                  },
                },
              },
            },
          ],
          d = void 0,
          c = void 0,
          h = function () {
            c = !1;
            var n = 1 < arguments.length ? p.toArray(arguments) : arguments[0];
            return (
              p.each(u, function (e) {
                if (e.litmus(n))
                  return (
                    p.each(e.conversions, function (e, t) {
                      if (((d = e.read(n)), !1 === c && !1 !== d))
                        return (
                          ((c = d).conversionName = t),
                          (d.conversion = e),
                          p.BREAK
                        );
                    }),
                    p.BREAK
                  );
              }),
              c
            );
          },
          _ = {
            hsv_to_rgb: function (e, t, n) {
              var o = Math.floor(e / 60) % 6,
                r = e / 60 - Math.floor(e / 60),
                i = n * (1 - t),
                e = n * (1 - r * t),
                t = n * (1 - (1 - r) * t),
                o = [
                  [n, t, i],
                  [e, n, i],
                  [i, n, t],
                  [i, e, n],
                  [t, i, n],
                  [n, i, e],
                ][o];
              return { r: 255 * o[0], g: 255 * o[1], b: 255 * o[2] };
            },
            rgb_to_hsv: function (e, t, n) {
              var o = Math.min(e, t, n),
                r = Math.max(e, t, n),
                i = r - o,
                o = void 0;
              return 0 === r
                ? { h: NaN, s: 0, v: 0 }
                : ((o =
                    e === r
                      ? (t - n) / i
                      : t === r
                      ? 2 + (n - e) / i
                      : 4 + (e - t) / i),
                  (o /= 6) < 0 && (o += 1),
                  { h: 360 * o, s: i / r, v: r / 255 });
            },
            rgb_to_hex: function (e, t, n) {
              (e = this.hex_with_component(0, 2, e)),
                (e = this.hex_with_component(e, 1, t));
              return (e = this.hex_with_component(e, 0, n));
            },
            component_from_hex: function (e, t) {
              return (e >> (8 * t)) & 255;
            },
            hex_with_component: function (e, t, n) {
              return (n << (l = 8 * t)) | (e & ~(255 << l));
            },
          },
          m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          g = function (e, t, n) {
            return t && b(e.prototype, t), n && b(e, n), e;
          };
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function v(e, t, n) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, t);
          if (void 0 !== o) {
            if ("value" in o) return o.value;
            o = o.get;
            return void 0 !== o ? o.call(n) : void 0;
          }
          if (null !== (e = Object.getPrototypeOf(e))) return v(e, t, n);
        }
        var n = function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          },
          y = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          },
          x =
            (g(w, [
              {
                key: "toString",
                value: function () {
                  return o(this);
                },
              },
              {
                key: "toHexString",
                value: function () {
                  return o(this, !0);
                },
              },
              {
                key: "toOriginal",
                value: function () {
                  return this.__state.conversion.write(this);
                },
              },
            ]),
            w);
        function w() {
          if (
            (f(this, w),
            (this.__state = h.apply(this, arguments)),
            !1 === this.__state)
          )
            throw new Error("Failed to interpret color arguments");
          this.__state.a = this.__state.a || 1;
        }
        function C(e, t, n) {
          Object.defineProperty(e, t, {
            get: function () {
              return (
                "RGB" === this.__state.space || x.recalculateRGB(this, t, n),
                this.__state[t]
              );
            },
            set: function (e) {
              "RGB" !== this.__state.space &&
                (x.recalculateRGB(this, t, n), (this.__state.space = "RGB")),
                (this.__state[t] = e);
            },
          });
        }
        function S(e, t) {
          Object.defineProperty(e, t, {
            get: function () {
              return (
                "HSV" === this.__state.space || x.recalculateHSV(this),
                this.__state[t]
              );
            },
            set: function (e) {
              "HSV" !== this.__state.space &&
                (x.recalculateHSV(this), (this.__state.space = "HSV")),
                (this.__state[t] = e);
            },
          });
        }
        (x.recalculateRGB = function (e, t, n) {
          if ("HEX" === e.__state.space)
            e.__state[t] = _.component_from_hex(e.__state.hex, n);
          else {
            if ("HSV" !== e.__state.space)
              throw new Error("Corrupted color state");
            p.extend(
              e.__state,
              _.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)
            );
          }
        }),
          (x.recalculateHSV = function (e) {
            var t = _.rgb_to_hsv(e.r, e.g, e.b);
            p.extend(e.__state, { s: t.s, v: t.v }),
              p.isNaN(t.h)
                ? p.isUndefined(e.__state.h) && (e.__state.h = 0)
                : (e.__state.h = t.h);
          }),
          (x.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"]),
          C(x.prototype, "r", 2),
          C(x.prototype, "g", 1),
          C(x.prototype, "b", 0),
          S(x.prototype, "h"),
          S(x.prototype, "s"),
          S(x.prototype, "v"),
          Object.defineProperty(x.prototype, "a", {
            get: function () {
              return this.__state.a;
            },
            set: function (e) {
              this.__state.a = e;
            },
          }),
          Object.defineProperty(x.prototype, "hex", {
            get: function () {
              return (
                "HEX" !== this.__state.space &&
                  ((this.__state.hex = _.rgb_to_hex(this.r, this.g, this.b)),
                  (this.__state.space = "HEX")),
                this.__state.hex
              );
            },
            set: function (e) {
              (this.__state.space = "HEX"), (this.__state.hex = e);
            },
          });
        var F =
          (g(E, [
            {
              key: "onChange",
              value: function (e) {
                return (this.__onChange = e), this;
              },
            },
            {
              key: "onFinishChange",
              value: function (e) {
                return (this.__onFinishChange = e), this;
              },
            },
            {
              key: "setValue",
              value: function (e) {
                return (
                  (this.object[this.property] = e),
                  this.__onChange && this.__onChange.call(this, e),
                  this.updateDisplay(),
                  this
                );
              },
            },
            {
              key: "getValue",
              value: function () {
                return this.object[this.property];
              },
            },
            {
              key: "updateDisplay",
              value: function () {
                return this;
              },
            },
            {
              key: "isModified",
              value: function () {
                return this.initialValue !== this.getValue();
              },
            },
          ]),
          E);
        function E(e, t) {
          f(this, E),
            (this.initialValue = e[t]),
            (this.domElement = document.createElement("div")),
            (this.object = e),
            (this.property = t),
            (this.__onChange = void 0),
            (this.__onFinishChange = void 0);
        }
        var A = {};
        p.each(
          {
            HTMLEvents: ["change"],
            MouseEvents: [
              "click",
              "mousemove",
              "mousedown",
              "mouseup",
              "mouseover",
            ],
            KeyboardEvents: ["keydown"],
          },
          function (e, t) {
            p.each(e, function (e) {
              A[e] = t;
            });
          }
        );
        var T = /(\d+(\.\d+)?)px/;
        function P(e) {
          if ("0" === e || p.isUndefined(e)) return 0;
          e = e.match(T);
          return p.isNull(e) ? 0 : parseFloat(e[1]);
        }
        var k = {
            makeSelectable: function (e, t) {
              void 0 !== e &&
                void 0 !== e.style &&
                ((e.onselectstart = t
                  ? function () {
                      return !1;
                    }
                  : function () {}),
                (e.style.MozUserSelect = t ? "auto" : "none"),
                (e.style.KhtmlUserSelect = t ? "auto" : "none"),
                (e.unselectable = t ? "on" : "off"));
            },
            makeFullscreen: function (e, t, n) {
              p.isUndefined(t) && (t = !0),
                p.isUndefined(n) && (n = !0),
                (e.style.position = "absolute"),
                t && ((e.style.left = 0), (e.style.right = 0)),
                n && ((e.style.top = 0), (e.style.bottom = 0));
            },
            fakeEvent: function (e, t, n, o) {
              var r = n || {},
                n = A[t];
              if (!n) throw new Error("Event type " + t + " not supported.");
              var i = document.createEvent(n);
              switch (n) {
                case "MouseEvents":
                  var a = r.x || r.clientX || 0,
                    s = r.y || r.clientY || 0;
                  i.initMouseEvent(
                    t,
                    r.bubbles || !1,
                    r.cancelable || !0,
                    window,
                    r.clickCount || 1,
                    0,
                    0,
                    a,
                    s,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  );
                  break;
                case "KeyboardEvents":
                  s = i.initKeyboardEvent || i.initKeyEvent;
                  p.defaults(r, {
                    cancelable: !0,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    keyCode: void 0,
                    charCode: void 0,
                  }),
                    s(
                      t,
                      r.bubbles || !1,
                      r.cancelable,
                      window,
                      r.ctrlKey,
                      r.altKey,
                      r.shiftKey,
                      r.metaKey,
                      r.keyCode,
                      r.charCode
                    );
                  break;
                default:
                  i.initEvent(t, r.bubbles || !1, r.cancelable || !0);
              }
              p.defaults(i, o), e.dispatchEvent(i);
            },
            bind: function (e, t, n, o) {
              return (
                e.addEventListener
                  ? e.addEventListener(t, n, o || !1)
                  : e.attachEvent && e.attachEvent("on" + t, n),
                k
              );
            },
            unbind: function (e, t, n, o) {
              return (
                e.removeEventListener
                  ? e.removeEventListener(t, n, o || !1)
                  : e.detachEvent && e.detachEvent("on" + t, n),
                k
              );
            },
            addClass: function (e, t) {
              var n;
              return (
                void 0 === e.className
                  ? (e.className = t)
                  : e.className === t ||
                    (-1 === (n = e.className.split(/ +/)).indexOf(t) &&
                      (n.push(t),
                      (e.className = n
                        .join(" ")
                        .replace(/^\s+/, "")
                        .replace(/\s+$/, "")))),
                k
              );
            },
            removeClass: function (e, t) {
              var n;
              return (
                t
                  ? e.className === t
                    ? e.removeAttribute("class")
                    : -1 !== (t = (n = e.className.split(/ +/)).indexOf(t)) &&
                      (n.splice(t, 1), (e.className = n.join(" ")))
                  : (e.className = void 0),
                k
              );
            },
            hasClass: function (e, t) {
              return (
                new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) ||
                !1
              );
            },
            getWidth: function (e) {
              e = getComputedStyle(e);
              return (
                P(e["border-left-width"]) +
                P(e["border-right-width"]) +
                P(e["padding-left"]) +
                P(e["padding-right"]) +
                P(e.width)
              );
            },
            getHeight: function (e) {
              e = getComputedStyle(e);
              return (
                P(e["border-top-width"]) +
                P(e["border-bottom-width"]) +
                P(e["padding-top"]) +
                P(e["padding-bottom"]) +
                P(e.height)
              );
            },
            getOffset: function (e) {
              var t = e,
                n = { left: 0, top: 0 };
              if (t.offsetParent)
                for (
                  ;
                  (n.left += t.offsetLeft),
                    (n.top += t.offsetTop),
                    (t = t.offsetParent);

                );
              return n;
            },
            isActive: function (e) {
              return e === document.activeElement && (e.type || e.href);
            },
          },
          O =
            (n(B, F),
            g(B, [
              {
                key: "setValue",
                value: function (e) {
                  e = v(
                    B.prototype.__proto__ || Object.getPrototypeOf(B.prototype),
                    "setValue",
                    this
                  ).call(this, e);
                  return (
                    this.__onFinishChange &&
                      this.__onFinishChange.call(this, this.getValue()),
                    (this.__prev = this.getValue()),
                    e
                  );
                },
              },
              {
                key: "updateDisplay",
                value: function () {
                  return (
                    !0 === this.getValue()
                      ? (this.__checkbox.setAttribute("checked", "checked"),
                        (this.__checkbox.checked = !0),
                        (this.__prev = !0))
                      : ((this.__checkbox.checked = !1), (this.__prev = !1)),
                    v(
                      B.prototype.__proto__ ||
                        Object.getPrototypeOf(B.prototype),
                      "updateDisplay",
                      this
                    ).call(this)
                  );
                },
              },
            ]),
            B);
        function B(e, t) {
          f(this, B);
          var t = y(
              this,
              (B.__proto__ || Object.getPrototypeOf(B)).call(this, e, t)
            ),
            n = t;
          return (
            (t.__prev = t.getValue()),
            (t.__checkbox = document.createElement("input")),
            t.__checkbox.setAttribute("type", "checkbox"),
            k.bind(
              t.__checkbox,
              "change",
              function () {
                n.setValue(!n.__prev);
              },
              !1
            ),
            t.domElement.appendChild(t.__checkbox),
            t.updateDisplay(),
            t
          );
        }
        var D =
          (n(L, F),
          g(L, [
            {
              key: "setValue",
              value: function (e) {
                e = v(
                  L.prototype.__proto__ || Object.getPrototypeOf(L.prototype),
                  "setValue",
                  this
                ).call(this, e);
                return (
                  this.__onFinishChange &&
                    this.__onFinishChange.call(this, this.getValue()),
                  e
                );
              },
            },
            {
              key: "updateDisplay",
              value: function () {
                return k.isActive(this.__select)
                  ? this
                  : ((this.__select.value = this.getValue()),
                    v(
                      L.prototype.__proto__ ||
                        Object.getPrototypeOf(L.prototype),
                      "updateDisplay",
                      this
                    ).call(this));
              },
            },
          ]),
          L);
        function L(e, t, n) {
          f(this, L);
          var o,
            t = y(
              this,
              (L.__proto__ || Object.getPrototypeOf(L)).call(this, e, t)
            ),
            n = n,
            r = t;
          return (
            (t.__select = document.createElement("select")),
            p.isArray(n) &&
              ((o = {}),
              p.each(n, function (e) {
                o[e] = e;
              }),
              (n = o)),
            p.each(n, function (e, t) {
              var n = document.createElement("option");
              (n.innerHTML = t),
                n.setAttribute("value", e),
                r.__select.appendChild(n);
            }),
            t.updateDisplay(),
            k.bind(t.__select, "change", function () {
              var e = this.options[this.selectedIndex].value;
              r.setValue(e);
            }),
            t.domElement.appendChild(t.__select),
            t
          );
        }
        var R =
          (n(M, F),
          g(M, [
            {
              key: "updateDisplay",
              value: function () {
                return (
                  k.isActive(this.__input) ||
                    (this.__input.value = this.getValue()),
                  v(
                    M.prototype.__proto__ || Object.getPrototypeOf(M.prototype),
                    "updateDisplay",
                    this
                  ).call(this)
                );
              },
            },
          ]),
          M);
        function M(e, t) {
          f(this, M);
          var t = y(
              this,
              (M.__proto__ || Object.getPrototypeOf(M)).call(this, e, t)
            ),
            n = t;
          function o() {
            n.setValue(n.__input.value);
          }
          return (
            (t.__input = document.createElement("input")),
            t.__input.setAttribute("type", "text"),
            k.bind(t.__input, "keyup", o),
            k.bind(t.__input, "change", o),
            k.bind(t.__input, "blur", function () {
              n.__onFinishChange && n.__onFinishChange.call(n, n.getValue());
            }),
            k.bind(t.__input, "keydown", function (e) {
              13 === e.keyCode && this.blur();
            }),
            t.updateDisplay(),
            t.domElement.appendChild(t.__input),
            t
          );
        }
        function N(e) {
          e = e.toString();
          return -1 < e.indexOf(".") ? e.length - e.indexOf(".") - 1 : 0;
        }
        n(I, F),
          g(I, [
            {
              key: "setValue",
              value: function (e) {
                return (
                  void 0 !== this.__min && e < this.__min
                    ? (e = this.__min)
                    : void 0 !== this.__max &&
                      e > this.__max &&
                      (e = this.__max),
                  void 0 !== this.__step &&
                    e % this.__step != 0 &&
                    (e = Math.round(e / this.__step) * this.__step),
                  v(
                    I.prototype.__proto__ || Object.getPrototypeOf(I.prototype),
                    "setValue",
                    this
                  ).call(this, e)
                );
              },
            },
            {
              key: "min",
              value: function (e) {
                return (this.__min = e), this;
              },
            },
            {
              key: "max",
              value: function (e) {
                return (this.__max = e), this;
              },
            },
            {
              key: "step",
              value: function (e) {
                return (
                  (this.__step = e),
                  (this.__impliedStep = e),
                  (this.__precision = N(e)),
                  this
                );
              },
            },
          ]),
          (t = I);
        function I(e, t, n) {
          f(this, I);
          (t = y(
            this,
            (I.__proto__ || Object.getPrototypeOf(I)).call(this, e, t)
          )),
            (n = n || {});
          return (
            (t.__min = n.min),
            (t.__max = n.max),
            (t.__step = n.step),
            p.isUndefined(t.__step)
              ? 0 === t.initialValue
                ? (t.__impliedStep = 1)
                : (t.__impliedStep =
                    Math.pow(
                      10,
                      Math.floor(Math.log(Math.abs(t.initialValue)) / Math.LN10)
                    ) / 10)
              : (t.__impliedStep = t.__step),
            (t.__precision = N(t.__impliedStep)),
            t
          );
        }
        var j =
          (n(H, t),
          g(H, [
            {
              key: "updateDisplay",
              value: function () {
                var e, t;
                return (
                  (this.__input.value = this.__truncationSuspended
                    ? this.getValue()
                    : ((e = this.getValue()),
                      (t = this.__precision),
                      (t = Math.pow(10, t)),
                      Math.round(e * t) / t)),
                  v(
                    H.prototype.__proto__ || Object.getPrototypeOf(H.prototype),
                    "updateDisplay",
                    this
                  ).call(this)
                );
              },
            },
          ]),
          H);
        function H(e, t, n) {
          f(this, H);
          n = y(
            this,
            (H.__proto__ || Object.getPrototypeOf(H)).call(this, e, t, n)
          );
          n.__truncationSuspended = !1;
          var o = n,
            r = void 0;
          function i() {
            o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
          }
          function a(e) {
            var t = r - e.clientY;
            o.setValue(o.getValue() + t * o.__impliedStep), (r = e.clientY);
          }
          function s() {
            k.unbind(window, "mousemove", a),
              k.unbind(window, "mouseup", s),
              i();
          }
          return (
            (n.__input = document.createElement("input")),
            n.__input.setAttribute("type", "text"),
            k.bind(n.__input, "change", function () {
              var e = parseFloat(o.__input.value);
              p.isNaN(e) || o.setValue(e);
            }),
            k.bind(n.__input, "blur", function () {
              i();
            }),
            k.bind(n.__input, "mousedown", function (e) {
              k.bind(window, "mousemove", a),
                k.bind(window, "mouseup", s),
                (r = e.clientY);
            }),
            k.bind(n.__input, "keydown", function (e) {
              13 === e.keyCode &&
                ((o.__truncationSuspended = !0),
                this.blur(),
                (o.__truncationSuspended = !1),
                i());
            }),
            n.updateDisplay(),
            n.domElement.appendChild(n.__input),
            n
          );
        }
        function G(e, t, n, o, r) {
          return o + ((e - t) / (n - t)) * (r - o);
        }
        var V =
          (n(z, t),
          g(z, [
            {
              key: "updateDisplay",
              value: function () {
                var e =
                  (this.getValue() - this.__min) / (this.__max - this.__min);
                return (
                  (this.__foreground.style.width = 100 * e + "%"),
                  v(
                    z.prototype.__proto__ || Object.getPrototypeOf(z.prototype),
                    "updateDisplay",
                    this
                  ).call(this)
                );
              },
            },
          ]),
          z);
        function z(e, t, n, o, r) {
          f(this, z);
          var r = y(
              this,
              (z.__proto__ || Object.getPrototypeOf(z)).call(this, e, t, {
                min: n,
                max: o,
                step: r,
              })
            ),
            i = r;
          function a(e) {
            e.preventDefault();
            var t = i.__background.getBoundingClientRect();
            return (
              i.setValue(G(e.clientX, t.left, t.right, i.__min, i.__max)), !1
            );
          }
          function s() {
            k.unbind(window, "mousemove", a),
              k.unbind(window, "mouseup", s),
              i.__onFinishChange && i.__onFinishChange.call(i, i.getValue());
          }
          function l(e) {
            var t = e.touches[0].clientX,
              e = i.__background.getBoundingClientRect();
            i.setValue(G(t, e.left, e.right, i.__min, i.__max));
          }
          function u() {
            k.unbind(window, "touchmove", l),
              k.unbind(window, "touchend", u),
              i.__onFinishChange && i.__onFinishChange.call(i, i.getValue());
          }
          return (
            (r.__background = document.createElement("div")),
            (r.__foreground = document.createElement("div")),
            k.bind(r.__background, "mousedown", function (e) {
              document.activeElement.blur(),
                k.bind(window, "mousemove", a),
                k.bind(window, "mouseup", s),
                a(e);
            }),
            k.bind(r.__background, "touchstart", function (e) {
              1 === e.touches.length &&
                (k.bind(window, "touchmove", l),
                k.bind(window, "touchend", u),
                l(e));
            }),
            k.addClass(r.__background, "slider"),
            k.addClass(r.__foreground, "slider-fg"),
            r.updateDisplay(),
            r.__background.appendChild(r.__foreground),
            r.domElement.appendChild(r.__background),
            r
          );
        }
        var U =
          (n(X, F),
          g(X, [
            {
              key: "fire",
              value: function () {
                this.__onChange && this.__onChange.call(this),
                  this.getValue().call(this.object),
                  this.__onFinishChange &&
                    this.__onFinishChange.call(this, this.getValue());
              },
            },
          ]),
          X);
        function X(e, t, n) {
          f(this, X);
          var t = y(
              this,
              (X.__proto__ || Object.getPrototypeOf(X)).call(this, e, t)
            ),
            o = t;
          return (
            (t.__button = document.createElement("div")),
            (t.__button.innerHTML = void 0 === n ? "Fire" : n),
            k.bind(t.__button, "click", function (e) {
              return e.preventDefault(), o.fire(), !1;
            }),
            k.addClass(t.__button, "button"),
            t.domElement.appendChild(t.__button),
            t
          );
        }
        var W =
          (n(K, F),
          g(K, [
            {
              key: "updateDisplay",
              value: function () {
                var t,
                  n = h(this.getValue());
                !1 !== n &&
                  ((t = !1),
                  p.each(
                    x.COMPONENTS,
                    function (e) {
                      if (
                        !p.isUndefined(n[e]) &&
                        !p.isUndefined(this.__color.__state[e]) &&
                        n[e] !== this.__color.__state[e]
                      )
                        return (t = !0), {};
                    },
                    this
                  ),
                  t && p.extend(this.__color.__state, n)),
                  p.extend(this.__temp.__state, this.__color.__state),
                  (this.__temp.a = 1);
                var e = this.__color.v < 0.5 || 0.5 < this.__color.s ? 255 : 0,
                  o = 255 - e;
                p.extend(this.__field_knob.style, {
                  marginLeft: 100 * this.__color.s - 7 + "px",
                  marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                  backgroundColor: this.__temp.toHexString(),
                  border:
                    this.__field_knob_border +
                    "rgb(" +
                    e +
                    "," +
                    e +
                    "," +
                    e +
                    ")",
                }),
                  (this.__hue_knob.style.marginTop =
                    100 * (1 - this.__color.h / 360) + "px"),
                  (this.__temp.s = 1),
                  (this.__temp.v = 1),
                  J(
                    this.__saturation_field,
                    "left",
                    "#fff",
                    this.__temp.toHexString()
                  ),
                  (this.__input.value = this.__color.toString()),
                  p.extend(this.__input.style, {
                    backgroundColor: this.__color.toHexString(),
                    color: "rgb(" + e + "," + e + "," + e + ")",
                    textShadow:
                      this.__input_textShadow +
                      "rgba(" +
                      o +
                      "," +
                      o +
                      "," +
                      o +
                      ",.7)",
                  });
              },
            },
          ]),
          K);
        function K(e, t) {
          f(this, K);
          var n = y(
            this,
            (K.__proto__ || Object.getPrototypeOf(K)).call(this, e, t)
          );
          (n.__color = new x(n.getValue())), (n.__temp = new x(0));
          var o = n;
          (n.domElement = document.createElement("div")),
            k.makeSelectable(n.domElement, !1),
            (n.__selector = document.createElement("div")),
            (n.__selector.className = "selector"),
            (n.__saturation_field = document.createElement("div")),
            (n.__saturation_field.className = "saturation-field"),
            (n.__field_knob = document.createElement("div")),
            (n.__field_knob.className = "field-knob"),
            (n.__field_knob_border = "2px solid "),
            (n.__hue_knob = document.createElement("div")),
            (n.__hue_knob.className = "hue-knob"),
            (n.__hue_field = document.createElement("div")),
            (n.__hue_field.className = "hue-field"),
            (n.__input = document.createElement("input")),
            (n.__input.type = "text"),
            (n.__input_textShadow = "0 1px 1px "),
            k.bind(n.__input, "keydown", function (e) {
              13 === e.keyCode && l.call(this);
            }),
            k.bind(n.__input, "blur", l),
            k.bind(n.__selector, "mousedown", function () {
              k.addClass(this, "drag").bind(window, "mouseup", function () {
                k.removeClass(o.__selector, "drag");
              });
            }),
            k.bind(n.__selector, "touchstart", function () {
              k.addClass(this, "drag").bind(window, "touchend", function () {
                k.removeClass(o.__selector, "drag");
              });
            });
          e = document.createElement("div");
          function r(e) {
            d(e),
              k.bind(window, "mousemove", d),
              k.bind(window, "touchmove", d),
              k.bind(window, "mouseup", a),
              k.bind(window, "touchend", a);
          }
          function i(e) {
            c(e),
              k.bind(window, "mousemove", c),
              k.bind(window, "touchmove", c),
              k.bind(window, "mouseup", s),
              k.bind(window, "touchend", s);
          }
          function a() {
            k.unbind(window, "mousemove", d),
              k.unbind(window, "touchmove", d),
              k.unbind(window, "mouseup", a),
              k.unbind(window, "touchend", a),
              u();
          }
          function s() {
            k.unbind(window, "mousemove", c),
              k.unbind(window, "touchmove", c),
              k.unbind(window, "mouseup", s),
              k.unbind(window, "touchend", s),
              u();
          }
          function l() {
            var e = h(this.value);
            !1 !== e
              ? ((o.__color.__state = e), o.setValue(o.__color.toOriginal()))
              : (this.value = o.__color.toString());
          }
          function u() {
            o.__onFinishChange &&
              o.__onFinishChange.call(o, o.__color.toOriginal());
          }
          function d(e) {
            -1 === e.type.indexOf("touch") && e.preventDefault();
            var t = o.__saturation_field.getBoundingClientRect(),
              n = (e.touches && e.touches[0]) || e,
              e = n.clientX,
              n = n.clientY,
              e = (e - t.left) / (t.right - t.left),
              t = 1 - (n - t.top) / (t.bottom - t.top);
            return (
              1 < t ? (t = 1) : t < 0 && (t = 0),
              1 < e ? (e = 1) : e < 0 && (e = 0),
              (o.__color.v = t),
              (o.__color.s = e),
              o.setValue(o.__color.toOriginal()),
              !1
            );
          }
          function c(e) {
            -1 === e.type.indexOf("touch") && e.preventDefault();
            var t = o.__hue_field.getBoundingClientRect(),
              t =
                1 -
                (((e.touches && e.touches[0]) || e).clientY - t.top) /
                  (t.bottom - t.top);
            return (
              1 < t ? (t = 1) : t < 0 && (t = 0),
              (o.__color.h = 360 * t),
              o.setValue(o.__color.toOriginal()),
              !1
            );
          }
          return (
            p.extend(n.__selector.style, {
              width: "122px",
              height: "102px",
              padding: "3px",
              backgroundColor: "#222",
              boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
            }),
            p.extend(n.__field_knob.style, {
              position: "absolute",
              width: "12px",
              height: "12px",
              border:
                n.__field_knob_border + (n.__color.v < 0.5 ? "#fff" : "#000"),
              boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
              borderRadius: "12px",
              zIndex: 1,
            }),
            p.extend(n.__hue_knob.style, {
              position: "absolute",
              width: "15px",
              height: "2px",
              borderRight: "4px solid #fff",
              zIndex: 1,
            }),
            p.extend(n.__saturation_field.style, {
              width: "100px",
              height: "100px",
              border: "1px solid #555",
              marginRight: "3px",
              display: "inline-block",
              cursor: "pointer",
            }),
            p.extend(e.style, {
              width: "100%",
              height: "100%",
              background: "none",
            }),
            J(e, "top", "rgba(0,0,0,0)", "#000"),
            p.extend(n.__hue_field.style, {
              width: "15px",
              height: "100px",
              border: "1px solid #555",
              cursor: "ns-resize",
              position: "absolute",
              top: "3px",
              right: "3px",
            }),
            ((t = n.__hue_field).style.background = ""),
            (t.style.cssText +=
              "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"),
            (t.style.cssText +=
              "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
            (t.style.cssText +=
              "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
            (t.style.cssText +=
              "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
            (t.style.cssText +=
              "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
            p.extend(n.__input.style, {
              outline: "none",
              textAlign: "center",
              color: "#fff",
              border: 0,
              fontWeight: "bold",
              textShadow: n.__input_textShadow + "rgba(0,0,0,0.7)",
            }),
            k.bind(n.__saturation_field, "mousedown", r),
            k.bind(n.__saturation_field, "touchstart", r),
            k.bind(n.__field_knob, "mousedown", r),
            k.bind(n.__field_knob, "touchstart", r),
            k.bind(n.__hue_field, "mousedown", i),
            k.bind(n.__hue_field, "touchstart", i),
            n.__saturation_field.appendChild(e),
            n.__selector.appendChild(n.__field_knob),
            n.__selector.appendChild(n.__saturation_field),
            n.__selector.appendChild(n.__hue_field),
            n.__hue_field.appendChild(n.__hue_knob),
            n.domElement.appendChild(n.__input),
            n.domElement.appendChild(n.__selector),
            n.updateDisplay(),
            n
          );
        }
        var Y = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        function J(t, n, o, r) {
          (t.style.background = ""),
            p.each(Y, function (e) {
              t.style.cssText +=
                "background: " +
                e +
                "linear-gradient(" +
                n +
                ", " +
                o +
                " 0%, " +
                r +
                " 100%); ";
            });
        }
        var n = function (e, t) {
            var n = t || document,
              t = document.createElement("style");
            (t.type = "text/css"), (t.innerHTML = e);
            n = n.getElementsByTagName("head")[0];
            try {
              n.appendChild(t);
            } catch (e) {}
          },
          $ = function (e, t) {
            var n = e[t];
            return p.isArray(arguments[2]) || p.isObject(arguments[2])
              ? new D(e, t, arguments[2])
              : p.isNumber(n)
              ? p.isNumber(arguments[2]) && p.isNumber(arguments[3])
                ? p.isNumber(arguments[4])
                  ? new V(e, t, arguments[2], arguments[3], arguments[4])
                  : new V(e, t, arguments[2], arguments[3])
                : p.isNumber(arguments[4])
                ? new j(e, t, {
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4],
                  })
                : new j(e, t, { min: arguments[2], max: arguments[3] })
              : p.isString(n)
              ? new R(e, t)
              : p.isFunction(n)
              ? new U(e, t, "")
              : p.isBoolean(n)
              ? new O(e, t)
              : null;
          };
        var Q =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              setTimeout(e, 1e3 / 60);
            },
          q =
            (g(Z, [
              {
                key: "show",
                value: function () {
                  var e = this;
                  (this.backgroundElement.style.display = "block"),
                    (this.domElement.style.display = "block"),
                    (this.domElement.style.opacity = 0),
                    (this.domElement.style.webkitTransform = "scale(1.1)"),
                    this.layout(),
                    p.defer(function () {
                      (e.backgroundElement.style.opacity = 1),
                        (e.domElement.style.opacity = 1),
                        (e.domElement.style.webkitTransform = "scale(1)");
                    });
                },
              },
              {
                key: "hide",
                value: function () {
                  function e() {
                    (t.domElement.style.display = "none"),
                      (t.backgroundElement.style.display = "none"),
                      k.unbind(t.domElement, "webkitTransitionEnd", e),
                      k.unbind(t.domElement, "transitionend", e),
                      k.unbind(t.domElement, "oTransitionEnd", e);
                  }
                  var t = this;
                  k.bind(this.domElement, "webkitTransitionEnd", e),
                    k.bind(this.domElement, "transitionend", e),
                    k.bind(this.domElement, "oTransitionEnd", e),
                    (this.backgroundElement.style.opacity = 0),
                    (this.domElement.style.opacity = 0),
                    (this.domElement.style.webkitTransform = "scale(1.1)");
                },
              },
              {
                key: "layout",
                value: function () {
                  (this.domElement.style.left =
                    window.innerWidth / 2 -
                    k.getWidth(this.domElement) / 2 +
                    "px"),
                    (this.domElement.style.top =
                      window.innerHeight / 2 -
                      k.getHeight(this.domElement) / 2 +
                      "px");
                },
              },
            ]),
            Z);
        function Z() {
          f(this, Z),
            (this.backgroundElement = document.createElement("div")),
            p.extend(this.backgroundElement.style, {
              backgroundColor: "rgba(0,0,0,0.8)",
              top: 0,
              left: 0,
              display: "none",
              zIndex: "1000",
              opacity: 0,
              WebkitTransition: "opacity 0.2s linear",
              transition: "opacity 0.2s linear",
            }),
            k.makeFullscreen(this.backgroundElement),
            (this.backgroundElement.style.position = "fixed"),
            (this.domElement = document.createElement("div")),
            p.extend(this.domElement.style, {
              position: "fixed",
              display: "none",
              zIndex: "1001",
              opacity: 0,
              WebkitTransition:
                "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
              transition: "transform 0.2s ease-out, opacity 0.2s linear",
            }),
            document.body.appendChild(this.backgroundElement),
            document.body.appendChild(this.domElement);
          var e = this;
          k.bind(this.backgroundElement, "click", function () {
            e.hide();
          });
        }
        n(
          (function (e) {
            if (e && "undefined" != typeof window) {
              var t = document.createElement("style");
              return (
                t.setAttribute("type", "text/css"),
                (t.innerHTML = e),
                document.head.appendChild(t),
                e
              );
            }
          })(
            ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"
          )
        );
        var ee = "Default",
          te = (function () {
            try {
              return !!window.localStorage;
            } catch (e) {
              return !1;
            }
          })(),
          ne = void 0,
          oe = !0,
          re = void 0,
          ie = !1,
          ae = [],
          se = function t(e) {
            var n = this,
              o = e || {};
            (this.domElement = document.createElement("div")),
              (this.__ul = document.createElement("ul")),
              this.domElement.appendChild(this.__ul),
              k.addClass(this.domElement, "dg"),
              (this.__folders = {}),
              (this.__controllers = []),
              (this.__rememberedObjects = []),
              (this.__rememberedObjectIndecesToControllers = []),
              (this.__listening = []),
              (o = p.defaults(o, {
                closeOnTop: !1,
                autoPlace: !0,
                width: t.DEFAULT_WIDTH,
              })),
              (o = p.defaults(o, {
                resizable: o.autoPlace,
                hideable: o.autoPlace,
              })),
              p.isUndefined(o.load)
                ? (o.load = { preset: ee })
                : o.preset && (o.load.preset = o.preset),
              p.isUndefined(o.parent) && o.hideable && ae.push(this),
              (o.resizable = p.isUndefined(o.parent) && o.resizable),
              o.autoPlace && p.isUndefined(o.scrollable) && (o.scrollable = !0);
            var r,
              i,
              a,
              s,
              l = te && "true" === localStorage.getItem(_e(0, "isLocal")),
              u = void 0,
              d = void 0;
            function c(e) {
              return (
                e.preventDefault(),
                (i.width += a - e.clientX),
                i.onResize(),
                (a = e.clientX),
                !1
              );
            }
            function h() {
              k.removeClass(i.__closeButton, se.CLASS_DRAG),
                k.unbind(window, "mousemove", c),
                k.unbind(window, "mouseup", h);
            }
            function _(e) {
              return (
                e.preventDefault(),
                (a = e.clientX),
                k.addClass(i.__closeButton, se.CLASS_DRAG),
                k.bind(window, "mousemove", c),
                k.bind(window, "mouseup", h),
                !1
              );
            }
            Object.defineProperties(this, {
              parent: {
                get: function () {
                  return o.parent;
                },
              },
              scrollable: {
                get: function () {
                  return o.scrollable;
                },
              },
              autoPlace: {
                get: function () {
                  return o.autoPlace;
                },
              },
              closeOnTop: {
                get: function () {
                  return o.closeOnTop;
                },
              },
              preset: {
                get: function () {
                  return (n.parent ? n.getRoot() : o.load).preset;
                },
                set: function (e) {
                  n.parent ? (n.getRoot().preset = e) : (o.load.preset = e),
                    (function (e) {
                      for (var t = 0; t < e.__preset_select.length; t++)
                        e.__preset_select[t].value === e.preset &&
                          (e.__preset_select.selectedIndex = t);
                    })(this),
                    n.revert();
                },
              },
              width: {
                get: function () {
                  return o.width;
                },
                set: function (e) {
                  (o.width = e), fe(n, e);
                },
              },
              name: {
                get: function () {
                  return o.name;
                },
                set: function (e) {
                  (o.name = e), d && (d.innerHTML = o.name);
                },
              },
              closed: {
                get: function () {
                  return o.closed;
                },
                set: function (e) {
                  (o.closed = e),
                    o.closed
                      ? k.addClass(n.__ul, t.CLASS_CLOSED)
                      : k.removeClass(n.__ul, t.CLASS_CLOSED),
                    this.onResize(),
                    n.__closeButton &&
                      (n.__closeButton.innerHTML = e
                        ? t.TEXT_OPEN
                        : t.TEXT_CLOSED);
                },
              },
              load: {
                get: function () {
                  return o.load;
                },
              },
              useLocalStorage: {
                get: function () {
                  return l;
                },
                set: function (e) {
                  te &&
                    ((l = e)
                      ? k.bind(window, "unload", u)
                      : k.unbind(window, "unload", u),
                    localStorage.setItem(_e(0, "isLocal"), e));
                },
              },
            }),
              p.isUndefined(o.parent)
                ? ((this.closed = o.closed || !1),
                  k.addClass(this.domElement, t.CLASS_MAIN),
                  k.makeSelectable(this.domElement, !1),
                  te &&
                    l &&
                    ((n.useLocalStorage = !0),
                    (r = localStorage.getItem(_e(0, "gui"))) &&
                      (o.load = JSON.parse(r))),
                  (this.__closeButton = document.createElement("div")),
                  (this.__closeButton.innerHTML = t.TEXT_CLOSED),
                  k.addClass(this.__closeButton, t.CLASS_CLOSE_BUTTON),
                  o.closeOnTop
                    ? (k.addClass(this.__closeButton, t.CLASS_CLOSE_TOP),
                      this.domElement.insertBefore(
                        this.__closeButton,
                        this.domElement.childNodes[0]
                      ))
                    : (k.addClass(this.__closeButton, t.CLASS_CLOSE_BOTTOM),
                      this.domElement.appendChild(this.__closeButton)),
                  k.bind(this.__closeButton, "click", function () {
                    n.closed = !n.closed;
                  }))
                : (void 0 === o.closed && (o.closed = !0),
                  (r = document.createTextNode(o.name)),
                  k.addClass(r, "controller-name"),
                  (d = le(n, r)),
                  k.addClass(this.__ul, t.CLASS_CLOSED),
                  k.addClass(d, "title"),
                  k.bind(d, "click", function (e) {
                    return e.preventDefault(), (n.closed = !n.closed), !1;
                  }),
                  o.closed || (this.closed = !1)),
              o.autoPlace &&
                (p.isUndefined(o.parent) &&
                  (oe &&
                    ((re = document.createElement("div")),
                    k.addClass(re, "dg"),
                    k.addClass(re, t.CLASS_AUTO_PLACE_CONTAINER),
                    document.body.appendChild(re),
                    (oe = !1)),
                  re.appendChild(this.domElement),
                  k.addClass(this.domElement, t.CLASS_AUTO_PLACE)),
                this.parent || fe(n, o.width)),
              (this.__resizeHandler = function () {
                n.onResizeDebounced();
              }),
              k.bind(window, "resize", this.__resizeHandler),
              k.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
              k.bind(this.__ul, "transitionend", this.__resizeHandler),
              k.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
              this.onResize(),
              o.resizable &&
                ((a = void 0),
                ((i = this).__resize_handle = document.createElement("div")),
                p.extend(i.__resize_handle.style, {
                  width: "6px",
                  marginLeft: "-3px",
                  height: "200px",
                  cursor: "ew-resize",
                  position: "absolute",
                }),
                k.bind(i.__resize_handle, "mousedown", _),
                k.bind(i.__closeButton, "mousedown", _),
                i.domElement.insertBefore(
                  i.__resize_handle,
                  i.domElement.firstElementChild
                )),
              (u = function () {
                te &&
                  "true" === localStorage.getItem(_e(0, "isLocal")) &&
                  localStorage.setItem(
                    _e(0, "gui"),
                    JSON.stringify(n.getSaveObject())
                  );
              }),
              (this.saveToLocalStorageIfPossible = u),
              o.parent ||
                (((s = n.getRoot()).width += 1),
                p.defer(function () {
                  --s.width;
                }));
          };
        function le(e, t, n) {
          var o = document.createElement("li");
          return (
            t && o.appendChild(t),
            n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o),
            e.onResize(),
            o
          );
        }
        function ue(e) {
          k.unbind(window, "resize", e.__resizeHandler),
            e.saveToLocalStorageIfPossible &&
              k.unbind(window, "unload", e.saveToLocalStorageIfPossible);
        }
        function de(e, t) {
          e = e.__preset_select[e.__preset_select.selectedIndex];
          e.innerHTML = t ? e.value + "*" : e.value;
        }
        function ce(e, t) {
          var n = e.getRoot(),
            o = n.__rememberedObjects.indexOf(t.object);
          if (-1 !== o) {
            var r = n.__rememberedObjectIndecesToControllers[o];
            if (
              (void 0 === r &&
                (n.__rememberedObjectIndecesToControllers[o] = r = {}),
              (r[t.property] = t),
              n.load && n.load.remembered)
            ) {
              (r = n.load.remembered), (n = void 0);
              if (r[e.preset]) n = r[e.preset];
              else {
                if (!r[ee]) return;
                n = r[ee];
              }
              n[o] &&
                void 0 !== n[o][t.property] &&
                ((o = n[o][t.property]), (t.initialValue = o), t.setValue(o));
            }
          }
        }
        function he(e, t, n, o) {
          if (void 0 === t[n])
            throw new Error('Object "' + t + '" has no property "' + n + '"');
          var r = void 0;
          (r = o.color
            ? new W(t, n)
            : ((i = [t, n].concat(o.factoryArgs)), $.apply(e, i))),
            o.before instanceof F && (o.before = o.before.__li),
            ce(e, r),
            k.addClass(r.domElement, "c");
          n = document.createElement("span");
          k.addClass(n, "property-name"), (n.innerHTML = r.property);
          var i = document.createElement("div");
          i.appendChild(n), i.appendChild(r.domElement);
          var a,
            s,
            l,
            u,
            o = le(e, i, o.before);
          return (
            k.addClass(o, se.CLASS_CONTROLLER_ROW),
            r instanceof W
              ? k.addClass(o, "color")
              : k.addClass(o, m(r.getValue())),
            (a = e),
            (s = o),
            ((l = r).__li = s),
            (l.__gui = a),
            p.extend(l, {
              options: function (e) {
                if (1 < arguments.length) {
                  var t = l.__li.nextElementSibling;
                  return (
                    l.remove(),
                    he(a, l.object, l.property, {
                      before: t,
                      factoryArgs: [p.toArray(arguments)],
                    })
                  );
                }
                if (p.isArray(e) || p.isObject(e)) {
                  t = l.__li.nextElementSibling;
                  return (
                    l.remove(),
                    he(a, l.object, l.property, { before: t, factoryArgs: [e] })
                  );
                }
              },
              name: function (e) {
                return (
                  (l.__li.firstElementChild.firstElementChild.innerHTML = e), l
                );
              },
              listen: function () {
                return l.__gui.listen(l), l;
              },
              remove: function () {
                return l.__gui.remove(l), l;
              },
            }),
            l instanceof V
              ? ((u = new j(l.object, l.property, {
                  min: l.__min,
                  max: l.__max,
                  step: l.__step,
                })),
                p.each(
                  [
                    "updateDisplay",
                    "onChange",
                    "onFinishChange",
                    "step",
                    "min",
                    "max",
                  ],
                  function (e) {
                    var t = l[e],
                      n = u[e];
                    l[e] = u[e] = function () {
                      var e = Array.prototype.slice.call(arguments);
                      return n.apply(u, e), t.apply(l, e);
                    };
                  }
                ),
                k.addClass(s, "has-slider"),
                l.domElement.insertBefore(
                  u.domElement,
                  l.domElement.firstElementChild
                ))
              : l instanceof j
              ? ((o = function (e) {
                  if (p.isNumber(l.__min) && p.isNumber(l.__max)) {
                    var t =
                        l.__li.firstElementChild.firstElementChild.innerHTML,
                      n = -1 < l.__gui.__listening.indexOf(l);
                    l.remove();
                    var o = he(a, l.object, l.property, {
                      before: l.__li.nextElementSibling,
                      factoryArgs: [l.__min, l.__max, l.__step],
                    });
                    return o.name(t), n && o.listen(), o;
                  }
                  return e;
                }),
                (l.min = p.compose(o, l.min)),
                (l.max = p.compose(o, l.max)))
              : l instanceof O
              ? (k.bind(s, "click", function () {
                  k.fakeEvent(l.__checkbox, "click");
                }),
                k.bind(l.__checkbox, "click", function (e) {
                  e.stopPropagation();
                }))
              : l instanceof U
              ? (k.bind(s, "click", function () {
                  k.fakeEvent(l.__button, "click");
                }),
                k.bind(s, "mouseover", function () {
                  k.addClass(l.__button, "hover");
                }),
                k.bind(s, "mouseout", function () {
                  k.removeClass(l.__button, "hover");
                }))
              : l instanceof W &&
                (k.addClass(s, "color"),
                (l.updateDisplay = p.compose(function (e) {
                  return (s.style.borderLeftColor = l.__color.toString()), e;
                }, l.updateDisplay)),
                l.updateDisplay()),
            (l.setValue = p.compose(function (e) {
              return (
                a.getRoot().__preset_select &&
                  l.isModified() &&
                  de(a.getRoot(), !0),
                e
              );
            }, l.setValue)),
            e.__controllers.push(r),
            r
          );
        }
        function _e(e, t) {
          return document.location.href + "." + t;
        }
        function pe(e, t, n) {
          var o = document.createElement("option");
          (o.innerHTML = t),
            (o.value = t),
            e.__preset_select.appendChild(o),
            n &&
              (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
        }
        function me(e, t) {
          t.style.display = e.useLocalStorage ? "block" : "none";
        }
        function fe(e, t) {
          (e.domElement.style.width = t + "px"),
            e.__save_row &&
              e.autoPlace &&
              (e.__save_row.style.width = t + "px"),
            e.__closeButton && (e.__closeButton.style.width = t + "px");
        }
        function ge(r, i) {
          var a = {};
          return (
            p.each(r.__rememberedObjects, function (e, t) {
              var n = {},
                o = r.__rememberedObjectIndecesToControllers[t];
              p.each(o, function (e, t) {
                n[t] = i ? e.initialValue : e.getValue();
              }),
                (a[t] = n);
            }),
            a
          );
        }
        (se.toggleHide = function () {
          (ie = !ie),
            p.each(ae, function (e) {
              e.domElement.style.display = ie ? "none" : "";
            });
        }),
          (se.CLASS_AUTO_PLACE = "a"),
          (se.CLASS_AUTO_PLACE_CONTAINER = "ac"),
          (se.CLASS_MAIN = "main"),
          (se.CLASS_CONTROLLER_ROW = "cr"),
          (se.CLASS_TOO_TALL = "taller-than-window"),
          (se.CLASS_CLOSED = "closed"),
          (se.CLASS_CLOSE_BUTTON = "close-button"),
          (se.CLASS_CLOSE_TOP = "close-top"),
          (se.CLASS_CLOSE_BOTTOM = "close-bottom"),
          (se.CLASS_DRAG = "drag"),
          (se.DEFAULT_WIDTH = 245),
          (se.TEXT_CLOSED = "Close Controls"),
          (se.TEXT_OPEN = "Open Controls"),
          (se._keydownHandler = function (e) {
            "text" === document.activeElement.type ||
              (72 !== e.which && 72 !== e.keyCode) ||
              se.toggleHide();
          }),
          k.bind(window, "keydown", se._keydownHandler, !1),
          p.extend(se.prototype, {
            add: function (e, t) {
              return he(this, e, t, {
                factoryArgs: Array.prototype.slice.call(arguments, 2),
              });
            },
            addColor: function (e, t) {
              return he(this, e, t, { color: !0 });
            },
            remove: function (e) {
              this.__ul.removeChild(e.__li),
                this.__controllers.splice(this.__controllers.indexOf(e), 1);
              var t = this;
              p.defer(function () {
                t.onResize();
              });
            },
            destroy: function () {
              if (this.parent)
                throw new Error(
                  "Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."
                );
              this.autoPlace && re.removeChild(this.domElement);
              var t = this;
              p.each(this.__folders, function (e) {
                t.removeFolder(e);
              }),
                k.unbind(window, "keydown", se._keydownHandler, !1),
                ue(this);
            },
            addFolder: function (e) {
              if (void 0 !== this.__folders[e])
                throw new Error(
                  'You already have a folder in this GUI by the name "' +
                    e +
                    '"'
                );
              var t = { name: e, parent: this };
              (t.autoPlace = this.autoPlace),
                this.load &&
                  this.load.folders &&
                  this.load.folders[e] &&
                  ((t.closed = this.load.folders[e].closed),
                  (t.load = this.load.folders[e]));
              t = new se(t);
              this.__folders[e] = t;
              e = le(this, t.domElement);
              return k.addClass(e, "folder"), t;
            },
            removeFolder: function (t) {
              this.__ul.removeChild(t.domElement.parentElement),
                delete this.__folders[t.name],
                this.load &&
                  this.load.folders &&
                  this.load.folders[t.name] &&
                  delete this.load.folders[t.name],
                ue(t);
              var e = this;
              p.each(t.__folders, function (e) {
                t.removeFolder(e);
              }),
                p.defer(function () {
                  e.onResize();
                });
            },
            open: function () {
              this.closed = !1;
            },
            close: function () {
              this.closed = !0;
            },
            hide: function () {
              this.domElement.style.display = "none";
            },
            show: function () {
              this.domElement.style.display = "";
            },
            onResize: function () {
              var e,
                t,
                n = this.getRoot();
              n.scrollable &&
                ((e = k.getOffset(n.__ul).top),
                (t = 0),
                p.each(n.__ul.childNodes, function (e) {
                  (n.autoPlace && e === n.__save_row) || (t += k.getHeight(e));
                }),
                window.innerHeight - e - 20 < t
                  ? (k.addClass(n.domElement, se.CLASS_TOO_TALL),
                    (n.__ul.style.height = window.innerHeight - e - 20 + "px"))
                  : (k.removeClass(n.domElement, se.CLASS_TOO_TALL),
                    (n.__ul.style.height = "auto"))),
                n.__resize_handle &&
                  p.defer(function () {
                    n.__resize_handle.style.height = n.__ul.offsetHeight + "px";
                  }),
                n.__closeButton &&
                  (n.__closeButton.style.width = n.width + "px");
            },
            onResizeDebounced: p.debounce(function () {
              this.onResize();
            }, 50),
            remember: function () {
              if (
                (p.isUndefined(ne) &&
                  ((ne = new q()).domElement.innerHTML =
                    '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'),
                this.parent)
              )
                throw new Error(
                  "You can only call remember on a top level GUI."
                );
              var t = this;
              p.each(Array.prototype.slice.call(arguments), function (e) {
                0 === t.__rememberedObjects.length &&
                  (function (n) {
                    var e = (n.__save_row = document.createElement("li"));
                    k.addClass(n.domElement, "has-save"),
                      n.__ul.insertBefore(e, n.__ul.firstChild),
                      k.addClass(e, "save-row");
                    var t = document.createElement("span");
                    (t.innerHTML = "&nbsp;"), k.addClass(t, "button gears");
                    var o = document.createElement("span");
                    (o.innerHTML = "Save"),
                      k.addClass(o, "button"),
                      k.addClass(o, "save");
                    var r = document.createElement("span");
                    (r.innerHTML = "New"),
                      k.addClass(r, "button"),
                      k.addClass(r, "save-as");
                    var i = document.createElement("span");
                    (i.innerHTML = "Revert"),
                      k.addClass(i, "button"),
                      k.addClass(i, "revert");
                    var a = (n.__preset_select =
                      document.createElement("select"));
                    n.load && n.load.remembered
                      ? p.each(n.load.remembered, function (e, t) {
                          pe(n, t, t === n.preset);
                        })
                      : pe(n, ee, !1);
                    {
                      var s;
                      k.bind(a, "change", function () {
                        for (var e = 0; e < n.__preset_select.length; e++)
                          n.__preset_select[e].innerHTML =
                            n.__preset_select[e].value;
                        n.preset = this.value;
                      }),
                        e.appendChild(a),
                        e.appendChild(t),
                        e.appendChild(o),
                        e.appendChild(r),
                        e.appendChild(i),
                        te &&
                          ((s = document.getElementById("dg-local-explain")),
                          (e = document.getElementById("dg-local-storage")),
                          (document.getElementById(
                            "dg-save-locally"
                          ).style.display = "block"),
                          "true" === localStorage.getItem(_e(0, "isLocal")) &&
                            e.setAttribute("checked", "checked"),
                          me(n, s),
                          k.bind(e, "change", function () {
                            (n.useLocalStorage = !n.useLocalStorage), me(n, s);
                          }));
                    }
                    var l = document.getElementById("dg-new-constructor");
                    k.bind(l, "keydown", function (e) {
                      !e.metaKey ||
                        (67 !== e.which && 67 !== e.keyCode) ||
                        ne.hide();
                    }),
                      k.bind(t, "click", function () {
                        (l.innerHTML = JSON.stringify(
                          n.getSaveObject(),
                          void 0,
                          2
                        )),
                          ne.show(),
                          l.focus(),
                          l.select();
                      }),
                      k.bind(o, "click", function () {
                        n.save();
                      }),
                      k.bind(r, "click", function () {
                        var e = prompt("Enter a new preset name.");
                        e && n.saveAs(e);
                      }),
                      k.bind(i, "click", function () {
                        n.revert();
                      });
                  })(t),
                  -1 === t.__rememberedObjects.indexOf(e) &&
                    t.__rememberedObjects.push(e);
              }),
                this.autoPlace && fe(this, this.width);
            },
            getRoot: function () {
              for (var e = this; e.parent; ) e = e.parent;
              return e;
            },
            getSaveObject: function () {
              var n = this.load;
              return (
                (n.closed = this.closed),
                0 < this.__rememberedObjects.length &&
                  ((n.preset = this.preset),
                  n.remembered || (n.remembered = {}),
                  (n.remembered[this.preset] = ge(this))),
                (n.folders = {}),
                p.each(this.__folders, function (e, t) {
                  n.folders[t] = e.getSaveObject();
                }),
                n
              );
            },
            save: function () {
              this.load.remembered || (this.load.remembered = {}),
                (this.load.remembered[this.preset] = ge(this)),
                de(this, !1),
                this.saveToLocalStorageIfPossible();
            },
            saveAs: function (e) {
              this.load.remembered ||
                ((this.load.remembered = {}),
                (this.load.remembered[ee] = ge(this, !0))),
                (this.load.remembered[e] = ge(this)),
                (this.preset = e),
                pe(this, e, !0),
                this.saveToLocalStorageIfPossible();
            },
            revert: function (t) {
              p.each(
                this.__controllers,
                function (e) {
                  this.getRoot().load.remembered
                    ? ce(t || this.getRoot(), e)
                    : e.setValue(e.initialValue),
                    e.__onFinishChange &&
                      e.__onFinishChange.call(e, e.getValue());
                },
                this
              ),
                p.each(this.__folders, function (e) {
                  e.revert(e);
                }),
                t || de(this.getRoot(), !1);
            },
            listen: function (e) {
              var t = 0 === this.__listening.length;
              this.__listening.push(e),
                t &&
                  (function e(t) {
                    0 !== t.length &&
                      Q.call(window, function () {
                        e(t);
                      });
                    p.each(t, function (e) {
                      e.updateDisplay();
                    });
                  })(this.__listening);
            },
            updateDisplay: function () {
              p.each(this.__controllers, function (e) {
                e.updateDisplay();
              }),
                p.each(this.__folders, function (e) {
                  e.updateDisplay();
                });
            },
          });
        var be = { Color: x, math: _, interpret: h },
          ve = {
            Controller: F,
            BooleanController: O,
            OptionController: D,
            StringController: R,
            NumberController: t,
            NumberControllerBox: j,
            NumberControllerSlider: V,
            FunctionController: U,
            ColorController: W,
          },
          ye = { dom: k },
          xe = { GUI: se },
          we = se;
        const Ce = { color: be, controllers: ve, dom: ye, gui: xe, GUI: we };
      },
      268: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        const o =
          "\r\n\r\nattribute vec2 aVertexPosition;\r\n//uniform mat3 projectionMatrix;\r\nvarying vec2 vTextureCoord;\r\nuniform vec4 inputSize;\r\nuniform vec4 outputFrame;\r\n/*\r\nvec4 filterVertexPosition(void) {\r\nvec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\r\nreturn vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\r\n}\r\n*/\r\n\r\nvec2 filterTextureCoord( void )\r\n{\r\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\r\n}\r\n\r\nvoid main(void)\r\n{\r\ngl_Position = vec4(aVertexPosition * vec2(2.0) + vec2(-1.0, -1.0), 0.0, 1.0);//filterVertexPosition();\r\nvTextureCoord = filterTextureCoord();\r\n}\r\n\r\n/*\r\naVertexPosition をそのまま出力すると、画面右下に赤の矩形が出る。\r\n\r\n */\r\n\r\n\r\n/*\r\nattribute vec2 aVertexPosition;\r\nuniform mat3 projectionMatrix;\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void) {\r\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n    vTextureCoord = vTextureCoord;\r\n}\r\n\r\n*/";
      },
      445: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        const o =
          "\r\nprecision mediump float;\r\nuniform sampler2D inputSampler;\r\nuniform sampler2D uSampler;\r\nvarying vec2 vTextureCoord;\r\n\r\n//--------------------------------------------------------------------------------\r\n// Bloom\r\n\r\n#define NUM_MIPS 5\r\n\r\nuniform sampler2D _BlurTexture1;\r\nuniform sampler2D _BlurTexture2;\r\nuniform sampler2D _BlurTexture3;\r\nuniform sampler2D _BlurTexture4;\r\nuniform sampler2D _BlurTexture5;\r\n\r\nuniform vec4 _BloomTintColorsAndFactors1;\r\nuniform vec4 _BloomTintColorsAndFactors2;\r\nuniform vec4 _BloomTintColorsAndFactors3;\r\nuniform vec4 _BloomTintColorsAndFactors4;\r\nuniform vec4 _BloomTintColorsAndFactors5;\r\nuniform float _BloomStrength;\r\nuniform float _BloomRadius;\r\n\r\n\r\nfloat LerpBloomFactor(float factor)\r\n{\r\n    float mirrorFactor = 1.2 - factor;\r\n    return mix(factor, mirrorFactor, _BloomRadius);\r\n}\r\n\r\nvec3 Bloom(vec2 uv)\r\n{\r\n    vec4 col = _BloomStrength * ( LerpBloomFactor(_BloomTintColorsAndFactors1.a) * vec4(_BloomTintColorsAndFactors1.rgb, 1.0) * texture2D(_BlurTexture1, uv) +\r\n                                    LerpBloomFactor(_BloomTintColorsAndFactors2.a) * vec4(_BloomTintColorsAndFactors2.rgb, 1.0) * texture2D(_BlurTexture2, uv) +\r\n                                    LerpBloomFactor(_BloomTintColorsAndFactors3.a) * vec4(_BloomTintColorsAndFactors3.rgb, 1.0) * texture2D(_BlurTexture3, uv) +\r\n                                    LerpBloomFactor(_BloomTintColorsAndFactors4.a) * vec4(_BloomTintColorsAndFactors4.rgb, 1.0) * texture2D(_BlurTexture4, uv) +\r\n                                    LerpBloomFactor(_BloomTintColorsAndFactors5.a) * vec4(_BloomTintColorsAndFactors5.rgb, 1.0) * texture2D(_BlurTexture5, uv) );\r\n    return col.rgb * col.a;\r\n}\r\n\r\n//--------------------------------------------------------------------------------\r\n\r\nuniform highp vec4 inputSize;\r\nuniform highp vec4 outputFrame;\r\n\r\nuniform float size;\r\nuniform float amount;\r\nconst float focalPointX = 0.5;\r\nconst float focalPointY = 0.5;\r\n\r\n#define saturate(x) clamp(x, 0.0, 1.0)\r\n\r\n// Tonemap Params\r\nuniform float    paramA;  // shoulderStrength\r\nuniform float    paramB;  // linearStrength\r\nuniform float    paramCB;    // param.linearStrength * param.linearAngle\r\nuniform float    paramDE;    // param.toeStrength * param.toeNumerator\r\nuniform float    paramDF;    // param.toeStrength * param.toeDenominator\r\nuniform float    paramEperF;  // param.toeNumerator / param.toeDenominator\r\nuniform float    paramF_White;//\r\nuniform float   Exposure;\r\nuniform vec4 _Tone;\r\n\r\n// TiltShift Params\r\nuniform float _TiltOffset;  // = -0.2 // 中心をちょっと下に下げる\r\nuniform float _TiltScale;   // = 2.0\r\n\r\nconst float epsilon = 0.00001;\r\n\r\nvec3 CalcUncharted2FilmicPreParam( vec3 rgb,\r\n    float paramA, float paramB, float paramCB,\r\n    float paramDE, float paramDF, float paramEperF, float paramF_White )\r\n{\r\n    vec3 div = (rgb * (paramA * rgb + paramB) + paramDF);\r\n    div = max(div, vec3(epsilon, epsilon, epsilon));\r\n\r\n    vec3    ret = ((rgb * (paramA * rgb + paramCB) + paramDE) / div) - paramEperF;\r\n    return ret / max(paramF_White, epsilon);\r\n}\r\n\r\nvec3 Tonemap(vec3 color)\r\n{\r\n    float expBias = exp2(Exposure);\r\n    vec3 rgb = color.rgb * expBias;\r\n\r\n    rgb = CalcUncharted2FilmicPreParam(rgb,\r\n        paramA, paramB, paramCB, paramDE, paramDF, paramEperF, paramF_White);\r\n    \r\n    return rgb;\r\n}\r\n\r\n\r\nvec3 calculateToneColor(vec3 inColor, vec4 inToneColor)\r\n{\r\n    vec3 outColor = inColor;\r\n    float y = (0.208012 * outColor.r + 0.586611 * inColor.g + 0.114478 * inColor.b) * inToneColor.w;\r\n    outColor = (inColor * (1.0 - inToneColor.w)) + y + inToneColor.rgb;\r\n    return saturate(outColor);\r\n}\r\n\r\n// https://github.com/pixijs/pixijs/wiki/v5-Creating-filters#conversion-functions\r\n// PIXI.js は RenderTarget も 2累乗で作る。それを、スクリーンのサイズに正規化するもの。\r\nvec2 filterTextureCoord() {\r\n    return vTextureCoord * inputSize.xy / outputFrame.zw;\r\n}\r\n\r\nvec3 vignette(vec3 color, vec2 uv) {\r\n    float dist = distance(uv, vec2(focalPointX, focalPointY));\r\n    color *= smoothstep(0.8, size * 0.799, dist * (0.5 * amount + size));\r\n    return color;\r\n}\r\n\r\nvoid main (void) {\r\n    vec2 uv = filterTextureCoord();\r\n    vec4 color1 = texture2D(inputSampler, vTextureCoord);\r\n    vec4 color2 = texture2D(uSampler, vTextureCoord);\r\n\r\n    // Tilt\r\n    float r = abs((uv.y * 2.0) - 1.0 + _TiltOffset) * _TiltScale;\r\n    gl_FragColor = mix(color1, color2, saturate(r));\r\n    \r\n    gl_FragColor.rgb += Bloom(vTextureCoord);\r\n\r\n\r\n    gl_FragColor.rgb = calculateToneColor(gl_FragColor.rgb, _Tone);\r\n\r\n    gl_FragColor.rgb = Tonemap(gl_FragColor.rgb);\r\n    \r\n\r\n    gl_FragColor.rgb = vignette(gl_FragColor.rgb, uv);\r\n}\r\n";
      },
      870: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        const o =
          "precision mediump float;\r\nuniform highp vec4 inputSize;\r\nuniform highp vec4 outputFrame;\r\nuniform sampler2D uSampler;\r\nvarying vec2 vTextureCoord;\r\n\r\nconst vec3 _Color = vec3(0.0, 0.0, 0.0);\r\nconst float _Opacity = 1.0;\r\nuniform float _LuminosityThreshold;\r\nuniform float _SmoothWidth;\r\n\r\n#define saturate(x) clamp(x, 0.0, 1.0)\r\n\r\nvec2 filterTextureCoord() {\r\n    return vTextureCoord;\r\n}\r\n\r\nvoid main () {\r\n    vec4 texel = texture2D(uSampler, filterTextureCoord());\r\n    vec3 luma = vec3(0.299, 0.587, 0.114);\r\n    float v = saturate(dot(texel.xyz, luma));\r\n    vec4 outputColor = vec4(_Color.rgb, _Opacity);\r\n    float alpha = smoothstep(_LuminosityThreshold, _LuminosityThreshold + _SmoothWidth, v);\r\n    gl_FragColor = mix(outputColor, texel, alpha);\r\n}\r\n\r\n";
      },
      357: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        const o =
          "precision mediump float;\r\nuniform highp vec4 inputSize;\r\nuniform highp vec4 outputFrame;\r\nuniform sampler2D uSampler;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform int KERNEL_RADIUS;\r\nuniform float SIGMA;\r\nuniform vec2 _TexSize;\r\nuniform vec2 _Direction;\r\n\r\n#define saturate(x) clamp(x, 0.0, 1.0)\r\n\r\nvec2 filterTextureCoord() {\r\n    return vTextureCoord;\r\n}\r\n\r\nfloat Gaussian(float x, float sigma)\r\n{\r\n    return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;\r\n}\r\n\r\nvoid main () {\r\n    vec2 uv = filterTextureCoord();\r\n    vec4 texel = texture2D(uSampler, uv);\r\n    vec2 invSize = 1.0 / _TexSize;\r\n    float fSigma = float(SIGMA);\r\n    float weightSum = Gaussian(0.0, fSigma);\r\n    vec3 diffuseSum = texel.rgb * weightSum;\r\n    for( int i = 1; i < 5/*KERNEL_RADIUS*/; i ++ ) {    // TODO: KERNEL_RADIUS\r\n        float x = float(i);\r\n        float w = Gaussian(x, fSigma);\r\n        vec2 uvOffset = _Direction * invSize * x;\r\n        vec3 sample1 = texture2D(uSampler, uv + uvOffset).rgb;\r\n        vec3 sample2 = texture2D(uSampler, uv - uvOffset).rgb;\r\n        diffuseSum += (sample1 + sample2) * w;\r\n        weightSum += 2.0 * w;\r\n    }\r\n    gl_FragColor = vec4(diffuseSum / weightSum, 1.0);\r\n}\r\n\r\n\r\n";
      },
      455: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FilmicFilterControl = void 0);
        const o = n(297);
        t.FilmicFilterControl = class {
          static makeDefault() {
            return {
              enabled: !0,
              params: this.makeDefaultParams(),
              targetParams: this.makeDefaultParams(),
              paramsDuration: 0,
            };
          }
          static clear(e) {
            var t = this.makeDefaultParams();
            (e.enabled = !0),
              this.copyParams(t, e.params),
              this.copyParams(t, e.targetParams),
              (e.paramsDuration = 0);
          }
          static start(e, t, n) {
            this.copyParams(t, e.targetParams),
              (e.paramsDuration = n),
              0 === e.paramsDuration && this.copyParams(t, e.params);
          }
          static startFlush(e, t, n) {
            this.copyParams(t, e.params),
              this.start(e, this.defaultParams(), n);
          }
          static defaultParams() {
            return o.FilterFileManager.getData(0);
          }
          static update(e) {
            if (0 < e.paramsDuration) {
              var t = e.paramsDuration;
              const o = e.params;
              var n = e.targetParams;
              (o.luminosityThreshold = this.mix(
                o.luminosityThreshold,
                n.luminosityThreshold,
                t
              )),
                (o.luminositySmoothWidth = this.mix(
                  o.luminosityThreshold,
                  n.luminosityThreshold,
                  t
                )),
                (o.bloomStrength = this.mix(
                  o.luminosityThreshold,
                  n.luminosityThreshold,
                  t
                )),
                (o.bloomRadius = this.mix(
                  o.luminosityThreshold,
                  n.luminosityThreshold,
                  t
                )),
                (o.linearWhite = this.mix(o.linearWhite, n.linearWhite, t)),
                (o.shoulderStrength = this.mix(
                  o.shoulderStrength,
                  n.shoulderStrength,
                  t
                )),
                (o.linearStrength = this.mix(
                  o.linearStrength,
                  n.linearStrength,
                  t
                )),
                (o.linearAngle = this.mix(o.linearAngle, n.linearAngle, t)),
                (o.toeStrength = this.mix(o.toeStrength, n.toeStrength, t)),
                (o.toeNumerator = this.mix(o.toeNumerator, n.toeNumerator, t)),
                (o.toeDenominator = this.mix(
                  o.toeDenominator,
                  n.toeDenominator,
                  t
                )),
                (o.exposure = this.mix(o.exposure, n.exposure, t)),
                (o.toneColorR = this.mix(o.toneColorR, n.toneColorR, t)),
                (o.toneColorG = this.mix(o.toneColorG, n.toneColorG, t)),
                (o.toneColorB = this.mix(o.toneColorB, n.toneColorB, t)),
                (o.toneGray = this.mix(o.toneGray, n.toneGray, t)),
                (o.vignetteSize = this.mix(o.vignetteSize, n.vignetteSize, t)),
                (o.vignetteAmount = this.mix(
                  o.vignetteAmount,
                  n.vignetteAmount,
                  t
                )),
                (o.tiltScale = this.mix(o.tiltScale, n.tiltScale, t)),
                (o.tiltOffset = this.mix(o.tiltOffset, n.vignetteAmount, t)),
                e.paramsDuration--;
            }
          }
          static mix(e, t, n) {
            return (e * (n - 1) + t) / n;
          }
          static clearParams(e) {
            this.copyParams(this.makeDefaultParams(), e);
          }
          static makeDefaultParams() {
            return {
              luminosityThreshold: 0.9,
              luminositySmoothWidth: 0.01,
              linearWhite: 1.5,
              shoulderStrength: 0.2,
              linearStrength: 0.85,
              linearAngle: 0.01,
              toeStrength: 0.01,
              toeNumerator: 0.01,
              toeDenominator: 1,
              exposure: 0.5,
              toneColorR: 0,
              toneColorG: 0,
              toneColorB: 0,
              toneGray: 0,
              bloomStrength: 0.3,
              bloomRadius: 0.5,
              vignetteSize: 0.5,
              vignetteAmount: 0.75,
              tiltOffset: -0.2,
              tiltScale: 2,
            };
          }
          static makeGuiDefaultParams() {
            return {
              luminosityThreshold: 0.1,
              luminositySmoothWidth: 0.1,
              linearWhite: 0.1,
              shoulderStrength: 0.1,
              linearStrength: 0.1,
              linearAngle: 0.1,
              toeStrength: 0.1,
              toeNumerator: 0.1,
              toeDenominator: 0.1,
              exposure: 0.1,
              toneColorR: 0.1,
              toneColorG: 0.1,
              toneColorB: 0.1,
              toneGray: 0.1,
              bloomStrength: 0.1,
              bloomRadius: 0.1,
              vignetteSize: 0.1,
              vignetteAmount: 0.1,
              tiltOffset: -0.2,
              tiltScale: 2,
            };
          }
          static copyParams(e, t) {
            (t.luminosityThreshold = e.luminosityThreshold),
              (t.luminositySmoothWidth = e.luminositySmoothWidth),
              (t.bloomStrength = e.bloomStrength),
              (t.bloomRadius = e.bloomRadius),
              (t.linearWhite = e.linearWhite),
              (t.shoulderStrength = e.shoulderStrength),
              (t.linearStrength = e.linearStrength),
              (t.linearAngle = e.linearAngle),
              (t.toeStrength = e.toeStrength),
              (t.toeNumerator = e.toeNumerator),
              (t.toeDenominator = e.toeDenominator),
              (t.exposure = e.exposure),
              (t.toneColorR = e.toneColorR),
              (t.toneColorG = e.toneColorG),
              (t.toneColorB = e.toneColorB),
              (t.toneGray = e.toneGray),
              (t.vignetteSize = e.vignetteSize),
              (t.vignetteAmount = e.vignetteAmount),
              void 0 !== e.tiltOffset && (t.tiltOffset = e.tiltOffset),
              void 0 !== e.tiltScale && (t.tiltScale = e.tiltScale);
          }
          static resolveUndefiedParams(e) {
            var t = this.makeDefaultParams();
            return this.copyParams(e, t), t;
          }
        };
      },
      297: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FilterFileManager = void 0);
        const o = n(455);
        t.FilterFileManager = class {
          static loadIndex() {
            (this._fileCount = -1),
              (this._loadedFileCount = 0),
              (this._dataList = []),
              (this._userDefaultParams = void 0),
              this.loadDataFile("data/filters/index.json", (e) => {
                this.fileIndex = e;
                for (
                  let t = (this._fileCount = 0);
                  t < this.fileIndex.length;
                  t++
                ) {
                  var n = this.fileIndex[t];
                  n &&
                    (this._fileCount++,
                    this.loadDataFile("data/filters/" + n, (e) => {
                      (this._dataList[t] =
                        o.FilmicFilterControl.resolveUndefiedParams(e)),
                        this._loadedFileCount++;
                    }));
                }
              });
          }
          static isLoaded() {
            return !!this.fileIndex && this._fileCount == this._loadedFileCount;
          }
          static defaultParams() {
            return this._userDefaultParams || this.getData(0);
          }
          static setUserDefaultParams(e) {
            this._userDefaultParams = e;
          }
          static getData(e) {
            var t = this._dataList[e];
            if (t) return t;
            if (0 === e) return o.FilmicFilterControl.makeDefaultParams();
            throw new Error(
              `ID:${e} の FilmicFilter 設定ファイルが見つかりませんでした。`
            );
          }
          static loadDataFile(e, t) {
            const n = new XMLHttpRequest(),
              o = e;
            n.open("GET", o),
              n.overrideMimeType("application/json"),
              (n.onload = () => this.onXhrLoad(n, e, o, t)),
              (n.onerror = () => DataManager.onXhrError(e, e, o)),
              n.send();
          }
          static onXhrLoad(e, t, n, o) {
            e.status < 400
              ? o(JSON.parse(e.responseText))
              : DataManager.onXhrError(t, t, n);
          }
          static updateIndexFile(a) {
            if (this.isNode()) {
              const s = n(747),
                l = n(622);
              s.mkdir("data/filters", (e) => {
                s.readdir("data/filters", function (e, t) {
                  const n = [];
                  if (!e)
                    for (const i of t.filter(function (e) {
                      return /.*\.json$/.test(e);
                    }))
                      if ("index.json" != i) {
                        var o = i.split("-");
                        if (o.length < 2)
                          throw new Error(
                            `${i}: ファイル名にIDが含まれていません。`
                          );
                        var r = l.basename(i);
                        n[Number(o[0])] = r;
                      }
                  s.writeFileSync(
                    "data/filters/index.json",
                    JsonEx.stringify(n)
                  ),
                    a();
                });
              });
            } else a();
          }
          static isNode() {
            return "undefined" != typeof process && "browser" !== process.title;
          }
        };
      },
      987: function (e, t, n) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FilterGUI = void 0);
        const l = o(n(376)),
          u = n(455);
        class d {
          static isPlaytest() {
            return $gameTemp && $gameTemp.isPlaytest();
          }
          static init() {
            if (
              (this._gui &&
                (this._gui.destroy(),
                (this._gui = void 0),
                (this._controlers = [])),
              (this._hiddedn = !0),
              (this._controlers = []),
              !document.getElementById("gameCanvas"))
            )
              throw new Error("gameCanvas element not found.");
            this._gui = new l.default.GUI({ autoPlace: !0, hideable: !0 });
            const e = this._gui.domElement.parentElement;
            if (!e) throw new Error("guiContainer element not found.");
            (e.style.zIndex = "20"), this._gui.hide();
            var t = {
              save: () => {
                const e = document.createElement("a");
                (e.href =
                  "data:application/json," +
                  encodeURIComponent(
                    JsonEx.stringify($gameScreen._lnFilmicFilter.params)
                  )),
                  (e.download = "1-Filter.json"),
                  (e.onchange = (e) => {}),
                  e.addEventListener("change", function (e) {}, !1),
                  e.click();
              },
              load: () => {
                const e = document.createElement("input");
                (e.type = "file"),
                  (e.accept = ".json, application/json"),
                  (e.onchange = function (e) {
                    const t = new FileReader();
                    t.readAsText(e.target.files[0]),
                      (t.onload = () => {
                        var e = t.result;
                        "string" == typeof e &&
                          ((e = JsonEx.parse(e)),
                          u.FilmicFilterControl.copyParams(
                            e,
                            $gameScreen._lnFilmicFilter.params
                          ),
                          d.refresh());
                      });
                  }),
                  e.click();
              },
            };
            this._gui.add(t, "save"), this._gui.add(t, "load");
            var n = u.FilmicFilterControl.makeDefaultParams();
            u.FilmicFilterControl.copyParams(
              $gameScreen._lnFilmicFilter.params,
              n
            ),
              u.FilmicFilterControl.copyParams(
                u.FilmicFilterControl.makeGuiDefaultParams(),
                $gameScreen._lnFilmicFilter.params
              );
            t = $gameScreen._lnFilmicFilter.params;
            const o = this._gui.addFolder("Bloom");
            this._controlers.push(o.add(t, "luminosityThreshold", 0, 1)),
              this._controlers.push(o.add(t, "luminositySmoothWidth", 0, 1)),
              this._controlers.push(o.add(t, "bloomStrength", 0, 1)),
              this._controlers.push(o.add(t, "bloomRadius", 0, 5));
            const r = this._gui.addFolder("Tonemap");
            this._controlers.push(r.add(t, "linearWhite", 0, 10)),
              this._controlers.push(r.add(t, "shoulderStrength", 0, 10)),
              this._controlers.push(r.add(t, "linearStrength", 0, 10)),
              this._controlers.push(r.add(t, "linearAngle", 0, 2)),
              this._controlers.push(r.add(t, "toeStrength", 0, 1)),
              this._controlers.push(r.add(t, "toeNumerator", 0, 1)),
              this._controlers.push(r.add(t, "toeDenominator", 0, 2)),
              this._controlers.push(r.add(t, "exposure", 0, 2));
            const i = this._gui.addFolder("ColorTone");
            this._controlers.push(i.add(t, "toneColorR", -1, 1)),
              this._controlers.push(i.add(t, "toneColorG", -1, 1)),
              this._controlers.push(i.add(t, "toneColorB", -1, 1)),
              this._controlers.push(i.add(t, "toneGray", 0, 1));
            const a = this._gui.addFolder("Vignette");
            this._controlers.push(a.add(t, "vignetteSize", 0, 1)),
              this._controlers.push(a.add(t, "vignetteAmount", 0, 10));
            const s = this._gui.addFolder("TiltShift");
            this._controlers.push(s.add(t, "tiltScale", 0, 5)),
              this._controlers.push(s.add(t, "tiltOffset", -1, 1)),
              u.FilmicFilterControl.copyParams(
                n,
                $gameScreen._lnFilmicFilter.params
              ),
              this.refresh();
          }
          static toggle() {
            var e;
            (this._hiddedn = !this._hiddedn),
              this._hiddedn
                ? null !== (e = this._gui) && void 0 !== e && e.hide()
                : null !== (e = this._gui) && void 0 !== e && e.show();
          }
          static hiddedn() {
            return this._hiddedn;
          }
          static refresh() {
            for (const e of this._controlers) e.updateDisplay();
          }
        }
        t.FilterGUI = d;
      },
      650: function (e, t, n) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LuminosityHighPassFilter = void 0);
        const r = o(n(870));
        class i extends PIXI.Filter {
          constructor() {
            super(void 0, r.default);
          }
          prepare(e, t) {
            (this.uniforms._LuminosityThreshold = e),
              (this.uniforms._SmoothWidth = t);
          }
        }
        t.LuminosityHighPassFilter = i;
      },
      656: function (e, t, n) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FilmicFilter = void 0);
        const r = o(n(445)),
          i = n(650),
          a = n(935);
        class s extends PIXI.Filter {
          constructor() {
            super(
              void 0,
              [
                "precision mediump float;",
                "uniform sampler2D uSampler;",
                "varying vec2 vTextureCoord;",
                "void main (void) {",
                " vec4 color1 = texture2D(uSampler, vTextureCoord);",
                " gl_FragColor = color1;",
                "}",
              ].join("\n"),
              {}
            );
          }
        }
        class l extends PIXI.Filter {
          constructor() {
            super(void 0, r.default + "\n", {});
          }
        }
        const u = [3, 5, 8, 13, 21];
        class d extends PIXI.Filter {
          constructor(e, t, n, o) {
            super(),
              (this.resolution = n || PIXI.settings.RESOLUTION),
              (this.blurXFilter = new PIXI.filters.BlurFilterPass(
                !0,
                e || 8,
                t || 4,
                this.resolution,
                o
              )),
              (this.blurYFilter = new PIXI.filters.BlurFilterPass(
                !1,
                e || 8,
                t || 4,
                this.resolution,
                o
              )),
              (this._repeatEdgePixels = !1),
              this.updatePadding(),
              (this.blendMode = this.blurYFilter.blendMode),
              (this._copyPass = new s()),
              (this._blendPass = new l()),
              (this._luminosityHighPassFilter =
                new i.LuminosityHighPassFilter()),
              (this._seperableBlurPassHList = []),
              (this._seperableBlurPassVList = []);
            for (let e = 0; e < 5; e++)
              this._seperableBlurPassHList.push(
                new a.SeperableBlurPass(u[e], u[e], !0)
              ),
                this._seperableBlurPassVList.push(
                  new a.SeperableBlurPass(u[e], u[e], !1)
                );
          }
          apply(o, r, e, i, t) {
            var a = $gameScreen._lnFilmicFilter.params,
              n = Math.abs(this.blurXFilter.blur),
              s = Math.abs(this.blurYFilter.blur);
            if (n && s) {
              var l = o.getFilterTexture(r);
              {
                let t = 0.5;
                for (let e = 0; e < 5; e++)
                  this._seperableBlurPassHList[e].prepare(o, r, t),
                    this._seperableBlurPassVList[e].prepare(o, r, t),
                    (t *= 0.5);
                this._luminosityHighPassFilter.prepare(
                  a.luminosityThreshold,
                  a.luminositySmoothWidth
                ),
                  this._luminosityHighPassFilter.apply(o, r, l, i);
                let n = l;
                for (let e = 0; e < 5; e++) {
                  var u = this._seperableBlurPassHList[e].renderTexture(),
                    d = this._seperableBlurPassVList[e].renderTexture();
                  this._seperableBlurPassHList[e].apply(o, n, u, i),
                    this._seperableBlurPassVList[e].apply(o, u, d, i),
                    (n = d);
                }
                this.prepareBloomCompositeParams(
                  a.bloomStrength,
                  a.bloomRadius,
                  [
                    this._seperableBlurPassVList[0].renderTexture(),
                    this._seperableBlurPassVList[1].renderTexture(),
                    this._seperableBlurPassVList[2].renderTexture(),
                    this._seperableBlurPassVList[3].renderTexture(),
                    this._seperableBlurPassVList[4].renderTexture(),
                  ]
                );
              }
              var c = o.getFilterTexture(r),
                h = o.getFilterTexture(r);
              this._copyPass.apply(o, r, h, !0),
                this.blurXFilter.apply(o, h, c, i),
                this.blurYFilter.apply(o, c, h, i);
              var _ = a.shoulderStrength,
                p = a.linearStrength,
                m = a.linearStrength * a.linearAngle,
                f = a.toeStrength * a.toeNumerator,
                g = a.toeStrength * a.toeDenominator,
                n = a.toeNumerator * a.toeDenominator;
              (this._blendPass.uniforms.inputSampler = r),
                (this._blendPass.uniforms.paramA = _),
                (this._blendPass.uniforms.paramB = p),
                (this._blendPass.uniforms.paramCB = m),
                (this._blendPass.uniforms.paramDE = f),
                (this._blendPass.uniforms.paramDF = g),
                (this._blendPass.uniforms.paramEperF = n);
              s = a.linearWhite;
              (this._blendPass.uniforms.paramF_White =
                (s * (_ * s + m) + f) / (s * (_ * s + p) + g) - n),
                (this._blendPass.uniforms.Exposure = a.exposure),
                (this._blendPass.uniforms._Tone = [
                  a.toneColorR,
                  a.toneColorG,
                  a.toneColorB,
                  a.toneGray,
                ]),
                (this._blendPass.uniforms.size = a.vignetteSize),
                (this._blendPass.uniforms.amount = a.vignetteAmount),
                (this._blendPass.uniforms._TiltScale = a.tiltScale),
                (this._blendPass.uniforms._TiltOffset = a.tiltOffset),
                this._blendPass.apply(o, h, e, i),
                o.returnFilterTexture(c),
                o.returnFilterTexture(h);
              for (let e = 0; e < 5; e++)
                this._seperableBlurPassHList[e].retain(o),
                  this._seperableBlurPassVList[e].retain(o);
              o.returnFilterTexture(l);
            }
          }
          prepareBloomCompositeParams(e, t, n) {
            (this._blendPass.uniforms._BloomStrength = e),
              (this._blendPass.uniforms._BloomRadius = t),
              (this._blendPass.uniforms._BlurTexture1 = n[0]),
              (this._blendPass.uniforms._BlurTexture2 = n[1]),
              (this._blendPass.uniforms._BlurTexture3 = n[2]),
              (this._blendPass.uniforms._BlurTexture4 = n[3]),
              (this._blendPass.uniforms._BlurTexture5 = n[4]),
              (this._blendPass.uniforms._BloomTintColorsAndFactors1 = [
                1, 1, 1, 1,
              ]),
              (this._blendPass.uniforms._BloomTintColorsAndFactors2 = [
                1, 1, 1, 0.8,
              ]),
              (this._blendPass.uniforms._BloomTintColorsAndFactors3 = [
                1, 1, 1, 0.6,
              ]),
              (this._blendPass.uniforms._BloomTintColorsAndFactors4 = [
                1, 1, 1, 0.4,
              ]),
              (this._blendPass.uniforms._BloomTintColorsAndFactors5 = [
                1, 1, 1, 0.2,
              ]);
          }
          updatePadding() {
            this._repeatEdgePixels
              ? (this.padding = 0)
              : (this.padding =
                  2 *
                  Math.max(
                    Math.abs(this.blurXFilter.blur),
                    Math.abs(this.blurYFilter.blur)
                  ));
          }
        }
        t.FilmicFilter = d;
      },
      935: function (e, t, n) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SeperableBlurPass = void 0);
        const r = o(n(268)),
          i = o(n(357));
        class a extends PIXI.Filter {
          constructor(e, t, n) {
            var o = n ? 1 : 0,
              n = n ? 0 : 1;
            super(r.default, i.default, {
              KERNEL_RADIUS: e,
              SIGMA: t,
              _Direction: [o, n],
            }),
              (this.requiredWidth = 16),
              (this.requiredHeight = 16);
          }
          renderTexture() {
            if (!this._renderTarget) throw new Error("!this._renderTarget");
            return this._renderTarget;
          }
          prepare(e, t, n) {
            (this.requiredWidth = t.width * n),
              (this.requiredHeight = t.height * n),
              (this._renderTarget = e.getFilterTexture(t, n)),
              (this.uniforms._TexSize = [t.width, t.height]);
          }
          retain(e) {
            this._renderTarget && e.returnFilterTexture(this._renderTarget);
          }
          apply2(e, t, n) {
            this.state.blend = !1;
            const o = e.renderer;
            o.renderTexture.bind(n, n.filterFrame),
              (this.uniforms.uSampler = t),
              o.shader.bind(this, !1),
              o.geometry.draw(5),
              (this.state.blend = !0);
          }
        }
        t.SeperableBlurPass = a;
      },
      246: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(297),
          r = n(987),
          i = DataManager.createGameObjects;
        DataManager.createGameObjects = function () {
          i.call(this), r.FilterGUI.isPlaytest() && r.FilterGUI.init();
        };
        const a = DataManager.isDatabaseLoaded;
        DataManager.isDatabaseLoaded = function () {
          return !!a.call(this) && !!o.FilterFileManager.isLoaded();
        };
      },
      174: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(455),
          r = n(297);
        var i = Game_Map.prototype.setup;
        Game_Map.prototype.setup = function (e) {
          var t;
          i.call(this, e),
            r.FilterFileManager.setUserDefaultParams(void 0),
            ($gameScreen._lnFilmicFilter.enabled = !0),
            $dataMap.meta &&
              ("none" == (e = $dataMap.meta.FilmicFilter) ||
              (t = void 0 === e ? 0 : Number(e)) <= -1
                ? ($gameScreen._lnFilmicFilter.enabled = !1)
                : void 0 !== t &&
                  (r.FilterFileManager.setUserDefaultParams(
                    r.FilterFileManager.getData(t)
                  ),
                  o.FilmicFilterControl.start(
                    $gameScreen._lnFilmicFilter,
                    r.FilterFileManager.defaultParams(),
                    0
                  )));
        };
      },
      974: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(455),
          r = Game_Screen.prototype.clear;
        Game_Screen.prototype.clear = function () {
          r.call(this),
            this._lnFilmicFilter
              ? o.FilmicFilterControl.clear(this._lnFilmicFilter)
              : (this._lnFilmicFilter = o.FilmicFilterControl.makeDefault());
        };
        const i = Game_Screen.prototype.update;
        Game_Screen.prototype.update = function () {
          i.call(this), o.FilmicFilterControl.update(this._lnFilmicFilter);
        };
      },
      957: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(987),
          r = n(749),
          i = Input._onKeyDown;
        Input._onKeyDown = function (e) {
          o.FilterGUI.isPlaytest() && e.key == r.paramEditorKey
            ? o.FilterGUI.toggle()
            : i.call(this, e);
        };
      },
      994: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(455),
          r = n(297);
        n = n(749);
        PluginManager.registerCommand(
          n.pluginName,
          "SetFilmicFilter",
          function (e) {
            var t = e.filterId,
              n = e.duration,
              e = e.wait;
            Number(t) <= -1
              ? ($gameScreen._lnFilmicFilter.enabled = !1)
              : ((t = r.FilterFileManager.getData(t)),
                o.FilmicFilterControl.start($gameScreen._lnFilmicFilter, t, n)),
              e && this.wait(n);
          }
        );
      },
      749: (e, t) => {
        var n, o;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.paramEditorKey =
            t.paramAnimationFlushHookValue =
            t.pluginName =
              void 0),
          (t.pluginName = "LN_FilmicFilter"),
          (t.paramAnimationFlushHookValue = 1),
          (t.paramEditorKey =
            ((n = "EditorKey"),
            (o = "F11"),
            "undefined" == typeof PluginManager ||
            void 0 === (n = PluginManager.parameters(t.pluginName)[n])
              ? o
              : null != n
              ? n
              : ""));
      },
      644: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(297),
          r = Scene_Boot.prototype.create;
        Scene_Boot.prototype.create = function () {
          r.call(this),
            o.FilterFileManager.updateIndexFile(() => {
              o.FilterFileManager.loadIndex();
            });
        };
      },
      557: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(455),
          r = n(297),
          i = n(749);
        Sprite_Animation.prototype.processFlashTimings;
        Sprite_Animation.prototype.processFlashTimings = function () {
          for (const n of this._animation.flashTimings) {
            var e, t;
            n.frame === this._frameIndex &&
              ((e = n.color.clone())[3] == i.paramAnimationFlushHookValue
                ? ((t = r.FilterFileManager.getData(e[0])),
                  o.FilmicFilterControl.startFlush(
                    $gameScreen._lnFilmicFilter,
                    t,
                    n.duration
                  ))
                : ((this._flashColor = e), (this._flashDuration = n.duration)));
          }
        };
      },
      904: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(656),
          r = Spriteset_Battle.prototype.createLowerLayer;
        Spriteset_Battle.prototype.createLowerLayer = function () {
          r.call(this),
            o.FilmicFilter.instance ||
              (o.FilmicFilter.instance = new o.FilmicFilter()),
            this._baseSprite.filters.push(o.FilmicFilter.instance);
        };
        const i = Spriteset_Battle.prototype.update;
        Spriteset_Battle.prototype.update = function () {
          i.call(this),
            (o.FilmicFilter.instance.enabled =
              $gameScreen._lnFilmicFilter.enabled);
        };
      },
      1: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(656),
          r = Spriteset_Map.prototype.createLowerLayer;
        Spriteset_Map.prototype.createLowerLayer = function () {
          r.call(this),
            o.FilmicFilter.instance ||
              (o.FilmicFilter.instance = new o.FilmicFilter()),
            this._baseSprite.filters.push(o.FilmicFilter.instance);
        };
        Spriteset_Map.prototype.createWeather;
        Spriteset_Map.prototype.createWeather = function () {
          (this._weather = new Weather()),
            this._baseSprite.addChild(this._weather);
        };
        const i = Spriteset_Map.prototype.update;
        Spriteset_Map.prototype.update = function () {
          i.call(this),
            (o.FilmicFilter.instance.enabled =
              $gameScreen._lnFilmicFilter.enabled);
        };
      },
      538: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = n(987),
          r = TouchInput._onMouseDown;
        TouchInput._onMouseDown = function (e) {
          (o.FilterGUI.isPlaytest() && !o.FilterGUI.hiddedn()) ||
            r.call(this, e);
        };
      },
      747: (e) => {
        e.exports = require("fs");
      },
      622: (e) => {
        e.exports = require("path");
      },
    },
    o = {};
  function r(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    t = o[e] = { exports: {} };
    return n[e].call(t.exports, t, t.exports, r), t.exports;
  }
  (r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  r(656),
    r(749),
    r(957),
    r(538),
    r(246),
    r(974),
    r(174),
    r(994),
    r(557),
    r(1),
    r(904),
    r(644);
})();
