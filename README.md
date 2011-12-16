# Router.js
This allows you to include your js files and it will instantiate the correct javascript package/class based on the route you have in your config. this is helpful in frameworks where you don't really want to have to instantiate a different class for each page, and forces everyone to use correct packaging and naming conventions based on the controller / view you are currently on. It also allows you to have a default page, in this case AppPage which gets instantiate if there is no javascript controller class present.

## example 1 with a nested package

````html
<script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
<script src="dpm/admin/other_items_.js" type="text/javascript" charset="utf-8"></script>
<script src="../router.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router('admin/items/index', dpm, dpm.AppPage);
</script>
````
the above would instantiate window.dpm.admin.Items javascript class, and fire the index method on that class

- the controller url will be modified to *ControllerName* from *controller\_name*
- Namepsace is optional, just omit or pass in Null, and Router will use window as the namespace.
- Default Page is also optional, if you omit nothing will be instantiated if no Class.action match is found.

## example 2 a controller action example

````html
<script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
<script src="dpm/items.js" type="text/javascript" charset="utf-8"></script>
<script src="../router.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router('items/index', dpm, dpm.AppPage);
</script>
````

## Example use with Ruby On Rails, just put this script at the end of your layout and the router will instantiate the proper javascript class and fire the correlating action.
````html
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router('<%= "#{params[:controller]}/#{params[:action]}" %>', dpm, dpm.AppPage);
</script>
````

## check out the tests directory...

## MIT licensed:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.