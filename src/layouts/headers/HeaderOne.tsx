"use client";

import OffCanvas from "@/common/OffCanvas";
import menu_data from "@/data/menu-data";
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderOne = ({ style_2 }: { style_2?: boolean }) => {
  const { sticky } = useSticky();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCanvas, setOpenCavas] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Aplica o tema apenas no cliente
  useEffect(() => {
    // Pega o tema salvo ou usa a preferência do sistema
    const savedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const isLight = savedTheme === "light-mode" || (!savedTheme && prefersLight);

    setIsLightMode(isLight);
    document.body.className = isLight ? "light-mode" : "";
    localStorage.setItem("theme", isLight ? "light-mode" : "dark-mode");
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const newIsLight = !prev;
      document.body.className = newIsLight ? "light-mode" : "";
      localStorage.setItem("theme", newIsLight ? "light-mode" : "dark-mode");
      return newIsLight;
    });
  };

  return (
    <>
      <header
        className={`header-area ${sticky ? "sticky-on" : ""} ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img
                className="dark-logo"
                src="/assets/img/core-img/logo.png"
                alt="Logo escuro"
              />
              <img
                className="light-logo"
                src="/assets/img/core-img/logo-light.png"
                alt="Logo claro"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vorixNav"
              aria-controls="vorixNav"
              aria-expanded="false"
              aria-label="Alternar navegação"
            >
              <span className="material-symbols-outlined">view_cozy</span>
            </button>

            <div
              className={`collapse navbar-collapse justify-content-end ${
                menuOpen ? "show" : ""
              }`}
              id="vorixNav"
            >
              <ul className="navbar-nav navbar-nav-scroll">
                {menu_data.map((item) => (
                  <li key={item.id} className="vorix-dd">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center">
                <div className="space"></div>

                <button
                  id="theme-toggle"
                  onClick={toggleTheme}
                  className={`theme-btn ${
                    isLightMode ? "" : "light-mode-active"
                  }`}
                >
                  <span className="material-symbols-outlined moon">
                    clear_day
                  </span>
                  <span className="material-symbols-outlined sun">bedtime</span>
                </button>

                {style_2 ? (
                  <div className="mb-3 mb-lg-0" id="sideMenuButton">
                    <a
                      onClick={() => setOpenCavas(!openCanvas)}
                      className="btn btn-primary sideMenuButton"
                      data-bs-toggle="offcanvas"
                      href="#sideMenuOffcanvas"
                      role="button"
                      aria-controls="sideMenuOffcanvas"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 12H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 6H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 18H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 12H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 6H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 18H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                ) : (
                  <Link className="btn btn-primary" href="/contato">
                    <span>ENTRE EM CONTATO</span>
                    <span>ENTRE EM CONTATO</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
    </>
  );
};

export default HeaderOne;