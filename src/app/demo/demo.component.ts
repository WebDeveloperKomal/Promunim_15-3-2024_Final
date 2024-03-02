import { Component } from '@angular/core';
import { ConnectorModel, DataBinding, Diagram, HierarchicalTree, LayoutModel, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { ApiService } from '../api.service';

Diagram.Inject(DataBinding,HierarchicalTree);

interface DataSourceSettings {
  id: string;
  parentId: string;
}
// export interface EmployeeInfo{
//   Name : String ;
// }
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  hierarchyData: string[][] = [];
  // dataSourceSettings: DataManager | undefined;
  // layoutSettings: LayoutModel | undefined;

  // dataSourceSettings: DataSourceSettings | undefined;
  constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.apiService.gethierarchy().subscribe(
  //     (response: any) => {
  //       if (response.status) {
  //         this.hierarchyData = JSON.parse(response.data);
  //         this.initializeDiagram();
  //       } else {
  //         console.error('Error: API returned false status');
  //       }
  //     },
  //     (error: any) => {
  //       console.error('Error fetching hierarchy:', error);
  //     }
  //   );
  // }

  // initializeDiagram() {
  //   const nodes: NodeModel[] = [];
  //   const connectors: ConnectorModel[] = [];

    // Assuming hierarchyData is in the format [['Parent', 'Child'], ['Parent', 'Child'], ...]
    // this.hierarchyData.forEach((relation: string[]) => {
    //   const parentNode: NodeModel = { id: relation[0], shape: { type: 'Basic', shape: 'Rectangle' } };
    //   const childNode: NodeModel = { id: relation[1],  shape: { type: 'Basic', shape: 'Rectangle' } };
    //   const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };

    //   nodes.push(parentNode, childNode);
    //   connectors.push(connector);
    // });

    // const nodes: NodeModel[] = [
    //   { id: 'node1', shape: { type: 'Basic', shape: 'Rectangle' } },
    //   { id: 'node2', shape: { type: 'Basic', shape: 'Rectangle' } }
    // ];
    
    // const connectors: ConnectorModel[] = [
    //   { sourceID: 'node1', targetID: 'node2' }
    // ];
    
    // this.dataSourceSettings = {
    //   dataManager: new DataManager({ json: { nodes, connectors } })
    // };

    // this.dataSourceSettings = {
    //   id: 'id',
    //   parentId: 'parentId',
    //   dataManager: new DataManager({ json: { nodes, connectors } }),
    //   doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
    //     nodeModel.annotations = [{ content: data['id'] }];
    //   }
    // };

  //   this.layoutSettings = {
  //     type: 'HierarchicalTree',
  //     horizontalSpacing: 30,
  //     verticalSpacing: 30,
  //     margin: { left: 10, top: 10, right: 10, bottom: 10 }
  //   };
  // }
// }
  
// public employeeData : Object[] = [
//   {Name: "Sona" , Role: "director1" },
//   {Name: "Sona1" , Role: "director2" },
//   {Name: "Sona2" , Role: "director3" },
//   {Name: "Sona34" , Role: "director4" },
//   {Name: "Sona5" , Role: "director5" },
//   {Name: "Sona6" , Role: "director6" },
//   {Name: "Sona7" , Role: "director7" },

// ]
// public layOutSetting : LayoutModel = {
//   type : 'OrganizationalChart'
// }
// defaultconnector : any;
// public defaultConnectorValues(defaultconnector : ConnectorModel) : ConnectorModel{
//   defaultconnector.type = "Orthogonal" ;
//   return defaultconnector ;
//   defaultconnector.style ={
//     strokeColor: "#6f409f" , strokeWidth: 2
//   }
//   defaultconnector.targetDecorator = { style: {fill: '#6f409f' , strokeColor: '#6f409f'}}
// }
//   deafaultnode: any;
// public deafaultNodeValues(deafaultnode : NodeModel) :NodeModel{
//   deafaultnode.height =50 ;
//   deafaultnode.width = 100;
//   this.deafaultnode.annotations = [
//     {
// content : (deafaultnode.data as EmployeeInfo).Name , style : {color : "white"}
//     }
//   ];
//   deafaultnode.style = {
//     fill: '#048785' , strokeColor : "Transparent" , strokeWidth : 1
//   }
//   return deafaultnode;
// }


// public jsonDataSourceSetting : Object={
//   id: "name",
 //  parentId :
//  dataSource : new DataManager(this.employeeData as JSON[])
//  }
// }


// initializeDiagram() {
//   const nodes: NodeModel[] = [];
//   const connectors: ConnectorModel[] = [];

 
//   this.hierarchyData.forEach((relation: string[]) => {
//     const parentNode: NodeModel = {
//       id: relation[0],
//       shape: { type: 'Basic', shape: 'Rectangle' },
//       annotations: [{ content: relation[0] }]  
//     };
//     const childNode: NodeModel = {
//       id: relation[1],
//       shape: { type: 'Basic', shape: 'Rectangle' },
//       annotations: [{ content: relation[1] }]  
//     };
//     const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };

//     nodes.push(parentNode, childNode);
//     connectors.push(connector);
//   });

//   this.dataSourceSettings = {
//     id: 'id',
//     parentId: 'parent'
//   };

//   this.layoutSettings = {
//     type: 'OrganizationalChart', 
//     horizontalSpacing: 30,
//     verticalSpacing: 30,
//     margin: { left: 10, top: 10, right: 10, bottom: 10 }
//   };
// }

// this.dataSourceSettings = {
//   id: 'id',
//   parentId: 'parent'
// };


nodes: NodeModel[] = [];
connectors: ConnectorModel[] = [];

// constructor() {}

ngOnInit() {

//     this.apiService.gethierarchy().subscribe(
//       (response: any) => {
//         if (response.status) {
//           this.parseAndBuildDiagram(response.data);
//         } else {
//           console.error('Error: API returned false status');
//         }
//       },
//       (error: any) => {
//         console.error('Error fetching hierarchy:', error);
//       }
//     );
//   }

//   parseAndBuildDiagram(data: string) {
//     const hierarchyData: string[][] = JSON.parse(data);
  
//     hierarchyData.forEach((relation: string[]) => {
//       const parentNode: NodeModel = { id: relation[0], shape: { type: 'Basic', shape: 'Rectangle' }, annotations: [{ content: relation[0] }] };
//       const childNode: NodeModel = { id: relation[1], shape: { type: 'Basic', shape: 'Rectangle' }, annotations: [{ content: relation[1] }] };
//       const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };
  
//       this.nodes.push(parentNode, childNode);
//       this.connectors.push(connector);
//     });
//   }
// }


  // Fetch your role hierarchy data from an API or define it here
  // Example data: [['CEO', 'Manager'], ['Manager', 'Employee']]
  // const hierarchyData: string[][] = [['CEO', 'Manager'], ['Manager', 'Employee']];

  // hierarchyData.forEach((relation: string[]) => {
  //   const parentNode: NodeModel = { id: relation[0], annotations: [{ content: relation[0] }] };
  //   const childNode: NodeModel = { id: relation[1], annotations: [{ content: relation[1] }] };
  //   const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };

  //   this.nodes.push(parentNode, childNode);
  //   this.connectors.push(connector);
  // });

  // const hierarchyData: string[][] = [['CEO', 'Manager'], ['Manager', 'Employee']];
  //  hierarchyData: string[][] = [];


  this.apiService.gethierarchy().subscribe(
        (response: any) => {
          if (response.status) {
            console.log("gggggggggggg", response.data);
            
            this.hierarchyData = JSON.parse(response.data);
          } else {
            console.error('Error: API returned false status');
          }
        },
        (error: any) => {
          console.error('Error fetching hierarchy:', error);
        }
      );
      // }

  // buildDiagram() {
  //   this.hierarchyData.forEach((relation: string[]) => {
  //     const parentNode: NodeModel = { id: relation[0], annotations: [{ content: relation[0] }] };
  //     const childNode: NodeModel = { id: relation[1], annotations: [{ content: relation[1] }] };
  //     const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };

  //     this.nodes.push(parentNode, childNode);
  //     this.connectors.push(connector);
  //   });
  // }

  this.hierarchyData.forEach((relation: string[]) => {
    const parentNode: NodeModel = { id: relation[0], annotations: [{ content: relation[0] }] };
    const childNode: NodeModel = { id: relation[1], annotations: [{ content: relation[1] }] };
    const connector: ConnectorModel = { sourceID: relation[0], targetID: relation[1] };

    this.nodes.push(parentNode, childNode);
    this.connectors.push(connector);
  });

}
}


// }
