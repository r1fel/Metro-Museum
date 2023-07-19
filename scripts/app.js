const stationList = document.querySelector('#stations-list')
const removeAllStationsBtn = document.querySelector('#remove-stations');



const clearLocalStorage = () => {
  console.log('Triggered!!')
  window.localStorage.clear()
  window.location.reload()
}


let i=0 //muss 0 sein
const parser = new DOMParser();

console.log(i + " ---This is i ")

console.log(localStorage.length + ' ---This is LS')

removeAllStationsBtn.addEventListener('click', clearLocalStorage)


for (storedItem in localStorage) {
const newStationText = localStorage.getItem(`new-list-item-${i}`)
console.log(newStationText)
const newStationHtml = parser.parseFromString(newStationText, 'text/html');
console.log(newStationHtml)
stationList.appendChild(newStationHtml.children[0].children[1].children[0])
i++
}






