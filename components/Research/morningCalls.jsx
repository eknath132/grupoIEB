import style from '../../styles/morningCalls.module.css';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const morningCalls = () => {
    return (
        <div style={{position:'relative'}}>
            <div className={style.title}>
                Morning Calls
            </div>
            <div className={style.boxMorningCalls}>
                <div className={style.dayBox}>
                    Martes
                </div>
                <div className={style.bodyBox}>
                    <div className={style.avatarBox}>
                        <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'102px', height:'102px'}}/>
                    </div>
                    <div className={style.messageBox}>
                        <div className={style.titleBox}>
                            Morning Call
                        </div>
                        <p>
                            Trading Idea de la mano de <br/> Carlos Fernandez Berisso, Head <br/>  Trader

                        </p>
                        <div className={style.footerBox}>
                            <div className={style.firmaBox}>
                                Carlos Fernandez
                            </div>
                            <div className={style.buttonBox}>
                                Inscribirse
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={style.boxMorningCalls}>
                <div className={style.dayBox}>
                    Martes
                </div>
                <div className={style.bodyBox}>
                    <div className={style.avatarBox}>
                        <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'102px', height:'102px'}}/>
                    </div>
                    <div className={style.messageBox}>
                        <div className={style.titleBox}>
                            Morning Call
                        </div>
                        <p>
                            Trading Idea de la mano de <br/> Carlos Fernandez Berisso, Head <br/>  Trader

                        </p>
                        <div className={style.footerBox}>
                            <div className={style.firmaBox}>
                                Carlos Fernandez
                            </div>
                            <div className={style.buttonBox}>
                                Inscribirse
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
                <div className={style.noticias}>
                    Noticias
                </div>
                <div>
                <FormControl sx={{minWidth: 90}}  style={{marginRight:'40px'}}>
                    <InputLabel id="demo-simple-select-autowidth-label" style={{marginTop:'-5px'}}>Filtrar</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value=''
                        autoWidth
                        label="Filtrar"
                        sx={{height:45, background: '#E4EBF0', verticalAlign:'middle'}}
                    >
                    <MenuItem value=''>
                        <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value='Filtrar1'>Filtrar 1</MenuItem>
                    <MenuItem value='Filtrar2'>Filtrar 2</MenuItem>
                    <MenuItem value='Filtrar3'>Filtrar 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{minWidth: 70}}>
                    <InputLabel id="demo-simple-select-autowidth-label" style={{marginTop:'-5px'}}>Ver</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value=''
                        autoWidth
                        label="Ver"
                        sx={{height:45, background: '#E4EBF0'}}
                    >
                    <MenuItem value=''>
                        <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value='Filtrar1'>Filtrar 1</MenuItem>
                    <MenuItem value='Filtrar2'>Filtrar 2</MenuItem>
                    <MenuItem value='Filtrar3'>Filtrar 3</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </div>

            <div className={style.noticiasBox}>
                <div className={style.noticiasColumn}>
                    <div className={style.headearNoticiasBoxOne}>
                    </div>
                    <div className={style.bodyNoticiasBox}>
                        Novedades sobre mercado de capitales
                    </div>
                    <div className={style.buttonNoticias}>
                        Inscribirse
                    </div>
                </div>
                <div className={style.noticiasColumn}>
                    <div className={style.headearNoticiasBoxTwo}>
                    </div>
                    <div className={style.bodyNoticiasBox}>
                        Novedades sobre mercado de capitales
                    </div>
                    <div className={style.buttonNoticias}>
                        Inscribirse
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default morningCalls;
