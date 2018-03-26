webpackJsonp([0x9f4df8456b2dc800],{"./node_modules/json-loader/index.js!./.cache/json/certificates-mutations.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<ul>\n<li>Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array..</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936\' target=\'_blank\' rel=\'nofollow\'>String.indexOf()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<ul>\n<li>If everything is lowercase it will be easier to compare.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<ul>\n<li>Our strings might be easier to work with if they were arrays of characters.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<ul>\n<li>A loop might help. Use <code>indexOf()</code> to check if the letter of the second word is on the first.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<p><strong>Procedural</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function mutation(arr) {\n  var test = arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>1].toLowerCase();\n  var target = arr[0].toLowerCase();\n  for (i=0;i<test.length;i++) {\n    if (target.indexOf(test[i]) < 0)\n      return false;\n  }\n  return true;\n }</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/30\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>First we make the two strings in the array lowercase. <code>test</code> will hold what we are looking for in <code>target</code>.<br>\nThen we loop through our test characters and if any of them is not found we <code>return false</code>.</p>\n<p>If they are <em>all</em> found, the loop will finish without returning anything and we get to <code>return true</code>.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948\' target=\'_blank\' rel=\'nofollow\'>String.toLowerCase()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained\' target=\'_blank\' rel=\'nofollow\'>For loops</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<p><strong>Declarative</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function mutation(arr) {\n  return arr<a href=\'https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"\' target=\'_blank\' rel=\'nofollow\'>1].toLowerCase()\n    .split(\'\')\n    .every(function(letter) {\n      return arr[0].toLowerCase()\n        .indexOf(letter) != -1;\n    });\n}</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/31\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>Grab the second string, lowercase and turn it into an array; then make sure <em>every</em> one of its <em>letters</em> is a part of the lowercased first string.</p>\n<p><code>Every</code> will basically give you letter by letter to compare, which we do by using <code>indexOf</code> on the first string. <code>indexOf</code> will give you -1 if the current <code>letter</code> is missing. We check that not to be the case, for if this happens even once <code>every</code> will be false.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944\' target=\'_blank\' rel=\'nofollow\'>Array.split()</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287\' target=\'_blank\' rel=\'nofollow\'>Array.every()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/mutations/"},frontmatter:{title:"Mutations"}}},pathContext:{slug:"/certificates/mutations/"}}}});
//# sourceMappingURL=path---certificates-mutations-c08a5b98249d713e49fa.js.map