import{r as t,h as s}from"./p-436299d0.js";const i=class{constructor(s){t(this,s)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((s=this.last)?` ${s}`:"");var t,s}buttonCLick(){this.hideHello=!this.hideHello}render(){return s("div",null,this.hideHello?s("div",null,"Thanks"):s("div",null,"Hello, World! I'm ",this.getText()),s("img",{src:"/img/pexels-zaksheuskaya-1561020.jpg"}),s("slot",null),s("button",{onClick:this.buttonCLick.bind(this)},"OK"))}};i.style=":host{display:block}";export{i as my_component}