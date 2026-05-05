import Card from "../components/ui/Card";

function Test() {
  return (
    <>
      <div className="flex gap-2 m-auto w-full flex-wrap">
        <div>
          <Card
            title="Test card"
            cta="Call to action"
            desc="This is the description"
            img="/favicon.svg"
            onCardClick={(e) => console.log(e.target)}
            onCtaClick={(e) => console.log(e.target)}
          />
        </div>

        <div>
          <Card
            title="Test card"
            cta="Call to action"
            desc="This is the description"
            onCardClick={(e) => console.log(e.target)}
            onCtaClick={(e) => console.log(e.target)}
          />
        </div>
        <div>
          <Card
            title="Test card"
            cta="Call to action"
            desc="This is the description"
            onCardClick={(e) => console.log(e.target)}
            onCtaClick={(e) => console.log(e.target)}
          />
        </div>
      </div>
    </>
  );
}

export default Test;
