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