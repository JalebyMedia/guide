webpackJsonp([582282710382413e4],{"./node_modules/json-loader/index.js!./.cache/json/csharp-linq-select.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Select</h1>\n<p>Projects data from the data set.</p>\n<h3>Signature</h3>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code>Enumerable<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TResult<span class="token operator">></span> Method <span class="token punctuation">(</span>IEnumerable<span class="token operator">&lt;</span>TSource<span class="token operator">></span><span class="token punctuation">,</span> Func<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TResult<span class="token operator">></span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>Fruit<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span>     Color <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">12</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Grape"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Purple"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">25</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Pineapple"</span><span class="token punctuation">,</span>  Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">1</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">5</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Mango"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">2</span>   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> mangoQnt <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>f <span class="token operator">=</span><span class="token operator">></span> f<span class="token punctuation">.</span>Quantity<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>f <span class="token operator">=</span><span class="token operator">></span> f<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"Mango"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 2</span>\n\n<span class="token keyword">var</span> grapeColor <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>f <span class="token operator">=</span><span class="token operator">></span> f<span class="token punctuation">.</span>Color<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>f <span class="token operator">=</span><span class="token operator">></span> f<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"Grape"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Purple</span>\n</code></pre>\n      </div>',fields:{slug:"/csharp/linq/select/"},frontmatter:{title:"Select"}}},pathContext:{slug:"/csharp/linq/select/"}}}});
//# sourceMappingURL=path---csharp-linq-select-e274007db7f4906601ab.js.map