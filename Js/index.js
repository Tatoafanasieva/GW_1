// ვპოულობთ ღილაკს, რომელსაც აქვს ID 'toggle-theme' და ვინახავთ ცვლადში
const toggleBtn = document.getElementById('toggle-theme');

// ვპოულობთ <select> ელემენტს (თუ გამოიყენება არჩევანისთვის)
const select = document.querySelector('select');

// ღილაკზე დაჭერისას ვამატებთ ან ვშლით 'dark-mode' კლასს <body>-ზე
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // თემის გადართვა

    // მომხმარებლის არჩევანის შენახვა localStorage-ში
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // ბნელი თემი
    } else {
        localStorage.setItem('theme', 'light'); // ნათელი თემი
    }
});

// როდესაც გვერდი იტვირთება, ვამოწმებთ localStorage-ს და ვიყენებთ შენახულ თემს
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode'); // ბნელი თემის ჩართვა
}



