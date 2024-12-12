const par=document.getElementById('myParagraph');
//extracting the text content from 'myParagraph' Replaces all non-alphanumeric characters with spaces even spaces,convert them to an array and sort the array.
let content=par.textContent.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').sort()
//remove empty strings
let newContent=content.filter((i)=> i!=='')
//converting each word to lower case
let content1=newContent.map((i)=>i.toLowerCase())
//creating a function to sort words based on their frequency
function solve(arr){
    return arr.sort((a, b) => 
     arr.filter(x => x === b).length - arr.filter(x => x === a).length || a - b
 );
}
//using set to remove duplicate
let arr= new Set(solve(content1));
//converting the Set object into an array
//we can also use Array.from, forEach or a simple loop
let arr1=[...arr]
console.log(arr1.slice(0,5)) // to check the 5 most occurantes words
// Get the text content of 'my`paragraph' with the different tags
let content2=par.innerHTML
// Getting the first 5 elemets
let a=arr1.slice(0,5)

for(i in a){
    let temp=a[i]+" "
    content2=content2.replaceAll(temp,`<b>${temp}</b>`)
    content2=content2.replaceAll(temp[0].toUpperCase()+temp.substr(1),`<b><u>${temp[0].toUpperCase()+temp.substr(1)}</u></b>`)
}

par.innerHTML=content2
