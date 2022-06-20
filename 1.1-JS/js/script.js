//1) Перепишите через async await
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(response.status);
    }
}

//2)Напишите функцию, которая в качестве параметра будет принимать url и по нему делать запрос на получение данных Затем эти данные обрабатывать и выводить в консоль
async function gettingInformation(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Errow(`ошибка по адресу ${url} статус ошибки ${response}`);
    }
    return await response.json();
}
gettingInformation();