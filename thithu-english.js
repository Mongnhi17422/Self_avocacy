


const startingMinutes = 60;
let time = startingMinutes *60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown(),1000);
function updateCountdown () {
    const minutes = Math.floor(time/60);
    let seconds =  Math.floor (time % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    
} 




window.addEventListener('load',function(){
    var q=$('.question'),
    w=["Bạn là thần đồng","Bạn rất suất xắc","Kiến thức của bạn khá tốt","Bạn có thể sẽ làm tốt hơn thế, đừng nản chí nhé!"]
    $(q).each(function(n){
      var ul=$(q[n]).find('ul'),mes=$(q[n]).parent().find('.message')
      console.log(mes)
      $(ul).each(function(i,v){
        var li=$(ul[i]).find('li'),p=$(ul[i]).next('p'),cor=$(ul[i]).find('li.correct')
        $(li).one('click',function(){
          $(this).parent().addClass('answered')
          $(this).addClass('selected')
          $(p).appendTo($(cor)).addClass('explaination')
          if(i==ul.length-1){
            var corr=$(ul).find('li.correct.selected').length,
            s=corr*100/ul.length-1
            v='<span class="correct">'+corr+'</span><span class="total">'+ul.length+'</span>',
            $(v).insertAfter($(mes))
            w.forEach(function(){
              if(s==100)$(mes).html(w[0])
              else if(s>=80)$(mes).html(w[1])
              else if(s>=50)$(mes).html(w[2])
              else $(mes).html(w[3])
            })
          }
        })
      })
    })
  })