import { DashboardName } from './dashboardformdata'
import flowerLeft from '../../assets/Images/flower-left.png'
import flowerRight from '../../assets/Images/flowerRight.png'
import './dashboard.scss'
import DashboardCard from '../../components/DashboardCard'

import  { test } from '../../config/config.json'

export default function Dashboard() {
   
    const displayCards = DashboardName.map(
        function Cards(props){
            return (
                <DashboardCard key={props.id} name={props.name} link={props.link}/>
            )
        }
    )
    return (
        <div className="dashboard">
                <div className='dashboard-container' style={{ width: '100%'}}>
                    <div className="left-flower">
                        <img src={flowerLeft} alt="" srcset="" />
                    </div>
                    <div className="dashboard-card">
                        {displayCards}
                    </div>
                    <div className="right-flower">
                        <img src={flowerRight} alt="" srcset="" />
                    </div>
                </div>
        </div>
    )
}
