function renderBreadcrumbs(selector,id, labels) {
  const parent = document.querySelector(selector)
  const breadcrumbsEl = document.createElement('ul')
  let html = ''

  for(let i = 0; i < labels.length; i++) {
    const href = i < labels.length - 1 ? 'href=""' : ''
    html += `<li><a ${href}>${labels[i]}</a></li>`
  }

  breadcrumbsEl.innerHTML = html
  breadcrumbsEl.className = 'breadcrumbs'
  breadcrumbsEl.id = id
  parent.append(breadcrumbsEl)
}

function addBreadCrumbItem(id, label) {
  let breadcrumb = document.getElementById(id)

  if(breadcrumb) {
    let breadcrumbsEl = document.createElement('li')
    breadcrumb.lastElementChild.lastElementChild.setAttribute('href', '#')
    breadcrumbsEl.innerHTML = `<a>${label}</a>`
    
    breadcrumb.append(breadcrumbsEl)
  }

}

function deleteBreadCrumbItem(id) {
  let breadcrumb = document.getElementById(id)
  breadcrumb.lastElementChild.remove()
}


