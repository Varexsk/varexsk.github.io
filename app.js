// Типовая ссылка на страницу со статьями (без номера в конце)


alert("!!!!!!!!!!!!")

const baseLink = 'https://wtis.vseinstrumenti.ru/symfony/login';


document.querySelector("button").addEventListener('click', function start(e) {
    let username = document.getElementById("Username").value
    let password = document.getElementById("Password").value
    let html = axios({
      method: 'post',
      url: baseLink,
      data: {
        "_username": username,
        "_password": password
      },
    });
    document.getElementById("text").textContent = html.content
  });


