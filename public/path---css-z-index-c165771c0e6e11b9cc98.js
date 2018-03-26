webpackJsonp([0x29225fb4a6c0ea00],{"./node_modules/json-loader/index.js!./.cache/json/css-z-index.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Z Index</h2>\n<p>Z Index (<code>z-index</code>) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index.</p>\n<p><strong>Note</strong>: Z index only works on positioned elements (<code>position:absolute</code>, <code>position:relative</code>, or <code>position:fixed</code>).</p>\n<h4>Possible Values</h4>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment" spellcheck="true">/* Default value if not specified */</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* Integer values */</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* Global values */</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>\n<span class="token property">z-index</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>Example Usage</h4>\n<p>In this example, you can see three boxes displayed on top of each other in different orders using <code>z-index</code>.</p>\n<p><em>HTML</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><em>CSS</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#blue</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#red</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#green</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Since <code>z-index</code> wasn’t defined, it will have a default value of <code>auto</code>. This is a result:</p>\n<p><img src="https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png" alt="An image of three boxes"></p>\n<p>Try to change the order to Green, Blue, Red in CSS using <code>z-index</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#blue</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#red</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#green</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Your result will be:</p>\n<p><img src="https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png" alt="An image of three boxes"></p>\n<p>Use Z Index if you need to put a background element below a container. You can easily place the background under every element by giving it a negative Z Index like below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#background</span> <span class="token punctuation">{</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href="https://css-tricks.com/almanac/properties/z/z-index/" target="_blank">https://css-tricks.com/almanac/properties/z/z-index/</a></p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS<em>Positioning/Understanding</em>z_index</a></p>\n<p><a href="https://philipwalton.com/articles/what-no-one-told-you-about-z-index/" target="_blank">https://philipwalton.com/articles/what-no-one-told-you-about-z-index/</a></p>',fields:{slug:"/css/z-index/"},frontmatter:{title:"Z Index"}}},pathContext:{slug:"/css/z-index/"}}}});
//# sourceMappingURL=path---css-z-index-c165771c0e6e11b9cc98.js.map