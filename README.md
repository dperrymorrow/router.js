# Router.js

### this allows you to include your js files and it will instantiate the correct javascript package/class based on the route you have in your config. this is helpfull in frameworks where you don't really want to have to instantiate a different class for each page, and forces everyone to use correct packaging and naming conventions based on the controller / view you are currently on. It also allows you to have a default page, in this case AppPage which gets instantiate if there is no javascript controller class present.

## example 1 with a nested package

    <script type="text/javascript" charset="utf-8">
      window.routerConfig = {namespace:'dpm',defaultPage:'AppPage',route:'admin/other_items/index'};
    </script>
  
  
    <script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
    <script src="dpm/admin/other_items_.js" type="text/javascript" charset="utf-8"></script>
    <script src="../router.js" type="text/javascript" charset="utf-8"></script>
  
### this would instantiate window.dpm.admin.OtherItems javascript class, and fire the index method on that class  

## example 2 just a controller action example

    <script type="text/javascript" charset="utf-8">
      window.routerConfig = {namespace:'dpm',defaultPage:'AppPage',route:'admin/other_items/index'};
    </script>
  
  
    <script src="dpm/app_page.js" type="text/javascript" charset="utf-8"></script>
    <script src="dpm/items.js" type="text/javascript" charset="utf-8"></script>
    <script src="../router.js" type="text/javascript" charset="utf-8"></script>