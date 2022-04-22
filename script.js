let test = fetch("http://35.187.175.86/api/v1/namespaces/default/configmaps/web-cm")
console.log(test)
let p = document.getElementById('test')
p.innerHTML = window._env_.WORKS
console.log('hello',process.env.WORKS)