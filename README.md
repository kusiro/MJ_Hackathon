# Mei Chu Hackathon

Official website of Mei Chu Hackathon 2017

## Our developing/building enviroment
```
$ node -v
v7.5.0
$ npm -v
5.3.0
$ webpack -v
2.5.0
```

## Development
Make sure you have `webpack` and `webpack-dev-server` installed globally. Currently we have a hard time building with `webpack-dev-server@2.8.2`. Please consider using `webpack-dev-server@2.6.1` for this project.  
You may run below code:
```
npm i -g webpack
npm i -g webpack-dev-server@2.6.1
```
Run `npm i` to install depedencies for this project.  
Run `webpack-dev-server` to develop with livereload.

## Build
Run `webpack -p` to build with optimization.  
It will create new `public` directory which is the built result.  
In order to push the built website to `gh-pages`
1. Change to gh-pages branch via `git checkout gh-pages`
2. Move all built website from `public/` to current directory via `mv public/* ./`
3. Git commit & push to gh-pages as usual
