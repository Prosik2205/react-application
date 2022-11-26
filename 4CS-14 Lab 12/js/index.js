/**
 * Objects
 */
const puzzle = {
 // <property>: <value>
 count: 4000,
 size: {
  width: 1000,
  height: 2000,
 },
 imgUrl: 'https://google.com',
 material: "material A"
};
/***************** */
const articles = [
 {
  title: 'Title 1',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 },
 {
  title: 'Title 2',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 },
 {
  title: 'Title 3',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 },
 {
  title: 'Title 4',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 },
 {
  title: 'Title 6',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 },
 {
  title: 'Title 7',
  description: 'Tempor ut pariatur laboris laborum amet exercitation et ea est magna.',
  content: 'Do do laboris ut reprehenderit aliqua quis enim Lorem exercitation est deserunt mollit. Eiusmod nisi occaecat laborum mollit exercitation excepteur qui officia cupidatat sint duis duis. Incididunt incididunt cupidatat laboris aliqua occaecat et veniam adipisicing nulla dolore pariatur. Irure occaecat officia ipsum cillum consequat consequat voluptate ad deserunt cupidatat eu. Aute sit sint sit esse ex ea reprehenderit dolor laborum amet consequat.',
  imgUrl: './imgs/fikran-hadinata-dark-forest-2.jpg',
 }
];

window.addEventListener('load', () => {
 // for (const article of articles) { ... }
 articles.forEach((article) => {
  const art = document.createElement('article');

  const title = document.createElement('h4');
  title.innerText = article.title;
  art.appendChild(title);

  const description = document.createElement('p');
  description.innerText = article.description;
  art.appendChild(description);

  art.addEventListener('click', () => {
   const selectedElem = document.querySelector('.select');
   if (selectedElem) {
    selectedElem.classList.remove('select');
   }
   art.classList.add('select');

   const articleElem = document.getElementById('article');
   articleElem.innerHTML = '';

   const title = document.createElement('h4');
   title.innerText = article.title;
   articleElem.appendChild(title);

   const content = document.createElement('span');
   content.innerText = article.content;
   articleElem.appendChild(content);

   const image = document.createElement('img');
   image.src = article.imgUrl;
   articleElem.appendChild(image);
  });

  const container = document.getElementById('container');
  container.appendChild(art);
 });
 ///////////////////////////////////////////////////////////////
 const add = document.getElementById('add-new-article');
   add.addEventListener('click', () => 
   {
    const title = document.getElementById('title');
    const Description = document.getElementById('description');
    const Content = document.getElementById('content');
    const titleValue = title.value;
    const DescriptionValue = Description.value;
    const ContentValue = Content.value;
    console.log( titleValue, DescriptionValue, ContentValue );
    const art = document.createElement('article');

    const h = document.createElement('h4');
    h.innerText = titleValue;
    art.appendChild(h);
    
    const p = document.createElement('p');
    p.innerText = DescriptionValue;
    art.appendChild(p);
    

    const sp =  document.createElement('span');
    sp.innerText = ContentValue;
    art.appendChild(sp);

    
    art.addEventListener('click', () => {
      const selectedElem = document.querySelector('.select');
      if (selectedElem) {
       selectedElem.classList.remove('select');
      }
      art.classList.add('select');
   
      const art1 = document.getElementById('article');
      art1.innerHTML = '';
   
      const h = document.createElement('h4');
    h.innerText = titleValue;
    art1.appendChild(h);
    
    

    const sp =  document.createElement('span');
    sp.innerText = ContentValue;
    art1.appendChild(sp);
     });

    const container = document.getElementById('container');
    container.appendChild(art);
   }
   )
   ////////////////////////
   const del=document.getElementById('delete_art');
   del.addEventListener('click', () => {
    const con = document.getElementById('container');
    con.removeChild(con.lastElementChild);



   })

   
   
   
    





});