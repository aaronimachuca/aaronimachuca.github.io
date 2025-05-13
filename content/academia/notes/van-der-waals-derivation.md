+++
title = 'Van Der Waals Derivation'
date = 2025-05-03T18:44:43-07:00
draft = false
+++
# The Van der Waals Equation of State

*Notes and figures largely adapted from Schwabl's text on Statistical Mechanics*

These notes were written as a part of my statistical mechanics course (CE C235) final project report. They assume familiarity with fundamental concepts involving but not limited to: statistical ensembles, evaluating gaussian integrals, and obtaining thermodynamic quanities from partition functions. Ordinarily, a model for an ideal gas only involves the momenta of atoms and neglects particle interactions within the Hamiltonian. However, realistic models of gases are structured with potentials that define how particles can interact with one another.

Thus, in order to create a model for a classical real gas, we first need to surmise what the interaction potential between atoms will look like. To this end, consider a two-particle potential that is additively decomposed into a "hard-core" (H.C.) part, $v_{H.C.}(\mathbf{y})$ for $|\mathbf{y}| \leq \sigma$, where $\sigma$ is the hard-core radius, and an attractive part $w(\mathbf{y})\$. The total potential then looks like, \
\begin{equation}
    v(\mathbf{y}) = v_{H.C.}(\mathbf{y}) + w(\mathbf{y}).
\end{equation}
In this regard, we assume that the molecules have a kind of nearest neighbor potential that only accounts for short-range interactions. The term "hard-core" refers to the molecules repelling each other at short distances due to an impenetrable radius (much like colliding billiard balls) and are therefore not point-like. With this potential in mind, we can go about building a partition function for a canonical ensemble. Supposing that we have N particles in 3-dimensions, the partition function takes the form, \
\begin{equation}
    Z(T,V,N) = \frac{1}{\lambda^{3N}N!} \int \ldots\int e^{-\beta \sum_{i<j} v(\mathbf{x}_i-\mathbf{x}_j)} d^3x_1 \ldots d^3x_N,
\end{equation}
where $\lambda = \frac{h}{\sqrt{2\pi mkT}}$ results from integrating over the momenta and the normalization constant that appears upon integrating over the probability distribution. The $1/N!$ term stems from indistinguishability of the particles.

As a brief aside, the lambda term (also known as the thermal wavelength) comes from considering quantum effects, in particular, discrete energy states. It is specifically when the thermal energy is much larger than the energy spacing, i.e. $h^2/8mL^2 \ll kT$, that the energy spectrum reaches a continuum, and the distinction between quantum and classic considerations vanish. In effect, this results in $\Delta x \Delta v = \frac{h}{m}$, which is nothing but the uncertainty principle. Within the scope of my class, this was neglected with minimal effect as the mean values obtained from the respective statistical analysis would remain the same. 

Returning back to our partition function, even with our simplified nearest neighbor potential, integrating this partition function analytically is quite difficult. But there are further appropriate assumptions we can impose to carry out the calculation. We can first ignore the attractive interaction and only consider the hard-core potential, in which case, the partition function reduces to,

\begin{equation}
    Z(T,V,N) = \int \ldots\int e^{-\beta \sum_{i<j} v_{H.C.}(\mathbf{x}_{ij})} d^3x_1 \ldots d^3x_N \approx (V-V_0)^N
\end{equation}

This result can be justified as follows: if the hard-core radius of the molecule was 0, i.e. $\sigma = 0$, then the integral would simply evaluate to $V^N$, the result you obtain for an ideal gas. But since each molecule occupies its own volume, say $V_0$, then for $N$ particles, the total volume of the domain is adjusted to $(V-V_0)$ and thus the approximate integral evaluates to $(V-V_0)^N$. This is not exact, however, as the "free volume" of the domain depends on how the molecules are configured, as seen in the figure below. 

{{< images "https://d1eulwzybv7z2h.cloudfront.net/academia/vandwaals/hcmolecules.png" "80%" "Figure 1: Two configurations of three atoms in the same volume far apart and closely packed together, where spheres of radius $r_0$ are represented by the solid circles and spheres of radius $2r_0$ are represented by the dashed circles. In the first configuration, $V_0$ is larger than the second." >}}



Note, in reference to the figure above, that one can find the upper and lower bound for what $V_0$ is, which comes out to be $4\sqrt{2}Nr_0^3 \leq V_0 \leq \frac{32\pi}{3}Nr_0^3$. The true value of $V_0$, which will be determined later, lies between these extrema. After some immense staring, I still have NO idea how he came up with value for the lower bound. If anyone knows, please let me know, but I don't think it's too important to know beyond building an intuition for what to expect for the value of $V_0$.

Making use of equation (3), we can recast the original partition function (2) in this form, \
\begin{equation}
    Z(T,V,N) = \frac{(V-V_0)^N}{\lambda^{3N}N!} \frac{\int \ldots\int e^{-H.C.}e^{-\beta \sum_{i<j} w(\mathbf{x}_i-\mathbf{x}_j)} d^3x_1 \ldots d^3x_N}{\int \ldots\int e^{-H.C.} d^3x_1 \ldots d^3x_N},
\end{equation}

where H.C. refers to the sum of all contributions of the hard-core potential multiped by $\beta$ and we have effectively multiplied the equation by "1" by making use of the approximation we determined for the hard-core potential. The second fraction, then, is nothing more than the average of exp{$-\beta \sum_{i<j} w(\mathbf{x}_i-\mathbf{x}_j)$ } for a gas that *only* experiences hard-core interactions. 

In which case, we can further simplify this calculation by working backwards to understand what the average of the second exponential term in the partition function will evaluate to. To this end, let us consider potentials whose range extends beyond the hard-core radius $\sigma$ and the distance between particles. Then, the potential acting on j from other particles is, $\sum_{i \neq j} w(\mathbf{x}_i-\mathbf{x}_j) \approx (N-1)\int w(\mathbf{x})\frac{dx^3}{V}$. The integral here becomes the average of $w(\mathbf{x})$ and thus, we can evaluate the original sum as follows,

\begin{equation}
    \sum_{i<j} w(\mathbf{x}_i - \mathbf{x}_j) \equiv \frac{1}{2} \sum_i \sum\_{i \neq j} w(\mathbf{x}_i - \mathbf{x}_j) \approx \frac{1}{2}N(N-1) \overline{w} \approx \frac{1}{2}N^2 \overline{w}, 
\end{equation}

\begin{equation}
    \overline{w} = \frac{1}{V}\int w(\mathbf{x}) dx^3 \equiv -\frac{2a}{V}.
\end{equation}

The mathematics proceeding the evaluation of the average interaction potential is subtle, but fairly straightforward. The summation is rewritten by exploiting symmetry of the attractive potential so that you can sum over the entire matrix block and then only consider the dominating $N^2$ term. But without context, possibly the most confusing aspect is the evaluation of the average of $w(\mathbf{x})$ as $-\frac{2a}{V}$. This term comes from the second virial coefficient which will be discussed soon in relation to the thermodynamic quantities found from the partition function that follows, \
\begin{equation}
    Z(T,V,N) = \frac{(V-V_0)^N}{\lambda^{3N}N!}e^{-\frac{N(N-1)}{2}\frac{w}{kT}} =\frac{(V-V_0)^N}{\lambda^{3N}N!}e^{\frac{N^2a}{VkT}}.
\end{equation}
This is the resulting "average-potential approximation," that in effect, replaces the original attractive part of the potential with its average value. There is one further aside that Schwabl discusses by revisiting equation (4), specifically by utilizing a cumulant expansion on the interactive potential term. What is noted is that the higher the temperature is, the more dominant the $\overline{w}/kT$ term is.

Now, in making use of Stirling's approximation, i.e. $N! \approx N^Ne^{-N}\sqrt{2\pi N}$, we can obtain the free energy as per usual, \
\begin{equation}
    \psi = -\frac{\partial}{\partial \beta} lnZ = -kTN ln\frac{e(V-V_0)}{\lambda^3 N} - \frac{N^2 a}{V},
\end{equation}
to which the pressure can be easily found as, 

\begin{equation}
    P = -\left(\frac{\partial \psi}{\partial V}\right)_{T,N} = \frac{kTN}{V-V_0} - \frac{N^2a}{V^2},
\end{equation}

and the internal energy can also be found through the relation,

\begin{equation}
    E = -T^2\left(\frac{\partial}{\partial T} \frac{\psi}{T} \right)_{V,N} = \frac{3}{2} NkT - \frac{N^2a}{V}.
\end{equation}

Note the reduction in the internal energy compared to the ideal gas counterpart $E = \frac{3}{2}NkT$!

What we can do from here is introduce a kind of expansion known as the "virial expansion," on the pressure relation in terms of $1/V$ to determine what $V_0$ is. In effect, this is simply a power series expansion for the pressure in terms of the density $\rho = \overline{N}/V$. Yielding the expansion,

$$
P = kT\rho[1 + B(T)\rho + C(T)\rho^2 + \ldots],
$$

and the coefficient $\rho^n$ within the square brackets is what's known as the (n+1) virial coefficient. Under this light, the second virial coefficient is of particular importance as it determines the leading order correction to the equation of state from an ideal gas. From a qualitative perspective, it can be shown that the second virial coefficient $B(T)$ is,
$$
B(T) \approx -\frac{1}{2}[-\frac{4\pi}{3}\sigma^3 + 4\pi \int_{\sigma}^\infty r^2(-v(r))/kT dr] = b - \frac{a}{kT},
$$
where
$$
b = \frac{2\pi}{3}\sigma^3 = 4\frac{4\pi}{3}r_0^3
$$
denotes the "fourfold" molecular volume for hard spheres of radius $r_0$, $\sigma = 2r_0$ and
$$
a = -2\pi\int_{\sigma}^\infty r^2(-v(r))/kT dr = -\frac{1}{2}\int v(\mathbf{x}) \Theta(r-\sigma)dx^3.
$$
Now with this, the virial expansion of our pressure term is, \
\begin{equation}
    P = \frac{kTN}{V}[1+\frac{V_0}{V} - \frac{aN}{kTV} + \ldots] \equiv \frac{kTN}{V} [1+(b-\frac{a}{kT})\frac{N}{V}+\ldots].
\end{equation}

And thus, it is *actually easy* to see that $V_0 = Nb$. Altogether then, we find the relation, \
\begin{equation}
    \boxed{P = \frac{kT}{v-b} - \frac{a}{v^2}},
\end{equation}

where the term $v=V/N$ is introduced here as the specific volume. Thus, we have finally arrived at the Van der Waals equation of state for *real* gases. There are some interesting facts to note about this equation in relation to its ideal gas counterpart. Perhaps the most immediate in comparison to the ideal gas law, $P = kT/v$, the volume is replaced by the free volume $v-b$. Something we denoted earlier intuitively as the molecules within our model were not point particles, but rather were furnished with a hard-core radius. If the specific volume is equal to b, then the pressure would become infinite. This is yet another consequence of the hard-core potential model as the molecule is embedded with a repulsive potential in its structure. Additionally, the attractive potential now serves to reduce the pressure as per the term $-a/v^2$, which is another property you might intuitively expect from a real gas.

We now turn our attention to the contributions of the two terms of the Van der Waals equations to the pressure shapes for isotherms at low and high temperatures. The figure below depicts the family of Van der Waals isotherms. 

{{< images "https://d1eulwzybv7z2h.cloudfront.net/academia/vandwaals/isotherms.png" "80%" "Figure 2: Family of Van der Waals isotherms in dimensionless units relative to $P_c$ and $v_c$.">}}

For temperatures below $T_c$, the isotherms are s-shaped, and above which, they are monotonic. This corresponds to a critical isotherm found at $T_c$ for which the pressure has a point of inflection, i.e. $\frac{\partial P}{\partial V} = \frac{\partial^2 P}{\partial V^2} = 0$. Evaluating these derivatives for the Van der Waals equations leads to the conditions, $-\frac{kT}{(v-b)^2}+\frac{2a}{v^3} = 0$, and $\frac{kT}{(v-b)^3}-\frac{3a}{v^4}=0$. These result in the values, 

\begin{equation}
    v_c = 3b,  kT_c = \frac{8}{27}\frac{a}{b},  P_c = \frac{a}{27b^2}
\end{equation}

For the dimensionless ratio, $kT_c/P_c v_c$ is $8/3 = 2.\overline{6}$, the experimental value is supposedly larger, though I couldn't find much texts that cite these values specifically. 

Nevertheless, perhaps what is most astounding to me as a consequence of the Van der Waals equation is the means by which the model we had come up with serves to effectively describe a liquid-gas phase transition, without ever having mentioned that explicitly. Especially considering that the model only takes into account for pair-wise interactions between molecules. Consequently, for this reason, the Van der Waals equation is only approximately valid in terms of the reduction of the molecular volume b and approximating the attractive part of the potential by its average value. If we were to include longer-range interactions, the approximation improves for the attractive interaction potential. Furthermore, neglecting correlation effects further weaken the model, especially at critical points where there are high fluctuations in density from molecule clusters. In any case, the Van der Waals equations serves to provide a good qualitative description of condensation around a critical point. Numerous attempts have been made to rectify the issues found with the Van der Waals equation, among which Clausius suggested the following variant to the equation of state,

$$
P = \frac{kT}{v-a} - \frac{c}{T(v+b)^2}.
$$

By far, the most glaring issue in the Van der Waals equation is that it is not convex everywhere and thereby violating some stability requirements. This can be seen in the reconstruction of the free energy via the adjusted pressure and can be reconciled with through the Maxwell construction, but that's a discussion for another day.

# References
[1] Franz Schwabl. Statistical mechanics. Springer Science & Business Media, 2006.

[2] David T Limmer. Statistical mechanics and stochastic thermodynamics: A textbook on modern approaches in and out of equilibrium. Oxford University Press, 2024.
