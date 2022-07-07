import{c as n}from"./app.b0bc7c80.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="mergeoptions" tabindex="-1"><a class="header-anchor" href="#mergeoptions" aria-hidden="true">#</a> mergeOptions</h1><p>\u5728vue\u6E90\u7801\u91CC\u9762\uFF0C\u6709\u8BB8\u591A\u5730\u65B9\u7528\u5230\u4E86mergeOptions\u65B9\u6CD5\u5408\u5E76options \u573A\u666F\u4E00\uFF1A\u6211\u4EEC\u5728\u5B9E\u4F8B\u6267\u884C_init(options)\u7684\u65F6\u5019\u4F1A\u6267\u884C\u4E0B\u9762\u7684\u4EE3\u7801\u8FDB\u884Coptions\u5408\u5E76\uFF0Cif\u662F\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\u6267\u884C\u7684\uFF0Celse\u662Fnew Vue\u6267\u884C\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// merge options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// optimize internal component instantiation</span>
    <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
    <span class="token comment">// internal component options needs special treatment.</span>
    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u573A\u666F\u4E8C\uFF1A\u5F53\u6211\u4EEC\u6784\u5EFA\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0Cvue\u5185\u90E8\u662F\u901A\u8FC7Vue.extend\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E86mergeOptions\u5C06Vue\u7684options\u8DDF\u7EC4\u4EF6\u7684extendOptions\u8FDB\u884C\u5408\u5E76</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">extendOptions</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
    extendOptions <span class="token operator">=</span> extendOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> Super <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub
    Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span>
    Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
      extendOptions
    <span class="token punctuation">)</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u573A\u666F\u4E09\uFF1A\u6211\u4EEC\u4F7F\u7528Vue.mixin\u7684\u65F6\u5019\u5176\u5B9E\u4E5F\u662F\u6267\u884C\u7684mergeOptions\u8FDB\u884C\u5408\u5E76</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  Vue<span class="token punctuation">.</span><span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mixin</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> mixin<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>mergeOptions \u6E90\u7801 <code>src/core/util/options.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mergeOptions</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parent</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  vm<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Object <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkComponents</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> child <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>options
  <span class="token punctuation">}</span>
  
  <span class="token comment">//\u5BF9\u5C5E\u6027\u8FDB\u884C\u6574\u7406\u7EDF\u4E00\u89C4\u8303</span>
  <span class="token function">normalizeProps</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
  <span class="token function">normalizeInject</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
  <span class="token function">normalizeDirectives</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>

  <span class="token comment">// Apply extends and mixins on the child options,</span>
  <span class="token comment">// but only if it is a raw options object that isn&#39;t</span>
  <span class="token comment">// the result of another mergeOptions call.</span>
  <span class="token comment">// Only merged options has the _base property.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>child<span class="token punctuation">.</span>_base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>extends<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parent <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">.</span>extends<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>mixins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> child<span class="token punctuation">.</span>mixins<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">.</span>mixins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> key
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">mergeField</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> strat <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> defaultStrat
    options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strat</span><span class="token punctuation">(</span>parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u4E3B\u8981\u5C31\u662F\u628A parent \u548C child \u8FD9\u4E24\u4E2A\u5BF9\u8C61\u6839\u636E\u4E00\u4E9B\u5408\u5E76\u7B56\u7565\uFF0C\u5408\u5E76\u6210\u4E00\u4E2A\u65B0\u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002\u5982\u679C\u7EC4\u4EF6\u5BF9\u8C61\u4E0A\u5B58\u5728extends\u8DDFmixins\u5219\u9012\u5F52\u8C03\u7528mergeOptions \u628A extends \u548C mixins \u5408\u5E76\u5230 parent \u4E0A\uFF0C\u7136\u540E\u904D\u5386 parent\uFF0C\u8C03\u7528 mergeField\uFF0C\u7136\u540E\u518D\u904D\u5386 child\uFF0C\u5982\u679C key \u4E0D\u5728 parent \u7684\u81EA\u8EAB\u5C5E\u6027\u4E0A\uFF0C\u5219\u8C03\u7528 mergeField\u3002\u6839\u636E\u4E0D\u540C\u7684key\u4F1A\u6709\u4E0D\u540C\u7684\u5408\u5E76\u7B56\u7565\uFF0C\u8BE6\u7EC6\u53EF\u4EE5\u5728<code>src/core/util/options.js</code>\u770B</p><p>\u6BD4\u5982\u751F\u547D\u5468\u671F\u5408\u5E76\u7B56\u7565</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mergeHook</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentVal</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">childVal</span><span class="token operator">:</span> <span class="token operator">?</span>Function <span class="token operator">|</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> childVal
    <span class="token operator">?</span> parentVal
      <span class="token operator">?</span> parentVal<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
      <span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
        <span class="token operator">?</span> childVal
        <span class="token operator">:</span> <span class="token punctuation">[</span>childVal<span class="token punctuation">]</span>
    <span class="token operator">:</span> parentVal
  <span class="token keyword">return</span> res
    <span class="token operator">?</span> <span class="token function">dedupeHooks</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token operator">:</span> res
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dedupeHooks</span> <span class="token punctuation">(</span><span class="token parameter">hooks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token constant">LIFECYCLE_HOOKS</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hook</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  strats<span class="token punctuation">[</span>hook<span class="token punctuation">]</span> <span class="token operator">=</span> mergeHook
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LIFECYCLE_HOOKS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;activated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;errorCaptured&#39;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>\u5728mergeHook \u4E2D\uFF0C\u4F7F\u7528\u4E09\u5143\u8FD0\u7B97\u7B26\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u6CA1\u6709childVal\u76F4\u63A5\u8FD4\u56DE parentVal\uFF0C\u5982\u679C\u6709childVal,\u518D\u5224\u65AD\u6709\u6CA1\u6709 parentVal\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u628A parentVal \u8DDFchildVal\u8FDB\u884C\u5408\u5E76\uFF0C\u5426\u5219\u518D\u5224\u65ADchildVal\u662F\u4E0D\u662F\u6570\u7EC4\uFF0C\u4E0D\u662F\u5219\u5305\u88C5\u6210\u6570\u7EC4\uFF0C\u6700\u540E\u8C03\u7528dedupeHooks\u53BB\u9664\u91CD\u590D\u9879</p>`,13);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};