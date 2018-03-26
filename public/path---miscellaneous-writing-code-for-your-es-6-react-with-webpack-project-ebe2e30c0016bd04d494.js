webpackJsonp([0x974b1a014dd38000],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-writing-code-for-your-es-6-react-with-webpack-project.json":function(e,t){e.exports={data:{markdownRemark:{html:"<h2>dist/index.html</h2>\n<p>We can go now open our <code>dist/index.html</code>. This will be the one HTML page that loads our entire app. We don’t need much code at all for this file, just enough to:</p>\n<ul>\n<li>Set an element for the React DOM in the <code>src/js/client.js</code>.</li>\n<li>Link to our bundled JavaScript file (which doesn’t exist yet).</li>\n</ul>\n<p>Therefore, this is what our <code>dist/index.html</code> file will look like:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code><!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>React Webpack Example</title>\n</head>\n<body>\n  <!-- React app will be injected into the following `div` element: -->\n  <div id=\"app\"></div>\n  <!-- Include bundled JavaScript: -->\n  <script src=\"bundle.js\"></script>\n</body>\n</html></code></pre>\n      </div>\n<p>You might be wondering why this page links to a <code>bundle.js</code> when all we have so far is an empty <code>src/js/client.js</code>. This will be revealed later when we write our Webpack configuration file.</p>\n<h2>src/js/client.js</h2>\n<p>Now it’s time to write some React code. Just like in the <code>dist/index.html</code> file, for now we will write just enough code to get the app going, so there won’t be much code required at all:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>import React from 'react';\nimport ReactDOM from 'react-dom';\n\nclass Main extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>This is one cool app!</h1>\n      </div>\n    );\n  }\n}\n\nconst app = document.getElementById('app');\nReactDOM.render(<Main />, app);</code></pre>\n      </div>\n<p>The code that looks like HTML elements is actually JSX, which is a part of React.</p>\n<ul>\n<li><a href='http://buildwithreact.com/tutorial/jsx' target='_blank' rel='nofollow'>Help: More about JSX</a></li>\n</ul>\n<p>To explain what is going on in this file, we’ll break it down:  </p>\n<ul>\n<li>\n<p>First, we are importing <code>React</code> and <code>ReactDOM</code>. These are required for any React file that is used to inject code into the DOM. The <code>ReactDOM</code> is a virtual DOM, and it’s not the same thing as the standard Document Object Model.</p>\n</li>\n<li>\n<p><a href='https://facebook.github.io/react/docs/glossary.html' target='_blank' rel='nofollow'>Help: More about the React DOM</a></p>\n<ul>\n<li>Next, we are creating a React class. Classes were added to JavaScript in ES6. Therefore, this is the ES6 method of writing a React class, but of course <a href='https://toddmotto.com/react-create-class-versus-component/' target='_blank' rel='nofollow'>we can write one in ES5 too</a>.</li>\n</ul>\n</li>\n<li>\n<p><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' target='_blank' rel='nofollow'>Help: More about ES6 classes</a></p>\n</li>\n</ul>\n<p>Every React class has a <code>render</code> method. In this case, the <code>render</code> method is <code>return</code>ing a JSX <code>div</code> element. This is what we’ll see all over any React file. The class can contain other methods which must appear before the <code>render</code> method, which always goes at the bottom of a class.</p>\n<ul>\n<li>Lastly, we are linking React with our <code>index.html</code>. We set the <code>app</code> to be the location of wherever we want our React code to be injected. And finally, using ReactDOM, we inject the component we wrote, <code>&#x3C;Main /></code>, into the app, which in this case is the <code>div</code> with the <code>id</code> of <code>app</code>.</li>\n</ul>\n<h2>webpack.config.js</h2>\n<p>There’s still one more file left to write before our project is ready. It’s the Webpack configuration file. At first, <code>webpack.config.js</code> files can be confusing to look at, but often, they’re not as complex as they seem.</p>\n<p>In this case, at its most basic, a <code>webpack.config.js</code> exports an object that has the following properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Role</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>entry</td>\n<td>What goes in: the entry point of the app. In this case, it’s \n<code>src/js/client.js</code>\n.</td>\n</tr>\n<tr>\n<td>output</td>\n<td>What comes out: what Webpack is going to bundle for us. In this case, it’s whatever we name it in the \n<code>webpack.config.js</code>\n.</td>\n</tr>\n<tr>\n<td>loaders</td>\n<td>The tasks that Webpack is going to carry out.</td>\n</tr>\n</tbody>\n</table>\n<p>Here is what the <code>webpack.config.js</code> file looks like:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>var path = require('path');\nvar srcPath = path.join(__dirname, 'src');\nvar buildPath = path.join(__dirname, 'dist');\n\nmodule.exports = {\n  context: srcPath,\n  entry: path.join(srcPath, 'js', 'client.js'),\n  output: {\n      path: buildPath,\n      filename: \"bundle.js\"\n  },\n  module: {\n      loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'>\n          {\n            test: /\\.jsx?$/,\n            exclude: /(node_modules|bower_components)/,\n            loader: 'babel',\n            query: {\n              presets: ['react', 'es2015']\n            }\n          }\n      ]\n  }\n};</code></pre>\n      </div>\n<p>Again, let’s break it down so that it’s clear what this file is doing:</p>\n<ul>\n<li>\n<p>Firstly, we are requiring NodeJS’s <code>path</code> module so that we can handle file paths, which is required for setting the object’s <code>context</code>. It’s very important to use this module rather than try and concatenate directories with strings, because some operating systems, like Windows, require this.</p>\n</li>\n<li>\n<p>Then, we specify a <code>srcPath</code> and a <code>buildPath</code> using the <code>path</code> module that we just required. Doing this will ensure we have [DRY</a>, readable code.</p>\n</li>\n<li>\n<p>Now comes the time to write the object. The properties we are going to use are all relevant to Webpack.</p>\n<ul>\n<li>We first provide a context, which simply specifies where our app is. It refers to the <code>context</code> variable that we just created.</li>\n<li>We then specify the entry point, which is of course the React app we wrote earlier (<code>src/js/client.js</code>).</li>\n<li>Next we specify the name of the bundled file that Webpack creates when it runs. In this case it’s <code>dist/bundle.js</code>. Sound familiar? It should do, because this is the file we are linking to from our <code>dist/index.html</code>!</li>\n<li>Finally comes the <code>module</code> property, which contains an array, <code>loaders</code>, which currently contains a single object. This object’s properties tell Webpack what JavaScript files are being written with ES6 and React, so that its loader, <code>babel</code> can run accordingly when <code>webpack.config.js</code> is run. This is largely boilerplate code that we can see at <a href='https://github.com/babel/babel-loader' target='_blank' rel='nofollow'>the readme page on Babel Loader</a>.</li>\n</ul>\n</li>\n</ul>\n<p>If <code>webpack.config.js</code> is confusing now, don’t worry, as long as you understand what it is there to do.</p>\n<ul>\n<li><a href='https://webpack.github.io/docs/tutorials/getting-started/#config-file' target='_blank' rel='nofollow'>Help: More about writing a Webpack configuration file</a></li>\n</ul>",fields:{slug:"/miscellaneous/writing-code-for-your-es6-react-with-webpack-project/"},frontmatter:{title:"Writing Code for Your Es6 React with Webpack Project"}}},pathContext:{slug:"/miscellaneous/writing-code-for-your-es6-react-with-webpack-project/"}}}});
//# sourceMappingURL=path---miscellaneous-writing-code-for-your-es-6-react-with-webpack-project-ebe2e30c0016bd04d494.js.map