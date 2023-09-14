function(a,
    b, c, d) {
    if (Pc) {
      var e;
      if ((e = 0 === (b & 4)) && 0 < ia.length && -1 < gg.indexOf(a)) a = $d(null, a, b, c, d), ia.push(a);
      else {
        var f = be(a, b, c, d);
        if (null === f) e && Xf(a, d);
        else {
          if (e) {
            if (-1 < gg.indexOf(a)) {
              a = $d(f, a, b, c, d);
              ia.push(a);
              return
            }
            if (zi(f, a, b, c, d)) return;
            Xf(a, d)
          }
          hg(a, b, d, null, c)
        }
      }
    }
  }