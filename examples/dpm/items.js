(function() {
  var _ref;
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
  window.dpm.Items = (function() {
    __extends(Items, window.dpm.AppPage);
    function Items() {
      console.log('Items constructor fired');
    }
    Items.prototype.edit = function() {
      return console.log('Edit Method fired for the Items class');
    };
    return Items;
  })();
}).call(this);
