const navItems = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 3",
  },
  {
    name: "Item 4",
  },
];

const listItem1 = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
];

const listItem2 = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 3",
  },
];

const listItem3 = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 3",
  },
  {
    name: "Item 4",
  },
];

const listItem4 = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
];

window.onload = function () {
  for (let item of navItems) {
    document.getElementsByClassName("menu")[0].innerHTML +=
      `<span>` + item.name + `</span>`;
  }

  console.log(navItems[0]);

  for (let item of listItem1) {
    document.getElementsByTagName("span")[0].innerHTML +=
      `<ul> <li>` + item.name + `</li> </ul>`;
  }

  for (let item of listItem2) {
    document.getElementsByTagName("span")[1].innerHTML +=
      `<ul> <li>` + item.name + `</li> </ul>`;
  }

  for (let item of listItem3) {
    document.getElementsByTagName("span")[2].innerHTML +=
      `<ul> <li>` + item.name + `</li> </ul>`;
  }

  for (let item of listItem4) {
    document.getElementsByTagName("span")[3].innerHTML +=
      `<ul> <li>` + item.name + `</li> </ul>`;
  }
};
