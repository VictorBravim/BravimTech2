import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                
                <h2 className="mb-4">Nosso Processo de Trabalho</h2>
                <p className="mb-5">Nosso objetivo é capacitar marcas de todos os tamanhos e setores com
                  estratégias baseadas em dados que geram resultados concretos. Acreditamos em criar
                  campanhas que não apenas impulsionam.</p>
                <a href="#" className="btn btn-primary"><span>LEIA MAIS</span><span>LEIA MAIS</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Labs de Fusão</h4>
                    <p className="mb-0">Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum.
                      Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Mídia Quirk</h4>
                    <p className="mb-0">Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum.
                      Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Pulso Spark</h4>
                    <p className="mb-0">Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum.
                      Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Web Nova</h4>
                    <p className="mb-0">Etiam imperdiet imperdiet orci. Curabitur nisi. Fusce fermentum.
                      Nunc nonummy metus. Phasellus orci ullamcorper ipsum rutrum nunc.</p>
                  </div>
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

export default WorkprocessArea;