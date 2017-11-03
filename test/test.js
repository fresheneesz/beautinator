var b = require("../beautinator")

console.log(b({a:1,b:2,c:3}))

console.log(b({a:1,b:2,c:function() {
    moose()
    whatever
}}))

console.log(b({a:1,b:[1,2,3,4,54,5,3,3,3,5,5,34431,2,3,4,54,5,3,3,3,5,5,34431,2,3,4,54,5,3,3,3,5,5,34431,2,3,4,54,5,3,3,3,5,5,3443],c:function() {
    moose()
    whatever
}}))


console.log(b(
    [1,2,3,{
        a:1,b:2,
        c:function() {
            moose()
            whatever
        }
     }
    ]
))


console.log(b(
    [1,2,3,{
        a:1,b:2,
        c:function() {
            moose(); whatever }
    }
    ]
))

console.log(b(
    [1,2,3,{
        a:1,b:2,
        c:function() {
moose(); whatever
}
    }
    ]
))



console.log(b([1,2,3,{a:1,b:2,c:function() {moose(); whatever;awef.awgawef.ew.waeg.awe.f.aweg.awe.awf()}}]))

console.log(b({ "font-size": "26px","font-family": "'Open Sans', sans-serif",color: "white", overflow: "hidden",padding: "4px 4px 4px 8px",Text: { display: "block", width: "100%","text-align": "center", "padding-left": "2px","word-break": "break-word"}}))

console.log(b({
    awefiojaweoifjawawefweaf:"aweofaiuhawiefhawifuhawelifhaweuifheawef"
}))

console.log(b({
    '$$first-child':"aweofaiuhawiefhawifuhawelifhaweuifheawef"
}))

// was failing on undefined
console.log(b({
    x: undefined,
    y: [undefined]
}))
