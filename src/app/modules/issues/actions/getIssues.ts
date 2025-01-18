import { environment } from "../../../../environments/environment";
import { sleep } from "../../../helpers/sleep";
import { GitHubIssue, State } from "../interfaces/github-issue";


const BASE_URL = environment.baseUrl;


export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params}`);

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();
    console.log({ issues });

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
