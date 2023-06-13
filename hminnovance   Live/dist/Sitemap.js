"use strict";

React = require('react');
var createSitemap = require('react-router-sitemap');
var StaticRouter = require('react-router-dom').StaticRouter;
var App = require('./App');
var routes = ['/', '/home', '/about',
// '/service',
  "/home", '/contactUs', '/web-designing', '/web-development', '/app-development', '/software-development', '/digital-marketing', '/automated-system', '/business-analysis', '/socialMedia-marketing', '/gallery', 'ourProducts', "blog","write-blog",
// '/service/:id',
'/404'];
var path = require('path');
function generateSitemap() {
  var myapp = React.createElement(StaticRouter, {
    location: "/",
    context: {}
  }, React.createElement(App));
  return createSitemap({
    hostname: 'https://www.hminnovance.com',
    urls: routes.map(function (route) {
      return {
        url: route,
        changefreq: 'daily',
        priority: 0.7
      };
    }),
    targetFolder: path.join(process.cwd(), './public'),
    sitemapFilename: 'sitemap.xml',
    gzip: true,
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
  }).toString();
}
generateSitemap();


//1st approach
// let response=await Nested.updateOne({_id:req.body.id},{$set:{"class.0.     math":req.body.math}})
// res.status(201).json(response)

//2nd approach  .....
let response = await Nested.findOne({ _id: req.body.id })
response.class[0].math = "500"
await response.save()