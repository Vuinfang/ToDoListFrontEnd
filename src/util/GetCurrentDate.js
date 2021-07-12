import moment from 'moment';
// Use to generate the current time
export function getCurrentDate(separator='/') {
    // let date = new Date().getDate();
    // let month = new Date().getMonth() + 1;
    // let year = new Date().getFullYear();
    let date = moment().date();
    let month = moment().month();
    let weekday = moment().format('dddd');

    // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    return `${month<10?`0${month+1}`:`${month+1}`}${separator}${date}`+` `+`${weekday}`
}
