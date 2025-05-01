import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Complete project',
      description: 'Finish the Angular workspace project',
      dueDate: new Date('2023-12-31'),
      priority: 'high',
      completed: false,
      userId: '1'
    },
    {
      id: '2',
      title: 'Learn Angular',
      description: 'Study Angular components',
      dueDate: new Date('2023-11-30'),
      priority: 'medium',
      completed: false,
      userId: '2'
    }
  ];

  private users: User[] = [
    { id: '1', name: 'Admin User', email: 'admin@example.com' },
    { id: '2', name: 'Regular User', email: 'user@example.com' }
  ];

  constructor() {}

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksByUser(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}