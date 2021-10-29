let characters = [{
        name: "Бэтмен",
        universe: "DC Comics",
        alterEgo: "Брюс Уэйн",
        occupation: "борец с преступностью, филантроп, миллиардер",
        friends: "Робин, Бэтгерл",
        superPowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
        raiting: 10,
        src: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
    },
    {
        name: "Супермен",
        universe: "DC Comics",
        alterEgo: "Кларк Кент",
        occupation: "борец за справедливость",
        friends: "собака Крипто",
        superPowers: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        raiting: 8,
        src: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
    },
    {
        name: "Железный человек",
        universe: "Marvel Comics",
        alterEgo: "Тони Старк",
        occupation: "гений, миллиардер, плейбой, филантроп",
        friends: "Мстители",
        superPowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        raiting: 10,
        src: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
    },
    {
        name: "Капитан Америка",
        universe: "Marvel Comics",
        alterEgo: "Стивен Роджерс",
        occupation: "супер-солдат",
        friends: "Мстители",
        superPowers: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
        raiting: 2,
        src: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
    },
    {
        name: "Черная вдова",
        universe: "Marvel Comics",
        alterEgo: "Наташа Романофф",
        occupation: "супергероиня, шпионка",
        friends: "Мстители",
        superPowers: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
        raiting: 10,
        src: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
    },
    {
        name: "Чудо-женщина",
        universe: "DC Comics",
        alterEgo: "Диана Принс",
        occupation: "супергероиня, секретарь-референт",
        friends: "Лига Справедливости, Бэтмен, Супермен",
        superPowers: "сверхчеловеческая сила и скорость, выносливость, полет",
        raiting: 10,
        src: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
    }
];
document.addEventListener("DOMContentLoaded", function () {
    // все три функции вызываем подряд   
    getInputs();
    charsRender();
    saveChars();
})

function charsRender() {

    for (item of characters) {
        let parent = document.querySelector('#chars');
        let img = document.createElement("img");
        img.src = item.src;

        let charsName = document.createElement("div");
        charsName.innerHTML = "<div class='chars-name'>Имя: " + item.name + "</div>";
        let charsUniverse = document.createElement("div");
        charsUniverse.innerHTML = "<div class='chars-universe'>Вселенная: " + item.universe + "</div>";
        let charsEgo = document.createElement("div");
        charsEgo.innerHTML = "<div class='chars-ego'>Альтер Эго: " + item.alterEgo + "</div>";
        let charsOcc = document.createElement("div");
        charsOcc.innerHTML = "<div class='chars-occ'>Род деятельности: " + item.occupation + "</div>";
        let charsFriends = document.createElement("div");
        charsFriends.innerHTML = "<div class='chars-friends'>Друзья: " + item.friends + "</div>";
        let charsPowers = document.createElement("div");
        charsPowers.innerHTML = "<div class='chars-powers'>Суперсилы: " + item.superPowers + "</div>";
        let charsRate = document.createElement("div");

        charsRate.innerHTML = `<div class='char-rating'><input type='text' id='inp' value='${item.raiting}'> </div>`

        parent.append(img, charsName, charsUniverse, charsEgo, charsOcc, charsFriends, charsPowers, charsRate);
    }
}

function saveChars() {

    let inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
        input.addEventListener("change", () => {
            let rating = input.value;
            characters[index].raiting = rating;
            saveInputs();
        });
    });

    function saveInputs() {
        
        localStorage.setItem("savedChars", JSON.stringify(characters));
    }
}

function getInputs() {
    let savedInputs = JSON.parse(localStorage.getItem("savedChars"));
    
    if (savedInputs !== null) {
        characters = savedInputs;
    }
}