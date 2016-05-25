

      var clickedTime; 
      var createdTime;
      var reactionTime;
      function makeBox()
	  {
        
        var time=Math.random();
        time=time*5000;
        
      setTimeout(function()
	  {
          if (Math.random() > 0.5) {
           document.getElementById("box").style.borderRadius="20px";
          }
          else{
            document.getElementById("box").style.borderRadius="600px";
          }

          var top=Math.random()*40;
         
          var left=Math.random()*500;
          
            
          document.getElementById("box").style.bottom=top+"px";
          document.getElementById("box").style.left=left+"px";

          document.getElementById("box").style.backgroundColor=RandomColor();  
          document.getElementById("box").style.display="block";
          createdTime=Date.now();
    }, time);
    }
      document.getElementById("box").onclick=function()
	  {
          clickedTime=Date.now();
          reactionTime=(clickedTime-createdTime)/1000;
          document.getElementById("time").innerHTML=reactionTime;
         this.style.display="none";
          makeBox();
      };
       makeBox();
       function RandomColor()
 {
      var letters='0123456789ABCDEF'.split('');
      var color = '#';
      for(var i=0;i<6;i++)
	  {
        color += letters[Math.round(Math.random() * 10)];
      }
      return color;
 }
