+++
title = '1.1 Set Theory'
date = 2025-06-22T17:30:26-07:00
draft = false
+++
## 1.1 Set Theory
Tensor analysis is the heart of continuum mechanics and as such we will need to develop a working knowledge of relevant mathematical concepts before continuing. We begin with notions of elementary set theory starting with a set. A *set* $X$ is a collection of objects referred to as *elements*. There are two ways to define a set, either through identifying all the elements in a set or through the properties that the set holds. For example, consider the set $X = \\{2, 4, 6, 8, 10\\}$ which is equivalent to specifying the set as all positive even numbers less than or equal to $10$. If $x$ is an element of the set $X,$ one writes $x \in X.$ Otherwise, one writes $x \notin X.$ So the aforementioned example can also be written as $X = \\{2n \mid n \leq 5, n \in \mathbb{Z^+} \\},$ where $\mathbb{Z^+}$ is the set of all positive integers.

Let $X,Y$ be two sets. The set $X$ is a *subset* of the set $Y$ (written $X \subseteq Y$ or $Y \supseteq X$) if every element of $X$ is also an element of $Y.$ The set $X$ is *proper subset* of the set $Y$ (written $X \subset Y$ or $Y \supset X$) if every element of $X$ is also an element of $Y,$ but there exists at least one element of $Y$ that does not belong to $X.$ 

The *union* of sets $X$ and $Y$ (written $X \cup Y$) is the set consisting of all the elements of both sets. The *intersection* of sets $X$ and $Y$ (written $X \cap Y$) is the set comprised of only the elements the sets have in common. The *empty* set (written $\empty$) is a set that contains no elements and is contained in every set, thus $X \cup \empty = X.$ The (set-theoretic) *difference* of a set $Y$ from another set $X$ (written $X \setminus Y$) consists of all the elements in $X$ which do not belong to $Y$ (like you're subtracting off elements from a set $X$). If $X \subseteq Y,$ then the *complement* of $X$ relative to $Y$ is defined as $X^c = Y \setminus X,$ i.e. all the elements in $Y$ that do not belong to the subset $X.$

The *Cartesian product* $X \times Y$ of sets $X$ and $Y$ is a set defined as
\begin{equation}
    X \times Y = \\{ (x,y) \mid x \in X, y \in Y \\}.
\end{equation}
The pair $(x,y)$ is ordered meaning that the element $(x,y)$ in general is not the same as the element $(y,x).$ The notation $X^2, X^3, \ldots,$ is used respectively to denote the Cartesian products $X \times X, X \times X \times X, \ldots.$ You're probably already familiar with this through the real coordinate sets $\mathbb{R^2}$ and $\mathbb{R^3}$ with elements $(x,y), (x,y,z)$ respectively. In which case, the *n*-dimensional real coordinate set is simply defined as $\mathbb{R^n} = \mathbb{R} \times \mathbb{R} \ldots \times \mathbb{R},$ where $n \in \mathbb{N}$ and the *n*-tuple $(x\_1, x\_2, \ldots, x\_n)$ is an element of $\mathbb{R^n}.$ 

{{< prev-next >}}
<p style="text-align: center;">
<a href="http://aaronmachuca.com/academia/notes/cmech/" target="_self">Table of Contents</a>
</p>

