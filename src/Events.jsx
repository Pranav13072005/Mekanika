import React,{useEffect} from 'react';
import './Events.css';
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { GoGraph } from "react-icons/go";


function Events(){
    return(
        <div className='events-page'>
            <div className='events-title'>
                Our <span id='red1'>Events</span>
            </div>
            <div className='icons-events'>
            <div className='icons-label'>
            <MdEmojiEvents className='icon1' size={70}/>
            <span className='numbers-icons'>11+</span> Events
            </div>
            <div className='icons-label'>
            <MdOutlinePeopleAlt className='icon1' size={70}/>
            <span className='numbers-icons'>30+</span> Teams
            </div>
            <div className='icons-label'>
            <PiStudentFill className='icon1' size={70}/>
            <span className='numbers-icons'>800+</span> Students
            </div>
            <div className='icons-label'>
            <GoGraph className='icon1' size={70}/>
            <span className='numbers-icons'>20+</span> Years
            </div>
            </div>
            <div className='explore'>
                Explore our <span id='red2'>Events!</span>
            </div>
    <div className="container1">
      <div className="carousel1">
        <img
          className="item"
          src="https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="item"
          src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="item"
          src="https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="item"
          src="https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          className="item"
          src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
            
        </div>
    )
}
export default Events;