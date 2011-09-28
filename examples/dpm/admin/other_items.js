(function() {
  var _base, _ref, _ref2;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
    if ((_ref = window.dpm) != null) {
    _ref;
  } else {
    window.dpm = {};
  };
    if ((_ref2 = (_base = window.dpm).admin) != null) {
    _ref2;
  } else {
    _base.admin = {};
  };
  window.dpm.admin.OtherItems = (function() {
    __extends(OtherItems, window.dpm.AppPage);
    function OtherItems() {
      console.log('OtherItems constructor fired');
    }
    OtherItems.prototype.index = function() {
      return console.log('Index Method fired for the Items class');
    };
    return OtherItems;
  })();
}).call(this);
