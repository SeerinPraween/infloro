const cols = [
  { name: "Interested", n: 14, items: [["Ayesha Khan", "Skincare · 128K"], ["Dev Malhotra", "Fitness · 64K"]] },
  { name: "Negotiating", n: 6, items: [["Rohan Mehta", "₹45,000 · 2 reels"], ["Meera Iyer", "Gifting + fee"]] },
  { name: "Confirmed", n: 8, items: [["Priya Sharma", "Launch · due 24 Oct"]] },
  { name: "Delivered", n: 5, items: [["Kabir Rao", "Approved · usage 90d"]] },
];

export default function Board() {
  return (
    <div className="board" role="img" aria-label="Creator pipeline preview with four stages">
      <div className="board-top">
        <b>Diwali launch</b>
        <span>33 creators · 8 in progress</span>
      </div>
      <div className="board-cols">
        {cols.map((c) => (
          <div className="col" key={c.name}>
            <div className="col-h"><span>{c.name}</span><i>{c.n}</i></div>
            {c.items.map(([a, b]) => (
              <div className="chip" key={a}>
                <span className="av">{a[0]}</span>
                <div><strong>{a}</strong><small>{b}</small></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
