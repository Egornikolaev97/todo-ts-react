  // Formatting date and time according to Russian standards
  // DD.MM.YYYY HH:MM
  export const formatDateTime = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}.${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate
      .getHours()
      .toString()
      .padStart(2, '0')}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
      return { date: formattedDate, time: formattedTime };
    };