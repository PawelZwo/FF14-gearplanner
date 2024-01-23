gear = {
  ff14_db_index: window.location.href.split("item/")[1].split("/")[0],

  ff14_db_icon: document
    .getElementsByClassName("db-view__item__icon__item_image sys_nq_element")[0]
    .getAttribute("src")
    .split("itemicon/")[1]
    .split(".png")[0],

  gear_name: document.getElementsByClassName("db-view__item__text__name")[0]
    .innerText,

  required_level: parseInt(
    document
      .getElementsByClassName("db-view__item_equipment__level")[0]
      .innerText.split(" ")[1]
  ),

  slot: document.getElementsByClassName("db-view__item__text__category")[0]
    .innerText,

  item_level: parseInt(
    document
      .getElementsByClassName("db-view__item_level")[0]
      .innerText.split(" ")[2]
  ),

  stats: document.getElementsByClassName("db-view__basic_bonus")[0].children,

  stats: [
    [
      document
        .getElementsByClassName("db-view__item_spec")[0]
        .children[0].innerText.split("\n")[0],
      document
        .getElementsByClassName("db-view__item_spec")[0]
        .children[1].innerText.split("\n")[0],
    ],

    [
      document
        .getElementsByClassName("db-view__item_spec")[0]
        .children[0].innerText.split("\n")[1],
      document
        .getElementsByClassName("db-view__item_spec")[0]
        .children[1].innerText.split("\n")[1],
    ],

    document
      .getElementsByClassName("db-view__basic_bonus")[0]
      .children[0].innerText.split(" +"),

    document
      .getElementsByClassName("db-view__basic_bonus")[0]
      .children[1].innerText.split(" +"),

    document
      .getElementsByClassName("db-view__basic_bonus")[0]
      .children[2].innerText.split(" +"),

    document
      .getElementsByClassName("db-view__basic_bonus")[0]
      .children[3].innerText.split(" +"),
  ],
};

gear.stats.forEach((item) => {
  item[0] = item[0].toLowerCase();
  item[1] = parseInt(item[1]);
});

gear;

// JSON.stringify(gear);
