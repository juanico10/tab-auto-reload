const autoReloadTimeoutSeconds = 30
let reloadTimer = null
let lastReloaded = null

const $toggleAutoReload = document.getElementById('toggle-auto-reload')

$toggleAutoReload.onclick = function() {
  this.classList.toggle('active')

  if (reloadTimer) {
    clearTimeout(reloadTimer)
    reloadTimer = null
    lastReloaded = null
    return
  }

  autoReloadTab()
}

const autoReloadTab = () => {
  lastReloaded = new Date()
  chrome.tabs.reload()

  reloadTimer = setTimeout(autoReloadTab, autoReloadTimeoutSeconds * 1000)
}

setInterval(() => {
  let buttonHtml = 'Iniciar la recarga automática'

  if (lastReloaded) {
    const timeDifference = Math.floor((new Date() - lastReloaded) / 1000)
    buttonHtml = `(${autoReloadTimeoutSeconds - timeDifference}) Detener la recarga automática`
  }

  $toggleAutoReload.innerHTML = buttonHtml
}, 500)
