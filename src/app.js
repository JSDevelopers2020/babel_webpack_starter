import {person, sayHello } from './lib';

console.log(person.name);
console.log(person.sayHello("Raniel"));

const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');

// ---------------------------

async function getPosts2 (){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
getPosts2().then(posts => console.log(posts));
// this will require babel-polyfill babel-preset-stage-0
