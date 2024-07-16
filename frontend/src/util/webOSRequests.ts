export function piccapRequests(
  method: string,
  parameters = {},
  onSuccess = () => {},
  onFailure = () => {},
) {
  webOS.service.request(
    'luna://org.webosbrew.piccap.service',
    {
      method,
      parameters,
      onSuccess,
      onFailure,
    },
  );
}

export function hbchannelRequests(
  method: string,
  parameters = {},
  onSuccess = () => {},
  onFailure = () => {},
) {
  webOS.service.request(
    'luna://org.webosbrew.hbchannel.service',
    {
      method,
      parameters,
      onSuccess,
      onFailure,
    },
  );
}
