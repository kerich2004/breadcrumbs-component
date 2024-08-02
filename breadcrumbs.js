function renderBreadcrumbs(selector, labels) {
  const parent = document.querySelector(selector)
  const breadcrumbsEl = document.createElement('ul')
  let html = ''

  for(let i = 0; i < labels.length; i++) {
    const href = i < labels.length - 1 ? 'href=""' : ''
    html += `<li><a ${href}>${labels[i]}</a></li>`
  }

  breadcrumbsEl.innerHTML = html
  breadcrumbsEl.className = 'breadcrumbs'
  // breadcrumbsEl.lastElementChild.children[0].removeAttribute('href')
  parent.append(breadcrumbsEl)
}