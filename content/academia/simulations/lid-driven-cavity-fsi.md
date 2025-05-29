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
$\beta = 0.5$, &nbsp; $\gamma = 1$

**Mesh (4-Node Elem.)** \
Solid: (50x1), 0.4 x 0.004 \[m\],\
Fluid: (40x40), 1 x 1 \[m\] 


{{< /simrow >}}

{{< algorithm "(from Papadopoulos's notes)">}}
**Data:** Step‐size $\Delta t$, fluid and solid state at time $t_0$, final time $t_f$

$t = t_0 + \Delta t$;

**while** $t \leq t_n$: \
  &nbsp; Compute $f_s$ in the solid region; \
  &nbsp; Distribute $-f_s$ to the fluid mesh; \
  &nbsp; Solve weak form of $\text{div}\mathbf{T_f} + \rho_f \mathbf{b} - \mathbf{f_s} = \rho_f \mathbf{a}$; \
  &nbsp; Map fluid velocity $\rightarrow$ solid nodes; \
  &nbsp; Find stress $T_s$ in the solid; \
  &nbsp; $t \leftarrow t + \Delta t$; \
**end**
{{< /algorithm >}}

{{< summary "About This Simulation" >}}
<p>
This fluid-structure interaction simulation was made as a part of my ME280B final project! The premise is as follows: consider a thin, soft, solid submerged in a 1x1[m] cavity filled with a viscous incompressible fluid. Then suppose the fluid is subject to a lid-driven cavity flow, such that the walls are subject to no-slip boundary conditions, i.e. $v_1 = v_2 = 0$, while a unit horizontal velocity is applied at the lid. The solid is non-linearly elastic and obeys the compressible neo-Hookean constitutive law, i.e. $\mathbf{T} = \frac{1}{J}\mu (\mathbf{B}-\mathbf{I}) + \lambda(J-1)\mathbf{I}$. Our goal is to simulate the interaction between the two bodies <em>after</em> the fluid is fully developed. To do this, we let the fluid flow develop for 2 seconds without the presence of the solid, then insert the solid such that its center is initially at the locations listed above. By employing the immersed boundary method, the motion of the solid of fully specified by the fluid with no-slip and non-penetration/separation conditions while the solid applies interaction forces on the fluid consistent with Cauchy's lemma. In essence, the fluid velocity will impose tractions on the solid, and the solid provides equal-and-opposite reaction forces on the fluid. What may be apparent from the video is that the solid body in the simulation is extremely thin and effectively one-dimensional. This is because the code for this simulation does not involve ALE methods due to the difficulties in preserving the element connectivity arrays for general solid motions. To circumvent this issue, we utilize a staggered solution (shown in the algorithm above) to simplify the fluid-structure interaction problem for one-dimensional solids embedded in two-dimensional fluids. Meaning the solid is discretized with no geometric interference with the fluid mesh since it has zero (or virtually zero) area/volume.
</p>

<p>
While this method works beautifully for our purposes and provides an advantage in not needing to solve any equations to determine the motion of the solid (as it is purely kinetic), we run into immediately noticeable issues when the thickness of the solid is increased. Because the code for the solver does not account for geometric interference, the solid imposes large and inaccurate body forces on the fluid with odd deformations as it slips through the streamlines of the fluid flow. Beyond a certain thickness (0.014 for a 20x20 fluid mesh), the local fluid velocities become too large and break the code altogether. As there is no ALE implementation for this solver, if you place the center of the solid anywhere near the boundaries of the fluid, the code breaks once again as there is nothing in the code that accounts for contact between the fluid and the solid. If the $\beta$ value in the implicit Newmark parameter is too small (0.25 for instance), the solution treads towards an explicit solution and breaks down without a small enough time step. Finally, if the fluid mesh is too coarse, then you get inaccurate fluid velocities that impose incorrect tractions on the solid causing it to oscillate back and forth within the fluid flow.
</p>

<p>
Those are all the technical issues that can go wrong with this simulation, but how accurate to reality is it? The Reynolds number in the fluid solver is non-adjustable and fixed for low Reynolds number, meaning the usual turbulence effects you would see in an actual lid-driven cavity flow are not present. The presence of gravity within the fluid domain is also neglected but could be easily incorporated within the assembly of the global force vectors. The model implemented for the solid is for compressible neo-Hookean materials, so the body can't be too rigid or that will also break the code. Though, much like the gravitational forces, this can be easily adjusted with a different constitutive equation for the Piola stress in the assembly of the stress-divergence vector. There is also no fracture model incorporated in the model for the solid, so you won't ever see any plastic deformations or separation effects in the simulation. But it looks really cool anyway, right?
</p>
{{< /summary  >}}
