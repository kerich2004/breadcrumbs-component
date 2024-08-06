renderBreadcrumbs('header', 'firstCrumb', ['Home', 'Products', 'Apps', 'AI'])

renderBreadcrumbs('main', 'mainBreadcrumb', ['Home', 'Products', 'Apps', 'AI'])

setTimeout(() => {
  addBreadCrumbItem('firstCrumb','chatgpt')
  addBreadCrumbItem('mainBreadcrumb','chatgpt')
}, 1000)

setTimeout(() => {
  deleteBreadCrumbItem('mainBreadcrumb')
}, 2000)