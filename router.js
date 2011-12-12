window.Router = (function() {

  function Router(route, name_space, default_page) {
    var action, arr, ctrl, package, _name, _ref;
    this.route = route;
    this.name_space = name_space;
    this.default_page = default_page;
    if ((_ref = window[_name = this.name_space]) == null) window[_name] = {};
    arr = this.route.split('/');
    if (arr.length > 2) {
      package = arr[0];
      ctrl = arr[1];
      action = arr[2];
      ctrl = this.humanize(ctrl);
      if (window[this.name_space][package][ctrl] !== void 0) {
        window[this.name_space].page = new window[this.name_space][package][ctrl]();
        window[this.name_space].page[action]();
      } else {
        window[this.name_space].page = new window[this.name_space][this.default_page]();
      }
    } else {
      ctrl = arr[0];
      action = arr[1];
      ctrl = this.humanize(ctrl);
      if (window[this.name_space][ctrl] !== void 0) {
        window[this.name_space].page = new window[this.name_space][ctrl]();
        window[this.name_space].page[action]();
      } else {
        window[this.name_space].page = new window[this.name_space][this.default_page]();
      }
    }
  }

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