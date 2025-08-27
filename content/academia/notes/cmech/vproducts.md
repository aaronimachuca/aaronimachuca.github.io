---
title: "1.6 Vector Products"
date: 2025-08-24T18:59:59-07:00
draft: true
---
## 1.6 Vector Products
From this point on, our focus will primarily be centered around the three-dimensional Euclidean space $E^3$ for its relevance and simplicity. The last vector operation we have yet to discuss, which reduces to a tractable concept overview in the space of $E^3$, is the *vector product* or the *cross product*. This is equivalent to the *exterior product* or *wedge product* defined in the Euclidean space $E^n$ for an arbitrary $n$. Then, the vector product $\mathbf{u} \times \mathbf{v} \in E^3$ of two vectors is defined such that the following properties hold $\forall$ $\mathbf{u}, \mathbf{v}, \mathbf{w} \in E^3$ and $\alpha, \beta \in \mathbb{R}$,

<ol type="a" style="list-style-type: lower-alpha;">
  <li> $\mathbf{u} \times \mathbf{v} = -\mathbf{v} \times \mathbf{u}$ (anti-commutativity),</li>
  <li> $\left| \mathbf{u} \times \mathbf{v} \right| = \left| \mathbf{u} \right| \left| \mathbf{v} \right| \sin \theta$, ($\theta$ as in $\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\left| \mathbf{u} \right| \left| \mathbf{v} \right|}$),</li>
  <li>$(\alpha \mathbf{u} + \beta \mathbf{v}) \times \mathbf{w} = \alpha \mathbf{u} \times \mathbf{w} + \beta \mathbf{v} \times \mathbf{w}$,</li>
  <li>$\mathbf{u} \cdot \mathbf{v} \times \mathbf{w} = \mathbf{v} \cdot \mathbf{w} \times \mathbf{u} = \mathbf{w} \cdot \mathbf{u} \times \mathbf{v} = [\mathbf{u}, \mathbf{v}, \mathbf{w}] =  [\mathbf{v}, \mathbf{w}, \mathbf{u}] =  [\mathbf{w}, \mathbf{u}, \mathbf{v}]$ (the scalar triple product or box product).</li> 
</ol>

We can easily deduce from property (a) that $\mathbf{u} \times \mathbf{u} = \mathbf{0}$, and likewise from properties (a) and (d) we can see that $[\mathbf{u}, \mathbf{u}, \mathbf{v}] = [\mathbf{v}, \mathbf{u}, \mathbf{v}] = 0,$ meaning that the vector $\mathbf{u} \times \mathbf{v}$ is orthogonal to both $\mathbf{u}$ and $\mathbf{v}$. Hence, $\mathbf{u} \times \mathbf{v}$ is normal to the plane formed by $\mathbf{u}$ and $\mathbf{v}$

We can show that the box product is linear in each argument by forming an inner product $(\alpha \mathbf{a} + \beta \mathbf{b}) \cdot \mathbf{e}$, such that $\mathbf{e} = \mathbf{c} \times \mathbf{d}$. Then,
\begin{equation}
    [\alpha \mathbf{a} + \beta \mathbf{b}, \mathbf{c}, \mathbf{d}] = (\alpha \mathbf{a} + \beta \mathbf{b}) \cdot \mathbf{e} = \alpha [\mathbf{a}, \mathbf{c}, \mathbf{d}] + \beta[\mathbf{b}, \mathbf{c}, \mathbf{d}],
\end{equation}
and this can be repeated to show linearity for the second and third argument. Although one can freely cycle through the arguments of the box product (as in property (d)), interchanging two of the arguments will reverse the sign of the box product. That is, $[\mathbf{u}, \mathbf{v}, \mathbf{w}] = \mathbf{u} \cdot \mathbf{v} \times \mathbf{w} = -\mathbf{u} \cdot \mathbf{w} \times \mathbf{v} = -[\mathbf{u}, \mathbf{w}, \mathbf{v}]$, due to the anti-commutativity of the vector product. 

In reference to property (d), we say that an orthonormal basis for $E^3 \\{\mathbf{e}\_1, \mathbf{e}\_2, \mathbf{e}\_3\\}$ is *right-handed* if $[\mathbf{e}\_1, \mathbf{e}\_2, \mathbf{e}\_3] = 1$. This necessarily implies that $\mathbf{e}\_1 \times \mathbf{e}\_2 = \mathbf{e}\_3$, $\mathbf{e}\_2 \times \mathbf{e}\_3 = \mathbf{e\_1}$, and $\mathbf{e}\_3 \times \mathbf{e}\_1 = \mathbf{e\_2}$. Now, let us define the three-index object as,
\begin{equation}
    e\_{ijk} = \mathbf{e}\_i \cdot (\mathbf{e}\_j \times \mathbf{e}\_k) = [\mathbf{e}\_i, \mathbf{e}\_j, \mathbf{e}\_k],
\end{equation}
where $e\_{ijk}$ is called the *unit alternator*, or the *permutation symbol*, or more commonly the *Levi-Civita symbol*. From our definition, it follows that
\begin{equation}
e\_{ijk} = 
\begin{cases}
+1, \enspace \text{if} \enspace (i,j,k) = (1,2,3), (2,3,1), (3,1,2)\\\
-1, \enspace \text{if} \enspace (i,j,k) = (2,1,3), (1,3,2), (3,2,1) \\\
 0, \enspace \text{otherwise} . 
\end{cases}
\end{equation}
Notice that the permutation symbol satisfies the expected cyclic property $e\_{ijk} = e\_{jki} = e\_{kij}$, as well as the property $e\_{ijk} = -e\_{jik} = -e\_{ikj} = -e\_{kji}$. Additionally, we can invoke the formula from Section 1.3, $\mathbf{v} = (\mathbf{v} \cdot \mathbf{e}\_k) \mathbf{e}\_k$, along with the definition of $e\_{ijk}$ to obtain the following relation,
\begin{equation}
    \mathbf{e}\_j \times \mathbf{e}\_k = (\mathbf{e}\_i \cdot \mathbf{e}\_j \times \mathbf{e}\_k) \mathbf{e}\_i = e\_{ijk} \mathbf{e}\_i = e\_{jki} \mathbf{e}\_i = e\_{kij} \mathbf{e}\_i.
\end{equation}
There are two free indices $j$ and $k$ and one dummy index $i$, all ranging from 1 to 3 in the term above. This nets nine equations for each possible free index pair with three terms on the right-hand side of the equation(s). 

Suppose we want to compute the components of a vector $\mathbf{c} = \mathbf{a} \times \mathbf{b}$ in terms of the components of $\mathbf{a}$ and $\mathbf{b}$. Then, appealing to property (c) and carefully assigning indices to the component form of the equation,
\begin{equation}
    \mathbf{c} = a\_i \mathbf{e}\_i \times b\_j \mathbf{e}\_j = a\_i b\_j \mathbf{e}\_i \times \mathbf{e}\_j = a\_i b\_j e\_{ijk} \mathbf{e}\_k.
\end{equation}
Since all the indices are repeated, we sum over $i$, $j$, $k$ from 1 to 3 and net 27 total terms on the right-hand side. Then, we can write $\mathbf{c} = c\_k \mathbf{e}\_k$ to get,
\begin{equation}
    (c\_k - e\_{ijk}a\_ib\_j) \mathbf{e}\_k = \mathbf{0},
\end{equation}
and due to linear independence of the basis elements, we obtain
\begin{equation}
    c\_k = e\_{ijk} a\_i b\_j.
\end{equation}
Here, the repeated indices imply a double sum on $i$ and $j$ for each choice of $k \in \\{1,2,3\\}$, and $c\_k$ represents three equations with nine terms on the right-hand side. With this relation, we have an alternative way to compute the inner product $\mathbf{c} \cdot \mathbf{d}$ through the box product $[\mathbf{a}, \mathbf{b}, \mathbf{d}]$ purely in terms of their components,
\begin{equation}
    [\mathbf{a}, \mathbf{b}, \mathbf{d}] = \mathbf{a} \times \mathbf{b} \cdot \mathbf{d} = \mathbf{c} \cdot \mathbf{d} = c\_k d\_k = e\_{ijk} a\_i b\_j d\_k,
\end{equation}
where again, the right-hand side has 27 terms when written out in full.

Although we say that $\mathbf{c}$ or $[\mathbf{a}, \mathbf{b}, \mathbf{d}]$ has 27 terms, in reality you won't have to compute all of them as there are only a select number of nonzero entries of $e\_{ijk}$. The permutation symbol also allows for compact expressions to compute the determinant of $3 \times 3$ matrices. Consider a $3 \times 3$ matrix $b\_{ij}$ and let $B = det(b\_{ij})$, then,
\begin{equation}
    B = 
    \begin{vmatrix}
    b\_{11} & b\_{12} & b\_{13} \\\
    b\_{21} & b\_{22} & b\_{23} \\\
    b\_{31} & b\_{32} & b\_{33}
    \end{vmatrix}
    = e\_{ijk} b\_{i1} b\_{j2} b\_{k3}.
\end{equation}
While this expression may look unfamiliar at first, it is identical to the component-wise expression for that of a box product. This is because the determinant of a $3 \times 3$ matrix can be expressed exactly as the scalar triple product of three vectors whose components form such a matrix. Also, it is fairly easy to verify that $b\_{ij}$ and its transpose, i.e. $(b\_{ij})^T = b\_{ji}$, have the same determinant so that $B = e\_{ijk} b\_{1i} b\_{2j} b\_{3k} = e\_{ijk} b\_{i1}^T b\_{2j}^T b\_{k3}^T$. 

Observe that the equation for $B = det(b\_{ij})$ is equivalent to,
\begin{equation}
    e\_{123}B = e\_{ijk} b\_{i1} b\_{j2} b\_{k3},
\end{equation}
which provides insight that this equation is a special case of the relation,
\begin{equation}
    e\_{mnp}B = e\_{ijk} b\_{im} b\_{jn} b\_{kp} = 
    \begin{vmatrix} 
    b\_{1m} & b\_{1n} & b\_{1p} \\\
    b\_{2m} & b\_{2n} & b\_{2p} \\\
    b\_{3m} & b\_{3n} & b\_{3p} 
    \end{vmatrix}.
\end{equation}
You can painstakingly confirm this for yourself by inputting various values of $e\_{mnp}$ and find that the right-hand side equates to $B, -B, $ or $0$. The upshot is that this relation in itself is a special case of the general relation,
\begin{equation}
    e\_{ijk}e\_{mnp}B = 
    \begin{vmatrix}
    b\_{im} & b\_{in} & b\_{ip} \\\
    b\_{jm} & b\_{jn} & b\_{jp} \\\
    b\_{km} & b\_{kn} & b\_{kp} 
    \end{vmatrix}.
\end{equation}
The following algebraic trickery (as with many aspects of these notes) comes straight to you from the mastermind Steigmann himself. Let's suppose that $b\_{ij} =  \delta\_{ij}$, the Kronecker delta, so that $b\_{ij}$ is the identity matrix with determinant $B=1$. Then our expression becomes,
\begin{equation}
    e\_{ijk}e\_{mnp} = 
    \begin{vmatrix} 
    \delta\_{im} & \delta\_{in} & \delta\_{ip} \\\
    \delta\_{jm} & \delta\_{jn} & \delta\_{jp} \\\
    \delta\_{km} & \delta\_{kn} & \delta\_{kp} 
    \end{vmatrix},
\end{equation}
and expanding the determinant by the third row yields
\begin{equation}
    \delta\_{km}(\delta\_{in}\delta\_{jp} - \delta\_{jn}\delta\_{ip}) - \delta\_{kn}(\delta\_{im}\delta\_{jp} - \delta\_{jm}\delta\_{ip}) + \delta\_{kp}(\delta\_{im}\delta\_{jn} - \delta\_{jm}\delta\_{in}).
\end{equation}
Now set $p = k$ to sum on $k$ and use properties of the Kronecker delta to obtain the important $e-\delta$ *identity*,
\begin{equation}
    e\_{ijk}e\_{mnk} = \delta\_{im}\delta\_{jn}  - \delta\_{in}\delta\_{jm}.
\end{equation}
Further, we can set $n = j$ to sum again and obtain the identity,
\begin{equation}
    e\_{ijk}e\_{mjk} = 3\delta\_{im}  - \delta\_{ij}\delta\_{jm} = 2\delta\_{im},
\end{equation}
then, setting $m = i$,
\begin{equation}
    e\_{ijk} e\_{ijk} = 2\delta\_{ii} = 6,
\end{equation}
finally altogether, we can rewrite the relation for $e\_{mnp}B$ to get,
\begin{equation}
    B = \frac{1}{6} e\_{ijk} e\_{mnp} b\_{im} b\_{jn} b\_{kp}.
\end{equation}

{{< prev-next >}}
<p style="text-align: center;">
<a href="http://aaronmachuca.com/academia/notes/cmech/" target="_self">Table of Contents</a>
</p>