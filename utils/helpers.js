// format_date function code is copied from https://github.com/strudelAndCoffee/just-tech-news/blob/main/utils/
function format_date(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
}

export { format_date }