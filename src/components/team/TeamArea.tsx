import Link from "next/link";
import React from "react";

const TeamArea = () => {
  return (
    <>
      <div className="team-member-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="">
                <div className="team-card">
                  <img src="/assets/img/bg-img/22.jpg" alt="" />
                  <div className="team-info">
                  <h4>Victor Bravim</h4>
                  <p className="mb-0">CEO & Fundador</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="">
                <div className="team-card">
                  <img src="/assets/img/bg-img/23.jpg" alt="" />
                  <div className="team-info">
                  <h4>Gabriel Dias</h4>
                  <p className="mb-0">Engenheiro de Computação</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="">
                <div className="team-card">
                  <img src="/assets/img/bg-img/24.jpg" alt="" />
                  <div className="team-info">
                  <h4>Daniel Rocha</h4>
                  <p className="mb-0">Analista de Sistemas</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Link href="">
                <div className="team-card">
                  <img src="/assets/img/bg-img/25.jpg" alt="" />
                  <div className="team-info">
                  <h4>Gustavo Gantois</h4>
                  <p className="mb-0">UI/UX Designer</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default TeamArea;