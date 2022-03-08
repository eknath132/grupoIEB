/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';


const alertas = [
    {
        id: 1,
        cliente: 'cliente1',
        monto: '$xxxxx'
    },
    {
        id: 2,
        cliente: 'cliente1',
        monto: 'xxxxx'
    }
    ,
    {
        id: 3,
        cliente: 'cliente1',
        monto: 'xxxxx'
    }
    ,
    {
        id: 4,
        cliente: 'cliente1',
        monto: 'xxxxx'
    }
]

const componentAlert = () => {
    const [array, setArray] = useState(alertas)

    const handdleBorrar = (id) => {
        setArray((prev) => [...prev.filter((i) => i.id !== id)]);
      };

    return (
      <div style={{width:'250px'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
            <div>
                <KeyboardBackspaceIcon sx={{marginRight:'10px'}}/>
                Alertas    
            </div>
            <div>
                <Icon style={{root: {textAlign:'center'}, fontSize:'24px', borderRadius:'13px', marginLeft:'auto'}}>
                    <img style={{height:'100%', marginTop:'-17px', marginLeft:'-3px'}} src="/rueda.svg"/>
                </Icon>
            </div>
        </div>
        <Divider/>
        <TransitionGroup>
            {array.map(items => (
                <Collapse key={items.id}>
                    <div style={{display:'flex', flexWrap:'wrap', marginTop:'30px'}}>
                        <div style={{width:'250px'}}>
                            <div style={{background:'black', color:'white', display:'flex', justifyContent:'space-between'}}>
                                Transferencia realizada
                                <div style={{cursor:'pointer', marginRight:'10px'}} onClick={()=> handdleBorrar(items.id)}>
                                    x
                                </div>
                            </div>
                            <div style={{paddingLeft:'10px', fontSize:'14px'}}>
                                <div>
                                    Cliente: xxxxxxx
                                </div>
                                <div>
                                    Monto: xxxxx
                                </div>
                                <div style={{color:'black', cursor:'pointer', border:'1px solid black', borderRadius:'10px', maxWidth:'170px', padding:'0  10px', marginTop:'5px'}}>
                                    Informar transferencia
                                </div>
                            </div>
                        </div>
                    </div>
              </Collapse>
                ))}
        </TransitionGroup>
      </div>
)}

export default componentAlert;
