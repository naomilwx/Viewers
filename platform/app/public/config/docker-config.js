const DICOM_SERVER_URL = process.env.DICOM_SERVER_URL;
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
        friendlyName: 'DICOMWeb Server',
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
        dicomUploadEnabled: true,
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
};
