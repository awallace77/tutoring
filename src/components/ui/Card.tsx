import ButtonLink from "./Button";

type CardProps = {
  title: string;
  desc: string;
  cta: string;
  onCardClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCtaClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  img?: string;
};
export default function Card({
  title,
  desc,
  cta,
  onCardClick,
  onCtaClick,
  img,
}: CardProps) {
  return (
    <>
      <div
        onClick={(e) => onCardClick(e)}
        className="w-100 rounded-xl px-5 py-10 bg-black/10 shadow-electric-blue border-electric-blue/25 border cursor-pointer hover:shadow-electric-blue-lg transition ease-in-out"
      >
        <div className="flex flex-col gap-3 justify-between items-center">
          <div className="flex flex-col p-2">
            <h2 className="font">{title}</h2>
            <p>{desc}</p>
          </div>
          {img && (
            <div className="p-2">
              <img src={img} />
            </div>
          )}
          <div className="p-2">
            <ButtonLink
              to="/consultation"
              onClick={(e) => onCtaClick(e)}
              text={cta}
            />
          </div>
        </div>
      </div>
    </>
  );
}
