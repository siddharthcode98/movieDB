import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="h-[250px]  bg-slate-900 bg-top mt-40 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3 ">
        <h2 className="text-3xl ">Follow me on social media</h2>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/vaddemani-siddharth/"
            target="_blank"
          >
            <FaLinkedin size={"30px"} color="#dd003f" />
          </a>
          <a
            href="https://github.com/siddharthcode98?tab=repositories"
            target="_blank"
          >
            <FaGithubSquare size={"30px"} color="#dd003f" />
          </a>
          <a href="https://twitter.com/siddharthcode98" target="_blank">
            <FaTwitterSquare size={"30px"} color="#dd003f" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
