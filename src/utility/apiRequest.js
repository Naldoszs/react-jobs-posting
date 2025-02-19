const apiRequest = async (apiUrl, optionObj) => {
  try {
    const response = await fetch(apiUrl, optionObj);
    if (!response.ok) {
      throw new Error(
        "Unable to perform fecch request, Please reload your app"
      );
    }
    const data = await response.json();

    return data;
  } catch (err) {
    err.message;
    return err.message;
  } finally {
    console.log("API requst completed");
  }
};

export default apiRequest;
