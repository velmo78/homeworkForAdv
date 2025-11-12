(function () {
    'use strict';

    class Task {
        constructor(task){
            this.task = task;
        }
        run (){
            console.log(this.task);
        }
    }

    class User {
        constructor(task){
          this.task = task;
        }
        do(){
               this.task.run();
        }
    }

    const task = new Task('Писать код');
    const user = new User(task);
    user.do();
    console.log (12);
    console.log(13);

})();