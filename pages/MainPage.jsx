
import './diseño.css';
import mando from './imagenes/mando_g.png';
import lupa from './imagenes/lupa.png';
import iconper from './imagenes/icono_persona.png';
import carrito from './imagenes/carrito_compras.png';
import face from './imagenes/face.png';
import twit from './imagenes/twiter.png';
import inst from './imagenes/insta.png';

const MainPage=()=>{
    return <div id='fondo' className="container-fluid">
        <div className="row" >
            <div className="col-4"> <img className="mando" src={mando} /> 
                <h1 id='text1'>Build your PC!</h1>
                <h4 id='text1'>Just for what you need</h4>
            </div>

            <div className="col-1" id='text2'> <a>Home</a> </div>
            <div className="col-1" id='text2'> <a>About</a> </div>
            <div className="col-1" id='text2'> <a>Support</a> </div>
            <div className="col-1" id='text2'> <a>Reviews</a> </div>
            <div className="col-1" id='text2'> <a>Ranking</a> </div>
            
            <div className="col" id='imagenes'> 
                <img src={lupa} hspace="8" />
                <img src={iconper} hspace="8" />
                <img src={carrito} hspace="8" />
            </div>
        </div>

        <div className="row" id='motro1'>
            <div className="col-2" id='motro2'>
                <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5'>Build for begginers</h9></button>
            </div>
        
            <div className="col-2">
                <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5'>Advanced building</h9></button>
            </div>

        </div>

        <div  id='mcaja'>
            <div className="row">
                <div className="col-6"><h5>Sign up to our newsletter for the latest PC news.</h5></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">Build Your PC</div>
                        <div className="col">Good.</div>
                        <div className="col">Terms & Conditions</div>
                    </div>
                    <div className="row" id='motro3'>
                        <div className="col">Why Redux</div>
                        <div className="col">Better.</div>
                        <div className="col">Privacity Policy</div>
                    </div>
                    
                </div>
                
            </div>

            <div className="row" id='motro4'>
                <div className="col-6">
                    <div className="row">
                        <div className="col">
                            <input className="form-control" id="bton" type="email" placeholder="Email"/>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-light" id='mcaja2'>SUBSCRIBE</button>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">Support</div>
                        <div className="col">Best.</div>
                        <div className="col">Refund Policy</div>
                    </div>
                </div>
            </div>
            
            <div className="row" id='motro5'>
                
                    <img className="resize" src={face}/>
                    <img className="resize" src={twit}/>
                    <img className="resize" src={inst} />
                
            </div>

            <div className="row" id='motro6'>
                <div className="col" id='mcaja3'>Copyright © 2022 Build Redux. All Rights Reserved.</div>
            </div>
        </div>

    </div>



}

export default MainPage