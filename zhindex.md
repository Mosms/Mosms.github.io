---
layout: homepage
permalink: /zhindex.html
lang: zh-CN
title: 付博
profile_title: 付博
position: 博士研究生
affiliation: 上海交通大学
affiliation_link: https://www.sjtu.edu.cn/
email: fubo0970@sjtu.edu.cn
# cv_link: assets/files/简历.pdf  # 取消注释即可恢复中文侧栏的“简历”入口。
description: 付博的学术主页，研究方向包括向量加法系统、可达性与理论计算机科学。
keywords: 付博, 向量加法系统, 可达性, 理论计算机科学, 上海交通大学
canonical: https://mosms.github.io/zhindex.html
---

## 关于我

目前，我是[上海交通大学](https://www.sjtu.edu.cn/) [BASICS 实验室](https://basics.sjtu.edu.cn/)的一位博士研究生，师从[傅育熙教授](https://basics.sjtu.edu.cn/~yuxi/)。

我的个人博客 <a class="always-blue-link" href="https://mosms.github.io/Mologs/">Mologs</a> 包含了个人发现的一些值得分享的有趣事物。

<a class="language-switch" href="./">English Version</a>

## 研究方向

我的研究兴趣主要在<a class="research-topic" href="https://baike.baidu.com/item/%E7%90%86%E8%AE%BA%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6/11034581">理论计算机科学</a>方向，同时也对<a class="research-topic" href="https://baike.baidu.com/item/%E7%90%86%E8%AE%BA%E7%89%A9%E7%90%86/2490260">理论物理</a>、<a class="research-topic" href="https://baike.baidu.com/item/%E6%9C%BA%E5%88%B6%E5%8F%AF%E8%A7%A3%E9%87%8A%E6%80%A7/68563293">机制可解释性</a>和 <a class="research-topic" href="https://baike.baidu.com/item/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%89%E5%85%A8">AI 安全</a>等问题保持兴趣。吸引我的是这些方向背后某种共同的思想：用简洁、结构化、可被人理解的方式，去描述复杂而高维的现象。

目前，我主要研究向量加法系统上的可达性以及相关验证问题。这类问题吸引我的地方在于，我们试图用**有限**的描述、算法和证明方法，去推理**无限**状态系统的行为；这也是理论计算机科学中理解和刻画复杂系统的一种重要方式。

## 论文

<article class="publication">
  <h3 class="publication-title"><a href="https://arxiv.org/abs/2610.40012" target="_blank" rel="noopener">Reachability in Five-Dimensional Vector Addition Systems Is PSPACE-Complete</a></h3>
  <p class="publication-authors"><a href="https://chenweijun.cc/" target="_blank" rel="noopener">Weijun Chen</a>, <strong>Bo Fu</strong>, and <a href="https://basics.sjtu.edu.cn/~yuxi/" target="_blank" rel="noopener">Yuxi Fu</a>.</p>
  <details class="publication-abstract">
    <summary><span class="publication-meta"><em>Preprint, 2026.</em> <a href="https://arxiv.org/abs/2610.40012" target="_blank" rel="noopener">arXiv</a> · <a href="https://arxiv.org/pdf/2610.40012" target="_blank" rel="noopener">PDF</a></span><span class="publication-abstract__label">Abstract</span></summary>
    <div class="publication-abstract__body">
      <p><strong>Abstract.</strong> Vector addition systems (VAS) are a fundamental model of concurrent computation in which transitions update nonnegative integer counters by adding integer vectors, provided all counters remain nonnegative. Closely related to Petri nets, VAS are the single-state counterpart of vector addition systems with states (VASS), which use finitely many states to restrict the available transitions.</p>
      <p>A classical simulation of <em>d</em>-VASS by (<em>d</em>+3)-VAS connects their reachability problems, but the complexity-theoretic picture of fixed-dimensional VAS remains largely unclear. While reachability in 2-VASS is PSPACE-complete under binary encoding, the best known upper bound for 5-VAS was only elementary. We prove that every reachable 5-VAS instance has a reachability witness of length polynomial in its unary size.</p>
      <p>Consequently, 5-VAS reachability is NL-complete under unary encoding and PSPACE-complete under binary encoding. We also establish a polynomial factorization of the reachability relation of every <em>d</em>-VAS with <em>d</em> ≥ 3. For 5-VAS, this strengthens Hopcroft and Pansiot's effective semilinearity of reachability sets to the full reachability relation. For every fixed <em>d</em> ≥ 3, it also yields an F<sub><em>d</em></sub> upper bound for reachability in (<em>d</em>+3)-VAS.</p>
    </div>
  </details>
</article>

<article class="publication">
  <h3 class="publication-title"><a href="https://arxiv.org/abs/2607.14983" target="_blank" rel="noopener">3-VASS Reachability is in EXPSPACE</a></h3>
  <p class="publication-authors"><a href="https://chenweijun.cc/" target="_blank" rel="noopener">Weijun Chen</a>, <strong>Bo Fu</strong>, <a href="https://basics.sjtu.edu.cn/~yuxi/" target="_blank" rel="noopener">Yuxi Fu</a>, <a href="https://basics.sjtu.edu.cn/~longhuan/" target="_blank" rel="noopener">Huan Long</a>, Chengfeng Xue, <a href="https://basics.sjtu.edu.cn/~yangqizhe/" target="_blank" rel="noopener">Qizhe Yang</a>, and <a href="https://zhengyangluo.com/" target="_blank" rel="noopener">Yangluo Zheng</a>.</p>
  <details class="publication-abstract">
    <summary><span class="publication-meta"><em>Preprint, 2026.</em> <a href="https://arxiv.org/abs/2607.14983" target="_blank" rel="noopener">arXiv</a> · <a href="https://arxiv.org/pdf/2607.14983" target="_blank" rel="noopener">PDF</a></span><span class="publication-abstract__label">Abstract</span></summary>
    <div class="publication-abstract__body">
      <p><strong>Abstract.</strong> A VASS can be viewed as a finite-state automaton manipulating a fixed number (called its dimension) of counters holding non-negative values. The reachability problem, asking whether there is a run from one configuration, defined by a state and values of the counters, to another configuration, has been a long-standing algorithmic challenge in theoretical computer science. When the dimension is part of the input, the problem has been shown to be ACKERMANN-complete in 2021.</p>
      <p>For fixed dimension greater than 2, and in particular for dimension 3, the exact complexity of the reachability problem remains unclear. For a long time the known algorithms for the 3-dimensional VASS reachability problem had been non-elementary, while the best known lower bound is merely PSPACE hardness inherited from dimension 2. A recent breakthrough in (Czerwiński, Jecker, Lasota, Orlikowski, ICALP 2025) gave the first elementary upper bound for the problem, namely 2-EXPSPACE.</p>
      <p>In this paper it is shown that the reachability problem in 3-VASS belongs to EXPSPACE. The proof is based on a hierarchical pumpability analysis, yielding a doubly-exponential length bound on the shortest runs between two configurations.</p>
    </div>
  </details>
</article>

## 教育经历

- [上海交通大学](https://www.sjtu.edu.cn/)，博士研究生，主修计算机科学与技术
- <a href="https://www.nju.edu.cn/">南京大学</a><a href="https://dii.nju.edu.cn/main.htm">匡亚明学院</a>，理学学士，主修计算机科学与技术
    - 国家奖学金
    {% comment %}证书图片保留在 assets/images/national_BZK2024006849.jpg，可作为私下材料或未来需要时使用。{% endcomment %}

<!-- ## 项目经历

待补充。 -->
