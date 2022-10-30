const usd = document.querySelector('.usd'),
      som = document.querySelector('.som');

usd.addEventListener('input', ChangeSomToUsd);
som.addEventListener('input', ChangeUsdToSom);

function ChangeUsdToSom(){
    const request = new XMLHttpRequest();

    request.open('GET', 'js/som.json');
    request.setRequestHeader('Content-type', 'application/json; charset=uts-8');
    request.send();

    request.addEventListener('readystatechange', ()=>{
        if(request.status === 200 && request.readyState === 4){
            console.log(request.response);
            const data = JSON.parse(request.response);
            
            if(som.value === ""){
                usd.value = '';
            }else{
                usd.value = (som.value * data.current.som);
            }
            
        }
    });
}
function ChangeSomToUsd (){
    const request = new XMLHttpRequest();

    request.open('GET', 'js/ust.json');
    request.setRequestHeader('Content-type', 'application/json; charset=uts-8');
    request.send();

    request.addEventListener('readystatechange', ()=>{
        if(request.status === 200 && request.readyState === 4){
            console.log(request.response);
            const data = JSON.parse(request.response);
            
            if(usd.value === ""){
                som.value = '';
            }else{
                som.value = (usd.value / data.current.usdt).toFixed(2);
            }
            
        }
    });
}