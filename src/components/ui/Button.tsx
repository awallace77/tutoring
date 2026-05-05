import { Link } from "react-router-dom";

function ButtonLink({
  to,
  text,
  onClick,
}: {
  to: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) {
  return (
    <>
      <Link
        role="button"
        onClick={onClick}
        to={to}
        className="bg-text/75 text-black px-6 py-2 rounded-lg hover:text-text hover:bg-electric-blue/75 duration-300 transition ease-in-out"
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonLink;
