webpackJsonp([0xd4aa703f2e193800],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-create-an-npm-module.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>An NPM module is a set of Javascript functionality bundled into a distributable package. <a href=\'http://www.npmjs.com\' target=\'_blank\' rel=\'nofollow\'>NPM</a> maintains the registry of all available packages, and is also the tool used to install packages from its registry.</p>\n<p>The beauty of NPM is that you can assemble packages other people have created to create something new, and someone later on could use the package you create. If you have some code that you want to share with the world, publishing a module to NPM is easy.</p>\n<h2>Step 1: Create your script</h2>\n<p>I created this simple utility as <code>index.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var time = new Date().toTimeString();\nconsole.log(time);</code></pre>\n      </div>\n<h2>Step 2: Create package information</h2>\n<p>The next step is to create the information to publish with your package, stored in <code>package.json</code>. NPM provides a wizard to make creating this file easy.</p>\n<p>Simply run <code>npm init</code> and answer the questions.</p>\n<p>Your <code>package.json</code> should look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{\n  "name": "whattimeisit",\n  "version": "1.0.0",\n  "description": "accurate time retrieval",\n  "main": "index.js",\n  "author": "HoursAndMinutes",\n  "license": "ISC"\n}</code></pre>\n      </div>\n<p>Don’t forget to include the GitHub repository link if the code is on GitHub!</p>\n<h2>Step 3: Create a user account on NPM</h2>\n<p>In order to publish a package to NPM, you need to have an account registered. To do that, run <code>npm adduser</code>. You can verify the account currently in use with <code>npm config ls</code>.</p>\n<h2>Step 4: Publish to NPM</h2>\n<p>Before you publish your package to NPM, check if the directory contains any files you do not want made public (e.g. passwords, private keys etc). You can add these to a file named <code>.npmignore</code> to exclude them from package publishing. NPM will also honor <code>.gitignore</code> if you have that.</p>\n<p>Once you have finalized your package contents, run <code>npm publish</code>. You can confirm the details of your package at <a href=\'https://npmjs.com/package/yourpackagename\' target=\'_blank\' rel=\'nofollow\'>https://npmjs.com/package/yourpackagename</a>.</p>\n<h3>More Information:</h3>\n<p>Creating Node.js modules <a href=\'https://docs.npmjs.com/getting-started/creating-node-modules\' target=\'_blank\' rel=\'nofollow\'> npm </a></p>',fields:{slug:"/miscellaneous/create-an-npm-module/"},frontmatter:{title:"Create an Npm Module"}}},pathContext:{slug:"/miscellaneous/create-an-npm-module/"}}}});
//# sourceMappingURL=path---miscellaneous-create-an-npm-module-1a3e79289a1850b69672.js.map