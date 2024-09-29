let todoData = [
  {
    id: 1,
    AssignedTo: "User1",
    Status: "completed",
    dueDate: '24/09/2024',
    priority: 'low',
    comments: "This task is good"
  },
  {
    id: 2,
    AssignedTo: "User2",
    Status: "completed",
    dueDate: '24/09/2024',
    priority: 'High',
    comments: "This task is good"
  },
  {
    id: 3,
    AssignedTo: "User3",
    Status: "completed",
    dueDate: '24/09/2024',
    priority: 'low',
    comments: "This task is good"
  },
  {
    id: 4,
    AssignedTo: "User4",
    Status: "completed",
    dueDate: '24/09/2024',
    priority: 'low',
    comments: "This task is good"
  }
];

export const getTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todoData);
    }, 500);  
  });
};

export const addTask = async (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      task.id = todoData.length + 1;
      todoData.push(task);
      resolve(task);
    }, 500);
  });
};

export const updateTask = async (taskId, task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = todoData.findIndex(t => t.id === taskId);
      if (index !== -1) {
        todoData[index] = { ...task, id: taskId };
        resolve(todoData[index]);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const deleteTask = async (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = todoData.findIndex(t => t.id === taskId);
      if (index !== -1) {
        todoData.splice(index, 1);
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    }, 500);
  });
};
