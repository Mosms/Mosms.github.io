---
layout: homepage
---

## About Me

I'm a Ph.D. student in the [BASICS Lab](https://basics.sjtu.edu.cn/) at [Shanghai Jiao Tong University](https://www.sjtu.edu.cn/), where I'm advised by Prof. [Yuxi Fu](https://basics.sjtu.edu.cn/~yuxi/).

My personal blog, [Mologs](https://mosms.github.io/Mologs/), features interesting things I come across and find worth sharing.

[中文主页](./zhindex.html)

## Research Interests

My current research lies in <a class="research-topic" href="https://en.wikipedia.org/wiki/Theoretical_computer_science">theoretical computer science</a>.
More broadly, I am interested in ideas from <a class="research-topic" href="https://en.wikipedia.org/wiki/Theoretical_physics">theoretical physics</a>, <a class="research-topic" href="https://en.wikipedia.org/wiki/Mechanistic_interpretability">mechanistic interpretability</a>, and <a class="research-topic" href="https://en.wikipedia.org/wiki/AI_safety">AI safety</a>, especially when they aim to turn complex high-dimensional behavior into simpler and more human-understandable structures.

Currently, I mainly work on reachability and related verification problems in [**V**ector **A**ddition **S**ystems (with **S**tates)](https://en.wikipedia.org/wiki/Vector_addition_system). What particularly interests me is what I see as one of the central ideas in this area: developing **finite** symbolic representations, effective algorithms, and structural proof techniques for reasoning about **infinite**-state systems.

## Publications

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


## Education

- Ph.D. student in Computer Science and Technology, **[Shanghai Jiao Tong University](https://en.sjtu.edu.cn/)**.
- B.Sc. in Computer Science and Technology, **[Kuang Yaming Honors School](https://dii.nju.edu.cn/kym_en/)**, **[Nanjing University](https://www.nju.edu.cn/en/)**.
    - Recipient of the National Scholarship.
    {% comment %}Certificate image kept at assets/images/national_BZK2024006849.jpg for private reference or future use.{% endcomment %}

<!-- ## Selected Projects

To be updated. -->
