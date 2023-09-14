# NOTE 2023 still not working yet will local rhino compute

# WebApplicationWorkshop

Web application workshop for AEC Tech 2019: Seattle

![Application](https://raw.githubusercontent.com/mm-wang/WebApplicationWorkshop/master/assets/main.png)

## Configuration

1. Run `npm i gulp -g`, which you'll need to run this locally.
2. Install a text editor such as Atom to read and manage the files.

## Run application

1. Open a console window and run `gulp` to "compile" files and watch changes to the files.
2. Open another console window and run `npm start` to start a web server that will run the web application.

##NOTES 2023:
`node-saas` dependancy issue. Used for style sheets in the app. its actuall yin th gulp file

https://www.npmjs.com/package/gulp-sass
need to instlal both sass and gulp sass and remove all old dependcncesi

fixed by using `nvm use 14`
cache issues when installing use `npm cache clean --force`s

`npm install`

Add .env file
, remove this
"gulp-sass": "^4.0.2"

install dart-sass

in the gulp fil ecommnet out and requiore a sass compiler wiht gulpp

//const sass = require("gulp-sass");
const sass = require('gulp-sass')(require('sass'))

https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxjhttps://github.com/mcneel/compute.rhino3d.appserver/blob/main/docs/installation.md

https://github.com/mcneel/compute.rhino3d.appserver/blob/main/docs/installation.md

https://www.rhino3d.com/compute/login

get token here
https://discourse.mcneel.com/t/start-here/58566/2

instruciron in rhino compute there

connecting to atlas

 errmsg: '(Unauthorized) not authorized on admin to execute command { insert: "system.indexes", documents: [[{ns admin.sessions} {key [{expires 1}]} {name expires_1} {expireAfterSeconds 0} {unique false}]], ordered: true, writeConcern: { w: "majority" } }',
  code: 8000





https://www.guru99.com/bluebird-promises.htmlhttps://stackoverflow.com/questions/41517477/use-bluebird-for-mongoose-got-bind-is-not-a-function
  codeName: 'AtlasError'
}

remvioed db.on push db.this db.///



