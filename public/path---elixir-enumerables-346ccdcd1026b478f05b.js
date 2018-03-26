webpackJsonp([0xa53ffef176647800],{"./node_modules/json-loader/index.js!./.cache/json/elixir-enumerables.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Enumerables (Enum)</h2>\n<p>In object oriented programming languages, you’ll use a “loop” to perform the same action over and over on a piece of data, in Elixir since variables are immutable its not possible to create a tradational loop, instead Elixir and other functional programming languages rely on recursion. With recursion you’ll run the same action over each item in a list without the need to mutate a variable. The Enum library built in Elixir makes this easy.</p>\n<h2>Example</h2>\n<p>Using <code>Enum.map</code> you can run an anonymous function (function that’s not inside a module) passing over each item in a list. This accomplishes the same task as a tradational loop without needing to mutate an accumulator variable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> Enum<span class="token punctuation">.</span>map<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-></span> x <span class="token operator">*</span> <span class="token number">2</span> <span class="token keyword">end</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2>Methods in the Enum Module</h2>\n<p>The Enum module has over 70 different functions to use on Enumerables, listing them all here would take up a few pages. Instead let’s look at the most commonly used functions in the Enum Module.</p>\n<h3>Enum.map</h3>\n<p><code>Enum.map</code> runs an anonymous or captured function over a list.</p>\n<div class="gatsby-highlight">\n      <pre class="language-elixir"><code>iex<span class="token operator">></span> Enum<span class="token punctuation">.</span>map<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-></span> x <span class="token operator">*</span> <span class="token number">2</span> <span class="token keyword">end</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://elixir-lang.org/getting-started/recursion.html">elixir-lang.org | recursion</a></li>\n<li><a href="https://hexdocs.pm/elixir/Enum.html">hexdocs | Enum</a></li>\n</ul>',fields:{slug:"/elixir/enumerables/"},frontmatter:{title:"Enumerables"}}},pathContext:{slug:"/elixir/enumerables/"}}}});
//# sourceMappingURL=path---elixir-enumerables-346ccdcd1026b478f05b.js.map