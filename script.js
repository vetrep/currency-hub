const ENTRYPOINT = 'https://www.cbr-xml-daily.ru/daily_json.js';

function loadData() {
    return fetch(ENTRYPOINT).then((res) => res.json());
}

(async () => {
    const data = await loadData();
    console.log(data);

    const { Timestamp, Valute: { USD } } = data;

    const date = new Date(Timestamp);

    const element = document.getElementById('date');

    element.textContent = formatDate(date);
})();

function formatDate(date) {
    const day = padZero(date.getDate());
    const month = padZero(1 + date.getMonth());
    const year = padZero(date.getFullYear());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(1 + date.getMonth()).padStart(2, '0');
    // const year = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function padZero(value) {
   if (value < 10) {
       return `0${value}`;
   }

   return value;
}