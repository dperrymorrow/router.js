class window.Router

  constructor:(@route, @name_space, @default_page)->
    window[@name_space] ?= {}
    arr = @route.split '/'

    if arr.length > 2
      package = arr[0]
      ctrl = arr[1]
      action = arr[2]
      ctrl = @humanize( ctrl )

      if window[@name_space][package][ctrl] != undefined
        window[@name_space].page = new window[@name_space][package][ctrl]()
        window[@name_space].page[action]()
      else
        window[@name_space].page = new window[@name_space][@default_page]()

    else
      ctrl = arr[0]
      action = arr[1]
      ctrl = @humanize( ctrl )

      if window[@name_space][ctrl] != undefined
        window[@name_space].page = new window[@name_space][ctrl]()
        window[@name_space].page[action]()
      else
        window[@name_space].page = new window[@name_space][@default_page]()

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