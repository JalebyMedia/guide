webpackJsonp([0x3dab5117a382c80],{"./node_modules/json-loader/index.js!./.cache/json/certificates-caesars-cipher.json":function(n,e){n.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" title=":triangular_flag_on_post:" alt=":triangular_flag_on_post:" class="forum-image"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" title=":busts_in_silhouette:" alt=":busts_in_silhouette:" class="forum-image"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" title=":pencil:" alt=":pencil:" class="forum-image"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" title=":checkered_flag:" alt=":checkered_flag:" class="forum-image"> Problem Explanation:</h3>\n<ul>\n<li>You need to write a function, which will take a string encoded with <em>Caesar cipher</em> as a parameter and decode it.</li>\n<li>The one used here is ROT13 where the value of the letter is shifted by 13 places. e.g. ‘A’ <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3" title=":left_right_arrow:" alt=":left_right_arrow:" class="forum-image"> ‘N’, ‘T’ <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3" title=":left_right_arrow:" alt=":left_right_arrow:" class="forum-image"> ‘G’.</li>\n<li>You have to shift it back 13 positions, such that ‘N’ <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3" title=":left_right_arrow:" alt=":left_right_arrow:" class="forum-image"> ‘A’.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933\' target=\'_blank\' rel=\'nofollow\'>String.prototype.charCodeAt</a></li>\n<li><a>String.fromCharCode</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 1</h2>\n<p>Use <em>String.charCodeAt()</em> to convert the English character to ASCII.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 2</h2>\n<p>Use <em>String.fromCharCode()</em> to convert ASCII to English character.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" title=":speech_balloon:" alt=":speech_balloon:" class="forum-image"> Hint: 3</h2>\n<p>Leave anything that doesn’t come between A-Z as it is.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="warning sign"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" title=":beginner:" alt=":beginner:" class="forum-image"> Basic Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">rot13</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// Split str into a character array</span>\n      <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n      <span class="token comment" spellcheck="true">// Iterate over each character in the array</span>\n        <span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment" spellcheck="true">// Convert char to a character code</span>\n          x <span class="token operator">=</span> char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment" spellcheck="true">// Checks if character lies between A-Z</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">65</span> <span class="token operator">||</span> x <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// Return un-converted character</span>\n          <span class="token punctuation">}</span>\n          <span class="token comment" spellcheck="true">//N = ASCII 78, if the character code is less than 78, shift forward 13 places</span>\n          <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">78</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          <span class="token comment" spellcheck="true">// Otherwise shift the character 13 places backward</span>\n          <span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// Rejoin the array into a string</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/38\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>A string variable <code>nstr</code> is declared and initialized to store the decoded string.</li>\n<li>The for loop is used to loop through each character of the input string.</li>\n<li>If the character is not uppercase English alphabets(i.e. its ascii doesn’t lie between 65 and 91 ), we’ll leave it as it is and <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue\' target=\'_blank\' rel=\'nofollow\'>continue</a> with next iteration.</li>\n<li>If it’s the uppercase English alphabet, we’ll subtract 13 from it’s ascii code.</li>\n<li>If the ascii code is less than 78, it’ll get out of range when subtracted by 13 so we’ll add 26 (number of letters in English alphabets) to it so that after A it’ll go back to Z. e.g. M(77) <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3" title=":left_right_arrow:" alt=":left_right_arrow:" class="forum-image"> 77-13 = 64(Not an English alphabet) +26 = 90 <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3" title=":left_right_arrow:" alt=":left_right_arrow:" class="forum-image"> Z(90).</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294\' target=\'_blank\' rel=\'nofollow\'>Array.prototype.map</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944\' target=\'_blank\' rel=\'nofollow\'>String.prototype.split</a></li>\n<li><a href=\'http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292\' target=\'_blank\' rel=\'nofollow\'>Array.prototype.join</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" title=":sunflower:" alt=":sunflower:" class="forum-image"> Intermediate Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token comment" spellcheck="true">// Solution with Regular expression and Array of ASCII character codes</span>\n    <span class="token keyword">function</span> <span class="token function">rot13</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> rotCharArray <span class="token operator">=</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply\'</span> target<span class="token operator">=</span><span class="token string">\'_blank\'</span> rel<span class="token operator">=</span><span class="token string">\'nofollow\'</span><span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">var</span> regEx <span class="token operator">=</span> <span class="token regex">/[A-Z]/</span> <span class="token punctuation">;</span>\n      str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token keyword">in</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>regEx<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment" spellcheck="true">// A more general approach</span>\n          <span class="token comment" spellcheck="true">// possible because of modular arithmetic</span>\n          <span class="token comment" spellcheck="true">// and cyclic nature of rot13 transform</span>\n          rotCharArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">65</span> <span class="token operator">+</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span> <span class="token operator">+</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          rotCharArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      str <span class="token operator">=</span> String<span class="token punctuation">.</span>fromCharCode<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>String<span class="token punctuation">,</span> rotCharArray<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> str<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// Change the inputs below to test</span>\n    <span class="token function">rot13</span><span class="token punctuation">(</span><span class="token string">"LBH QVQ VG!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Code Explanation:</h3>\n<ul>\n<li>An empty array is created in a variable called <code>rotCharArray</code> to store the character codes.</li>\n<li>The <code>regEx</code> variable stores a regular expression for all uppercase letters from A to Z.</li>\n<li>We split <code>str</code> into a character array and then use a for loop to loop through each character in the array.</li>\n<li>Using an if statement, we test to see if the string only contains uppercase letters from A to Z.</li>\n<li>If it returns true, we use the <code>charCodeAt()</code> function and rot13 transformation to return the correct value, otherwise we return the initial value.</li>\n<li>We then return the string with the character codes from the <code>rotCharArray</code> variable.</li>\n</ul>\n<h3>Algorithm Explanation:</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ALPHA\tKEY\tBASE \t \t \t ROTATED\tROT13\n-------------------------------------------------------------\n[A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]\n[B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O]\n[C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P]\n[D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q]\n[E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R]\n[F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S]\n[G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T]\n[H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U]\n[I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V]\n[J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W]\n[K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X]\n[L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y]\n[M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]\n[N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]\n[O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]\n[P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C]\n[Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D]\n[R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E]\n[S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F]\n[T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G]\n[U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H]\n[V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I]\n[W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J]\n[X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K]\n[Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L]\n[Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]</code></pre>\n      </div>\n<h4>Relevant Links</h4>\n<ul>\n<li>[Function.apply</a></li>\n<li><a href=\'https://forum.freecodecamp.com/t/regular-expressions-resources/15931\' target=\'_blank\' rel=\'nofollow\'>Regex</a></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test\' target=\'_blank\' rel=\'nofollow\'>Regex.test</a></li>\n</ul>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" title=":rocket:" alt=":rocket:" class="forum-image"> <a href=\'https://repl.it/CLjU/39\' target=\'_blank\' rel=\'nofollow\'>Run Code</a></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" title=":rotating_light:" alt=":rotating_light:" class="forum-image"> Advanced Code Solution:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>function rot13(str) { // LBH QVQ VG!\n  return str.replace(/<a href=\'http://unicode-table.com/en/alphabets/english/\' target=\'_blank\' rel=\'nofollow\'>A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));\n}</code></pre>\n      </div>\n<h3>Algorithm Explanation:</h3>\n<p>Understanding modulo operator (<em>sometimes called modulus operator</em>) symbolically represented as <code>%</code> in JavaScript is key to understanding the algorithm.<br>\nThis is an interesting operator which shows up in various places of Engineering e.g. in cryptography.</p>\n<p>Basically, operated on a number, it divides the number by the given divisor and gives the remainder of the division.<br>\nFor Example,</p>\n<ul>\n<li>\n<p><code>0 % 5 = 0</code> because <code>0 / 5 = 0</code> and the remainder is <code>0</code>.</p>\n</li>\n<li>\n<p><code>2 % 5 = 2</code> because <code>2 / 5 = 0</code> and the remainder is <code>2</code></p>\n</li>\n<li>\n<p><code>4 % 5 = 4</code> because <code>4 / 5 = 0</code> and the remainder is <code>4</code>  </p>\n</li>\n<li>\n<p><code>5 % 5 = 0</code> because <code>5 / 5 = 1</code> and the remainder is <code>0</code></p>\n</li>\n<li>\n<p><code>7 % 5 = 2</code> because <code>7 / 5 = 1</code> and the remainder is <code>2</code></p>\n</li>\n<li>\n<p><code>9 % 5 = 4</code> because <code>9 / 5 = 1</code> and the remainder is <code>4</code>  </p>\n</li>\n<li>\n<p><code>10 % 5 = 0</code> because <code>10 / 5 = 2</code> and the remainder is <code>0</code></p>\n</li>\n</ul>\n<p>But you must have noticed a pattern here.<br>\nAs you might have noticed, the amazing modulo operator wraps over the LHS value when it just reaches multiples of the RHS value.<br>\ne.g. in our case, when <code>LHS = 5</code>, it wrapped over to <code>0</code><br>\nOR<br>\nwhen <code>LHS = 10</code>, it wrapped over to <code>0</code> again.</p>\n<p>Hence, we see the following pattern emerging  </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code> 0 ⇔ 0\n 1 ⇔ 1\n 2 ⇔ 2\n 3 ⇔ 3\n 4 ⇔ 4\n 5 ⇔ 0\n 6 ⇔ 1\n 7 ⇔ 2\n 8 ⇔ 3\n 9 ⇔ 4\n10 ⇔ 0</code></pre>\n      </div>\n<p>Hence, we conclude that using modulo operator, one can map a range of values to a range between [<code>0</code> to <code>DIVISOR - 1</code>]. In our case, we mapped [<code>5 - 9</code>] between [<code>0 - 4</code>] or mapped [<code>6 - 10</code>] between [<code>0 - 4</code>].</p>\n<p>Did you understand till this?</p>\n<p>Now let us consider mapping a range of <code>26</code> numbers i.e. between [<code>65 - 90</code>] (<em>which represents uppercase [<strong>English alphabets</strong></a> in &#x3C;a href=’<a href="http://unicode-table.com/en/alphabets/">http://unicode-table.com/en/alphabets/</a>’ target=’</em>blank’ rel=‘nofollow’>Unicode character set</a><em>) to a range of numbers between &#x3C;a href=’<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global</a></em>Objects/String/replace’ target=’_blank’ rel=‘nofollow’><code>0 - 25</code>].</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[A]  65 % 26 ⇔ 13\n[B]  66 % 26 ⇔ 14\n[C]  67 % 26 ⇔ 15\n[D]  68 % 26 ⇔ 16\n[E]  69 % 26 ⇔ 17\n[F]  70 % 26 ⇔ 18\n[G]  71 % 26 ⇔ 19\n[H]  72 % 26 ⇔ 20\n[I]  73 % 26 ⇔ 21\n[J]  74 % 26 ⇔ 22\n[K]  75 % 26 ⇔ 23\n[L]  76 % 26 ⇔ 24\n[M]  77 % 26 ⇔ 25\n[N]  78 % 26 ⇔  0\n[O]  79 % 26 ⇔  1\n[P]  80 % 26 ⇔  2\n[Q]  81 % 26 ⇔  3\n[R]  82 % 26 ⇔  4\n[S]  83 % 26 ⇔  5\n[T]  84 % 26 ⇔  6\n[U]  85 % 26 ⇔  7\n[V]  86 % 26 ⇔  8\n[W]  87 % 26 ⇔  9\n[X]  88 % 26 ⇔ 10\n[Y]  89 % 26 ⇔ 11\n[Z]  90 % 26 ⇔ 12</code></pre>\n      </div>\n<p>As you can notice, each number in the range of [<code>65 - 90</code>] maps to a unique number between [<code>0 - 25</code>].<br>\nYou might have also noticed that each given number (e.g. <code>65</code>) maps to another number (e.g. <code>13</code>) which can be used as an offset value (i.e. <code>65 + OFFSET</code>) to get the ROT13 of the given number.</p>\n<p>E.g. <code>65</code> maps to <code>13</code> which can be taken as an offset value and added to <code>65</code> to give <code>78</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>[A]  65 % 26 ⇔ 13 + 65 =  78 [N]\n[B]  66 % 26 ⇔ 14 + 65 =  79 [O]\n[C]  67 % 26 ⇔ 15 + 65 =  80 [P]\n[D]  68 % 26 ⇔ 16 + 65 =  81 [Q]\n[E]  69 % 26 ⇔ 17 + 65 =  82 [R]\n[F]  70 % 26 ⇔ 18 + 65 =  83 [S]\n[G]  71 % 26 ⇔ 19 + 65 =  84 [T]\n[H]  72 % 26 ⇔ 20 + 65 =  85 [U]\n[I]  73 % 26 ⇔ 21 + 65 =  86 [V]\n[J]  74 % 26 ⇔ 22 + 65 =  87 [W]\n[K]  75 % 26 ⇔ 23 + 65 =  88 [X]\n[L]  76 % 26 ⇔ 24 + 65 =  89 [Y]\n[M]  77 % 26 ⇔ 25 + 65 =  90 [Z]\n[N]  78 % 26 ⇔  0 + 65 =  65 [A]\n[O]  79 % 26 ⇔  1 + 65 =  66 [B]\n[P]  80 % 26 ⇔  2 + 65 =  67 [C]\n[Q]  81 % 26 ⇔  3 + 65 =  68 [D]\n[R]  82 % 26 ⇔  4 + 65 =  69 [E]\n[S]  83 % 26 ⇔  5 + 65 =  70 [F]\n[T]  84 % 26 ⇔  6 + 65 =  71 [G]\n[U]  85 % 26 ⇔  7 + 65 =  72 [H]\n[V]  86 % 26 ⇔  8 + 65 =  73 [I]\n[W]  87 % 26 ⇔  9 + 65 =  74 [J]\n[X]  88 % 26 ⇔ 10 + 65 =  75 [K]\n[Y]  89 % 26 ⇔ 11 + 65 =  76 [L]\n[Z]  90 % 26 ⇔ 12 + 65 =  77 [M]</code></pre>\n      </div>\n<h3>Code Explanation:</h3>\n<ul>\n<li><code>String.prototype.replace</code> [function</a> lets you transform a <code>String</code> based on some pattern match (defined by a regular expression), and the <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter\' target=\'_blank\' rel=\'nofollow\'>transformation function</a> (which is applied to each of the pattern matches).</li>\n<li><a href=\'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions\' target=\'_blank\' rel=\'nofollow\'>Arrow function</a> syntax is used to write the function parameter to <code>replace()</code>.</li>\n<li><code>L</code> represents a single unit, from every pattern match with <code>/&#x3C;a href=\'http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942\' target=\'_blank\' rel=\'nofollow\'>A-Z]/g</code> - which is every uppercase letter in the alphabet, from <code>A</code> to <code>Z</code>, present in the string.</li>\n<li>The arrow function applies the <code>rot13</code> transform on every uppercase letter from English alphabet present in the given string.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">String.prototype.replace()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" title=":clipboard:" alt=":clipboard:" class="forum-image"> NOTE TO CONTRIBUTORS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" title=":traffic_light:" alt=":traffic_light:" class="forum-image"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" title=":warning:" alt=":warning:" class="forum-image"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" title=":point_right:" alt=":point_right:" class="forum-image"> <a href=\'http://forum.freecodecamp.com/t/algorithm-article-template/14272\' target=\'_blank\' rel=\'nofollow\'><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',fields:{slug:"/certificates/caesars-cipher/"},frontmatter:{title:"Caesars Cipher"}}},pathContext:{slug:"/certificates/caesars-cipher/"}}}});
//# sourceMappingURL=path---certificates-caesars-cipher-50855c133b05bafd64ea.js.map