import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers/sleep";
import { GitHubIssue } from "../interfaces/github-issue";

const BASE_URL = environment.baseUrl;

export const getIssueByNumber = async (
  issueNumber: string
): Promise<GitHubIssue> => {
  await sleep(1500);

  try {
    // const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
    });

    if (!resp.ok) throw "Can't load issue";

    const issue: GitHubIssue = await resp.json();

    return issue;
  } catch (error) {
    throw "Can't load issue";
  }
};
