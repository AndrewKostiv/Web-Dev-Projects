function Quotes() {
  let quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4"];
  
  return (
    <>
      <p>{quotes.at(Math.random() * quotes.length)}</p>
    </>
  );
}

export default Quotes;
