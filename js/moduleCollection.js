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
  for (let i = 0; i < modulesList.children.length; i++) {
    const module = modulesList.children[i].children[0]
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
