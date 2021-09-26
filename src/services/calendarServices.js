// mock a fake request
const calendarService = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });

export default calendarService;
