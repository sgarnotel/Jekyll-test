categories = []

addToCategories = (item) => {
  addCategory(item)
  categories.push(item)
}

addCategory = (item) => {
  const label = document.createElement('label')
  label.className = 'light light-' + categories.length
  label.innerHTML = item
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.checked = true
  input.id = item
  input.onChange = function() { onCategoryChange(item, input.checked) }
  label.appendChild(input)
  
  categoriesDiv.appendChild(label)
}