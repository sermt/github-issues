import { CommonModule } from '@angular/common';
import {  Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from "../../components/issue-selector/issue-selector";
import { IssueItemComponent } from '../../components/issue-item/issue-item';
import { State } from '../../interfaces/github-issue';

@Component({
  selector: 'app-issues-list-page',
  imports: [CommonModule,  LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);
  state = {...State};
  public issueLabels = signal(this.issuesService.labelsQuery);
  public issueQuery = signal(this.issuesService.issuesQuery);
}
