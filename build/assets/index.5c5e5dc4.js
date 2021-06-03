import{R as e,N as t,d as a,a as n,b as l,c as r,e as c,L as i,P as s,T as m,f as o,g as d,m as u,r as p,h as E,S as g,i as h,j as v,k as y,l as f,n as S,o as b,p as x,q as C,s as A,u as K,I as N,t as Y,v as B,w as k,x as q,B as w,y as T,z as D,C as I,A as R,D as j,E as L,X as H,Y as Z,F as P,G as V,H as F,J as G,K as M,M as O,O as U,Q,U as J,V as $,W as X,Z as W,_ as z,$ as _,a0 as ee,a1 as te,a2 as ae,a3 as ne,a4 as le,a5 as re,a6 as ce}from"./vendor.31e18b59.js";const ie=()=>e.createElement("div",{className:"menuContainer"},e.createElement("p",{className:"menuLink"},e.createElement(t,{activeClassName:"active",exact:!0,to:"/",style:{display:"flex",gap:"5px"}},e.createElement(a,null),"Home")),e.createElement("p",{className:"menuLink"},e.createElement(t,{activeClassName:"active",to:"/graphs",style:{display:"flex",gap:"5px"},id:"graphsLink"},e.createElement(n,null),"Graphs")),e.createElement("p",{className:"menuLink"},e.createElement(t,{activeClassName:"active",to:"/vaccinelist",style:{display:"flex",gap:"5px"},id:"vaccineListLink"},e.createElement(l,null),"Vaccine List")),e.createElement("p",{className:"menuLink"},e.createElement(t,{activeClassName:"active",to:"/vaccinationlist",style:{display:"flex",gap:"5px"},id:"vaccinationListLink"},e.createElement(r,null),"Vaccination List")),e.createElement("p",{className:"menuLink"},e.createElement(t,{activeClassName:"active",to:"/about",style:{display:"flex",gap:"5px"}},e.createElement(c,null),"About")));const se=()=>e.createElement("div",{className:"aboutContainer"},e.createElement("img",{src:"/assets/about.285a74a5.svg",height:"150",style:{marginTop:"20px"}}),e.createElement("h2",null,"Live on ",e.createElement(i,{href:"http://"},"Heroku")),e.createElement("h2",null,"Source Code on"," ",e.createElement(i,{href:"https://github.com/villivald/vaccine"},"GitHub")),e.createElement("h2",null,"Made with:"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",justifyItems:"center",gap:"15px"}},e.createElement("p",null,e.createElement(i,{href:"https://reactjs.org/"},"React")),e.createElement("p",null,e.createElement(i,{href:"https://nodejs.org/en/"},"Node.js")),e.createElement("p",null,e.createElement(i,{href:"https://vitejs.dev/"},"Vite")),e.createElement("p",null,e.createElement(i,{href:"https://reactrouter.com/"},"React Router")),e.createElement("p",null,e.createElement(i,{href:"https://material-ui.com/"},"Material UI")),e.createElement("p",null,e.createElement(i,{href:"https://recharts.org/en-US/"},"Recharts")),e.createElement("p",null,e.createElement(i,{href:"https://www.drawkit.io/"},"Drawkit")),e.createElement("p",null,e.createElement(i,{href:"https://heroku.com/"},"Heroku")),e.createElement("p",null,e.createElement(i,{href:"https://axios-http.com/"},"Axios")))),me=({vaccine:t,vaccinations:a})=>{const n=a.filter((e=>e.sourceBottle===t.id));return e.createElement(m,{key:t.orderNumber},e.createElement(o,null,t.orderNumber),e.createElement(o,null,e.createElement(d,{id:"vaccineLink",to:`/vaccines/${t.id}`},t.id)),e.createElement(o,null,t.responsiblePerson),e.createElement(o,null,t.healthCareDistrict),e.createElement(o,{style:{color:"Antiqua"===t.vaccine?"#82ca9d":"Zerpfy"===t.vaccine?"#d84a26":"#8884d8"}},t.vaccine),e.createElement(o,null,new Date(t.arrived).toLocaleDateString()),e.createElement(o,null,"Used: ",n.length,"/",t.injections))};me.propTypes={vaccine:s.object.isRequired,vaccinations:s.array.isRequired};const oe=u((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));function de(t){const a=oe(),n=K(),{count:l,page:r,rowsPerPage:c,onChangePage:i}=t;return e.createElement("div",{className:a.root},e.createElement(N,{onClick:e=>{i(e,0)},disabled:0===r,"aria-label":"first page"},"rtl"===n.direction?e.createElement(Y,null):e.createElement(B,null)),e.createElement(N,{onClick:e=>{i(e,r-1)},disabled:0===r,"aria-label":"previous page"},"rtl"===n.direction?e.createElement(k,null):e.createElement(q,null)),e.createElement(N,{onClick:e=>{i(e,r+1)},disabled:r>=Math.ceil(l/c)-1,"aria-label":"next page"},"rtl"===n.direction?e.createElement(q,null):e.createElement(k,null)),e.createElement(N,{onClick:e=>{i(e,Math.max(0,Math.ceil(l/c)-1))},disabled:r>=Math.ceil(l/c)-1,"aria-label":"last page"},"rtl"===n.direction?e.createElement(B,null):e.createElement(Y,null)))}const ue=u({table:{minWidth:300},cell:{width:150}}),pe=({rows:t,vaccinations:a})=>{const[n,l]=p.exports.useState(""),[r,c]=p.exports.useState(""),[i,s]=p.exports.useState(""),[d,u]=p.exports.useState(""),[K,N]=p.exports.useState(!1),[Y,B]=p.exports.useState(!1),[k,q]=p.exports.useState(!1),w=ue(),[T,D]=e.useState(0),[I,R]=e.useState(10),j=I-Math.min(I,t.length-T*I);return e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},e.createElement("div",{style:{display:"flex",gap:"150px",justifyContent:"center",alignItems:"center",marginLeft:"-20%"}},e.createElement("img",{src:"/assets/vaccineList.7e978d00.svg",height:"150"}),e.createElement("h2",{className:"topHeader"},e.createElement(E,null),"Sort by")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"15px"}},"Date: ",e.createElement(g,{onChange:()=>N(!K)}),"Vaccine Type:"," ",e.createElement(g,{onChange:()=>B(!Y)}),"Area: ",e.createElement(g,{onChange:()=>q(!k)})),e.createElement("h2",{className:"topHeader"},e.createElement(h,null),"Filter by"),e.createElement("div",{style:{display:"flex",gap:"15px",marginBottom:"20px"}},e.createElement("div",null,e.createElement(v,{id:"filterNumber",label:"ID",onChange:e=>{u(e.target.value)},placeholder:"2145116d-7b2d..."})),e.createElement("div",null,e.createElement(v,{id:"filterName",label:"Name",onChange:e=>{l(e.target.value)},placeholder:"Jukka..."})),e.createElement("div",null,e.createElement(v,{id:"filterArea",label:"Area",onChange:e=>{c(e.target.value)},placeholder:"HYKS..."})),e.createElement("div",null,e.createElement(v,{id:"filterType",label:"Vaccine Type",onChange:e=>{s(e.target.value)},placeholder:"Antiqua..."})))),e.createElement(y,{component:f},e.createElement(S,{className:w.table},e.createElement(b,null,e.createElement(m,null,e.createElement(o,{className:w.cell},"Order Number"),e.createElement(o,{className:w.cell},"ID"),e.createElement(o,{className:w.cell},"Responsible Person"),e.createElement(o,{className:w.cell},"Area"),e.createElement(o,{className:w.cell},"Type"),e.createElement(o,{className:w.cell},"Date"),e.createElement(o,{className:w.cell},"Injections"))),e.createElement(x,null,(I>0?t.filter((e=>e.responsiblePerson.toLowerCase().includes(n.toLowerCase()))).filter((e=>e.id.toLowerCase().includes(d.toLowerCase()))).filter((e=>e.healthCareDistrict.toLowerCase().includes(r.toLowerCase()))).filter((e=>e.vaccine.toLowerCase().includes(i.toLowerCase()))).sort(((e,t)=>K?new Date(e.arrived).getTime()-new Date(t.arrived).getTime():e.orderNumber-t.orderNumber)).sort(((e,t)=>Y&&(e.vaccine>t.vaccine?1:-1))).sort(((e,t)=>k&&(e.healthCareDistrict>t.healthCareDistrict?1:-1))).slice(T*I,T*I+I):t).map((t=>e.createElement(me,{key:t.id,vaccine:t,vaccinations:a}))),j>0&&e.createElement(m,{style:{height:53*j}},e.createElement(o,{colSpan:6}))),e.createElement(C,null,e.createElement(m,null,e.createElement(A,{rowsPerPageOptions:[10,50,100,500,{label:"All",value:-1}],colSpan:5,count:t.length,rowsPerPage:I,page:T,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,t)=>{D(t)},onChangeRowsPerPage:e=>{R(parseInt(e.target.value,10)),D(0)},ActionsComponent:de}))))))};pe.propTypes={rows:s.array.isRequired,vaccinations:s.array.isRequired};const Ee=({vaccines:t,vaccinations:a})=>e.createElement("div",null,e.createElement(pe,{rows:t,vaccinations:a}));Ee.propTypes={vaccines:s.array.isRequired,vaccinations:s.array.isRequired};const ge=({vaccination:t,vaccines:a})=>{const n=a.filter((e=>e.id===t.sourceBottle));return e.createElement(m,{key:t["vaccination-id"]},e.createElement(o,null,e.createElement(d,{id:"vaccinationLink",to:`/vaccinations/${t["vaccination-id"]}`},t["vaccination-id"])),e.createElement(o,null,t.sourceBottle),e.createElement(o,{align:"right"},t.gender),e.createElement(o,{align:"right"},new Date(t.vaccinationDate).toLocaleDateString()),e.createElement(o,{align:"right",style:{color:"Antiqua"===n[0].vaccine?"#82ca9d":"Zerpfy"===n[0].vaccine?"#d84a26":"#8884d8"}},n[0].vaccine),e.createElement(o,{align:"right"},n[0].responsiblePerson),e.createElement(o,{align:"right"},n[0].healthCareDistrict))};ge.propTypes={vaccines:s.array.isRequired,vaccination:s.object.isRequired};const he=u((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));function ve(t){const a=he(),n=K(),{count:l,page:r,rowsPerPage:c,onChangePage:i}=t;return e.createElement("div",{className:a.root},e.createElement(N,{onClick:e=>{i(e,0)},disabled:0===r,"aria-label":"first page"},"rtl"===n.direction?e.createElement(Y,null):e.createElement(B,null)),e.createElement(N,{onClick:e=>{i(e,r-1)},disabled:0===r,"aria-label":"previous page"},"rtl"===n.direction?e.createElement(k,null):e.createElement(q,null)),e.createElement(N,{onClick:e=>{i(e,r+1)},disabled:r>=Math.ceil(l/c)-1,"aria-label":"next page"},"rtl"===n.direction?e.createElement(q,null):e.createElement(k,null)),e.createElement(N,{onClick:e=>{i(e,Math.max(0,Math.ceil(l/c)-1))},disabled:r>=Math.ceil(l/c)-1,"aria-label":"last page"},"rtl"===n.direction?e.createElement(B,null):e.createElement(Y,null)))}const ye=u({table:{minWidth:500}}),fe=({rows:t,vaccines:a})=>{const[n,l]=p.exports.useState(""),[r,c]=p.exports.useState(""),[i,s]=p.exports.useState(!1),[d,u]=p.exports.useState(!1),K=ye(),[N,Y]=e.useState(0),[B,k]=e.useState(10),q=B-Math.min(B,t.length-N*B);return e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},e.createElement("div",{style:{display:"flex",gap:"100px",justifyContent:"center",alignItems:"center",marginLeft:"-18%"}},e.createElement("img",{src:"/assets/vaccinationList.07685df0.svg",height:"150"}),e.createElement("h2",{className:"topHeader"},e.createElement(E,null),"Sort by")),e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"15px"}},"Date: ",e.createElement(g,{onChange:()=>s(!i)}),"Gender: ",e.createElement(g,{onChange:()=>u(!d)})),e.createElement("h2",{className:"topHeader"},e.createElement(h,null),"Filter by"),e.createElement("div",{style:{display:"flex",gap:"15px",marginBottom:"20px"}},e.createElement("div",null,e.createElement(v,{label:"Vaccination ID",onChange:e=>{l(e.target.value)},placeholder:"6ae207d9-6fa9-4b62...",id:"filterId"})),e.createElement("div",null,e.createElement(v,{label:"Source Bottle",onChange:e=>{c(e.target.value)},placeholder:"75ae9638-3ad5-4433...",id:"filterBottle"})))),e.createElement(y,{component:f},e.createElement(S,{className:K.table},e.createElement(b,null,e.createElement(m,null,e.createElement(o,null,"Vaccination ID"),e.createElement(o,null,"Source Bottle"),e.createElement(o,{align:"right"},"Gender"),e.createElement(o,{align:"right"},"Date"),e.createElement(o,{align:"right"},"Type"),e.createElement(o,{align:"right"},"Responsible Person"),e.createElement(o,{align:"right"},"Area"))),e.createElement(x,null,(B>0?t.filter((e=>e["vaccination-id"].includes(n))).filter((e=>e.sourceBottle.includes(r))).sort(((e,t)=>e.vaccinationDate-t.vaccinationDate)).sort(((e,t)=>i&&new Date(e.vaccinationDate).getTime()-new Date(t.vaccinationDate).getTime())).sort(((e,t)=>d&&(e.gender>t.gender?1:-1))).slice(N*B,N*B+B):t).map((t=>e.createElement(ge,{key:t["vaccination-id"],vaccination:t,vaccines:a}))),q>0&&e.createElement(m,{style:{height:53*q}},e.createElement(o,{colSpan:6}))),e.createElement(C,null,e.createElement(m,null,e.createElement(A,{rowsPerPageOptions:[10,50,100,500,{label:"All",value:-1}],colSpan:4,count:t.length,rowsPerPage:B,page:N,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,t)=>{Y(t)},onChangeRowsPerPage:e=>{k(parseInt(e.target.value,10)),Y(0)},ActionsComponent:ve}))))))};fe.propTypes={vaccines:s.array.isRequired,rows:s.array.isRequired};const Se=({vaccinations:t,vaccines:a})=>e.createElement("div",null,e.createElement(fe,{rows:t,vaccines:a}));Se.propTypes={vaccines:s.array.isRequired,vaccinations:s.array.isRequired};const be=({vaccines:t,vaccinations:a})=>{const n=e=>t.filter((t=>t.vaccine===e)).length,l=e=>t.filter((t=>t.healthCareDistrict===e)).length,r=e=>a.filter((t=>t.vaccinationDate.includes(`2021-${e}`))).length,c=e=>t.filter((t=>t.arrived.includes(`2021-${e}`))).length,s=t.map((e=>e.id)),m=a.map((e=>e.sourceBottle)),o=s.filter((e=>m.includes(e))).length,u=e=>t.filter((t=>t.vaccine===e)).map((e=>e.id)).filter((e=>m.includes(e))).length,p=6*n("SolarBuddhica")+4*n("Antiqua")+5*n("Zerpfy"),E=[{name:"Female",value:a.filter((e=>"female"===e.gender)).length},{name:"Male",value:a.filter((e=>"male"===e.gender)).length},{name:"Nonbinary",value:a.filter((e=>"nonbinary"===e.gender)).length}],g=["#8884d8","#82ca9d","#d84a26"];return e.createElement("div",{className:"infoWrapper"},e.createElement("h1",{className:"infoHeader"},e.createElement("img",{src:"/assets/stats.5b54176f.svg",height:"50"})," Vaccines & Vaccinations Statistics"),e.createElement("div",{className:"infoGrid"},e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccine Type Stats"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{className:"vaccineContainer"},e.createElement(i,{component:d,to:"/solar"},"SolarBuddhica"),e.createElement("div",{style:{marginBottom:"5px"}},e.createElement("p",null,"Bottles: ",n("SolarBuddhica")),e.createElement("p",null,"Injections: ",6*n("SolarBuddhica")))),e.createElement("div",{className:"vaccineContainer"},e.createElement(i,{component:d,to:"/antiqua"},"Antiqua"),e.createElement("div",{style:{marginBottom:"5px"}},e.createElement("p",null,"Bottles: ",n("Antiqua")),e.createElement("p",null,"Injections: ",4*n("Antiqua")))),e.createElement("div",{className:"vaccineContainer"},e.createElement(i,{component:d,to:"/zerpfy"},"Zerpfy"),e.createElement("div",{style:{marginBottom:"5px"}},e.createElement("p",null,"Bottles: ",n("Zerpfy")),e.createElement("p",null,"Injections: ",5*n("Zerpfy")))),e.createElement("div",{className:"vaccineContainer"},e.createElement(i,{component:d,to:"/vaccinelist"},"Total"),e.createElement("div",null,e.createElement("p",null,"Bottles: ",t.length),e.createElement("p",null,"Injections: ",p))))),e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccinations By Month"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{className:"vaccineContainer",style:{padding:"10px"}},e.createElement("p",null,"January: ",r("01")),e.createElement("p",null,`${(r("01")/a.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"10px"}},e.createElement("p",null,"February: ",r("02")),e.createElement("p",null,`${(r("02")/a.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"10px"}},e.createElement("p",null,"March: ",r("03")),e.createElement("p",null,`${(r("03")/a.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"10px"}},e.createElement("p",null,"April: ",r("04")),e.createElement("p",null,`${(r("04")/a.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"10px"}},e.createElement(i,{component:d,to:"/vaccinationlist"},"Total"),": ",a.length))),e.createElement(f,{className:"infoGraphContainer",elevation:3},e.createElement("img",{src:"data:image/webp;base64,UklGRrIMAABXRUJQVlA4IKYMAABwpgCdASoCA7gBPpFInUqlpKKhppj4gLASCWVu/Eb5UKwmmpR6HH1z5GsWv59c+3+F9b3P/9D/mA/af9gPd83Wn1ffQA6ZfIUPGHfN6Lmj9dv3AP4B6HPvfoK7B98n/+d1Zx7/++IvmZ4C/+Hp/4CvomP//ze/eAv/kg6rrIwtB3EnPxyIuFKg7pYhi2MRRMQv5yy5tHBB1B0Q47imdKQG0ada8djUl/K7IFcI5vJH7ONw/Q97NqKGUGTtpSovapf8NZPU+SAO3yp/nr7CO243D+XaM+pVyL45y0Veq5v0blz289F0Q4VX0HEnrbjjhqKeX8rTx/WuaRRM5xPipEW09FwcbLzCn8+MbjbSislpLSViBRg9EDE64lriT1umesc4dG55zgmArdI8LYCBFlXAmxFJTGElaLhQjQlIvkgD0bjn5GnWW82bTCqATYi4NFvjA1B7u+l3nURcKEaEpF8kAejcc2NxyIn4vi3xle43DFqYiR3yRwlklTrk4R1soFXZxuGKV2o02Nf2UBi0ORE6ijBxjkZVhYXuKLjWeAi9aTBcGxr/NUnmkerfVC2AqUfqQmQpjC6Z7+Bf4NorfVC2AqUfqQmR5Mc/HOi4YtSItSpEXCgu3uoNApXMr1YQIsgHs1KsKVBzHZRGI5xuNtKa7ONwxb1dWrm0WhtpOZHhbAQIsq2jETvskMpCKLQYtSpEXBovG45+rCBF6+0Y/WrMDBUiHiqqqE2jgg6bKeUozVF7TmMJK0XCgt42LCv3yd2AtVUJtHA+otqdjYSCMVuOQ6oJCHhgz8MGZdEANw/u76XedRFwobmpEXChvJtZ5N7OTXEnw3YC1VQm0Zgd8UGOoAQIvZw3L+xYvZ4hPiiyqrR6Ce7lsqmKhuQihFCHrYXRg4Gp2PE4i0N0eKicp9m0eCy9Bevwkj9nFe5Hk68/lc2WKn4SbogBuOQ5l/2rZfaoFOKH7Orf2vwcbjjmldJJR4TyqRzzmtY+jiALlsUJK5Su2YB7bED5SFb40cSkvNadQTAe7aHWQOa/mi2a7xDX7hRch5Y/ZNOh9sahhbr1CXFxXLmpEXChucOcNy/s42VVOSOHfmwCovj0Y7+zZzrRwoi4yPA+i+SO8FYY5E7IuFDcxssz0Xy/ky2o1N48VK3FKi9nDcv7OK+JEzXUl/ZxXwZw8jiIosqrVxFt+3DYPSdMECL2cNy/s4r4kTNdSX9nFfBnDyOIiiyqs4CeHU1W/Qrns2f+y/OGFmwn5G1hth0i+st1JfWW6kvrGeHMSdVBx39nG4dlGP1dGfb23rVPwysYnXccpEQCpK1dZKDAkViKQlJoZTVktJaNJS3G8RYXfllFszm7qDfdNwykggBJT5uHcO0ebiuAnl/Zr1qTRcIUEqlSIuDjZsBwjqQvkh0kGhfpPkXyLyL6dCUhfJjRW4SRHZ/MK3HHLi6dg7BLOI1JolhtJiwc86mq36NzzqaJesdy7bJlN1mOkZxuHZZc4bl/ZxsqqYVQCbEXBxyZEcJNc/pjqRgSbYqPS84i0Nygd0rBEUWhuT7jn6u+LQ3J98EXdOi43Khm37wrs42VW4zhuX9nGyqphVAJsRcHHJmx0jONxuT9kyvjA1Ot9KyZDGcbjjvoMu1n5Whx30FDpZYUwuOeXpSsGp+GUFj1KRxyjVei4dmF9VaMRRaDspC1MT0Xy94IYE1xwK8HnlEX2rAmxFwcc3SfsIEXyQUb4t8ZXuNw7KVlYiLhSfVqPTGwCovZxI1tdSX9nFfBfbM+KkRbb9vaMAqL5IA6wAD+/1bZ5G64sMiyMoS6+izyYoyEJr6pLP3JeSbPvRtXB5RbLxXb5Kg6UV39HmNRbNsu/pIfyYXa6ikj+26CdwiBZrM5quDCEi9V6Y4TXjGDZ0HCGFDOarOLKNiAAC8XhEeA8sul5Jfu1sxUGJfTZQbnWomrKuj1UqPn9SllNrflkGBfCL2ydf4wE9NmddZR50GTNxtmaEg+LQRrAQVjtrAvFddwY5F8BgvrcL3apXgPRng1w5s7t6p3VRBeoK/8MyKc4cggLFPsvtNdn34n3vLjidaZaDCK6TMW8h/9j+4L1quEDWo/lVG8r+rcJ/mBtr3FjE7SoHHXIZ+ktpTdic5z58mphxNe2QYwNQXGsHmYkTQ7xUEYFRJh2biNL5TrjMvKLdchpO4vWdK2x012NUsrvzv1apW0omwL7gLwX3anOGb4N+EWifSb102mqGVm65Mfy8O93iTRUo3xSx8MBNA1Z3K7phbusBnKb/vxwbB9efrcsm5hk0m7ar/J/WrGQliz61fQg/aQM00CRusBnKb/vx2LK2SoUz0HREsz5pp7ZL1UGrsYgZYTCDyFqFnPYx3PwjTLgvISQ+Y2JgXvWLjReBQVLL4gwk5ZYfHBGRb2luXZjzh9OgQvcdLY6o/hBOeZEPYb9LcxEbBfyFSy+IEP2jUBqPCipZfEF78xrh67wqWR2fxNBLV0FW0b1RQlAUoJ5WlyL8pEJlfUpab1sT9Gk1rwP8EmrueBwNYuQd68SauoRuEko/2nqk2+l93F/JVzlmezb6YaxRgQa0HsiOomyDM0ctYHV7iMiKzCUKM/pa/FFHiILyWEhgczoBe2Mb6fSVKGvFPAz3+pAHYcqZV/347FljITnA4wC8yqYhJHHPyZvdH1COu5cZUeuARUZuBMs/Owe1pzfeW6dqVP/x9e6byf9+OxZYyE56qDV2ILQuV3ps30agPw660+wcFD9CkxjW79YL3ujcOBGsx1NfdCF7mg5Ab9Lh8g9WZ7T9cyJinmiP48Pq/4kuAbUYQR9atKPkLhY4YxPEuRflIg68G3D0vhAdS6CCDb5tO3au+NfC6w2AMfn1qHQURiFgs0AYF/72GpmyqG3j/9fC7BO2Y5USExUeG9YCZ6R1AdyBMa5Lrd0GNxh4xkKWodxBcbLq5IVDiH+0eix4ALlNXCHUi/U5uV3TC3dYDOU3/fjgx52Wioi+eUvjlK71OlOenmnbLLFEGQ6orpTptPBfKY3JTz4mPg8+xpmqDDSWlAXCKMbLV5RDR8c0LBhPKVjVVVHyBy8IwWkpZd3OsL8Gr32SKOFck4RRjZIUrzFdonE8yAWkN2iSbVjwy1MZL+78gnEhXxYafwq7c6c6N1HH0G1QHPAQwPF3T6FYT/JSWL66dnMfDwMdTWfm1wijGwI+g2qOxEscvQzDj9ODeLei+UxuSUrRd0/1f5MxiL8lJYvrp2cx8PAx1NZ+bXCKMbAj6Dao7ESxy9DMOP04N7tWVdHqFcZhHJnEcPE/dCwcK5jL0JLWrGkfZCbd3aZqg67kOPKY3JKVgJQjnGlx0TNIGDEikWLcXbveZT9D4CsqYbW6z3TQcC37ITbu7TNUHXchx5TG5JSsBKEc40uOiZpAwYkUixbi52jva9M+uZkgxdIHDAM6IRfX8CCaZk51E4dz3apXgY+lldxk/kVUqkXRCbPZgySFQ4h/tHpU4NXYhPHQZl/QPa1gIu05VHbld0wt2D6KqVSLj/SITroph4lPt8uctSH6AilmeTJPAmMCCGapDNaPfKSywK7BzA6qr9x7anHkZU/vlJJQfvwU4O5HTHxOH7csbRHt/VBGOs+hDk/pNMb3xpD27kk9rgUzYhBP0ivgsNkM7lLu/41VTI++sF781Azv/E3sPv0vMYmrAiC1H0M8zmCQjtI3oY67RW6PdfOxQQ5jFor5w4Nuusk+Ct/JFHasmS7xiSNgyAMJwo0fi/NU7pS7XRgKG1ffWvQBSWAy8NjnJD/bTymbfedFEywqU/LCAq/q1StpQSUv2l6Nj0+7BxHHPntzQSgj6jFxgWRC7xEeUQGedFqjKgdYyCITFZF71gNp16WN64ecjI/trYHeiTIQ6UcIAZF50mo8h9nBefQ26DSL/3VgHMPhDWDABgCqh5x+rt/J7j83PSB1yRNoKOHICGo7cnEVy9ZATvYAmnCIdEjdrFgA4sGGggyYLeF3TtP8IDlbCRkXaLaN5YovpaMWGCCv/XGa5PCFlBXsm2qeSh2EQ+bVcD5lyn0+fNXg0Vf9cPORNj47+srs37GNqJxhUNIfMTUO88KFog6R7bwIIdzOWXI646zbp4fu6zR+KjMdhmXnCoylqPSgCf8MdmSC5APhpLUOyBgaGs105aGl16l3HO18CYwCCUJlFWa7oHUZ6NhI2JI8QLa7XTGl16jlE8J09xU6kspw1z/2IuwBNhVyf7Al3fD5uCvhJtBAFCoi9IeYmbHKh1mZ3ogRnrQmW0dr/RgQMssceHRT1mu7ElGfrsszgv5m36IFFBmlvFv2iAAAAA",alt:"graphs picture"}),e.createElement(w,{variant:"contained",color:"primary"},e.createElement(i,{component:d,to:"/graphs",style:{color:"white",textDecorationLine:"none"}},"Graphs"))),e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccines Usage"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{className:"vaccineContainer",style:{padding:"8px"}},"Bottles Used: ",o,"/",t.length,e.createElement("p",null,`${(o/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"7px"}},"Injections Used: ",m.length,"/",p,e.createElement("p",null,`${(m.length/p*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},e.createElement(i,{component:d,to:"/solar"},"SolarBuddhica:"),e.createElement("p",null,u("SolarBuddhica"),"/",n("SolarBuddhica")),e.createElement("p",null,`${(1442/n("SolarBuddhica")*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},e.createElement(i,{component:d,to:"/antiqua"},"Antiqua:"),e.createElement("p",null,u("Antiqua"),"/",n("Antiqua")),e.createElement("p",null,`${(1242/n("Antiqua")*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},e.createElement(i,{component:d,to:"/zerpfy"},"Zerpfy:"),e.createElement("p",null,u("Zerpfy"),"/",n("Zerpfy")),e.createElement("p",null,`${(1321/n("Zerpfy")*100).toString().substr(0,4)}%`)))),e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccines By Area"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"HYKS:",e.createElement("p",null,l("HYKS")),e.createElement("p",null,`${(l("HYKS")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"KYS:",e.createElement("p",null,l("KYS")),e.createElement("p",null,`${(l("KYS")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"TAYS:",e.createElement("p",null,l("TAYS")),e.createElement("p",null,`${(l("TAYS")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"TYKS:",e.createElement("p",null,l("TYKS")),e.createElement("p",null,`${(l("TYKS")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"OYS:",e.createElement("p",null,l("OYS")),e.createElement("p",null,`${(l("OYS")/t.length*100).toString().substr(0,4)}%`)))),e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccinations By Gender"),e.createElement("div",null,e.createElement("p",null,"Female: ",E[0].value," - ",`${(E[0].value/a.length*100).toString().substr(0,4)}%`),e.createElement("p",null,"Male: ",E[1].value," - ",`${(E[1].value/a.length*100).toString().substr(0,4)}%`),e.createElement("p",null,"Nonbinary: ",E[2].value," - ",`${(E[2].value/a.length*100).toString().substr(0,4)}%`)),e.createElement("div",{style:{margin:"-50px 0 0 -50px"}},e.createElement(T,{width:400,height:400},e.createElement(D,{data:E,cx:"50%",cy:"50%",labelLine:!0,label:`${E.value}`,outerRadius:80,dataKey:"value"},E.map(((t,a)=>e.createElement(I,{key:`cell-${a}`,fill:g[a%g.length]}))))))),e.createElement(f,{className:"infoBasicContainer",elevation:3},e.createElement("h3",{style:{marginBottom:"20px",textAlign:"center"}},"Vaccines Arrivals"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"January:",e.createElement("p",null,c("01")),e.createElement("p",null,`${(c("01")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"February:",e.createElement("p",null,c("02")),e.createElement("p",null,`${(c("02")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"March:",e.createElement("p",null,c("03")),e.createElement("p",null,`${(c("03")/t.length*100).toString().substr(0,4)}%`)),e.createElement("div",{className:"vaccineContainer",style:{padding:"9px"}},"April:",e.createElement("p",null,c("04")),e.createElement("p",null,`${(c("04")/t.length*100).toString().substr(0,4)}%`)))),e.createElement(f,{className:"infoBasicContainer",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"},elevation:3},e.createElement("h3",null,"RAW Data")," ",e.createElement("h3",null,"@")," ",e.createElement(i,{href:"https://github.com/solita/vaccine-exercise-2021/tree/master/resources",style:{fontSize:"2rem"}},"GitHub"))))};be.propTypes={vaccines:s.array.isRequired};const xe=({vaccines:t,data:a})=>{const n=["#8884d8","#82ca9d","#d84a26"],l=e=>t.filter((t=>t.vaccine===e)).length,r=e=>t.filter((t=>t.healthCareDistrict===e)).length,c=(e,a)=>t.filter((t=>t.healthCareDistrict===e)).filter((e=>e.arrived.includes(`2021-${a}`))).length,i=[{name:"SolarBuddhica",value:l("SolarBuddhica")},{name:"Antiqua",value:l("Antiqua")},{name:"Zerpfy",value:l("Zerpfy")}],s=[{name:`HYKS - ${r("HYKS")}`,value:r("HYKS")},{name:`KYS - ${r("KYS")}`,value:r("KYS")},{name:`TAYS - ${r("TAYS")}`,value:r("TAYS")},{name:`TYKS - ${r("TYKS")}`,value:r("TYKS")},{name:`OYS - ${r("OYS")}`,value:r("OYS")}],m=[{month:"January",HYKS:c("HYKS","01"),KYS:c("KYS","01"),TAYS:c("TAYS","01"),TYKS:c("TYKS","01"),OYS:c("OYS","01")},{month:"February",HYKS:c("HYKS","02"),KYS:c("KYS","02"),TAYS:c("TAYS","02"),TYKS:c("TYKS","02"),OYS:c("OYS","02")},{month:"March",HYKS:c("HYKS","03"),KYS:c("KYS","03"),TAYS:c("TAYS","03"),TYKS:c("TYKS","03"),OYS:c("OYS","03")},{month:"April",HYKS:c("HYKS","04"),KYS:c("KYS","04"),TAYS:c("TAYS","04"),TYKS:c("TYKS","04"),OYS:c("OYS","04")}];return e.createElement("div",null,e.createElement("h2",{className:"topHeader"},e.createElement(R,null),"Vaccine Arrivals by Month"),e.createElement("div",{className:"graphsContainer"},e.createElement(j,{width:730,height:250,data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(F,{type:"monotone",dataKey:"SolarBhuddica",stroke:n[0],activeDot:{r:8}}),e.createElement(F,{type:"monotone",dataKey:"Antiqua",stroke:n[1],activeDot:{r:8}}),e.createElement(F,{type:"monotone",dataKey:"Zerpfy",stroke:n[2],activeDot:{r:8}})),e.createElement(G,{width:500,height:300,data:a,margin:{top:20,right:30,left:20,bottom:5}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"SolarBhuddica",stackId:"a",fill:n[0]}),e.createElement(M,{dataKey:"Antiqua",stackId:"a",fill:n[1]}),e.createElement(M,{dataKey:"Zerpfy",stackId:"a",fill:n[2]})),e.createElement(T,{width:400,height:400},e.createElement(D,{data:i,cx:"50%",cy:"50%",labelLine:!0,label:`${i.value}`,outerRadius:80,dataKey:"value"},i.map(((t,a)=>e.createElement(I,{key:`cell-${a}`,fill:n[a%n.length]}))))),e.createElement(O,{width:"100%",height:"100%"},e.createElement(U,{width:500,height:400,data:a,margin:{top:10,right:30,left:0,bottom:0}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(Q,{type:"monotone",dataKey:"SolarBhuddica",stackId:"1",stroke:n[0],fill:n[0]}),e.createElement(Q,{type:"monotone",dataKey:"Antiqua",stackId:"1",stroke:n[1],fill:n[1]}),e.createElement(Q,{type:"monotone",dataKey:"Zerpfy",stackId:"1",stroke:n[2],fill:n[2]})))),e.createElement("h2",{className:"topHeader"},e.createElement(J,null),"Vaccines by Health Districts"),e.createElement("div",{className:"areaGraphsContainer"},e.createElement($,{width:400,height:200,data:s,dataKey:"value",ratio:4/3,stroke:"#fff",fill:n[0]}),e.createElement(U,{width:500,height:400,data:m,stackOffset:"expand",margin:{top:10,right:30,left:0,bottom:0}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"month"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(Q,{type:"monotone",dataKey:"HYKS",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(Q,{type:"monotone",dataKey:"KYS",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(Q,{type:"monotone",dataKey:"TAYS",stackId:"1",stroke:"#54b695",fill:"#54b695"}),e.createElement(Q,{type:"monotone",dataKey:"TYKS",stackId:"1",stroke:"#14245a",fill:"#14245a"}),e.createElement(Q,{type:"monotone",dataKey:"OYS",stackId:"1",stroke:"#a0562c",fill:"#a0562c"}))))};xe.propTypes={vaccines:s.array.isRequired,data:s.array.isRequired,vaccinations:s.array};const Ce=({vaccines:t,data:a,vaccinations:n})=>{const l=t.filter((e=>"SolarBuddhica"===e.vaccine)),r=l.map((e=>e.id)),c=n.map((e=>e.sourceBottle)),i=r.filter((e=>c.includes(e))).length,s=c.filter((e=>r.includes(e))).length,m=6*t.filter((e=>"SolarBuddhica"===e.vaccine)).length,o=e=>l.filter((t=>t.arrived.includes(`2021-${e}`))).map((e=>e.id)).filter((e=>c.includes(e))).length,d=[{name:"January",used:o("01"),unused:a[0].SolarBhuddica-o("01")},{name:"February",used:o("02"),unused:a[1].SolarBhuddica-o("02")},{name:"March",used:o("03"),unused:a[2].SolarBhuddica-o("03")},{name:"April",used:o("04"),unused:a[3].SolarBhuddica-o("04")}];return e.createElement("div",{style:{display:"grid",placeItems:"center",gap:"15px"}},e.createElement("h1",null,"SolarBuddhica"),e.createElement("p",null,"Used vaccine bottles: ",i,"/",l.length," (6 injections per bottle)"),e.createElement("p",null,"Used injections: ",s,"/",m),e.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"15px"}},e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine arrivals by month"),e.createElement(G,{width:450,height:300,data:a},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"SolarBhuddica",fill:"#8884d8"}))),e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine usage by month"),e.createElement(G,{width:500,height:300,data:d,margin:{top:20,right:30,left:20,bottom:5}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"used",stackId:"a",fill:"#458b47"}),e.createElement(M,{dataKey:"unused",stackId:"a",fill:"crimson"})))))};Ce.propTypes={vaccines:s.array.isRequired,data:s.array.isRequired,vaccinations:s.array.isRequired};const Ae=({vaccines:t,data:a,vaccinations:n})=>{const l=t.filter((e=>"Antiqua"===e.vaccine)),r=l.map((e=>e.id)),c=n.map((e=>e.sourceBottle)),i=r.filter((e=>c.includes(e))).length,s=c.filter((e=>r.includes(e))).length,m=4*t.filter((e=>"Antiqua"===e.vaccine)).length,o=e=>l.filter((t=>t.arrived.includes(`2021-${e}`))).map((e=>e.id)).filter((e=>c.includes(e))).length,d=[{name:"January",used:o("01"),unused:a[0].Antiqua-o("01")},{name:"February",used:o("02"),unused:a[1].Antiqua-o("02")},{name:"March",used:o("03"),unused:a[2].Antiqua-o("03")},{name:"April",used:o("04"),unused:a[3].Antiqua-o("04")}];return e.createElement("div",{style:{display:"grid",placeItems:"center",gap:"15px"}},e.createElement("h1",null,"Antiqua"),e.createElement("p",null,"Used vaccine bottles: ",i,"/",l.length," (4 injections per bottle)"),e.createElement("p",null,"Used injections: ",s,"/",m),e.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"15px"}},e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine arrivals by month"),e.createElement(G,{width:450,height:300,data:a},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"Antiqua",fill:"#41cf7c"}))),e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine usage by month"),e.createElement(G,{width:500,height:300,data:d,margin:{top:20,right:30,left:20,bottom:5}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"used",stackId:"a",fill:"#458b47"}),e.createElement(M,{dataKey:"unused",stackId:"a",fill:"crimson"})))))};Ae.propTypes={vaccines:s.array.isRequired,data:s.array.isRequired,vaccinations:s.array.isRequired};const Ke=({vaccines:t,data:a,vaccinations:n})=>{const l=t.filter((e=>"Zerpfy"===e.vaccine)),r=l.map((e=>e.id)),c=n.map((e=>e.sourceBottle)),i=r.filter((e=>c.includes(e))).length,s=c.filter((e=>r.includes(e))).length,m=5*t.filter((e=>"Zerpfy"===e.vaccine)).length,o=e=>l.filter((t=>t.arrived.includes(`2021-${e}`))).map((e=>e.id)).filter((e=>c.includes(e))).length,d=[{name:"January",used:o("01"),unused:a[0].Zerpfy-o("01")},{name:"February",used:o("02"),unused:a[1].Zerpfy-o("02")},{name:"March",used:o("03"),unused:a[2].Zerpfy-o("03")},{name:"April",used:o("04"),unused:a[3].Zerpfy-o("04")}];return e.createElement("div",{style:{display:"grid",placeItems:"center",gap:"15px"}},e.createElement("h1",null,"Zerpfy"),e.createElement("p",null,"Used vaccine bottles: ",i,"/",l.length," (5 injections per bottle)"),e.createElement("p",null,"Used injections: ",s,"/",m),e.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"15px"}},e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine arrivals by month"),e.createElement(G,{width:450,height:300,data:a},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"Zerpfy",fill:"#D94B25"}))),e.createElement("div",null,e.createElement("h3",{style:{textAlign:"center"}},"Vaccine usage by month"),e.createElement(G,{width:500,height:300,data:d,margin:{top:20,right:30,left:20,bottom:5}},e.createElement(L,{strokeDasharray:"3 3"}),e.createElement(H,{dataKey:"name"}),e.createElement(Z,null),e.createElement(P,null),e.createElement(V,null),e.createElement(M,{dataKey:"used",stackId:"a",fill:"#458b47"}),e.createElement(M,{dataKey:"unused",stackId:"a",fill:"crimson"})))))};Ke.propTypes={vaccines:s.array.isRequired,data:s.array.isRequired,vaccinations:s.array.isRequired};const Ne=()=>X.get("http://localhost:8000/api/vaccines").then((e=>e.data)),Ye=()=>X.get("http://localhost:8000/api/vaccinations").then((e=>e.data));const Be=({vaccine:t})=>{const a=W();return t?e.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"},className:"currentVaccineContainer"},e.createElement("img",{src:"/assets/vaccine.e5d96c26.svg",height:"150"}),e.createElement(f,{elevation:3,style:{maxWidth:"50%"}},e.createElement(z,null,e.createElement(_,null,e.createElement(ee,{primary:`Order number: ${t.orderNumber}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`ID: ${t.id}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Responsible person: ${t.responsiblePerson}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Area: ${t.healthCareDistrict}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Type: ${t.vaccine}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Injections: ${t.injections}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Arrived: ${new Date(t.arrived).toLocaleString()}`})))),e.createElement(w,{variant:"contained",color:"secondary",onClick:()=>{a.goBack()}},"Go Back")):null};Be.propTypes={vaccine:s.object};const ke=({vaccination:t,vaccines:a})=>{const n=W();if(!t)return null;const l=a.filter((e=>e.id===t.sourceBottle));return e.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"},className:"currentVaccinationContainer"},e.createElement("img",{src:"/assets/vaccination.883c7c6e.svg",height:"150"}),e.createElement(f,{elevation:3,style:{maxWidth:"40%"}},e.createElement(z,null,e.createElement(_,null,e.createElement(ee,{primary:`ID: ${t["vaccination-id"]}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Source bottle: ${t.sourceBottle}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Gender: ${t.gender}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Vaccination date:\n        ${new Date(t.vaccinationDate).toLocaleString()}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Type: ${l[0].vaccine}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Responsible person: ${l[0].responsiblePerson}`})),e.createElement(te,null),e.createElement(_,null,e.createElement(ee,{primary:`Area: ${l[0].healthCareDistrict}`})))),e.createElement(w,{variant:"contained",color:"secondary",onClick:()=>{n.goBack()}},"Go Back"))};ke.propTypes={vaccines:s.array.isRequired,vaccination:s.object};const qe=()=>{const[t,a]=p.exports.useState([]),[n,l]=p.exports.useState([]);p.exports.useEffect((()=>{(async()=>{const e=await Ne();a(e)})()}),[]),p.exports.useEffect((()=>{(async()=>{const e=await Ye();l(e)})()}),[]);const r=(e,a)=>t.filter((t=>t.vaccine===e)).filter((e=>e.arrived.includes(`2021-${a}`))).length,c=[{name:"January",SolarBhuddica:`${r("SolarBuddhica","01")}`,Antiqua:`${r("Antiqua","01")}`,Zerpfy:`${r("Zerpfy","01")}`},{name:"February",SolarBhuddica:`${r("SolarBuddhica","02")}`,Antiqua:`${r("Antiqua","02")}`,Zerpfy:`${r("Zerpfy","02")}`},{name:"March",SolarBhuddica:`${r("SolarBuddhica","03")}`,Antiqua:`${r("Antiqua","03")}`,Zerpfy:`${r("Zerpfy","03")}`},{name:"April",SolarBhuddica:`${r("SolarBuddhica","04")}`,Antiqua:`${r("Antiqua","04")}`,Zerpfy:`${r("Zerpfy","04")}`}],i=ae("/vaccines/:id"),s=i?t.find((e=>e.id===i.params.id)):null,m=ae("/vaccinations/:id"),o=m?n.find((e=>e["vaccination-id"]===m.params.id)):null;return e.createElement("div",null,e.createElement(ie,null),e.createElement(ne,null,e.createElement(le,{path:"/about"},e.createElement(se,null)),e.createElement(le,{path:"/solar"},e.createElement(Ce,{vaccines:t,data:c,vaccinations:n})),e.createElement(le,{path:"/antiqua"},e.createElement(Ae,{vaccines:t,data:c,vaccinations:n})),e.createElement(le,{path:"/zerpfy"},e.createElement(Ke,{vaccines:t,data:c,vaccinations:n})),e.createElement(le,{path:"/vaccines/:id"},e.createElement(Be,{vaccine:s})),e.createElement(le,{path:"/vaccinations/:id"},e.createElement(ke,{vaccination:o,vaccines:t})),e.createElement(le,{path:"/vaccinelist"},e.createElement(Ee,{vaccines:t,vaccinations:n})),e.createElement(le,{path:"/vaccinationlist"},e.createElement(Se,{vaccinations:n,vaccines:t})),e.createElement(le,{path:"/graphs"},e.createElement(xe,{vaccines:t,data:c})),e.createElement(le,{path:"/"},e.createElement(be,{vaccines:t,vaccinations:n}))))};re.render(e.createElement(ce,null,e.createElement(e.StrictMode,null,e.createElement(qe,null))),document.getElementById("root"));
