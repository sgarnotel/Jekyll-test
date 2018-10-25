toogleCollections()

onCollectionChange = (collection, checked) => {
  if (checked) {
    collections.push(collection)
  } else {
    const index = collections.indexOf(collection)
    if (index > -1)
      collections.splice(index, 1)
  }

  toogleCollections()
}

function toogleCollections() {
  for (let i = 0; i < menu.children.length; i++) {
    const module = menu.children[i]
    if (module.children[0].innerHTML.includes("Home")) {
      module.style.display = 'flex'
      continue
    }

    let category = module.children[1].innerHTML
    category = category.toLowerCase()

    let show = false
    for (let j = 0; j < collections.length; j++) {
      if (category.includes(collections[j].toLowerCase()))
        show = true
    }

    if (show)
      module.style.display = 'flex'
    else
      module.style.display = 'none'
  }
}
