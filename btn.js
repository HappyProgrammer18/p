
let box=document.createElement('div');
box.classList.add('box');

document.body.appendChild(box);

let paper=document.createElement('div');
paper.classList.add('paper');
paper.innerHTML=masText[1]
document.body.appendChild(paper);


let bar=document.createElement('div');
bar.classList.add('bar');let t=0;
document.body.appendChild(bar);
    const btn=document.createElement('button');
    btn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-280 80-480l200-200 56 56-103 104h494L624-624l56-56 200 200-200 200-56-56 103-104H233l103 104-56 56Z"></path></svg>';
    btn.classList.add('btn');
    document.body.appendChild(btn);
    btn.addEventListener('click',()=>{
if(t==0){bar.classList.add('slide');paper.classList.add('sl');t++;}
else if(t==1){bar.classList.remove('slide');paper.classList.remove('sl');t=0;}
    })

    if(masIndex[0]==0){
        const labe2l=document.createElement('label');
        labe2l.classList.add('container');
        labe2l.innerHTML=`<input type="radio" id="huey" name="drone" value="huey"  /><button  class="infinitive">summary</button>    `;
    bar.appendChild(labe2l); 
    labe2l.addEventListener('click',()=>{
        console.log(masIndex[0])
        paper.innerHTML=masText[0]
    })
     }else{}

for (let i = 1; i < masIndex.length; i++) {

 
    const labe2l=document.createElement('label');
    labe2l.classList.add('container');
    labe2l.innerHTML=`<input type="radio" id="huey" name="drone" value="huey"  /><span class="infinitive">${masIndex[i]}</span>    `;

bar.appendChild(labe2l);




labe2l.addEventListener('click',()=>{
    console.log(masIndex[i])
    paper.innerHTML=masText[i]
})}
    

let yyy=0;
let n=document.createElement('div');
n.classList.add('nn')
box.appendChild(n)
const btn2=document.createElement('button');
btn2.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>';
btn2.classList.add('search');
n.appendChild(btn2);
btn2.addEventListener('click',()=>{
    document.body.removeChild(bar)
    document.body.removeChild(paper)
    document.body.removeChild(btn)
})

let i=document.createElement('input');
i.type='text';
i.setAttribute('id','input-box')

n.appendChild(i);
let namee=document.createElement('div');
namee.innerText='Notes';
namee.classList.add('name')

n.appendChild(namee);
let div=document.createElement('div');
div.classList.add('result-box');
document.body.appendChild(div);

const inputBox=document.getElementById('input-box');
inputBox.onkeyup=function(){
let result=[];
let inp=inputBox.value;
if(inp.length){
    result=mas.filter((keyword)=>{
       return keyword.toLowerCase().includes(inp.toLowerCase())
    })
    console.log(result)
}
display(result)
}
function display(result){
const content=result.map((list)=>{console.log(list)
    
for(let r=0;r<mas.length;r++){
if(mas[r]===list){yyy=r;}
}
console.log(yyy)

    return `<a href="${list}.html" class="b container2" txt="${txtt[yyy]}">${list}</a>`;
    
})
div.innerHTML="<ul>"+ content.join('') +"</ul>"

//console.log(content)
}
