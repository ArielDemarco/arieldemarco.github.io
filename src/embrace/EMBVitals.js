const embraceGetVitals = () => {
  if (typeof EMBReportVitals == "function"
    && EMBReportVitals instanceof Function) {
    // if (reportingFunction && reportingFunction instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(EMBReportVitals);
      getFID(EMBReportVitals);
      getFCP(EMBReportVitals);
      getLCP(EMBReportVitals);
      getTTFB(EMBReportVitals);
    });
  }
};

export default embraceGetVitals;

/*
  window.addEventListener('error', function(e) {
    let err = JSON.parse(JSON.stringify(e, ['message', 'filename', 'lineno', 'colno']));
    if (e.error != null) {
      err.stack = e.error.stack;
    }
    err.timestamp = Date.now();
    // If there's an onError callback, call it
    if (typeof EMBGetConsoleErrors == 'function') {
      EMBGetConsoleErrors(err);
    }
    console.log(err);
  });
  */
