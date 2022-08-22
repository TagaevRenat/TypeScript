//Конструкция Enum
enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const memberShipReverse = Membership[2]
console.log(membership)
console.log(memberShipReverse)

enum SocialMediaURL {
    vk = 'https://vk.com/',
    facebook = 'https://ru-ru.facebook.com/',
    tweeter = 'https://twitter.com/tweeter'
}

