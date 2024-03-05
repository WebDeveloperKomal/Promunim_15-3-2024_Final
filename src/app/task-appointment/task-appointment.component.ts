import { Component, ViewChild } from '@angular/core';
import { TaskAppointmentModel } from './task-appointment.component.model';
import { FormGroup } from '@angular/forms';
import { ActionEventArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import{L10n} from '@syncfusion/ej2-base'
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

L10n.load({
  'en-US' : {
    'schedule' : {
      'saveButton' : 'Add' ,
      'cancelButton' : 'Close',
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
  public tasks: TaskAppointmentModel[] = [];
  newevent : TaskAppointmentModel = new TaskAppointmentModel() ;
  // newEvent: any = {description: this.newEvent.description,
  //   employeeId: this.newEvent.employeeId,
  //  taskDate: this.newEvent.taskDate,
  //   dueDate: this.newEvent.dueDate,
  //   type: this.newEvent.type};
public setViews : View[] = ["Day" , "Week" , "Month", "Year"] ;

constructor(private apiservice : ApiService) {}
OnInit(){

//  this.fetchScheduleData() ;

}

// fetchScheduleData(){
//   this.apiservice.getTask().subscribe((resp : any)=>
//   {
//     console.log('Tasks retrieved successfully', resp.data);
//     this.tasks = resp.data ;
         
//   }, (error: any) =>{
//     console.log('Error retrieving tasks', error);
    
//   }
//   )
// }




@ViewChild('schedule') public scheduleObj: any;

public data: Record<string, any>[] = [];

public fields: Record<string, any> = { dataSource: this.data };

public editorTemplate: string = '<div class="custom-event-editor">' +
  '<div class="form-group">' +
  '<label for="description">Description</label>' +
  '<input type="text" id="description" name="description" [(ngModel)]="newevent.description" class="e-field e-input">' +
  '</div>' + 
  '<div class="form-group">' +
  '<label for="employeeId">Employee ID</label>' +
  '<input type="number" id="employeeId" name="employeeId" [(ngModel)]="newevent.employeeId" class="e-field e-input">' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="taskDate">Task Date</label>' +
  '<input type="date" id="taskDate" name="taskDate" [(ngModel)]="newevent.taskDate" class="e-field e-input">' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="dueDate">Due Date</label>' +
  '<input type="date" id="dueDate" name="dueDate" [(ngModel)]="newevent.dueDate" class="e-field e-input">' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="type">Type</label>' +
  '<input type="text" id="type" name="type" [(ngModel)]="newevent.type" class="e-field e-input">' +
  '</div>' +
  // '<div class="form-group">' +
  // '<button type="submit" class="e-btn" >Save</button>' +
  // '<button type="reset" class="e-btn">Cancel</button>' +
  // '</div>' +
  '</div>';


// public eventSettings: EventSettingsModel = { dataSource: this.data };






// onActionComplete(args: ActionEventArgs): void {
//   if (args.requestType === 'eventCreated' && Array.isArray(args.data)) {
//   console.log('response*******' , args.data[0]);
  
//     const newTask = args.data[0]; 
//     this.addTask(newTask);
//   }
  
// }

onActionBegin(args: any): void {
  if (args.requestType === 'eventCreate') {
    // const newEvent = args.data[0];

    // const newEvent = {
    //   description: this.newEvent.description,
    //   employeeId: this.newEvent.employeeId,
    //  taskDate: this.newEvent.taskDate,
    //   dueDate: this.newEvent.dueDate,
    //   type: this.newEvent.type,
    // } 


// addTask(): void {
  console.log('Task data before API call:', this.newevent);
  console.log('Task data before API call: des', this.newevent.description);
  console.log('Task data before API call:emp', this.newevent.employeeId);
  console.log('Task data before API call: dd', this.newevent.dueDate);

  console.log('Task data before API call:td', this.newevent.taskDate);

  console.log('Task data before API call:t', this.newevent.type);



  this.apiservice.addTask(this.newevent).subscribe(
    (resp: any) => {
      console.log('Task added successfully', resp);
      // this.fetchScheduleData() ;
    },
    (error: any) => {
      console.error('Error adding task', error);
    }
  );
  }
}
// addTask(task: TaskAppointmentModel): void {
//   this.apiservice.addTask().subscribe((resp: any)=>{
//     console.log(resp.data);
//         Swal.fire({
//           title: "Record Saved!",
//           icon: "success"
//         });
//       },
//       (error:any)=>{
//         console.error(error);
//         Swal.fire({
//           title: "Error!",
//           icon: "error"
//         });
//       }
  
  
//   )
// }



}
