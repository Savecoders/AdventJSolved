/*
  ¡Es hora de poner el árbol de navidad en casa! 🎄

  Para ello vamos a crear una función que recibe la altura del árbol, que 
  será un entero positivo del 1 a, como máximo, 100.

  ? Si le pasamos el argumento 5, se pintaría esto:
  * tree
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____

  Creamos un triángulo de asteríscos * con la altura proporcionada y, 
  a los lados, usamos el guión bajo _ para los espacios. 
  Es muy importante que nuestro árbol siempre tenga la misma longitud por 
  cada lado.
  !Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
  ?Otro ejemplo con un árbol de altura 3:

  __*__
  _***_
  *****
  __#__
  __#__
  !Ten en cuenta que el árbol es un string y necesitas los saltos de línea 
  !\n para cada línea para que se forme bien el árbol.
*/

const trunkOfTree = (width) =>
	'_'.repeat(width - 1) +
	'#' +
	'_'.repeat(width - 1) +
	'\n' +
	'_'.repeat(width - 1) +
	'#' +
	'_'.repeat(width - 1);

const createXmasTree = (height) => {
	const trunck = trunkOfTree(height);
	let tree = '';
	let widthLeaf = 1;
	for (let width = 1; width < height + 1; width++) {
		const space = '_'.repeat(height - width);
		const leaf = '*'.repeat(widthLeaf);
		tree += `${space}${leaf}${space}\n`;
		widthLeaf += 2;
	}
	return `${tree}${trunck}`;
};

export default createXmasTree;

const tree = createXmasTree(6);
console.log(tree);
