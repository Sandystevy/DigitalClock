const getTime = () => {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    const amPm = hours >=12 ? 'PM' : 'AM';
    if (hours >= 12){
        hours -= 12;
    }
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}${amPm}`;
};

const init = ()=>{
    setInterval(() => {
        document.querySelector('.clock').innerHTML = getTime();
    },500)
}

init();


// const updatedtedTime = getTime.toString().padStart(2,'0') 