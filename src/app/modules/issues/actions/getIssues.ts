import { environment } from '../../../../environments/environment';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issue';

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${environment.baseUrl}/issues`, {});

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
