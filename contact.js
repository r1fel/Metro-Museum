const contact = document.getElementById('contact');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const country = document.getElementById('country');

contact.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const contact = element.parentElement;
    const errorDisplay = contact.querySelector('.error');

    errorDisplay.innerText = message;
    contact.classList.add('error');
    contact.classList.remove('success');
}

const setSuccess = element => {
    const contact = element.parentElement;
    const errorDisplay = contact.querySelector('.error');

    errorDisplay.innerText = '';
    contact.classList.add('success');
    contact.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// const isValidPhonenumber = phonenumber => {
//     const re = [0 - 9];
//     return re.text(String(phonenumber));
// }

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const countryValue = country.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'First Name is required');
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    } else {
        setSuccess(lasttname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (phonenumberValue === '') {
        setError(phonenumber, 'Phone number ist required');
    } else {
        setSuccess(phonenumber);
    }

    // if (phonenumberValue === '') {
    //     setError(phonenumber, 'Phone number is required');
    // } else if (!isValidPhonenumber(phonenumberValue)) {
    //     setError(Phonenumber, 'Provide a valid phone number');
    // } else {
    //     setSuccess(phonenumber);
    // }


    if (countryValue === '') {
        setError(country, 'Country ist required');
    } else {
        setSuccess(country);
    }
};











