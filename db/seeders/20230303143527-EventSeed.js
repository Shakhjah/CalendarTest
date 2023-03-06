'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkInsert('Events', [{
        addres: "Тольятти, ул. Льва Толстого 34, ст.2",
        city: "Тольятти",
        date: "2023-02-10 13:00:00",
        duration: 3,
        id: 23,
        organizator: "Дюйм",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий семинар по продукции Эван и MyHeat <br> Записаться можно по телефону 8(927) 268-05-52. <b>Запись обязательна: количество мест ограничено<b>",
        title: "Семинар по продукции ЭВАН и MyHeat ",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "Самара, ул. Самолетная 123",
        city: "Самара",
        date: "2023-02-09 14:00:00",
        duration: 3,
        id: 22,
        organizator: "Дюйм",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий семинар по продукции Эван и MyHeat <br> Записаться можно по телефону 8(927) 268-05-52. <b>Запись обязательна: количество мест ограничено<b>",
        title: "Семинар по продукции ЭВАН и MyHeat ",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "г. Екатеринбург",
        city: "Екатеринбург",
        date: "2023-02-02 00:00:00",
        duration: 2,
        id: 21,
        organizator: "Ревитех",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий семинар по продукции MyHeat <br> Дата и время уточняется ",
        title: "Семинар по продукции MyHeat ",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "г. Челябинск, ул. Лесопарковая, д.6, Отель \"Парк- Сити\", зал \"Форум\"",
        city: "Челябинск",
        date: "2023-03-01 10:00:00",
        duration: 3,
        id: 20,
        organizator: "STIMEK",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий семинар по продукции MyHeat. <br> Для регистрации перейдите по <a href=\"https://stimek.ru/seminars/\">ссылке</a>",
        title: "Семинар по продукции MyHeat ",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "",
        city: "Уфа",
        date: "2023-03-05 10:00:00",
        duration: 4,
        id: 19,
        organizator: "ЦентрОтопления",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий семинар по продукции MyHeat",
        title: "СервисФест",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "",
        city: null,
        date: "2023-02-20 11:00:00",
        duration: 2,
        id: 17,
        organizator: "MyHeat",
        text: "Уважаемые партнеры! Приглашаем Вас посетить обучающий вебинар по продукции MyHeat",
        title: "Автоматизация и диспетчеризация систем отопления",
        type: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        addres: "г. Набережные Челны, ул. Абдуллы Курбанова, 1а. База отдыха \"Агдаш\"",
        city: "Набережные Челны",
        date: "2023-02-22 12:00:00",
        duration: 5,
        id: 18,
        organizator: "ЦентрОтопления",
        text: "Приглашаем всех сервисных специалистов Набережных Челнов (и не только) вступить в сообщество, в котором мы объединяем людей, связанных общими интересами. Абсолютно разных людей, но находящихся на одной волне, понимающих друг друга с полуслова и всегда готовых поделиться своим опытом в сфере обслуживания газового оборудования.",
        title: "СервисФест",
        type: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Events', null, {});
     
  }
};
