import { Component, EventEmitter, Output, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      date: this.enteredDate,
      summary: this.enteredSummary,
    },
    this.userId
   );
    this.close.emit();
  }
}
