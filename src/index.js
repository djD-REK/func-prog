import "./styles.css";

var sum = 0;
var list = [1, 2, 3];

for (var i in list) {
  sum += list[i];
}

console.log(sum);
// expected output: "123"

// expected output: "a"
// expected output: "b"
// expected output: "c"

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
