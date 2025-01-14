import{_ as n,E as l,c as p,m as s,a as i,J as a,a2 as t,o as h}from"./chunks/framework.CmNvrHOf.js";const T=JSON.parse('{"title":"Resolve API","description":"","frontmatter":{},"headers":[],"relativePath":"core/reference/resolve.md","filePath":"core/reference/resolve.md"}'),o={name:"core/reference/resolve.md"},r=s("h1",{id:"resolve-api",tabindex:"-1"},[i("Resolve API "),s("a",{class:"header-anchor",href:"#resolve-api","aria-label":'Permalink to "Resolve API {#resolve-api}"'},"​")],-1),k={id:"resolve",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#resolve","aria-label":'Permalink to "resolve <Badge type="info" text="function" /> {#resolve}"'},"​",-1),d=t(`<p>Resolves a message string with placeholders, replacing them with values from the context. Escapes and unescapes parts of the message as needed.</p><ul><li><p><strong>Signature</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">V</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  callbackFn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResolveCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  initialValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResolveOptions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> I</span></span></code></pre></div></li><li><p><strong>Parameters</strong></p><ul><li><code>message</code>: The message string with placeholders.</li><li><code>context</code>: The context object containing values to replace placeholders in the message. Default is an empty object.</li><li><code>callbackFn</code>: The callback function called for each part of the resolved message.</li><li><code>initialValue</code>: The initial value used in the callback function.</li><li><code>options</code>: Additional options for resolving the message, such as the locale.</li></ul></li><li><p><strong>Returns</strong></p><p>The resolved message after replacing placeholders with values from the context.</p></li><li><p><strong>Details</strong></p><p>This function takes a message string with placeholders and resolves it by:</p><ul><li>Escaping special characters to prevent them from being interpreted as part of the message.</li><li>Iterating through each segment of the message: <ul><li>Unescaping plain text segments.</li><li>Identifying named placeholders (<code>{key}</code>) and extracting the key name.</li><li>Looking up the value for the key in the context object.</li><li>If the value is found: <ul><li>Applying any necessary inflections (e.g., singular/plural) based on the value and locale.</li><li>Formatting the value according to the locale.</li><li>Replacing the placeholder with the formatted and inflected value.</li></ul></li><li>If the value is not found: <ul><li>Leaving the placeholder intact.</li></ul></li></ul></li><li>Unescaping any remaining escaped characters.</li><li>Calling the <code>callbackFn</code> for each segment (escaped text, placeholder, or resolved value) allowing for custom processing.</li></ul><p>The resolved message is returned for further use.</p></li><li><p><strong>Examples</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResolveCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.part</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resolvedMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello, {name}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Batou&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, cb, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resolvedMessage);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: &quot;Hello, Batou!&quot;</span></span></code></pre></div></li><li><p><strong>See Also</strong></p><ul><li><a href="https://9aia.github.io/psitta/core/reference/resolve.html#resolveToString" target="_blank" rel="noreferrer">resolveToString</a></li><li><a href="https://9aia.github.io/psitta/core/reference/resolve.html#resolveToSegments" target="_blank" rel="noreferrer">resolveToSegments</a></li></ul></li></ul>`,2),g={id:"resolveToSegments",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#resolveToSegments","aria-label":'Permalink to "resolveToSegments <Badge type="info" text="function" /> {#resolveToSegments}"'},"​",-1),y=t(`<p>Resolves a message template into an array of segments representing its structure.</p><ul><li><p><strong>Signature</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolveToSegments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResolveOptions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Segment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Placeholders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;</span></span></code></pre></div></li><li><p><strong>Parameters</strong></p><ul><li><code>message</code>: The message template string containing placeholders.</li><li><code>context</code>: Optional object containing values to replace placeholders. Defaults to <code>{}</code>.</li><li><code>options</code>: Optional configuration options for formatting.</li></ul></li><li><p><strong>Returns</strong></p><p>An array of segments representing the message structure (text or placeholder information).</p></li><li><p><strong>Details</strong></p><p>This function utilizes the <code>resolve</code> function to analyze the message template. It uses a custom callback function to create an array of <code>Segment</code> objects. Each segment represents a portion of the message and its properties:</p><ul><li><code>type</code>: Indicates whether the segment is plain text (<code>&#39;text&#39;</code>) or a placeholder (<code>&#39;placeholder&#39;</code>).</li><li><code>part</code>: The actual content of the segment (text or placeholder string).</li><li><code>key</code>: If a placeholder, the key extracted from the curly braces (<code>{key}</code>).</li><li><code>context</code>: The provided context object (passed along for potential use).</li><li><code>inflect</code> (optional): A function for dynamic inflection based on value and locale (if the <code>resolve</code> function provides this information).</li></ul><p>This allows for more granular manipulation of the message structure after processing.</p></li><li><p><strong>Examples</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> segments</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolveToSegments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello, {name}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Batou&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(segments);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   { type: &#39;text&#39;, part: &#39;Hello, &#39;, key: undefined, context: { name: &#39;Batou&#39; }, inflect: [Function: DUMMY_INFLECT] },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   { type: &#39;placeholder&#39;, part: &#39;{name}&#39;, key: &#39;name&#39;, context: { name: &#39;Batou&#39; }, inflect: [Function: DUMMY_INFLECT] }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   { type: &#39;text&#39;, part: &#39;!&#39;, key: undefined, context: { name: &#39;Batou&#39; }, inflect: [Function: DUMMY_INFLECT] }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ]</span></span></code></pre></div></li></ul>`,2),u={id:"resolveToString",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#resolveToString","aria-label":'Permalink to "resolveToString <Badge type="info" text="function" /> {#resolveToString}"'},"​",-1),m=t(`<p>Resolves a message template into a single string with resolved placeholders.</p><ul><li><p><strong>Signature</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolveToString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ResolveOptions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span></code></pre></div></li><li><p><strong>Parameters</strong></p><ul><li><code>text</code>: The message template string containing placeholders.</li><li><code>context</code>: Optional object containing values to replace placeholders. Defaults to <code>{}</code>.</li><li><code>options</code>: Optional configuration options for resolving.</li></ul></li><li><p><strong>Returns</strong></p><p>The final resolved message string.</p></li><li><p><strong>Details</strong></p><p>This function is a convenience wrapper around <code>resolve</code>. It takes a message template and context, and resolves the message into a single string by concatenating the processed parts. It uses a callback function that simply combines the previous accumulated string (<code>prev</code>) with the current part (<code>part</code>). The <code>resolve</code> function handles the logic of processing text and placeholder parts based on the provided context and options.</p></li><li><p><strong>Examples</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resolvedMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolveToString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello, {name}!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Batou&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resolvedMessage);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: &quot;Hello, Batou!&quot;</span></span></code></pre></div></li></ul>`,2);function v(f,C,_,A,B,b){const e=l("Badge");return h(),p("div",null,[r,s("h2",k,[i("resolve "),a(e,{type:"info",text:"function"}),i(),c]),d,s("h2",g,[i("resolveToSegments "),a(e,{type:"info",text:"function"}),i(),E]),y,s("h2",u,[i("resolveToString "),a(e,{type:"info",text:"function"}),i(),F]),m])}const x=n(o,[["render",v]]);export{T as __pageData,x as default};
