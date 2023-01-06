import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import Vmc from "../components/vmc";
import Service1 from '../assets/coach trail.jpg'
import Service2 from '../assets/HowtoCoachMain.jpg'
import Service3 from '../assets/light service.jpg'


function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">History</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lionel Messi, in full Lionel Andrés Messi, also called Leo
                Messi, (born June 24, 1987, Rosario, Argentina), Argentine-born
                football (soccer) player who received a record-setting seven
                Ballon d’Or awards as the world’s top male player (2009–12,
                2015, 2019, and 2021). In 2022 he helped Argentina win the
                Fédération Internationale de Football Association (FIFA)’s World
                Cup.
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">International career</h3>
              <div className="underline mx-auto"></div>
              <p>
                Despite his dual citizenship and professional success in Spain,
                Messi’s ties with his homeland remained strong, and he was a key
                member of various Argentine national teams from 2005. He played
                on Argentina’s victorious 2005 FIFA World Youth Championship
                squad, represented the country in the 2006 World Cup, and scored
                two goals in five matches as Argentina swept to the gold medal
                at the Beijing 2008 Olympic Games. Messi helped Argentina reach
                the 2010 World Cup quarterfinals, where the team was eliminated
                by Germany for the second consecutive time in World Cup play. At
                the 2014 World Cup, Messi put on a dazzling display, scoring
                four goals and almost single-handedly propelling an
                offense-deficient Argentina team through the group stage and
                into the knockout rounds, where Argentina then advanced to the
                World Cup final for the first time in 24 years. Argentina lost
                that contest 1–0 to Germany, but Messi nevertheless won the
                Golden Ball award as the tournament’s best player. During the
                2016 Copa América Centenario tournament, he netted his 55th
                international goal to break Gabriel Batistuta’s Argentine
                scoring record.
                <br />
                Argentina after winning the 2022 World Cup Argentina after
                winning the 2022 World Cup After Argentina was defeated in the
                Copa final—the team’s third consecutive finals loss in a major
                tournament—Messi said that he was quitting the national team,
                but his short-lived “retirement” lasted less than two months
                before he announced his return to the Argentine team. At the
                2018 World Cup, he helped an overmatched Argentine side reach
                the knockout stage, where they were eliminated by eventual
                champion France in their first match. After a third-place finish
                at the 2019 Copa América, Messi led Argentina to victory in the
                tournament two years later, and he received the Golden Ball
                award. His success continued at the 2022 World Cup. There he
                guided Argentina to the finals, where he scored two goals—and
                made a penalty kick during the shootout—to help defeat France.
                Messi won the World Cup’s Golden Ball, becoming the first male
                player to receive that award twice.
              
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service1}
                  alt="Services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Type 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem magni adipisci earum, minus mollitia eveniet nam
                    expedita nemo aliquid culpa, dolorum eius at odio illum
                    quidem nihil doloribus, quos fuga!
                  </p>
                  <Link to="/service" className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service2}
                  alt="Services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Type 2</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem magni adipisci earum, minus mollitia eveniet nam
                    expedita nemo aliquid culpa, dolorum eius at odio illum
                    quidem nihil doloribus, quos fuga!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  </p>
                  <Link to="/service" className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service3}
                  alt="Services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Type 3</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem magni adipisci earum, minus mollitia eveniet nam
                    expedita nemo aliquid culpa, dolorum eius at odio illum
                    quidem nihil doloribus, quos fuga!
                  </p>
                  <Link to="/service" className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;
