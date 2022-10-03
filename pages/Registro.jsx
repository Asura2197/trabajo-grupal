
import mando from './imagenes/mando.png';
import lupa from './imagenes/lupa.png';
import iconper from './imagenes/icono_persona.png';
import carrito from './imagenes/carrito_compras.png';

import './diseño.css';

const Registro = () => {
    return <div className="container-fluid" id='color'>
        <div className="row">
            <div className="col-4"> <img src={mando} alt="mando" /> </div>

            <div className="col-1" id='iconos1'> <a>Home</a> </div>
            <div className="col-1" id='iconos1'> <a>About</a> </div>
            <div className="col-1" id='iconos1'> <a>Support</a> </div>
            <div className="col-1" id='iconos1'> <a>Reviews</a> </div>
            <div className="col-1" id='iconos1'> <a>Ranking</a> </div>
            
            <div className="col" id='barra1'> 
                <img src={lupa} alt="lupa" hspace="8" />
                <img src={iconper} alt="icono" hspace="8" />
                <img src={carrito} alt="carrito" hspace="8" />
            </div>
        </div>
        
        <div className="row justify-content-center" style={{marginTop:`8%`}}>
            <div className="col-5" style={{backgroundColor:`#3f2d68`}}>
                <h1 id='primerh1' ><i>CREATE ACCOUNT</i></h1>
                <input className="form-control" type="text" placeholder="First Name" id='caja0' />
                <input className="form-control" type="text" placeholder="Last Name" id='caja25'/>
                <input className="form-control" type="email" placeholder="Email" id='caja25'/> 
                <input className="form-control" type="password" placeholder="Password" id='caja25'/>
                <button type="button" class="btn btn-light" id='caja1'>CREATE</button>
            </div>
        </div>




        
    </div>
}

export default Registro