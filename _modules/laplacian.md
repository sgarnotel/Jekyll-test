---
name: Laplacian
category: academic
layout: module
author: Simon Garnotel
authorURL: https://github.com/sgarnotel
---

# Laplacian

Algorithms for solving the 2D and 3D Laplace equation

## Problem

Solve:

$
-\displaystyle{\Delta\mathbf{u} = f}
$

## Variational form

$
\displaystyle{\int_{\Omega}{\nabla \mathbf{u} \cdot \nabla \mathbf{v}} - \int_{\Omega}{\mathbf{f} \cdot \mathbf{v}} = 0}
$


## Algorithms

### 2D

{% highlight freefem %}
// Parameters
func f = 1.;

// Mesh
int nn = 25;	//Mesh quality
mesh Th = square(nn, nn);

// Fespace
func Pk = P2;
fespace Uh(Th, Pk);
Uh u;

// Macro
macro grad(A) [dx(A), dy(A)] //

// Problem
varf vLaplacian (u, uh)
	= int2d(Th)(
		  grad(u)' * grad(uh)
	)
	- int2d(Th)(
		  f * uh
	)
	+ on(1, 2, 3, 4, u=0)
	;
matrix<real> Laplacian = vLaplacian(Uh, Uh, solver=sparsesolver);
real[int] LaplacianBoundary = vLaplacian(0, Uh);
u[] = Laplacian^-1 * LaplacianBoundary;

// Plot
plot(u, nbiso=30, fill=true, value=true, cmm="A");
{% endhighlight %}

### 3D

{% highlight freefem %}
include "cube.idp"

// Parameters
func f = 1.;

// Mesh
int nn = 10;
mesh3 Th = cube(nn, nn, nn);

// Fespace
func Pk = P2;
fespace Uh(Th, Pk);
Uh u;

// Macro
macro grad(A) [dx(A), dy(A), dz(A)] //

// Problem
varf vLaplacian (u, uh)
	= int3d(Th)(
		  grad(u)' * grad(uh)
	)
	- int3d(Th)(
		  f * uh
	)
	+ on(1, 2, 3, 4, 5, 6, u=0)
	;
matrix<real> Laplacian = vLaplacian(Uh, Uh, solver=sparsesolver);
real[int] LaplacianBoundary = vLaplacian(0, Uh);
u[] = Laplacian^-1 * LaplacianBoundary;

// Plot
plot(u, nbiso=30, fill=true, value=true, cmm="A");
{% endhighlight %}
