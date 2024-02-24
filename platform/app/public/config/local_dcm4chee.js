// const DICOM_SERVER_URL = 'http://localhost:5985';
const DICOM_SERVER_URL = 'http://localhost/dicom-api';
// const DICOM_SERVER_URL = 'http://localhost/dicomweb';
// const DICOM_SERVER_URL = 'https://d33do7qe4w26qo.cloudfront.net/dicomweb';
window.config = {
  routerBasename: '/',
  customizationService: {
    dicomUploadComponent:
      '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
  },
  showStudyList: true,
  extensions: [],
  modes: [],
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      name: 'dicomweb_server',
      wadoUriRoot: DICOM_SERVER_URL,
      qidoRoot: DICOM_SERVER_URL,
      wadoRoot: DICOM_SERVER_URL,
      qidoSupportsIncludeField: true,
      imageRendering: 'wadouri',
      thumbnailRendering: 'wadors',
      requestOptions: {
        requestFromBrowser: true,
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'DCM4CHEE Server',
        name: 'dicomweb_server',
        wadoUriRoot: DICOM_SERVER_URL,
        qidoRoot: DICOM_SERVER_URL,
        wadoRoot: DICOM_SERVER_URL,
        qidoSupportsIncludeField: true,
        imageRendering: 'wadouri',
        thumbnailRendering: 'wadors',
        requestOptions: {
          requestFromBrowser: true,
        },
        enableStudyLazyLoad: true,
        dicomUploadEnabled: false,
        singlepart: 'pdf,video',
        // whether the data source should use retrieveBulkData to grab metadata,
        // and in case of relative path, what would it be relative to, options
        // are in the series level or study level (some servers like series some study)
        bulkDataURI: {
          enabled: true,
        },
        omitQuotationForMultipartRequest: true,
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
  studyListFunctionsEnabled: true,
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'http://localhost/auth/realms/ohif',
      // authority: 'http://localhost:8080/realms/ohif',
      client_id: 'c664d865-9373-4ebb-822a-d739ff0bd858',
      redirect_uri: 'http://localhost/callback',
      // redirect_uri: 'http://localhost:3000/callback',
      // "Authorization Code Flow"
      // Resource: https://medium.com/@darutk/diagrams-of-all-the-openid-connect-flows-6968e3990660
      response_type: 'code',
      scope: 'openid', // email profile openid
    },
  ],
};
