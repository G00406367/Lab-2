let myFunction: number[] = [4,5,6];
for(let i: number = 0; i < myFunction.length; i++){
    console.log(myFunction[i]);
}

function charCount(str) {
    return str.length;
  }
  console.log(charCount("lachlainnfarrell"));

  function countCharacters(str) {
    return str.replace(/\s/g, '').length;
  }
  console.log(countCharacters("123 45 678"));
  
  function both_methods(value: string, spaces?:boolean):number{
    if(spaces)
    {
        return value.length;
    }else{
        return value.replace(/\s/,"").length;
    }
  }
  console.log(both_methods("test 1", true));

    