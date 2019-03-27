'use strict';
// const translatejs = require('translate.js');
const appState = require('./appState');

const messages = {

	'en-US': {
		'Address': 'Address',
		'Advanced UI Mode': 'Advanced UI Mode',
		'Are you sure you wish to logout?': 'Are you sure you wish to logout?',
		'Alerts': 'Alerts',
		'Authorizing...': 'Authorizing...',
		'Auto Update Map': 'Auto Update Map',
		'Battery': 'Battery',
		'Back to Organizations': 'Back to Organizations',
		'Buffered': 'Buffered',
		'Calculate distances between: ': 'Calculate distances between: ',
		'City': 'City',
		'Connectivity lost': 'Connectivity lost.',
		'Devices': 'Devices',
		'Excel': 'Excel',
		'Executing...': 'Executing...',
		'Fleets': 'Fleets',
		'Fleets/All': 'Fleets/All',
		'GPS': 'GPS',
		'Help': 'Help',
		'Highlight starts': 'Highlight starts',
		'Highlight ignition': 'Highlight ignition',
		'Hour Meter': 'Hour Meter',
		'Ignition': 'Ignition',
		'Last 2 Days': 'Last 2 Days',
		'Last 3 Days': 'Last 3 Days',
		'Last month': 'Last month',
		'Last update': 'Last update',
		'Last week': 'Last week',
		'Lat': 'Lat',
		'LAT/LONG': 'LAT/LONG',
		'Log In': 'Log In',
		'Logout': 'Logout {name}',
		'Log Out': 'Log Out',
		'Long': 'Long',
		'Map': 'Map',
		'Messages': 'Messages',
		'metric': 'Metric',
		'Name': 'Name',
		'Odometer': 'Odometer',
		'Online': 'Online',
		'Organizations': 'Organizations',
		'Processed Messages': 'Processed Messages',
		'Profile': 'Profile',
		'Reports': 'Reports',
		'Raw': 'Raw',
		'Raw Messages': 'Raw Messages',
		'Refresh': 'Refresh',
		'Remember Me': 'Remember Me',
		'Reverse Order': 'Reverse Order',
		'Rollup idling & parked': 'Rollup idling & parked',
		'Run!': 'Run!',
		'Showing:': 'Showing:',
		'Split Screen': 'Split Screen',
		'Status': 'Status',
		'State': 'State',
		'Start/Stop': 'Start/Stop',
		'This week to date': 'This week to date',
		'This month': 'This month',
		'Today': 'Today',
		'Through the end of:': 'Through the end of:',
		'Users': 'Users',
		'Uncaught Exceptions': 'Uncaught Exceptions',
		'Vehicles': 'Vehicles',
		'Verbose': 'Verbose',
		'Yes': 'Yes',
		'Yesterday': 'Yesterday',
		'Welcome': 'Welcome {name}'
	},

	ru: {
		'Activation Date': 'Дата активации',
		'Active': 'Активированный',
		'Address': 'Адрес',
		'Advanced UI Mode': 'Расширенный режим UI',
		'Alerts': 'Оповещения',
		'Are you sure you wish to logout?': 'Вы уверены, что вы хотите выйти из системы ?',
		'Associated Vehicle': 'Связанный Автомобиль',
		'Auto Update Map': 'Автоматически обнавлять карту',
		'Authorizing...': 'Авторизация...',
		'Available Vehicles': 'Нераспределенные машины',
		'Battery': 'Аккумулятор',
		'Back to Organizations': 'Вернуться к Oрганизациям',
		'Begin Day End Day Report': 'Отчет начала и конца дня',
		'Buffered': 'Буферизированный',
		'Calculate distances between: ': 'Вычислить расстояние между : ',
		'Cancel': 'Отменить',
		'City': 'Город',
		'Connectivity lost': 'Соединение потеряно',
		'Count per Page': 'Количество на каждой странице',
		'Create Organization': 'Создать организацию',
		'Date': 'Дата',
		'Delete': 'Удалить',
		'Devices': 'Транспондеры',
		'Device IMEI': 'Номер трансподера',
		'Dir': 'Направление',
		'Duration': 'продолжительность',
		'Email': 'Эл. адрес',
		'End Date': 'Дата окончания',
		'Excel': 'Excel',
		'Executing...': 'Обрабатывается...',
		'First Name': 'Имя',
		'Fleet Color': 'Цвет автопарка',
		'Fleet Name': 'Имя Автопарка',
		'Fleets': 'Автопарки',
		'Fleets/All': 'Все Автопарки',
		'GPS': 'GPS',
		'Heartbeat': 'Пульс',
		'Help': 'Помощь',
		'Highlight starts': 'Выделить статус старт',
		'Highlight ignition': 'Выделить статус зажигания',
		'Hour Meter': 'Счетчик',
		'Idle Report': 'Отчет холостого хода',
		'Idling': 'На холостом ходу',
		'IMEI': 'Номер трансподера',
		'Ignition': 'Зажигание',
		'Ignition Detail Report': 'Отчет зажигания',
		'Ign off': 'Зажигание выключено',
		'Ign Off': 'Зажигание выключено',
		'Ign on': 'Зажигание включено',
		'Ign On': 'Зажигание включено',
		'Kilometers': 'километров',
		'Last Name': 'Фамилия',
		'Last 2 Days': 'Прошлые 2 дня',
		'Last 3 Days': 'Прошлые 3 дня',
		'Last month': 'Прошлый месяц',
		'Last update': 'Последнее обновление',
		'Last week': 'Прошлая неделя',
		'Lat': 'Широта',
		'LAT/LONG': 'Координаты',
		'License Plate': 'Номерной знак',
		'Location': 'Место нахождения',
		'Log In': 'Войти',
		'Log out': 'Выйти',
		'Log Out': 'Текущая Сессия',
		'Long': 'Долгота',
		'Map': 'Карта',
		'Manage': 'Управление',
		'Messages': 'Сообжения',
		'metric': 'метрический',
		'Mileage by State Summary Report': 'Отчет километража по областям',
		'Miles': 'Километраж',
		'Moving': 'В движении',
		'Name': 'Имя',
		'Network': 'Провайдер',
		'New Device': 'Создать Транспондер',
		'New User': 'Создать Пользователя',
		'New Vehicle': 'Создать машину',
		'OBD-II Engine Report': 'OBD-II Двигатель отчет',
		'OBD-II Status Report': 'OBD-II отчет',
		'Odometer by State Summary Report': 'Одометр Государственным сводном отчете',
		'Odometer': 'Одометр',
		'Online': 'Онлайн',
		'Organizations': 'Организации',
		'Organization': 'Организация',
		'Parked': 'Припаркованный',
		'Password': 'пароль',
		'Phone': 'Телефон',
		'Plate': 'Номерной знак',
		'Power connected': 'Питание подключено',
		'Power disconnected': 'Питание отключено',
		'Power off': 'Отключён',
		'Power on': 'Включён',
		'Processed Messages': 'Обработанные Сообщения',
		'Profile': 'Профайл',
		'Quick select': 'Быстрый выбор',
		'Reports': 'Отчеты',
		'Raw': 'Необработанные',
		'Raw Messages': 'Необработанные Сообщения',
		'Refresh': 'Обновить',
		'Remember Me': 'Оставаться в системе',
		'Reverse Order': 'Обратный порядок',
		'Rollup idling & parked': 'Компрессировать статусы',
		'Run!': 'Старт',
		'Save': 'Сохранить',
		'Search': 'Поиск',
		'Security Level': 'Привилегии',
		'Selected Page': 'Выбранная страница',
		'SIM': 'СИМ',
		'Showing:': 'Показывает:',
		'Speed': 'Скорость',
		'Speed Report': 'Отчет превышения скорости',
		'Split Screen': 'Разделенный Экран',
		'Status': 'Статус',
		'State': 'Область',
		'Start/Stop': 'Старт/Стоп',
		'Start/Stop Detail Report': 'Старт/стоп отчет',
		'Start': 'Тронулся',
		'Start Date': 'Дата начала',
		'Stopped': 'Остановился',
		'This week to date': 'Текущая неделя',
		'This month': 'Текущий месяц',
		'Today': 'Cегодня',
		'Towing': 'буксировка',
		'Through the end of:': 'До:',
		'Users': 'Пользователи',
		'Uncaught Exceptions': 'Ошибки',
		'Vehicle': 'Машины',
		'Vehicles': 'Машины',
		'Verbose': 'Подробный режим',
		'Yes': 'Да',
		'Yesterday': 'Вчера',
		'Welcome': 'Добро пожаловат {name}',
		'Update': 'Обновить',
		'Username': 'Имя пользователя',
		'Operations': 'Действие',
		'Vehicle': 'Средство передвижения',
		'Vehicle Summary Report': 'Краткий отчет машины',
		'Vehicles in Fleet': 'Машины в автопарке',
		'VIN': 'VIN номер'
	}
}

const options = {
	// These are the defaults:
	debug: true,  //[Boolean]: Logs missing translations to console and add "@@" around output, if `true`.
	array: false,  //[Boolean]: Returns translations with placeholder-replacements as Arrays, if `true`.
	pluralize: function(n,translKey){ return Math.abs(n); }  //[Function(count,translationKey)]: Provides a custom pluralization mapping function.
}

function translate(item) {
	const state = appState.getState();
	const lang = state.lang;
	// const t = translatejs(messages[lang], [options]);

	// return t.apply(null, arguments);
	return item;
}
module.exports.translate = translate;

function hasLang (key) {
	return !!messages[key];
}
module.exports.hasLange = hasLang;
