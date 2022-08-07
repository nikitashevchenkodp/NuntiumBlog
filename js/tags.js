const tagsList = document.querySelector('.tags__list');
const btns = tagsList.querySelectorAll('button');
const input = document.querySelector('.tags').querySelector('input')


const data = [{
        topic: 'Adipisicing Laris Cupidatat do',
        author: 'Lee Russell',
        date: 'November 3, 2012',
        text: `Irure veniam ex do aliqua esse 
    irure voluptateipsum labore nisi ullamco
    consequat ex adipisicing mollit aliqua elit
    ipsum sit labore elit Lorem laborum qui 
    pariatur cillum irure cillum qui excepteur
    ex commodo labore sunt labore dolor culpa 
    aliquip veniam`,
        img: './img/search_result/Rectangle 2serach_result_1.png'
    },
    {
        topic: 'Sunt ea Aute Anim',
        author: 'Victoria Watson',
        date: 'March 2, 2014',
        text: `Mollit ad ad exercitation sunt sunt in aliquip deserunt
         exercitation officia cillum sunt dolore mollit duis commodo 
         aliquip commodo Lorem minim nostrud in deserunt occaecat 
         reprehenderit cillum laboris nostrud ut irure id in enim 
         et nisi aute ex esse velit`,
        img: './img/search_result/Rectangle 2serach_result_2.png'
    },
    {
        topic: 'Adipisicing Laris Cupidatat do',
        author: 'Lee Russell',
        date: 'November 3, 2012',
        text: `Irure veniam ex do aliqua esse 
    irure voluptateipsum labore nisi ullamco
    consequat ex adipisicing mollit aliqua elit
    ipsum sit labore elit Lorem laborum qui 
    pariatur cillum irure cillum qui excepteur
    ex commodo labore sunt labore dolor culpa 
    aliquip veniam`,
        img: './img/search_result/Rectangle 2serach_result_3.png'
    },
    {
        topic: 'Adipisicing Laris Cupidatat do',
        author: 'Lee Russell',
        date: 'November 3, 2012',
        text: `Irure veniam ex do aliqua esse 
    irure voluptateipsum labore nisi ullamco
    consequat ex adipisicing mollit aliqua elit
    ipsum sit labore elit Lorem laborum qui 
    pariatur cillum irure cillum qui excepteur
    ex commodo labore sunt labore dolor culpa 
    aliquip veniam`,
        img: './img/search_result/Rectangle 2serach_result_4.png'
    },
]



let timerId;

function searchRes(value) {
    if (value) {
        tagsList.innerHTML = `<div>Loading...</div>`
        const result = data.map(article => (
            `
            <div class="articles__list-item">
                <img
                  src="${article.img}"
                  alt="${article.topic}"
                />
                <div class="mini__article">
                  <a href="./article.html"><h3>${article.topic}</h3></a>
                  <span>${article.author}</span>
                  <span>&bull;</span>
                  <span>${article.date}</span>
                  <p>
                    ${article.text}
                  </p>
                </div>
              </div>
        `
        )).join('');

        timerId = setTimeout(() => {
            tagsList.innerHTML = `
                <div class="articles__list">
                    ${result}
                </div>
            `;
        }, 1000);
    }
}

function handleInput() {
    clearTimeout(timerId);
    if (this.value) {
        searchRes(this.value);
    }
    if (!this.value) {
        tagsList.innerHTML = "";
        Array.from(btns).forEach(btn => tagsList.append(btn));
    }
}

function handleClick(e) {
    input.value = e.target.textContent;
    searchRes(input.value)
}


btns.forEach(btn => btn.addEventListener('click', handleClick));
input.addEventListener('input', handleInput);