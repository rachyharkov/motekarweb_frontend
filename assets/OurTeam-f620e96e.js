import{a as s,j as a}from"./index-7140d0bd.js";import{m as e}from"./member-049aa498.js";function n({onClickTeamNameCallback:c}){return s("section",{className:"section-vh-auto",children:[s("h4",{className:"bold-title",style:{color:"var(--color-accent)"},children:["MEET ",a("span",{style:{color:"var(--color-secondary)"},children:"OUR FAMILY TEAM MEMBER"})]}),s("p",{className:"text-accent",children:["Our all-hands meetings are like work family reunions. Just ",a("span",{style:{color:"var(--color-secondary)"},children:"click on the familia member's name"})," to find out more."]}),a("div",{className:"container",children:a("div",{className:"row",children:Object.keys(e).sort((t,l)=>e[t].posisi-e[l].posisi).map((t,l)=>a("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:s("div",{className:"card-team",children:[a("figure",{className:"card-team-image",children:a("img",{src:"images/"+e[t].image_transparent,alt:"member"+e[t].nama})}),a("h5",{className:"card-team-title",style:{cursor:"pointer"},onClick:()=>c("member-info",e[t]),children:e[t].nama}),a("p",{className:"card-team-subtitle",children:e[t].jabatan}),s("div",{className:"card-team-social",children:[a("button",{className:"card-team-social-button",type:"button","aria-label":"facebook",children:a("i",{className:"fab fa-facebook-f"})}),a("button",{className:"card-team-social-button",type:"button","aria-label":"twitter",children:a("i",{className:"fab fa-twitter"})}),a("button",{className:"card-team-social-button",type:"button","aria-label":"instagram",children:a("i",{className:"fab fa-instagram"})}),a("button",{className:"card-team-social-button",type:"button","aria-label":"linkedin",children:a("i",{className:"fab fa-linkedin-in"})})]})]})},l))})})]})}export{n as default};