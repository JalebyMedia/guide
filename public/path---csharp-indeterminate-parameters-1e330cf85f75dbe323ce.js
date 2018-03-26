webpackJsonp([0xf1a8b32a753f0000],{"./node_modules/json-loader/index.js!./.cache/json/csharp-indeterminate-parameters.json":function(e,a){e.exports={data:{markdownRemark:{html:'<h1>Indeterminate parameters</h1>\n<p>Let’s imagine we need to write a method where the number of parameters are variable. How can we do that? Well, C# (and other languages) has an easy way to do so; by using the <code>params</code> keyword on a method’s parameter we can call that method with a variable number of parameters. </p>\n<h2>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>public static void Main (string[] args) {\n\t// Call PrintParams with 3 parameters\n\tPrintParams(1, 2, 3);\n\t\n\t// Call PrintParams with 1 parameter\n\tPrintParams(4);\n}\n\npublic static void PrintParams(params int[] values)\n{\n\t// Iterate through parameters\n\tfor (int i = 0; i < values.Length; i++)\n\t{\n\t\tConsole.WriteLine("Parameter {0} is {1}", i, values[i]);\n\t}\n}</code></pre>\n      </div>\n<h2>Output:</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>> Parameter 0 is 1\n> Parameter 1 is 2\n> Parameter 2 is 3\n> Parameter 0 is 4</code></pre>\n      </div>',fields:{slug:"/csharp/indeterminate-parameters/"},frontmatter:{title:"Indeterminate parameters"}}},pathContext:{slug:"/csharp/indeterminate-parameters/"}}}});
//# sourceMappingURL=path---csharp-indeterminate-parameters-1e330cf85f75dbe323ce.js.map