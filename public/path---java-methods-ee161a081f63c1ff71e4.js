webpackJsonp([0x448fd423b5bbf800],{"./node_modules/json-loader/index.js!./.cache/json/java-methods.json":function(a,n){a.exports={data:{markdownRemark:{html:'<h1>Methods</h1>\n<p>The most recognizable method in Java is probably <code>public static void main(String[]args)</code> where <code>public</code> means that users have access to the method, <code>static</code> means that the method is based on a “class” rather than an “instance,” <code>void</code> means that nothing will be returned from the method to another (higher level) method, and <code>main</code> which is the name of this particular method.</p>\n<p>Each method has a signature, which is the combination of the data type, the name, and the number of arguments the method takes. In <code>public static void main</code> the method does not have a specified data type and instead uses <code>void</code> to declare that no data is returned. In a method named <code>public static double ave(double val, double val)</code> the data type is “double” (0.0), the name is “ave” (average) and the method takes 2 arguments. Each method <strong>must</strong> have a unique signature.</p>\n<p><code>getName()</code> and <code>getManufacturerName()</code> are two “Getter” methods we have used here. Notice, unlike JavaScript, we <strong>have</strong> to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use <code>void</code> return type.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> String manufacturersName<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        name <span class="token operator">=</span> <span class="token string">"Tesla"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> String <span class="token function">getManufacurername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> manufacturersName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Parameters can be passed into methods. Parameters are declared just after the name of the method, inside brackets.\nSyntax for parameter declaration is <a href="">Data Type</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeName</span><span class="token punctuation">(</span>String newName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        name <span class="token operator">=</span> newName<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.</p>',fields:{slug:"/java/methods/"},frontmatter:{title:"Methods"}}},pathContext:{slug:"/java/methods/"}}}});
//# sourceMappingURL=path---java-methods-ee161a081f63c1ff71e4.js.map