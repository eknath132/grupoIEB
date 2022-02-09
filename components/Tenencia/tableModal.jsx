/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Input = styled('input')({
    display: 'none',
  });
  

const tableModal = () => {
    const [file, setFile] = useState(null);

    const processImage = (e) => {
        const imageFile = e.target.files;
        setFile(imageFile)
    }

    const clientes = [
        {   
            id:'1',
            cliente: 'Documentacion proxima a vencer',
            numComitente: 'estado de cuenta',
            plata: 'Activa'
        },
        {
            id:'2',
            cliente: 'Documentacion proxima a vencer',
            numComitente: 'estado de cuenta',
            plata: 'Proximo a vencer'
        },
        {
            id:'3',
            cliente: 'Documentacion proxima a vencer',
            numComitente: 'estado de cuenta',
            plata: 'Documentacion vencida'
        },
        {
            id:'4',
            cliente: 'Documentacion proxima a vencer',
            numComitente: 'estado de cuenta',
            plata: 'Documentacion vencida'
        },
    ]
    return (
        <div>
           {clientes.map(cli => (
                <div className='row' key={cli.id} style={{marginTop:'20px'}}>
                    <div className='col-md-6' style={{display:'flex'}}>
                        <AssignmentOutlinedIcon sx={{marginTop:'3px', fontSize:'25px'}}/>
                        <div style={{fontSize:'10px'}}>
                            {cli.cliente}
                            <p style={{fontSize:'10px'}}>
                                {cli.numComitente}
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div style={{fontSize:'10px'}}>
                            {cli.plata}
                        </div>
                    </div>
                </div>
            ))}
            <div className='row'>
                <div className='col-md-12'>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={e => (processImage(e))}/>
                        <Button component="span" style={{color:'black', border:'1px solid black' }}>
                            <FileUploadOutlinedIcon/>
                            <div style={{fontSize:'10px'}}>
                                Agregar documento
                            </div>
                        </Button>
                </label>
                </div>
            </div>
        </div>
    )
}

export default tableModal;