import { Injectable, signal } from '@angular/core';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/getIssueByNumber';
import { getIssueCommentsByNumber } from '../actions/getIssueCommentsByNumber';
import { GitHubIssue } from '../interfaces/github-issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);
  private queryClient = injectQueryClient();

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }

  prefetchIssue(issueId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issueNumber', issueId],
      queryFn: () => getIssueByNumber(this.issueNumber()!),
      staleTime: 1000 * 60 * 3,
    });
  }

  setIssueData(githubIssue: GitHubIssue) {
    this.queryClient.setQueryData(['issue', githubIssue.number.toString()], githubIssue,{
      updatedAt: Date.now()+1000*60*3,
    });
  }
}
