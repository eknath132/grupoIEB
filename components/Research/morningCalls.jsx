import style from '../../styles/morningCalls.module.css';
import Avatar from '@mui/material/Avatar';
import SelectInput from '../../util/selectInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';


const morningCalls = () => {
    return (
        <div style={{position:'relative'}} >
            <div className={`${style.title}`} >
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
                            <div className={style.buttonBox} style={{cursor:'pointer'}}>
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
                            <div className={style.buttonBox} style={{cursor:'pointer'}}>
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
                <SelectInput
                    minWidth= {90}
                    marginRight = {'40px'}
                    marginTop= {'-5px'}
                    label = 'Filtrar'
                    options= {[ 
                        {
                            value: 'Filtrar1',
                            label:'Filtrar1'
                        },
                        {
                            value: 'Filtrar2',
                            label:'Filtrar2'
                        },
                        {
                            value: 'Filtrar3',
                            label:'Filtrar3'
                        },

                    ]}
                />
                <SelectInput
                    minWidth= {70}
                    marginRight = {'40px'}
                    marginTop= {'-5px'}
                    label = 'Ver'
                    options= {[ 
                        {
                            value: 'Ver1',
                            label:'Ver1'
                        },
                        {
                            value: 'Ver2',
                            label:'Ver2'
                        },
                        {
                            value: 'Ver3',
                            label:'Ver3'
                        },

                    ]}
                />
                </div>
            </div>

            <div className={style.noticiasBox}>
                <div className={style.noticiasColumn}>
                    <div className={style.headearNoticiasBoxOne}>
                    </div>
                    <div className={style.bodyNoticiasBox}>
                        Novedades sobre mercado de capitales
                    </div>
                    <div className={style.buttonNoticias} style={{cursor:'pointer'}}>
                        Inscribirse
                    </div>
                </div>
                <div className={style.noticiasColumn}>
                    <div className={style.headearNoticiasBoxTwo}>
                    </div>
                    <div className={style.bodyNoticiasBox}>
                        Novedades sobre mercado de capitales
                    </div>
                    <div className={style.buttonNoticias} style={{cursor:'pointer'}}>
                        Inscribirse
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default morningCalls;
