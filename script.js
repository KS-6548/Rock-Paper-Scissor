// let player_state;
// let chance_state =10;
// let dcount = 0;
// let wcount = 0;
// let lcount = 0;


// function rock()
// { 
//     player_state=0;
//     chan();
//     document.getElementById("user").style.background="url('https://th.bing.com/th/id/OIP.CASI0FDZOuHLOSVDYJe4JgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7') no-repeat center/cover"
//     AI_turn()
//     gameover()
// }

// function paper()
// {
//     player_state=1;
//     chan()
//     document.getElementById("user").style.background="url('https://th.bing.com/th/id/OIP.jzooPvoFxYlEPM8UGE3-YQHaHv?pid=ImgDet&w=191&h=198&c=7') no-repeat center/cover"
//     AI_turn()
//     gameover()
// }

// function scissor()
// {
//     player_state=2;
//     chan()
//     document.getElementById("user").style.background="url('https://th.bing.com/th/id/OIP.9Ffr6gGVHkwJL6wKF1ltHAAAAA?w=146&h=161&c=7&r=0&o=5&pid=1.7') no-repeat center/cover"
//     AI_turn()
//     gameover()
// }

// function chan(){
//     chance_state--;
//     document.getElementById("chance").innerHTML = chance_state
// }

// function AI_turn()
// {
//     let rand_value = Math.floor(Math.random()*3)

//     if(rand_value==0)
//     {
//         document.getElementById("AI").style.background="url('https://th.bing.com/th/id/OIP.CASI0FDZOuHLOSVDYJe4JgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7') no-repeat center/cover"
//     }
//     else if(rand_value==1)
//     {
//         document.getElementById("AI").style.background="url('https://th.bing.com/th/id/OIP.jzooPvoFxYlEPM8UGE3-YQHaHv?pid=ImgDet&w=191&h=198&c=7') no-repeat center/cover"
//     }
//     else
//     {
//         document.getElementById("AI").style.background="url('https://th.bing.com/th/id/OIP.9Ffr6gGVHkwJL6wKF1ltHAAAAA?w=146&h=161&c=7&r=0&o=5&pid=1.7') no-repeat center/cover"
//     }

//     if((player_state==0 && rand_value==0)||(player_state==1 && rand_value==1)||(player_state==2 && rand_value==2))
//     {
//         document.getElementById("res").innerHTML = "Match Draw"
//         dcount++;
//     }
//     else if((player_state==0 && rand_value==2)||(player_state==1 && rand_value==0)||(player_state==2 && rand_value==1))
//     {
//         document.getElementById("res").innerHTML = "You Win"
//         wcount++;
//     }
//     else
//     {
//         document.getElementById("res").innerHTML = "You Loss"
//         lcount++;
//     }
// }

// function gameover()
// {
//     if(chance_state<1)
//     {
//         chance_state = 10
//         document.getElementById("chance").innerHTML = chance_state
//         document.getElementById("res").innerHTML = "Start Game"
//         document.getElementById("AI").style.background="white"
//         document.getElementById("user").style.background="white"
//         alert("game over")
//         alert(`w:${wcount},L:${lcount},D:${dcount}`)
//         wcount=0;
//         lcount=0;
//         dcount=0;
//     }
// }

let player_state;
let chance_state=10;
let wcount=0;
let lcount=0;
let dcount=0;

function rock()
{
    player_state=0;
    chan()
    document.getElementById("user").style.background='url("https://th.bing.com/th/id/OIP.CASI0FDZOuHLOSVDYJe4JgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7") no-repeat center/cover'
    AI_turn()
    gameover()
}

function paper()
{
    player_state=1;
    chan()
    document.getElementById("user").style.background='url("https://th.bing.com/th/id/OIP.jzooPvoFxYlEPM8UGE3-YQHaHv?pid=ImgDet&w=191&h=198&c=7")no-repeat center/cover'
    AI_turn()
    gameover()
}

function scissor()
{
    player_state=2;
    chan()
    document.getElementById("user").style.background='url("https://th.bing.com/th/id/OIP.9Ffr6gGVHkwJL6wKF1ltHAAAAA?w=146&h=161&c=7&r=0&o=5&pid=1.7")no-repeat center/cover'
    AI_turn()
    gameover()
}

function chan()
{
    chance_state--
    document.getElementById("chance").innerHTML=chance_state
}

function AI_turn()
{
    let rand_value = Math.floor(Math.random()*3)

    if((rand_value==0))
    {
        document.getElementById("AI").style.background='url("https://th.bing.com/th/id/OIP.CASI0FDZOuHLOSVDYJe4JgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7")no-repeat center/cover'
    }
    else if((rand_value==1))
    {
        document.getElementById("AI").style.background='url("https://th.bing.com/th/id/OIP.jzooPvoFxYlEPM8UGE3-YQHaHv?pid=ImgDet&w=191&h=198&c=7")no-repeat center/cover'
    }
    else{
        document.getElementById("AI").style.background='url("https://th.bing.com/th/id/OIP.9Ffr6gGVHkwJL6wKF1ltHAAAAA?w=146&h=161&c=7&r=0&o=5&pid=1.7")no-repeat center/cover'
    }

    if((player_state==0 && rand_value==2)||(player_state==1 && rand_value==0)||(player_state==2 && rand_value==1))
    {
        document.getElementById("res").innerHTML="YOU WIN"
        wcount++
    }
    else if((player_state==0 && rand_value==0)||(player_state==1 && rand_value==1)||(player_state==2 && rand_value==2))
    {
        document.getElementById("res").innerHTML="YOU DRAW"
        dcount++
    }
    else{
        document.getElementById("res").innerHTML="YOU LOSS"
        lcount++
    }

}

function gameover()
{
    if(chance_state<1)
    {
        chance_state=10;
        document.getElementById("chance").innerHTML=chance_state
        document.getElementById("user").style.background="white"
        document.getElementById("AI").style.background="white"
        document.getElementById("res").innerHTML="START GAME"
        alert("GAME OVER")
        alert(`WIN:${wcount},LOSS:${lcount},DRAW:${dcount}`)
        wcount=0;
        lcount=0;
        dcount=0;

    }
}