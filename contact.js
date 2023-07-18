// // Form without console.log()

// // const firstname = document.getElementById('firstname');
// // const lastname = document.getElementById('lastname');
// // const email = document.getElementById('email');
// // const phonenumber = document.getElementById('phonenumber');
// // const country = document.getElementById('country');

// // document.addEventListener('DOMContentLoaded', function () {
// //     document.getElementById('contact').addEventListener('submit', function (e) {
// //         e.preventDefault();
// //         validateInputs();
// //     });
// // });

// // const setError = (element, message) => {
// //     const contact = element.parentElement;
// //     const errorDisplay = contact.querySelector('.error-message');

// //     errorDisplay.innerText = message;
// //     contact.classList.add('error-message');
// //     contact.classList.add('invalid');
// //     contact.classList.remove('valid');
// // }

// // const setSuccess = element => {
// //     const contact = element.parentElement;
// //     const errorDisplay = contact.querySelector('.error-message');

// //     errorDisplay.innerText = '';
// //     contact.classList.add('valid');
// //     contact.classList.remove('error-message');
// //     contact.classList.remove('invalid');
// // };

// // const isValidEmail = email => {
// //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// // }

// // const isValidPhonenumber = phonenumber => {
// //     const re = /^\+{0,1}[0-9]{8,17}$/gm;
// //     return re.test(String(phonenumber));
// // }

// // const validateInputs = () => {
// //     const firstnameValue = firstname.value.trim();
// //     const lastnameValue = lastname.value.trim();
// //     const emailValue = email.value.trim();
// //     const phonenumberValue = phonenumber.value.trim();
// //     const countryValue = country.value.trim();

// //     if (firstnameValue === '') {
// //         setError(firstname, 'First Name is required');
// //     } else {
// //         setSuccess(firstname);
// //     }

// //     if (lastnameValue === '') {
// //         setError(lastname, 'Last Name is required');
// //     } else {
// //         setSuccess(lastname);
// //     }

// //     if (emailValue === '') {
// //         setError(email, 'Email is required');
// //     } else if (!isValidEmail(emailValue)) {
// //         setError(email, 'Provide a valid email address');
// //     } else {
// //         setSuccess(email);
// //     }

// //     if (phonenumberValue === '') {
// //         setError(phonenumber, 'Phone Number ist required');
// //     } else {
// //         setSuccess(phonenumber);
// //     }

// //     if (phonenumberValue === '') {
// //         setError(phonenumber, 'Phone Number is required');
// //     } else if (!isValidPhonenumber(phonenumberValue)) {
// //         setError(phonenumber, 'Provide a valid phone number');
// //     } else {
// //         setSuccess(phonenumber);
// //     }

// //     if (countryValue === '') {
// //         setError(country, 'Country is required');
// //     } else {
// //         setSuccess(country);
// //     }
// // };


//Form with console.log(). But it prints out every input, even if some of the inputs are invalid.

// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const email = document.getElementById('email');
// const phonenumber = document.getElementById('phonenumber');
// const country = document.getElementById('country');

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('JS file successfully loaded.'); // Successful run of the JS file at the beginning

//     document.getElementById('contact').addEventListener('submit', function (e) {
//         e.preventDefault();
//         validateInputs();
//         console.log('Form submitted.'); // 'Form submitted' after the submit button was clicked
//     });
// });

// const setError = (element, message) => {
//     const contact = element.parentElement;
//     const errorDisplay = contact.querySelector('.error-message');

//     errorDisplay.innerText = message;
//     contact.classList.add('error-message');
//     contact.classList.add('invalid');
//     contact.classList.remove('valid');
// };

// const setSuccess = element => {
//     const contact = element.parentElement;
//     const errorDisplay = contact.querySelector('.error-message');

//     errorDisplay.innerText = '';
//     contact.classList.add('valid');
//     contact.classList.remove('error-message');
//     contact.classList.remove('invalid');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// };

// const isValidPhonenumber = phonenumber => {
//     const re = /^\+{0,1}[0-9]{8,17}$/gm;
//     return re.test(String(phonenumber));
// };

// const validateInputs = () => {
//     const firstnameValue = firstname.value.trim();
//     const lastnameValue = lastname.value.trim();
//     const emailValue = email.value.trim();
//     const phonenumberValue = phonenumber.value.trim();
//     const countryValue = country.value.trim();

//     if (firstnameValue === '') {
//         setError(firstname, 'First Name is required');
//     } else {
//         setSuccess(firstname);
//         console.log('First Name:', firstnameValue.charAt(0).toUpperCase() + firstnameValue.slice(1));
//     }

//     if (lastnameValue === '') {
//         setError(lastname, 'Last Name is required');
//     } else {
//         setSuccess(lastname);
//         console.log('Last Name:', lastnameValue.charAt(0).toUpperCase() + lastnameValue.slice(1));
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//         console.log('Email:', emailValue.toLowerCase());
//     }

//     if (phonenumberValue === '') {
//         setError(phonenumber, 'Phone Number is required');
//     } else {
//         setSuccess(phonenumber);
//         console.log('Phone Number:', phonenumberValue);
//     }

//     if (countryValue === '') {
//         setError(country, 'Country is required');
//     } else {
//         setSuccess(country);
//         console.log('Country:', countryValue.charAt(0).toUpperCase() + countryValue.slice(1));
//     }
// };

//Final, correct and wanted form.

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const country = document.getElementById('country');

document.addEventListener('DOMContentLoaded', function () {
    console.log('JS file successfully loaded.');

    document.getElementById('contact').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateInputs()) {

            const firstnameValue = firstname.value.trim();
            const lastnameValue = lastname.value.trim();
            const emailValue = email.value.trim();
            const phonenumberValue = phonenumber.value.trim();
            const countryValue = country.value.trim();

            console.log('First Name:', firstnameValue.charAt(0).toUpperCase() + firstnameValue.slice(1));
            console.log('Last Name:', lastnameValue.charAt(0).toUpperCase() + lastnameValue.slice(1));
            console.log('Email:', emailValue.toLowerCase());
            console.log('Phone Number:', phonenumberValue);
            console.log('Country:', countryValue.charAt(0).toUpperCase() + countryValue.slice(1));
            console.log('Form submitted.');
        }
    });
});

const setError = (element, message) => {
    const contact = element.parentElement;
    const errorDisplay = contact.querySelector('.error-message');

    errorDisplay.innerText = message;
    contact.classList.add('error-message');
    contact.classList.add('invalid');
    contact.classList.remove('valid');
};

const setSuccess = element => {
    const contact = element.parentElement;
    const errorDisplay = contact.querySelector('.error-message');

    errorDisplay.innerText = '';
    contact.classList.add('valid');
    contact.classList.remove('error-message');
    contact.classList.remove('invalid');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhonenumber = phonenumber => {
    const re = /^\+{0,1}[0-9]{8,17}$/gm;
    return re.test(String(phonenumber));
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const countryValue = country.value.trim();
    let isValid = true;

    if (firstnameValue === '') {
        setError(firstname, 'First Name is required');
        isValid = false;
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last Name is required');
        isValid = false;
    } else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (phonenumberValue === '') {
        setError(phonenumber, 'Phone Number is required');
        isValid = false;
    } else if (!isValidPhonenumber(phonenumberValue)) {
        setError(phonenumber, 'Provide a valid phone number');
        isValid = false;
    } else {
        setSuccess(phonenumber);
    }

    if (countryValue === '') {
        setError(country, 'Country is required');
        isValid = false;
    } else {
        setSuccess(country);
    }

    return isValid;
};