let arr=[
    {sport:"badminton",player:"palak"},
    {sport:"badminton",player:"zalak"},
    {
    player:{sport:"kabbadi",name:"gita"}
},
{
    player:{sport:"badminton",name:"gita"}
}
]
arr.map((x)=>{
if(x.sport == 'badminton') {
console.log(x.sport);
console.log(x.player);
}
if(typeof(x.player)=== 'object' && x.player.sport=='badminton'){
console.log(x.player.sport);
console.log(x.player.name);
}
}
)