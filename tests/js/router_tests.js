// namespace tests
var project_namespace = {};
project_namespace.DefaultPage = function(){
  this.toString = function(){return 'project_namespace.DefaultPage'; }
  this.index = function(){ window.routeFired = "project_namespace.DefaultPage"; }
}
project_namespace.TestClass = function(){
  this.toString = function(){return 'project_namespace.TestClass'; }
  this.index = function(){ window.routeFired = "project_namespace.TestClass/index"; }
}

project_namespace.admin = {};
project_namespace.admin.TestClass = function(){
  this.toString = function(){return 'project_namespace.admin.DefaultPage'; }
  this.index = function(){window.routeFired = "TestClass/index";}
}

// flat tests
window.TestClass = function(){
  this.toString = function(){return 'TestClass'; }
  this.index = function(){ window.routeFired = "TestClass/index"; }
}

//
var admin = {};
admin.TestClass = function(){
  this.toString = function(){ return 'admin.TestClass';}
  this.index = function(){window.routeFired = "admin.TestClass/index";}
}


$(document).ready(function(){
  test("test controller/action with namespace situation", function() {
    window.router = new dpm.Router('test_class/index', project_namespace);
    window.routeFired =  equal( window.routeFired, 'project_namespace.TestClass/index', 'passing in route of test_class/index should result in firing TestClass.index()');

    window.router = new dpm.Router('test_class/foobar', project_namespace);
    window.routeFired =  equal( window.project_namespace.page.toString(), 'project_namespace.TestClass', 'class found but no method found');

    window.router = new dpm.Router('something/foobar', project_namespace, project_namespace.DefaultPage );
    window.routeFired =  equal( 'project_namespace.DefaultPage', window.project_namespace.page.toString(), 'no match found and default page is instantiated');
  });

  test( "controller action without namespace", function(){
    window.router = new dpm.Router('test_class/index');
    window.routeFired =  equal( window.routeFired, 'TestClass/index', 'passing in route of test_class/index should result in firing TestClass.index()');

    window.router = new dpm.Router('test_class/foobar');
    window.routeFired =  equal( 'TestClass', window.page.toString(), 'class found but no action is found');

    window.router = new dpm.Router('something/foobar', null, project_namespace.DefaultPage );
    window.routeFired =  equal( 'project_namespace.DefaultPage', window.page.toString(), 'no match found and default page is instantiated');
  });

  test( "nested package controller action without namespace", function(){
    window.router = new dpm.Router('admin/test_class/index');
    window.routeFired =  equal( window.routeFired, 'admin.TestClass/index', 'passing in route of admin/test_class/index should result in firing admin.TestClass.index()');

    window.router = new dpm.Router('admin/test_class/foobar');
    window.routeFired =  equal( 'admin.TestClass', window.page.toString(), 'class found but no action is found');
    //
    window.router = new dpm.Router('package/something/foobar', null, project_namespace.DefaultPage );
    window.routeFired =  equal( 'project_namespace.DefaultPage', window.page.toString(), 'no match found and default page is instantiated');
  });

  test("test cleaning up of leading slashes", function() {
    window.router = new dpm.Router('/test_class/index', project_namespace);
    window.routeFired =  equal( window.routeFired, 'project_namespace.TestClass/index', 'should remove leading slash');

    window.router = new dpm.Router('test_class/index/', project_namespace);
    window.routeFired =  equal( window.routeFired, 'project_namespace.TestClass/index', 'should remove trailing slash');
   });
});

