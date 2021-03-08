// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-funky.css'
import 'prismjs/themes/prism-okaidia.css'
import './src/font.css'

exports.onServiceWorkerUpdateReady = () => {
  if (
    window.confirm(
      'Il semblerait que ton navigateur ait gardé une ancienne version du site. Veux-tu mettre à jour maintenant ?'
    )
  ) {
    window.location.reload(true)
  }
}
