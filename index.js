import {Assets} from "@pixi/assets";

let basePath = document.URL.replace(/\/[^\/]+?\.[^\/]+?$/, '/');

if (!basePath.endsWith('/')) {
	// Assets basePath must have trailing slash
	basePath += '/';
}
console.log('User agent is ', navigator.userAgent);

console.log('Setting Assets basePath to', basePath);

await Assets.init({basePath});

const fontPath = 'font.xml';

console.log('Loading font at', fontPath);

await Assets.load(fontPath);

console.log('Font load succeeded!');

export {};
