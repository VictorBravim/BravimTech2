"use client";
import OffCanvas from '@/common/OffCanvas';
import menu_data from '@/data/menu-data';
import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import { useEffect, useState } from "react";

// Propriedades do componente
const HeaderOne = ({ style_2 }: any) => {
  // Estado para o tema (claro/escuro)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light-mode";
    }
    return "light-mode";
  });

  // Atualiza a classe do body e salva o tema no localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alterna entre tema claro e escuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-mode" ? "dark-mode" : "light-mode"));
  };

  // Hook para cabeçalho fixo (sticky)
  const { sticky } = useSticky();
  // Estado para controlar o menu mobile
  const [menuOpen, setMenuOpen] = useState(false);
  // Estado para controlar o off-canvas
  const [openCanvas, setOpenCavas] = useState(false);

  return (
    <>
      {/* Cabeçalho */}
      <header className={`header-area ${sticky && "sticky-on"} ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <img className="dark-logo" src="/assets/img/core-img/logo.png" alt="Logo escuro" />
              <img className="light-logo" src="/assets/img/core-img/logo-light.png" alt="Logo claro" />
            </Link>

            {/* Botão de alternância do menu mobile */}
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

            {/* Menu de navegação */}
            <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="vorixNav">
              <ul className="navbar-nav navbar-nav-scroll">
                {/* Mapeia os itens do menu */}
                {menu_data.map((item) => (
                  <li key={item.id} className="vorix-dd">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>

              {/* Área de ações (tema, botão de contato/off-canvas) */}
              <div className="d-flex align-items-center">
                {/* Botão de alternância de tema */}
                <div className='space'>
                </div>

                <button
                  id="theme-toggle"
                  onClick={toggleTheme}
                  className={`theme-btn ${theme === "light-mode" ? "" : "light-mode-active"}`}
                >
                  <span className="material-symbols-outlined moon">clear_day</span>
                  <span className="material-symbols-outlined sun">bedtime</span>
                </button>

                {/* Botão de contato ou off-canvas, dependendo do estilo */}
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
                          <path d="M3 12H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 6H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 18H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
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
                          <path d="M3 12H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 6H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 18H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                ) : (
                  <Link className="btn btn-primary" href="/contact">
                    <span>ENTRE EM CONTATO</span>
                    <span>ENTRE EM CONTATO</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Componente off-canvas */}
      <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
    </>
  );
};

export default HeaderOne;