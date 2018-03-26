webpackJsonp([0x5946e4d5aa2e3400],{"./node_modules/json-loader/index.js!./.cache/json/javascript-function-invocation.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Function Invocation</h2>\n<p>The code inside a function is executed when the function is invoked. It is common to use the term “call a function” instead of “invoke a function”.</p>\n<p>Functions must be in scope when they are called. The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment" spellcheck="true">// Function invocation, will return 20 </span>\n</code></pre>\n      </div>\n<p>In the example code, a and b are the function’s parameters that hold the values 10 and 2, that are the arguments used in the function call.</p>\n<h3>Invoking a Function as a Method</h3>\n<p>In JavaScript, you can define functions as object methods.</p>\n<p>The following example creates an object (<code>myObject</code>), with two properties (<code>firstName</code> and <code>lastName</code>), and a method (<code>fullName</code>):</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">:</span><span class="token string">"John"</span><span class="token punctuation">,</span>\n  lastName<span class="token punctuation">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>\n  fullName<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nmyObject<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment" spellcheck="true">// Function invoked as a method, will return "John Doe"</span>\n</code></pre>\n      </div>\n<h3>Arrow Functions</h3>\n<p>In the newest version of Javascript, you can also shorten the syntax by using Arrow Functions.\nThe following demonstrates two functions.  One is written in the standard form, one is written as an arrow function.  Keep in mind that arrow functions do not have their own this, arguments, super, or new.target.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">//regular function</span>\n\n<span class="token keyword">function</span> <span class="token function">addStuff</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> args <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n \n <span class="token function">addStuff</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token comment" spellcheck="true">//returns 4</span>\n \n <span class="token comment" spellcheck="true">//arrow function</span>\n \n <span class="token keyword">var</span> addStuff <span class="token operator">=</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> args <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n <span class="token function">addStuff</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token comment" spellcheck="true">//returns 4</span>\n</code></pre>\n      </div>\n<p>This shorthand version of the arrow function has an implicit return so you don’t specify a return statement.</p>\n<h3>More Information:</h3>\n<ul>\n<li>Function documentation: <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions\' target=\'_blank\' rel=\'nofollow\'>MDN</a></li>\n</ul>',fields:{slug:"/javascript/function-invocation/"},frontmatter:{title:"Function Invocation"}}},pathContext:{slug:"/javascript/function-invocation/"}}}});
//# sourceMappingURL=path---javascript-function-invocation-ad233feda957cb570fa8.js.map