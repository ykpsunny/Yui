!(function(c) {
  var e,
    l =
      '<svg><symbol id="icon-avatar" viewBox="0 0 1024 1024"><path d="M665.6 656.564706C771.011765 602.352941 843.294118 487.905882 843.294118 361.411765 843.294118 177.694118 695.717647 27.105882 512 27.105882S180.705882 174.682353 180.705882 358.4c0 126.494118 72.282353 243.952941 177.694118 298.164706C183.717647 707.764706 60.235294 852.329412 60.235294 1002.917647h60.235294c0-180.705882 174.682353-301.176471 391.529412-301.176471s391.529412 120.470588 391.529412 301.176471h60.235294c0-150.588235-123.482353-295.152941-298.164706-346.352941zM240.941176 358.4c0-150.588235 120.470588-271.058824 271.058824-271.058824s271.058824 120.470588 271.058824 271.058824-120.470588 271.058824-271.058824 271.058824-271.058824-123.482353-271.058824-271.058824z" fill="#ffffff" ></path></symbol><symbol id="icon-jiazailoading-B" viewBox="0 0 1024 1024"><path d="M270.4 214.4C336 160 420 128 512 128c212 0 384 172 384 384h64c0-247.2-200.8-448-448-448-107.2 0-205.6 37.6-282.4 100l40.8 50.4z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M965.17632 310.12864L529.92 750.08a25.2416 25.2416 0 0 1-35.968 0L58.66496 310.12864a25.90208 25.90208 0 0 1 0-36.352 25.24672 25.24672 0 0 1 35.97312 0l417.28 421.74976 417.28-421.74976a25.24672 25.24672 0 0 1 35.97312 0 25.9072 25.9072 0 0 1 0.00512 36.352z"  ></path></symbol><symbol id="icon-close1" viewBox="0 0 1024 1024"><path d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[
      e.length - 1
    ].getAttribute('data-injectcss');
  if (t && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e();
        };
        document.addEventListener('DOMContentLoaded', t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = c.document),
        (a = !1),
        (l = function() {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(l, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          'complete' == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      a || ((a = !0), o());
    }
    var o, i, a, l;
  })(function() {
    var e, t, n, o, i, a;
    ((e = document.createElement('div')).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (a = o.firstChild).parentNode.insertBefore(i, a))
          : o.appendChild(n));
  });
})(window);
