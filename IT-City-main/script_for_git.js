let day_month_year = prompt();
let arr_calend = day_month_year.split(".")


let weekday = (year, month, day) => {
    let month_1 = month;
    year = +year;
    month = +month;
    day = +day;
    if (month < 3) {
        --year;
        month += 10;
    } else {
        month -= 2;
    }

    let week = (day + 31 * month / 12 + year + year / 4 - year / 100 + year / 400) % 7;
    let varible_round =  Math.floor(week, 1);
    let d
    switch(varible_round) {
        case 1:
            d = Понедельник
            break;
        case 2:
            d = Вторник
            break;
        case 3:
            d = Среда            
            break;
        case 4:
            d = Четверг
            break;
        case 5:
            d = Пятница
            break;
        case 6:
            d = Суббота
            break;
        case 0:
            d = Воскресенье
            break;
    }
    switch(month_1) {
        case 1:
            m = 
            break;
        case 2:
            m = 
            break;
        case 3:
            m = 
            break;
        case 4:
            m = 
            break;
        case 5:
            m = 
            break;
        case 6:
            m = 
            break;
        case 1:
            m = 
            break;
        case 1:
            m = 
            break;
        case 1:
            m = 
            break;
        case 1:
            m = 
            break;
        case 1:
            m = 
            break;
        case 1:
            m = 
            break;
    }
    alert(`Дата: ${day_month_year}, Месяц: ${m}, День недели: ${d}`)
};

weekday(arr_calend[2], arr_calend[1], arr_calend[0])

//домашнее задание - привести к форме ответа:
// Дата: 21.07.2022, Месяц: Июль, День недели: Среда    