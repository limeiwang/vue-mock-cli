import apiList from './url';
import factory from './factory';

const Api = {};

for (const key in apiList) {
  Api[key] = factory(apiList[key]);
}

export default Api;
