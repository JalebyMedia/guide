webpackJsonp([0xb69c8eeecc7e6000],{"./node_modules/json-loader/index.js!./.cache/json/javascript-higher-order-functions.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Higher Order Functions</h2>\n<p>A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both. If you have used any of the <code>Array</code> methods like <code>map</code> or <code>filter</code>, or passed a callback function to jQuery’s <code>$.get</code>, you have already worked with Higher Order Functions.</p>\n<p>When you use <code>Array.map</code>, you provide a function as its only argument, which it applies to every element contained in the array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> arrDoubled <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrDoubled<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [ 2, 4, 6 ]</span>\n</code></pre>\n      </div>\n<p>Higher order functions can also return a function. For example, you can make a function called <code>multiplyBy</code> that takes a number and returns a function that multiplies another number you provide by the first number provided. You can use this approach to create a <code>multiplyByTwo</code> function to pass to <code>Array.map</code>. This will give you the same result you saw above.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">multiplyBy</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> multiplyByTwo <span class="token operator">=</span> <span class="token function">multiplyBy</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> arrDoubled <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>multiplyByTwo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrDoubled<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// [ 2, 4, 6 ]</span>\n</code></pre>\n      </div>\n<p>See the guide on <a href=\'https://guide.freecodecamp.org/javascript/closures\' target=\'_blank\' rel=\'nofollow\'>Closures</a> for more information on how <code>multiplyByTwo</code> keeps a reference to <code>num1</code> in the example above.</p>',fields:{slug:"/javascript/higher-order-functions/"},frontmatter:{title:"Higher Order Functions"}}},pathContext:{slug:"/javascript/higher-order-functions/"}}}});
//# sourceMappingURL=path---javascript-higher-order-functions-cca4c5a14c251e0089e3.js.map