---
name: Wentzel
category: academic
layout: module
author: Beniamin Bogosel
authorURL: http://www.cmap.polytechnique.fr/~beniamin.bogosel/
---

# Wentzel

Computation of Steklov or Wentzell eigenvalues.

Uses radial representation for the shape in terms of Fourier coefficients.

Parametrization uses a vector of the form.

`vec = [a0, as, bs]` where `as` are coefficients of `cos` and `bs` coefficients of `sin`

## Variational form

$
\displaystyle{
  \int_{\Omega}{\nabla\mathbf{u}:\nabla\mathbf{v} + \beta}
  + \beta\int_{\partial\Omega}{\nabla_{\tau}\mathbf{u}:\nabla_{\tau}\mathbf{v}}
  = \lambda\int_{\Omega}{\mathbf{u}\codt\mathbf{v}}
}
$

## References

[B. Bogosel, The method of fundamental solutions applied to boundary eigenvalue problems, 2016, Journal of Computational and Applied Mathematics](https://www.researchgate.net/publication/282658142_The_method_of_fundamental_solutions_applied_to_boundary_eigenvalue_problems)