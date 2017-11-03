// options
    // indent
    // targetWidth
module.exports = function(object, options) {
    if(!options) options = {}
    if(options.indent === undefined) options.indent = 2
    if(options.targetWidth === undefined) options.targetWidth = 50

    return format(object, options)
}

function format(x, options) {
    if(x === undefined) return "undefined"

    var type = typeof(x)
    if(type === 'function') {
        return trimFunctionString(x.toString(), options.indent)
    } else if(x instanceof Array) {
        var curLine = [], lines = [curLine]
        x.forEach(function(item) {
            nextThing = format(item, options)
            var eventualLength = lineLength(curLine)+(curLine.length-1)*2
            if(eventualLength+nextThing.length > options.targetWidth) {
                curLine = [nextThing]
                lines.push(curLine)
            } else {
                curLine.push(nextThing)
            }
        })

        var processedLines = lines.map(function(line) {
            return line.map(function(linePart) {
                return linePart.replace(/\n/g, '\n ')
            }).join(', ')
        })

        var result = '['+processedLines.join(',\n ')
        if(processedLines.length > 1 || result.indexOf('\n') !== -1) {
            result += '\n'
        }

        return result+']'

    } else if(type === 'object') {
        var curLine = [], lines = [curLine]
        for(var k in x) {
            if(validVariableName(k)) {
                var keyPart = k
            } else {
                var keyPart = '"'+k.replace(/"/g,'\\"')+'"'
            }

            if(typeof(x[k]) === 'function') {
                var midLinesIndent = options.indent
            } else {
                var midLinesIndent = options.indent+keyPart.length+2
            }

            var nextValueLines = format(x[k], options).split('\n')
            if(nextValueLines.length > 1) {
                var nextValue = nextValueLines.slice(0, -1).join('\n'+indentString(midLinesIndent))+'\n'+
                    indentString(options.indent)+nextValueLines.slice(-1)
            } else {
                var nextValue = nextValueLines[0]
            }

            var nextThing = keyPart+": "+nextValue
            var eventualLength = lineLength(curLine)+(curLine.length-1)*2
            if(eventualLength+nextThing.length > options.targetWidth && curLine.length > 0) {
                curLine = [nextThing]
                lines.push(curLine)
            } else {
                curLine.push(nextThing)
            }
        }

        var processedLines = lines.map(function(line) {
            return line.join(', ')
        })

        var result = '{'+indentString(options.indent-1)+processedLines.join(',\n'+indentString(options.indent))
        if(processedLines.length > 1 || result.indexOf('\n') !== -1) {
            result += '\n'
        }

        return result+'}'
    } else { // primitive
        return JSON.stringify(x)
    }
}

var a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0), A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0)
var zero = '0'.charCodeAt(0), nine = '9'.charCodeAt(0)
function validVariableName(name) {
    if(name.length === 0) return false

    var firstChar = name[0]
    var firstCharCode = firstChar.charCodeAt(0)

    if(!(a<=firstCharCode && firstCharCode<=z || A<=firstCharCode && firstCharCode<=Z || firstChar in {_:1,$:1})) {
        return false
    }

    for(var n=1; n<name.length; n++) {
        var char = name[n]
        var charCode = char.charCodeAt(0)
        if(!(a<=charCode && charCode<=z || A<=charCode && charCode<=Z || zero<=charCode && charCode<=nine || charCode in {_:1,$:1})) {
            return false
        }
    }

    return true
}

function indentString(num) {
    var chars = []
    for(var n=0; n<num; n++) {
        chars.push(' ')
    }

    return chars.join('')
}
function lineLength(line) {
    var len = 0
    line.forEach(function(item) {
        len += item.length
    })

    return len
}

// trims the spaces on a function string to be reasonable
function trimFunctionString(fnStr, indent) {
    var fnLines = fnStr.split('\n')
    if(fnLines.length === 1) return fnStr

    var lastLine = fnLines[fnLines.length-1]
    if(lastLine !== '}') {
        fnLines[fnLines.length-1] = lastLine.slice(0,-1)
        var allWhiteSpace = true, lastLine = fnLines[fnLines.length-1]
        for(var n=0; n<lastLine.length; n++) {
            if(lastLine[n] !== ' ' && lastLine[n] !== '\t') {
                allWhiteSpace = false
                break
            }
        }

        if(allWhiteSpace) {
            fnLines[fnLines.length-1] = '}'
        } else {
            fnLines.push('}')
        }
    }

    var minIndent = Infinity
    fnLines.slice(1,-1).forEach(function(line) {
        var indent = 0
        for(var n=0; n<line.length; n++) {
            if(line[n] === ' ') {
                indent++
            } else if(line[n] === '\t') {
                indent += 4
            } else {
                break
            }
        }

        if(indent < minIndent) {
            minIndent = indent
        }
    })

    var diff = minIndent - indent
    for(var n=1; n<fnLines.length-1; n++) {
        if(diff > 0) { // remove some indentation
            fnLines[n] = fnLines[n].slice(diff)
        } else if(diff < 0) {
            fnLines[n] = indentString(-diff)+fnLines[n]
        }
    }

    return fnLines.join('\n')
}
