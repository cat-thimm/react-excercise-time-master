import { computed, makeObservable, observable } from "mobx";
import { Entry, Customer, Worker } from "./store-types";


export const customerList = [Customer.Lidl, Customer.Huawei, Customer.Beiselen];
export const coworkerList: Worker[] = [];
export const adminList: Worker[] = [];
export const moderatorList: Worker[] = [];

class WorkingInformation {
    workingInformation: Entry[] = [];

    constructor() {
        makeObservable(this, {
            workingInformation: observable,
            dailyWorkingHoursMonth: computed,
            monthlyWorkingHours: computed,
            dailyWorkingHoursWeek: computed,
        });
    }

    get monthlyWorkingHours() {
        let hours = 0.0;
        for (let i = 0; i < this.workingInformation.length; i++) {
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {
                const dailyHours = this.workingInformation[i].customers[j].hours;
                if (dailyHours === '') {
                    hours += 0
                } else {
                    hours += parseFloat(dailyHours)
                }
            }
        }
        return hours;
    }

  

    get dailyWorkingHoursWeek() {
        let hours: { amount: number, day: string, date: Date }[] = [];
        for (let i = 0; i < this.workingInformation.length; i++) {
            hours.push({ amount: 0, day: this.workingInformation[i].day, date: this.workingInformation[i].date })
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {
                if (this.workingInformation[i].customers[j].hours !== '') {
                    hours[i].amount += parseFloat(this.workingInformation[i].customers[j].hours)
                }
            }
        }
        return hours;
    }

    get dailyWorkingHoursMonth() {
        let hours = [];
        for (let i = 0; i < this.workingInformation.length; i++) {
            hours.push({ amount: 0, date: this.workingInformation[i].date });
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {
                if (this.workingInformation[i].customers[j].hours !== '') {
                    hours[i].amount += parseFloat(this.workingInformation[i].customers[j].hours)
                }
            }
        }
        return hours;
    }

  weeklyWorkingHours(startOfWeek: Date, endOfWeek: Date) {
        let hours = 0.0;
        for (let i = 0; i < this.workingInformation.length; i++) {
            if (this.workingInformation[i].date >= startOfWeek && this.workingInformation[i].date <= endOfWeek) {
                for (let j = 0; j < this.workingInformation[i].customers.length; j++) {
                    const dailyHours = this.workingInformation[i].customers[j].hours;
                    if (dailyHours === '') {
                        hours += 0
                    } else {
                        hours += parseFloat(dailyHours)
                    }
                }
            }
        }
        return hours;
    }

    dailyWorkingHoursByCustomerWeek(customer: Customer | string) {
        let hours = [];
        for (let i = 0; i < this.workingInformation.length; i++) {
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {

                if (this.workingInformation[i].customers[j].customerName === customer) {
                    const dailyHours = this.workingInformation[i].customers[j].hours;
                    hours.push({ amount: dailyHours === '' ? '0' : dailyHours, date: this.workingInformation[i].date, day: this.workingInformation[i].day });
                }
            }
        }
        return hours;
    }

    dailyWorkingHoursByCustomerMonth(customer: Customer | string) {
        let hours = [];
        for (let i = 0; i < this.workingInformation.length; i++) {
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {

                if (this.workingInformation[i].customers[j].customerName === customer) {
                    const dailyHours = this.workingInformation[i].customers[j].hours;
                    hours.push({ amount: dailyHours === '' ? '0' : dailyHours, date: this.workingInformation[i].date });
                }
            }
        }
        return hours;
    }

    monthlyWorkingHoursByCustomer(customer: Customer | string) {
        let hours = 0.0;
        for (let i = 0; i < this.workingInformation.length; i++) {
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {

                if (this.workingInformation[i].customers[j].customerName === customer) {
                    const dailyHours = this.workingInformation[i].customers[j].hours;
                    if (dailyHours !== '') {
                        hours += parseFloat(dailyHours)
                    }
                }
            }
        }
        return hours;
    }

    weeklyWorkingHoursByCustomer(customer: Customer | string, startOfWeek: Date, endOfWeek: Date) {
        let hours = 0.0;
        for (let i = 0; i < this.workingInformation.length; i++) {
            for (let j = 0; j < this.workingInformation[i].customers.length; j++) {

                if ((this.workingInformation[i].date >= startOfWeek && this.workingInformation[i].date <= endOfWeek) && (this.workingInformation[i].customers[j].customerName === customer)) {
                    const dailyHours = this.workingInformation[i].customers[j].hours;
                    if (dailyHours !== '') {
                        hours += parseFloat(dailyHours)
                    }
                }
            }
        }
        return hours;
    }
}

const store = new WorkingInformation();

function getDaysInMonth(month: number, year: number) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function getDayName(dateStr: Date, locale: string) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

const currentMonth = getDaysInMonth(new Date().getMonth(), new Date().getFullYear());

// Create new data for current month

for (let i = 0; i < currentMonth.length; i++) {
    store.workingInformation.push({
        id: i,
        day: getDayName(currentMonth[i], 'de-DE'),
        date: currentMonth[i],
        customers: [{ customerName: Customer.Lidl, hours: (Math.floor(Math.random() * 12) + 1).toString(), comments: "" }, { customerName: Customer.Huawei, hours: (Math.floor(Math.random() * 3) + 1).toString(), comments: "" }, { customerName: Customer.Beiselen, hours: (Math.floor(Math.random() * 4) + 1).toString(), comments: "" }],
        selectedCustomer: '0',
    })
}

const coWorkers = ['cthimm', 'bmüller', 'kheinrich'];
const admins = ['ameier', 'lbeyer']
const moderators = ['hkater', 'kpetersen']

for (let i = 0; i < coWorkers.length; i++) {
    coworkerList.push({
        id: '_' + Math.random().toString(36).substr(2, 9), name: coWorkers[i], hours: [{
            week: '32',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '33',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: true,
        },
        {
            week: '34',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '35',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        }]})
}


for (let i = 0; i < admins.length; i++) {
    adminList.push({
        id: '_' + Math.random().toString(36).substr(2, 9), name: admins[i], hours: [{
            week: '32',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '33',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: true,
        },
        {
            week: '34',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '35',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        }]})
}

for (let i = 0; i < moderators.length; i++) {
    moderatorList.push({
        id: '_' + Math.random().toString(36).substr(2, 9), name: moderators[i], hours: [{
            week: '32',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '33',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: true,
        },
        {
            week: '34',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        },
        {
            week: '35',
            hours: (Math.floor(Math.random() * 20) + 1),
            vacation: false,
        }]})
}



export default store;