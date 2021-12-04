exports.GetDate = function() {
  const today = new Date();
  const curr_date = today.getDay();
  const day = "";

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
}

module.exports.GetDay = function() {
  const today = new Date();
  const curr_date = today.getDay();
  const day = "";

  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);

}
