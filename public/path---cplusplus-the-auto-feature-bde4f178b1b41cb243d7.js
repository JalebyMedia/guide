webpackJsonp([0xdcb362d8d155e000],{"./node_modules/json-loader/index.js!./.cache/json/cplusplus-the-auto-feature.json":function(s,a){s.exports={data:{markdownRemark:{html:'<h2>The Auto Feature</h2>\n<p><code>auto</code> is a C++11 feature that lets the compiler infer the data type for us in a definition. </p>\n<p>Without <code>auto</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">10.425</span><span class="token punctuation">;</span>\n<span class="token keyword">double</span> y <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>With <code>auto</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">10.425</span><span class="token punctuation">;</span>\n<span class="token keyword">auto</span> y <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Whilst it may seem trivial, it becomes incredibly useful when data types begin to get complicated. For example, if a user wanted to store a vector of employees that had their name and age. One way to store the name and age could be a <code>pair</code> with a <code>string</code> and an <code>unsigned int</code>. This is represented as <code>std::vector&#x3C;std::pair&#x3C;std::string, unsigned int>> employees</code>. Now suppose we wanted to access the last employee added:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code>std<span class="token operator">::</span>vector<span class="token operator">&lt;</span>std<span class="token operator">::</span>pair<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span><span class="token operator">>></span> employees<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// without auto</span>\nstd<span class="token operator">::</span>pair<span class="token operator">&lt;</span>std<span class="token operator">::</span>string<span class="token punctuation">,</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span><span class="token operator">>></span> last_employee <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// with auto</span>\n<span class="token keyword">auto</span> last_employee <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Once the compiler determines the type on the right side of the <code>=</code> it replaces <code>auto</code> with that type.</p>',fields:{slug:"/cplusplus/The Auto Feature/"},frontmatter:{title:"The Auto Feature"}}},pathContext:{slug:"/cplusplus/The Auto Feature/"}}}});
//# sourceMappingURL=path---cplusplus-the-auto-feature-bde4f178b1b41cb243d7.js.map