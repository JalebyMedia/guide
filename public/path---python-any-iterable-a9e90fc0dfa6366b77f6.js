webpackJsonp([0x2bcdb8a072447e00],{"./node_modules/json-loader/index.js!./.cache/json/python-any-iterable.json":function(e,n){e.exports={data:{markdownRemark:{html:"<p><code>any()</code> is a built-in function in Python 3, to check if any of the items of an <a href='https://docs.python.org/3/glossary.html#term-iterable' target='_blank' rel='nofollow'><em>iterable</em></a> is <code>True</code>. It takes one argument, <code>iterable</code>.</p>\n<h2>Argument</h2>\n<h3>iterable</h3>\n<p>The <code>iterable</code> argument is the collection whose entries are to be checked. It can typically be a <code>list</code>, <code>str</code>, <code>dict</code>, <code>tuple</code> etc., even a <code>file object</code>.</p>\n<h2>Return Value</h2>\n<p>The return value would be a boolean. If and only if <strong>all</strong> entries of iterable are <code>False</code>, or the <code>iterable</code> is empty; it returns <code>False</code>. This function essentially performs a Boolean <code>OR</code> operation over all elements.</p>\n<p>If even one of them is <code>True</code>, it would return <code>True</code>.</p>\n<p>The <code>any()</code> operation is equivalent to (internally, may not be implemented exactly like this)</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>def any(iterable):\n    for element in iterable:\n        if element:\n            return True\n    return False</code></pre>\n      </div>\n<h2>Code Sample</h2>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>print(any([])) #=> False\nprint(any({})) #=> False\nprint(any([6, 7])) #=> True\nprint(any([6, 7, None])) #=> True\nprint(any([0, 6, 7])) #=> True\nprint(any([9, 8, [1, 2]])) #=> True</code></pre>\n      </div>\n<p><img src=\"//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2\" title=\":rocket:\" alt=\":rocket:\" class=\"forum-image\"> <a href='https://repl.it/CL9c/0' target='_blank' rel='nofollow'>Run Code</a></p>\n<p><a href='https://docs.python.org/3/library/functions.html#any' target='_blank' rel='nofollow'>Official Docs</a></p>",fields:{slug:"/python/any-iterable/"},frontmatter:{title:"Python Any Iterable"}}},pathContext:{slug:"/python/any-iterable/"}}}});
//# sourceMappingURL=path---python-any-iterable-a9e90fc0dfa6366b77f6.js.map