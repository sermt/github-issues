import { environment } from '../../../../environments/environment';
import { sleep } from '../../../helpers/sleep';
import { GithubLabel } from '../interfaces/github-label.interface';

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1000);

  try {
    const response = await fetch(`${environment.baseUrl}/labels`);
    if (!response.ok) {
      throw new Error('Error getting labels');
    }
    return (await response.json()) as GithubLabel[];
  } catch (error) {
    throw new Error('Error getting labels');
  }
};
