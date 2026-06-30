const AUTH_TOKEN = ""; 
const TYPE_WEIGHTS = { Placement: 300, Result: 200, Event: 100 };
function score(n) {
  return (TYPE_WEIGHTS[n.Type] ?? 0) + new Date(n.Timestamp).getTime();
}
async function main() {
  const res = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } }
  );
  const data = await res.json();
  const top10 = data.notifications
    .map((n) => ({ ...n, _score: score(n) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, 10);
  console.log("TOP 10 PRIORITY NOTIFICATIONS ");
  top10.forEach((n, i) => {
    console.log(`${i + 1}. [${n.Type}] ${n.Message} — ${n.Timestamp}`);
  });
}
main();