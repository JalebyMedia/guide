webpackJsonp([0xc7dea22abda76000],{"./node_modules/json-loader/index.js!./.cache/json/certificates-sum-all-numbers-in-a-range.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, <a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:"\' target=\'_blank\' rel=\'nofollow\'>3,1] will be the same as <code>1+2+3</code> and not just <code>3+1</code></p>\n<h2>![:speech_balloon:</a> Hint: 1</h2>\n<p>Use <code>Math.max()</code> to find the maximum value of two numbers.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>Use <code>Math.min()</code> to find the minimum value of two numbers.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>Remember to that you must add all the numbers in between so this would require a way to get those numbers.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function sumAll(arr) {\n    var max = Math.max(arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>0], arr[1]);\n    var min = Math.min(arr[0], arr[1]);\n    var temp = 0;\n    for (var i=min; i <= max; i++){\n        temp += i;\n    }\n  return(temp);\n}\n\nsumAll([1, 4]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLm6/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>First create a variable to store the max number between two.</li>\n<li>The same as before for the Smallest number.</li>\n<li>We create a temporary variable to add the numbers.</li>\n</ul>\n<p>Since the numbers might not be always in order, using <code>max()</code> and <code>min()</code> will help organize.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-math-max/14682\' target=\'_blank\' rel=\'nofollow\'>Math.max()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-math-min/14684\' target=\'_blank\' rel=\'nofollow\'>Math.min()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666\' target=\'_blank\' rel=\'nofollow\'>For Loops</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function sumAll(arr) {\n  // Buckle up everything to one!\n\n  // Using ES6 arrow function (one-liner)\n  var sortedArr = arr.sort((a,b) => a-b);\n  var firstNum = arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>0];\n  var lastNum = arr[1];\n  // Using Arithmetic Progression summing formula\n\n  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;\n  return sum;\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLm7/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Firstly, we create a variable called <code>sortedArr</code> which sorts it from the lowest to the highest value.</li>\n<li><code>firstNum</code> is equal to the first number and <code>lastNum</code> is equal to the second number.</li>\n<li>Next, using the Arithmetic Progression summing formula we let <code>sum</code> equal <code>(lastNum - firstNum + 1) * (firstNum + lastNum) / 2</code>.</li>\n<li>Finally, we return <code>sum</code>.</li>\n</ul>\n<p>The line <code>var sortedArr = arr.sort((a,b) => a-b);</code> is probably what will have you more confused. This would be the same as creating a function that returns <code>a-b</code> for the <code>sort()</code> which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306\' target=\'_blank\' rel=\'nofollow\'>Array.sort()</a></li>\n<li><a href=\'https://en.wikipedia.org/wiki/Arithmetic_progression#Sum\' target=\'_blank\' rel=\'nofollow\'>Arithmetic Progression summing formula</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\' target=\'_blank\' rel=\'nofollow\'>ES6 arrow function</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function sumAll(arr) {\n    var sum = 0;\n    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){\n        sum += i;\n    }\n  return sum;\n}\n\nsumAll(<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>1, 4]);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLm8/0\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Creating a variable sum to store the sum of the elements.</li>\n<li>Starting iteration of the loop from min element of given array and stopping when it reaches the max element.</li>\n<li>Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator\' target=\'_blank\' rel=\'nofollow\'>Spread Operator</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max\' target=\'_blank\' rel=\'nofollow\'>Using Spread Operator in Math.max()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/sum-all-numbers-in-a-range/"},frontmatter:{title:"Sum All Numbers in a Range"}}},pathContext:{slug:"/certificates/sum-all-numbers-in-a-range/"}}}});
//# sourceMappingURL=path---certificates-sum-all-numbers-in-a-range-d13a5112a52dfd5c1ea0.js.map