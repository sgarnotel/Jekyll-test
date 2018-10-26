toogleCategories()

onCategoryChange = (category, checked) => {
  if (checked) {
    categories.push(category)
  } else {
    const index = categories.indexOf(category)
    if (index > -1)
      categories.splice(index, 1)
  }

  tooglecategories()
}

function toogleCategories() {
  for (let i = 0; i < menu.children.length; i++) {
    const module = menu.children[i]
    if (module.children[0].innerHTML.includes("Home")) {
      module.style.display = 'flex'
      continue
    }

    let category = module.children[1].innerHTML
    category = category.toLowerCase()

    let show = false
    for (let j = 0; j < categories.length; j++) {
      if (category.includes(categories[j].toLowerCase()))
        show = true
    }

    if (show)
      module.style.display = 'flex'
    else
      module.style.display = 'none'
  }
}
