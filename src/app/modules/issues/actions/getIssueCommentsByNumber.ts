import { environment } from '../../../../environments/environment';
import { sleep } from '../../../helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issue';

const BASE_URL = environment.baseUrl;

export const getIssueCommentsByNumber = async (
  issueNumber: string
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`);

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();
    console.log({ issues });

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
