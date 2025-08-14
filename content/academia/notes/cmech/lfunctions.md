+++
title = '1.4 Linear Functions'
date = 2025-08-11T20:03:05-07:00
draft = false
+++
## 1.4 Linear Functions
A recurring mathematical concept that comes up often in continuum theory is the notion of representing certain operations as scalar, vector, or tensor-valued functions. It is an elegant, concise, and *very* powerful tool in our arsenal to generalize concepts found in linear algebra and analysis without much preliminary legwork. Let's look at a simple example by considering $f(\mathbf{v}),$ a scalar valued function of vectors $\mathbf{v} \in E^n,$ i.e. the function takes inputs of vectors and returns a real number. Suppose $f(\mathbf{v})$ is linear such that,
\begin{equation}
    f(\alpha\_1 \mathbf{v}\_1 + \alpha\_2 \mathbf{v}\_2) = \alpha\_1 f(\mathbf{v}\_1) + \alpha\_2 f(\mathbf{v}\_2),
\end{equation}
$\forall$ $\mathbf{v}\_1, \mathbf{v}\_2 \in E^n$ and $\alpha\_1, \alpha\_2 \in \mathbb{R}.$ We want a general representation of such a function and look towards combining the equation above with $\mathbf{v} = v\_i \mathbf{e}\_i.$ This yields,
\begin{equation}
    f(\mathbf{v}) = f(v\_i \mathbf{e}\_i) = v\_i f(\mathbf{e}\_i).
\end{equation}
Here, $f(\mathbf{e}\_i)$ are the values of the function that act on fixed vector inputs. These values are therefore fixed constants independent of $\mathbf{v},$ and we may define it as $a\_i = f(\mathbf{e}\_i) \in \mathbb{R}, i = 1, \ldots, n.$ Then, $f(\mathbf{v}) = a\_i v\_i = \mathbf{a \cdot v},$ where $\mathbf{a} = a\_k \mathbf{e}\_k$ is a fixed vector that classifies the given linear function. This is a general representation of a linear scalar valued function defined on $E^n$ and thus takes the form,
\begin{equation}
    f(\mathbf{v}) = \mathbf{a \cdot v},
\end{equation}
with $\mathbf{a} \in E^n$ fixed. According to Steigmann this is also the "finite-dimensional form" of the *Riesz Representation Theorem* for linear functions. I'll be honest with you, that statement exceeds my knowledge pertaining to functional analysis so if you want more information about that, ask him. We will return to utilizing linear functions in the discussion of tensors soon enough, but you should otherwise keep a strong mental note of this concept as you progress through these notes.

{{< prev-next >}}
<p style="text-align: center;">
<a href="http://aaronmachuca.com/academia/notes/cmech/" target="_self">Table of Contents</a>
</p>

