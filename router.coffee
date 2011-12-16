window.dpm ?= {}
class dpm.Router

  constructor:(route, name_space, default_page)->
    @route_page(route, name_space, default_page)

  route_page:(@route, @name_space, @default_page)->
    @route = @route.replace(/^\/|\/$/g, '')
    @name_space = window if !@name_space
    @segments = @route.split('/').length

    if @segments > 2
      [pkg, ctrl, action] = @route.split '/'
      ctrl = @humanize ctrl
      @route_class = @name_space[pkg][ctrl] if @name_space[pkg]

    else
      [ctrl, action] = @route.split '/'
      ctrl = @humanize ctrl
      @route_class = @name_space[ctrl]

    if @route_class
      @name_space.page = new @route_class()
      @name_space.page[action]() if typeof @name_space.page[action] == 'function'
    else
      @name_space.page = new @default_page() if @default_page

  # private helper methods
  humanize:(string)->
    humanized = ""
    arr = string.split('_')
    if arr.length > 0
      for word in arr
        humanized += @capitalize word
    else
      humanized = @capitalize string
    humanized

  capitalize:(string)->
    string.charAt(0).toUpperCase() + string.slice(1)