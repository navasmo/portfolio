import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webappPortfolio,
  graphicPortfolio,
  webdesignPortfolio,
  UXdesignPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "graphic",
      title: "Graphic Design",
    },
    {
      id: "webdesign",
      title: "Websites",
    },
    {
      id: "UXdesign",
      title: "UI/UX Design",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webapp":
        setData(webappPortfolio);
        break;
      case "graphic":
        setData(graphicPortfolio);
        break;
      case "webdesign":
        setData(webdesignPortfolio);
        break;
      case "UXdesign":
        setData(UXdesignPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container" >
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img} 
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
