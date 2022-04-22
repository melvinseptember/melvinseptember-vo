let test = fetch("/api/v1/namespaces/default/configmaps/web-cm")
console.log(test)
let p = document.getElementById('test')
p.innerHTML = window._env_.WORKS