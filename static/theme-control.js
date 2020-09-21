var themeBtn = document.querySelector('.theme-toggle');
var body = document.body;
var currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    body.classList.add('light-theme')
}
themeBtn.addEventListener('click', function(){
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }
    else{
        localStorage.removeItem('currentTheme');
    }
});