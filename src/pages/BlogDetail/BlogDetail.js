import React, { useEffect } from "react";
import "./BlogDetail.css";
import Header from "../../components/Header/Header";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import big_blog from "../../assets/big_blog.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogDetailRequest } from "../../redux/reduxActions/blogActions/BlogDetailAction";
import numeral from "numeral";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog } = useSelector((state) => state.blogDetail);

  useEffect(() => {
    dispatch(fetchBlogDetailRequest(id));
  }, [dispatch, id]);

  if (!blog) {
    return null;
  }

  return (
    <div className="blog-detail">
      <Header />
      <main className="blog-detail-parent">
        <div className="blog-detail-header-parent">
          <div className="blog-detail-breadcrumb-content">
            <div className="blog-detail-breadcrumb-title">
              <div className="blog-detail-breadcrumb-list">
                <Link to={PATH_NAME.HOME} className="blog-detail-home">
                  Home
                </Link>
                <div className="blog-detail-breadcrumb-items">/</div>
                <Link to={PATH_NAME.OUR_BLOG} className="blog-detail-our-blog">
                  Our Blog
                </Link>
                <div className="blog-detail-breadcrumb-items-1">/</div>
                <div className="blog-detail-single-blog-view">
                  Single Blog View
                </div>
              </div>
              <h3 className="blog-detail-heading-1">
                {blog.blog_detail.title}
              </h3>
            </div>
            <div className="blog-detail-back-to-blog-link">
              <MdKeyboardDoubleArrowLeft className="blog-detail-icon" />
              <Link to="/our-blog" className="blog-detail-back-to-blog">
                Back to Blog
              </Link>
            </div>
          </div>

          <div className="blog-detail-blog-content">
            <div className="blog-detail-blog-post">
              <div className="blog-detail-blog-image">
                <img
                  src={blog.blog_detail.thumbnails}
                  alt=""
                  className="blog-detail-big-blog"
                />
              </div>
              <div className="blog-detail-blog-meta">
                <div className="blog-detail-paragraph-text">
                  <div className="blog-detail-view-count">
                    <div className="blog-detail-views">
                      {numeral(blog.blog_detail.viewCount)
                        .format("0.a")
                        .replace(/m/g, "M")
                        .replace(/k/g, "K")}{" "}
                      views
                    </div>
                    <div className="blog-detail-point">•</div>
                  </div>
                  <div className="blog-detail-time-post">
                    {blog.blog_detail.createdAt}
                  </div>
                </div>
                <div className="blog-detail-content-container">
                  <p className="blog-detail-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur volutpat maximus pellentesque. Integer sem enim,
                    luctus at nibh at, condimentum sagittis sapien. Sed tempus
                    ipsum erat, sit amet efficitur velit interdum eu. Vestibulum
                    hendrerit id dolor eu scelerisque. Phasellus ex dui,
                    consequat nec feugiat eu, dapibus eget ante. Sed sodales
                    interdum dui, at euismod mi feugiat hendrerit. Suspendisse
                    auctor libero in tempor mollis. Nulla et dolor velit.
                    Aliquam sit amet luctus quam.
                  </p>
                </div>
                <div className="blog-detail-heading-2">
                  Why did you decide to teach on Haka?
                </div>
                <div className="blog-detail-content-container">
                  <p className="blog-detail-paragraph">
                    Nam a egestas libero, eget eleifend turpis. Sed id ipsum a
                    ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus,
                    libero sed posuere rhoncus, orci mi haka enim, at accumsan
                    eros massa lacinia mi. Nunc eget finibus felis, volutpat
                    malesuada sem. Aliquam ac nisl pellentesque, varius neque
                    sit amet, porttitor nunc. Nullam elit tellus, dapibus non
                    eleifend sed, hendrerit eget velit. Aliquam ut felis dictum,
                    tincidunt magna vitae, aliquam massa. In porttitor tristique
                    quam, non dignissim sapien pharetra ultrices. Cras non ante
                    non velit mollis mollis. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Quisque et bibendum urna, eget consequat sapien.
                    Integer sed condimentum nibh. Integer id neque tristique,
                    lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor
                    ac rutrum eget, volutpat a velit. Curabitur et enim quis
                    diam congue dictum et vitae dui. Nulla tortor orci, luctus a
                    pretium vel, ultrices porta nisl.
                  </p>
                </div>
                <div className="blog-detail-content-container">
                  <p className="blog-detail-paragraph">
                    Etiam lobortis dictum tincidunt. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Suspendisse ultricies
                    efficitur dui, suscipit tempus elit condimentum quis. Duis
                    sed vestibulum tortor, eget haka odio.
                  </p>
                </div>

                <div className="blog-detail-heading-2">
                  Did you have any prior on- or offline teaching experience
                  prior to publishing your first Haka course?
                </div>
                <div className="blog-detail-content-container">
                  <p className="blog-detail-paragraph">
                    Morbi lectus nunc, lacinia ut consequat a, semper vel erat.
                    Duis ut lacus nec dui sodales mattis. Mauris tellus dolor,
                    pulvinar sit amet pretium a, malesuada sed tellus. Aliquam
                    ultrices elit neque, quis lacinia ex porttitor non. Donec ac
                    iaculis turpis. Nulla lacinia enim quis orci aliquam, non
                    haka urna pellentesque. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Phasellus in mi a nisi auctor interdum. Vivamus faucibus
                    magna sed elit interdum consequat. Vestibulum eu tortor vel
                    ante feugiat faucibus quis et urna. Quisque interdum ac enim
                    eu tempus. Fusce viverra, lectus egestas tincidunt haka,
                    tortor sapien convallis metus, vitae auctor risus metus vel
                    nisi. Aenean dapibus bibendum mauris ut iaculis.
                  </p>
                </div>
                <div className="blog-detail-heading-2">
                  What are the most rewarding aspects of teaching on Haka?
                </div>

                <div className="blog-detail-content-container">
                  <p className="blog-detail-paragraph">
                    Quisque et bibendum urna, eget consequat sapien. Integer sed
                    condimentum nibh. Integer id neque tristique, lobortis massa
                    ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum
                    eget, volutpat a velit. Curabitur et enim quis diam congue
                    dictum et vitae dui. Nulla tortor orci, luctus a pretium
                    vel, ultrices porta nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-detail-footer-parent">
            <div className="blog-detail-footer-container-1">
              <MdKeyboardDoubleArrowLeft className="blog-detail-icon-prev" />
              <div className="blog-detail-footer-content-1">
                <h3 className="blog-detail-previous">Previous</h3>
                <p className="blog-detail-content-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="blog-detail-footer-container-2">
              <div className="blog-detail-footer-content-2">
                <h3 className="blog-detail-next">Next</h3>
                <p className="blog-detail-content-2">
                  Vestibulum vulputate nulla quis dignissim ultricies.
                </p>
              </div>
              <MdKeyboardDoubleArrowRight className="blog-detail-icon-next" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
