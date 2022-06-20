
import Nacionales from '../../componets/newsCatagory/Nacionales'
import SideBarNews from '../../componets/sideBar/SideBarNews'

const NacionalesScreen = () => {


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Nacionales />
                </div>
                <div className='col-lg-3 mt-3'>
                    <SideBarNews />
                </div>
            </div>
        </div>
    )
}

export default NacionalesScreen