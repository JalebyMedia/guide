webpackJsonp([0xef79a2c0135b4000],{"./node_modules/json-loader/index.js!./.cache/json/csharp-linq-to-dictionary.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>ToDictionary</h1>\n<p>Greates a Dictionary from the DataSet;</p>\n<h3>Signature</h3>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code>Enumerable<span class="token punctuation">.</span>ToDictionary<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TKey<span class="token operator">></span> Method <span class="token punctuation">(</span>IEnumerable<span class="token operator">&lt;</span>TSource<span class="token operator">></span><span class="token punctuation">,</span> Func<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TKey<span class="token operator">></span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>Fruit<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span>     Color <span class="token operator">=</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Strawberry"</span><span class="token punctuation">,</span> Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">12</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Grape"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Purple"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">25</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Pineapple"</span><span class="token punctuation">,</span>  Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">1</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Red"</span><span class="token punctuation">,</span>    Quantity<span class="token punctuation">:</span> <span class="token number">5</span>   <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">"Mango"</span><span class="token punctuation">,</span>      Color <span class="token operator">=</span> <span class="token string">"Yellow"</span><span class="token punctuation">,</span> Quantity<span class="token punctuation">:</span> <span class="token number">2</span>   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Generates a Dictionary of Fruits by Id</span>\n<span class="token keyword">var</span> fruitsById <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">ToDictionary</span><span class="token punctuation">(</span>k <span class="token operator">=</span><span class="token operator">></span> k<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> v <span class="token operator">=</span><span class="token operator">></span> v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Dictionary&lt;int, Fruit></span>\n\n<span class="token comment" spellcheck="true">// Generates a dictionary fruits by color</span>\n<span class="token keyword">var</span> fruitsByColor <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>g <span class="token operator">=</span><span class="token operator">></span> g<span class="token punctuation">.</span>Color<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToDictionary</span><span class="token punctuation">(</span>k <span class="token operator">=</span><span class="token operator">></span> k<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> v <span class="token operator">=</span><span class="token operator">></span> v<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Dictionary of list of fruits by color</span>\n\n<span class="token comment" spellcheck="true">// Generates a dictionary of quantity of fruits by color</span>\n<span class="token keyword">var</span> fruitsByColor <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>g <span class="token operator">=</span><span class="token operator">></span> g<span class="token punctuation">.</span>Color<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToDictionary</span><span class="token punctuation">(</span>k <span class="token operator">=</span><span class="token operator">></span> k<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> v <span class="token operator">=</span><span class="token operator">></span> v<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>s <span class="token operator">=</span><span class="token operator">></span> s<span class="token punctuation">.</span>Quantity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Dictionary of sum of fruits by color</span>\n</code></pre>\n      </div>',fields:{slug:"/csharp/linq/to-dictionary/"},frontmatter:{title:"To Dictionary"}}},pathContext:{slug:"/csharp/linq/to-dictionary/"}}}});
//# sourceMappingURL=path---csharp-linq-to-dictionary-f519bb3acf501e3ce624.js.map