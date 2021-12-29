import { useState } from 'react'

const Formulario = ({setBusquedaletra}) => {

    const [busqueda,setBusqueda ] = useState(
        {
            artista: '',
            cancion: ''
        }
    )

    const [error,setError] = useState(false)

    const {artista,cancion} = busqueda


    const actualizarBusqueda = (e) =>{
        setBusqueda({
                ...busqueda,
                [e.target.name]:e.target.value
            }) 
    }

    const buscarInfo =e=>{

        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true)
            return;
        }
           setError(false)
           setBusquedaletra(busqueda)
        
    }

    return (
        <div className='bg-info'>
            {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p>:null}
            <div className='container'>
                <div className='row'>
                    <form 
                        onSubmit={buscarInfo}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-5'>
                        <fieldset>
                            <legend className='text-center'>Buscador Letras Canciones</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input type='text' className='form-control' name='artista' placeholder='Nombre Artista'
                                            onChange={actualizarBusqueda}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input type='text' className='form-control' name='cancion' placeholder='Nombre Canción' 
                                         onChange={actualizarBusqueda}
                                         value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary float-right'>Buscar</button>
                        </fieldset>
                    </form>S
                </div>
            </div>
        </div>
    )
}

export default Formulario