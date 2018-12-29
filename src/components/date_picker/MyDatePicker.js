import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      time : '',
      slotArray : [],
      isSlotAvailable : false,
      slotHour:[]
    };
    this.dateHandleChange = this.dateHandleChange.bind(this);
    this.timeHandleChange = this.timeHandleChange.bind(this);
  }

  dateHandleChange(date) {
    console.log(date)
    this.setState({isSlotAvailable : false})
    var {slotArray,slotHour} = this.state

    const modifiedDate = moment(date).format("ddd, MMM DD")
     slotArray =  data["available_slots"].filter(x => {
              return x['date'] === modifiedDate
    })
   console.log(slotArray)

    if(slotArray.length === 0){
      this.setState({isSlotAvailable : true})
    }
  //   }else{
  //     slotHour = slotArray[0].date_slots.map(x => {
  //       return x['hour']
  // })
  //    this.setState({slotHour})
  //   }

    this.setState({
      startDate: date
    });
  }

  timeHandleChange(time) {
    this.setState({
       time
    });
  }

  render() {
    const {isSlotAvailable,slotHour} = this.state
    
    

    console.log(slotHour)
    return (
      <div >
           Date : <DatePicker
              selected={this.state.startDate}
              onChange={this.dateHandleChange}
              dateFormat='dd/MM/yyyy'
              onFocus={() => this.setState({isSlotAvailable : false})}
            />
            {isSlotAvailable && <span style={{color : 'red'}}>No slots available on this day</span>}
            <br/>
            <br/>
           Time : <DatePicker
              selected={this.state.time}
              onChange={this.timeHandleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
              placeholderText="select time"
              disabled={isSlotAvailable}
            
          />
    </div>
    );
  }
}

export default MyDatePicker


const data = {
  "template_type": "slot_picker",
  "selection_color": "#000000",
  "secondary_color": "#808080",
  "title": "Available Slots for Dr. Sumit",
  "available_slots": [
    {
      "date": "Thu, Dec 06",
      "date_slots": [
        
      ]
    },
    {
      "date": "Thu, Dec 07",
      "date_slots": [
        
      ]
    },
    {
      "date": "Fri, Dec 08",
      "date_slots": [
        
      ]
    },
    {
      "date": "Sat, Dec 09",
      "date_slots": [
        
      ]
    },
    {
      "date": "Today",
      "date_slots": [
        {
          "hour": "8",
          "hour_slots": [
            {
              "08:10 AM": "slotId001"
            },
            {
              "08:50 AM": "slotId005"
            }
          ]
        },
        {
          "hour": "3",
          "hour_slots": [
            {
              "03:00 PM": "slotId005"
            },
            {
              "03:30 PM": "slotId007"
            }
          ]
        }
      ]
    },
    {
      "date": "Tomorrow",
      "date_slots": [
        
      ]
    },
    {
      "date": "Wed, Dec 13",
      "date_slots": [
        {
          "hour": "4",
          "hour_slots": [
            {
              "04:30 PM": "slotId105"
            },
            {
              "04:50 PM": "slotId106"
            }
          ]
        },
        {
          "hour": "5",
          "hour_slots": [
            {
              "05:30 PM": "slotId202"
            },
            {
              "05:45 PM": "slotId208"
            }
          ]
        }
      ]
    }
  ]
}