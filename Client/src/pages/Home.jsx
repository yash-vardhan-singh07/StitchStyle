import React from 'react';
import ReactPlayer from 'react-player';
import { useState,useEffect } from 'react';

export const Home=()=> {
 
  const [videos,setVideos]=useState([]);


   const getVideos=async ()=>{
      try {
          const response =await fetch("http://localhost:3000/user/getData",
            {
              method:"GET"
            });

          if(response.ok){
              const data=await response.json();
              setVideos(data.response);
          }
      } catch (error) {
          console.log(error);
      }
   }

   useEffect(()=>{
      getVideos();
      
   },[]);
   


  return (
  <>
  <section id="home-header">
           <h2>#The body achieves what the mind believes</h2>
         </section>
    <section id="video-section">
    <div class="video-container">
    {
        videos.map((curEle,index)=>{
            const{name,details,url}=curEle;
            
            return(
        <div class="pro" key={index}>
          <ReactPlayer
            url={`videos/${url}.mp4`}
            controls={true}
            width="100%"
            height="100%"
            playbackRate={1.0}
            volume={0.5}
            muted={false}
            loop={false}
            playsInline={true}
            onError={(e) => console.log('Error playing video:', e)}
          />
            <div class="des">
                <h3>{name}</h3>
                <p>{details}</p>
            </div>
            
        </div>
            )
        })
    
    }
     </div>

    </section>
    </>
  );
}