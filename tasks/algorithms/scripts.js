const tasks = [
  {
    title: "Sorting Array",
    description:
      "Implement a function to sort an array of numbers in ascending order. Practice sorting algorithms such as bubble sort, quicksort, and mergesort.",
  },
  {
    title: "Two Sum Problem",
    description:
      "Given an array of integers, find two numbers that add up to a specific target. Practice using hash maps and solving in O(n) time.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("task-list");
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    `;
    taskList.appendChild(listItem);
  });
});
