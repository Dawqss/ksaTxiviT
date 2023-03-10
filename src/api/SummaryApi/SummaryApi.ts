import {endpoints, httpClientFakeServer} from 'api';
import {Summary} from 'types/summary';

export class SummaryApi {
  static postSummary(summary: Summary): Promise<Summary> {
    return httpClientFakeServer.post(endpoints.summary, summary);
  }
}
