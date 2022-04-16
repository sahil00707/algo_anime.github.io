
function changeRange(n){
    var number_of_Bars=n;
console.log(n);
var bar=new Array(number_of_Bars);
var value_array=new Array(number_of_Bars);
for(var i=1;i<=number_of_Bars;i++){
    value_array[i]=i;
}
var all_bars=document.querySelector(".all_bars");
for(var i=1;i<=number_of_Bars;i++){
    bar[i]=document.createElement("div");
    bar[i].className="my_bar";
    bar[i].id="my_bar";
    bar[i].style.width=`${1000/number_of_Bars}px`;
    bar[i].style.height=`${value_array[i]*45}px`;
    all_bars.appendChild(bar[i]);
}


}