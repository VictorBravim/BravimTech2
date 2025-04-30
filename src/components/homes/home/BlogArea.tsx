import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading d-md-flex align-items-end justify-content-between">
                <h2 className="mb-4 mb-md-0">Blogs Recentes <br />e Notícias</h2>
                <a href="#" className="btn btn-primary"><span>TODOS OS BLOGS</span><span>TODOS OS BLOGS</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <img src="/assets/img/bg-img/17.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center">
                  <a href="#">26 de Março, 24</a>
                  <div className="dot"></div>
                  <a href="#">Branding</a>
                </div>
                <Link className="post-title" href="/blog-details">Fornecendo ideias brilhantes para o seu negócio</Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <img src="/assets/img/bg-img/18.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center">
                  <a href="#">26 de Março, 24</a>
                  <div className="dot"></div>
                  <a href="#">Branding</a>
                </div>
                <Link className="post-title" href="/blog-details">Tudo o que você precisa saber sobre retorno</Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card">
                <img src="/assets/img/bg-img/19.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center">
                  <a href="#">26 de Março, 24</a>
                  <div className="dot"></div>
                  <a href="#">Branding</a>
                </div>
                <Link className="post-title" href="/blog-details">Principais ferramentas para desenvolvimento web eficiente</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default BlogArea;