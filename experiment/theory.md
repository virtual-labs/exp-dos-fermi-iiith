## The Quantum Free Electron Model
In 1928, Sommerfield proposed the quantum free electron theory. This theory comes from applying the principles of Quantum Mechanics to the electron. According to this theory, valence electrons can move freely in a metal and are prevented from escaping the metal at its high potential boundaries.

This idea can be applied to valence electrons in the semiconductor as well. The energy of the electron(E) is related to its momentum(k) by the following equation

<div align="center">
E = E₀ + (h² * k²) / (2 * m₀)
<span style="float: right;">(2.1)</span>
</div>

## Electrons enclosed in Potential Energy boundaries
For a pure metal conductor, the ends of a metal act like a finite potential well(see <a href="https://virtual-labs.github.io/exp-swe-solutions-iiith/">link</a>). For a crystal lattice the potential barrier(dispersion of energy) is periodic. The solution of the schrodinger equation is of the form -
<div align="center">
ψ(x) = uₖ(r) * e<sup>(ikr)</sup>
<span style="float: right;">(2.2)</span>
</div>
Where uₖ(r+a) = uₖ(r) periodic potential barrier. This is also called the Bloch wave.

Because of the periodic nature dispersion of energy, only the energy between -pi/a and pi/a is analyzed as the function follows the same pattern for the rest of its values. Also note that just like in metals, quantum wells can be observed in semiconductors. The boundaries are, however, linear functions of x rather than a constant.

## Schrodinger Equation in a Periodic Lattice

The Schrodinger equation for a particle of mass m in the periodic potential V(r) may be written
<div align="center"><p>H&#968; = { -&#8463;<sup>2</sup> &#8711;<sup>2</sup> / 2m + V(r) } &#968; = E&#968; <span style="float: right;">(2.3)</span></p></div>

The periodic potential can be represented in fourier series as:

<div align="center"><p>V(r) = &sum;<sub>&#x1D40B;</sub> V<sub>&#x1D40B;</sub> e<sup>i &#x1D40B; &middot; r</sup> <span style="float: right;">(2.4)</span></p></div>

where the &#x1D40B; are the reciprocal lattice vectors.We are at liberty to set the origin of potential energy wherever we like as a convenience for later derivations we set the uniform background potential to be zero, i.e.

<div align="center"><p>V<sub>0</sub> &#8801; 0 <span style="float: right;">(2.5)</span></p></div>
We can write the wave function ψ as a sum of plane waves obeying the Born–von Karman boundary conditions,
<div align="center"><p>&#968;(r) = &sum;<sub>&#x1D458;</sub> C<sub>&#x1D458;</sub> e<sup>i &#x1D458; &middot; r</sup> <span style="float: right;">(2.6)</span></p></div>

This ensures that ψ also obeys the Born-von Karman boundary conditions.
We now substitute the wave function (Equation 2.6) and the potential (Equation 2.4) into Schrodinger equation (Equation 2.3) to give - 

<div align="center"><p>&sum;<sub>&#x1D458;</sub> (&#8463;<sup>2</sup> k<sup>2</sup> / 2m) C<sub>&#x1D458;</sub> e<sup>i &#x1D458; &middot; r</sup> + {&sum;<sub>&#x1D40B;</sub> V<sub>&#x1D40B;</sub> e<sup>i &#x1D40B; &middot; r</sup>} {&sum;<sub>&#x1D458;</sub> C<sub>&#x1D458;</sub> e<sup>i &#x1D458; &middot; r</sup>} =
E &sum;<sub>&#x1D458;</sub> C<sub>&#x1D458;</sub> e<sup>i &#x1D458; &middot; r</sup> <span style="float: right;">(2.7)</span></p></div>

The potential energy term can be rewritten as
<div align="center"><p>V(r)&#968; = &sum;<sub>&#x1D40B;, &#x1D458;</sub> V<sub>&#x1D40B;</sub> C<sub>&#x1D458;</sub> e<sup>i (&#x1D40B; + &#x1D458;) &middot; r</sup> <span style="float: right;">(2.8)</span></p></div>

where the sum on the right-hand side is over all G and k. As the sum is overall possible values of G and k, it can be rewritten as
<div align="center"><p>V(r)&#968; = &sum;<sub>&#x1D40B;, &#x1D458;</sub> V<sub>&#x1D40B;</sub> C<sub>&#x1D458; - &#x1D40B;</sub> e<sup>i &#x1D458; &middot; r</sup> <span style="float: right;">(2.9)</span></p></div>

Therefore the Schrodinger equation (Equation 2.7) becomes
<div align="center"><p>&sum;<sub>&#x1D458;</sub> e<sup>i &#x1D458; &middot; r</sup> { (&#8463;<sup>2</sup> k<sup>2</sup> / 2m) - E } C<sub>&#x1D458;</sub> + 
    &sum;<sub>&#x1D40B;</sub> V<sub>&#x1D40B;</sub> C<sub>&#x1D458; - &#x1D40B;</sub> = 0 <span style="float: right;">(2.10)</span></p></div>

 As the Born-von Karman plane waves are orthogonal, the coefficients must satisfy:

<div align="center">(&#8463;<sup>2</sup> k<sup>2</sup> / 2m - E) C<sub>k</sub> + &sum;<sub>&#x1D40B;</sub> V<sub>&#x1D40B;</sub> C<sub>k - &#x1D40B;</sub> = 0
<span style="float: right;">(2.11)</span></div>

We rewrite the wavevector <b>k</b> as <b>q - G'</b>, where <b>q</b> lies in the first Brillouin zone:
<div align="center"><p>(&#8463;<sup>2</sup> (q - &#x1D40B;')<sup>2</sup> / 2m - E) C<sub>q - &#x1D40B;'</sub> + &sum;<sub>&#x1D40B;</sub> V<sub>&#x1D40B;</sub> C<sub>q - &#x1D40B;' - &#x1D40B;</sub> = 0<span style="float: right;">(2.2)</span></p></div>

By changing variables such that <b>&#x1D40B;'' → &#x1D40B; + &#x1D40B;'</b>, the equation becomes:

<div align="center"><p>(&#8463;<sup>2</sup> (q - &#x1D40B;')<sup>2</sup> / 2m - E) C<sub>q - &#x1D40B;'</sub> + &sum;<sub>&#x1D40B;''</sub> V<sub>&#x1D40B;'' - &#x1D40B;'</sub> C<sub>q - &#x1D40B;''</sub> = 0<span style="float: right;">(2.13)</span></p></div>

#### Bloch’s Theorem
For each distinct value of <b>q</b>, the wavefunction takes the form:

<div align="center"><p>&#968;<sub>q</sub>(r) = &sum;<sub>&#x1D40B;</sub> C<sub>q - &#x1D40B;</sub> e<sup>i (q - &#x1D40B;) &middot; r</sup></span>
<span style="float: right;">(2.14)</span></p></div>

This can be rewritten as:
<div align="center"><p>&#968;<sub>q</sub>(r) = e<sup>i q &middot; r</sup> &sum;<sub>&#x1D40B;</sub> C<sub>q - &#x1D40B;</sub> e<sup>-i &#x1D40B; &middot; r</sup> = e<sup>i q &middot; r</sup> u<sub>q</sub>(r)<span style="float: right;">(2.15)</span></p></div>


## Conduction Bands and Valence Bands
The energy vs momentum graphs of the conduction and valence bands are as follows
<img src="images/energy_momentum.png" style="width:400px;height:400px;">

At the minima of the conduction band plot and at the maxima of the plot of valence bands, the electrons occur at highest probability. So these functions can be approximated as a parabolic function. There are bands above and below the conduction and valence bands but we will not take them into consideration. 

The curvature of the parabola that the function is approximated as is the effective mass.
One way to think about it is, electrons can be treated as semi-classical particles where quantum mechanics influences just the effective mass.

## Density of States
The density of states (DOS) of a system describes the number of allowed modes or states per unit energy range. These states are uniformly distributed across the momentum(k). Their distribution across energy, however, depends on the energy momentum function.

We know, energy as a function of momentum is

<div align="center"><p>E(k) = E<sub>v</sub> + <sup>&#8463;<sup>2</sup>k<sup>2</sup></sup>&frasl;<sub>2m<sub>o</sub></sub><span style="float: right;">(2.16)</span></p></div>


We are considering the parabolic function because the electrons are concentrated in that minima and the maxima region. In a 1 dimensional structure, we can write a function D(E) such that it is equal to the number of particles in the “k” space per unit length.

<div align="center"><p>D(E) dE = <sup>N<sub>k</sub> dk</sup>&frasl;<sub>L</sub><span style="float: right;">(2.17)</span></p></div>

Here, D(E) is the density of states. The dispersion of E is

<div align="center"><p>E(k) = &epsilon;<sub>0</sub> + <sup>&#8463;<sup>2</sup>k<sup>2</sup></sup>&frasl;<sub>2m<sup>*</sup></sub><span style="float: right;">(2.18)</span></p></div>


Here, m* is the effective mass. Therefore,

<div align="center"><p>D(E) dE = <sup>1</sup>&frasl;<sub>&pi; &#8463;</sub> &radic;<sup>m<sup>*</sup></sup>&frasl;<sub>2(E - E<sub>0</sub>)</sub> dE<span style="float: right;">(2.19)</span></p></div>


Since it is the same function for negative values of k, 

<div align="center"><p>D(E) dE = <sup>2</sup>&frasl;<sub>&pi; &#8463;</sub> &radic;<sup>m<sup>*</sup></sup>&frasl;<sub>2(E - E<sub>0</sub>)</sub> dE<span style="float: right;">(2.20)</span></p></div>

## Fermi Level
The fermi function gives the probability of a state(if it exists) being occupied at equilibrium.
<div align="center"><p>f<sub>o</sub>(E) = <sup>1</sup>&frasl;<sub>1 + e<sup>(E + E<sub>f</sub>)/k<sub>B</sub>T</sup></sub><span style="float: right;">(2.21)</span></p></div>

The parameters of the function are, E<sub>f</sub> and T.

It also describes the electron density in the conduction band and the hole density in the valence band.
<div align="center"><p>f<sub>o</sub>(E) = <sup>1</sup>&frasl;<sub>2</sub><span style="float: right;">(2.22)</span></p></div>

The fermi level is the value of E<sub>f</sub> when the fermi function equates to ½, i.e.

States below the fermi level have a low probability of being empty and the states above the fermi level have a low probability of being filled.

<img src="images/fermi_plot.png" style="width:400px;height:300px;">
