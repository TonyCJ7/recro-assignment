import request from "helpers/utils/request";

export const getDetailsListApi = (offset = 0, limit = 10) => {
  return request.GET({
    endpoint: `/posts?_start=${offset * limit}&_limit=${limit}`
  });
};
