/* маски для инпутов inputmask */
document.addEventListener("DOMContentLoaded", function () {
    const phone = document.querySelector('#user-phone-mask')
    Inputmask({"mask": "+7 (999) 999-99-99"}).mask(phone);

    const email = document.querySelector('#user-email-mask')
    Inputmask({"mask": "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}.[*{1,3}]"}).mask(email);

    const age = document.querySelector('#user-age-mask')
    const maxAge = 200
    age.addEventListener('input', e => {
        e.preventDefault()
        let value = e.target.value
        e.target.value = value.replace(/[^0-9]/g, "")

        if (Number(value) > maxAge) e.target.value = maxAge
    })
});