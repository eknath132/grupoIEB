/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../util/search';
import Icon from '@mui/material/Icon';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Badge from "@mui/material/Badge";
import PickersDay from "@mui/lab/PickersDay";
import MorningCalls from './morningCalls';
import style from '../../styles/morningCalls.module.css';
import Avatar from '@mui/material/Avatar';

const index = () => {
    const initialValue = new Date();

    const minDate = new Date('2020-01-01T00:00:00.000');
    const maxDate = new Date('2034-01-01T00:00:00.000');
    const [date, setDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const highlightedDays = [1,4,19];
    const [value, setValue] = useState(initialValue);
    
    const handdleCalendar = (newValue) => {
        setValue(newValue)
        console.log(newValue)
    }

    return (
        <div className={`${style.row} row`}>
                <div className="col-md-12 col-lg-6 " style={{height:'50px'}}>
                    <div className="d-flex justify-content-start align-items-center">
                        <Search>
                            <SearchIconWrapper>
                                <Icon style={{root: {textAlign:'center'}, fontSize:'40px', padding:'10px', marginTop:'10px', marginLeft:'auto'}}>
                                    <img style={{height:'100%', marginTop:'-55px', marginLeft:'2px'}} src="/lupa.svg"/>
                                </Icon>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Buscar info...'
                            />
                        </Search>
                    </div>
                    <MorningCalls/>
                </div>
                <div className={`${style.containerCalendar} col-md-12 col-lg-6`}>
                    <div className={style.calendarBox}>
                        <div className={style.calendarTitle}>
                            Agenda
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <CalendarPicker
                                    className={style.prueba}
                                    value={value}
                                    loading={isLoading}
                                    onChange={(newValue) => {
                                    handdleCalendar(newValue);
                                    }}
                                    renderDay={(day, _value, DayComponentProps) => {
                                    const isSelected =
                                        !DayComponentProps.outsideCurrentMonth &&
                                        highlightedDays.indexOf(day.getDate()) > 0;

                                    return (
                                        <Badge
                                        key={day.toString()}
                                        sx={{height:'40px'}}
                                        overlap="circular"
                                        color = {isSelected ? "primary" : "default"}
                                        variant={isSelected ? "dot" : "default"}
                                        >
                                        <PickersDay {...DayComponentProps} />
                                        </Badge>
                                    );
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className={style.informes}>
                        Informes
                    </div>
                    <div style={{position:'relative'}}>
                        <div className={style.boxInforme}>
                            <div className={style.dayInforme}>
                                Martes
                            </div>
                            <div className={style.bodyInforme}>
                                <div className={style.avatarInforme}>
                                    <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'102px', height:'102px'}}/>
                                </div>
                                <div className={style.messageInforme}>
                                    <div className={style.titleInforme}>
                                        Morning Call
                                    </div>
                                    <p>
                                        Trading Idea de la mano de <br/> Carlos Fernandez Berisso, Head <br/>  Trader

                                    </p>
                                    <div className={style.footerInforme}>
                                        <div className={style.firmaInforme}>
                                            Carlos Fernandez
                                        </div>
                                        <div className={style.buttonInforme} style={{cursor:'pointer'}}>
                                            Inscribirse
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <div className={style.boxInforme}>
                            <div className={style.dayInforme}>
                                Martes
                            </div>
                            <div className={style.bodyInforme}>
                                <div className={style.avatarInforme}>
                                    <Avatar alt="Remy Sharp" src={''} sx={{margin:'0 10px', width:'102px', height:'102px'}}/>
                                </div>
                                <div className={style.messageInforme}>
                                    <div className={style.titleInforme}>
                                        Morning Call
                                    </div>
                                    <p>
                                        Trading Idea de la mano de <br/> Carlos Fernandez Berisso, Head <br/>  Trader

                                    </p>
                                    <div className={style.footerInforme}>
                                        <div className={style.firmaInforme}>
                                            Carlos Fernandez
                                        </div>
                                        <div className={style.buttonInforme} style={{cursor:'pointer'}}>
                                            Inscribirse
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Filtros
                    valueProductor={valueProductor}
                    valueComitente={valueComitente}
                    valueMoneda={valueMoneda}
                    setValueProductor={setValueProductor}
                    setValueComitente={setValueComitente}
                    handdleMoneda={handdleMoneda}
                />
                <Table 
                    columns={columns}
                    data={dataTabla}
                    handdleClickModal={handdleClickModal}
                />
                {
                    modal && <Modal title={bodyModal.title} handleClose={handleClose}/>
                } */}
        </div>
    )
}

export default index;

