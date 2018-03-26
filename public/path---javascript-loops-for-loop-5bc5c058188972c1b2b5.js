webpackJsonp([0xc1774fff2d590800],{"./node_modules/json-loader/index.js!./.cache/json/javascript-loops-for-loop.json":function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Syntax</h3>\n<p>for ((initialization); (condition); (final-expression)) statement</p>\n<p>The javascript <code>for</code> statement consists of three expressions and a statement:</p>\n<h2>Description</h2>\n<ul>\n<li>initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished it’s execution they are destroyed.</li>\n<li>condition - Expression that is checked prior to the execution of every iteration. If omitted this expression evaluates to true;</li>\n<li>final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.</li>\n<li>statement - Code to be repeated in the loop</li>\n</ul>\n<p>any of these three expressions or the statement can be omitted. For loops are commonly used to count a certain number of iterations to repeat a statement.</p>\n<h2>Common Pitfalls</h2>\n<p><strong>Exceeding the bounds of an array</strong></p>\n<p>When indexing over an array many times it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// This will cause an error.\n// The bounds of the array will be exceeded.\nvar arr = [ 1, 2, 3 ];\nfor (var i = 0; i <= arr.length; i++) {\n   console.log(arr[i]);\n}\n\noutput:\n1\n2\n3\nundefined</code></pre>\n      </div>\n<p>There are to ways to fix this code. Set the condition to either <code>i &#x3C; arr.length</code> or <code>i &#x3C;= arr.length - 1</code></p>\n<h3>Examples</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>for (var i = 0; i < 9; i++) {\n   console.log(i);\n   // more statements\n}\n\noutput:\n0\n1\n2\n3\n4\n5\n6\n7\n8</code></pre>\n      </div>\n<p>links: <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for\' target=\'_blank\' rel=\'nofollow\'>MDN</a></p>',fields:{slug:"/javascript/loops/for-loop/"},frontmatter:{title:"For Loop"}}},pathContext:{slug:"/javascript/loops/for-loop/"}}}});
//# sourceMappingURL=path---javascript-loops-for-loop-5bc5c058188972c1b2b5.js.map