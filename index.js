const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    logState() {
      console.log(`${this.title} has ${this.complete ? "" : "not"} been completed`);
    },

    completeTask() {
      this.complete = true;
    },
  };
  return task;
};



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();


console.log(tasks);

