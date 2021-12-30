import Image from 'next/image';
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
} from '../../util/search';
import Styles from '../../styles/about.module.css';
import styleCompliance from '../../styles/compliance.module.css'
import Cuentas from './cuentas'

const index = () => {
    return (
        <div className="row mt-4">
                <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <Search>
                        <SearchIconWrapper>
                            <Image 
                                alt="imagen"
                                src={"/buscar.png"}
                                width={20}
                                height={20}
                                className={Styles.busc}
                            />
                        </SearchIconWrapper>
                        <StyledInputBase/>
                    </Search>
                </div>
                <div className="col-md-3">
                    <button className={`${styleCompliance.cuentasBtnAbrir} btn `}>
                        Abrir cuenta
                    </button>
                </div>
                <Cuentas/>
        </div>
    )
}

export default index;
