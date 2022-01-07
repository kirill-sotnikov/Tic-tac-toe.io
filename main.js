const gamePlain = document.querySelector('.plain');
const result = document.querySelector('.result');
let conWinnerPlayer = 0;

const countPlain = 3; // Значение размера поля 3 X 3
let evenPlayer = false;
let but = []

for (let j=0;j<countPlain;j++){
    but[j]=new Array();
}

for (let i=0;i<countPlain;i++){
    for(let j=0; j<countPlain;j++){
        // let butZero = document.createElement('button');
        but[i][j] = 1;
        const crbut = document.createElement('button');
        crbut.innerHTML = '_';
        crbut.style = 'width:50px;height:50px;margin:2px;border:0.2px solid black;border-radius:1px;background-color:floralwhite;font-size: 20px;';
        crbut.addEventListener('click',()=>{
            if(evenPlayer){
                crbut.innerHTML = 'X';
                but[i][j]='X';
                if(win(i,j,crbut.innerHTML) && conWinnerPlayer===0){
                    console.log(`Player X WIN!`);
                    const resultTxt = `Player X WIN!`;
                    result.append(document.createElement('p').innerHTML = `${resultTxt}`);
                    conWinnerPlayer +=1;
                }
                evenPlayer = !evenPlayer; // Меняем игрока на противоположного
            } else {
                crbut.innerHTML = 'O';
                but[i][j]='O';
                if(win(i,j,crbut.innerHTML) && conWinnerPlayer===0){
                    console.log('Player O WIN!');
                    const resultTxt = `Player O WIN!`;
                    result.append(document.createElement('p').innerHTML = `${resultTxt}`);
                    conWinnerPlayer += 1 ;
                }
                evenPlayer = !evenPlayer; // Меняем игрока на противоположного
            }
            // console.log(i,j);
            console.log(but);
        },{once:true})
        gamePlain.append(crbut);
    }
    const crp = document.createElement('p');
    crp.style = 'margin:0'
    // crbut.innerHTML = '';
    gamePlain.append(crp);
}

function win(i,j,x){
    let symvol = x;
    let statusLose = true;
    let count = 0;

    for(let d=0;d<countPlain;d++){ // проверка на горизонталь
        if (symvol === but[i][d]){
            count++;
        }
    }
    if (count === countPlain){
        return true;
    }

    count = 0;

    for(let d=0;d<countPlain;d++){ // проверка на вертикаль
        if (symvol === but[d][j]){
            count++;
        }
    }
    if (count === countPlain){
        return true;
    }
    count = 0;
    for(let d=0;d<countPlain;d++){ // проверка на левую вертикаль
        if (symvol === but[d][d]){
            count++;
        }
    }
    if (count === countPlain){
        return true;
    }
    count = 0;
    // for(let d=countPlain-1;d>-1;d--){ 
    //     if (symvol === but[d][d]){
    //         count++;
    //         console.log('d: ',d,' count: ',count);
    //     }
    // }
    // if (symvol === but[0][countPlain-1] && symvol === but[countPlain-1][0]){
    //     count = count + 2;
    // }
    for(let d=countPlain-1;d>-1;d--){ // проверка на правую вертикаль
        let s = countPlain - 1 - d;
        if(symvol === but[s][d]){
            count++;
        }
    }
    if (count === countPlain){
        return true;
    }

    return false;
}


console.log('Start player O');
console.log(but);