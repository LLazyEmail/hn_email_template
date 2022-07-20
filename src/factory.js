class displayFactoryTwoPointFive {

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

export default displayFactoryTwoPointFive;