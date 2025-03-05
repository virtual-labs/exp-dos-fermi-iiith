## The Quantum Free Electron Model
In 1928, Sommerfield proposed the quantum free electron theory. This theory comes from applying the principles of Quantum Mechanics to the electron. According to this theory, valence electrons can move freely in a metal and are prevented from escaping the metal at its high potential boundaries.

This idea can be applied to valence electrons in the semiconductor as well. The energy of the electron(E) is related to its momentum(k) by the following equation

<div align="center">
<image src="images/1.png" height="50px" width="auto">
<span style="float: right;">(2.1)</span>
</div>

## Electrons enclosed in Potential Energy boundaries
For a pure metal conductor, the ends of a metal act like a finite potential well(see <a href="https://virtual-labs.github.io/exp-swe-solutions-iiith/">link</a>). For a crystal lattice the potential barrier(dispersion of energy) is periodic. The solution of the schrodinger equation is of the form -
<div align="center">
<image src="images/2.png" height="30px" width="auto">
<span style="float: right;">(2.2)</span>
</div>
Where uₖ(r+a) = uₖ(r) periodic potential barrier. This is also called the Bloch wave.

Because of the periodic nature dispersion of energy, only the energy between -pi/a and pi/a is analyzed as the function follows the same pattern for the rest of its values. Also note that just like in metals, quantum wells can be observed in semiconductors. The boundaries are, however, linear functions of x rather than a constant.

## Schrodinger Equation in a Periodic Lattice

The Schrodinger equation for a particle of mass m in the periodic potential V(r) may be written
<div align="center"><p>
<image src="images/3.png" height="50px" width="auto">
<span style="float: right;">(2.3)</span></p></div>

The periodic potential can be represented in fourier series as:

<div align="center"><p>
<image src="images/4.png" height="50px" width="auto">
<span style="float: right;">(2.4)</span></p></div>

where the "G" and "r" are the reciprocal lattice vectors.We are at liberty to set the origin of potential energy wherever we like as a convenience for later derivations we set the uniform background potential to be zero, i.e.

<div align="center"><p>
<image src="images/5.png" height="30px" width="auto">
<span style="float: right;">(2.5)</span></p></div>
We can write the wave function ψ as a sum of plane waves obeying the Born–von Karman boundary conditions,
<div align="center"><p>
<image src="images/6.png" height="60px" width="auto">
<span style="float: right;">(2.6)</span></p></div>

We now substitute the wave function (Equation 2.6) and the potential (Equation 2.4) into Schrodinger equation (Equation 2.3) to give - 

<div align="center"><p>
<image src="images/7.png" height="50px" width="auto"> 
<span style="float: right;">(2.7)</span></p></div>

The potential energy term can be rewritten as
<div align="center"><p>
<image src="images/8.png" height="50px" width="auto">
<span style="float: right;">(2.8)</span></p></div>

where the sum on the right-hand side is over all G and k. As the sum is overall possible values of G and k, it can be rewritten as
<div align="center"><p>
<image src="images/9.png" height="50px" width="auto">
<span style="float: right;">(2.9)</span></p></div>

Therefore the Schrodinger equation (Equation 2.7) becomes
<div align="center"><p>
<image src="images/10.png" height="50px" width="auto"> 
<span style="float: right;">(2.10)</span></p></div>

 As the Born-von Karman plane waves are orthogonal, the coefficients must satisfy:

<div align="center">
<image src="images/11.png" height="50px" width="auto">
<span style="float: right;">(2.11)</span></div>

We rewrite the wavevector <b>k</b> as <b>q - G'</b>, where <b>q</b> lies in the first Brillouin zone:
<div align="center"><p>
<image src="images/12.png" height="50px" width="auto">
<span style="float: right;">(2.12)</span></p></div>

By changing variables such that <b>G'' → G + G'</b>, the equation becomes:

<div align="center"><p>
<image src="images/13.png" height="50px" width="auto">
<span style="float: right;">(2.13)</span></p></div>

#### Bloch’s Theorem
For each distinct value of <b>q</b>, the wavefunction takes the form:

<div align="center"><p>
<image src="images/14.png" height="50px" width="auto">
<span style="float: right;">(2.14)</span></p></div>

This can be rewritten as:
<div align="center"><p>
<image src="images/15.png" height="50px" width="auto">
<span style="float: right;">(2.15)</span></p></div>


## Conduction Bands and Valence Bands
The energy vs momentum graphs of the conduction and valence bands are as follows
<img src="images/energy_momentum.png" style="width:400px;height:400px;" label="E-k Diagram>

Part of the solution is shown in figure above also, called E-k diagram. Y axis is electron energy (E) and x axis the momentum (k). The two bands (most important ones in Semiconductors) show the states where electrons exist. The lower band has lower energy band called the valence band and the top band contains the higher energy electrons and is called the conduction band. The various possible locations (E,k) are the available states. Between the two band is the forbidden zone which we call as Energy Band Gap. Lower energy electrons will gain energy (via externally applied heat, light, electric field etc.) and jump to higher band leaving behind vacancies called holes. All empty states are shown as circles (holes) and occupied states and filled holes.Highest energy level Valence Band is called Valance Band Energy Ev ad lowest energy level in conduction band is called the conduction band energy Ec.Difference between them is Band gap Eg. For Silicon this is 1.12 eV and 
Germanium it is 0.67 eV<br>

E-k diagram also gives in formation about the velocity (group velocity to be more specific) and mass of the particles. The slope of E
k diagram (dE/dk) gives the hbar*vg. The second derivative (curvature) of the E-k diagram is inversely proportional to mass 
(effective mass more specifically) <img src="images/energy_momentum.png" width="auto" height="40px">.


## Density of States
The density of states (DOS) of a system describes the number of allowed modes or states per unit energy range. These states are uniformly distributed across the momentum(k). Their distribution across energy, however, depends on the energy momentum function.

We know, energy as a function of momentum is

<div align="center"><p>
<image src="images/16.png" height="50px" width="auto">
<span style="float: right;">(2.16)</span></p></div>


We are considering the parabolic function because the electrons are concentrated in that minima and the maxima region. In a 1 dimensional structure, we can write a function D(E) such that it is equal to the number of particles in the “k” space per unit length.

<div align="center"><p>
<image src="images/17.png" height="50px" width="auto">
<span style="float: right;">(2.17)</span></p></div>

Here, D(E) is the density of states. The dispersion of E is

<div align="center"><p>
<image src="images/18.png" height="50px" width="auto">
<span style="float: right;">(2.18)</span></p></div>


Here, m* is the effective mass. Therefore,

<div align="center"><p>
<image src="images/19.png" height="50px" width="auto">
<span style="float: right;">(2.19)</span></p></div>


Since it is the same function for negative values of k, 

<div align="center"><p>
<image src="images/20.png" height="50px" width="auto">
<span style="float: right;">(2.20)</span></p></div>

## Fermi Level
The fermi function gives the probability of a state(if it exists) being occupied at equilibrium.
<div align="center"><p>
<image src="images/21.png" height="30px" width="auto">
<span style="float: right;">(2.21)</span></p></div>

The parameters of the function are, E<sub>f</sub> and T.

It also describes the electron density in the conduction band and the hole density in the valence band.
<div align="center"><p>
<image src="images/22.png" height="30px" width="auto">
<span style="float: right;">(2.22)</span></p></div>

The fermi level is the value of E<sub>f</sub> when the fermi function equates to ½, i.e.

States below the fermi level have a low probability of being empty and the states above the fermi level have a low probability of being filled.

<img src="images/fermi_plot.png" style="width:400px;height:300px;">
