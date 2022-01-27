function startCalc() {
  var start = prompt("Solve for? (Cube, Cylinder, Sphere, Quadratic) ")
  if (start === "Cube") {
    cube()
  }
  else if (start === "Cylinder") {
    cylinder()
  }
  else if (start === "Sphere") {
    sphere()
  }
  else if (start === "Quadratic") {
    quad()
  }
  else {
    console.log("Error, try again.")
    startCalc()
  }
}

function cube() {
  cuSide = prompt("Enter side length ")
  cuVolume = cuSide ** 3
  cuSurface = 6 * cuSide ** 2
  console.log("V: ", cuVolume.toFixed(2), "SA: ", cuSurface.toFixed(2))
}

function cylinder() {
  cyRadius = prompt("Enter Radius ")
  cyHeight = prompt("Enter Height ")
  cyVolume = Math.PI * cyRadius ** 2 * cyHeight
  cySurface = 2 * Math.PI * cyRadius * cyHeight + 2 * Math.PI * cyRadius ** 2
  console.log("V: ", cyVolume.toFixed(2), "SA: ", cySurface.toFixed(2))
}

function sphere() {
  spRadius = prompt("Enter Radius ")
  spVolume = 4 / 3 * Math.PI * spRadius ** 3
  spSurface = 4 * Math.PI * spRadius ** 2
  console.log("V: ", spVolume.toFixed(2), "SA: ", spSurface.toFixed(2))
}

function quad() {
  n1 = prompt("Enter A ")
  n2 = prompt("Enter B ")
  n3 = prompt("Enter C ")
 
  disc = n2 * n2 - 4 * n1 * n3

  if (disc > 0) {
    final1 = -n2 + Math.sqrt(disc) / (2 * n1)
    final2 = -n2 - Math.sqrt(disc) / (2 * n1)

    console.log("Solutions are ", final1, final2)
  }

  else if (disc == 0) {
    final1 = final2 = -b / (2 * n1);

    console.log("Solutions are ", final1, final2)
  }

}

startCalc()