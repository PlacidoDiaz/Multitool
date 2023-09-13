async function fetchData() {
    const res=await fetch ("api");
    const record=await res.json();
    document.getElementById("test").innerHTML=record.data[0].date;
}
fetchData();