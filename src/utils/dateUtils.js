export const getServicesDate = (val) => {
    const date = new Date(val);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getDate = (val) => {
    const date = val.split('-');
    const newDate = new Date();

    newDate.setFullYear(date[0]);
    newDate.setMonth(date[1] - 1);
    newDate.setDate(date[2]);

    return newDate;
};

export const getDeltaDay = (val) => {
    const date = getDate(val).getTime() - 86400000 * 3; // empty data in db

    return getServicesDate(date);
};

export const dateNow = getServicesDate(new Date());

export const getToday = () => new Date().toLocaleString().split(',')[0];
