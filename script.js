let test = "{$process.env.WORKS}"
console.log(test)
let p = document.getElementById('test')
p.innerHTML = window._env_.WORKS
