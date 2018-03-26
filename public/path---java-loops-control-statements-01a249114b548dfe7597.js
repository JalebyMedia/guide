webpackJsonp([0x30c3d4e0d9524c00],{"./node_modules/json-loader/index.js!./.cache/json/java-loops-control-statements.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Jump Statements</h1>\n<p>Jump statements are a type of <a href=\'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html\' target=\'_blank\' rel=\'nofollow\'><i>control flow</i></a> statements. Basically, you can use them to change the order in which statements are executed from the normal course of execution. In essence, these statements cause the program control to ‘jump’ away from the next expected point of execution to another place in the program.</p>\n<p>The following jump statements are commonly used with loops:</p>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/java-loops-break-control-statement\' target=\'_blank\' rel=\'nofollow\'>break</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/java-loops-continue-control-statement\' target=\'_blank\' rel=\'nofollow\'>continue</a></li>\n</ul>\n<p>The ‘break’ control statement breaks out of the loop when the condition is met. This means the rest of the loop will not run.\nFor example, in the loop below if i reaches 5, the loop breaks, so it does not continue on.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">//if i is 5, break out of the loop.</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    0 1 2 3 4 </code></pre>\n      </div>\n<p>The ‘continue’ control statement is the less intense version of ‘break’. It only breaks out of the current instance of the loop and continues on. In the loop below, if i is 5, the loop continues, so it will skip over the print statement below and move on until i reaches 10 and the loop stops.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment" spellcheck="true">//if i is 5, break out of the current instance loop.</span>\n    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    0 1 2 3 4 6 7 8 9</code></pre>\n      </div>',fields:{slug:"/java/loops/control-statements/"},frontmatter:{title:"Jump Statements"}}},pathContext:{slug:"/java/loops/control-statements/"}}}});
//# sourceMappingURL=path---java-loops-control-statements-01a249114b548dfe7597.js.map