class displayFactoryTwo {

    error = false;
    partial = '';

    isError = () => {
        return this.error;
    }
    setPartial = (string) => {
      this.partial = string;
    }

    getPartial = () => {
      return this.partial;
    }

    display = () => {
      this.getPartial();
    }

    create = (settings) => {
        
        // if (!settings)
        // add error checking here.. probably few versions to test

        const { component, params, subcomponents } = settings;

        // cover a case when subcomponents didnt passed and we apply { }


        let partial;

        
        


          //here i want to apply a check and see if everything is fine, if not we generate error = true 
          try {
            partial = component(params, subcomponents);

            return partial;
            // this.setPartial(partial);
            // console.log(partial);

          } catch (err) {
            // statements to handle any exceptions
            console.log(err);
            // this.error = true;
          }

    }


    
}

export default displayFactoryTwo;


//     return {
//       error: false, 
//       params: params,
//       subcomponents: subcomponents,  
      
//       display: () => { 
  
//           //here i want to apply a check and see if everything is fine, if not we generate error = true 
//           try {
//             component(params, subcomponents) 
//           } catch (err) {
//             // statements to handle any exceptions
//             console.log(err);
//             this.error = true;
//           }

          
      
//       },
        
//       checks: () => { return []; },  
        
        
//       init: () => {
  
//       },
      
//       try: () => {
  
//       },

// 	  get: () => { return component; },

//       checks: () => {
//           checks.map(() => {

//           })

//           if(subcomponents){
//             //   subcomponents.map((component) => {
//             //     component.init();
//             //   })
//           }

        

//       },

//       // log: () => { 
//       //     console.log('123');

          
//       // //     console.log(this.display()) 
//       // },



//       //get: () => {name:name, regEx:regEx, replace:replace(), isError:false},
  
//       //combine: () => {return {name:name, regEx:regEx, replace:replace()}},
  
//       // I want to have a better way to report errors, so each callback can report an issue, so we can track it better 
//       isError: () => { if(this.error){ return 'errror is here'; } }
//     }
//   }


//   displayFactory.log = () => {
//     // log: () => { 
//       console.log('123');
//       console.log(this.display()) 
//   // },
//   }
  
//   export default displayFactory;
