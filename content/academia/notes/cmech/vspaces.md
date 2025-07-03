+++
title = '1.3 Vector Spaces'
date = 2025-06-25T18:25:52-07:00
draft = false
+++
## 1.3 Vector Spaces 
Vector spaces can be as involved as defining tangent spaces at points on a manifold or as intuitive as a collection of objects attributed with "magnitude and direction." For our purposes, we don't need to be as rigorous as in the former example, but we still want something *a little* more formally defined than the latter. Consider a set $\mathcal{V}$ with elements of scalars, vectors, or functions. Assume the set is endowed with two operations of addition ($+$) and scalar multiplication ($\cdot$), which aren't necessarily the same as classical addition and multiplication for real numbers. A *vector* (or *linear*) *space* $\\{\mathcal{V}, + ; \mathbb{R}, \cdot\\}$ is defined such that the following hold for all ($\forall$) $\alpha, \beta \in \mathbb{R}$ and $\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathcal{V}:$

<ol type="a" style="list-style-type: lower-alpha;">
  <li>$\alpha \mathbf{a} + \beta \mathbf{b} \in \mathcal{V}$ (closure: any linear combination of a vector is a vector),</li>
  <li>($\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})$ (associativity with respect to "$+$"),</li>
  <li>$\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$ (commutativity with respect to $+$),</li>
  <li>There is $\mathbf{0} \in \mathcal{V}$ such that $\mathbf{a} + \mathbf{0} = \mathbf{a}$ (existence of a null element),</li> 
  <li> $\forall$ $\mathbf{a} \in \mathcal{V}$ there is $\mathbf{b} \in \mathcal{V}$ such that $\mathbf{a} + \mathbf{b} = \mathbf{0}$; $\mathbf{b} = -\mathbf{a}$ (existence of an additive inverse),</li>
  <li>($\alpha \beta)\mathbf{v} = \alpha(\beta \mathbf{v})$ (associativity with respect to $\cdot$),</li>
  <li>$(\alpha + \beta)\mathbf{a} = \alpha \mathbf{a} + \beta \mathbf{a}$ (distributivity with respect to $\mathbb{R}$),</li>
  <li>$\alpha(\mathbf{a} + \mathbf{b})= \alpha \mathbf{a} + \alpha \mathbf{b}$ (distributivity with respect to $\mathcal{V}$),</li>
  <li>$1\mathbf{a} = \mathbf{a}$ (existence of identity),</li>
  <li>$0\mathbf{a} = \mathbf{0}$.</li>
</ol>

Mechanicians always write vectors in bold face on digital formats and with an undertilde on paper. If you write vectors with an overhead arrow you're dead to me. We will use the term "linear" and "vector" space interchangeably throughout these notes. If we have a set $\mathcal{U} \subseteq \mathcal{V}$ where $\mathcal{V}$ is a linear space, then $\mathcal{U}$ forms a linear subspace of $\mathcal{V}$ with respect to the same operations ($+$) and ($\cdot$) if closure is maintained, i.e. $\forall$ $\mathbf{u}, \mathbf{v} \in \mathcal{U}$ and $\alpha, \beta \in \mathbb{R},$ 
$$
\alpha \mathbf{u} + \beta \mathbf{v} \in \mathcal{U}. 
$$
Let $\\{\mathbf{v}\_1, \mathbf{v}\_2, \ldots, \mathbf{v}\_p\\}$ be a set of elements of $\mathcal{V},$ and $\\{\alpha\_1, \alpha\_2, \ldots, \alpha\_p\\}$ a set of real numbers. Suppose that
\begin{equation}
    \alpha\_1 \mathbf{v}\_1 + \alpha\_2 \mathbf{v}\_2 + \ldots + \alpha\_p \mathbf{v}_p = \mathbf{0}.
\end{equation}
This equation is trivially satisfied if all the alphas are equal to zero. If the equality holds *only if* all the alphas are equal to zero, i.e. if (1) implies that $\alpha\_1 = \alpha\_2 = \ldots = \alpha\_p = 0,$ then the set $\\{\mathbf{v}\_1, \mathbf{v}\_2, \ldots, \mathbf{v}\_p\\}$ is said to be *linearly independent*. In this case, the condition for linear independence can be rewritten mathematically as:
\begin{equation}
    \alpha\_1 \mathbf{v}\_1 + \alpha\_2 \mathbf{v}\_2 + \ldots + \alpha\_p \mathbf{v}_p = \mathbf{0} \iff \alpha\_1 = \alpha\_2 = \ldots = \alpha\_p = 0.
\end{equation}
Simply meaning that the equations directly imply each other and the statement reads "$\alpha\_1 \mathbf{v}\_1 + \alpha\_2 \mathbf{v}\_2 + \ldots + \alpha\_p \mathbf{v}_p$ is zero if and only if all the alphas are zero." The set $\\{\mathbf{v}\_1, \mathbf{v}\_2, \ldots, \mathbf{v}\_p\\}$ is *linearly dependent* if equality holds in (1) with at least one member of the set $\\{\alpha\_1, \alpha\_2, \ldots, \alpha\_p\\}$ unequal to zero. Because in this case, we can express one of the vectors as a linear combination of the others. 

The concept of dimensionality of a vector space necessitates a brief remark on the cardinality (or "size") of a set. A set is finite if it is empty or has at most *n* elements for some $n \in \mathbb{N}.$ A set is infinite if it is not finite. 

The vector space $\mathcal{V}$ is *finite-dimensional* if there is an integer *n* such that all linearly independent sets contain at most *n* elements. Then, *n* is the *dimension* of the space, denoted by $\mathcal{V^n}.$ Any set of *n* linearly independent vectors is a *basis* for $\mathcal{V^n}.$ Therefore, this is equivalent to saying that a vector space is finite-dimensional if and only if the cardinality of its basis is finite, otherwise it is *infinite-dimensional*. 

Now, let $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_n\\}$ be a basis. Then any $\mathbf{v} \in \mathcal{V^n}$ can be expressed as a linear combination of the basis elements, i.e., 
\begin{equation}
    \mathbf{v} = \alpha\_1 \mathbf{u}\_1 + \alpha\_2 \mathbf{u}\_2 + \ldots + \alpha\_n \mathbf{u}_n.
\end{equation}
We can see this by considering the set of $n+1$ vectors, $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_n, \mathbf{v}\\},$ which are linear in $\mathcal{V^n}.$ Therefore, 
\begin{equation}
    \lambda \mathbf{v} + \sum\_{i=1}^n \lambda\_i \mathbf{u}\_i = \mathbf{0},
\end{equation}
and by definition of linear dependence, has at least one element of $\\{\lambda\_1, \lambda\_2, \ldots, \lambda\_n, \lambda\\}$ not equal to zero. It has to be that $\lambda \neq 0$ because otherwise we would have that $\sum\_{i=1}^n \lambda\_i \mathbf{u}\_i = \mathbf{0},$ and hence that $\lambda\_1, \lambda\_2, \ldots, \lambda\_n$ are all equal to zero by virtue of the linear independence of $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_n\\}.$ We would have to conclude that $\lambda\_1 = \lambda\_2 = \ldots = \lambda\_n = \lambda = 0,$ and thus that $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_n, \mathbf{v}\\}$ is a linearly independent set, which contradicts the fact that $\mathcal{V^n}$ has dimension *n*. We can express $\mathbf{v}$ in the form (3), with $\alpha\_i = \lambda\_i / \lambda.$

Note that the coefficients of $\alpha\_i$ are unique. Suppose they aren't and that we can represent $\mathbf{v}$ through another set of coefficients $\beta\_i$, such that $\mathbf{v} = \sum\_{i=1}^n \beta\_i \mathbf{u}\_i.$ With the aid of (3) we obtain $\sum\_{i=1}^n (\beta\_i - \alpha\_i) \mathbf{u}\_i = \mathbf{0}.$ However, by linear independence of $\mathbf{u}\_i,$ the coefficients all must equal to zero thus, $\beta\_i - \alpha\_i = 0,$ for $i = 1, 2, \ldots, n.$ Therefore, the coefficients are not distinct and hence $\beta\_i = \alpha\_i.$

Among the numerous vector spaces that we can define, the *Euclidean vector space* $E^n$ is of particular importance for our scope of analysis. This is a finite-dimensional vector space with the additional structure of the *inner product* or *dot product* operation, $\mathbf{u} \cdot \mathbf{v} \in \mathbb{R},$ defined such that $\forall$ $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathcal{V}$ and $\alpha \in \mathbb{R}$:

<ol type="a" style="list-style-type: lower-alpha;">
  <li>$\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ (commutativity with respect to $\cdot$),</li>
  <li>$\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$ (distributivity with respect to $+$),</li>
  <li>$(\alpha \mathbf{u}) \cdot \mathbf{v} = \mathbf{u} \cdot (\alpha \mathbf{v}) = \alpha (\mathbf{u} \cdot \mathbf{v})$ (associativity with respect to $\cdot$),</li>
  <li>$\mathbf{u} \cdot \mathbf{u} \geq 0$ and $\mathbf{u} \cdot \mathbf{u} = 0 \iff \mathbf{u} = \mathbf{0}$.</li> 
</ol>

The *Euclidean norm* (or "magnitude") of a vector $\mathbf{u}$ is $\left| \mathbf{u} \right| = \sqrt{\mathbf{u} \cdot \mathbf{u}},$ a non-negative real number by virtue of (d). The vector $\mathbf{u}$ is a unit vector if $\left| \mathbf{u} \right| = 1.$ 

The norm satisfies the *Cauchy-Schwarz* inequality 
\begin{equation}
    \left| \mathbf{u} \cdot \mathbf{v} \right| \leq \left| \mathbf{u} \right| \left| \mathbf{v} \right|,
\end{equation}
which can be bounded by $-\left| \mathbf{u} \right| \left| \mathbf{v} \right|$ and $\left| \mathbf{u} \right| \left| \mathbf{v} \right|$. Then, dividing both sides by $\left| \mathbf{u} \right| \left| \mathbf{v} \right|$ yields,
\begin{equation}
    -1 \leq \frac{\mathbf{u} \cdot \mathbf{v}}{\left| \mathbf{u} \right| \left| \mathbf{v} \right|} \leq 1,
\end{equation}
implying that there exists $\theta \in \mathbb{R},$ *the angle between* $\mathbf{u}$ *and* $\mathbf{v},$ such that
\begin{equation}
    \cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\left| \mathbf{u} \right| \left| \mathbf{v} \right|}.
\end{equation}
The *triangle inequality* 
\begin{equation}
    \left| \mathbf{u} + \mathbf{v} \right| \leq \left| \mathbf{u} \right| + \left| \mathbf{v} \right|
\end{equation}
is also satisfied by the norm.

{{< summary "Quick Proof" >}}
\begin{align}
    \left| \mathbf{u} + \mathbf{v} \right|^2 = (\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) \notag \\
    = \mathbf{u}^2 + 2\mathbf{u} \cdot \mathbf{v} + \mathbf{v}^2 \notag \\
    = \left|\mathbf{u}\right|^2 + 2\mathbf{u} \cdot \mathbf{v} + \left|\mathbf{v}\right|^2 \notag \\
    \leq \left|\mathbf{u}\right|^2 + 2\left|\mathbf{u} \cdot \mathbf{v}\right| + \left|\mathbf{v}\right|^2, \notag \\
\end{align}
    and by the Cauchy-Schwarz inequality,
\begin{align}
    \leq \left|\mathbf{u}\right|^2 + 2\left|\mathbf{u}\right| \left|\mathbf{v}\right| + \left|\mathbf{v}\right|^2 \notag \\ 
    = (\left|\mathbf{u}\right| + \left|\mathbf{v}\right|)^2. \notag \\
\end{align}
Thus,
$$
\left| \mathbf{u} + \mathbf{v} \right|^2 \leq (\left|\mathbf{u}\right| + \left|\mathbf{v}\right|)^2,
$$
and taking the square root yields the desired result,
$$
\left| \mathbf{u} + \mathbf{v} \right| \leq \left| \mathbf{u} \right| + \left| \mathbf{v} \right|.
$$
{{< /summary  >}}

Two vectors $\mathbf{u},$ $\mathbf{v},$ are *orthogonal* if $\mathbf{u} \cdot \mathbf{v} = 0,$ and we require that $\mathbf{0} \cdot \mathbf{v} = 0$ $\forall$ $\mathbf{v} \in E^n.$ The elements in the set of vectors $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_n\\}$ are *orthonormal* if they are mutually orthogonal and have a unit magnitude. Mathematically we can write this as,
\begin{equation}
    \mathbf{u}\_i \cdot \mathbf{u}\_j = \delta\_{ij}, \quad i,j = 1, ..., n
\end{equation}
where $\delta\_{ij},$ is the *Kronecker delta,* which is defined as
\begin{equation}
\delta_{ij} = 
\begin{cases}
1 &\quad i = j \\\
0 &\quad i \neq j.
\end{cases}
\end{equation}
Note that the Kronecker delta is symmetric such that you can freely swap the indices $ij$ without changing anything about the function, i.e. $\delta\_{ij} = \delta\_{ji}$ (this fact will be used quite extensively as we move forward). In the context of linear algebra, you can consider the Kronecker delta as having the same entries to that of an $n \times n$ identity matrix. And like the identity matrix, it holds the property of identity when operating on a vector, i.e. $\sum\_i a\_i \delta\_{ij} = a\_j.$ 

In $E^n$ every set of orthonormal vectors $\\{\mathbf{e}\_1, \mathbf{e}\_2, \ldots, \mathbf{e}\_k\\}$, with $k \leq n$, is linearly independent. To see this, let
\begin{equation}
    \alpha_1 \mathbf{e}\_1 + \alpha_2 \mathbf{e}\_2 + \ldots + \alpha_k \mathbf{e}\_k,
\end{equation}
and form a dot product with $\mathbf{e}\_j$, with $j \in \\{1, \ldots, k\\}$ fixed, then we have,
\begin{equation}
    0 = \mathbf{0} \cdot \mathbf{e}\_j = (\sum\_{i=1}^k \alpha\_i \mathbf{e}\_i) \cdot \mathbf{e}\_j = \sum\_{i=1}^k \alpha\_i \mathbf{e}\_i \cdot \mathbf{e}\_j = \sum_{i=1}^k \alpha_i \delta_{ij} = \alpha_j.
\end{equation}
Thus by our earlier condition stated in (2), $\\{\mathbf{e}\_1, \mathbf{e}\_2, \ldots, \mathbf{e}\_k\\}$ is linearly independent.

We can always construct an orthonormal basis $\\{\mathbf{e}\_1, \mathbf{e}\_2, \ldots, \mathbf{e}\_n\\}$ in $E^n$ from any basis $\\{\mathbf{u}\_1, \mathbf{u}\_2, \ldots, \mathbf{u}\_k\\}$ via the Gram-Schmidt procedure. But we are interested in uniquely resolving any $\mathbf{v} \in \mathbf{E}^n$ on an orthonormal basis $\\{\mathbf{e}\_1, \mathbf{e}\_2, \ldots, \mathbf{e}\_n\\}$ as
\begin{equation}
    \sum_{i=1}^n v\_i \mathbf{e}\_i,
\end{equation}
with *components* $v\_i$ determined through the inner product of $\mathbf{v}$ and $\mathbf{e}\_i.$ In this case, $v\_i$ is the $i-$th *Cartesian component* of $\mathbf{v}$ relative to the orthonormal basis $\\{\mathbf{e}\_1, \mathbf{e}\_2, \ldots, \mathbf{e}\_n\\}$. Of course we can (and will) resolve $\mathbf{v}$ through other orthonormal bases, so it is important to realize that a vector is not equivalent to its components. Rather, the components are an expression of the vector dependent on the basis chosen to represent it. 

There are a lot of summations to be done in upcoming development that would be annoying and distracting to write out each time. Call it Einstein notation, index notation, or laziness, but to avoid algebraic cluttering and save us some sanity, we adopt the following convention
\begin{equation}
    \mathbf{v} = v\_i \mathbf{e}\_i.
\end{equation}
The understanding here is that we sum over the repeated index $i$ within its defined range, $i \in \\{1, \ldots, n\\}$ in the previous example. This *summation convention* is used on all the terms in an equation, meaning any expression separated by "$+$", "$-$", or "$=$" signs. A summed index (i.e. $i$ as in (14)) is called the *dummy index* since it can be relabeled arbitrarily without changing the meaning of the equation. For instance, we can rewrite (14) like this $\mathbf{v} = v\_j \mathbf{e}\_j$ and it reads exactly the same. The summation convention **only** applies to repeated indices for a given term, and an index can **only** be repeated once. If you have an index that appears more than twice in any term for a given equation, that's a clear indication that something went wrong. 

Let's take a look at an example with this in mind,
\begin{equation}
    \mathbf{v} \cdot \mathbf{e}\_j = v\_i \mathbf{e}\_i \cdot \mathbf{e}\_j = v\_i \delta\_{ij} = v\_j, \quad j = 1, \ldots, n.
\end{equation}
Here we implicitly summed over the repeated index by utilizing the property Kronecker delta for the final equality. It is important to distinguish the $j$ not as a repeated index, but a *free index* which cannot be relabeled as easily as the dummy index and has to match every term in an equation. The free index cannot have the same label as any other dummy index to preserve the original meaning of an equation. It doesn't really matter what you label as your free index, so long as you're consistent with the notation all throughout writing an equation, i.e. $v\_i \delta\_{ij},$ $v\_p \delta\_{pk},$ $v\_m \delta\_{mn}$ all mean the same thing.

As shown earlier, for any orthonormal basis $\\{\mathbf{e}\_i\\}$, $i = 1, \ldots, n$ in $E^n,$ the following holds
\begin{equation}
    \mathbf{v} = (\mathbf{v} \cdot \mathbf{e}\_i) \mathbf{e}\_i,
\end{equation} 
where $i$ is summed from $1$ to $n.$ Then, the component $v\_i,$ with $i \in \\{1, \ldots, n\\}$ fixed, is the projection of $\mathbf{v}$ onto the basis element $\\{\mathbf{e}\_i\\}.$

Consider the dot product between two vectors $\mathbf{u} \cdot \mathbf{v}$ such that $\mathbf{u} = u\_i \mathbf{e}\_i$ and $\mathbf{v} = v\_i \mathbf{e}\_i.$ Then,
\begin{equation}
    \mathbf{u} \cdot \mathbf{v} = \mathbf{u} \cdot (v\_i \mathbf{e}\_i) = \mathbf{u} \cdot \mathbf{e}\_i v\_i = u\_i v\_i (= u\_1 v\_1 + u\_2 v\_2 + \ldots + u\_n v\_n).
\end{equation}
Meaning we can compute the dot product of two vectors entirely from their components. We can alternatively compute this as,
\begin{equation}
     \mathbf{u} \cdot \mathbf{v} = (u\_i \mathbf{e}\_i) \cdot (v\_j \mathbf{e}\_j) = u\_i v\_j \mathbf{e}\_i \cdot \mathbf{e}\_j = u\_i v\_j \delta_{ij} = u\_i v\_i.
\end{equation}
Bear in mind that two different indices were selected to represent the vectors to distinguish them and as to follow the earlier rules established for summation convention. The components of a vector can be treated as constants as to pull them outside of the vector inner product operation for algebraic clarity. In this case, both the $i$ and $j$ index are repeated implying a double sum over the two indices, each ranging from $1$ to $n,$ with $n^2$ terms altogether. This certainly saves me from a great deal of headaches, but every student in mechanics should write out these summations explicitly both to build familiarity with the notation and as a rite of passage. 

{{< prev-next >}}
<p style="text-align: center;">
<a href="http://aaronmachuca.com/academia/notes/cmech/" target="_self">Table of Contents</a>
</p>