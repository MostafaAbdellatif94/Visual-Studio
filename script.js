function startAnimation(){

    const note=document.getElementById('note');
    const record=document.getElementById('record');

    let position=20;
    let direction=1;

    record.classList.add('spin');

    const move=setInterval(function(){

        position += 5 * direction;

        if(position > 700 || position < 20){
            direction *= -1;
        }

        note.style.left = position + 'px';
        note.style.transform = 'rotate(' + position + 'deg)';

    },20);

    setTimeout(function(){
        clearInterval(move);
        record.classList.remove('spin');
    },6000);
}
