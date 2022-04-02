const shouldDisplayLogs = false;

export const ConsoleLogs = (TAG, message) => {
  if (shouldDisplayLogs) {
    console.log(`${TAG}, ${message}`);
  }
};
