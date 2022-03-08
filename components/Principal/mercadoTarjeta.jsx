
const mercadoTarjeta = () => {
  return (
    <div style={{padding:'10px', display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid black', borderRadius:'8px', background:'#102128'}}>
        <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'black'}}> </div>
        <div style={{display:'block', lineHeight:'15px', paddingLeft:'10px', fontSize:'17px', color:'#fff', letterSpacing: '0.15px'}}>
            ALUA
            <span style={{marginLeft:'10px'}}>
                0.1%
            </span>
            <div>
                $450
            </div>
        </div>
    </div>
  )
}

export default mercadoTarjeta;
