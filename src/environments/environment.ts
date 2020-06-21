// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: true,
//   baseUrl: 'https://api.priceeagle.in/priceEagle/Pe_api/',
//   baseUrlAdmin: 'https://api.priceeagle.in/priceEagle/admin/'
// };

export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080/priceEagle/Pe_api/',
  baseUrlAdmin: 'http://localhost:8080/priceEagle/admin/'
};

// export const environment = {
//   production: true,
//   baseUrl: 'http://192.168.1.3:8081/priceEagle/Pe_api/',
//   baseUrlAdmin: 'http://192.168.1.3:8081/priceEagle/admin/'
// };
