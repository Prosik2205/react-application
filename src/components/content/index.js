import React from "react";
import './style.css';
import Card from './card';
import img1 from './card/images/5e4b1a8c95e491e2e6265a89_photo-1441512673622-3eaa1c39ba28.jpg'
import img2 from './card/images/5e4b1a8c95e491b7e5265a8a_3f4eb74a.jpg'
import img3 from './card/images/5e4b1a8c95e4916f85265a88_photo-1433854304641-67729357fe18.jpg'
import img4 from './card/images/5e4b1a8c95e4911851265a87_photo-1443466612971-98a16c828136.jpg'
import img5 from './card/images/5e4b1a8c95e491b9fc265a8b_photo-1428184003419-4cfd6ab3d280.jpg'

function Content () {
 return (
  <div className="content-container">
   <Card 
   image={img1}
   text1={"Coffee variety macchiato, as organic ut variety caffeine americano"}
   text2={"Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.Read more..."}
   text3={"JUNE 25, 2020 | TRAVEL"}
   />
   <Card 
   image={img2}
   text1={"Overlaid the jeepers uselessly much excluding"}
   text2={"Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish. Read more..."}
   text3={"JUNE 25, 2020 | TECH"}
   />
   <Card image={img3}
   text1={"Wherever far wow thus a squirrel raccoon jeez jaguar this from along"}
   text2={"Cup, caramelization viennese, cultivar macchiato flavour percolator ristretto frappuccino. Lungo extra macchiato cream chicory turkish caramelization.Read more..."}
   text3={"JUNE 25, 2020 | ART"}
   />
   <Card image={img4}
   text1={"According a funnily until pre-set or arrogant well cheerful"}
   text2={"Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.Read more..."}
   text3={"JUNE 25, 2020 | MUSIC"}
   />
   <Card image={img5}
   text1={"Coffee sugar, chicory seasonal espresso barista americano"}
   text2={"Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings, whipped kopi-luwak body cortado seasonal. Mug roast, café au lait affogato lungo viennese decaffeinated. Cultivar, redeye brewed seasonal, java as french press et sweet cup mazagran.Read more..."}
   text3={"JUNE 25, 2020 | MUSIC"}
   />
  </div>
 );
}

export default Content;