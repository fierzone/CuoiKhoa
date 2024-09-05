/* mode dark */
const body = document.body;
const switch_mode = document.querySelector('#switch-mode i');
//load mode
let mode = localStorage.getItem('darkmode');
if (mode=='true'){
    body.classList.add('dark');
    switch_mode.className = "bi bi-brightness-high-fill";
}
switch_mode.addEventListener('click', () => {
    body.classList.toggle('dark');
    switch_mode.classList.toggle('bi-moon-stars-fill');
    switch_mode.classList.toggle('bi-brightness-high-fill');
    
    // save mode
    localStorage.getItem('darkmode', mode);
})