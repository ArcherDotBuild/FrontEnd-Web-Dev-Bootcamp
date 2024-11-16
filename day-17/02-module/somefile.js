export let publicVariable = 10
let privateVariable = 20

export let exportOne = 1
export let exportTwo = 2

// Named Exports
export function usefulFunction() {
  console.log('usefulFunction')
}

// Export as You Define
function exportAsYouDefine() {
  console.log('exportAsYouDefine')
}
export { exportAsYouDefine }

// Default Export
function defaultExport() {
  console.log('defaultExport')
}

export default defaultExport

// rename import
export function renameImport() {
  console.log('renameImport')
}