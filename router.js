(function() {
  var _ref;
    if ((_ref = window.dpm) != null) {
    _ref;
  } else {
    window.dpm = {};
  };
  window.dpm.Router = (function() {
    function Router() {
      var arr;
      if (typeof window.routerConfig === "undefined") {
        console.error("window.routerConfig was not defined, it should be in the following format window.routerConfig = {namespace:'dpm',defaultPage:'AppPage',route:'admin/other_items/index'};");
      }
      this.name_space = window.routerConfig.namespace;
      this.default_page = window.routerConfig.defaultPage;
      arr = window.routerConfig.route.split('/');
      if (arr.length > 2) {
        this.package = arr[0];
        this.ctrl = arr[1];
        this.action = arr[2];
      } else {
        this.ctrl = arr[0];
        this.action = arr[1];
      }
      this.instantiatePage();
    }
    Router.prototype.instantiatePage = function() {
      this.ctrl = this.humanize(this.ctrl);
      if (typeof window[this.name_space] === "undefined") {
        console.error("your namespace " + this.name_space + " is undefined");
        return;
      } else if (typeof this.package !== 'undefined') {
        window[this.name_space].page = new window[this.name_space][this.package][this.ctrl]();
      } else if (typeof window[this.name_space][this.ctrl] !== 'undefined') {
        window[this.name_space].page = new window[this.name_space][this.ctrl]();
      } else {
        window[this.name_space].page = new window[this.name_space][this.default_page]();
      }
      if (typeof window[this.name_space].page[this.action] !== 'undefined') {
        return window[this.name_space].page[this.action]();
      }
    };
    Router.prototype.humanize = function(string) {
      var arr, humanized, word, _i, _len;
      humanized = "";
      arr = string.split('_');
      if (arr.length > 0) {
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
          word = arr[_i];
          humanized += this.capitalize(word);
        }
      } else {
        humanized = this.capitalize(string);
      }
      return humanized;
    };
    Router.prototype.capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return Router;
  })();
  new window.dpm.Router();
}).call(this);
