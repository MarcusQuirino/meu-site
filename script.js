let count = 0
const span = document.getElementById('contador')

function incrementar(valor) {
  count += valor
  span.innerText = count
}
