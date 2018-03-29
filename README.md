# Ex1

## 1.1

- L'évènement `onLoad`
- Les méthodes `document.getElementById('id')` ou `document.querySelector('#id')`
- La propriété `innerHTML`
- La méthode `document.getElementsByTagName('h2')` par exemple
- On peut simplement faire `document.getElementsByTagName('h2').length`
- On peut faire `document.querySelector('.firstOrLast')`
- Cette question n'a pas de sens.
- En faisant `nombre % 2 === 0`

## 1.2

- `innerHTML, outerHTML, textContent` sont standards, les 2 autres sont des bricolages d'Internet Explorer
- Par déduction, oui

## 1.3

- Il n'y a pas de liste. Sinon, `document.querySelectorAll('whateverSelector')[0]`
- Pareil, mais on extrait le résultat de querySelectorAll dans une variable (e.g. `author`) et on fait `author[author.length - 1]`

# Ex2

- On fait la diff. absolue en millisecondes entre "now" et la date indiquée, et on divise le résultat par la duréen en millisecondes d'1 jour.
  Obligé de le mettre en absolu, sinon la valeur obtenue est négative.
- En updatant le innerHTML, en remplaçant "xxx" dans le texte par le nombre de jours (`String.replace`).
- setInterval, car c'est censé boucler tous les x temps pour mettre à jour la date.