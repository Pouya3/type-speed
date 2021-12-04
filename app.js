const select=document.getElementById('opt');
const time=document.getElementById('time');
const score=document.getElementById('score');
const word=document.getElementById('word');
const game=document.getElementById('game');
const failed=document.getElementById('failed');
const input=document.getElementById('input-word');
const reload=document.getElementById('Reload');
const failed_score=document.getElementById('failed-score');




let difficulty='Easy';
let second=18;
let plusTime=4;
let index=0,score_val=0;
let words_list=['pouya','bad','structure','python','ruler','internal','fgsdfh','qsdfkjer','lpoiwefb','qwedfvdsb'
,'bzperjq','qlduanbvd','turtle','uevzlkfda','dvajhwedvkj','asdwev','tavxntowfg'];
word.innerText=words_list[index];
score.innerText=`score: ${score_val}`;



function starting(){

    let interTime=setInterval(function(){
        second--;
        time.innerText=`Time Left: ${second}`;
        if(second===0){
            game.style.display="none";
            failed.style.display="block";
            failed_score.innerText=`your score is ${score_val}`;
            clearInterval(interTime);
        }
    },1000);

}

function updateDom(){
    index++;score_val++;
    if(index==words_list.length-1){
        index=0;
    }
    second+=plusTime;
    word.innerText=words_list[index];
    score.innerText=`score: ${score_val}`;
}

select.addEventListener('change',function(){
    difficulty=select.value;
    if(difficulty=='Hard') {second=5;plusTime=2;};
    if(difficulty=='Medium') {second=10;plusTime=3;};
    if(difficulty=='Easy') {second=18;plusTime=4;};
    time.innerText=`Time Left: ${second}`;
});

input.addEventListener('input',function(e){
    if(input.value==word.innerText){
        input.value='';
        updateDom();
    }
});


reload.addEventListener('click',function(){
    game.style.display="block";
    failed.style.display="none";
    score_val=0;
    index=0;
    input.value='';
    score.innerText=`score: ${score_val}`;
    difficulty=select.value;
    if(difficulty=='Hard') {second=5;plusTime=2;};
    if(difficulty=='Medium') {second=10;plusTime=3;};
    if(difficulty=='Easy') {second=18;plusTime=4;};
    time.innerText=`Time Left: ${second}`;
    starting();
});


window.addEventListener('load',starting);
