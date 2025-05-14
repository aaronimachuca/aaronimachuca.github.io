+++
title = 'Lid-Driven Cavity FSI'
date = 2025-05-03T09:56:24-07:00
draft = false
+++

{{< simrow src="https://d1eulwzybv7z2h.cloudfront.net/academia/lidcavityfsi/wfsi1.2.mp4" >}}

# Simulation Parameters

**Solid**  
$\rho_s = 1\ \frac{kg}{m^3}$  
$\lambda_s = 15$ Pa,\
 $\mu_s = 30$ Pa  

**Fluid**  
$\rho_f = 1\ \frac{kg}{m^3}$  
$\mu_f = 0.01\ \frac{N \cdot s}{m^3}$  

**Time Step**  
$\Delta t = 0.0025\ s$  

**Implicit Newmark Values**  
$\beta = 0.5$, $\gamma = 1$

**Mesh (4-Node Elem.)** \
Solid: (50x1), 0.4 x 0.004 \[m\],\
Fluid: (40x40), 1 x 1 \[m\] 


{{< /simrow >}}

{{< summary "About This Simulation" >}}
<p>
This fluid-structure interaction simulation was made as a part of my ME280B final project! The premise is as follows: consider a thin, soft, solid submerged in a 1x1[m] cavity filled with a viscous incompressible fluid. Then suppose the fluid is subject to a lid-driven cavity flow, such that the walls are subject to no-slip boundary conditions, i.e. $v_1 = v_2 = 0$, while a unit horizontal velocity is applied at the lid. The solid is non-linearly elastic and obeys the compressible neo-Hookean constitutive law, i.e. $\mathbf{T} = \frac{1}{J}\mu (\mathbf{B}-\mathbf{I}) + \lambda(J-1)\mathbf{I}$. Our goal is to simulate the interaction between the two bodies <em>after</em> the fluid is fully developed. To do this, we let the fluid flow develop for 2 seconds without the prescence of the solid, then insert the solid such that it's center is initially at the locations mentioned above. By employing the immersed boundary method, the motion of the solid of fully specified by the fluid with no-slip and non-penetration/separation conditions while the solid applies interaction forces on the fluid consistent with Cauchy's lemma. In essence, the fluid velocity will impose tractions on the solid, and the solid provides equal-and-opposite reaction forces on the fluid.
</p>

<p>
As indicated from the results above, this method works beautifully to simulate these fluid-structure interactions, but there are limitations to my current solver's capabilities. I will elaborate on these limiations when I'm not so tired.
</p>
{{< /summary  >}}

{{< summary "Algorithm" >}}
<p>
Coming soon TM
</p>
{{< /summary  >}}