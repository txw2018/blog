import{c as n}from"./app.b0bc7c80.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F</h1><h2 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h2><p>\u5355\u4F8B\u6A21\u5F0F\u4E4B\u6240\u4EE5\u8FD9\u4E48\u53EB\uFF0C\u662F\u56E0\u4E3A\u5B83\u9650\u5236\u4E00\u4E2A\u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u5B9E\u4F8B\u5316\u5BF9\u8C61\u3002\u7ECF\u5178\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u5305\u542B\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5728\u6CA1\u6709\u5BF9\u8C61\u5B58\u5728\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002\u5982\u679C\u5BF9\u8C61\u5B58\u5728\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u662F\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u662F\u5426\u5DF2\u7ECFnew\u8FC71\u4E2A\u5B9E\u4F8B</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u82E5\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5148\u521B\u5EFA\u5B83</span>
            Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684\u5B9E\u4F8B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
        <span class="token keyword">return</span> Singleton<span class="token punctuation">.</span>instance
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s1 <span class="token operator">=</span> SingleDog<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> s2 <span class="token operator">=</span> SingleDog<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// true</span>
s1 <span class="token operator">===</span> s2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u56E0\u4E3A\u6211\u4EEC\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u5F15\u7528\uFF0C\u6240\u4EE5 s1 === s2</p><p>es5\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> mySingleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> instance<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5355\u4F8B</span>

    <span class="token comment">// \u79C1\u6709\u65B9\u6CD5\u548C\u53D8\u91CF</span>
    <span class="token keyword">function</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;I am private&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> privateVariable <span class="token operator">=</span> <span class="token string">&quot;Im also private&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>

      <span class="token comment">// \u5171\u6709\u65B9\u6CD5\u548C\u53D8\u91CF</span>
      <span class="token function-variable function">publicMethod</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;The public can see me!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token literal-property property">publicVariable</span><span class="token operator">:</span> <span class="token string">&quot;I am also public&quot;</span><span class="token punctuation">,</span>


    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728\u83B7\u53D6\u6B64\u5355\u4F8B\u5B9E\u4F8B\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u521B\u5EFA\u4E00\u4E2A\u5355\u4F8B\u5B9E\u4F8B</span>
    <span class="token function-variable function">getInstance</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>instance <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// \u4F7F\u7528:</span>

<span class="token keyword">var</span> singleA <span class="token operator">=</span> mySingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> singleB <span class="token operator">=</span> mySingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> singleA <span class="token operator">===</span> singleB <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h5 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h5><p>https://www.w3cschool.cn/zobyhd/tqlv9ozt.html https://juejin.im/book/5c70fc83518825428d7f9dfb/section/5c83d5b3e51d453a8a24d3a1</p><h2 id="\u7B56\u7565\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a> \u7B56\u7565\u6A21\u5F0F</h2><p>\u5B9A\u4E49\uFF1A\u6307\u5BF9\u8C61\u6709\u67D0\u4E2A\u884C\u4E3A\uFF0C\u4F46\u662F\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E2D\uFF0C\u8BE5\u884C\u4E3A\u6709\u4E0D\u540C\u7684\u5B9E\u73B0\u7B97\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> activityObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">special</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> price <span class="token operator">*</span> <span class="token number">0.6</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">secondsKill</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  price <span class="token operator">*</span> <span class="token number">0.5</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activity</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  price <span class="token operator">*</span> <span class="token number">0.9</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">askPrice</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span>money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> activityObj<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">askPrice</span><span class="token punctuation">(</span><span class="token string">&#39;special&#39;</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u804C\u8D23\u94FE\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u804C\u8D23\u94FE\u6A21\u5F0F" aria-hidden="true">#</a> \u804C\u8D23\u94FE\u6A21\u5F0F</h2><p><strong>\u5B9A\u4E49\uFF1A</strong> \u4E3A\u89E3\u9664\u8BF7\u6C42\u7684\u53D1\u9001\u8005\u548C\u63A5\u6536\u8005\u4E4B\u95F4\u8026\u5408\uFF0C\u800C\u4F7F\u591A\u4E2A\u5BF9\u8C61\u90FD\u6709\u673A\u4F1A\u5904\u7406\u8FD9\u4E2A\u8BF7\u6C42\u3002\u5C06\u8FD9\u4E9B\u5BF9\u8C61\u8FDE\u6210\u4E00\u6761\u94FE\uFF0C\u5E76\u6CBF\u7740\u8FD9\u6761\u94FE\u4F20\u9012\u8BE5\u8BF7\u6C42\uFF0C\u76F4\u5230\u6709\u4E00\u4E2A\u5BF9\u8C61\u5904\u7406\u5B83</p><p>\u4E0B\u9762\u6A21\u62DF\u8D2D\u7269\u8F66\u63D0\u4EA4\u8BA2\u5355\u6D41\u7A0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">UI</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">Alert</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> options<span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">&#39;\u60A8\u786E\u5B9A\u5417&#39;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> validateHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">validateAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token constant">UI</span><span class="token punctuation">.</span><span class="token function">Alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u60A8\u786E\u5B9A\u5730\u5740\u6B63\u786E\u5417&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1111</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validateMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token constant">UI</span><span class="token punctuation">.</span><span class="token function">Alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u60A8\u786E\u5B9A\u7EE7\u7EED\u652F\u4ED8\u5417&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2222</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validateCoupon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3333</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Chain</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
    <span class="token keyword">this</span><span class="token punctuation">.</span>sucessor <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token parameter">fnc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sucessor <span class="token operator">=</span> fnc
    <span class="token keyword">return</span> fnc
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sucessor<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sucessor<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> validateObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> validateArr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>validateHandler<span class="token punctuation">)</span>


<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> fnc <span class="token keyword">of</span> validateArr<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5FAA\u73AF\u6267\u884C\u9A8C\u8BC1\u65B9\u6CD5</span>
  validateObj<span class="token punctuation">[</span>fnc <span class="token operator">+</span> <span class="token string">&#39;Chain&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span>validateHandler<span class="token punctuation">[</span>fnc<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  validateAddressChain<span class="token punctuation">,</span>
  validateMoneyChain<span class="token punctuation">,</span>
  validateCouponChain
<span class="token punctuation">}</span> <span class="token operator">=</span> validateObj


validateAddressChain
  <span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>validateMoneyChain<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>validateCouponChain<span class="token punctuation">)</span>

validateAddressChain<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h2 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h2><p><code>\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9A\u4E49\u4E86\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u8BA9\u591A\u4E2A\u89C2\u5BDF\u8005\u5BF9\u8C61\u540C\u65F6\u76D1\u542C\u67D0\u4E00\u4E2A\u76EE\u6807\u5BF9\u8C61\uFF0C\u5F53\u8FD9\u4E2A\u76EE\u6807\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u901A\u77E5\u6240\u6709\u89C2\u5BDF\u8005\u5BF9\u8C61\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\u3002 \u2014\u2014 Graphic Design Patterns</code></p><p>\u5728\u6211\u4EEC\u5E73\u65F6\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5F00\u53D1\u4E00\u4E2A\u9700\u6C42\uFF0C\u4EA7\u54C1\u7ECF\u7406\u628A\u76F8\u5173\u5F00\u53D1\u4EBA\u5458\u6765\u5230\u4E00\u4E2A\u7FA4\uFF0C\u7136\u540E\u628A\u76F8\u5173\u9700\u6C42\u901A\u77E5\u5230\u5927\u5BB6\uFF0C\u7136\u540E\u76F8\u5173\u4EBA\u5458\u63A5\u6536\u5230\u4FE1\u606F\uFF0C\u8FDB\u884C\u5F00\u53D1\uFF0C\u8FD9\u5C31\u662F\u7C7B\u4F3C\u4E00\u4E2A\u89C2\u5BDF\u8005\u6A21\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u53D1\u5E03\u8005\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Publisher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Publisher created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u589E\u52A0\u8BA2\u9605\u8005</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Publisher.add invoked&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u79FB\u9664\u8BA2\u9605\u8005</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Publisher.remove invoked&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Publisher.notify invoked&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      observer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u8BA2\u9605\u8005\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Observer created&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Observer.update invoked&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> \u4EA7\u54C1\u7ECF\u7406 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Publisher</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> \u524D\u7AEF <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> \u540E\u7AEF <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token constant">UI</span> <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">Observer</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

\u4EA7\u54C1\u7ECF\u7406<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\u524D\u7AEF<span class="token punctuation">)</span>
\u4EA7\u54C1\u7ECF\u7406<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\u540E\u7AEF<span class="token punctuation">)</span>
\u4EA7\u54C1\u7ECF\u7406<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">UI</span><span class="token punctuation">)</span>
\u4EA7\u54C1\u7ECF\u7406<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h2><p>Event Bus\u5C31\u662F\u4E00\u4E2A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handlers\u662F\u4E00\u4E2Amap\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E8B\u4EF6\u4E0E\u56DE\u8C03\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// on\u65B9\u6CD5\u7528\u4E8E\u5B89\u88C5\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5B83\u63A5\u53D7\u76EE\u6807\u4E8B\u4EF6\u540D\u548C\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</span>
  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5148\u68C0\u67E5\u4E00\u4E0B\u76EE\u6807\u4E8B\u4EF6\u540D\u6709\u6CA1\u6709\u5BF9\u5E94\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u9996\u5148\u521D\u59CB\u5316\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\u961F\u5217</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u628A\u56DE\u8C03\u51FD\u6570\u63A8\u5165\u76EE\u6807\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\u961F\u5217\u91CC\u53BB</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// emit\u65B9\u6CD5\u7528\u4E8E\u89E6\u53D1\u76EE\u6807\u4E8B\u4EF6\uFF0C\u5B83\u63A5\u53D7\u4E8B\u4EF6\u540D\u548C\u76D1\u542C\u51FD\u6570\u5165\u53C2\u4F5C\u4E3A\u53C2\u6570</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u68C0\u67E5\u76EE\u6807\u4E8B\u4EF6\u662F\u5426\u6709\u76D1\u542C\u51FD\u6570\u961F\u5217</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u9700\u8981\u5BF9 this.handlers[eventName] \u505A\u4E00\u6B21\u6D45\u62F7\u8D1D\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u907F\u514D\u901A\u8FC7 once \u5B89\u88C5\u7684\u76D1\u542C\u5668\u5728\u79FB\u9664\u7684\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u987A\u5E8F\u95EE\u9898</span>
      <span class="token keyword">const</span> handlers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// \u5982\u679C\u6709\uFF0C\u5219\u9010\u4E2A\u8C03\u7528\u961F\u5217\u91CC\u7684\u56DE\u8C03\u51FD\u6570</span>
      handlers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u79FB\u9664\u67D0\u4E2A\u4E8B\u4EF6\u56DE\u8C03\u961F\u5217\u91CC\u7684\u6307\u5B9A\u56DE\u8C03\u51FD\u6570</span>
  <span class="token function">off</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      callbacks<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4E3A\u4E8B\u4EF6\u6CE8\u518C\u5355\u6B21\u76D1\u542C\u5668</span>
  <span class="token function">once</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u5305\u88C5\uFF0C\u4F7F\u5176\u6267\u884C\u5B8C\u6BD5\u81EA\u52A8\u88AB\u79FB\u9664</span>
    <span class="token keyword">const</span> <span class="token function-variable function">wrapper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,25);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
