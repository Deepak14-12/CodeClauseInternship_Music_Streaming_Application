
const music = new Audio('audio');
 music.play();

 const songs = [
    {
        id: 1,
        songName: `A Prayer<br>
        <div class="subtitle">Pagglait- Arijit Singh</div>`,
        poster:"images/arijit/1.jpg"
    },
    {
        id: 2,
        songName: `Aaj Phir Tum Pe Pyaar<br>
        <div class="subtitle"> Hate Story 2-Arijit Singh</div>`,
        poster:"images/arijit/2.jpg"
    },
    {
        id: 3,
        songName: `Aashiqui Aa Gayi<br>
        <div class="subtitle"> Radhe Shyam-Arijit Singh</div>`,
        poster:"images/arijit/3.jpg"
    },
    {
        id: 4,
        songName: `Ayaat- Bajirao Mastani<br>
        <div class="subtitle"> Arijit Singh</div>`,
        poster:"images/arijit/4.jpg"
    },
    {
        id: 5,
        songName: `Ae Dil Hai Mushkil- Arijit Singh<br>
        <div class="subtitle"> Ae Dil Hai Mushkil</div>`,
        poster:"images/arijit/5.jpg"
    },
    {
        id: 6,
        songName: `Agar Tum Saath Ho<br>
        <div class="subtitle"> Tamasha-Arijit Singh</div>`,
        poster:"images/arijit/6.jpg"
    },
    {
        id: 7,
        songName: `Aami Je Tumar<br>
        <div class="subtitle"> Bhool Bhulaiyaa 2 -Arijit Singh  </div>`,
        poster:"images/arijit/7.jpg"
    },
    {
        id: 8,
        songName: `Chaleya - Jawan <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/arijit/8.jpg"
    }
    ]

    Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    });

    let masterPlay = document.getElementById('masterPlay');
    let wave = document.getElementById('wave');
    masterPlay.addEventListener('click',()=>{
        if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        }else{
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('bi-play');
            masterPlay.classList.remove('bi-pause');
        }
    });

    const makeAllplays = () => {
        Array.from(document.getElementsByClassName('playlist')).forEach((el)=>{
            el.classList.add('bi-play-circle');
            el.classList.remove('bi-pause-circle');
          
        })
    }

    const makeAllBackground = () => {
        Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
            el.style.background ='rgb(105,105,105,.0)';
        })
    }
 


   let index = 0;
   let poster_master_play  = document.getElementById('poster_master_play');
   let download_music  = document.getElementById('download_music');
   let title  = document.getElementById('title');
   
   Array.from(document .getElementsByClassName('playlist')).forEach((e)=>{
       e.addEventListener('click',(el) => {
        index = el.target.id; 
       //  console.log(index);
       music.src = `audio/arijit/${index}.mp3`;
      /** using poster */
       poster_master_play.src = `img/arijit/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play');
       masterPlay.classList.add('bi-pause');
       download_music.href = `audio/arijit/${index}.mp3`;

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName; 
        download_music.setAttribute('download',songName);
        /** poster can be display using this also */
       // poster_master_play.src = poster;
       });
       
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
       makeAllplays();
       el.target.classList.remove('bi-play-circle');
       el.target.classList.add('bi-pause-circle');
       wave.classList.add('active1');

       }) ;
     });


     let current_time = document.getElementById('current_time');
     let current_end = document.getElementById('current_end');
     let seek = document.getElementById('seek');
     let bar2 = document.getElementById('bar2');
     let dot = document.getElementsByClassName('dot')[0];

     music.addEventListener('timeupdate',()=>{
        let music_crr = music.currentTime;
        let music_dur = music.duration;
       // console.log(music_crr);
        

      let min1 = Math.floor(music_dur/60);
      let sec1 = Math.floor(music_dur%60);
     // console.log(min1);
      //console.log(sec1);
      if(sec1 < 10){
        sec1 = `0${sec1}`;
      }

      //current_time.innerText = `${min1}:${sec1}`;
      current_end.innerText = `${min1}:${sec1}`;

      let min2 = Math.floor(music_crr/60);
      let sec2 = Math.floor(music_crr%60);

      if(sec2 < 10){
        sec2 = `0${sec2}`;
      }
      
      current_time.innerText = `${min2}:${sec2}`;

      
      let progressbar = parseInt((music_crr / music_dur ) * 100);
      seek.value = progressbar;
      //console.log(seek.value);
       let seekbar = seek.value;
       bar2.style.width = `${seekbar}%`;
       dot.style.left = `${seekbar}%`;
      
    });

    seek.addEventListener('change',() => {
        music.currentTime = seek.value * music.duration /100;
    });


    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change', () => {
        if(vol.value == 0) {
          vol_icon.classList.remove('bi-volume-up');
          vol_icon.classList.remove('bi-volume-down');
          vol_icon.classList.add('bi-volume-off');
        }
       if(vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
       }
       if( vol.value > 50) {
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
       }
       let vol_a = vol.value;
       vol_bar.style.width = `${vol_a}%`;
       vol_dot.style.left = `${vol_a}%`;
       music.volume = vol_a / 100;
       
    });


    let back = document.getElementById('back');
    let next = document.getElementById('next');

back.addEventListener('click', () => {
index -= 1;
if(index < 1){
    index = Array.from(document.getElementsByClassName('songItem')).length;
}
music.src = `audio/arijit/${index}.mp3`;
      // music.src = `audio/${index}.m4a`;
      poster_master_play.src = `img/arijit/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play');
       masterPlay.classList.add('bi-pause');

       let songTitles = songs.filter((els) => {
        return els.id == index;
       });

       songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        //poster_master_play.src = poster;
       });
       
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
       makeAllplays();
       el.target.classList.remove('bi-play-circle');
       el.target.classList.add('bi-pause-circle');
       wave.classList.add('active1');
})


next.addEventListener('click',() => {
    index ++;

    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;

    }

    music.src = `audio/arijit/${index}.mp3`;
    
     poster_master_play.src = `img/arijit/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play');
     masterPlay.classList.add('bi-pause');

     let songTitles = songs.filter((els) =>{
      return els.id == index;
     });

     songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
      //poster_master_play.src = poster;
     });
     
     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
     makeAllplays();
     el.target.classList.remove('bi-play-circle');
     el.target.classList.add('bi-pause-circle');
     wave.classList.add('active1');  
})






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop = document.getElementsByClassName('pop')[0];


pop_song_right.addEventListener('click',()=>{
pop.scrollLeft +=330;
})

pop_song_left.addEventListener('click',()=>{
    pop.scrollLeft -=330;
    })
    

let art_left = document.getElementById('art_left');
let art_right = document.getElementById('art_right');
let art_box = document.getElementsByClassName('art_box')[0];


art_right.addEventListener('click',()=>{
art_box.scrollLeft +=330;
})

art_left.addEventListener('click',()=>{
    art_box.scrollLeft -=330;
    });

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',() =>{
let a = shuffle.innerHTML;
  
switch (a) {
    case "next":
        shuffle.classList.add('bi-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'repeat';
        break;

    case "repeat":
        shuffle.classList.remove('bi-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML = 'random';
        break;

        case "random":
        shuffle.classList.remove('bi-repeat');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'next';
        break;
}
});

const next_music = () => {
    if (index == songs.length) {
        index= 1;
    } else {
        index++;
    }
    music.src = `audio/arijit/${index}.mp3`;
   poster_master_play.src = `img/arijit/${index}.jpg,png`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `audio/arijit/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
    return els.id == index;
          });
   
    songTitles.forEach(elss => {
    let {songName} = elss;
    title.innerHTML = songName; 
    download_music.setAttribute('download',songName);
    /** poster can be display using this also */
   // poster_master_play.src = poster;
          });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
    makeAllplays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src = `img/arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `audio/arijit/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
    return els.id == index;
          });
   
    songTitles.forEach(elss => {
    let {songName,poster} = elss;
    title.innerHTML = songName; 
    download_music.setAttribute('download',songName);
    /** poster can be display using this also */
    //poster_master_play.src = poster;
          });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
    makeAllplays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src = `img/arijit/${index}.jpg`;
     music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `audio/arijit/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
    return els.id == index;
          });
   
    songTitles.forEach(elss => {
    let {songName,poster} = elss;
    title.innerHTML = songName; 
    download_music.setAttribute('download',songName);
    /** poster can be display using this also */
   // poster_master_play.src = poster;
          });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1 )"
    makeAllplays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}
    
music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'next':
            next_music();
            break;
    
        case 'random':
            random_music();
            break;
    
    }
    })