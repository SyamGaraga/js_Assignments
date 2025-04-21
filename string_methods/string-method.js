let arr=["html","css","JAVASCRIPT","react","ANGULAR"]
for(i=0; i<arr.length; i++){
    if(arr[i]===arr[i].toUpperCase()){
        arr[i]=arr[i].toLowerCase()
    }else{
        arr[i]=arr[i].toUpperCase()
    }
}
console.log(arr)