var r;
r = require(78249);
require(98269);
require(68214);
require(90888);
require(75109);
(function () {
  var e = r;
  var t = e.lib.StreamCipher;
  var n = e.algo;
  var i = [];
  var o = [];
  var s = [];
  var a = n.Rabbit = t.extend({
    _doReset: function () {
      for (e = this._key.words, t = this.cfg.iv, n = 0, void 0; n < 4; n++) {
        var e;
        var t;
        var n;
        e[n] = 16711935 & (e[n] << 8 | e[n] >>> 24) | 4278255360 & (e[n] << 24 | e[n] >>> 8);
      }
      var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16];
      var i = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
      for (this._b = 0, n = 0; n < 4; n++) c.call(this);
      for (n = 0; n < 8; n++) i[n] ^= r[n + 4 & 7];
      if (t) {
        var o = t.words;
        var s = o[0];
        var a = o[1];
        var l = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
        var u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
        var p = l >>> 16 | 4294901760 & u;
        var d = u << 16 | 65535 & l;
        for (i[0] ^= l, i[1] ^= p, i[2] ^= u, i[3] ^= d, i[4] ^= l, i[5] ^= p, i[6] ^= u, i[7] ^= d, n = 0; n < 4; n++) c.call(this);
      }
    },
    _doProcessBlock: function (e, t) {
      var n = this._X;
      c.call(this);
      i[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16;
      i[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16;
      i[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16;
      i[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
      for (var r = 0; r < 4; r++) {
        i[r] = 16711935 & (i[r] << 8 | i[r] >>> 24) | 4278255360 & (i[r] << 24 | i[r] >>> 8);
        e[t + r] ^= i[r];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  function c() {
    for (e = this._X, t = this._C, n = 0, void 0; n < 8; n++) {
      var e;
      var t;
      var n;
      o[n] = t[n];
    }
    for (t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < o[7] >>> 0 ? 1 : 0, n = 0; n < 8; n++) {
      var r = e[n] + t[n];
      var i = 65535 & r;
      var a = r >>> 16;
      var c = ((i * i >>> 17) + i * a >>> 15) + a * a;
      var l = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
      s[n] = c ^ l;
    }
    e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0;
    e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0;
    e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0;
    e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0;
    e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0;
    e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0;
    e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0;
    e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
  }
  e.Rabbit = t._createHelper(a);
})();
module.exports = r.Rabbit;