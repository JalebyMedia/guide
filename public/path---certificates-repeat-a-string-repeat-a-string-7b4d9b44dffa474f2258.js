webpackJsonp([0x496cdb4a8315e000],{"./node_modules/json-loader/index.js!./.cache/json/certificates-repeat-a-string-repeat-a-string.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<p>The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\' target=\'_blank\' rel=\'nofollow\'>Global String Object</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>You can’t edit strings, you will need to create a variable to store the new string.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>Create a loop to repeat the code as many times as needed.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>Make the variable created store the current value and append the word to it.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function repeatStringNumTimes(str, num) {\n  var accumulatedStr = \'\';\n\n  while (num > 0) {\n    accumulatedStr += str;\n    num--;\n  }\n\n  return accumulatedStr;\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/19\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Create an empty string variable to store the repeated word.</li>\n<li>Use a while loop or for loop to repeat code as many times as needed according to <code>num</code></li>\n<li>Then we just have to add the string to the variable created on step one, and increase or decrease <code>num</code> depending on how you set the loop.</li>\n<li>At the end of the loop, return the variable for the repeated word.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>JS while Loop</a></li>\n<li><a href=\'https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>JS For Loops Explained</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function repeatStringNumTimes(str, num) {\n  if(num < 0)\n    return "";\n  if(num === 1)\n    return str;\n  else\n    return str + repeatStringNumTimes(str, num - 1);\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/21\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>This solution uses recursion.</li>\n<li>We check if <code>num</code> is negative and return an empty string if true.</li>\n<li>Then we check if it’s equal to 1 and in that case we return the string itself.</li>\n<li>If not, we add the string to a call of our function with <code>num</code> being decreased by 1, which will add another <code>str</code> and another.. until eventually <code>num</code> is 1. And return that whole process.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion\' target=\'_blank\' rel=\'nofollow\'>Functions - Recursion</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function repeatStringNumTimes(str, num) {\n  return num > 0 ? str.repeat(num) : \'\';\n}\n\nrepeatStringNumTimes("abc", 3);</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/85\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>This solution takes a declarative approach.</li>\n<li>It is similar to the third solution, except it uses the ternary operator form of the <code>if</code> statement.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'https://forum.freecodecamp.com/t/javascript-ternary-operator/15973\' target=\'_blank\' rel=\'nofollow\'>JS Ternary</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'https://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/repeat-a-string-repeat-a-string/"},frontmatter:{title:"Repeat a String Repeat a String"}}},pathContext:{slug:"/certificates/repeat-a-string-repeat-a-string/"}}}});
//# sourceMappingURL=path---certificates-repeat-a-string-repeat-a-string-7b4d9b44dffa474f2258.js.map