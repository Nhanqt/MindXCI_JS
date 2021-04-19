

const navItems = [
    {
        name:"Item 1",
    },
    {
        name:"Item 2",
    },
    {
        name:"Item 3",
    },
    {
        name:"Item 4",
    },
    {
        name:"Item 5",
    }
];

window.onload = function(){
    for(let item of navItems){
        document.getElementsByClassName("menu")[0].innerHTML += `<span>` +  item.name + `<span/>`
    }
}