import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-course',
  templateUrl: './directives-course.component.html',
  styleUrls: ['./directives-course.component.css']
})
export class DirectivesCourseComponent {
  courses = [{id: 4, name: 'course4'}];

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'updated';
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  // ngStyle directive
  // tslint:disable-next-line:member-ordering
  canSave = true;

  // safe traversal operator
  // tslint:disable-next-line:member-ordering
  task = {
    title: 'review apps',
    assignee: {
      name: 'john'
    },
    safe: null
  };
}
