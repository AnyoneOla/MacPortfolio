import './AppleMenu.css'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../features/globalSlice'

export default function AppleMenu(){
    const dispatch = useDispatch()

    return (
        <div className='apple-menu-main'>
            <div className='apple-menu-item'>
                About This Mac
            </div>
            <hr className='apple-menu-hr'></hr>
            <div className='apple-menu-item'>
                System Settings....
            </div>
            <div className='apple-menu-item'>
                App Store
            </div>
            <div className='apple-menu-item'>
                Recent Items
            </div>
            <hr className='apple-menu-hr'></hr>
            <div className='apple-menu-item'>
                Force Quit....
            </div>
            <hr className='apple-menu-hr'></hr>
            <div className='apple-menu-item'>
                Sleep
            </div>
            <div className='apple-menu-item' onClick={()=>dispatch(setLoading(true))}>
                Restart
            </div>
            <div className='apple-menu-item' onClick={()=>dispatch(setLoading(true))}>
                Shut Down....
            </div>
            <hr className='apple-menu-hr'></hr>
            <div className='apple-menu-item'>
                Lock Screen
            </div>
            <div className='apple-menu-item'>
                Log Out as Jeet.Joshi....
            </div>


        </div>
    )
}