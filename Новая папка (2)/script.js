let day_month_counter = prompt();
let arr_calendar = day_month_counter.split(".");

let calendar = (day, month) => {
	let count_of_month = 0;
	switch(month) {
		case 1:
			count_of_month = "Январь"
			if (day < 32) {
				if (day % 7 == 1) {
					alert(`Месяц: ${count_of_month}, понедельник`);
				} else if (day % 7 == 2) {alert(`Месяц: ${count_of_month}, вторник`);
				} else if (day % 7 == 3) {alert(`Месяц: ${count_of_month}, среда`);
				} else if (day % 7 == 4) {alert(`Месяц: ${count_of_month}, четверг`);
				} else if (day % 7 == 5) {alert(`Месяц: ${count_of_month}, пятница`);
				} else if (day % 7 == 6) {alert(`Месяц: ${count_of_month}, суббота`);
				} else if (day % 7 == 0) {alert(`Месяц: ${count_of_month}, воскресенье`);}
			} else {alert(`Такого дня не существует в месяце: ${count_of_month}`)}
			break;
		case 2:
			count_of_month = "Февраль"
			if (day < 29) {
				if (day % 7 == 5) {
					alert(`Месяц: ${count_of_month}, понедельник`);
				} else if (day % 7 == 6) {alert(`Месяц: ${count_of_month}, вторник`);
				} else if (day % 7 == 0) {alert(`Месяц: ${count_of_month}, среда`);
				} else if (day % 7 == 1) {alert(`Месяц: ${count_of_month}, четверг`);
				} else if (day % 7 == 2) {alert(`Месяц: ${count_of_month}, пятница`);
				} else if (day % 7 == 3) {alert(`Месяц: ${count_of_month}, суббота`);
				} else if (day % 7 == 4) {alert(`Месяц: ${count_of_month}, воскресенье`);}
			} else {alert(`Такого дня не существует в месяце: ${count_of_month}`);}
			break;
		case 3:
			count_of_month = "Март"
			if (day < 31) {
				if (day % 7 == 5) {
					alert(`Месяц: ${count_of_month}, понедельник`);
				} else if (day % 7 == 6) {alert(`Месяц: ${count_of_month}, вторник`);
				} else if (day % 7 == 0) {alert(`Месяц: ${count_of_month}, среда`);
				} else if (day % 7 == 1) {alert(`Месяц: ${count_of_month}, четверг`);
				} else if (day % 7 == 2) {alert(`Месяц: ${count_of_month}, пятница`);
				} else if (day % 7 == 3) {alert(`Месяц: ${count_of_month}, суббота`);
				} else if (day % 7 == 4) {alert(`Месяц: ${count_of_month}, воскресенье`);}
			} else {alert(`Такого дня не существует в месяце: ${count_of_month}`);}
		break;
	}
}



calendar(Number(arr_calendar[0]), Number(arr_calendar[1]));



// cl() {
// 		alert(`Привет ${this.name}`);
// 	}
// }


// class Admin extends User {
// 	hey() {
// 		alert(`Пока ${this.name}`)
// 	}
// }


// let user = new User("Оскар");
// user.hey()


// class Uuu():
// 	pass


// class Heye(Uuu):
// 	passass User {
// 	constructor(name) {
// 		this.name = name;
// 		alert("Я работаю постоянно")
// 	}

// 	hey