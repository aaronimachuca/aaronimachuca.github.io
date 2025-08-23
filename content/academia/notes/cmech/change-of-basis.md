+++
title = '1.5 Change of Basis'
date = 2025-08-13T14:18:53-07:00
draft = false
+++
## 1.5 Change of Basis
Recall the formula established in Section 1.3, $\mathbf{v} = (\mathbf{v} \cdot \mathbf{e}\_k) \mathbf{e}\_k$, and consider an orthonormal basis $\\{\mathbf{e}\_i^{\prime}\\}$ for $E^n.$ Then, it is possible to represent an arbitrary basis of vectors as,
\begin{equation}
    \mathbf{e}\_i = (\mathbf{e}\_i \cdot \mathbf{e}\_j^{\prime}) \mathbf{e}\_j^{\prime}.
\end{equation}
Now consider a vector $\mathbf{v} \in E^n$ with components $v\_i = \mathbf{v} \cdot \mathbf{e}\_i$ and $v^{\prime}\_i = \mathbf{v} \cdot \mathbf{e}\_i^{\prime}$ relative to the bases $\\{\mathbf{e}\_i\\}$ and $\\{\mathbf{e}\_i^{\prime}\\}$ respectively. We can represent this vector through either basis as,
\begin{equation}
    \mathbf{v} = v^{\prime}\_j \mathbf{e}\_j^{\prime} = v\_i \mathbf{e}\_i = v\_i(\mathbf{e}\_i \cdot \mathbf{e}^{\prime}\_j) \mathbf{e}^{\prime}\_j.
\end{equation}
Then, we can isolate the terms resolved on the $\\{\mathbf{e}^{\prime}\_j\\}$ basis like so,
\begin{equation}
    [v^{\prime}\_j - v\_i(\mathbf{e}\_i \cdot \mathbf{e}^{\prime}\_j)] \mathbf{e}^{\prime}\_j = \mathbf{0},
\end{equation}
and the linear independence of the basis elements establishes the following transformation formula,
\begin{equation}
    v^{\prime}\_j = v\_i a\_{ij}, \quad a\_{ij} = \mathbf{e}\_i \cdot \mathbf{e}^{\prime}\_j.
\end{equation}
Here, the components of the vector change when the basis changes, but the vector itself is invariant. The matrix $(a_{ij})$ is a rotation matrix that relates the two sets of basis elements.

We can repeat this procedure with $\\{\mathbf{e}\_i\\}$ and  $\\{\mathbf{e}\_i^{\prime}\\}$ interchanged to obtain the inverse of the transformation formula above. This yields,
\begin{equation}
    v\_i =  v^{\prime}\_j b\_{ji}, \quad b\_{ji} = \mathbf{e}^{\prime}\_j \cdot \mathbf{e}\_i,
\end{equation}
and by commutativity of the inner product we have, $b\_{ji} = \mathbf{e}^{\prime}\_j \cdot \mathbf{e}\_i = \mathbf{e}\_i \cdot \mathbf{e}^{\prime}\_j = a\_{ij}.$ This allows us to rewrite the transformation formulas as,
\begin{equation}
    v\_i =  v^{\prime}\_j b\_{ji} = b\_{ji} v^{\prime}\_j = a\_{ij} v^{\prime}\_j
\end{equation}
and
\begin{equation}
    v^{\prime}\_i = a\_{ji}v\_j.
\end{equation}
There are some subtleties at hand here that give insight to the unique properties of the rotation matrix, but we will discuss that at length in the coming sections on rotation and orthogonal tensors. 

{{< prev-next >}}
<p style="text-align: center;">
<a href="http://aaronmachuca.com/academia/notes/cmech/" target="_self">Table of Contents</a>
</p>