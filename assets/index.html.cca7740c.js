import{c as s}from"./app.b0bc7c80.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="type-challenges" tabindex="-1"><a class="header-anchor" href="#type-challenges" aria-hidden="true">#</a> Type-Challenges</h1><p>\u5B66\u4E60\u4E0B\u9762\u5927\u4F6C\u7684\u6587\u7AE0</p><p>https://github.com/type-challenges/type-challenges https://wangtunan.github.io/blog/typescript/challenge.html#%E4%BB%8B%E7%BB%8D</p><h2 id="\u7B80\u5355" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355" aria-hidden="true">#</a> \u7B80\u5355</h2><h3 id="pick" tabindex="-1"><a class="header-anchor" href="#pick" aria-hidden="true">#</a> Pick</h3><p>Pick\u8868\u793A\u4ECE\u4E00\u4E2A\u7C7B\u578B\u4E2D\u9009\u53D6\u6307\u5B9A\u7684\u51E0\u4E2A\u5B57\u6BB5\u7EC4\u5408\u6210\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">PickResult</span> <span class="token operator">=</span> MyPick<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;address&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// expected: { name: string; address: string; }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">type</span> <span class="token class-name">MyPick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> Readonly</h3><p>\u8BE5 Readonly \u4F1A\u63A5\u6536\u4E00\u4E2A \u6CDB\u578B\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5B8C\u5168\u4E00\u6837\u7684\u7C7B\u578B\uFF0C\u53EA\u662F\u6240\u6709\u5C5E\u6027\u90FD\u4F1A\u88AB readonly \u6240\u4FEE\u9970</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ReadonlyResult</span> <span class="token operator">=</span> MyReadonly<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span>
<span class="token comment">// expected { readonly title: string; readonly description: string; }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-1" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h3 id="tuple-to-object" tabindex="-1"><a class="header-anchor" href="#tuple-to-object" aria-hidden="true">#</a> Tuple to Object</h3><p>\u4F20\u5165\u4E00\u4E2A\u5143\u7EC4\u7C7B\u578B\uFF0C\u5C06\u8FD9\u4E2A\u5143\u7EC4\u7C7B\u578B\u8F6C\u6362\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u7C7B\u578B\u7684\u952E/\u503C\u90FD\u662F\u4ECE\u5143\u7EC4\u4E2D\u904D\u5386\u51FA\u6765\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> tuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;tesla&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model 3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model Y&#39;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token keyword">type</span> <span class="token class-name">result</span> <span class="token operator">=</span> TupleToObject<span class="token operator">&lt;</span><span class="token keyword">typeof</span> tuple<span class="token operator">&gt;</span> 
<span class="token comment">// expected { tesla: &#39;tesla&#39;, &#39;model 3&#39;: &#39;model 3&#39;, &#39;model X&#39;: &#39;model X&#39;, &#39;model Y&#39;: &#39;model Y&#39;}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-2" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TupleToObject<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">P</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h3 id="first-of-array" tabindex="-1"><a class="header-anchor" href="#first-of-array" aria-hidden="true">#</a> First of Array</h3><p>\u5B9E\u73B0\u4E00\u4E2A\u901A\u7528<code>First&lt;T&gt;</code>\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4T\u5E76\u8FD4\u56DE\u5B83\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">arr1</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">arr2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">head1</span> <span class="token operator">=</span> First<span class="token operator">&lt;</span>arr1<span class="token operator">&gt;</span> <span class="token comment">// expected to be &#39;a&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">head2</span> <span class="token operator">=</span> First<span class="token operator">&lt;</span>arr2<span class="token operator">&gt;</span> <span class="token comment">// expected to be 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-3" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">First<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="length-of-tuple" tabindex="-1"><a class="header-anchor" href="#length-of-tuple" aria-hidden="true">#</a> Length of Tuple</h3><p>\u521B\u5EFA\u4E00\u4E2A\u901A\u7528\u7684Length\uFF0C\u63A5\u53D7\u4E00\u4E2Areadonly\u7684\u6570\u7EC4\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u6570\u7EC4\u7684\u957F\u5EA6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">tesla</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;tesla&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model 3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;model Y&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">spaceX</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;FALCON 9&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FALCON HEAVY&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DRAGON&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STARSHIP&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;HUMAN SPACEFLIGHT&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">teslaLength</span> <span class="token operator">=</span> Length<span class="token operator">&lt;</span>tesla<span class="token operator">&gt;</span> <span class="token comment">// expected 4</span>
<span class="token keyword">type</span> <span class="token class-name">spaceXLength</span> <span class="token operator">=</span> Length<span class="token operator">&lt;</span>spaceX<span class="token operator">&gt;</span> <span class="token comment">// expected 5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-4" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Length<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> Exclude</h3><p>\u5B9E\u73B0\u5185\u7F6E\u7684<code>Exclude &lt;T\uFF0CU&gt;</code>\u7C7B\u578B(\u4ECE\u8054\u5408\u7C7B\u578BT\u4E2D\u6392\u9664U\u7684\u7C7B\u578B\u6210\u5458\uFF0C\u6765\u6784\u9020\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u3002)</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ExcludeResult</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&#39;js&#39;</span><span class="token operator">|</span><span class="token string">&#39;ts&#39;</span><span class="token operator">|</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;js&#39;</span><span class="token operator">|</span><span class="token string">&#39;jave&#39;</span><span class="token operator">&gt;</span>
<span class="token comment">// expected &#39;ts</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-5" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span>  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="awaited" tabindex="-1"><a class="header-anchor" href="#awaited" aria-hidden="true">#</a> Awaited</h3><p>\u5047\u5982\u6211\u4EEC\u6709\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u8FD9\u4E2A Promise \u5BF9\u8C61\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u578B\u3002\u5728 TS \u4E2D\uFF0C\u6211\u4EEC\u7528 Promise \u4E2D\u7684 T \u6765\u63CF\u8FF0\u8FD9\u4E2A Promise \u8FD4\u56DE\u7684\u7C7B\u578B\u3002\u8BF7\u4F60\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u578B\uFF0C\u53EF\u4EE5\u83B7\u53D6\u8FD9\u4E2A\u7C7B\u578B\u3002 \u6BD4\u5982\uFF1A<code>Promise&lt;ExampleType&gt;</code>\uFF0C\u8BF7\u4F60\u8FD4\u56DE ExampleType \u7C7B\u578B\u3002</p><h6 id="\u5B9E\u73B0\u65B9\u5F0F-6" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-6" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyAwaited<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token operator">&gt;</span></span> 
  <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token constant">R</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">?</span> MyAwaited<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token constant">R</span> <span class="token punctuation">)</span>
  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> If</h3><p>\u5B9E\u73B0\u4E00\u4E2A <code>IF</code> \u7C7B\u578B\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u6761\u4EF6\u7C7B\u578B <code>C</code> \uFF0C\u4E00\u4E2A\u5224\u65AD\u4E3A\u771F\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B<code>T</code>\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5224\u65AD\u4E3A\u5047\u65F6\u7684\u8FD4\u56DE\u7C7B\u578B <code>F</code>\u3002 <code>C</code> \u53EA\u80FD\u662F <code>true</code> \u6216\u8005 <code>false</code>, <code>T</code> \u548C <code>F</code> \u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> If<span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token operator">&gt;</span>  <span class="token comment">// expected to be &#39;a&#39;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> If<span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// expected to be &#39;b&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-7" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-7" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">IF</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token punctuation">,</span><span class="token constant">K</span><span class="token operator">&gt;</span></span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token constant">K</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> Concat</h3><p>\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0 JavaScript \u5185\u7F6E\u7684 Array.concat \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7C7B\u578B\u5E94\u8BE5\u6309\u7167\u8F93\u5165\u53C2\u6570\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Concat<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token comment">// expected to be [1, 2]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-8" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-8" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Concat<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token constant">U</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> Includes</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">isPillarMen</span> <span class="token operator">=</span> Includes<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token string">&#39;Kars&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Esidisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wamuu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Santana&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Dio&#39;</span><span class="token operator">&gt;</span> 
<span class="token comment">// expected to be \`false\`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-9" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-9" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Includes<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">T</span></span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span><span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> Push</h3><p>\u5728\u7C7B\u578B\u7CFB\u7EDF\u91CC\u5B9E\u73B0\u901A\u7528\u7684 <code>Array.push</code> \u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Push<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// [1, 2, &#39;3&#39;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-10" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-10" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Push<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="unshift" tabindex="-1"><a class="header-anchor" href="#unshift" aria-hidden="true">#</a> Unshift</h3><p>\u5B9E\u73B0\u7C7B\u578B\u7248\u672C\u7684 <code>Array.unshift</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Result</span> <span class="token operator">=</span> Unshift<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token operator">&gt;</span> <span class="token comment">// [0, 1, 2,]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-11" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-11" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Push<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>\u5B9E\u73B0\u5185\u7F6E\u7684 Parameters \u7C7B\u578B(\u51FD\u6570\u7C7B\u578Btype\u7684\u5F62\u53C2\u4E2D\u4F7F\u7528\u7684\u7C7B\u578B\u6784\u9020\u5143\u7EC4\u7C7B\u578B)</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">//expected []</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">//expected [s: string]</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">//expected [arg: unknown]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h6 id="\u5B9E\u73B0\u65B9\u5F0F-12" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F-12" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h6><details><summary>\u5C55\u5F00</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MyParameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token keyword">infer</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">?</span> <span class="token constant">R</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>`,67);function p(t,o){return e}var r=n(a,[["render",p]]);export{r as default};