console.log("Welcome to Gaana");

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs = [
    {songName: "Jalebi Baby", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    {songName: "With You", filePath: "song/2.mp3", coverPath: "cover/2.jpg" },
    {songName: "Still Rollin", filePath: "song/3.mp3", coverPath: "cover/3.jpg" },
    {songName: "Brown Munde", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
    {songName: "Excuses", filePath: "song/5.mp3", coverPath: "cover/5.jpg" },
    {songName: "Insane", filePath: "song/6.mp3", coverPath: "cover/6.jpg" },
    {songName: "Dil Nu", filePath: "song/7.mp3", coverPath: "cover/7.jpg" },
    {songName: "Cheques", filePath: "song/8.mp3", coverPath: "cover/8.jpg" },
    {songName: "Elevated", filePath: "song/9.mp3", coverPath: "cover/9.jpg" },
    {songName: "Baatein ye kabhi na", filePath: "song/10.mp3", coverPath: "cover/10.jpg" },

]
songItems.array.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else if(audioElement.play || audioElement.currentTime>0)
   { audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
   }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
//Update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)* 100)
myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
              
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    songIndex=0;
else
songIndex+=1;
audioElement.src=`song/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=0;
else
songIndex-=1;
audioElement.src=`song/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})