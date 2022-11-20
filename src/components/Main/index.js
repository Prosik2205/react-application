import React, { useState } from "react";
import './style.css';
import kut from './img/100.gif'
function Menu(){
    return(
        <div>
        <div className="container">
        <div className="grid">

            {/* <div className="black">
                    {/* <img src={kut} alt=''>  </img> 
                </div> */}

            <div className="con">
                <h2>Headline Text</h2>
                <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
                <p className="text"> Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p >Read More »</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
                <p className="text"> Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p >Read More »</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
                <p className="text"> Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p >Read More »</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
                <p className="text"> Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p >Read More »</p>
            </div>
        </div>
        <div className="hr"> </div>
        <div className="grid">
            
        <div className="con">
                <h2>Headline Text</h2>
                <p className="text2">Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p className="text2">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.</p>
                <p className="text2">Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text2">Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p className="text2">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.</p>
                <p className="text2">Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text2">Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p className="text2">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.</p>
                <p className="text2">Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
            </div>
            <div className="con">
                <h2>Headline Text</h2>
                <p className="text2">Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
                <p className="text2">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.</p>
                <p className="text2">Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
            </div>
            </div>
        </div>
        <footer>
                <div className="ftr">
                    <div>
                        <p className="hr1">Footer Navigation</p>
                        
                        <div className="hr2">
                            <a id="home">Home Page</a>
                            
                           <p> Our Services</p>
                           
                           <p>Meet the Team</p>
                                
                           <p>Blog</p>
                                
                           <p>Contact Us</p>
                                
                           <p>Gallery</p>
                                
                           <p>Portfolio</p>
                            
                           <p>Online Shop</p>
                                  

                        </div>
                    </div>
                    <div>
                        <p className="hr1"> Lastest Gallery</p>
                        <div className="rubic">
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        <div className="panel"></div>
                        </div>
                    </div>
                    <div>
                    <p className="hr1">  From Twitter</p>
                   
                    <div className="hr3">
                            <p id="home"> <a id="orange">@name</a> RT <a id="orange">@name</a> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<a id="orange-small" >about 9 hours ago</a> </p>
                            
                            <p id="home"> <a id="orange">@name</a> RT <a id="orange">@name</a> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<a id="orange-small" >about 9 hours ago</a> </p>
                           
                            <p id="home"> <a id="orange">@name</a> RT <a id="orange">@name</a> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<a id="orange-small" >about 9 hours ago</a> </p>
                                
                           <p id="home"> <a id="orange">@name</a> RT <a id="orange">@name</a> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<a id="orange-small" >about 9 hours ago</a> </p>
                                
                        </div>
                    </div>
                    <div>
                    <p className="hr1"> Contact Us</p>
                    
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default Menu;