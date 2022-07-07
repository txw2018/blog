import{c as n}from"./app.b0bc7c80.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* @flow */</span>
<span class="token comment">/* globals MutationObserver */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIE<span class="token punctuation">,</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Here we have async deferring wrappers using microtasks.</span>
<span class="token comment">// In 2.5 we used (macro) tasks (in combination with microtasks).</span>
<span class="token comment">// However, it has subtle problems when state is changed right before repaint</span>
<span class="token comment">// (e.g. #6813, out-in transitions).</span>
<span class="token comment">// Also, using (macro) tasks in event handler would cause some weird behaviors</span>
<span class="token comment">// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).</span>
<span class="token comment">// So we now use microtasks everywhere, again.</span>
<span class="token comment">// A major drawback of this tradeoff is that there are some scenarios</span>
<span class="token comment">// where microtasks have too high a priority and fire in between supposedly</span>
<span class="token comment">// sequential events (e.g. #4521, #6690, which have workarounds)</span>
<span class="token comment">// or even between bubbling of the same event (#6566).</span>
<span class="token keyword">let</span> timerFunc

<span class="token comment">// The nextTick behavior leverages the microtask queue, which can be accessed</span>
<span class="token comment">// via either native Promise.then or MutationObserver.</span>
<span class="token comment">// MutationObserver has wider support, however it is seriously bugged in</span>
<span class="token comment">// UIWebView in iOS &gt;= 9.3.3 when triggered in touch event handlers. It</span>
<span class="token comment">// completely stops working after triggering a few times... so, if native</span>
<span class="token comment">// Promise is available, we will use it:</span>
<span class="token comment">/* istanbul ignore next, $flow-disable-line */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
    <span class="token comment">// In problematic UIWebViews, Promise.then doesn&#39;t completely break, but</span>
    <span class="token comment">// it can get stuck in a weird state where callbacks are pushed into the</span>
    <span class="token comment">// microtask queue but the queue isn&#39;t being flushed, until the browser</span>
    <span class="token comment">// needs to do some other work, e.g. handle a timer. Therefore we can</span>
    <span class="token comment">// &quot;force&quot; the microtask queue to be flushed by adding an empty timer.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIE <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> MutationObserver <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MutationObserver<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token comment">// PhantomJS and iOS 7.x</span>
  MutationObserver<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MutationObserverConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Use MutationObserver where native Promise is not available,</span>
  <span class="token comment">// e.g. PhantomJS, iOS7, Android 4.4</span>
  <span class="token comment">// (#6466 MutationObserver is unreliable in IE11)</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    counter <span class="token operator">=</span> <span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span>
    textNode<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Fallback to setImmediate.</span>
  <span class="token comment">// Technically it leverages the (macro) task queue,</span>
  <span class="token comment">// but it is still a better choice than setTimeout.</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// Fallback to setTimeout.</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">timerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br></div></div><p>\u5148\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>timerFunc</code>\u53D8\u91CF,\u7136\u540E\u5224\u65AD\u5F53\u524D\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301Promise\uFF0C\u5982\u679C\u4E0D\u652F\u6301\uFF0C\u5219\u964D\u7EA7\u5230\u5224\u65AD\u662F\u5426\u652F\u6301MutationObserver\uFF0C\u5982\u679C\u8FD8\u4E0D\u652F\u6301\uFF0C\u5219\u7EE7\u7EED\u964D\u7EA7\u5230\u5224\u65AD\u662F\u5426\u652F\u6301setImmediate\uFF0C\u6700\u540E\u964D\u7EA7\u4F7F\u7528setTimeout\u3002</p><p>\u7136\u540E\u6211\u4EEC\u770B\u4E00\u4E0BnextTick\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u6211\u4EEC\u4F1A\u628A\u4F20\u8FDB\u6765\u7684cb\u51FD\u6570push\u5230callbacks\u6570\u7EC4\u91CC\u9762\uFF0C\u7136\u540E\u5224\u65ADpending\u4E3Afalse\u7684\u65F6\u5019\uFF0C\u628Apending\u6539\u4E3Atrue\u7136\u540E\u6267\u884CtimerFunc\u65B9\u6CD5\uFF0C\u5C31\u662F\u6267\u884CflushCallbacks\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u628Apending\u6539\u6210false\uFF0C\u7136\u540E\u5FAA\u73AFcallbacks\u628A\u91CC\u9762\u7684cb\u65B9\u6CD5\u9010\u4E00\u6267\u884C</p>`,4);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
