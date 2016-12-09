//Marcelo McAndrew

//require dependencies
var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});
var fs = require('fs')
var path = require('path')
//create new nightmare object


var wahf = "https://docs.google.com/forms/d/e/1FAIpQLSdaZ4hnJpch3y76n2_PcLGQEpQUjbDDstGgCGJ3AnzMlNBTTw/viewform"

console.log();

var contents = fs.readFileSync(path.resolve()+'/temp.json');
// Define to JSON type
//parse contents e.g post.img, post.title
var post = JSON.parse(contents);

  nightmare
    .goto(wahf)

    .screenshot('test.png')

    .type('input:nth-of-type(1)',post.fullname)
    .click('label:nth-of-type('+post.year+')')
    .type('input:nth-of-type(4)',post.teamleader)

    .end()
    .then(function (result) {
    // console.log(result)
    })
    .catch(function (error) {
      //console.error('Search failed:', error);
    });
