import { CommonModule } from '@angular/common';
import {  Component, input } from '@angular/core';
import { GithubLabel } from '../../interfaces/github-label.interface';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './issue-selector.component.html',
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
}
