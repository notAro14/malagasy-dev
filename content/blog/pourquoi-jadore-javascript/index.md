---
title: "Pourquoi j'adore Javascript"
date: "2020-06-24"
description: "Javascript est un language franchement sympathique"
featuredImage: "cover.jpg"
creditsUserUrl: "https://unsplash.com/@kimtheris"
creditsUser: "Sereja Ris"
creditsPlatform: "Unsplash"
creditsPlatformUrl: "https://unsplash.com/"
---

> English version -> [Why I love Javascript](https://dev.to/notaro14/why-i-love-javascript-1mb4)

Ah Javascript, ce langage mal aimé des puristes. Mais pourtant il est toujours dans le [top 5 des langages](https://insights.stackoverflow.com/survey/2020#most-popular-technologies) les plus utilisés et/ou populaire dans le monde, selon les sondages.

Ne connaître que Javascript comme langage de programmation c'est prendre le risque de se faire insulter de [faquin](https://www.linternaute.fr/dictionnaire/fr/definition/faquin/) par les [vrais programmeurs](https://www.quora.com/Why-is-JavaScript-so-hated?share=1).

Pourtant pour faire du web, t'es quasiment obligé de toucher à du Javascript à un moment ou à un autre.

Pour ma part, j'adore ce langage. Il y a quelques fontionnalités franchement sympa qui méritent à elles seules qu'on s'intéresse au JS.

Alors peut-être que je suis un gros faquin qui n'y connaît rien, mais ce n'es pas la question. Aujourd'hui je t'explique ces fonctionnalités super utiles du JS aka Ecmascript. C'est parti.

<div style="text-align:center;">
<img width="300" alt="a cat is ready" src="./cat.gif" />
</div>

## Destructuring

Celui-là, c'est mon préféré. Je l'utilise tout le temps.

Le **destructuring** te permet d'accéder aux données d'un objet ou d'un tableau assez facilement, en les assignant à des variables.

Supposons, tu as un objet _person_ avec 3 champs, dont 1 est un objet.

```javascript
const person = {
  fName: "Thomas",
  lName: "Durand",
  age: 25,
  job: {
    title: "Software Developer",
    company: "Renault",
  },
}
```

Normalement, si tu veux accéder à un ou plusieurs champs indépendamment de l'objet, tu fais comme ceci:

```javascript
const firstName = person.fName
const lastName = person.lName
const job = person.job.title
// ...
```

Mouais, ce n'est pas très pratique quand il s'agit de traiter des objets immenses avec d'autres objets imbriqués à l'intérieur. Vient alors le _destructuring syntax_.

Tu vas voir, c'est très simple, c'est comme déclarer des variables normales mais tu les entoures d'accolades. Ensuite tu assignes l'objet lui-même au tout. Ok, moins de blabla, plus de code..

```javascript
// avec le même objet person
const { fName, lName, job } = person
```

Comme tu peux le voir, il faut que tu nommes tes variables selon les noms des attributs de l'objet auquel tu veux accéder. Mais ne t'inquètes pas, tu peux les renommer.

```javascript
const { fName: firstName, lName: lastName, job: profession } = person
```

Et voilà!

Et ce n'est pas fini, c'est plus puissant que ça. Si tu veux accéder aux objets imbriqués, tu ajoutes d'autres accolades:

```javascript
const {
  job: { title, company },
} = person
```

Maintenant tu peux utiliser **title** et **company** directement dans ton code. Et si tu veux les renommmer:

```javascript
const {
  job: { title: jobTitle, company: companyName },
} = person
```

Cette syntaxe est surtout utile lorsque tu reçois des objets comme paramètres des fonctions. C'est très utilisé par les framewroks JS comme **React** ou **Angular**.

Au lieu d'écrire ceci:

```javascript
const myFunction = person => {
  const {
    fName,
    lName,
    job: { title, company },
  } = person
  // ...
}
```

Tu peux directement écrire comme celà:

```javascript
const myFunction = ({ fName, lName, job: { title, company } }) => {
  // ...
}
```

Le **destructuring** est aussi utilisé pour les tableaux. Ci-dessous un rapide exemple d'inversion des valeurs de 2 variables : le **swap**, réalisé grâce au **destructuring**.

```javascript
const myArray = [1, 2]
let [a, b] = myArray
console.log(a) // 1
console.log(b) // 2

[b, a] = [a, b] // on assigne a dans b et b dans a

console.log(a) // 2
console.log(b) // 1
```

## Spread operator

Une autre fonctionnalité assez cool utilisé aussi avec les objets et les tableaux. Le **spread operator** permet d'étaler le contenu de ces derniers.

Par exemple, c'est très utile pour la copie de donnée. Bon, voici le code:

```javascript
const personA = {
  name: "Doe",
  firstName: "John",
  age: 25,
}

let personB = {},
  personC = {}

// Supposons on a une autre personne qui s'appelle aussi John Doe mais il a 50 ans
// Pour copier le contenu de personA dans personB,
// normalement, on écrit
Object.assign(personB, personA)
personB.age = 50

// Mais maintenant avec l'opérateur spread, on peut faire ceci
personC = { ...personA, age: 50 }
```

Et pour les tableaux

```javascript
const todos = ["cooking", "laundry"]
const tomorrowTodos = ["grocery shopping", ...todos, "homework"]
console.log(tomorrowTodos) // ["grocery shopping", "cooking","laundry", "homework"]
```

En combinant avec l'utilisation du **destructuring**, on arrive à une syntaxe très élégante comme ci-dessous

```javascript
const myArray = [1, 2, 3, 4, 5]
const [a, ...rest] = myArray
console.log(a) // 1
console.log(rest) // [2,3,4,5]
```

## Map, Filter et Reduce

Ok, ces 3 fonctions ne sont pas exlusives à Javascript. Mais elles sont tellement utiles que t'es obligé de savoir comment les utiliser correctement.

Map, Filter et Reduce sont des méthodes de tableaux et te permet, respectivement, de:

- exécuter une fonction à chaque élément d'un tableau
- filter un tableau en testant une condition sur chaque élément
- réduire un tableau en exécutant une opération sur chacun de ses éléments

Les 3 méthodes prennent chacune une fonction callback comme paramètre.

L'utilisation des méthodes fait partie de ce qu'on appelle la [programmation déclarative](https://en.wikipedia.org/wiki/Declarative_programming).

C'est un style de programmation dans lequel tu décris ce que tu attends de la machine (description du "quoi"). A l'inverse, dans la [programmation impérative](https://en.wikipedia.org/wiki/Imperative_programming), tu décris étape par étape ce que la machine doit faire pour résoudre le problème (description du "comment").

```javascript
// Map
// Mettre au pluriel les mots d'un tableau
const singular = ["pizza", "baggel", "hat"]
const plural = singular.map(word => word + "s")
console.log(plural) // ["pizzas", "baggels", "hats"]

// Filter
// Chercher tous les nombres pairs
const numbers = [14, 5, 23, 28, 105]
const evenNumbers = numbers.filter(number => number % 2 === 0) // retourne tous les nombres respectant la condition number%2===0
console.log(evenNumbers) // [14, 28]

// Reduce
// 1. Additionne tous les éléments d'un tableau
const myArray = [2, 3, 4, 1]
console.log(myArray.reduce((acc, num) => acc + num, 0)) // 10
// acc est l'accumulateur et num est l'élément actuel du tableau
// le second paramètre 0 de la fonction reduce est la valeur initiale de l'accumulateur

// 2. Trouve les éléments communs au sein d'une liste de tableaux
function intersection(arrays) {
  return [...arguments].reduce((acc, array, i) => {
    if (i === 0) {
      acc = [...array]
    } else {
      acc = acc.filter(x => array.includes(x))
    }
    return acc
  }, [])
}
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
)
// [5, 15]
```

## Conclusion

Il y a encore tellement d'autres choses à dire sur le Javascript, mais connaître ces trois concepts vont te permettre déjà de sortir du lot de la majorité des développeurs.

Voilà, c'était tout pour moi. J'espère que t'as aimé cet article. Je compte écrire sur plein de concept un peu plus poussé du JS dans le futur.

En attendant, dis moi ce que t'aimes (ou pas) avec ce langage. Chalut!!

<div style="text-align:center;">
<img width="300" alt="girl saying bye bye" src="./bye-bye-girl.gif" />
</div>
