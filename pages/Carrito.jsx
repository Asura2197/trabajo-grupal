import mando from './imagenes/mando.png';
import lupa from './imagenes/lupa.png';
import iconper from './imagenes/icono_persona.png';
import carrito from './imagenes/carrito_compras.png';
import carrito2 from './imagenes/carrito_compras2.png';
import teclado from './imagenes/teclado.jpg';
import tacho from './imagenes/tacho.png';
import core7 from './imagenes/core7.jfif';
import rtx from './imagenes/rtx.png';
import memoria from './imagenes/memoria.jfif';
import gabinete from './imagenes/gabinete.jpg';
import lista from './imagenes/mando_lista.png';
import './diseño.css';


const Carrito = () => {
    return <div className="container-fluid" style={{backgroundColor:`#383c4c`}}>
        <div className="row">
            <div className="col-4"> <img src={mando} /> </div>

            <div className="col-1" id='iconos1'> <a>Home</a> </div>
            <div className="col-1" id='iconos1'> <a>About</a> </div>
            <div className="col-1" id='iconos1'> <a>Support</a> </div>
            <div className="col-1" id='iconos1'> <a>Reviews</a> </div>
            <div className="col-1" id='iconos1'> <a>Ranking</a> </div>
            
            <div className="col" id='ccaja1'> 
                <img src={lupa} hspace="8" />
                <img src={iconper} hspace="8" />
                <img src={carrito} hspace="8" />
            </div>
        </div>

        <div className="row" id='ccaja2'>

            <div className="row">
                <div className="col-6"><h4>Shopping car items</h4></div>
                <div className="col-6"><button type="button" className="btn btn" id='ccaja3' ><img src={carrito2}/>Checkout</button></div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={teclado} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
                <div className="col-5" id='ccaja5'>
                    Keyboard & mouse bundle
                </div>
                <div className="col-1" id='ccaja6'>
                    $39
                </div>
                <div className="col-1">
                    <img src={tacho} id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={core7} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
                <div className="col-5" id='ccaja5'>
                    INTEL CORE I7-12700F 12-CORE
                </div>
                <div className="col-1" id='ccaja6'>
                    $359
                </div>
                <div className="col-1">
                    <img src={tacho}  id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={rtx} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
                <div className="col-5" id='ccaja5'>
                    NVIDIA GEFORCE RTX 3070 8GB (VR READY)
                </div>
                <div className="col-1" id='ccaja6'>
                    $679
                </div>
                <div className="col-1">
                    <img src={tacho} id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={memoria} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
                <div className="col-5" id='ccaja5'>
                    1 TB NVME M.2
                </div>
                <div className="col-1" id='ccaja6'>
                    $99
                </div>
                <div className="col-1">
                    <img src={tacho}  id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={gabinete} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
                <div className="col-5" id='ccaja5'>
                    COOLER MASTER TD500 RGB
                </div>
                <div className="col-1" id='ccaja6'>
                    $99
                </div>
                <div className="col-1">
                    <img src={tacho}  id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>

            <div className="row" id='ccaja4'>
                <div className="col-3">
                    <img src={lista} style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>  
                <div className="col-5" id='ccaja5'>
                    BUILD + SETUP + TESTING + WARRANTY
                </div>
                <div className="col-1" id='ccaja6'>
                    $99
                </div>
                <div className="col-1">
                    <img src={tacho}  id='ccaja7' style={{width: "80px", height: "40px", marginTop: "10px"}}/>
                </div>
            </div>
        
        </div>






    </div>

}

export default Carrito