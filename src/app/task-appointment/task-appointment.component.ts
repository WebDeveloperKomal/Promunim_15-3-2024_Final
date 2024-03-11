import { Component, ViewChild } from '@angular/core';
import { TaskAppointmentModel } from './task-appointment.component.model';
import { FormGroup } from '@angular/forms';
import { ActionEventArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import{L10n} from '@syncfusion/ej2-base'
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

L10n.load({
  'en-US' : {
    'schedule' : {
      'saveButton' : '' ,
      'cancelButton' : '',
      'newEvent' : 'Add Task'
    }
  }
})
@Component({
  selector: 'app-task-appointment',
  templateUrl: './task-appointment.component.html',
  styleUrls: ['./task-appointment.component.css']
})
export class TaskAppointmentComponent {
dateparser(arg0: any) {
throw new Error('Method not implemented.');
}
  public tasks: TaskAppointmentModel[] = [];
  private dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    // url: 'http://localhost:8181/auth/get-employee-tasks',
    // adaptor: new ODataV4Adaptor,
    // crossDomain: true ,
    // credentials: 'include'
 });


//  console.log("dat", this.dataManager);
 
 public eventSettings: EventSettingsModel = { dataSource: this.dataManager


  // allowAdding: true,
  // eventTemplate: this.eventTemplate.bind(this)
  

};

public eventTemplate(props: any): string {
  // Check if the event is added (you can modify this condition based on your logic)
  if (props.EventType === 'Add') {
    return 'green'; // Set the background color to green
  }
  return ''; // Default background color for other events
}
// 
 
  // tasks = TaskAppointmentModel = TaskAppointmentModel()
  // schedulerData = {
  //   dataSource: this.tasks,
  //   fields: {
  //     id: { name: 'id', title: 'Task ID' },
  //     dueDate: { name: 'dueDate', title: 'Due Date' },
  //     endTime: { name: 'endTime', title: 'End Time' },
  //     allDay: { name: 'allDay', title: 'All Day' },
  //   },
  // };               
  newevent : TaskAppointmentModel = new TaskAppointmentModel() ;
  // newEvent: any = {description: this.newEvent.description,
  //   employeeId: this.newEvent.employeeId,
  //  taskDate: this.newEvent.taskDate,
  //   dueDate: this.newEvent.dueDate,
  //   type: this.newEvent.type};
public setViews : View[] = ["Day" , "Week" , "Month", "Year"] ;
public showQuickInfo: Boolean = false;
// eventSettings: { dataSource: Object[] } = { dataSource: [] };

// private dataManager: DataManager = new DataManager({
//   url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
//   adaptor: new ODataV4Adaptor,
//   crossDomain: true
// });

// public eventSettings: EventSettingsModel = {
//   dataSource: [],
//   fields: {
   

//     id: 'Id',
//     subject: { name: 'title', title: 'Event Name' },
   
//     description: { name: 'description', title: 'Event Description' },
//     startTime: { name: 'startTime', title: 'Start Duration' },
//     endTime: { name: 'sndTime', title: 'End Duration'  }
// }

    // this.tasks 
    // {

      // id : 1 ,
      // dueDate : any ;
      // endTime: new Date(2020, 9, 30, 14, 50),
      // allDay : any,
      // title:  this.tasks  ,
      // startTime: new Date(2020, 9, 30, 14, 0), 
      // status : any 
      // Id: 1 ,
      // Subject: "Testing Event",
      // StartTime: new Date(2020, 9, 30, 14, 0),
      // EndTime: new Date(2020, 9, 30, 14, 50),
      // RecurrenceRule: "FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;",
      // RecurrenceException: "20201106T130000Z"
    // }
  
// };

constructor(private apiservice : ApiService) {
  // this.newevent = new TaskAppointmentModel();
}
ngOnInit(){
  // this.newevent = new TaskAppointmentModel();
 this.fetchScheduleData() ;
// console.log("*************",this.eventSettings.dataSource);
console.log('rrrrrrrrrrrr' , this.dataManager);

}

fetchScheduleData(){
  this.apiservice.getTask().subscribe((resp : any)=>
  {
    console.log('Tasks retrieved successfully', resp.data);
    // console.log('Tasks retrieved successfully **************', resp.data[0].title);
    // data.insertedBy.employeeId title
    // this.eventSettings.dataSource = resp.data 
    // .map((task: any) => ({
    //   id: task.id,
    //   allDay: task.allDay,
    //   dueDate: new Date(task.dueDate),
    //   endTime: new Date(task.endTime),
    //   insertedBy: task.insertedBy,
    //   startTime: new Date(task.startTime),
    //   status: task.status,
    //   title: task.title
    // }));

    // this.eventSettings.dataSource = resp.data;
    // console.log('Tasks retrieved successfully**********', this.eventSettings.dataSource);
    this.tasks = resp.data ;
    // this.eventSettings.dataSource = this.tasks;
    this.dataManager = resp.data    
    console.log('Tasks retrieved successfully sssssssssss', this.tasks);
    // this.schedulerData.dataSource = this.tasks;
         
    // this.eventSettings.dataSource = resp.data.map((task: any) => ({
    //   id: task.id,
    //   dueDate: task.dueDate,
    //   endTime: new Date(task.endTime),
    //   allDay: task.allDay,
    //   title: task.title,
    //   startTime: new Date(task.startTime),
    //   status: task.status
    // }));
  }, (error: any) =>{
    console.log('Error retrieving tasks', error);
    
  }
  )
}

// public eventSettings: EventSettingsModel = { dataSource: this.tasks ,allowAdding: true };


// @ViewChild('schedule') public scheduleObj: any;

// public data: Record<string, any>[] = [];

// public fields: Record<string, any> = { dataSource: this.data };

// public editorTemplate: string = '<div class="custom-event-editor">' +
//   '<div class="form-group">' +
//   '<label for="description">Description</label>' +
//   '<input type="text" id="description" name="description" [(ngModel)]="newevent.description" class="e-field e-input">' +
//   '</div>' + 
//   '<div class="form-group">' +
//   '<label for="employeeId">Employee ID</label>' +
//   '<input type="number" id="employeeId" name="employeeId" [(ngModel)]="newevent.employeeId" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="taskDate">Task Date</label>' +
//   '<input type="date" id="taskDate" name="taskDate" [(ngModel)]="newevent.taskDate" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +  
//   '<label for="dueDate">Due Date</label>' +
//   '<input type="date" id="dueDate" name="dueDate" [(ngModel)]="newevent.dueDate" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="type">Type</label>' +
//   '<input type="text" id="type" name="type" [(ngModel)]="newevent.type" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<button type="submit" class="e-btn"  (click)="addTask()" >Save</button>' +
//   '<button type="reset" class="e-btn">Cancel</button>' +
//   '</div>' +
//   '</div>';


// public eventSettings: EventSettingsModel = { dataSource: this.data };






// onActionComplete(args: ActionEventArgs): void {
//   if (args.requestType === 'eventCreated' && Array.isArray(args.data)) {
//   console.log('response*******' , args.data[0]);
  
//     const newTask = args.data[0]; 
//     this.addTask(newTask);
//   }
  
// }

// onActionBegin(args: any): void {
//   if (args.requestType === 'eventCreate') {
   
//   console.log('Task data before API call:', this.newevent);
//   console.log('Task data before API call: des', this.newevent.description);
//   console.log('Task data before API call:emp', this.newevent.employeeId);
//   console.log('Task data before API call: dd', this.newevent.dueDate);

//   console.log('Task data before API call:td', this.newevent.taskDate);

//   console.log('Task data before API call:t', this.newevent.type);

//   this.apiservice.addTask(this.newevent).subscribe(
//     (resp: any) => {
//       console.log('Task added successfully', resp);
//     },
//     (error: any) => {
//       console.error('Error adding task', error);
//     }
//   );
//   }
// }
addTask(): void {
  console.log("data", this.newevent)
  this.apiservice.addTask(this.newevent).subscribe((resp: any)=>{
    console.log(resp.data);
        Swal.fire({
          title: "Task Added !",
          icon: "success"
        });
        this.fetchScheduleData() ;
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
  
  
  )
}

}
