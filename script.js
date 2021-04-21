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

// window.onload = function () {
//   for (let item of navItems) {
//     document.getElementsByClassName("menu")[0].innerHTML +=
//       `<span>` + item.name + `</span>`;
//   }

//   console.log(navItems[0]);

//   for (let item of listItem1) {
//     document.getElementsByTagName("span")[0].innerHTML +=
//       `<ul> <li>` + item.name + `</li> </ul>`;
//   }

//   for (let item of listItem2) {
//     document.getElementsByTagName("span")[1].innerHTML +=
//       `<ul> <li>` + item.name + `</li> </ul>`;
//   }

//   for (let item of listItem3) {
//     document.getElementsByTagName("span")[2].innerHTML +=
//       `<ul> <li>` + item.name + `</li> </ul>`;
//   }

//   for (let item of listItem4) {
//     document.getElementsByTagName("span")[3].innerHTML +=
//       `<ul> <li>` + item.name + `</li> </ul>`;
//   }
// };

let renderItem = (list) => {
  html = "";
  console.log(list);
  list.map((item) => {
    html += `
      <li>${item.name}</li>
      `;
  });
  return html;
};

const fillItemByName = (name) => {
  var html = "";
  switch (name) {
    case 1:
      html = renderItem(listItem1);
      break;
    case 2:
      html = renderItem(listItem2);
      break;
    case 3:
      html = renderItem(listItem3);
      break;
    case 4:
      html = renderItem(listItem4);
      break;
  }
  return html;
};

const fillData = () => {
  var html = "";
  navItems.map((item) => {
    html += `

    <span>
      ${item.name}
      <ul>
        ${fillItemByName(parseInt(item.name.charAt(item.name.length - 1), 10))}
      </ul>
    </span>

    `;
    return;
  });
  document.getElementById("menu").innerHTML = html;
};

fillData();
