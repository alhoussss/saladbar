import React from 'react';
import Menu from './card';

const Carte = () => {
  const menu = [
    { id: 1, name: 'Assiettes de crudités', price: 13,image: 'https://media3.woopic.com/api/v1/images/219%2Fwebedia-recettes%2F819%2Fb88%2F0e89431530e1d20e1d579fcab0%2Foeufs-mimosa-et-meli-melo-de-crudites%7C379959-oeufs-mimosa-et-crudites-orig-1.jpg?format=420x&facedetect=1&quality=85'},
    { id: 2, name: 'Méli-mélo de crudités', price: 12,image: 'https://www.tatiemaryse.com/wp-content/uploads/2018/12/me%CC%81li-me%CC%81lo-crudite%CC%81s.jpg'},
    { id: 3, name: 'Panaché de crudités', price: 15,image: 'http://img.over-blog-kiwi.com/0/98/03/83/20160620/ob_69e010_5b9ce098548e8136767516a263ba8c2d-large.jpeg'},
    { id: 4, name: 'Crudités Bulgare', price: 10,image: 'https://thumbs.dreamstime.com/b/salade-bulgare-ovcharska-variante-de-la-shopska-cuisine-nationale-plats-traditionnels-assortis-des-balkans-top-view-160715728.jpg'},
    { id: 5, name: 'Salade Arc-en-ciel', price: 15,image: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/salade-arc-en-ciel-de-grenailles-lardons-ac37707e.jpg'},
  ];

  return (
    <div id='menu'>
      <Menu menu={menu} />
    </div>
  );
}

export default Carte;
