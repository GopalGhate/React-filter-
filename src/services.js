import $ from "jquery";
export const GET = (url) => {
  return $.ajax({
    url,
    type: "GET",
    success: (response) => {
      return response || {};
    },
    error: (request, status, error) => {
      return request.responseText || error;
    },
  });
};

