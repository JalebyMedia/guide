webpackJsonp([0x79a9a607e28f0400],{"./node_modules/json-loader/index.js!./.cache/json/jquery-jquery-click-method.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Click Method</h2>\n<p>The jQuery Click method triggers an function when an element is clicked. The function is known as a “handler” becuase it handles the click event. Functions can impact the HTML element that is bound to the click using the jQuery Click method, or they can change something else entirely.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#clickMe"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The click method takes the handler function and executes it every time the element <code>#clickMe</code> is clicked. The handler function receives a parameter known as an <a href="http://api.jquery.com/Types/#Event">eventObject</a> that can be useful for controlling the action. </p>\n<h4>Examples</h4>\n<p>This code shows an alert when a user clicks a button:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#alert"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hi! I\'m an alert"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="https://jsfiddle.net/pL63cL6m/">jsFiddle</a></p>\n<p>The <a href="http://api.jquery.com/Types/#Event">eventObject</a> has some built in methods, including <code>preventDefault()</code>, which does exactly what it says. Here we stop the default event of an element, preventing the anchor tag from acting as a link:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myLink<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>www.google.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Google<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myLink"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\tevent<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href=\'https://jsfiddle.net/dy457gbh/\' target=\'_blank\' rel=\'nofollow\'>jsFiddle</a></p>\n<h4>More ways to play with the click method</h4>\n<p>The handler function can also accept additional data in the form of an object:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>jqueryElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>usefulInfo<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The data can be of any type.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"element"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">{</span>firstWord<span class="token punctuation">:</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span> secondWord<span class="token punctuation">:</span> <span class="token string">"World"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>firstWord<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>secondWord<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The click method with no handler function triggers a click event:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#alert"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hi! I\'m an alert"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#alert"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Whenever the page loads, the click event will trigger the assigned alert.</p>\n<p>Also you should prefer to use .on(‘click’,…) over .click(…) because the former can use less memory and work for dynamically added elements.</p>\n<p><a href=\'https://jsfiddle.net/gspk6gxt/\' target=\'_blank\' rel=\'nofollow\'>jsFiddle</a></p>\n<h4>Common Mistakes</h4>\n<p>The click event is only bound to elements currently on the DOM at the time of binding, so any elements added afterwards will not be bound. To bind all elements on the DOM, even if they will be created at a later time, use the <code>.on()</code> method.</p>\n<p>For example, this click method example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">"element"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"I\'ve been clicked!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Can be changed to this on method example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span> document <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token string">"element"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"I\'ve been clicked!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<p>For more information, please visit the <a href=\'https://api.jquery.com/click/#click\' target=\'_blank\' rel=\'nofollow\'>official website</a> </p>',fields:{slug:"/jquery/jquery-click-method/"},frontmatter:{title:"Click Method"}}},pathContext:{slug:"/jquery/jquery-click-method/"}}}});
//# sourceMappingURL=path---jquery-jquery-click-method-3e38697e16e44ec54603.js.map