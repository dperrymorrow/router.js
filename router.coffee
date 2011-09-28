window.dpm ?= {}

class window.dpm.Router
	
	constructor: ->
		
		if typeof window.routerConfig == "undefined"
			console.error("window.routerConfig was not defined, it should be in the following format window.routerConfig = {namespace:'dpm',defaultPage:'AppPage',route:'admin/other_items/index'};")
		# package for pages
		@name_space = window.routerConfig.namespace
		# this is the super for the page instance
		@default_page = window.routerConfig.defaultPage		
		arr = window.routerConfig.route.split('/')
		
		if arr.length > 2 
			@package = arr[0]
			@ctrl = arr[1];
			@action = arr[2]
			
		else
			@ctrl = arr[0];
			@action = arr[1]
			
		@instantiatePage()
			
	
	instantiatePage:->
		
		@ctrl = @humanize(@ctrl)
		
		if typeof window[@name_space] == "undefined"
		  console.error( "your namespace #{@name_space} is undefined")
		  return
		
		else if typeof @package != 'undefined'
			window[@name_space].page = new window[@name_space][@package][@ctrl]()
			
		else if typeof window[@name_space][@ctrl] != 'undefined'
			window[@name_space].page = new window[@name_space][@ctrl]()
			
		else
		  window[@name_space].page = new window[@name_space][@default_page]()
		  
		# fire teh action for the page if it exists
		if typeof window[@name_space].page[@action]	!= 'undefined'
			window[@name_space].page[@action]()	
		
		
	
	# private helper methods
	humanize:(string)->
		
		humanized = ""
		
		arr = string.split('_')
		if arr.length > 0
		  
		  for word in arr
		    humanized += @capitalize(word)
		  
		else 
		  humanized = @capitalize(string)
		
		return humanized
		
	capitalize:(string)->
	  return string.charAt(0).toUpperCase() + string.slice(1)
	
new window.dpm.Router()

