window.config = {
  routerBasename: APP_ROUTER_BASENAME,
  customizationService: {
    dicomUploadComponent:
      '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
  },
  showStudyList: true,
  studyListFunctionsEnabled: true,
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
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: OHIF_OIDC_AUTHORITY,
      client_id: OHIF_OAUTH_CLIENT_ID,
      redirect_uri: OHIF_REDIRECT_URL,
      response_type: 'code',
      scope: 'openid', // email profile openid
    },
  ],
};
