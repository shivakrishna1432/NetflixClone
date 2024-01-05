export const convertMinutesToCustomFormat = (minutes) => {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;

  var formattedTime = `${hours}H ${remainingMinutes}M`;
  return formattedTime;
};

export const getYear = (dateString) => {
  var date = new Date(dateString);
  var year = date.getFullYear();
  return year;
};

export const logo =
  "https://raw.githubusercontent.com/doums10/react-movie-tmdb/master/src/images/no-image.jpg";
