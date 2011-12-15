# Router.js
This allows you to include your js files and it will instantiate the correct javascript package/class based on the route you have in your config. this is helpful in frameworks where you don't really want to have to instantiate a different class for each page, and forces everyone to use correct packaging and naming conventions based on the controller / view you are currently on. It also allows you to have a default page, in this case AppPage which gets instantiate if there is no javascript controller class present.

## example 1 with a nested package

````html
<script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
<script src="dpm/admin/other_items_.js" type="text/javascript" charset="utf-8"></script>
<script src="../router.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router('admin/items/index','dpm','AppPage');
</script>
````
the above would instantiate window.dpm.admin.Items javascript class, and fire the index method on that class

## example 2 a controller action example

````html
<script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
<script src="dpm/items.js" type="text/javascript" charset="utf-8"></script>
<script src="../router.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router('items/index','dpm','AppPage');
</script>
````
## Example use with Ruby On Rails, just put this script at the end of your layout and the router will instantiate the proper javascript class and fire the correlating action.
````html
<script type="text/javascript" charset="utf-8">
  window.router = new window.Router(<%= "#{params[:controller]}/#{params[:action]}",'dpm','AppPage');
</script>
````