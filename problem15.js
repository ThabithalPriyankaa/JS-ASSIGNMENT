function postfix(arr)
{
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]<=9)
        {
            arr1.push(arr[i]);
        }
        else{
            let c;
            let a=arr1.pop();
            let b=arr1.pop();
            let exp=arr[i];
            switch(exp)
            {
                case"+":
                c=b+a;
                arr1.push(c)
                break;
                
                case"-":
                c=b-a;
                arr1.push(c)
                break;

                case"*":
                c=b*a;
                arr1.push(c)
                break;

                case"/":
                c=b/a;
                arr1.push(c)
                break;

                case"^":
                c=Math.pow(a,b)
                arr1.push(c)
                break;

                default:c=0;
                break;
            }
        }
    
    }
    console.log(arr1);

}
let arr=[5,3,1,"\","*", "+"",9,"-"]
postfix(arr)