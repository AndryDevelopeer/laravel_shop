require('./bootstrap');
require('inputmask');

/* маски для инпутов inputmask */
document.addEventListener("DOMContentLoaded", function () {
    /* user */
    const phone = document.querySelector('#user-phone-mask')
    if (phone) Inputmask({"mask": "+7 (999) 999-99-99"}).mask(phone);

    const email = document.querySelector('#user-email-mask')
    if (email) Inputmask({"mask": "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}.[*{1,3}]"}).mask(email);

    const age = document.querySelector('#user-age-mask')
    const maxAge = 200
    if (age) age.addEventListener('input', e => {
        e.preventDefault()
        let value = e.target.value
        e.target.value = value.replace(/[^0-9]/g, "")

        if (Number(value) > maxAge) e.target.value = maxAge
    })

    /* product */
    const price = document.querySelector('#product-price-mask')
    if (price) Inputmask({"mask": "9999999"}).mask(price)

    const count = document.querySelector('#product-count-mask')
    if (count) Inputmask({"mask": "99999"}).mask(count)
});
