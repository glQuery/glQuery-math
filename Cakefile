fs     = require 'fs'
path   = require 'path'
{exec} = require 'child_process'

libFiles  = [
  # omit src/ and .js to make the below lines a little shorter
  'matrix3'
  'matrix3.set'
  'matrix4'
  'matrix4.set'
]

# TODO: This is not very elegant... need to work on a better solution
taskList = []
invokeSeries = (tasks...) ->
  taskList = tasks.slice 1
  invoke tasks[0] if tasks.length > 0
invokeNext = () ->
  invoke taskList.shift() if taskList.length > 0

task 'all', "Build all distribution files", ->
  invokeSeries 'build', 'minify', 'wrap'

task 'build', "Concatenate source files into a single library file", ->
  exec "mkdir -p 'build'", (err, stdout, stderr) ->
  # Concatenate files
  libContents = new Array remaining = libFiles.length
  for file, index in libFiles then do (file, index) ->
    fs.readFile "src/#{file}.js", 'utf8', (err, fileContents) ->
      throw err if err
      libContents[index] = fileContents
      process() if --remaining is 0
  # Translate concatenated file
  process = ->
    fs.writeFile 'dist/glquery.math.js', libContents.join('\n'), 'utf8', (err) ->
      throw err if err
      console.log "Done."
      invokeNext()      

task 'fetch:npm', "Fetch the npm package manager", ->
  exec "curl http://npmjs.org/install.sh | sudo sh", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
    console.log "Done."
    invokeNext()

task 'fetch:uglifyjs', "Fetch the UglifyJS minification tool", ->
  exec "npm install uglify-js", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
    console.log "Done."
    invokeNext()

task 'minify', "Minify the resulting application file after build", ->
  path.exists 'node_modules/.bin/uglifyjs', (exists) ->
    if exists
      exec "node_modules/.bin/uglifyjs dist/glquery.math.js > dist/glquery.math.min.js", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        console.log "Done."
        invokeNext()
    else
      exec "uglifyjs dist/glquery.math.js > dist/glquery.math.min.js", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        console.log "Done."
        invokeNext()

task 'wrap', "Wrap the library files into a glQueryMath module", ->
  path.exists 'dist/glquery.math.js', (exists) ->
    if exists
      #exec "", (err, stdout, stderr) ->
      #  throw err if err
      #  console.log stdout + stderr
      #  console.log "Done."
      invokeNext()

task 'clean', "Cleanup all build files and distribution files", ->
  exec "rm -rf build;rm dist/glquery.math.js;rm dist/glquery.math.min.js;rm dist/glquery.math.wrapped.js;rm dist/glquery.math.wrapped.min.js", (err, stdout, stderr) ->
    console.log stdout + stderr
    console.log "Done."
    invokeNext()

