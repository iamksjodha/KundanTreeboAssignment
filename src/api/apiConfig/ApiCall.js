import axios from 'axios';
import {ConsoleLogs} from '../../utils/ConsoleLogs';

const TAG = 'ApiCall';

export const ApiCallGet = async (url, headers) => {
  try {
    const response = await axios.get(url, {headers: headers});
    ConsoleLogs(
      TAG + ', ApiCallGet',
      `apiDebug, response : ${JSON.stringify(response.data)}`,
    );
    return response.data;
  } catch (error) {
    ConsoleLogs(
      TAG + ', ApiCallGet',
      `apiDebug, response error : ${JSON.stringify(error)}`,
    );
    return error;
  }
};
