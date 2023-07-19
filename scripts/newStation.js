const form = document.querySelector('#add-station-form');
const stationNameInput = document.querySelector('#station-name-input');
const stationDescrInput = document.querySelector('#description-input');
const stationImgInput = document.querySelector('#image-input');
const stationWebsiteInput = document.querySelector('#website-input');


let station = {
  name: '',
  description: '',
  imgUrl: '',
  websiteUrl:'',
}

let isVerified = true

const addLocalInfo = () => {
  station.name = stationNameInput.value.trim()
  station.description = stationDescrInput.value.trim()
  station.imgUrl = stationImgInput.value.trim()
  station.websiteUrl = stationWebsiteInput.value.trim()
}


const createHtml = (input) => {
  const element =  document.createElement('template')
  element.innerHTML = input.trim()
  return element.innerHTML
}





const isValidTextInput = (input, message) => {
  const errMess = input.parentElement.querySelector('.error-message')
  if (input.value.length > 3) {
    input.classList.remove('error')
    errMess = ''
    isVerified = true
  } else {
    input.classList.add('error')
    const errMess = input.parentElement.querySelector('.error-message')
    errMess.innerText = message
    isVerified = false
  }

}

/* const isValidPhotoUrl = (input, message) => {
  const re = new RegExp(/^https:\/\/.*\.(png|jpe?g|gif|webp)$/i)
  if(re.test(input)) {
    input.classList.add('success')
    input.classList.remove('error')
  } else {
    input.classList.add('error')
    input.classList.remove('success')
    const errMess = input.parentElement.querySelector('.error-message')
    errMess.innerText = message
    isVerified = false

  }
}

const isValidWebpageUrl = (input, message) => {
  const re = new RegExp(/^https:\/\/.{11,}\.[a-zA-Z0-9]+$/)
  if(re.test(input)) {
    input.classList.add('success')
    input.classList.remove('error')
  } else {
    input.classList.add('error')
    input.classList.remove('success')
    const errMess = input.parentElement.querySelector('.error-message')
    errMess.innerText = message
    isVerified = false

  }
}



const validateAll = () => {

  isValidTextInput(station.name, 'Please enter a station name');
  isValidTextInput(station.description, 'Please describe the station');
  isValidPhotoUrl(station.imgUrl, 'valid image URL required');
  isValidWebpageUrl(websiteUrl, 'Please enter a valid URL')
} */




form.addEventListener('submit', function(e) {
  e.preventDefault()
  addLocalInfo()
  // validateAll()
  // if(isVerified){

    const createdElement = createHtml(`
      <li class="content-card" id="added-station-${station.name}">
        <a href=${station.websiteUrl} target="_blank">
          <div class="card-img-wrapper">
            <img class="station-img" src="${station.imgUrl}" alt="Metro Station ${station.name}">
          </div>
        <div class="content-discription">
            <h2>${station.name}</h2>
            <p>${station.description}</p>
          </div>
        </a>
      </li>
    `)
  
    const savedElement = localStorage.setItem (`new-list-item-${localStorage.length}`, createdElement)
    window.location.href = `index.html#added-station-${station.name}`
  
})



