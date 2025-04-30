import Link from "next/link";
import React from "react";

const TeamArea = () => {
  return (
    <>
      <div className="team-member-wrapper">
        <div className="container">
          <div className="row g-4">
            <div>
              <div className="section-heading">
                <h2 className="mb-4">Nossa Equipe</h2>
                <Link href="/team" className="btn-link">
                  VER TODOS OS MEMBROS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L16.2 7.8M17 17V7H7"
                      stroke="#ECC80B"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="">
              <div className="row">
                <div className="col-12 col-sm-3">
                  <Link href="/team-details">
                    <div className="team-card">
                      <img
                        src="/assets/img/bg-img/22.jpg"
                        alt="Foto do membro da equipe"
                      />

                      <div className="team-info">
                        <h4>Victor Bravim</h4>
                        <p className="mb-0">CEO & Fundador</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-12 col-sm-3">
                  <Link href="/team-details">
                    <div className="team-card">
                      <img
                        src="/assets/img/bg-img/23.jpg"
                        alt="Foto do membro da equipe"
                      />

                      <div className="team-info">
                        <h4>Gabriel Dias</h4>
                        <p className="mb-0">Cota Gay</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-12 col-sm-3">
                  <Link href="/team-details">
                    <div className="team-card">
                      <img
                        src="/assets/img/bg-img/24.jpg"
                        alt="Foto do membro da equipe"
                      />

                      <div className="team-info">
                        <h4>Daniel Rocha</h4>
                        <p className="mb-0">Viciado - SPN</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-12 col-sm-3">
                  <Link href="/team-details">
                    <div className="team-card">
                      <img
                        src="/assets/img/bg-img/25.jpg"
                        alt="Foto do membro da equipe"
                      />

                      <div className="team-info">
                        <h4>Gustavo Gantois</h4>
                        <p className="mb-0">Anão Bombado</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default TeamArea;