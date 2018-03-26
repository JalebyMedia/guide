webpackJsonp([0xfbd13c76a3d3d000],{"./node_modules/json-loader/index.js!./.cache/json/react-native-functional-vs-class-components.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>React Native - Functional vs Class Components</h2>\n<p>In React Native, there are two main types of components that make up an application - <em>functional components</em> and <em>class components</em>. These are structured the same as they would be in a regular React app for the web.</p>\n<h3>Class Components</h3>\n<p>Class components are JavaScript ES2015 classes that extend a base class from React called <code>Component</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>Text<span class="token operator">></span>Hello World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This gives the class <code>App</code> access to the React lifecycle methods like <code>render</code> as well state/props functionality from the parent???</p>\n<h3>Functional Components</h3>\n<p>Functional components are simpler; they don’t manage their own state or have access to the lifecycle methods provided by React Native. They are literally plain old JavaScript functions!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> PageOne <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Page One<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Summary</h3>\n<p>Class components are used as container components to handle state management and wrap child components. Functional components generally are just used for display purposes - these components call functions from parent components to handle user interactions or state updates.</p>',fields:{slug:"/react-native/functional-vs-class-components/"},frontmatter:{title:"Functional vs Class Components"}}},pathContext:{slug:"/react-native/functional-vs-class-components/"}}}});
//# sourceMappingURL=path---react-native-functional-vs-class-components-d7a8142b9d09155b2c48.js.map